import { Cookie } from 'aurelia-cookie';
import { HttpClient } from 'aurelia-http-client';
import { initialize } from 'aurelia-pal-browser';
import URI from 'urijs';


/**
 * Abstract base class for consumers
 * @abstract
 */
export class AbstractConsumer {
    /**
     * Configures Consumer instance
     * @param {String} endpoint Base endpoint for this API
     * @param {AbstractConsumerObject} objectClass Class to cast results to
     * @param {Object} [options] Additional configuration
     */
    constructor(endpoint, objectClass, options=null) {
        /** The Aurelia HttpClient instance to work with */
        this.client = new HttpClient();

        /** The value of the Content-Type header */
        this.contentType = 'application/json';

        /** The name for the CSRF cookie */
        this.csrfCookie = 'csrftoken';

        /** The name for the CSRF header */
        this.csrfHeader = 'X-CSRFToken';

        /** An optional object holding key value pairs of additional headers */
        this.defaultHeaders = {};

        /** An optional object holding key value pairs of additional query parameters */
        this.defaultParameters = {};

        /** The base API endpoint prefixed for all requests */
        this.endpoint = endpoint;

        /** The class to casts objects to */
        this.objectClass = objectClass;

        /** An optional dot separated path to the received objectClass' data */
        this.parserDataPath = '';

        /** Keys on this.objectClass that should not be passed to the API */
        this.unserializableFields = ['__consumer__'];

        if (options) {
            Object.assign(this, options);
        }

        initialize();
    }

    /**
     * Performs a DELETE request
     * @param {String} path Path on the endpoint
     * @param {Object} query Query parameters
     * @returns {Promise}
     */
    delete(path = '', query = {}) {
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('delete', uri, {});
    }

    /**
     * Performs a GET request
     * @param {String} path Path on the endpoint
     * @param {Object} query Query parameters
     * @returns {Promise}
     */
    get(path = '', query = {}) {
        let uri = URI.build({'path': path + '', 'query': URI.buildQuery(query)});
        return this.request('get', uri, {});
    }

    /**
     * Performs a PATCH request
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     * @returns {Promise}
     */
    patch(path = '', data = {}, query = {}) {
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('patch', uri, data);
    }

    /**
     * Performs a POST request
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     * @returns {Promise}
     */
    post(path = '', data = {}, query = {}) {
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('post', uri, data);
    }

    /**
     * Performs a PUT request
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     * @returns {Promise}
     */
    put(path = '', data = {}, query = {}) {
        let uri = URI.build({'path': path, 'query': URI.buildQuery(query)});
        return this.request('put', uri, data);
    }

    /**
     * Performs a request
     * @param {String} method The method to use
     * @param {String} path Path on the endpoint
     * @param {Object} data Data payload
     * @returns {Promise}
     */
    request(method, path, data) {
        let clientPromise,
            consumerPromise;

        // Set base url
        this.client.configure(x => {
            x.withBaseUrl(this.endpoint);
        });

        // Set content type
        this.addHeader('Content-Type', this.contentType);

        // Set csrf token if needed
        if (!this.isSafeMethod(method) && this.csrfCookie && this.csrfHeader) {
            this.addCsrfToken();
        }

        // Set default headers
        for (let header of Object.keys(this.defaultHeaders)) {
            this.addHeader(header, this.defaultHeaders[header]);
        }

        // Build query
        let uri = URI(path);
        uri.addQuery(this.defaultParameters);

        // Serialize data
        data = this.serialize(data);

        // Return cancellable promise
        clientPromise = this.client[method](uri.toString(), data);
        consumerPromise = clientPromise
                .then(this.requestSuccess.bind(this))
                .catch(this.requestFailed.bind(this));

        consumerPromise.abort = clientPromise.abort;
        consumerPromise.cancel = clientPromise.cancel;
        return consumerPromise;
    }

    /**
     * Returns whether the request is safe (should not mutate any data)
     * @returns {Boolean}
     */
    isSafeMethod(method) {
        let saveMethods = ['GET', 'HEAD', 'OPTIONS', 'TRACE'];
        return saveMethods.indexOf(method.toUpperCase()) > -1;
    }

    /**
     * Looks for cookie this.csrfCookie and passes it's value to this.csrfHeader
     */
    addCsrfToken() {
        let csrfToken = this.getCookie(this.csrfCookie);
        this.defaultHeaders[this.csrfHeader] = csrfToken;
        this.addHeader(this.csrfHeader, csrfToken);
    }

    /**
     * Wrapper for Cookie.get
     * @param {String} name
     * @returns {String}
     */
    getCookie(name) {
        return Cookie.get(name);
    }

    /**
     * Adds a header to all future request
     * @param {String} name
     * @param {String} value
     */
    addHeader(name, value) {
        this.client.configure(x => {
            x.withHeader(name, value);
        });
    }

    /**
     * Serializes data
     * Returns data if data is not an object
     * Excludes fields marked in this.unserializableFields
     * @param {AbstractConsumerObject|*} data
     * @returns {*}
     */
    serialize(data) {
        // Returns data if data is not an object
        if (!this.isObject(data)) {
            return data;
        }

        let object = {};

        // Excludes fields marked in this.unserializableFields
        for (let key of Object.keys(data)) {
            if (!this.unserializableFields.indexOf(key) > -1) {
                object[key] = data[key];
            }
        }
        return object;
    }

    /**
     * Returns whether object is an object
     * @param {*} object
     * @returns {Boolean}
     */
    isObject(object) {
        return Object.prototype.toString.call(object) === '[object Object]';
    }

    /**
     * Callback for request
     * Gets called if request resolve successfully
     * @param {HttpResponseMessage} data
     * @returns {AbstractConsumerObject|AbstractConsumerObject[]}
     */
    requestSuccess(data) {
        let result = this.parse(data.response);
        return Promise.resolve(result);
    }

    /**
     * Parses JSON string to a single or list of AbstractConsumerObject instance(s)
     * @param {String} data
     * @returns {AbstractConsumerObject|AbstractConsumerObject[]|undefined}
     */
    parse(json) {
        if (!json) {
            return;
        }

        let object = JSON.parse(json);

        if (this.parserDataPath.length) {
            let parts = this.parserDataPath.split('.');

            parts.map(part => {
                object = object[part];
            });
        }

        if (Array.isArray(object)) {
            return this.parseList(object);
        }
        return this.parseScalar(object);
    }

    /**
     * Parses anonymous objects to a list of AbstractConsumerObjects
     * Gets called when result JSON.parse is an array
     * @param {Object[]} array
     * @returns {AbstractConsumerObject[]}
     */
    parseList(array) {
        let list = [];

        for (let object of array) {
            list.push(this.parseEntity(object));
        }
        return list;
    }

    /**
     * Parses anonymous object to a single AbstractConsumerObject
     * Gets called when result JSON.parse is not an array
     * @param {Object} object
     * @returns {AbstractConsumerObject}
     */
    parseScalar(object) {
        return this.parseEntity(object);
    }

    /**
     * Parses anonymous object to a single AbstractConsumerObject
     * @param {Object} object
     * @returns {AbstractConsumerObject}
     */
    parseEntity(object) {
        return new this.objectClass(object, this);
    }

    /**
     * Callback for request
     * Gets called if request doesnt resolve successfully
     * @param {HttpResponseMessage} data
     * @returns {HttpResponseMessage} data
     */
    requestFailed(data) {
        return Promise.reject(data);
    }
}

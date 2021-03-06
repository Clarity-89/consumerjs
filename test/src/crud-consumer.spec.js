import { CrudConsumer } from '../../src/crud-consumer';
import {CrudConsumerObject} from '../../src/crud-consumer-object';


describe('CrudConsumer', function() {
    beforeEach(function() {
        jasmine.Ajax.install();

        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/')
          .andReturn({ status: 201 });
        jasmine.Ajax
          .stubRequest('http://example.com/api/posts/1')
          .andReturn({ status: 200 });
    });

    afterEach(function() {
        jasmine.Ajax.uninstall();
    });

    it('should set objectClass to CrudConsumerObject by default', () => {
        let consumer = new CrudConsumer();
        expect(consumer.objectClass).toBe(CrudConsumerObject);;
    });

    it('should support create', function(done) {
        class PostConsumer extends CrudConsumer {}

        let consumer = new PostConsumer();
        consumer.endpoint = 'http://example.com/api/posts/';

        consumer.create({ title: 'foo', body: 'bar' })
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.url).toBe('http://example.com/api/posts/');
                expect(request.status).toBe(201);

                done();
            });
    });

    it('should support read', function(done) {
        class PostConsumer extends CrudConsumer {}

        let consumer = new PostConsumer();
        consumer.endpoint = 'http://example.com/api/posts/';

        consumer.read(1)
            .then(() => {
                let request = jasmine.Ajax.requests.mostRecent();
                expect(request.url).toBe('http://example.com/api/posts/1');
                expect(request.status).toBe(200);

                done();
            });
    });
});

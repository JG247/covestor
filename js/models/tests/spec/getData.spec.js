/**
 * Created by jgpro_000 on 06/09/14.
 */
define([
], function() {
    describe("A testing suite for ajax call", function() {
        var data = {James: "1", Mary: "2"};
        it("should not be null", function() {
            expect(data).not.toBe(null);
        });
        it("should be defined", function() {
            expect(data).toBeDefined();
        });
    });
});
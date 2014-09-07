/**
 * Created by jgpro_000 on 07/09/14.
 */
define([
], function() {
    describe("A testing suite for local storage", function() {
        it("should not be undefined", function() {
            expect(localStorage).not.toBeUndefined();
        });
        it("should not be null", function() {
            expect(localStorage).not.toBe(null);
        });
        it("should be defined", function() {
            expect(localStorage).toBeDefined();
        });
    });
});
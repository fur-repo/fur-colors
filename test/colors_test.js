/**
 * Test case for colors.
 * Runs with nodeunit.
 */

var colors = require('../lib/colors.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Colors'] = function (test) {
    Object.keys(colors).forEach(function (key) {
        test.ok(colors[key]());
    });
    test.done();
};


(function() {
  'use strict';

  describe('flatten', function() {

    it('should flatten nested arrays', function() {
      var array = [1, [2], [3, [[[4]]]]];

      expect(flatten(array)).to.eql([1,2,3,4]);
    });

    it('should flatten nested arrays including null values', function() {
      var array = [0, 2, [[2, 3], 8, 100, null, [[null]]], -2];

      expect(flatten(array)).to.eql([0, 2, 2, 3, 8, 100, -2]);
    });

    it('should flatten nested empty arrays', function() {
      var array = [[[]], [[], []], [[]]];

      expect(flatten(array)).to.eql([]);
    });

  });
}());

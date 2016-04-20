(function() {
  'use strict';

  describe('flatten', function() {

    it('can flatten nested arrays', function() {
      var array = [1, [2], [3, [[[4]]]]];

      expect(flatten(array)).to.eql([1,2,3,4]);
    });
  });
}());

var flatten = function(nestedArray, result) {

    // initialize result as empty array when first called
    result = result || [];

    // loop through array
    for(var i = 0; i < nestedArray.length; i++) {
      var currentItem = nestedArray[i];
      // if current array isn't a nested array push it into the result array
      if (!Array.isArray(currentItem)) {
        result.push(currentItem);
      // otherwise, call the function recursively on the nested array
      } else if(Array.isArray(currentItem)) {
        flatten(currentItem, result);
      };
    }

    return result;

};
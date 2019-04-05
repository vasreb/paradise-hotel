"use strict";

describe("addClass", function() {
  it("если такая строка есть в списке она не добавляется", function() {
  	var originalClassLength = obj.length;
  	var existingStrings = obj.className.split(' ');
  	for (var i = 0; i < existingStrings.length; i++) {
  		addClass(obj, existingStrings[i]);
	};
	assert.notEqual(originalClassLength, obj.className.length);
  });
  it("добавляет в список в объекте obj строку cls", function() {
  	var originalClassNameString = obj.className;
  	var example = originalClassNameString + " " + 'cls';
  	addClass(obj, 'cls');
  	assert.equal(obj.className, example);
  });
});


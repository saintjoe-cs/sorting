load("sortingCode.js");

var numElements = 100;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
print();
mynums.shellSort2();
print();
print(mynums.toString());

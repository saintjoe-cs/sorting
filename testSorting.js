load("sortingCode.js");

var algorithm = arguments[0];
var numElements = 100;
var mynums = new CArray(numElements);
mynums.setData();
print('Executing: ' + algorithm);
print(mynums.toString());
print();
switch(algorithm) {
  case 'bubble':
    mynums.bubbleSort();
    break;
  case 'shell': 
    mynums.shellSort1();
    break;
  case 'insertion':
    mynums.insertionSort();
    break;
  case 'selection':
    mynums.selectionSort();
    break;
  }
print();
print(mynums.toString());
print();

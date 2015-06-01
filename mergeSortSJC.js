function mergeSort() {
  if (this.dataStore.length < 2) {
    return;
    }
  var step = 1;
  var left, right;
  while (step < this.dataStore.length) {
    left = 0;
    right = step;
    while (right + step <= this.dataStore.length) {
print('Calling upper merge with: ' +  left, left+step, right, right+step);
      mergeArrays(this.dataStore, left, left+step, right, right+step);
      left = right + step;
      right = left + step;
      }
    if (right < this.dataStore.length) {
print('Calling lower merge with: ' +  left, left+step, right, this.dataStore.length + '----->');
      mergeArrays(this.dataStore, left, left+step, right, this.dataStore.length);
      }
  step *= 2;
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  var rightArr = new Array(stopRight - startRight + 1);
  var leftArr = new Array(stopLeft - startLeft + 1);
  k = startRight;
  for (var i = 0; i < (rightArr.length-1); ++i) {
    rightArr[i] = arr[k];
    ++k;
    }
  k = startLeft;
  for (var i = 0; i < (leftArr.length-1); ++i) {
    leftArr[i] = arr[k];
    ++k;
    }
  rightArr[rightArr.length-1] = Infinity; // a sentinel value
  leftArr[leftArr.length-1] = Infinity; // a sentinel value
  var m = 0;
  var n = 0;
  for (var k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
      }
    else {
      arr[k] = rightArr[n];
      n++;
    }
  }
  print("left array - ", leftArr);
  print("right array - ", rightArr);
}


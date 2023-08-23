/*
    -Write a function called binarySearch that accepts a rorted arraya nad a value.
    -Create a left pointer at the startof the array, and a right pointer at the end of the array
    -While the left pointer comes before the right pointer:
     +create a pointer in the middle
     +If you find the value you want, return the index
     +If the value is too small, move the left pointer up
     +If the value is too large, move the right pointer down
    -If you never find the value, return -1 
*/

// my solution
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

// colt steele solution
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -10));
console.log(binarySearch(["a", "b", "c", "d", "e", "f"], "f"));

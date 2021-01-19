// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  console.log("from chunk:::");
  // let arr = [];
  // let start = 0;
  // let end = size;
  // while (start < array.length) {
  //   arr.push(array.slice(start, end));
  //   start = end;
  //   end += size;
  // }
  // return arr;

  let arr = [];
  for (let element of array) {
    let last = arr[arr.length - 1];
    if (!last || last.length == size) {
      arr.push([element]);
    } else {
      last.push(element);
    }
  }
}

module.exports = chunk;

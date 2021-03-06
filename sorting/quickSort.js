
////////////////////////////////////////////////////////////////////////////////////////////
// quickSort implementation using Arrays with pivot as first value                       //
////////////////////////////////////////////////////////////////////////////////////////////

var quickSort = function(arr) {
  if (arr.length === 0) {
    return [];	
  }	
  let left = []
    , right = []
    , pivot = arr[0];
  for (let i = 1, len = arr.length; i < len; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

quickSort([6, 23, 2, 1, 4, -10]);
// => [ -10, 1, 2, 4, 6, 23 ]

////////////////////////////////////////////////////////////////////////////////////////////
// quickSort with pivot as the middle number - better if starting with almost sorted list //
////////////////////////////////////////////////////////////////////////////////////////////

// var quickSort = function(arr) {
//   if (arr.length === 0) {
//     return [];	
//   }
//   let pivot = arr.splice(Math.floor(arr.length/2), 1), 
//       left = [], 
//       right = [];
 
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
//   }
  
//   return quickSort(left).concat(pivot, quickSort(right));
// };

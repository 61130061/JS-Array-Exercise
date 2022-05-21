function forEach(array, cb) {
   for (let i=0; i<array.length; i++) {
      cb(array[i], i, array);
   }
}

function map(array, cb) {
   let newArr = array;
   for (let i=0; i<array.length; i++) {
      newArr[i] = cb(array[i], i, array);
   }
   return newArr;
}

function filter(array, cb) {
   let filter = [];
   for (let i=0; i<array.length; i++) {
      if (cb(array[i], i, array)) {
         filter.push(array[i]);
      }
   }
   return filter;
}

function reduce(array, cb, initialValue) {
   let result = initialValue || null;
   for (let i=0; i<array.length; i++) {
      if (!result && i==0) {
         result = array[0];
      } else {
         result = cb(result, array[i], i, array);
      }
   }
   return result;
}

function some(array, cb) {
   for (let i=0; i<array.length; i++) {
      if (cb(array[i], i, array)) {
         return true;
      }
   }
   return false;
}

function every(array, cb) {
   for (let i=0; i<array.length; i++) {
      if (!cb(array[i], i, array)) {
         return false;
      }
   }
   return true;
}

function flat(array, depth = 1) {
}

function find(array, cb) {
   for (let i=0; i<array.length; i++) {
      if (cb(array[i], i, array)) {
         return array[i];
      }
   }
   return undefined;
}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
  flat,
  find,
}

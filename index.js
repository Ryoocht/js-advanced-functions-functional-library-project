const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback){
      for (const element in collection) {
        callback(collection[element]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArr = [];
      for (let element in collection){
          newArr.push(callback(collection[element]));
      };
      return newArr;
    },

    reduce: function(collection, callback, acc) {
      let newArr = Array.isArray(collection) ? [...collection] : Object.values(collection);
      if (!acc){
        acc = newArr.shift()
      }
      for (let i = 0; i < newArr.length; i++){
        acc = callback(acc, newArr[i], newArr);
      }

      return acc
    },

    find: function(collection, predicate) {
      for (const element of collection) {
        if(predicate(element)){
          return element;
        }
      }
    },

    filter: function(collection, predicate){
      let newArr = [];
      for (const element of collection) {
        if(predicate(element)){
          newArr.push(element);
        }
      }
      return newArr;

    },

    size: function(collection){
      let count = 0;
      for (const key in collection) {
        count++;
      }
      return count;
    },

    first: function(array, length){
      if(!length){
        return array[0];
      } else {
        let newArr = [];
        for (let i = 0; i < length; i++) {
          newArr.push(array[i]);
        }
        return newArr;
      }
    },

    last: function(array, length){
      if(!length){
        return array[array.length-1];
      } else {
        let newArr = [];
        for (let i = 1; i <= length; i++) {
          newArr = array.slice(-i);
        }
        return newArr;
      }
    },

    compact: function(array){
      const falsyvalues = new Set([false, null, 0, "", undefined, NaN]);
      return array.filter(element => !falsyvalues.has(element));
    },

    sortBy: function(array, callback){
      let newArr = [...array];
      return newArr.sort(function(a,b){
        return callback(a) - callback(b);
      })
    },

    unpack: function(receiver, array) {
      for (let value of array) {
          receiver.push(value);
      }
    },

    flatten: function(array, shallow, newArr=[]) {
      if (!Array.isArray(array)) {
        return newArr.push(array)
      }

      if (shallow) {
        for (let val of array){
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
        }
      } else {
          for (let val of array) {
            this.flatten(val, false, newArr);
          }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
          if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
        if (sorted) {
            return fi.uniqSorted(collection, iteratee)
        } else if (!iteratee) {
            return Array.from(new Set(collection))
        } else {
            const modifiedVals = new Set()
            const uniqVals = new Set()
            for (let val of collection) {
                const moddedVal = iteratee(val)
                if (!modifiedVals.has(moddedVal)) {
                    modifiedVals.add(moddedVal)
                    uniqVals.add(val)
                }
            }
            return Array.from(uniqVals)
        }
    },    

    keys: function(obj) {
      // Using for loop
      const keys = []

      for (let key in obj){
          keys.push(key)
      }

      return keys
    },

    values: function(obj) {
        const values = []
        for (let key in obj){
            values.push(obj[key])
        }
        return values
    },

    functions: function(object) {
        const functionNames = []
        for (let key in object) {
            if (typeof object[key] === "function"){
                functionNames.push(key)
            }
        }
        return functionNames.sort()
    }
  }
})()

fi.libraryMethod()

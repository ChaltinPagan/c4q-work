let x = [9, 6, 3, 2, 0, 4, 3];
let y = [1, 'kevin', 2];

function bubbleSort(arr) {
    for (let o = 0; o < arr.length; o++) {
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}

function bubbleSortFE(arr) {
    arr.forEach( () => {
        arr.forEach( (el,i) => {
            if (arr[i+1] !== undefined && arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        })
    })
    return arr;
}

let a = bubbleSort(x);
let b = bubbleSortFE(x);

// console.log(a);
// console.log(b);

function swap(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSortO(array) {
    var length = array.length;
    var cost = 0;
    for (var i = 0; i < length; i++) { //{1}
        cost++;
        for (var j = 0; j < length - 1; j++) { //{2}
            cost++;
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
    console.log('cost for bubbleSort with input size ' + length + ' is ' + cost);
}

console.log(bubbleSortO([9, 6, 3, 2, 0, 4, 3]));
let x = [9, 6, 3, 2, 0, 4, 3];

function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var temp = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > temp; j--) {
          arr[j+1] = arr[j];
        }
        arr[j+1] = temp;
    }
    return arr;
}

function insertionSortTwo(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (;;) {
            let temp = arr[j];
            arr[j+1] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}

let a = insertionSort(x);
let b = insertionSortTwo(x);
console.log(a);
// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length-i; j++) {
        if (arr[j]>arr[j+1]) {
            const swap=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=swap
        }
    }
}
return arr
}

function selectionSort(arr) {
for (let i = 0; i < arr.length-1; i++) {
    let indexOfMin=i;
    for (let j = i+1; j < arr.length; j++) {
       if (arr[indexOfMin]>arr[j]) {
        indexOfMin=j
       }
    }
    if (i !== indexOfMin) {
        const swap=arr[i];
        arr[i]=arr[indexOfMin];
        arr[indexOfMin]=swap
    }
}
console.log("arr:::",arr)
return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

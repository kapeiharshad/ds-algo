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

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

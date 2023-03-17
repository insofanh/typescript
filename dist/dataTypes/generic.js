// // Generics
// const numArray = [1,2,3,5,8,13] //Fibonacci
// const numArray2 = ["Thu", "Hoàng", "Đức Anh"]
// // const result2 = numArray.map(item => item * item)
// // function we17317_map(arr: number[], callback: (item: number) => number): number[] {
// //     const temp = []
// //     for(let i = 0; i < arr.length; i++) {
// //         const newItem = callback(arr[i])
// //         temp.push(newItem)
// //     }
// //     return temp;
// // }
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j].compareTo(arr[j + 1]) > 0) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var NumberWrapper = /** @class */ (function () {
    function NumberWrapper(value) {
        this.value = value;
    }
    NumberWrapper.prototype.compareTo = function (other) {
        return this.value - other.value;
    };
    return NumberWrapper;
}());
var arr1 = [new NumberWrapper(9), new NumberWrapper(4), new NumberWrapper(7), new NumberWrapper(2)];
console.log(bubbleSort(arr1));
// CACH KHAC
var numbers = [1, 4, 5, 8, 9];
var results = SortData(numbers);
function SortData(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(results);

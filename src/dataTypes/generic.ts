// BAI TAP: VIET LAI HAM SORT BANG TYPESCRIPT + GENERTIC MA KHONG DUNG ARRAY.SORT
interface Comparable<T> {
  compareTo(other: T): number;
}

function bubbleSort<T extends Comparable<T>>(arr: T[]): T[] {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j].compareTo(arr[j + 1]) > 0) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

class NumberWrapper implements Comparable<NumberWrapper> {
  constructor(public value: number) {}

  compareTo(other: NumberWrapper): number {
    return this.value -  other.value;
  }
}

const arr1: NumberWrapper[] = [new NumberWrapper(9), new NumberWrapper(4), new NumberWrapper(7), new NumberWrapper(2)];
console.log(bubbleSort(arr1));



// CACH KHAC
const numbers = [1, 4, 5, 8, 9];
const results = SortData(numbers)
function SortData<T>(arr: T[]): T[] {
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(results);












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

// // Generic
// function showStringData(a: string): string {
//     return a
// }

// function showNumberData(a: number): number {
//     return a
// }

// function showData<T>(a: T): T {
//     return a
// }

// // showData<boolean>("string")

// function we17317_map<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i], i)
//         temp.push(newItem)
//     }
//     return temp
// }

// const result2 = we17317_map(numArray2, (item, index) => {
//     return item + "-we17317" + " " + index
// })

// // console.log(result2);


// const numArray3 = [13,5,8,2,3,1] 

// numArray3.sort((a, b) => {
//     // return a - b
//     return a - b
// })

// // console.log(numArray3);
// function selectionSort(arr) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }

// selectionSort(numArray3)
// console.log(numArray3);






//1.Function
function demoFunc() {
    //console.log("");
    return;
}
//never
function neverFunc() {
    var error = new Error("Co loi xay ra");
    throw error;
}
var result = demoFunc();
//console.log(result);
//2.Prammeter
var showInfo = function (firstNam, lastName, midName) {
    return "Ten sinh vien: " + firstNam + "" + midName + "" + lastName;
};
//Hoisting
//console.log(sum(10,20));
function sum(a, b) {
    return a + b;
}
;
//3.Opional
//console.log(showInfo("Nguyen", "Bao","Bang"));
//4. Function decleration
var func2 = function () {
};
var func = function () {
};
//5.Callback
function we17317_map(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i]);
        temp.push(newItem);
    }
    return temp;
}
var numberArr = ["string", "string1", "string2"];
var result1 = we17317_map(numberArr, function (item) {
    return item * 3;
});
console.log(result1);
//6. Rest Parameter
var showClass = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    console.log("sinh vien ".concat(name, " hoc lop ").concat(classes.join(",")));
};
console.log("Van Anh", "NodeJs", "Typescript");

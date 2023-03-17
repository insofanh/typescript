//Array
var arr = ["a", "1", "false"];
//Nested Array
var arr2 = [["a", "b", "c"], ["d", "e", "f"]];
var arr3 = ["d", "e", "f"];
//Tuple
var arr4 = ["d", 1, true];
//Enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFILLED"] = 2] = "FULFILLED";
})(STATUS || (STATUS = {}));
var trangthai = STATUS.FULFILLED;
//  console.log(trangthai);
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CLIENT_ERROR"] = 201] = "CLIENT_ERROR";
    CODE[CODE["SERVER_ERROR"] = 202] = "SERVER_ERROR";
})(CODE || (CODE = {}));

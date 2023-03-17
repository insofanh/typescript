// Object
var obj = {
    name: "Bình",
    age: 20,
    hometown: "Hà Nội"
};
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
})(ROLE || (ROLE = {}));

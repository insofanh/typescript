//1.Function
function demoFunc(){
    //console.log("");
    return;
    
}

//never
function neverFunc(){
    var error = new Error("Co loi xay ra");
    throw error;
}

var result = demoFunc();
//console.log(result);

//2.Prammeter
var showInfo = function(firstNam, lastName, midName){
    return "Ten sinh vien: " +firstNam +"" +midName+""+lastName;
};


//Hoisting
//console.log(sum(10,20));
function sum(a,b){
    return a+b;
};

//3.Opional
//console.log(showInfo("Nguyen", "Bao","Bang"));

//4. Function decleration
var func2 = function(){

};

var func = function(){

};

//5.Callback
function we17317_map(arr: any[], callback?: (item:any)=>any){
    const temp = []
    for(let i = 0; i<arr.length; i++){
        const newItem = callback(arr[i])
        temp.push(newItem)
    }
    return temp
}

const numberArr =[ "string", "string1", "string2"];
const result1 = we17317_map(numberArr,(item)=>{
    return item *3;
})
console.log(result1);

//6. Rest Parameter
const showClass= function(name: string, ...classes: string[]){
    console.log(`sinh vien ${name} hoc lop ${classes.join(",")}`);
    
}
console.log("Van Anh","NodeJs","Typescript");


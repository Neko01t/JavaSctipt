//#Their are 7 primiative Data Types

//1 - Numbers
let Num = 101 //any number
let deciNum = 3.3 // decimal numbers
let negNum = -72 // negative numbers
let infiNum = Infinity // uncontable infinty
let NonNum = NaN //not a number but saved as number data type

//2 - strings
let Str1 = 'hi Harry' //single quotes to store value 
let str2 = "You are" //double quotes to store value
let str3 = ```
A  wizard
``` // triple backticks to store mutiple lines in varbale (you inject variables in stirngs too when u backticks using ${Variable})
let str4 = `${Num} dumb ways to become wizard` // output - 101 dumb ways to become wizard


//3 - boolean
let Btrue = true; //logical operations True
let bfalse = false; //logical opreations False

//4 - Undefined
let notYetDefiend; //no value stored hence not defiend

//- 5 null
let NoValue = null //intentally goveing no calue 

//6 - Symbol
let uniqueKey = Symbol('uniquekey')

//7 - BigInt
//it is same as number but it hold very big number and high pressions
let ridiculously_Big_Num = 511651651684611613553151531651511546854641860515165165n  //big int nums have n in last for more info go to MDN 

//------------------------------------------------------------------------------------------------454

//Thier are 10 Non-Primitive data types

//1- Objects {}
let Genus_Homo = {
    neanderthal: "extinct",
    erectus: "extinct",
    sapiens: "alive"
} // it have key value pair in here key is "sapiens" and "alive" is value 
//how to acess it
console.log(Genus_Homo.erectus) //this give an output of "extinct" its valus we use "." to to get value from giving key 

//2-  array []
let DArray = [1, 2, "work", null, undefined,] //you can make array of anything even of objects
//            0, 1,  3    , 4   , 5        indexes of array starts 
// how ro access it 
console.log(DArray[3]) // out puts the third key value
// // //functions



// // function num(a)
// // {
// //     return a*a
// // }

// // //functions expresss

// // var a=function num(a)
// // {
// //     return a*a*a
// // }
// // // console.log(a(5));

// // //fist class functions

// // function display(a,v)
// // {
// //     return a(v)*v;
// // }
// // console.log(display(num,3))

// // //IIFI

// // // (function number(a)
// // // {
// // //   console.log(a*a) 
// // // })(5);

// // //scope
// // for(var i=0; i<5; i++)
// // {
// //     setTimeout(function()
// //     {
// //         console.log(i)
// //     },i*1000)
// // }
// // //5 5 5 5 

// // for(let i=0; i<5; i++)
// // {
// //     setTimeout(function()
// //     {
// //         console.log(i)
// //     },i*1000)
// // }
// // // 0 1 2 3 4 




// // //Hoisting


// // call()
// // function call()
// // {
// //     console.log("called")
// // }
// // //called

// // console.log(am)
// // var am=0
// // //undefined

// // var x=4;
// // var func=function()
// // {
  
// //     console.log(x)
// //     var x=0;
// // }
// // //undefined

// // //params vs argms

// // function multi(...arr)//params 
// // {
// //     return arr[0]*arr[1] 
// // }
// // var arr=[5,6]
// // console.log(multi(...arr))//arguments


// // //callback

// // //arrow
 
// // const add=(a,b)=>
// // {
// //     console.log(a,b)
// // }
// // add(2,3)


// function add()
// {
//     console.log(arguments)
// }
// add(2,4)


// var a='srikanth';//global
// function add()
// {
// //local
// console.log(a)
// }
// add()
//global



// function add()
// {
//     var a='srikanth';

// }
// console.log(a)//undefined
// add()

//closure
function add()
{
    var a='srikanth';
    function name(params) {
        console.log(params,a)
        
    }
    return name
 
}
add()(2);
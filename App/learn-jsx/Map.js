
// let arr1 = [100, 200, 300]
// arr1.map(function(item,home,array) {
//   //  console.log(array[home])
//  //   console.log(item,home,array)
// })

//两个参数，但是有return的
let arr2 = [10, 20, 30]
let arr1 = [100, 200, 300]
//第三个参数实际上是个 形参， 实际上就是把arr2传递进去了，
//默认map 不会改变arr2，但是传递了第三个参数，就可以改了!!!!!!
let res=arr2.map(function(item,index,arr1) {
    console.log(item,index,arr1)
    arr1[index] = 100
    return 15+item ;
})
console.log(res)
console.log(arr2)
console.log(arr1)
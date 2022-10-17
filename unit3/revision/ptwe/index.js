// let array=[1,2,3,4,5]
// console.log(array)


let n=5;
let newarray=new Array(n)
newarray[0]=1;
newarray[1]=1;
newarray[2]=6;
newarray[3]=8;
newarray[4]=5;

Array.prototype.msg=function(){
    console.log("Hii Everyone")
}
// console.log(newarray)
newarray.msg()

Array.prototype.send=function(num){
  let index=this.length;
  this[index]=num
}

newarray.send(155)
newarray.send(5)
console.log(newarray)
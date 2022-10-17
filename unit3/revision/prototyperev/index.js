// let cat={
//     family:"Cat",
//     leg:4,
//     tail:true,
// }

// let lion=Object.create( cat)
// lion.speed=50;
// lion.color="Yellow-Brown"
// console.log(lion)
// let tiger=Object.create(cat)
// tiger.speed=50;
// tiger.color="Spotted"
// console.log("tiger",tiger)

// // 
function nikeproduct(n,p,r){
  this.name=n;
  this.price=p;
  this.rating=r;
}

nikeproduct.prototype.brand="Nike";
nikeproduct.prototype.location="Kolkota"
let a1=new nikeproduct("shoe",3000,4)
console.log(a1)
   
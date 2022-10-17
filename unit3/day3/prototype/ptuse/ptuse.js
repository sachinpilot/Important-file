function nikeproduct(n,p){
    this.name=n;
    this.price=p
    this.sell=function(){
        let x=this.price;
        let dis=x*20/100;
        console.log("20% discount")
    }
}
nikeproduct.prototype.brand="Puma";
nikeproduct.prototype.location="Mumbai"
let ans=new nikeproduct("shoe",5000) 
let ans2=new nikeproduct("shoe",5000) 
let ans3=new nikeproduct("shoe",5000) 
let ans4=new nikeproduct("shoe",5000) 


console.log(ans)
console.log("ans2",ans2)
console.log("ans3",ans3)
console.log("ans4",ans4)
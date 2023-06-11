class User{
    name=""
    age=""
    addname(a:string,b:number){
        console.log(a+b);
         return a+b;
    }
    removename(a,b){
     this. name=a;
      this.age=b;
    }
}
let user=new User();
user.addname("abikra",12)
user.removename("hello","heooo")



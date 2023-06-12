class pra{
    addname(user:string){
     return `${user} added here`
}
}
let par=new pra();
par.addname("bikram")
class ch extends pra{
    name(user:string ){
        return `${user} is again added from child class`
    }
}
let us2=new ch();

console.log(us2.addname("hello"));


function literal(a:number|string, b:number|string) {
   if(typeof a==="number" && b==="number"){
    return a+b;
   }
   else{
    return a.toString() + b.toString();
   }
   
}
//union
literal(10,30)
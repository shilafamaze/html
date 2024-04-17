
    
   const   a=parseInt(prompt("Enter first  number: "))
   const   operator=prompt("Enter operator:")
   const   b=parseInt(prompt("Enter second number:"))
   
   switch(operator){
    case "+" :alert(a+b)
    break;
    case "-" :alert(a-b)
    break;
    case "*" : alert(a*b)
    break;
    default: alert("unknown operator!!")

   }

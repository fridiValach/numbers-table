
import React, {useState} from 'react'


const Number = (props) => {
    const [number, setNumber]=useState(props.num)

    function zoogi(number){
        if( isPrime(number)){
           return "red"
         }
          else if(number%2==0){
          return "green"  
         }
       
       else {
         return "yellow"
       
       }
       }
       function isPrime(num) {
         if(num==0||num==1){return false}
         for(var i = 2; i < num; i++)
           if(num % i === 0) {return false};
           return true;
       }
    
    
    function setState (){setNumber(number+parseInt(Math.random()*31))}
    return (
        <div className={zoogi(number) +" ko"}>
         <p onClick={setState}>{number}</p> 
        </div>
    )
}
export  {Number}




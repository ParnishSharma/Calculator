let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
          buttonText = e.target.innerText;
          console.log('button text is ', buttonText)
          if(buttonText=='x'){
              buttonText = '*';
              screenValue += buttonText;
              screen.value = screenValue;
        }
        
        else if(buttonText== 'pow'){
            q= Math.pow(screenValue,2);
            screen.value = q;
        }
        else if(buttonText== 'sqrt'){
            q= Math.sqrt(screenValue,2);
            screen.value = q;
        }
          
          else if (buttonText =='C'){
            screenValue = " ";
           screen.value = screenValue ;

          }
          else if (buttonText =='='){
              screen.value = eval(screenValue)
          }
              else if (buttonText=='DEL'){
                 buttonText -="";
                 let number = screenValue
                 let len = number.length-1;
                 let newnumber = number.slice(0,len)
                 screenValue = newnumber;
                 screen.value = screenValue;

              }

        
        else{
            screenValue += buttonText;
            screen.value = screenValue;
       }
    
    })

}

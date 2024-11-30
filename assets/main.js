var number_input=document.getElementById("calc_value")
var display=document.getElementById("calc_display")

function button_value(number_input){
  
    display.value+=number_input.value;
}
    
function button_delete(number_input){
  
   
    display.value=display.value.slice(0,-1);
}
    
function button_clear(number_input){
  
   
    display.value=display.value.slice(0,0);
}
    
    
function button_equal(number_input){
  
   
    display.value=eval(display.value)
}
    




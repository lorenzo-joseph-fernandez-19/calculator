function insert(num){
   return document.grid.display.value =  document.grid.display.value+num
}

function equal(){
    let exp =  document.grid.display.value
    if(exp){
      return document.grid.display.value = eval(exp)
    }
}

function clean(){
  return document.grid.display.value = ""

}

function back(){
    let exp =  document.grid.display.value
    return document.grid.display.value = exp.substring(0,exp.length-1)
}

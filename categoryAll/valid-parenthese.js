let isValid = (braces) =>{
  braces = braces.split('')
  open = ['[','(','{']
  close = [']',')','}']
  array = Array()
  flag = true
  for(i of braces){
    if(open.includes(i)){
      array.push(i)
    }else{
      index = close.indexOf(i)
      if(open[index]===array.slice(-1).join('')){
        array.pop()
      }else{
        flag = false
        break
      }
    }
  }
  console.log(braces)
  if(flag===true && array.length===0){
    return true
  }
  return false
}
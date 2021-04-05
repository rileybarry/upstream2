//listNames.pop or push??

let listNames = [] 
/*
newList.onshow=function(){
    drpLists.clear()   
  for (i = 0; i <= listNames.length - 1; i++)
      drpLists.addItem(listNames[i])
}

*/

btnSubmit.onclick=function(){
  listNames.push(inptAddItem.value)
  lblShowList.textContent = listNames
}

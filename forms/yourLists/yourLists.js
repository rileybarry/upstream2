let listNames = ["new", "old"]

yourLists.onshow=function(){
    rdoLists.clear()
    for (i = 0; i < listNames.length; i++)
        rdoLists.addItem(listNames[i])
}

btnDeleteList.onclick=function(){
    let sel = $("input[name=rdoLists]:checked").prop("value")
    listNames.splice(listNames.indexOf(sel), 1)
    
    rdoLists.clear()
    for (i = 0; i < listNames.length; i++)
        rdoLists.addItem(listNames[i])
}
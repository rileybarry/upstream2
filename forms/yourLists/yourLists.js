let listNames = ["new", "old"]

yourLists.onshow=function(){
    chkLists.clear()
    for (i = 0; i < listNames.length; i++)
        chkLists.addItem(listNames[i])
}

btnDeleteList.onclick=function(){
    for (i = 0; i < chkLists.length; i++) {
        if (chkLists.getValue(i) == 1)
            console.log(i)
    }
}
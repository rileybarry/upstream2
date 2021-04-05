
hmbMenu.onshow=function(x){
  hmbMenu.hidden = false
}

hmbMenu.onclick=function(s){ 
    if (typeof(s) == "object") {
       return
    } else {
       switch(s) {
        case "Your lists":
            ChangeForm(yourLists)
            break;
        case "Create new list":
            ChangeForm(newList)
            break;
        case "Find Store":
            ChangeForm(findStore)
            break;
        case "Weather":
            ChangeForm(weather)
            break;
        case "Coupons":
            ChangeForm(coupons)
            break;
        }
    }
}



btnYourLists.onclick=function(){
  ChangeForm(yourLists)
}

btnCreateNewList.onclick=function(){
  ChangeForm(newList)
}

btnFindStore.onclick=function(){
  ChangeForm(findStore)
}

btnWeather.onclick=function(){
  ChangeForm(weather)
}

btnCoupons.onclick=function(){
  ChangeForm(coupons)
}

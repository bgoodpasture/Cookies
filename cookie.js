var sugar = document.querySelector("#sugar")
var sugarCount = Cookies.get("sugar")
var sugarCookies = document.querySelector("#sugarCookies")
var chocolate = document.querySelector("#chocolate")
var chocolateCount = Cookies.get("chocolate")
var chocolateCookies = document.querySelector("#chocolateCookies")
var lemon = document.querySelector("#lemon")
var lemonCount = Cookies.get("lemon")
var lemonCookies = document.querySelector("#lemonCookies")
var empty = document.querySelector("#empty")


if(sugarCount === undefined){sugarCount = 0}
if(chocolateCount === undefined){chocolateCount = 0}
if(lemonCount === undefined){lemonCount = 0}

window.onload = function(){

  if(Cookies.get("sugar")){
    Cookies.set("sugar", sugarCount);
    sugarCookies.innerHTML = Cookies.get("sugar")
  }
  if(Cookies.get("chocolate")){
    Cookies.set("chocolate", chocolateCount);
    chocolateCookies.innerHTML = Cookies.get("chocolate")
  }
  if(Cookies.get("lemon")){
    Cookies.set("lemon", lemonCount);
    lemonCookies.innerHTML = Cookies.get("lemon")
  }
}


sugar.addEventListener("click", function(){
  sugarCount++;
  Cookies.set("sugar", sugarCount);
  sugarCookies.innerHTML = Cookies.get("sugar");
})

chocolate.addEventListener("click", function(){
  chocolateCount++;
  Cookies.set("chocolate", chocolateCount);
  chocolateCookies.innerHTML = Cookies.get("chocolate")
})

lemon.addEventListener("click", function(){
  lemonCount++;
  Cookies.set("lemon", lemonCount);
  lemonCookies.innerHTML = Cookies.get("lemon")
})

empty.addEventListener("click", function(){
  Cookies.set("sugar", 0)
  sugarCookies.innerHTML = Cookies.get("sugar")
  sugarCount = 0;

  Cookies.set("chocolate", 0)
  chocolateCookies.innerHTML = Cookies.get("chocolate")
  chocolateCount = 0;

  Cookies.set("lemon", 0)
  lemonCookies.innerHTML = Cookies.get("lemon")
  lemonCount = 0;
})

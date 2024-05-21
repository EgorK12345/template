var header = document.querySelector(".header");

document.body.onscroll  = function(event){
	console.log(document.documentElement.scrollTop);
  if( document.documentElement.scrollTop >= 60){
    header.classList.add("scrolled");
  }
  else {
    header.classList.remove("scrolled");
  }
}

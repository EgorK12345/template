var dropbtn = document.getElementsByClassName("dropbtn");

dropbtn[0].onclick = function() {
  if(this.classList.contains("menu-opened")){
    this.classList.remove("menu-opened");
  }
  else {
    this.classList.add("menu-opened");
  }
}
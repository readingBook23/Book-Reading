function openNav() {
  const openBtn = document.querySelector('.openbtn');
  const onRValue = openBtn.getAttribute('on-r');
  if (onRValue == "true"){
  openBtn.setAttribute('on-r', 'false');
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}else {
  openBtn.setAttribute('on-r', 'true');
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


}

// function closeNav()
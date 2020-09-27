var navbar = document.getElementById("nav-bar");

var sticky = navbar.offsetTop;

document.getElementById("defaultOpen").click();
window.onscroll = function() {stickBar()};

function openMember(cityName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(cityName).style.display = "block";

  elmnt.style.backgroundColor = color;
}

function stickBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


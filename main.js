var mediaqueryList = window.matchMedia("(min-width: 700px)");
let header = document.querySelector("header");
let logo = document.getElementById("logo");
let bar_icon = document.getElementById("bars");
let close_icon = document.getElementById("close");
let nav_list = document.getElementById("nav-list");

function menuAction(Open) {
  if (Open === true) {
    bar_icon.style.display = 'none';
    logo.style.display = 'none';
    close_icon.style.display = 'block';
    nav_list.style.display = 'flex';
    header.style.justifyContent = 'flex-end';
  } else {
    bar_icon.style.display = 'block';
    logo.style.display = 'block';
    close_icon.style.display = 'none';
    nav_list.style.display = 'none';
    header.style.justifyContent = 'space-between';
  }
}

mediaqueryList.addListener(function (EventoMediaQueryList) {
  console.log(!mediaqueryList.matches);
  if (!mediaqueryList.matches) {
    bar_icon.style.display = 'block';
    logo.style.display = 'block';
    close_icon.style.display = 'none';
    nav_list.style.display = 'none';
    header.style.justifyContent = 'space-between';
  } else {
    bar_icon.style.display = 'none';
    nav_list.style.display = 'flex';
    close_icon.style.display = 'none';
    logo.style.display = 'block';
    header.style.justifyContent = 'space-between';
  }
});
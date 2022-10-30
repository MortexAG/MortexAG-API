/* Function To Switch Dark Mode To Light Mode */
function light_mode() {
  var body_element = document.body;
  body_element.classList.toggle("body_light_mode");
  var top_div = document.getElementById("top_div");
  top_div.classList.toggle("top_div_light_mode");
  var mid_div = document.getElementById("mid_div");
  mid_div.classList.toggle("top_div_light_mode");
  var change_icon = document.getElementById("dark_mode_moon");
  let url = document.getElementById("dark_mode_moon").src;
  if (url == 'https://i.ibb.co/RvzBsgn/180700.png') {
    document.getElementById("dark_mode_moon").src = 'https://i.ibb.co/WVX5f3b/brightness.png'
    document.getElementById("dark_mode_moon").title = "Switch To Dark Mode"
  }
  else {
    document.getElementById('dark_mode_moon').src = 'https://i.ibb.co/RvzBsgn/180700.png'
    document.getElementById("dark_mode_moon").title = "Switch To Light Mode"
  }
  let list_id = document.getElementById("ul_1");
  list_id.classList.toggle("ul_1_light_mode");
  let github = document.getElementById("github");
  github.classList.toggle("github-light")
  let replit = document.getElementById("replit");
  replit.classList.toggle("replit-light");
  let my_api = document.getElementById("my_api");
  my_api.classList.toggle("my-api-light")
}
/* To Activate The Selected Side Part Button */
function button_active(){
  var targ = event.target;
  var but_active = document.getElementById("but_active");
  if (targ.id == "but_inactive") {
    but_active.classList.remove("active")
    but_active.classList.add("inactive")
    targ.id = "but_active"
    targ.classList.remove("inactive")
    targ.classList.add("active")
    but_active.id = "but_inactive"
  }

  
}
/*  Functions To Show The Segments Of The Requested Site Part */
function show_replit() {

 var shown = document.getElementsByClassName('visible')[0];
  
shown.classList.remove("visible");
shown.classList.add("invisible");
var replit = document.getElementById("replit");
replit.classList.remove('invisible');
replit.classList.add('visible');
replit.classList.add("replit")
  
  }
function show_github() {
 var shown = document.getElementsByClassName('visible')[0];
shown.classList.remove("visible");
shown.classList.add("invisible");
var github = document.getElementById("github");
github.classList.remove('invisible');
github.classList.add('visible');
github.classList.add("github")
  
  }

function show_my_api() {
 var shown = document.getElementsByClassName('visible')[0];
shown.classList.remove("visible");
shown.classList.add("invisible");
var my_api = document.getElementById("my_api");
my_api.classList.remove('invisible');
my_api.classList.add('visible');
my_api.classList.add("my-api")
  }

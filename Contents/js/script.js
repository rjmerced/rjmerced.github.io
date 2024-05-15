

 var url = sessionStorage.getItem("url");
 var usersessionid = sessionStorage.getItem("uid");
 var upriv = sessionStorage.getItem("upriv");
 
$(function() {

    GetMenus();

    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
      });
    }

    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("close");
    });

       
});

function GetMenus() {

  $.ajax({
          type: "GET",
          async: false,
          url: url + '/api/main/GetMenus?UserID=' + usersessionid,
          success: function (data) {
            
               $('#mainSideMenu').append(data);
               
          },
          error: function () {

          }
      });
}

function ShowChildForm(menu, title) {
  
  $('#mainBodyContainer').empty();  
  var newhtml = menu + '.html';
  $('#mainBodyContainer').append('<object data=' + newhtml + ' style="width: 96%; height: 100%;"></object>');
  document.getElementById('mainTitle').innerText = title;

}

$(document).ready(function() {

  $('#mainBodyContainer').empty();  
  $('#mainBodyContainer').append('<object data="Dashboard.html" style="width: 96%; height: 100%;"></object>');

})

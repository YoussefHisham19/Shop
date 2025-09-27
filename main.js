let menubtn= document.getElementById("menubtn")
let menu= document.getElementById("menu")

function menuProducts(){
//  menubtn.Onclick.display="none"
  //menu.style.display='none'
  if(menu.style.display==='block'){
    menu.style.display='none'
  }else{
    menu.style.display='block'
  }
}

// لما المستخدم يضغط في أي مكان
document.addEventListener("click", function (event) {
  // لو الضغط مش على الزرار ولا على الصندوق → اقفل
  if (
    event.target !== menu &&
    event.target !== menubtn &&
    !menubtn.contains(event.target) // لو الصورة جوا الزرار
  ) {
    menu.style.display = "none";
  }
});


let searchbox = document.getElementById("searchbox")

function searchBar() {
  if (searchbox.style.display === "block") {
    searchbox.style.display = 'none'
  } else {
    searchbox.style.display = 'block'
  }
}
// لما المستخدم يضغط في أي مكان
document.addEventListener("click", function (event) {
  // لو الضغط مش على الزرار ولا على الصندوق → اقفل
  if (
    event.target !== searchbox &&
    event.target !== searchbtn &&
    !searchbtn.contains(event.target) // لو الصورة جوا الزرار
  ) {
    searchbox.style.display = "none";
  }
});
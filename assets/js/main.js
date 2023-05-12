
var sort=document.getElementById("sort")
var filter= document.getElementById("filter-part");
    filter.style.display="none"
sort.addEventListener("mouseenter", e=>{
    filter.style.display="flex"
});
sort.addEventListener("mouseleave", e=>{
    filter.style.display="none"
});

function myFunction2() {
  var image = document.querySelectorAll(".foto");
  image.forEach(function(e) {
    if (e.id !== "cactuses") {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
  });
}
//   ilk ve ikinci kodda cuzi fer1 var
function myFunction3() {
  var image = document.querySelectorAll(".foto");
  image.forEach(function(e) {
      if (e.id == "exotic") {
        e.style.display = "block";
  } else {
      e.style.display = "none";
    }
  });
}

function myFunction4() {
  var image = document.querySelectorAll(".foto");
  image.forEach(function(e) {
      if (e.id == "greens") {
        e.style.display = "block";
  } else {
      e.style.display = "none";
    }
  });
}

function myFunction5() {
  var image = document.querySelectorAll(".foto");
  image.forEach(function(e) {
      if (e.id == "popular") {
        e.style.display = "block";
  } else {
      e.style.display = "none";
    }
  });
}

function myFunction6() {
  var image = document.querySelectorAll(".foto");
  image.forEach(function(e) {
      if (e.id == "various") {
        e.style.display = "block";
  } else {
      e.style.display = "none";
    }
  });
}
function myFunction7() {
  var image = document.querySelectorAll(".foto");
  image.forEach(function(e) {
      if (e.id == "winter") {
        e.style.display = "block";
  } else {
      e.style.display = "none";
    }
  });
}
function myFunction1() {
  var image = document.querySelectorAll(".foto");
  image.forEach(function(e) {
      if (e.id == "every") {
        e.style.display = "none";
  } else {
      e.style.display = "block";
    }
  });
}

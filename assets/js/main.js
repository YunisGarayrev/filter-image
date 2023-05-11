
var sort=document.getElementById("sort")
var filter= document.getElementById("filter-part");
sort.addEventListener("mouseenter", e=>{
    filter.style.display="flex"
});
sort.addEventListener("mouseleave", e=>{
    filter.style.display="none"
});

var all=document.getElementById("all")
var cont=document.getElementsByClassName("container-1")
all.addEventListener("click",el=>{
    var all=document.getElementById("all")
var cont=document.getElementsByClassName("container-1")
cont.setAttribute('d-none', el.getAttribute("d-flex"));
    })

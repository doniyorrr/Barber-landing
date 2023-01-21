window.addEventListener('scroll',function(){
console.log();
    if(window.scrollY >= 100){
        document.querySelector("nav").classList.add("black")
    }
    else{
        document.querySelector("nav").classList.remove("black")
    }
})
/*menu button onclick function*/        
//  $(document).ready(function(){
//         $('.menu h4').click(function(){
//             $("nav ul").toggleClass("active")
//     })
//     })
document.getElementById("formContato").addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("msgEnviada").style.display = "block";
    document.getElementById("formContato").reset();
    setTimeout(function(){
        document.getElementById("msgEnviada").style.display = "none";
    }, 4000);
});
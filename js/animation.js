$(document).ready(function(){
    $("#container img").each(function(imagen){
        $(this).delay((imagen)*500).fadeTo(1000, 1)
    }); 
})
$(function(){
    $("#signin").hide();
    $("#signup").hide();
    
    $("#signin .delete-btn button").on("click",function(){
        $("#signin").removeClass("fadeInRight animated");
        $("#signin").addClass("fadeOutRight animated");        
    });
    
    $("#user").on("click",function(){
        $("#signin").show();
        $("#signin").removeClass("fadeOutRight animated");
        $("#signup").removeClass("fadeOutRight animated");
        $("#signin").addClass("fadeInRight animated");
    });
    
    $("#signin #signup-btn").on("click",function(){
        $("#signin").hide();
        $("#signup").show();
        $("#signup").addClass("fadeInRight animated");
    });
    
    $("#signup #signin-btn").on("click",function(){
        $("#signin").show();
        $("#signup").hide();
    });
    $("#signup .delete-btn button").on("click",function(){
        $("#signup").removeClass("fadeInRight animated");
        $("#signup").addClass("fadeOutRight animated");
    });
    
//    *********************** footer-1 *************************
    var menu = $(".menu").children().clone();
    $(".footer-1").append(menu[0]);
    
    
    var address =$(".contact-address").children();
    console.log(address);
    
//    ******************** click list-icon *******************
    $('#list-icon').on("click",function(){
        $(".menu").toggleClass("d-block");
        $(".menu").toggleClass("fadeInDown animated");
    });
 //    ******************** search ******************* 
    $('.search').addClass("d-none");
    $('#search').on("click",function(){
        $('.search').toggleClass("d-block");
        $('.search').toggleClass("fadeInDown animated");
    });
    
    
});
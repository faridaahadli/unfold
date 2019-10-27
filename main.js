
// function hideLoader() {
//     $('#preloader').hide();
// }
// setTimeout(hideLoader, 5000);// Document onloadla yazanda cox tez yuklendiyi ucun gorsenmirdi hech

$(document).ready(function(){
    window.addEventListener('scroll',function(e){
        if(window.scrollY>document.getElementById("intro").offsetTop){
            $("header").addClass("fixed")
            
            
        }
        else{
            $("header").removeClass("fixed")
        }
   
    })
    // ---------------------------------------
    // BeginActice class for navbar
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= document.getElementById("intro").offsetTop) {
            $('section').each(function(i) {
               
                if ( windscroll>=$(this).offset().top && !$(this).hasClass("same")) {
                    $('#navList a.active').removeClass('active');
                    $('#navList a').eq(i).addClass('active');

                }
            });
    
        } else {

            $('#navList a.active').removeClass('active');
            $('#navList a:first').addClass('active');
        }
    
    }).scroll();
// EndActive class for navbar
// ----------------------------------------
        let a=0;
        let b=0;
        let c=0;
        let d=0;
        let interval1=setInterval(function(){
            a=a+16
            $(".percent1").html(a+"%")
            $("#progress1").css({
                "width":a+"%"
            })
            if(a==80){
                clearInterval(interval1)
            }
        },600)
    
        let interval2=setInterval(function(){
            b=b+10
            $(".percent2").html(b+"%")
            $("#progress2").css({
                "width":b+"%"
            })
            if(b==50){
                clearInterval(interval2)
            }
        },600)
    
       
    
    
        let interval3=setInterval(function(){
            c=c+12
            $(".percent3").html(c+"%")
            $(" #progress3").css({
                "width":c+"%"
            })
            if(c==60){
                clearInterval(interval3)
            }
        },600)
    
        let interval4=setInterval(function(){
            d=d+15
            $(".percent4").html(d+"%")
            $(" #progress4").css({
                "width":d+"%"
            })
            if(d==90){
                clearInterval(interval4)
            }
        },600)
        
        $(".toggle").click(function(){
            $("#navlittleList").toggleClass("block")
            $(".toggle i").toggleClass( 'fas fa-times fas fa-bars')
        })
        
         $(window).resize(function(){
             if(window.innerWidth>992){
                $("#navlittleList").removeClass("block")
                 $("#navlittleList").addClass("none")
             }else{
                $("#navlittleList").removeClass("none")
                 $(".toggle ").html(' <i class="fas fa-bars"></i>')
             }
         })
    
    // Service section
   
})


//Get Modal
var modal = document.getElementById('myModal');


//Close The Modal
var span = document.getElementsByClassName('close')[0];

span.onclick = function (){
  modal.style.display = 'none';
}

//Get the image
var imgModal = document.getElementById('myImg');
var imageTarget = document.getElementById('image');
var captionModal = document.getElementById('caption-modal');
const imageContent = document.querySelectorAll('.content-modal')

for (let listImage of imageContent){
  listImage.addEventListener('click', function(event){
    const target = event.target;

    modal.style.display = 'block';
    imgModal.src = target.src;
    captionModal.innerHTML = "<dfn>" + target.title + "</dfn>";
  })
}

$(window).scroll(function(){
    const heightScreen = $(window).height();
    const process = heightScreen - 620;
    if($(window).scrollTop() >=200 + process){
        $('.navbar').css({
            "transition": "0.5s",
            "background-color": "#222",
            "padding": "20px",
            "box-shadow": "0px 10px 10px rgba(0, 0, 0, 0.4);"
        });
        $('.navbar').addClass("shadow-lg p-3 mb-5");
        $('.btn-scroll').css({
            "display": "block",
        });
    }else{
        $('.navbar').css({
            "transition": "1s",
            "background-color": "transparent",
        });
        $('.navbar').removeClass("shadow-lg p-3 mb-5");
        $('.btn-scroll').css({
            "display": "none",
        });
    }
})

$('.nav-link').on('click', function(e){
    $('.nav-link').removeClass('active');
    const href = $(this).attr('href');
    const tujuanElement = $(href);
    if (href == '#beranda'){
        $(".beranda").removeClass('none');
        $(".fasilitas").addClass('none');
        $(".tentang-kami").addClass('none');
        $(".manfaat").addClass('none');
    }else if (href == '#fasilitas'){
        $(".fasilitas").removeClass('none');
        $(".tentang-kami").addClass('none');
        $(".manfaat").addClass('none');
        $(".beranda").addClass('none');        
    }else if (href == '#tentangkami'){
        $(".tentang-kami").removeClass('none');
        $(".fasilitas").addClass('none');
        $(".beranda").addClass('none'); 
        $(".manfaat").addClass('none');       
    }else if (href == '#manfaat'){
        $(".manfaat").removeClass('none');
        $(".fasilitas").addClass('none');
        $(".tentang-kami").addClass('none');
        $(".beranda").addClass('none');        
    }
    e.preventDefault();
})

$('.nav-link').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
});


$(document).ready(function(){
    
    $(".adult").mouseover(function(){
        $('.tag-adult').css({
            "transition": "0.5s",
            "transform" :"scaleY(45deg)",
            "background-color": "rgb(248, 176, 0)",
            "box-shadow": "0px 10px 10px rgba(0, 0, 0, 0.4)"
        });
    });

    $(".adult").mouseout(function(){
        $('.tag-adult').css({
            "transition": "0.5s",
            "transform": "rotate(55deg)",
            "background-color": "rgba(248, 178, 0, 0.582)",
            "box-shadow": "0px 10px 10px rgba(0, 0, 0, 0)"
    
        });
    });    
});

$(document).ready(function(){
    
    $(".child").mouseover(function(){
        $('.tag-child').css({
            "transition": "0.5s",
            "transform" :"scaleY(45deg)",
            "background-color": "rgb(248, 176, 0)",
            "box-shadow": "0px 10px 10px rgba(0, 0, 0, 0.4)"
        });
    });

    $(".child").mouseout(function(){
        $('.tag-child').css({
            "transition": "0.5s",
            "transform": "rotate(55deg)",
            "background-color": "rgba(248, 178, 0, 0.582)",
            "box-shadow": "0px 10px 10px rgba(0, 0, 0, 0)"
        });
    });    
});

/* Parallax */
$(window).bind("load resize scroll",function(e) {
    var y = $(window).scrollTop();
 
    $(".parallax-bg-img").filter(function() {
        return $(this).offset().top < (y + $(window).height()) &&
               $(this).offset().top + $(this).height() > y;
    }).css('background-position', '0px ' + parseInt(-y / 3.9) + 'px');
});


/* Btn-scroll */
$('.btn-scroll').on('click', function(){
    $('html,body').animate({
        scrollTop: 0
    },500, 'easeInOutBack');
})
//TABS
function benefits(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
//TABS

//ACCORDION
function accerd(evt, catName) {
  var i, accordion, accordlink;
  accordion = document.getElementsByClassName("accordion");
  for (i = 0; i < accordion.length; i++) {
    accordion[i].style.display = "none";
  }
  accordlink = document.getElementsByClassName("accordlink");
  for (i = 0; i < accordlink.length; i++) {
    accordlink[i].className = accordlink[i].className.replace(" active", "");
  }
  document.getElementById(catName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("catOpen").click();
//ACCORDION

$(document).ready(function(){
  $('.burger-menu').click(function(){
    $('.start-menu_ul').toggleClass('active');
    })
});


$(".slider-area").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  speed: 700,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        arrows: false,
      }
    }
  ]
});

$(".multiple-items").slick({
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 700,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});








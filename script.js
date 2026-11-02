
/*simple fetch for my tumblr blog*/
const BLOG = "agaricspot.tumblr.com";
const KEY = "Lf73MRYKqR974hCcf9hFtDMUfhlfVVj33uTNt2Tvwg4cO8Xyrq";

$(function () {
  fetch(`https://api.tumblr.com/v2/blog/${BLOG}/posts?limit=1&api_key=${KEY}`)
    .then(r => r.json())
    .then(data => {
      const post = data.response.posts[0]; //takes first item in post array 
      const summary = post.summary || "Latest from the blog";

      $("#post").attr("href", post.post_url); //setting href to post so it can be clicked
      $("#f").text(summary.length > 80 ? `${summary.slice(0, 80)}...` : summary);//slice at 80 chars for screen space
    })
    .catch(err => console.error("Tumblr fetch failed:", err));

});


$(function(){
  $('.slides').each(function(){
    const box = $(this);
    const figs = box.find('figure');
    let i = 0; 

    function show(n){
      i = (n + figs.length) % figs.length //wrap
      figs.hide().eq(i).show();
    }

    box.find('.left').on('click', () => show(i-1));
    box.find('.right').on('click', () => show(i+1));
    show(0);
  });
});

/*slideshow

function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n>slides.length){slideIndex=1}
    if(n<1){slideIndex=slides.length}

    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }

    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " active";
}

*/

//button toggle for projects in portfolio. for future development when
//assets and animation are implemented
/*
$(document).on('DOMContentLoaded', function(){
  const tog = $(".toggle");
  const draw = $(".drawer");

  if(tog && draw){
    const inner = draw.children().first();
    inner.prop('inert', true); // keep hidden links from being tabbed to 

    tog.on('click', function(){
      const o = tog.attr('aria-expanded') !== true; 

      tog.attr('aria-exanded', String(o)); //set expanded to true or false
      tog.attr('aria-label', o ? 'hide-projects': 'show projects'); //screen reader
      draw.toggleClass('open', o); //adds or removes open class to show and hide projects 
      inner.prop('inert', !o)
    })
  }
})*/

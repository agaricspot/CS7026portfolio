const BLOG = "agaricspot.tumblr.com";
const KEY = "Lf73MRYKqR974hCcf9hFtDMUfhlfVVj33uTNt2Tvwg4cO8Xyrq";

$(function () {
  fetch(`https://api.tumblr.com/v2/blog/${BLOG}/posts?limit=1&api_key=${KEY}`)
    .then(r => r.json())
    .then(data => {
      const post = data.response.posts[0];
      const summary = post.summary || "Latest from the blog";

      $("#post").attr("href", post.post_url);
      $("#f").text(summary.length > 80 ? `${summary.slice(0, 80)}...` : summary);
    })
    .catch(err => console.error("Tumblr fetch failed:", err));
});

//from https://css-tricks.com/snippets/jquery/make-entire-div-clickable/
$(".proj").click(function(){
  window.location = $(this).find("a").attr("href");
  return false;
});

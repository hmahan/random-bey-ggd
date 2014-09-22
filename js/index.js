$(document).ready(function(e) {

  console.log(videosJson);

  var i_woke_up_like_this = function(surfbort) {
    $( surfbort ).appendTo( ".video_wrapper" );
  };

  var all_together_now = function(video) {
    var video_player = video.video_id,
      surfbort = '<iframe class="random_video" src="http://cache.vevo.com/m/html/embed.html?video=' + video_player + '&autoplay=1" frameborder="0"></iframe>';
    console.log(surfbort);
    return i_woke_up_like_this(surfbort);
  };

  var array_pop = function(arr, i) {
    var video = arr.splice(i,1)[0];
    console.log(video);
    return all_together_now(video);
  };

  var get_random_video = function() {
    console.log("get_random_video called");
    var i = Math.floor((Math.random()*videosJson.length));
    return array_pop(videosJson, i);
  }();

});

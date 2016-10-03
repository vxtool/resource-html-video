(function(){
var videoWrap = document.querySelectorAll(".videoWrap");
var videoComponent = function (video, playButton) {
  video.oncontextmenu = function(){ return false; };

  video.addEventListener("click", function(){
    if( playButton.style.visibility === "hidden" ){ video.pause(); }
    else { video.play(); }
  });

  playButton.addEventListener("click", function(){
    video.play();
  });

  video.addEventListener("play", function(){
    playButton.style.visibility = "hidden";
  });

  video.addEventListener("pause", function(){
    playButton.style.visibility = "visible";
  });

  video.addEventListener("ended", function(){
    playButton.style.visibility = "visible";
  });
};
var video;
var playButton;

for (var i = 0, len = videoWrap.length; i < len; i++) {
  video      = videoWrap[i].querySelector("video");
  playButton = videoWrap[i].querySelector(".playButton");
  videoComponent(video, playButton);
}

})();

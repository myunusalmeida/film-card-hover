$(".card").hover(
  function () {
    var vSrc = $(this).find("iframe").data("video");
    var video = $(this).find("iframe");
    video.attr("src", vSrc);
    setTimeout(function () {
      player.unMute();
    }, 1000);
  },
  function () {
    $(this).find("iframe").attr("src", "");
  }
);

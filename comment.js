setInterval(() => {
  var cri = [
    "まだ見てる",
    "↓",
    "見てる人",
    "みてるひと",
    "から来た人",
    "見る人",
    "伝説",
    "古参",
    "見てきた人",
    "戻ってきた人"
  ];
  var els = document.querySelectorAll("ytd-comment-thread-renderer.style-scope.ytd-item-section-renderer");
  els = Array.from(els);
  for (var i = 0; i < els.length; i++) {
    for (var j = 0; j < cri.length; j++) {
      if (els[i].querySelector("span.yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap").innerText.indexOf(cri[j]) != -1) {
        els[i].style.display = 'none';
      }
    }
  }
}, 100);

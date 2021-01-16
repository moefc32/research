window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
};

MediumWidget.Init({
  renderTo: '#medium-feed',
  params: {
    "resource": "https://medium.com/risetnya-mfc",
    "limit": 5,
    "fields": [
      "description",
      "publishAt"
    ]
  }
});

const channelID = "UCoxdB0_IJoOlYcLfiFkSbLg";
const reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL) + channelID, function (data) {
  for (let n = 0; n <= 4; n += 1) {
    let x = n + 1;
    let link = data.items[n].link;
    let title = data.items[n].title;
    let id = link.substr(link.indexOf("=") + 1);
    $(".youtube-link" + x).attr("title", title);
    $(".youtube-link" + x).attr("href", "https://www.youtube.com/watch?v=" + id);
    $(".youtube-thumbnail" + x).attr("src", "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg");
    $(".youtube-thumbnail" + x + "-small").attr("src", "https://img.youtube.com/vi/" + id + "/mqdefault.jpg");
    $(".youtube-title" + x).text(title);
  }
});
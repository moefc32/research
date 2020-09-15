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
})

window.onscroll = function () {
  scrollIndicator()
};

function scrollIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
}
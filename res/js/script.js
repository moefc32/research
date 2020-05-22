MediumWidget.Init({
  renderTo: '#medium-feed',
  params: {
    "resource":"https://medium.com/risetnya-mfc",
    "limit":5,
    "fields":[
      "description",
      "publishAt"
    ]
  }
})

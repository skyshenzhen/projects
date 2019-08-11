Page({
  data: {
    imgUrls: [
      'https://7261-raatxyun-0716-1259697781.tcb.qcloud.la/swiper01.png?sign=d1a38fd202ec8530287906bda25fd55c&t=1565501979',
      'https://7261-raatxyun-0716-1259697781.tcb.qcloud.la/swiper02.jpg?sign=de4352c3fa6febe0dbb3e664f674db45&t=1564064067',
      'https://7261-raatxyun-0716-1259697781.tcb.qcloud.la/swiper03.jpg?sign=4f9f0398364c3c12001216a1d5749104&t=1564064077',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList: null,
  },

  toCase: function () {
    wx.navigateTo({
      url: '../casezn/casezn',
    });
  },

  toRequirement: function () {
    wx.navigateTo({
      url: '../jobzn/jobzn',
    });
  },

  toBUsiness: function () {
    wx.navigateTo({
      url: '../businesszn/businesszn',
    });
  },

  toAbout: function () {
    wx.navigateTo({
      url: '../aboutzn/aboutzn',
    });
  },



})
Page({
  data: {
    latitude: 22.533060,
    longitude: 114.056950,
    markers: [{
      id: 1,
      latitude: 22.533060,
      longitude: 114.056950,
      callout: {
         content:"深圳市福田区国际商会中心12楼", 
         color:"#009aff",
         fontSize: "16",
         bgColor: "#ffffff",
         padding: "1",
         display: "ALWAYS",
         textAlign:'left'
       }
    }],
    covers: [{
      latitude: 22.533060,
      longitude: 114.056950,
      iconPath: '/images/location.png'
    }, {
        latitude: 22.533060,
        longitude: 114.056950,
        iconPath: '/images/location.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 22.533060,
        longitude: 114.056950,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 22.533060,
        longitude: 114.056950,
      }, {
          latitude: 22.533060,
          longitude: 114.056950,
      }]
    })
  },
  tell: function () {
    wx.makePhoneCall({
      phoneNumber: '13632421398' 
    })
  }
})
 
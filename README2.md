// 原生的事件传参方式:

<view data-id="{{index}}" data-title="wepy" data-other="otherparams" bindtap="tapName"> Click me! </view>

Page({
    tapName: function (event) {
        console.log(event.currentTarget.dataset.id)// output: 1
        console.log(event.currentTarget.dataset.title)// output: wepy
        console.log(event.currentTarget.dataset.other)// output: otherparams
    }
});

// WePY 1.1.8以后的版本，只允许传string。

<view @tap="tapName({{index}}, 'wepy', 'otherparams')"> Click me! </view>

methods: {
    tapName (id, title, other, event) {
        console.log(id, title, other)// output: 1, wepy, otherparams
    }
}

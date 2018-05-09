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

组件自定义事件处理函数
1.4.8新增

可以通过使用.user修饰符为自定义组件绑定事件，如：@customEvent.user="myFn"

其中，@表示事件修饰符，customEvent 表示事件名称，.user表示事件后缀。

目前总共有三种事件后缀：

.default: 绑定小程序冒泡型事件，如bindtap，.default后缀可省略不写；

.stop: 绑定小程序捕获型事件，如catchtap；

.user: 绑定用户自定义组件事件，通过$emit触发。注意，如果用了自定义事件，则events中对应的监听函数不会再执行。

示例如下：

// index.wpy

<template>
    <child @childFn.user="parentFn"></child>
</template>

<script>
    import wepy from 'wepy'
    import Child from '../components/child'

    export default class Index extends wepy.page {
        components = {
            child: Child
        }

        methods = {
            parentFn (num, evt) {
                console.log('parent received emit event, number is: ' + num)
            }
        }
    }
</script>


// child.wpy

<template>
    <view @tap="tap">Click me</view>
</template>

<script>
    import wepy from 'wepy'

    export default class Child extends wepy.component {
        methods = {
            tap () {
                console.log('child is clicked')
                this.$emit('childFn', 100)
            }
        }
    }
</script>


slot 组件内容分发插槽
WePY中的slot插槽作为内容分发标签的空间占位标签，便于在父组件中通过对相当于扩展板卡的内容分发标签的“插拔”，更为灵活、方便地对子组件进行内容分发。

具体使用方法是，首先在子组件template模板部分中声明slot标签作为内容插槽，同时必须在其name属性中指定插槽名称，还可设置默认的标签内容；然后在引入了该带有插槽的子组件的父组件template模板部分中声明用于“插拔”的内容分发标签。

注意，这些父组件中的内容分发标签必须具有slot属性，并且其值为子组件中对应的插槽名称，这样父组件内容分发标签中的内容会覆盖掉子组件对应插槽中的默认内容。

另外，要特别注意的是，父组件中一旦声明了对应于子组件插槽的内容分发标签，即便没有内容，子组件插槽中的默认内容也不会显示出来，只有删除了父组件中对应的内容分发标签，才能显示出来。

示例：

在Panel组件中有以下模板：

<view class="panel">
    <slot name="title">默认标题</slot>
    <slot name="content">默认内容</slot>
</view>
在父组件中使用Pannel子组件时，可以这样使用：

<panel>
    <view slot="title">新的标题</view>
    <view slot="content">
        <text>新的内容</text>
    </view>
</panel>

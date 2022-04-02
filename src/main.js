// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 1.使用template的形式
  // components: { App }, // 注册
  // template: '<App/>' // 使用
  // 2.使用render函数
  render: function (createment) {
    // 普通用法：createment('标签', {标签的属性}, ['标签中的内容'])
    // return createment('h2', {class: 'box'}, ['hello world', createment('button', ['按钮'])])
    // 传入一个组件
    return createment(App)
  }
})

// 过程：template->ast->render->vdom->UI

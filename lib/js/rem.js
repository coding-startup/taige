/** 适配方案 `rem.js`，根据屏幕宽度与视口宽度计算出比例。在样式中可通过 `rem` 作为单位访问 */
(function (doc, w) {
  function resize () {
    // 设计稿尺寸
    const designWidth = 1280

    // 可视窗口大小
    const viewWidth = doc.documentElement.clientWidth || w.innerWidth || document.body.clientWidth

    // 根元素（html）
    const root = doc.documentElement

    root.style.fontSize = (100 / designWidth * viewWidth) + 'px'
  }
  resize()

  // 当初始的 HTML文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载
  w.addEventListener('DOMContentLoaded', resize)

  // orientationchange 事件在设备的纵横方向改变时触发
  w.addEventListener('onorientationchange' in w ? 'orientationchange' : 'resize', resize)
})(window.document, window)

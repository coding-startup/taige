# taige
北京太格时代自动化系统设备有限公司

#### commit log

- 2020/11/28 - tension

  - 新增 iconfont 字体文件，位置为：`assets/iconfont/`

    > 需要用到 iconfont 的页面只需要引用 iconfont.css 即可。iconfont 图标可进入 iconfont.html 查看，点击指定的 iconfont 图标即可复制对应的 unicode

    unicode 的使用可参考 [iconfont 的使用帮助](https://www.iconfont.cn/help/detail?helptype=code)

  - 新增 Jquery.min@3.5.1 版本，位置为：`lib/js/`

    > 原因是因为在 $() 选择器中应用模板字符串进行渲染多个节点时，该版本 Jquery 不支持的问题。并不是说必须代替正在使用的 Jquery 版本，自己酌情选择
    

- 2020/12/2 - tension

  - 导航组件，位置为：`template/common/header/`

    > 引用导航组件的页面需要提供一个容器承载导航组件，然后使用 load 方法及 `相对路径` 去加载导航组件和导航组件的依赖。如下示例：

    ```html
    <div id="header"></div>
    ```

    ```js
    $('#header').load('./template/common/header/index.html', function () {
        $(this).prepend(
            $('<link/>', { rel: 'stylesheet', href: './assets/css/reset.css' }),
            $('<link/>', { rel: 'stylesheet', href: './assets/iconfont/iconfont.css' }),
            $('<link/>', { rel: 'stylesheet', href: './template/common/header/index.css' })
        ).append(
            $('<script/>', { src: './template/common/header/index.js' })
        )
    })
    ```
    

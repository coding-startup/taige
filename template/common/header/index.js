$(function () {
  const navListArr = [
    {
      title: '首页',
      href: '#',
      children: []
    },
    {
      title: '走进太格',
      children: [
        {
          iconUnicode: '&#xe616;',
          title: '公司简介',
          href: '#'
        },
        {
          iconUnicode: '&#xe62f;',
          title: '创新开放',
          href: '#'
        },
        {
          iconUnicode: '&#xe675;',
          title: '大事记',
          href: '#'
        },
        {
          iconUnicode: '&#xe601;',
          title: '太格理念',
          href: '#'
        },
        {
          iconUnicode: '&#xe65f;',
          title: '姿势荣誉',
          href: '#'
        }
      ]
    },
    {
      title: '媒体中心',
      children: [
        {
          iconUnicode: '&#xe604;',
          title: '新闻资讯',
          href: '#'
        },
        {
          iconUnicode: '&#xe661;',
          title: '行业咨询',
          href: '#'
        }
      ]
    },
    {
      title: '产品与解决方案',
      children: [
        {
          iconUnicode: '&#xe858;',
          title: '解决方案',
          href: '#'
        },
        {
          iconUnicode: '&#xe606;',
          title: '产品中心',
          href: '#'
        },
        {
          iconUnicode: '&#xe61c;',
          title: '应用业绩',
          href: '#'
        },
        {
          iconUnicode: '&#xe617;',
          title: '服务与支持',
          href: '#'
        }
      ]
    },
    {
      title: '人才发展',
      children: [
        {
          iconUnicode: '&#xe600;',
          title: '致梦想者',
          href: '#'
        },
        {
          iconUnicode: '&#xe619;',
          title: '人才理念',
          href: '#'
        },
        {
          iconUnicode: '&#xe60b;',
          title: '加入太格',
          href: '#'
        }
      ]
    },
    {
      title: '投资者关系',
      children: [
        {
          iconUnicode: '&#xe638;',
          title: '公司公告',
          href: '#'
        }
      ]
    }
  ]

  const root = $('.--header-container')

  const navsWrap = root.find('.navs-wrap')

  root.find('.logo-wrap .nav-btn').click(() => {
    navsWrap.toggleClass('active')

    navsWrap.hasClass('active') ? (
      navsWrap.css('transition', 'transform 400ms'),
      navsWrap.animate({}, function () {
        $(this).css('transform', 'translate3d(0, 0, 0)')
      })
    ) : (
      
      navsWrap.animate({}, function () {
        $(this).css('transform', 'translate3d(100%, 0, 0)')
      })
    )
  })

  const navList = root.find('.nav-wrap .nav-list')
  const navsList = root.find('.navs-wrap .nav-list')

  const navFragment = document.createDocumentFragment()
  const navsFragment = document.createDocumentFragment()

  $.each(navListArr, (index, item) => {
    const nav = $(
      $('<div/>').append(
        $('<li/>', { class: 'nav'}).append(
          $('<div/>', { class: 'title' }).append(
            // $('<a/>', { class: 'a', href: item.href })
            item.children && item.children.length ? (
              $('<div/>', { class: 'text', text: item.title })
            ) : (
              $('<a/>', { class: 'text', href: item.href, text: item.title })
            ),
            item.children && item.children.length ? (
              $('<ul/>', { class: 'drop-down' })
            ) : ''
          ),
          item.children && item.children.length ? (
            $('<div/>', { class: 'drop-down-mask' })
          ) : ''
        ),
        $('<span/>', { class: 'after' })
      )
    )

    if (item.children && item.children.length) {
      const dropDown = nav.find('.drop-down')

      $.each(item.children, (index, item) => {
        dropDown.append(
          $('<li/>', { class: 'menu' }).append(
            $('<a/>', { href: item.href, class: 'a' }).append(
              $('<span/>', { class: 'iconfont', html: item.iconUnicode }),
              $('<span/>', { class: 'title', text: item.title })
            )
          )
        )
      })
    } 

    nav.children().appendTo(navFragment)
  })

  $.each(navListArr, (index, item) => {
    const nav = $(
      $('<div/>').append(
        $('<li/>', { class: 'nav'}).append(
          $('<div/>', { class: 'title' }).append(
            item.children && item.children.length ? (
              $('<div/>', { class: 'text', text: item.title })
            ) : (
              $('<a/>', { class: 'text', href: item.href, text: item.title })
            ),
            item.children && item.children.length ? (
              $('<ul/>', { class: 'drop-down' })
            ) : ''
          )
        )
      )
    )

    if (item.children && item.children.length) {
      const dropDown = nav.find('.drop-down')

      $.each(item.children, (index, item) => {
        dropDown.append(
          $('<li/>', { class: 'menu' }).append(
            $('<a/>', { href: item.href, class: 'a' }).append(
              $('<span/>', { class: 'iconfont', html: item.iconUnicode }),
              $('<span/>', { class: 'title', text: item.title })
            )
          )
        )
      })
    } 

    nav.children().appendTo(navsFragment)
  })

  navList.append(navFragment)
  navsList.append(navsFragment)
})
$(function () {
  const tab = [
    {
      text: '铁路供电综合SCADA系统',
      iconUnicode: '&#xe640;',
      children: [
        {
          id: 1,
          title: '隧道照明及防灾救援系统',
          href: '#'
        },
        {
          id: 2,
          title: '远方测控终端监控系统',
          href: '#'
        },
        {
          id: 3,
          title: '供电环境安全监控系统',
          href: '#'
        },
        {
          id: 4,
          title: '变电站综合自动化系统',
          href: '#'
        },
        {
          id: 5,
          title: '变电站绝缘在线监控系统',
          href: '#'
        },
        {
          id: 6,
          title: '铁路供电综合SCADA系统',
          href: '#'
        },
        {
          id: 7,
          title: '供电SCADA调度中心系统',
          href: '#'
        },
        {
          id: 8,
          title: '接触网开关监控系统',
          href: '#'
        }
      ]
    },
    {
      text: '铁路供电生产调度指挥系统',
      iconUnicode: '&#xe640;',
      children: [
        {
          title: '变电所微机五防系统',
          href: '#'
        },
        {
          title: '供电段信息管理系统',
          href: '#'
        },
        {
          title: '牵引供电设备智能巡检系统',
          href: '#'
        },
        {
          title: '牵引供电多媒体仿真培训系统',
          href: '#'
        },
        {
          title: '6C系统综合数据处理中心',
          href: '#'
        },
        {
          title: '铁路供电生产调度指挥系统 ',
          href: '#'
        }
      ]
    },
    {
      text: '城市轨道交通自动化系统',
      iconUnicode: '&#xe640;',
      children: [
        {
          title: 'TMIS3000车辆架大修管理系统',
          href: '#'
        },
        {
          title: '地铁杂散电流综合监控系统',
          href: '#'
        },
        {
          title: '环境和机电设备监控系统（BAS）',
          href: '#'
        },
        {
          title: '城市轨道交通电力监控系统',
          href: '#'
        },
        {
          title: '城市轨道交通综合监控系统 ',
          href: '#'
        }
      ]
    },
    {
      text: '交通运维及检测工具综合服务',
      iconUnicode: '&#xe640;',
      children: [
        {
          title: '铁路工器具',
          href: '#'
        },
        {
          title: '铁路专用检测设备',
          href: '#'
        },
        {
          title: '电气试验车',
          href: '#'
        },
        {
          title: '交通运维及检测工具综合服务 ',
          href: '#'
        }
      ]
    }
  ]

  const tabWrap = $('#app #main .tab-wrap')
  
  $.each(tab, (index, item) => {
    let children = ''

    $.each(item.children, (index, item) => {
      children += `
        <li class="item" data-id="${item.id}">${item.title}</li>
      `
    })

    tabWrap[0].innerHTML += `
      <ul class="tab-list ${index === 0 && 'active'}">
        <li class="tab">
          <div class="text">
            <span class="span">${item.text}</span>
            <span class="iconfont">${item.iconUnicode}</span>
          </div>
          <ul class="children-list">
            ${children}
          </lu>
        </li>
      </ul>
    `
  })

  let currentIndex = 0
  tabWrap.on('click', '.tab-list .text',function () {
    $(this).parent().parent().addClass('active').siblings().removeClass('active')
    $(this).parent().parent().find('.children-list').slideToggle()
    $(this).parent().parent().siblings().find('.children-list').slideUp()

    const index = $(this).parent().parent().index() - 1
    const desc = $('#app #main .desc-wrap').children()

    desc.eq(index).show().siblings().hide()
    $('#app #main .children-list').eq(index).find('.item').eq(0).addClass('active').siblings().removeClass('active')

    currentIndex = index
  })

  tabWrap.on('click', '.tab-list .children-list .item', function () {
    const index = $(this).index()
    const desc = $('#app #main .desc-wrap').children().eq(currentIndex).children()

    $(this).addClass('active').siblings().removeClass('active')
    desc.eq(index).show().siblings().hide()

    console.log(desc.eq(index))
  })
})

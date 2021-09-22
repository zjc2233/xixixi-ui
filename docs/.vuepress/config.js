const path = require('path')
module.exports = {
    base:'/',
    title: 'xixixi UI',
    description: '一套基于vue2.X的组件库',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Gitee', link: 'https://gitee.com/zhao_juchang/xixixi-ui' },
      ],
      sidebar: [
          {
              title: '开发指南',
              collapsable: false,
              children: [
                  {
                      title: '安装',
                      collapsable: false,
                      path: 'views/guide/install.md'
                  },
                  {
                      title: '快速开始',
                      collapsable: false,
                      path: 'views/guide/start.md'
                  },
              ]
            },
            {
              title: '组件',
              collapsable: false,
              children: [
                {
                    title: '基础',
                    collapsable: false,
                    children:[
                      {
                        title: '按钮',
                        collapsable: false,
                        path: 'views/components/basic/Button.md',
                      },
                      {
                        title: '图标',
                        collapsable: false,
                        path: 'views/components/basic/Icon.md',
                      },
                  ]
                },
                {
                    title: '表单',
                    collapsable: false,
                    children:[
                      {
                        title: '单选框',
                        collapsable: false,
                        path: 'views/components/form/Radio.md',
                      },
                      {
                        title: '多选框',
                        collapsable: false,
                        path: 'views/components/form/Checkbox.md',
                      },
                      {
                        title: '开关',
                        collapsable: false,
                        path: 'views/components/form/Switch.md',
                      },
                      {
                        title: 'input输入框',
                        collapsable: false,
                        path: 'views/components/form/Input.md',
                      },
                  ]
                },
                {
                    title: '通知',
                    collapsable: false,
                    children:[
                      {
                        title: 'toast消息',
                        collapsable: false,
                        path: 'views/components/notice/toast.md',
                      },
                  ]
                },
                {
                    title: '其他',
                    collapsable: false,
                    children:[
                      {
                        title: 'dialog对话框',
                        collapsable: false,
                        path: 'views/components/other/Dialog.md',
                      },
                  ]
                },
              ]
            },
        ]
      },
    // scss:{ //配置 scss 根目录
    //   includePaths: [path.join(__dirname, '../../style')]
    // }
  }
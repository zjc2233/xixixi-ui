const path = require('path')
module.exports = {
    base:'/xixixi-ui/',
    title: 'xixixi UI',
    description: 'Inspiration from heian xixixi',
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
              collapsable: true,
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
              collapsable: true,
              children: [
                {
                    title: '基础',
                    collapsable: true,
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
                        title: '单选按钮',
                        collapsable: false,
                        path: 'views/components/form/Radio.md',
                      },
                      // {
                      //   title: '图标',
                      //   collapsable: false,
                      //   path: 'views/components/basic/Icon.md',
                      // },
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
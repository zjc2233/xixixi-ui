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
            // {
            //   title: '设计',
            //   collapsable: true,
            //   children: [
            //     'views/design/color/',
            //   ]
            // },
            // {
            //   title: '组件',
            //   collapsable: true,
            //   children: [
            //     'views/components/basic/',
            //     'views/components/form/',
            //     'views/components/navigation/',
            //     'views/components/notice/',
            //     'views/components/other/'
            //   ]
            // },
        ]
      },
    // scss:{ //配置 scss 根目录
    //   includePaths: [path.join(__dirname, '../../style')]
    // }
  }
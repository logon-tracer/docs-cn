import { defineConfig } from 'vitepress'
import { description, discord, font, github, name, releases, twitter,} from './meta'

const version = '0.0.1'

export default defineConfig({
    lang: 'zh-CN',
    title: name,
    description,
    head: [
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
        ['meta', { property: 'og:title', content: name }],
        ['meta', { property: 'og:description', content: description }],
        ['meta', { name: 'twitter:title', content: name }],
        ['meta', { name: 'twitter:description', content: description }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['link', { href: font, rel: 'stylesheet' }],
        ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ],
    lastUpdated: true,
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        },
    },
    themeConfig: {
        logo: '/logo.svg',
        editLink: {
            pattern: 'https://github.com/logon-tracer/docs-cn/tree/main/:path',
            text: '为此页提供修改建议',
        },
        socialLinks: [
            { icon: 'twitter', link: twitter },
            { icon: 'discord', link: discord },
            { icon: 'github', link: github },
        ],
      localeLinks: {
        text: '简体中文',
        items: [
          { text: 'English', link: 'https://logon-tracer.elonehoo.xyz/guide/' },
        ],
      },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-PRESENT Elone Hoo',
        },
        nav: [
            { text: '指南', link: '/guide/' },
            { text: 'API', link: '/api/' },
            { text: '配置', link: '/config/' },
            {
                text: `v${version}`,
                items: [
                    {
                        text: '版本发布',
                        link: releases,
                    },
                ],
            },
        ],
        sidebar: {
            '/':[
              {
                text:'指引',
                items:[
                  {
                    text:'简介',
                    link:'/guide/why'
                  },
                  {
                    text:'开始',
                    link:'/guide/'
                  },
                  {
                    text:'特点',
                    link:'/guide/features'
                  },
                  {
                    text:'自定义邮件',
                    link:'/guide/content'
                  }
                ]
              },
              {
                text:'API',
                items:[
                  {
                    text:'API 参考',
                    link:'/api/'
                  }
                ]
              },
              {
                text:'配置日志',
                items:[
                  {
                    text:'log4j',
                    link:'/config/#log4j'
                  },
                  {
                    text:'属性列表',
                    link:'/config/settings'
                  }
                ]
              }
            ]
        }
    },
})

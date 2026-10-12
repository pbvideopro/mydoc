import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'vi-VN',
  title: 'My Docs',
  description: 'Tài liệu mẫu (nội dung giữ chỗ)',
  base: '/mydoc/',
  appearance: true,
  themeConfig: {
    nav: [{ text: 'Trang chủ', link: '/' }, { text: 'Hướng dẫn nhanh', link: '/getting-started/quickstart' }],
    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Cập nhật', link: '/getting-started/changelog' },
          { text: 'Hướng dẫn nhanh', link: '/getting-started/quickstart' },
          { text: 'Demo các tính năng', link: '/getting-started/demo' }
        ]
      },
      {
        text: 'Xử lý lỗi hay gặp',
        items: [{ text: 'Lỗi thường gặp (mẫu)', link: '/troubleshooting/common-errors' }]
      }
    ],
    search: { provider: 'local' },
    darkModeSwitchLabel: 'Giao diện',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Lên đầu trang',
    outline: { label: 'Trên trang này' },
    docFooter: { prev: 'Trang trước', next: 'Trang sau' }
  }
})

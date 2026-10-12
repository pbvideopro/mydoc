import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'vi-VN',
  title: 'My Docs',
  description: 'Tài liệu mẫu (nội dung giữ chỗ)',
  base: '/mydoc/',
  appearance: true,
  themeConfig: {
    nav: [{ text: 'Trang chủ', link: '/' }, { text: 'Video hướng dẫn nhanh', link: '/getting-started/video-huong-dan-nhanh' }],
    sidebar: [
      {
        text: 'GETTING STARTED',
        items: [
          { text: 'Cập nhật', link: '/getting-started/changelog' },
          { text: 'Hướng dẫn thêm Proxy', link: '/getting-started/huong-dan-them-proxy' },
          { text: 'Hướng dẫn tạo voice 11labs không giới hạn', link: '/getting-started/tao-voice-11labs' },
          { text: 'Demo các tính năng', link: '/getting-started/demo' },
          { text: 'Video hướng dẫn nhanh', link: '/getting-started/video-huong-dan-nhanh' },
          { text: 'Hướng dẫn lấy Apikey Gemini', link: '/getting-started/lay-apikey-gemini' },
          { text: 'Hướng dẫn sử dụng Audio Tag', link: '/getting-started/su-dung-audio-tag' },
          { text: 'Hướng dẫn lấy Cookies', link: '/getting-started/lay-cookies' },
          { text: 'Hướng dẫn kết nối Colab', link: '/getting-started/ket-noi-colab' },
          { text: 'Hướng dẫn sử dụng Seedance', link: '/getting-started/su-dung-seedance' }
        ]
      },
      {
        text: 'Xử lý lỗi hay gặp',
        collapsed: false,
        items: [
          { text: '💉 Hướng dẫn cài đặt FFmpeg trên Windows', link: '/troubleshooting/cai-ffmpeg-windows' },
          { text: '💉 Hướng dẫn cài đặt FFmpeg trên Mac M1', link: '/troubleshooting/cai-ffmpeg-mac-m1' },
          { text: '💉 Hướng dẫn cài đặt FFmpeg trên Mac Intel', link: '/troubleshooting/cai-ffmpeg-mac-intel' },
          { text: 'Lỗi hay xảy ra khi tạo video', link: '/troubleshooting/loi-khi-tao-video' },
          { text: 'Fix "App is damaged and can\'t be opened" on Mac', link: '/troubleshooting/fix-app-is-damaged-mac' },
          { text: 'Cài Node cho MAc', link: '/troubleshooting/cai-node-mac' },
          { text: 'Lỗi render invideo caption', items: [{ text: '❌ Lỗi: VCRUNTIME140_1.dll was not found', link: '/troubleshooting/loi-vcruntime140-1' }, { text: '⏰ Hướng dẫn chỉnh thời gian / sửa lỗi lệch múi giờ', link: '/troubleshooting/chinh-thoi-gian-mui-gio' }] }
        ]
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

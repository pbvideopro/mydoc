---
outline: [2, 3]
---

<p class="crumb">GETTING STARTED</p>

<h1 class="page-title"><span class="ti"></span>Hướng dẫn sử dụng Audio Tag (Gemini 3.1)</h1>

<p class="sample-note">Nội dung mẫu: văn bản giữ chỗ, không phải tài liệu thật.</p>

<div class="callout-warn"><strong>Quan trọng:</strong> Audio Tag chỉ dùng được với Gemini 3.1 TTS. Cú pháp rất chặt chẽ, cần viết đúng định dạng, và không nên lạm dụng quá nhiều tag trong một đoạn.</div>

📖 [Tài liệu gốc Google: Gemini API Speech Generation - Audio Tags](https://ai.google.dev/gemini-api/docs/speech-generation)

## 1. Danh sách các Audio Tags thông dụng nhất

| Tag | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `[whispers]` | Thì thầm | `[whispers] Đừng nói to nhé.` |
| `[shouting]` | Hét lên | `[shouting] Chạy mau!` |
| `[excitedly]` | Hào hứng | `[excitedly] Tuyệt vời quá!` |
| `[serious]` | Nghiêm túc | `[serious] Việc này rất quan trọng.` |
| `[laughs]` | Cười | `[laughs] Chuyện này buồn cười thật.` |

::: tip Mẹo
Nên viết tag bằng tiếng Anh, đặt trong dấu ngoặc vuông, đúng như bảng trên.
:::

## 2. Các mẫu kịch bản

```text
[excitedly] Chào mọi người, hôm nay có tin vui!
[whispers] Nhưng đây là bí mật nhé.
[laughs] Thôi, kể luôn cho vui.
```

## 3. Multi-speaker

Ghi rõ lời dẫn cho từng người nói, rồi viết thoại theo tên:

```text
Đọc đoạn hội thoại sau với Speaker1 giọng trầm ấm, Speaker2 giọng tươi vui:
Speaker1: [serious] Hôm nay ta bàn về kế hoạch mới.
Speaker2: [excitedly] Nghe hay quá, bắt đầu thôi!
```

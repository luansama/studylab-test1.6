# Study Lab – Phòng thí nghiệm ảo

Website tự học dành cho học sinh THCS, tổng hợp các thí nghiệm tương tác từ những tệp HTML nguồn được cung cấp.

## Tính năng

- Trang chủ dạng danh sách, có thanh tìm kiếm theo tên, nội dung, lớp và số bài. Chỉ cần nhập “Bài 2” để hiện các thí nghiệm thuộc Bài 2; không có cụm nút chọn bài học riêng.
- Lọc theo chủ đề: Tất cả, KHTN (Vật lí), KHTN (Hóa học), KHTN (Sinh học), Công nghệ.
- Lọc theo lớp 6, 7, 8, 9.
- Mỗi mục mở trang thí nghiệm tương ứng; một số trang tổng hợp có thể mở thẳng đúng phần mô phỏng bằng liên kết neo.
- Mọi phần kết luận đều được che lúc đầu. Nhấn vào miếng che với dòng “Bấm vào đây để xem kết luận!” để mở kết luận; nhấn nút đặt lại của thí nghiệm để che lại.
- Giao diện co giãn cho máy tính và điện thoại; menu thí nghiệm chuyển thành các nút lớn xếp dọc trên màn hình nhỏ, khung mô phỏng và canvas tự co theo chiều rộng, nút điều khiển và thanh trượt tự xuống dòng để tránh tràn ngang.
- Bản 1.7: trên điện thoại (≤600 px), phần hero dùng bố cục A một cột, nút khám phá rộng toàn khung và ba bước được rút thành các thẻ gọn; tablet (601–900 px) dùng bố cục trung gian; desktop (≥901 px) giữ nguyên giao diện cũ. Không dùng nhận diện tên thiết bị, chỉ dựa trên chiều rộng màn hình. Đã kiểm tra bố cục ở các chiều rộng 320, 375, 600, 768, 900 và 1280 px.
- Không cần cài thư viện hoặc máy chủ backend.

## Danh sách thí nghiệm

| Thí nghiệm | Môn | Lớp | Bài |
|---|---|---:|---:|
| Lực tiếp xúc và lực không tiếp xúc | KHTN (Vật lí) | 6 | 40 |
| Khảo sát độ cao của âm (Gảy đàn) | KHTN (Vật lí) | 7 | 12 |
| Khảo sát độ to của âm (Đánh trống) | KHTN (Vật lí) | 7 | 12 |
| Nguồn âm phát ra âm đều đang dao động (Âm thoa) | KHTN (Vật lí) | 7 | 12 |
| Khảo sát sự phản xạ âm | KHTN (Vật lí) | 7 | 14 |
| Sắt phản ứng với lưu huỳnh | KHTN (Hóa học) | 8 | 2 |
| Sự chuyển thể của nước | KHTN (Hóa học) | 8 | 2 |
| Tác dụng làm quay của lực | KHTN (Vật lí) | 8 | 18 |
| Sự chuyển hóa động năng – thế năng | KHTN (Vật lí) | 9 | 3 |

**Lưu ý:** Các bộ lọc Sinh học và Công nghệ vẫn được giữ theo thiết kế trang chủ; nguồn hiện có chưa cung cấp thí nghiệm thuộc hai nhóm này.

## Cấu trúc dự án

```text
study-lab/
├── index.html
├── README.md
├── project.json
├── .nojekyll
├── .gitignore
├── assets/
│   ├── css/home.css
│   ├── css/experiment-mobile.css
│   ├── js/catalogue-data.js
│   ├── js/home.js
│   └── images/favicon.svg
├── experiments/
│   ├── sat-phan-ung-voi-luu-huynh.html
│   ├── su-chuyen-the-cua-nuoc.html
│   ├── tac-dung-lam-quay-cua-luc.html
│   ├── khao-sat-do-cao-cua-am.html
│   ├── khao-sat-do-to-cua-am.html
│   ├── am-thoa-dao-dong-phat-ra-am.html
│   └── tong-hop-thi-nghiem-khtn.html
└── sources/
    ├── original-khtn8.html
    ├── original-song-am-khtn7.html
    └── original-tong-hop-thi-nghiem-khtn.html
```

## Chạy trên máy tính

Mở `index.html` bằng trình duyệt hiện đại. Các thí nghiệm sử dụng Canvas và một số API âm thanh của trình duyệt; nhấn nút tương tác trong thí nghiệm để kích hoạt âm thanh nếu trình duyệt yêu cầu.

## Đưa lên GitHub Pages

1. Tạo một repository GitHub mới.
2. Giải nén ZIP và tải **các tệp bên trong thư mục `study-lab`** lên repository (để `index.html` nằm ở thư mục gốc).
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**, chọn nhánh `main` và thư mục `/ (root)`, sau đó lưu.
5. Mở địa chỉ GitHub Pages được cung cấp sau khi xuất bản.

## Phiên bản 1.7

- Tinh chỉnh riêng hero trang chủ cho điện thoại để tránh tràn ngang và giảm chiều cao phần mở đầu.
- Giữ nguyên bố cục hero desktop; tablet chỉ thu nhỏ minh họa và khoảng cách.
- Không thay đổi dữ liệu thí nghiệm, chức năng tìm kiếm/lọc hoặc nội dung các trang mô phỏng.

## Ghi chú chỉnh sửa

- Dữ liệu danh sách nằm trong `assets/js/catalogue-data.js`.
- Giao diện trang chủ nằm trong `assets/css/home.css`.
- Tối ưu bố cục điện thoại cho các trang thí nghiệm nằm trong `assets/css/experiment-mobile.css`.
- Logic tìm kiếm và lọc nằm trong `assets/js/home.js`.
- Các trang thí nghiệm nằm trong `experiments/`.
- Các tệp HTML nguồn ban đầu được lưu trong `sources/`.

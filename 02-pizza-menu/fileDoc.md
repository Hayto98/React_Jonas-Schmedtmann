# Tóm tắt README.md – Thiết lập Dự án React với Create-React-App

## 1. Giới thiệu công cụ

Create-React-App (CRA) là công cụ dòng lệnh giúp khởi tạo nhanh ứng dụng React hiện đại, không cần cấu hình thủ công.

## 2. Mở Terminal / Command Prompt

## 3. Điều hướng đến thư mục mong muốn

Dùng cd [tên_thư_mục] để di chuyển đến nơi muốn tạo dự án.

Dùng ls (Mac) hoặc dir (Windows) để xem nội dung thư mục.

## 4. Tạo ứng dụng React

- npx create-react-app@5 pizza-menu

pizza-menu là tên thư mục dự án <br>
@5 dùng để khóa phiên bản 5 của CRA (tương thích bài giảng)

## 5. Cấu trúc dự án

package.json: Thông tin dự án và script npm

node_modules/: Thư viện được cài

public/index.html: Nơi chứa <div id="root">

src/index.js: Gắn ReactDOM.createRoot() vào #root

src/App.js: Thành phần chính của giao diện

## 6. Chạy ứng dụng

- npm run start

## 7. Cập nhật nóng (Hot Module Replacement)

- Hot Module Replacement (HMR) cho phép cập nhật một phần mã nguồn (module) của ứng dụng ngay lập tức trên trình duyệt mà không cần phải tải lại toàn bộ trang.

Thay đổi file App.js → lưu → trình duyệt tự động cập nhật

## 8. Tổng kết

CRA giúp thiết lập nhanh chóng, dễ dàng

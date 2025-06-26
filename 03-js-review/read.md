# 📘 JavaScript Review: Destructuring (Phá Hủy)

Đây là phần hướng dẫn quan trọng từ Jonas về **Destructuring (Phá hủy)** trong JavaScript – kỹ thuật cực kỳ hữu ích khi làm việc với dữ liệu từ API và React components.

---

## 🔍 Destructuring là gì?

Destructuring là cú pháp cho phép **trích xuất giá trị** từ `object` hoặc `array` và **gán trực tiếp vào biến**, giúp mã ngắn gọn và dễ hiểu hơn.

---

## 🧱 Phá hủy Đối tượng (Object Destructuring)

### 🆚 Cách thông thường:

```js
const book = getBook(2);
const title = book.title;
const author = book.author;
```

### ✅ Dùng Destructuring:

```js
const { title, author } = getBook(2);
```

### 🧩 Lấy nhiều thuộc tính cùng lúc:

```js
const { title, author, pages, published, genres, hasMovieAdaptation } =
  getBook(2);
```

> ⚠️ **Tên biến phải trùng với tên thuộc tính** trong object.

---

## 📚 Phá hủy Mảng (Array Destructuring)

```js
const genres = ["Science Fiction", "Humor", "Adventure", "Drama", "Fantasy"];
```

### ✅ Lấy phần tử đầu tiên và thứ hai:

```js
const [primaryGenre, secondaryGenre] = genres;
```

> 🔁 **Dựa vào thứ tự phần tử trong mảng**, không phải tên.

---

## 🛠 Thử nghiệm nhanh với Quokka.js

- **Quokka.js** là tiện ích trong VS Code dùng để chạy nhanh mã JavaScript ngay trong trình soạn thảo.
- Cực kỳ hữu ích để **debug nhanh**, **test logic nhỏ** mà không cần kết nối HTML.

### ✨ Cách dùng nhanh:

1. Cài đặt Quokka từ Extensions
2. Dùng tổ hợp `Ctrl+Shift+P` → `Start Quokka on Current File`
3. Xem kết quả ngay bên cạnh mã

---

## 💡 Khi nào nên dùng Destructuring?

| 📌 Trường hợp sử dụng   | ✅ Lợi ích                                       |
| ----------------------- | ------------------------------------------------ |
| Làm việc với API        | Lấy nhanh dữ liệu từ object trả về               |
| Truy xuất nhiều giá trị | Không cần viết lặp `obj.prop` nhiều lần          |
| Sử dụng trong React     | Phá hủy `props`, `state`, hoặc `useState` trả về |

---

## 🧠 Tổng kết

| ✅ Ưu điểm           | 💬 Mô tả                                   |
| -------------------- | ------------------------------------------ |
| Ngắn gọn & rõ ràng   | Chỉ cần 1 dòng thay vì nhiều               |
| Tăng tính dễ đọc     | Nhìn vào biết đang lấy gì                  |
| Dễ kết hợp với React | props, state, hooks đều dùng destructuring |

---

📎 _Destructuring là một trong những tính năng hiện đại nhất trong ES6+ giúp mã JavaScript trở nên "sạch", ngắn gọn và chuyên nghiệp._

🚀 **Hãy luyện tập thường xuyên để làm chủ kỹ thuật này!**

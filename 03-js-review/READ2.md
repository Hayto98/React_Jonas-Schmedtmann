# Toán tử rest (...rest) và spread (...spread) trong JavaScript

## 1. Toán tử Rest (...) trong Destructuring (phá hủy cấu trúc)

Dùng để gom các phần tử còn lại trong một mảng hoặc các thuộc tính còn lại trong một object thành một biến mới.

```js
const [main, secondary, ...otherGenres] = [
  "Sci-Fi",
  "Comedy",
  "Drama",
  "Action",
  "Horror",
];
console.log(otherGenres); // ['Drama', 'Action', 'Horror']
```

Lưu ý: Rest phải được đặt ở cuối trong destructuring. Nếu không, sẽ gây lỗi:

- "Rest element must be last element"

## 2. Toán tử Spread (...) để tạo bản sao hoặc hợp nhất

Mảng:

- Dùng để thêm phần tử vào đầu/cuối hoặc sao chép mảng:

```js
const genres = ["Sci-Fi", "Comedy"];
const allGenres = [...genres, "Epic Fantasy"];
console.log(allGenres); // ['Sci-Fi', 'Comedy', 'Epic Fantasy']
```

Đối tượng:

- Dùng để thêm hoặc ghi đè thuộc tính:

```js
const book = { title: "LOTR", pages: 1216 };
const updatedBook = { ...book, movieReleaseDate: "2001-12-19" };
```

- Nếu bạn muốn ghi đè thuộc tính cũ, thì viết thuộc tính mới sau spread:

```js
const updatedBook = { ...book, pages: 1210 }; // pages ghi đè
```

- Nếu viết thuộc tính trước ...book, thì giá trị cũ sẽ ghi đè lại:

```js
const updatedBook = { pages: 1210, ...book }; // pages vẫn là 1216
```

## 3. Quan trọng khi dùng trong React

- Kỹ thuật này cực kỳ quan trọng khi cập nhật state trong React, vì bạn cần sao chép state cũ rồi cập nhật phần mới để đảm bảo tính bất biến (immutability):

```js
setBook((prev) => ({
  ...prev,
  pages: 1210,
}));
```

## Tóm lại bạn cần nhớ:

| Toán tử       | Mục đích                       | Ngữ cảnh sử dụng      |
| ------------- | ------------------------------ | --------------------- |
| ...rest       | Gom phần còn lại               | Trong destructuring   |
| ...spread     | Trải giá trị mảng/object ra    | Tạo bản sao, thêm/gộp |
| Ghi đè object | Viết thuộc tính mới sau ...obj | Để cập nhật dữ liệu   |

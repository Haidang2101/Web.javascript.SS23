let arr = [5, 12, 8, 15, 10, 3, 18, 7, 14, 9];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}

console.log("Số lượng phần tử lớn hơn hoặc bằng 10 là:", count);

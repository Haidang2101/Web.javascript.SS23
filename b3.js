let n = +prompt("Nhập số phần tử của mảng:");

if (n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    let arr = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
        let value = +(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(value);
        if (value < 0 && Number.isInteger(value)) {
            count++;
        }
    }

    console.log(count);
}

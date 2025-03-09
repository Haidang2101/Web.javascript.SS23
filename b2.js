let arr = [];
while (arr.length < 10) {
    let value = parseInt(prompt(`Nhập phần tử thứ ${arr.length + 1} (khác với các phần tử trước):`));
    if (!arr.includes(value)) {
        arr.push(value);
    } else {
        alert("Phần tử đã tồn tại, vui lòng nhập số khác.");
    }
}

if (arr.length === 0) {
    console.log("Không có số lớn nhất");
} else {
    let max = arr[0];
    let index = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }

    console.log("Số lớn nhất:", max);
    console.log("Vị trí:", index);
}

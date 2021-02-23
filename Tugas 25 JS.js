var arr = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya :", arr.join(","));
// Sebelum di urutkan
arr = arr.sort();
console.log("Ascending : ", arr.join(","));
// sesudah di urutkan dari kecil ke besar
arr = arr.reverse();
console.log("Descending :", arr.join(","));
// sesudah di urutkan dari besar ke kecil
arr = arr.filter(function(element) {
    return element > 10;
})
console.log("Filter > 10 : ", arr.join(","));
// stt for Top 20 Table
document.addEventListener('DOMContentLoaded', function () {
    var table = document.getElementById('numberTable');

    for (var i = 1; i <= 20; i++) {
        var row = table.insertRow();
        for (var j = 0; j < 8; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                cell.innerHTML = i; // Điền số thứ tự từ 2
            } 
        }
    }
});


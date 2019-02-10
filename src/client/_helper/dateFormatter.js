export function dateFormatter(cell) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var date = new Date(cell);
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    var day = ('0' + date.getDate()).slice(-2);
    var hour = ('0' + date.getHours()).slice(-2);
    var min = ('0' + date.getMinutes()).slice(-2);
    var sec = ('0' + date.getSeconds()).slice(-2);

    return day + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
};
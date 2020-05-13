
export function tranDate(standard_time){

    if (standard_time == null) {
        return null
    }
    let d = new Date(standard_time.replace(/-/g, '/').replace('T', ' ').replace('.000+0800', ''));

    let hour = d.getHours();
    let minutes = d.getMinutes();


    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }


    let time = " " + hour + ":" + minutes  ;
    return time;
}
export function tranDate1(standard_time) {

    if (standard_time == null) {
        return null
    }

    let d = new Date(standard_time.replace(/-/g, '/').replace('T', ' ').replace('.000+0800', ''));
    let month = d.getMonth() + 1;
    let day = d.getDate();

    if (month < 10) {
        month = "0" + month;
    }

    if (day < 10) {
        day = "0" + day;
    }




    let t = d.getFullYear() + "-" + month + "-" + day ;
    return t;
}
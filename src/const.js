export const fakeImg =
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";

export const colors = {
    primary: "#6651f0",
    primary2: "#8875FF",
    primaryPink: "#C44C68",
    primaryPink2: "#BF88EC",
    textColor: "#2A2B4B",
};

export const timeFomat = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();

    const fomatNumLessThanTen = (num) => {
        if (num < 9) return "0" + num;
        return num;
    };

    const getDateFomat = () => {
        if (date.getDate() == today.getDate()) {
            return "Today";
        } else {
            const day = fomatNumLessThanTen(date.getDate());
            const month = fomatNumLessThanTen(date.getMonth() + 1);
            const year = date.getFullYear();
            return day + "-" + month + "-" + year;
        }
    };

    const getTimeFomat = () => {
        const hours = fomatNumLessThanTen(date.getHours());
        const minutes = fomatNumLessThanTen(date.getMinutes());
        return hours + ":" + minutes;
    };

    const dateFomat = getDateFomat();
    const timeFomat = getTimeFomat();

    return dateFomat + " At " + timeFomat;
};

export const validatePassword = (pass) => {
    return String(pass)
        .trim()
        .match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/);
};

export const validateEmail = (email) => {
    return email
        .toLowerCase()
        .trim()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const validateUserName = (name) => {
    return name.trim().length > 0;
};

export const isValidPhone = (phoneNumber) => {
    const phoneRegex = /^(\+84|0)\d{9,10}$/; // số điện thoại Việt Nam bắt đầu bằng +84 hoặc 0, độ dài từ 10 đến 11 số
    return phoneRegex.test(phoneNumber);
};

export const formatPhone = (phoneNumber) => {
    if (phoneNumber[0] === "0") {
        phoneNumber = "84" + phoneNumber.slice(1);
    }
    return `+${phoneNumber}`;
};

export const dayNamesShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const hexToRgba = (hex, alpha) => {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);

    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
};

//convertViToEn
export const convertViToEn = (str, toUpperCase = false) => {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư

    return toUpperCase ? str.toUpperCase() : str;
};

//eas build -p android --profile preview

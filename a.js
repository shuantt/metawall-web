app.use(function (err, req, res, next) {
    err.statusCode = err.statusCode || 500;
    // 開發環境 development
    if (process.env.NODE_ENV === 'dev') {
        return resErrorDev(err, res);
    }
    // 正式環境 production
    // isAxiosError 是 axios 套件提供的錯誤屬性
    if (err.isAxiosError == true) {
        err.message = "axios 連線錯誤";
        err.isOperational = true;
        return resErrorProd(err, res)
    }
    // ValidationError 是 mongoose 驗證產生的相關錯誤
    else if (err.name === 'ValidationError') {
        // mongoose 資料辨識錯誤
        err.message = "資料欄位未填寫正確，請重新輸入！";
        err.isOperational = true;
        return resErrorProd(err, res)
    }
    // SyntaxError 資料格式錯誤
    // POST 與 PATCH API，body 寫 "content": 、
    else if (err.name === 'SyntaxError') {
        err.message = "資料格式錯誤";
        err.isOperational = true;
        return resErrorProd(err, res)
    }
    resErrorProd(err, res)
});
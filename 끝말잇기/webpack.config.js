const path = require('path');

module.exports = {
    name:"word-relay-setting",
    mode:'development', //실 서비스 : production
    devtool:'eval',

    entry:{
        app:['./client.jsx', 'WordRelay.jsx'],

    }, //입력

    output:{
        path:path.join(__driname, 'dist'),
        filename:'app.js'
    } // 출력

}
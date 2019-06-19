const fs = require("fs");
const https = require("https");
const express = require('express');
const app = express();
const compression = require('compression')
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    secureConnection: true,
    port: 465,
    auth: {
        user: '851553114@qq.com',
        pass: 'wfnleiqissufbdha'
    }
});
const cors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(compression());
app.use(cors);
app.use('/', express.static('static-index'));
app.use('/fuliao-webapp-vue', express.static('static-fuliao-webapp-vue'));
app.use('/qingning-wxapp-native', express.static('static-qingning-wxapp-native'));
app.listen(80, '0.0.0.0')

const proxy = (url, response) => {
    https.get(url, (data) => {
        let str = "";
        data.on("data", (chunk) => {
            str += chunk;
        });
        data.on("end", function () {
            response.writeHead(200, {
                "Content-Type": "text/html;charset=utf-8"
            });
            response.end(str.toString());
        });
    });
}
const READ = (url, content) => {  //模拟数据库读取方法
    return JSON.parse(fs.readFileSync(url).toString());
}
const SELECT = (start, end, name) => {
    const STORE = READ('./STORE.json'); 
    const SELECTEDBYTIME = [];
    const SELECTEDBYNAME = [];
    STORE.forEach((e) => {
        if (+e.time >= +start && +e.time <= +end) {
            SELECTEDBYTIME.push(e);
        }
    });
    if (!name) {
        return SELECTEDBYTIME;
    } else {
        SELECTEDBYTIME.forEach((e) => {
            if (e.name == name) {
                SELECTEDBYNAME.push(e);
            }
        });
        return SELECTEDBYNAME;
    }
}

//app.get('*', (req) => {
//    console.log(req)
//})

app.get('/tuijian', (req, res) => {
    proxy(`https://api.96friend.cn/videoLive!getRecommendList.htm?apptype=6&_timestamp=${Math.floor(+new Date() / 1000)}&userid=26307780&type=1&pagesize=14&pageno=${req.query.page}&cversion=29011505`, res);
})
app.get('/meili', (req, res) => {
    proxy(`https://api.96friend.cn/videoLive!getCharmList.htm?apptype=6&_timestamp=${Math.floor(+new Date() / 1000)}&userid=26307780&pagesize=14&pageno=${req.query.page}&cversion=29011505`, res);
})
app.get('/caiyi', (req, res) => {
    proxy(`https://api.96friend.cn/videoLiveChannel!getChannelVideoLiveList.htm?apptype=6&_timestamp=${Math.floor(+new Date() / 1000)}&userid=26307780&type=1&pagesize=14&pageno=${req.query.page}&cversion=29011505`, res);
})
app.get('/hangzhou', (req, res) => {
    proxy(`https://api.96friend.cn/videoLive!getLiveSameCityList.htm?apptype=6&&_timestamp=${Math.floor(+new Date() / 1000)}&userid=26307780&pagesize=14&pageno=${req.query.page}&cversion=29011505`, res);
})
app.get('/moretuijian', (req, res) => {
    proxy(`https://api.96friend.cn/videoLive!getRecommendList.htm?apptype=6&userid=26307780&pageno=1&type=1&pagesize=666&cversion=29011505`, res);
})
app.get('/morecaiyi', (req, res) => {
    proxy(`https://api.96friend.cn/videoLiveChannel!getChannelVideoLiveList.htm?apptype=6&_timestamp=${Math.floor(+new Date() / 1000)}&userid=26307780&type=1&pageno=1&cversion=29011505`, res);
})
app.get('/smallvideolist', (req, res) => {
    proxy(`https://baseapi.busi.inke.cn/live/HotFeed`, res);
})
app.get('/smallvideoinfo', (req, res) => {
    proxy(`https://service.inke.cn/api/v2/feed/show?feed_id=${req.query.id}&uid=9527`, res);
})
app.get('/videochatlist', (req, res) => {
    proxy(`https://api.96friend.cn/videoPair!getSingleVideoPairListV2Soft.htm?apptype=6&userid=26307780&pagesize=14&pageno=${req.query.page}`, res);
})

const accessed = (req) =>  {
    const  mailOptions = {
        from: '851553114@qq.com',
        to: 'yinnuo96@163.com',
        subject: 'Website Accessed',
        html: '<p>IP : ' + req.ip + '<br><br><br>URL : ' + req.headers.host + req.url + '<br><br><br>User Agent : ' + req.headers['user-agent'] + '</p>' 
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error)
            console.log(error)
    })
}

app.get('/fuliao-webapp-vue', function (req, res) {
    accessed(req)
    fs.readFile('./fuliao-webapp-vue.html', (err, data) => {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        });
        res.end(data.toString());
    });
})
app.get('/fuliao-live-without-flash', function (req, res) {
    accessed(req)
    fs.readFile('./fuliao-live-without-flash.html', (err, data) => {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        });
        res.end(data.toString());
    });
})
app.get('/fuliao-live-audit-record', function (req, res) {
    accessed(req)
    fs.readFile('./fuliao-live-audit-record.html', (err, data) => {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        });
        res.end(data.toString());
    });
})
app.get('/shumei', function (req, res) {
    fs.readFile('./shumei.html', (err, data) => {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        });
        res.end(data.toString());
    });
})

app.get('/', function (req, res) {
    //accessed(req)
    fs.readFile('./index.html', (err, data) => {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        });
        res.end(data.toString());
    });
})

app.get('/resume', function (req, res) {
    fs.readFile('./前端开发-尹成诺-2年经验_-18338112210.pdf', (err, data) => {
        res.writeHead(200, {
            "Content-Type": "application/pdf",
   	    "Content-Disposition": "attachment;"
        });
        res.end(data);
    });
})

app.get('/search', function (req, res) {
    if (req.query.name == '请选择') {
        res.end(JSON.stringify(SELECT(+req.query.start, +req.query.end)));
    } else {
        res.end(JSON.stringify(SELECT(+req.query.start, +req.query.end, req.query.name)));
    }
})

app.get('/indexpost', (req, res) => {
    const  mailOptions = {
        from: '851553114@qq.com',
  	to: 'yinnuo96@163.com', 
   	subject: `${req.query.name}在你的简历上留言了`,
   	html: '<b>' + req.query.message + '<br><br><br>我的邮箱是：' + req.query.email + '</b>' // html body
    };
    //transporter.sendMail(mailOptions, function(error, info){
    //    if(error)
    //        console.log(error)
    //});
    res.end('success');
})

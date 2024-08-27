import axios from "axios";


function getTest1() {
    axios.get('http://127.0.0.1:8060/axios/helloGetNoParam')
        .then(function (response) {
            console.log("response.status:" + response.status)
            let {code, data, message} = response.data;
            console.log("code:" + code);
            console.log("data:" + data);
            console.log("message:" + message)
        })
        .catch(function (error) {
            console.log(error);
        });
}


function getTest2() {
    axios.get('http://127.0.0.1:8060/axios/helloGetWithParam?id="id123"')
        .then(function (response) {
            console.log("response.status:" + response.status)
            let {code, data, message} = response.data;
            console.log("code:" + code);
            console.log("data:" + data);
            console.log("message:" + message)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getTest3() {
    axios.get('http://127.0.0.1:8060/axios/helloGetWithParam', {params: {id:"id123"}})
        .then(function (response) {
            console.log("response.status:" + response.status)
            let {code, data, message} = response.data;
            console.log("code:" + code);
            console.log("data:" + data);
            console.log("message:" + message)
        })
        .catch(function (error) {
            console.log(error);
        });
}


function getTest4() {
    axios({
        method: 'get',
        url: 'http://127.0.0.1:8060/axios/helloGetWithParam',
        params: {
            id: "id1234"
        }
    }).then(function (response) {
        console.log("response.status:" + response.status)
        let {code, data, message} = response.data;
        console.log("code:" + code);
        console.log("data:" + data);
        console.log("message:" + message)
    })
    .catch(function (error) {
            console.log(error);
    });
}




function postTest1() {
    axios.post('http://127.0.0.1:8060/axios/helloPost', {
        key: 'Key',
        value: 'Val'
    }).then(function (response) {
        console.log("response.status:" + response.status)
        let {code, data, message} = response.data;
        console.log("code:" + code);
        console.log("data:" + data);
        console.log("message:" + message)
    }).catch(function (error) {
        console.log(error);
    });
}







function multiRequestMethod() {
    Promise.all([getTest1(), postTest()])
        .then(function (results) {
            const getResult = results[0];
            const postResult = results[1];
        });
}


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8060/axios',
    timeout: 1000
});

function postTest2() {
    instance.post('/helloPost', {
        key: 'Key3',
        val: 'Val3'
    }).then(function (response) {
        console.log("response.status:" + response.status)
        let {code, data, message} = response.data;
        console.log("code:" + code);
        console.log("data:" + data);
        console.log("message:" + message)
    }).catch(function (error) {
        console.log(error);
    });
}



/**
 *
 * {
 *   // 服务器的响应
 *   data: {},
 *
 *   // status 服务器响应的 HTTP 状态码
 *   status: 200,
 *
 *   // statusText 服务器响应的 HTTP 状态信息
 *   statusText: 'OK',
 *
 *   // headers 服务器响应头
 *   // header 名称都是小写，而且可以使用方括号语法访问
 *   // 例如: `response.headers['hall-type']`
 *   headers: {},
 *
 *   // config  axios请求的配置信息
 *   config: {},
 *
 *   // request 生成此响应的请求
 *   // 在node.js中它是最后一个ClientRequest实例,
 *   // 在浏览器中则是 XMLHttpRequest 实例。
 *   request: {}
 * }
 *
 *
 *
 *
 *
 * */
postTest2()


/*拦截器*/

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    config.headers.Authorization = 'Np Token'

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});


getTest1()





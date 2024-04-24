import axios from "axios";


function register() {
    axios.post('http://127.0.0.1:8060/register', {
        username: 'Key',
        password: 'Val'
    }).then(function (response) {
        console.log("response.status:" + response.status)
        let {code, data, message} = response.data;
        console.log("code:" + code);
        console.log("data:" + data);
        console.log("message:" + message)
    }).catch(function (error) {
        console.log(error)
    });
}



function login() {
    axios.post('http://127.0.0.1:8060/login', {
        username: 'Key',
        password: 'Val'
    }).then(function (response) {
        console.log("response.status:" + response.status)
        let {code, data, message} = response.data;
        console.log("code:" + code);
        console.log("data:" + data);
        console.log("message:" + message)
    }).catch(function (error) {
        console.log(error)
    });
}

login()




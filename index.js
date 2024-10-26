var api_url = 'https://api.tronoss.work/api';
var currentUrl = window.location.href;

// 获取当前 URL 的参数
var urlParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlParams.entries()); // 转换为对象

var xhr = new XMLHttpRequest();
xhr.open('POST', api_url + '/client_auth_single', true);
xhr.setRequestHeader('Content-Type', 'application/json'); // 设置请求头

// 准备要发送的数据
var data = JSON.stringify({});

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const responseData = JSON.parse(xhr.responseText);

    if (responseData.code == 200) {
      console.log(responseData);

      if (responseData.data && responseData.data.url) {
        // 构建新的 URL，包括当前域名的参数
        // var newUrl = new URL(responseData.data.url + '/mk1');
        // for (const [key, value] of Object.entries(params)) {
        //   newUrl.searchParams.append(key, value); // 添加参数
        // }
        // window.location.replace(newUrl.toString()); // 跳转到新的 URL
        // window.open('https://pay-trx0086.pages.dev'); // 跳转到新的 URL
        window.close();
      }
    }
  }
};

xhr.send(data); // 发送数据

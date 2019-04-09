//get

export function httpGet(url) {
    var result = fetch(url);
    return result
}

/**
 * post
 *
 */
export function httpPost(url, data) {
    var result = fetch(url, {
        method: "post",
        headers: {
            'Accept': 'application/json,text/plain,*/*',
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: params(data)
    });
    return result
}

function params(obj) {

    var result = "";
    var item;
    for (item in obj) {
        console.log(item)
        result += "&" + item + "=" + encodeURIComponent(obj[item]);
    }
    if (result) {
        result = result.slice(1)
    }
    console.log(result);
    return result;
}
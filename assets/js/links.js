function getDate(format = "en-US") {
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    var today = new Date();
    let target = document.querySelectorAll(".currDate");
    target.forEach(ele => {
        ele.innerHTML = today.toLocaleDateString(format, options)
    })
}
getDate();
var browserType;
if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
    browserType = 'Opera';
} else if (navigator.userAgent.indexOf("Chrome") != -1) {
    browserType = 'Chrome';
} else if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1) {
    browserType = 'Safari';
} else if (navigator.userAgent.indexOf("Firefox") != -1) {
    browserType = 'Firefox';
} else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
    browserType = 'IE';
} else {
    browserType = 'unknown';
}
var linkParams = new URLSearchParams(window.location.search);
var passValue = linkParams.get("pass");
var routeValue = linkParams.get("route");
linkParams.delete("pass");
linkParams.delete("route");
if (routeValue) {
    sessionStorage.setItem("route", routeValue);
}
var newLinkParams = new URLSearchParams(linkParams);
var links = document.getElementsByClassName('links');
var currhost = window.location.host;
for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute('href');
    var url = new URL(href);
    if (currhost === "articles.suresleepmask.com") {
        links[i].href = links[i].href.replace(/suresleepmask.com/, 'thesuresleepmask.com');
    } else if (urlValue) {
        links[i].href = urlValue === 'main' ? links[i].href.replace(/suresleepmask.com/, 'suresleepmask.com') : urlValue === 'alt' ? links[i].href.replace(/suresleepmask.com/, 'thesuresleepmask.com') : links[i].href.replace(/suresleepmask.com/, 'suresleepmask.com');
    }
    if (routeValue) {
        var routeLink = !passValue ? routeValue : passValue;
        links[i].href = links[i].href.replace(/checkout|main|main2|main3|cc2|checkoutd/, routeLink);
    }
    if (!url.search) {
        links[i].href = links[i].href + '?' + newLinkParams.toString();
    }
}
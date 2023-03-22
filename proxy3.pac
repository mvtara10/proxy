var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/^test-an-0001\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^rnd-dwh-.*\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^prod-en-0014$/.test(host)) return "+proxy";
        if (/^rnd-pr-.*\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^0001mediahdp01\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^prod-nn-.*\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^prod-mn-/.test(host)) return "+proxy";
        if (/^proc-mn-/.test(host)) return "+proxy";
        if (/^dwh-mn-/.test(host)) return "+proxy";
        if (/^10\.40\.148\.201$/.test(host)) return "+proxy";
        if (/^10\.72\.224\.53$/.test(host)) return "+bproxy";
        if (/^test-en-0001\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^idm\.inside\.mts\.ru\/$/.test(host)) return "+bproxy";
        if (/^sdp-gprs\.mts\.ru$/.test(host)) return "+bproxy";
        if (/^http:\/\/rnd-pr-mn-001:8081\/$/.test(host)) return "+bproxy";
        if (/^oebs-r12\.mts\.ru\/$/.test(host)) return "+bproxy";
        if (/^test-en-0002\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^test-dn-.*\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/(?:^|\.)pv\.mts\.ru$/.test(host)) return "+bproxy";
        if (/^test-dl-0001\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^test-kn-0018\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^prod-mn-0007\.pv\.mts\.ru$/.test(host)) return "+proxy";
        if (/^test-en-0004\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^jupyterhub\.bd\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^test-en-0005\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^test-kn-0001\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/^en-bim\.msk\.bd\.mts\.ru$/.test(host)) return "+proxy";
        if (/^test-cn-/.test(host)) return "+proxy";
        if (/^cdl-en-0001\.msk\.mts\.ru$/.test(host)) return "+proxy";
        if (/(?:^|\.)mts\.ru$/.test(host)) return "DIRECT";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY bdwebgate01:3128";
    },
    "+bproxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY bproxy:3131";
    }
});

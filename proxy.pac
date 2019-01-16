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
}("+Auto Switch", {
    "+Auto Switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)dnvod\.tv$/.test(host)) return "+dnvod";
        return "+__ruleListOf_Auto Switch";
    },
    "+__ruleListOf_Auto Switch": "DIRECT",
    "+dnvod": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY ::1:8899";
    }
});


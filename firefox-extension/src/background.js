function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let encoder = new TextEncoder();
  let url = new URL(details.url);
  let one_px_gif_data = "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

  filter.ondata = event => {
    if (url.pathname.endsWith("8.f1e991deb25eab01d184.js")) {
        console.log("dnvod-ad-killer: detected target js (chunk)");
    } else if (url.hostname.endsWith("ppv.dnvod.tv") && url.pathname.startsWith("/upload/video")) {
        console.log("dnvod-ad-killer: detected target image (chunk)");
    } else {
      filter.write(event.data);
    }
  };

  filter.onstop = event => {
    if (url.pathname.endsWith("8.f1e991deb25eab01d184.js")) {
      var de_url = browser.runtime.getURL("8.f1e991deb25eab01d184.de.js");
      var xhr = new XMLHttpRequest();
      xhr.open('GET', de_url, false);
      xhr.send(null);
      if (xhr.status === 200) {
        console.log("dnvod-ad-killer: detected target js (final chunk)");
        filter.write(encoder.encode(xhr.responseText));
        filter.disconnect();
      } else {
        console.log("dnvod-ad-killer: Error in getting hacked js");
      }
    } else if (url.hostname.endsWith("ppv.dnvod.tv") && url.pathname.startsWith("/upload/video")) {
        console.log("dnvod-ad-killer: detected target image (final chunk)");
        base64ed = window.atob(one_px_gif_data);
        var array = new Uint8Array(new ArrayBuffer(base64ed.length));
          for(i = 0; i < base64ed.length; i++) {
            array[i] = base64ed.charCodeAt(i);
        }
        filter.write(array);
    }

    // filter.close();
    filter.disconnect();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["*://*.dnvod.tv/*"], types: ["script", "image"]},
  ["blocking"]
);

// function openPage() {
//   browser.tabs.create({
//     url: "https://www.dnvod.tv"
//   });
// }

// browser.browserAction.onClicked.addListener(openPage);

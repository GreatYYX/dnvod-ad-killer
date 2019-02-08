document.addEventListener("DOMContentLoaded", function() {
	remove_ad_images();
});

window.addEventListener("load", function() {
	remove_ad_images();
});

window.addEventListener("load", function() {
	remove_ad_images();
});

window.addEventListener("hashchange", function() {
	remove_ad_images();
}, false);

function remove_ad_images() {
	links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		url = new URL(links[i].href);
		if (url.hostname.startsWith("ppt.dnvod.tv")) {
			console.log("found ad link, removing...");
			links[i].parentNode.removeChild(links[i]);
		}
	}
}
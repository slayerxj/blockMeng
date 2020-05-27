var observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		var node = mutation.addedNodes[0];
		if (!node) {
			return;
		}
		var parent = node.parentElement;
		var a = node.children[0].children[0].children[0];
		for (var i = 0; i < a.children.length; i++) {
			var title = a.children[i].getAttribute("title");
			if ((title == "peiyangium") || (title == "孟院（小）")) {
				parent.removeChild(node);
			}
		}
	});
});

var observerOption = {
	'childList': true,
	'subtree': false,
	'attributes': false
};

var chatContent = document.getElementById("chatArea").childNodes[13].childNodes[1];
observer.observe(chatContent, observerOption);
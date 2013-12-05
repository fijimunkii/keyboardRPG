chrome.extension.sendMessage({}, function(response) {

	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("KeyboardRPG loaded up!");
		// ----------------------------------------------------------


    Mousetrap.bind('g i', function() {
      console.log("navigated to inbox - 2 points");
    });

    Mousetrap.bind('g a', function() {
      console.log("navigated to all mail - 2 points");
    });

    Mousetrap.bind('j', function() {
      console.log("navigated down - 1 point");
    });

    Mousetrap.bind('k', function() {
      console.log("navigated up - 1 point");
    });

    Mousetrap.bind('e', function() {
      console.log("archived an email - 3 points!");
    });

    Mousetrap.bind('up up down down left right left right b a enter', function() {
      console.log("KONAMI CODE!!!!");
    });

    Mousetrap.bind(['command+enter+shift','ctrl+enter+shift'], function(e) {
      $('div[aria-label="Send and archive"]').click();
      console.log("SEND & ARCHIVE FTW!");
    });

	}
	}, 10);
});

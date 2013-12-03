chrome.extension.sendMessage({}, function(response) {

	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("KeyboardRPG loaded up!");
		// ----------------------------------------------------------


    $(document).on('keydown', 'g i', function() {
      console.log("navigated to inbox - 2 points");
    });

    $(document).on('keydown', 'g a', function() {
      console.log("navigated to all mail - 2 points");
    });

    $(document).on('keydown', 'j', function() {
      console.log("navigated down - 1 point");
    });

    $(document).on('keydown', 'k', function() {
      console.log("navigated up - 1 point");
    });

    $(document).on('keydown', 'e', function() {
      console.log("archived an email - 3 points!");
    });

    Mousetrap.bind('up up down down left right left right b a enter', function() {
      console.log("KONAMI CODE!!!!");
    });

    $('div[aria-label="Message Body"]').bind('keydown', 'command+enter+shift', function(e) {
      $('div[aria-label="Send and archive"]').click();
      console.log("SEND & ARCHIVE FTW!");
    });

	}
	}, 10);
});

/**
 * Created by pbriss on 6/26/16.
 */
(function() {
	var $uniSearch = $('#unisearch');
	var $input = $uniSearch.find('input.unisearch-input');
	var $closeBtn = $uniSearch.find('span.unisearch-close');
	var isOpen = false;

	// show/hide search area
	 function toggleSearch(e) {
		// return if open and the input gets focused
		if( e.type.toLowerCase() === 'focus' && isOpen ) return false;

		if(isOpen) {
			$uniSearch.removeClass('open');
			if( $input.val() !== '' ) {
				setTimeout(function() {
					$uniSearch.addClass('hideInput');
					setTimeout(function() {
						$uniSearch.removeClass('hideInput');
						$input.val('');
					}, 300 );
				}, 500);
			}

			$input.blur();
		}
		else {
			$uniSearch.addClass('open');
		}
		isOpen = !isOpen;
	};

	// Events
	$input.focus(toggleSearch);
	$closeBtn.click(toggleSearch);

	// Pressing esc key will closes search
	$(document).keydown(function(e) {
		var keyCode = e.keyCode || e.which;
		if( keyCode === 27 && isOpen ) {
			toggleSearch(e);
		}
	});

	// Disable form submission
	$uniSearch.find('button[type="submit"]').click(function(ev) {
		ev.preventDefault();
	});
})();
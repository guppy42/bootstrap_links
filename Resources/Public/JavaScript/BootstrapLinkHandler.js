/*
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 */

/**
 * Module: Laxap/BootstrapLinks/BootstrapLinkHandler
 * Mail link interaction
 */
define(['jquery', 'TYPO3/CMS/Recordlist/LinkBrowser'], function($, LinkBrowser) {
	'use strict';

	/**
	 * @type {{}}
	 * @exports Laxap/BootstrapLinks/BootstrapLinkHandler
	 */
	var BootstrapLinkHandler = {};


	$(function() {
		$('#lbslinkmodalform').on('submit', function(event) {
			event.preventDefault();
			var value = $(this).find('[name="lurl"]').val();
			if (value === '') {
				return;
			}
			var input = 'bootstrap:type=modal&value=' + value;

			LinkBrowser.finalizeFunction(input);
		});

		$('#lbslinkpopoverform').on('submit', function(event) {
			event.preventDefault();
			var desc = encodeURIComponent($(this).find('[name="lpopoverdesc"]').val());
			if (desc === '') {
				return;
			}
			var input = 'bootstrap:type=popover&desc=' + desc;
			var pos = $(this).find('[name="lpopoverpos"]').val();
			if ( pos !== '' ) {
				input += '&pos=' + pos;
			}
			var trigger = $(this).find('[name="lpopovertrigger"]').val();
			if ( trigger !== '' ) {
				input += '&trigger=' + trigger;
			}

			LinkBrowser.finalizeFunction(input);
		});

		$('#lbslinkbuttonform').on('submit', function(event) {
			event.preventDefault();
			var value = $(this).find('[name="lurl"]').val();
			if (value === '') {
				return;
			}
			var input = 'bootstrap:type=button&btnurl=' + value;

			LinkBrowser.finalizeFunction(input);
		});
	});

	return BootstrapLinkHandler;
});

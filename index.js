var cheerio = require( "cheerio" )
   
var convertBlockquotes = function (page)
{
	var $ = cheerio.load( page.content );
	
	// For each blockquote...
	$( "blockquote" ).each(function () {
		
		// Find first h4 header
		var h4Header = $(this).find('h4:first-child');
		
		// Cancel if no header found
		if( !h4Header || h4Header.length == 0) 
		{
			return;
		}
		
		// Split header text
		var headerParts = $(h4Header).text().split('::', 2);

		// Set style and title
		var style = headerParts[0].toLowerCase() ? headerParts[0].toLowerCase() : "default";
		var title = headerParts[1];//(headerParts[1] === "") ? headerParts[0] : headerParts[1];

		// Store all segments as array
		var children = $(this).children().toArray();
		
		// Remove the first segment
		children.shift();

		// Create callout
		var callout = $('<div>')
			.addClass('callout callout-' + style);

		// Create callout header
        if (title !== "") {
            var calloutHeader = $('<h4>').append(title);
			callout.append(calloutHeader)
        }

		// Create callout bodyy
		var calloutBody = $('<div>').append(children);
		callout.append(calloutBody);

		// Insert new callout to DOM
		$(this).before(callout);

		// Remove old blockquote
		$(this).remove();

		// Replace page content 
		page.content = $.html();
		
	});

	return page;
};

module.exports = {
	book: {
			assets: './assets',
			css: [
				'plugin.css'
			]
    },
	hooks: {
			"page": function(page) 
			{
				page = convertBlockquotes(page);
				return page;
	     	}
    }
};

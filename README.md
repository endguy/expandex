# expandex

A tiny jquery plugin to show and hide extra "Read more" style content.

## Installation

### CSS

Include `expander.scss` in your project

### JQUERY

Include `expander.js` in your project

### HTML

~~~~
<div class="expander">
	<div class="expander-bag">
		Some epandable content here
	</div>
	<a href="#" class="expandex-toggle">Read more &plus;</a>
</div>
~~~~

## Initialise

~~~~
$('.expandex').expandex({
	moreText: "Read more &plus;",
    lessText: "Read less &mdash;",
    firstState: "closed"
});
~~~~
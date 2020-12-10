// Add a custom event listener, dispatched by Material for MkDocs.
document.addEventListener('DOMContentSwitch', () => {
	// Reset the "called" boolean
	hljs.initHighlighting.called = false;
	hljs.initHighlighting();
});

hljs.initHighlightingOnLoad();
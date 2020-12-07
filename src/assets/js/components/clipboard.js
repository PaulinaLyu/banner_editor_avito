new Clipboard('#btnHTML', {
    text: function() {
      	return bannerPreview.outerHTML.replace(/>\s+?</g, '><').trim()
    }
});

new Clipboard('#btnJSON', {
  	text: function() {
  		return JSON.stringify(buildJsonFormData(form))
  	}
});
  
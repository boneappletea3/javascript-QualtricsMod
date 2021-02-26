Qualtrics.SurveyEngine.addOnload(function() {
	//Market In View LLC
	//Change NPS question scale
	var scaleStart = 1;			//Change - 0 or more and no greater than end
	var scaleEnd = 10;			//Change - 10 or less and no less than start

	//No changes below
	var width = 100/(scaleEnd - scaleStart + 1) + "%";
	var q = jQuery("#"+this.questionId);
	var lc = q.find('td.LabelContainer');
	var cc = q.find('td.ControlContainer');
	lc.each(function(index) {
		if(index<scaleStart || index>scaleEnd) {
			this.hide();
			cc[index].hide();
		}
		else {
			this.setAttribute('width', width);
			cc[index].style.width = width;
		}	
	});	
});

$(document).ready(function(){
	var vivus = new Vivus('houses', {type: 'oneByOne', duration: 100, file: 'img/houses.svg'}, onSVGFinish);

	function onSVGFinish() {
		console.log('finsihed');
	}
});
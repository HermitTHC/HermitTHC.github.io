
function get_d(){
	//var canv = createcanvas("canv");
	var x = parseInt(document.getElementById('img_x').value);
	var y = parseInt(document.getElementById('img_y').value);
	var w = parseInt(document.getElementById('img_w').value);
	var h = parseInt(document.getElementById('img_h').value);
	data = processim('tileset', 'canv', x, y, w, h);
	console.log(data);
	document.getElementById('out').innerHTML = data;
	return data;
}

function get_d2(){
	var unpack = createpalette();
	var pdata = unpack["pdata"];
	var temppal = find_closest_palette_color([1,2,9], pdata);
	console.log(temppal);
}

function build(){
	//var pdata = createpalette()["pdata"];
	//dither("input_image", "canv", pdata);
	var pdata = createpalette()["pdata"];
	var pdict = createpalette()["pdict"];

	dither("input_image", "canv", pdata);


	finalbuild("canv", "tileset", pdict, 16);
	
}
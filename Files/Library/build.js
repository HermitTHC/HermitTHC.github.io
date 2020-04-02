/*
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
*/

function build(){
	apply_dim_to_img();
	//var pdata = createpalette()["pdata"];
	//dither("input_image", "canv", pdata);
	var iw = parseInt(document.getElementById("img_w").value);
	var ih = parseInt(document.getElementById("img_h").value);
	
	var ok;
	if(iw*ih > 10000){
		ok = confirm("The amount of pixels to be processed is greater than 10000 (" + (iw*ih).toString() + " pixels), are you sure you want to continue this operation? (It is VERY recommended that you make your image smaller using the built in resizing feature, you really shouldn't leave your image this big, and it isn\'t even buildable normally in game)");	
		if(ok == true){
			ok = confirm("Last chance to abort. You have been warned, and are responsible for the issues that this may cause.");
		}
	} else {
		ok = true;
	}
	
	if(ok == true){
		var pdata = createpalette()["pdata"];
		var pdict = createpalette()["pdict"];

		dither("input_image", "canv", pdata);


		finalbuild("canv", "tileset", pdict, 16);
		
		var canvas = document.getElementById("canv");
		var img = document.getElementById("imgg");
		img = convertCanvasToImage(img, canvas);
	}
}

//Didn't have time to do anything with this, but h267 inspired me to get back into this project, so here credit in a random spot
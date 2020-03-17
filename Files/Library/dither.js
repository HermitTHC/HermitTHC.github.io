

function find_closest_palette_color(rgb, palette){
	var difference_list = [[], [], []];
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	for(var index = 0; index < palette.length; index++){
		var palette_r = palette[index][0];
		var palette_g = palette[index][1];
		var palette_b = palette[index][2];
		
		difference_list[0].push(Math.abs(palette_r - r));
		difference_list[1].push(Math.abs(palette_g - g));
		difference_list[2].push(Math.abs(palette_b - b));
	}
	var averlist = [];
	for(var index = 0; index < difference_list[0].length; index++){
		averlist.push(difference_list[0][index] + difference_list[1][index] + difference_list[2][index]);
	}
	//console.log("difference_list: " + difference_list.toString() + " averlist: " + averlist.toString());
	var indexoup = averlist.indexOf(Math.min(...averlist));
	return palette[indexoup];
}

function oper_tup(tup1, tup2, oper){
	//console.log(tup1);
	//console.log(tup2);
	//console.log("-");
	var array = [];
	if(oper == "add"){
		for(var i = 0; i < tup1.length; i++){
			array.push(tup1[i] + tup2[i]);
		}
	}
	if(oper == "sub"){
		for(var i = 0; i < tup1.length; i++){
			array.push(tup1[i] - tup2[i]);
		}
	}
	if(oper == "mult"){
		for(var i = 0; i < tup1.length; i++){
			array.push(tup1[i] * tup2[i]);
		}
	}
	if(oper == "div"){
		for(var i = 0; i < tup1.length; i++){
			array.push(tup1[i]/tup2[i]);
		}
	}
	var oup = [array[0], array[1], array[2]];
	return oup;
}



function dither(imgid, cnvid, palette){
	var img = document.getElementById(imgid);
	var canvas = document.getElementById(cnvid);
	
	canvas.width = img.width;
	var width = img.width;
	canvas.height = img.height;
	var height = img.height;
	
	
	var ctx = canvas.getContext("2d");
	
	ctx.drawImage(img, 0, 0, img.width, img.height);
	var impx = ctx.getImageData(0, 0, width, height); //Pixeldata
	
	//var canvasdata = ctx.createImageData(width, height);
	//var impx = imagedata.data;
	
	for(var y = 0; y < height; y++){
		for(var x = 0; x < width; x++){
			var pixelindex = (y * width + x) * 4;
			//impx.data[pixelindex].pop();
			//console.log(impx.data[pixelindex]);
			var oldpixel = [impx.data[pixelindex], impx.data[pixelindex+1], impx.data[pixelindex+2]];
			var newpixel = find_closest_palette_color(oldpixel, palette);
			[impx.data[pixelindex], impx.data[pixelindex+1], impx.data[pixelindex+2]] = newpixel;
			
			var quant_error = oper_tup(oldpixel, newpixel, "sub");
			
			var customindex = ((y) * width + (x+1)) * 4;
			[impx.data[customindex], impx.data[customindex+1], impx.data[customindex+2]] = oper_tup([impx.data[customindex], impx.data[customindex+1], impx.data[customindex+2]], oper_tup(oper_tup(quant_error, [7,7,7], "mult"), [16,16,16], "div"), "add");
			
			var customindex = ((y+1) * width + (x-1)) * 4;
			[impx.data[customindex], impx.data[customindex+1], impx.data[customindex+2]] = oper_tup([impx.data[customindex], impx.data[customindex+1], impx.data[customindex+2]], oper_tup(oper_tup(quant_error, [3,3,3], "mult"), [16,16,16], "div"), "add");
			
			var customindex = ((y+1) * width + (x)) * 4;
			[impx.data[customindex], impx.data[customindex+1], impx.data[customindex+2]] = oper_tup([impx.data[customindex], impx.data[customindex+1], impx.data[customindex+2]], oper_tup(oper_tup(quant_error, [5,5,5], "mult"), [16,16,16], "div"), "add");
			
			var customindex = ((y+1) * width + (x+1)) * 4;
			[impx.data[customindex], impx.data[customindex+1], impx.data[customindex+2]] = oper_tup([impx.data[customindex], impx.data[customindex+1], impx.data[customindex+2]], oper_tup(oper_tup(quant_error, [1,1,1], "mult"), [16,16,16], "div"), "add");
		}
	}
	//imagedata.data = impx;
	ctx.putImageData(impx, 0, 0);
	console.log(impx);
	
	
	
	
	
}
/*
function createcanvas(cnvid){
	tempcnv = document.getElementById("tempcnv");
	canvas = document.createElement("canvas");
	canvas.setAttribute("id", cnvid);
	tempcnv.appendChild(canvas);
	//tempcnv.append(canvas);
	return canvas;
}


function createimage(imgsrc, imgid){
	img = document.createElement("img");
	img.setAttribute("id", imgid);
	img.setAttribute("src", imgsrc);
	return img;
}
*/

function processim(imid, cnvid, x, y, w, h){
	//document.getElementById("out").innerHTML = document.getElementById("quantity").value;
	
	var img = document.getElementById(imid);
	
	var canvas = document.getElementById(cnvid); //document.getElementById(cnvid);//document.createElement('canvas');
	
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0, img.width, img.height);
	
	var pixelData = ctx.getImageData(x, y, w, h).data;
	var data = pixelData.toString();
	var datalist = data.split(",");
	var datalist2 = [];
	for(var i = 0; i<datalist.length; i++){datalist2.push(parseInt(datalist[i]))};
	datalist = [];
	for(var i = 0; i<datalist2.length; i = i+4){datalist.push([datalist2[i], datalist2[i+1], datalist2[i+2], datalist2[i+3]])};
	datalist2 = [];
	for(var b = 0; b<h; b++){
		datalist2.push([]);
		for(var a = 0; a<w; a++){
			datalist2[b].push(datalist[a+b*(w)]);
		};
		
	};
	//datalist2[w].pop();
	//console.log(datalist2);
	return datalist2;
			
}


function new_sel_file(event){
	onFileSelected(event);
	//get_orig_dim();
}



//V https://stackoverflow.com/questions/3814231/loading-an-image-to-a-img-from-input-file V
function onFileSelected(event) {
	var selectedFile = event.target.files[0];
	var reader = new FileReader();

	var imgtag = document.getElementById("input_image");
	imgtag.title = selectedFile.name;

	reader.onload = function(event) {
		imgtag.src = event.target.result;
	};

	reader.readAsDataURL(selectedFile);
	
	
	var div = document.getElementById("edit_buttons");
	if(div.style.display == "none"){
		div.style.display = "block";
	}
	
	document.getElementById("input_image").style = "";
	/*
	imgtag.onload = function(event){
		console.log(event);
	}
	*/
	
		/*
		var img = document.getElementById("input_image");
		var iw = img.width;
		var ih = img.height;
		var origdim = document.getElementById("orig_img_dim");
		origdim.innerHTML = "Original Image Dimensions: " + iw.toString() + "x" + ih.toString() + " pixels";
	}
	*/
	/*
	var img = document.getElementById("input_image");
	var iw = img.width;
	var ih = img.height;
	var origdim = document.getElementById("orig_img_dim");
	origdim.innerHTML = "Original Image Dimensions: " + iw.toString() + "x" + ih.toString() + " pixels";
	*/
}
//------------------------------------------------------------------------------------------

function get_orig_dim(){
	//console.log(event);
	var img = document.getElementById("input_image");
	var iw = img.width;
	var ih = img.height;
	var origdim = document.getElementById("orig_img_dim");
	origdim.innerHTML = "Original Image Dimensions: " + iw.toString() + "x" + ih.toString() + " pixels";
	
	var width_box = document.getElementById("img_w");
	var height_box = document.getElementById("img_h");
	
	width_box.value = iw.toString();
	height_box.value = ih.toString();
	
	
}






function finalbuild(cnvid, tileset_imid, pdict, tileres){
	var canvas = document.getElementById(cnvid);
	var ctx = canvas.getContext("2d");
	
	finaldata = ctx.getImageData(0, 0, canvas.width, canvas.height);
	
	var iw = canvas.width;
	var ih = canvas.height;
	
	var width = canvas.width*tileres;
	var height = canvas.height*tileres;
	canvas.width = width;
	canvas.height = height;
	var ctx = canvas.getContext("2d");
	
	
	
	var img = document.getElementById('tileset');
	var ts_width = img.width;
	var ts_height = img.height;
	
	processim(tileset_imid, "tileset_disp", 0,0, ts_width, ts_height);
	var tileset = document.getElementById("tileset_disp");
	//tileset.width = 272;
	//tileset.height = 16;
	var ts_ctx = tileset.getContext("2d");
	
	for(var row = 0; row < ih; row++){
		for(var col = 0; col < iw; col++){
			try{
			var px = [finaldata.data[(row * iw + col) * 4], finaldata.data[(row * iw + col) * 4+1],finaldata.data[(row * iw + col) * 4+2]];//ctx.getImageData(col, row, 1, 1).data;
			//console.log(finaldata.data);
			//console.log(px);
			//px = Array.from(px);
			//px.pop();
			var callnum = pdict[px];
			//console.log(callnum);
			var region = ts_ctx.getImageData((callnum-1)*tileres, 0, (callnum-1)*tileres+tileres, tileres);
			ctx.putImageData(region, col*tileres, row*tileres);
			}
			catch(err){
				
			}
		}
	}
	//ctx.putImageData(imagedata, 0, 0);
	
}






//var img = document.getElementById('tileset');

const tileres = 16;


function createpalette(){
	var img = document.getElementById('tileset');
	var ts_width = img.naturalWidth;
	var ts_height = img.naturalHeight;
	var tileamount = parseInt(ts_width/tileres);
	
	var ts_data = processim('tileset', 'canv', 0,0,img.naturalWidth,img.naturalHeight);
	var palettedata = [];
	var palettedict = {};
	for(var tilenum = 1; tilenum <= tileamount; tilenum++){
		var Rlist = [];
		var Glist = [];
		var Blist = [];
		for(var row = 0; row < tileres; row++){
			for(var col = 0 + (tilenum*tileres-16); col < tileres + (tilenum*tileres-16); col++){
				//console.log("row: " + row.toString() + " col: " + col.toString());
				var R = ts_data[row][col][0];
				var G = ts_data[row][col][1];
				var B = ts_data[row][col][2];
				var A = ts_data[row][col][3];
				Rlist.push(R);
				Glist.push(G);
				Blist.push(B);
			}
		}
		var R = Math.round(Rlist.reduce(function(a, b){
			return a + b;
		}, 0)/Rlist.length);
		var G = Math.round(Glist.reduce(function(a, b){
			return a + b;
		}, 0)/Glist.length);
		var B = Math.round(Blist.reduce(function(a, b){
			return a + b;
		}, 0)/Blist.length);
		palettedata.push([]);
		palettedata[tilenum-1].push(R);
		palettedata[tilenum-1].push(G);
		palettedata[tilenum-1].push(B);
		palettedict[[R, G, B]] = tilenum;
	}
	
	//console.log(palettedata);
	return {pdict: palettedict, pdata: palettedata};
}

function displaypalette(cnvid, palette){
	var canvas = document.getElementById(cnvid);
	var width = palette.length;
	var height = 1;
	canvas.width = width;
	canvas.height = height;
	
	var ctx = canvas.getContext("2d");
	
	var imagedata = ctx.createImageData(width, height);
	for(var i = 0; i < width*4; i=i+4){
		imagedata.data[i] = palette[i/4][0];
		imagedata.data[i+1] = palette[i/4][1];
		imagedata.data[i+2] = palette[i/4][2];
		imagedata.data[i+3] = 255;
	}
	ctx.putImageData(imagedata, 0, 0);
	
}


function reset_img_dim(){
	var orig_dim = document.getElementById("orig_img_dim").innerHTML.slice(27,-7).split("x");
	var orig_width = orig_dim[0];
	var orig_height = orig_dim[1];
	
	var width_box = document.getElementById("img_w");
	var height_box = document.getElementById("img_h");
	
	width_box.value = orig_width;
	height_box.value = orig_height;
}


function scale_width_from_height(){
	var width_box = document.getElementById("img_w");
	var width = width_box.value;
	
	var height_box = document.getElementById("img_h");
	var height = height_box.value;
	
	var orig_dim = document.getElementById("orig_img_dim").innerHTML.slice(27,-7).split("x");
	
	var img = document.getElementById("input_image");
	img.style.width = "auto";
	img.style.height = (height.toString() + "px");
	width_box.value = img.width;
	img.style.width = img.width.toString() + "px";
	
	//height_box.value = img.height;
}

function scale_height_from_width(){
	var width_box = document.getElementById("img_w");
	var width = width_box.value;
	
	var height_box = document.getElementById("img_h");
	var height = height_box.value;
	
	var orig_dim = document.getElementById("orig_img_dim").innerHTML.slice(27,-7).split("x");
	
	var img = document.getElementById("input_image");
	img.style.width = (width.toString() + "px");
	img.style.height = "auto";
	height_box.value = img.height;
	img.style.height = img.height.toString() + "px";
}

function apply_dim_to_img(){
	img = document.getElementById("input_image");
	
	var width_box = document.getElementById("img_w");
	var width = width_box.value;
	
	var height_box = document.getElementById("img_h");
	var height = height_box.value;
	
	img.style.width = (width.toString()+"px");
	img.style.height = (height.toString()+"px");
	
}
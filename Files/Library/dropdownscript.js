

/*
function fill_dropdown(){
	var dropdown = document.getElementById("select_test");
	var smb1 = o;
}

*/

function dropdown_change(){
	//console.log("DD Change");
	var dd = document.getElementById("select_test");
	var ts = document.getElementById("tileset");
	if(dd.value == "smb1_overworld"){
		ts.src = "Files/Tileset/SMB1Overworld.png";
	};
	if(dd.value == "smb1_sky"){
		ts.src = "Files/Tileset/SMB1Sky.png";
	};
	if(dd.value == "smb1_underground"){
		ts.src = "Files/Tileset/SMB1Underground.png";
	};
	if(dd.value == "smb1_forest"){
		ts.src = "Files/Tileset/SMB1Forest.png";
	};
	if(dd.value == "smb1_underwater"){
		ts.src = "Files/Tileset/SMB1Underwater.png";
	};
	if(dd.value == "smb1_ghosthouse"){
		ts.src = "Files/Tileset/SMB1GhostHouse.png";
	};
	if(dd.value == "smb1_desert"){
		ts.src = "Files/Tileset/SMB1Desert.png";
	};
	if(dd.value == "smb1_airship"){
		ts.src = "Files/Tileset/SMB1Airship.png";
	};
	if(dd.value == "smb1_snow"){
		ts.src = "Files/Tileset/SMB1Snow.png";
	};
	if(dd.value == "smb1_castle"){
		ts.src = "Files/Tileset/SMB1Castle.png";
	};
	
}
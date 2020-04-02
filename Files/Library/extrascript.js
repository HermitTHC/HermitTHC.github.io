



function display_info(){
	info = document.getElementById("info_div");
	info_button = document.getElementById("info_button");
	
	if(info.style.display == "none"){
		info.style.display = "block";
		info_button.innerText = "HermitTHC's additional information (Click to hide info)";

		window.scrollTo(0,document.body.scrollHeight);
	
	} else if(info.style.display == "block"){
		info.style.display = "none";
		info_button.innerText = "HermitTHC's additional information (Click to show info)";
		
		
	}
}
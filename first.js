var logo=document.getElementById("img");
var java=document.getElementById('nc');
var c=document.getElementById('sy');
var cp=document.getElementById("pre");
var python=document.getElementById("tr");


function set_none(){
img.style.display='none';
nc.style.display='none';
sy.style.display='none';
pre.style.display='none';
tr.style.display='none';
}

function func_nc(){
	nc.style.display="block"; }
function func_sy(){
sy.style.display="block";}

function func_pre(){
	pre.style.display='block';
}
function func_tr(){
	tr.style.display='block';
}

function for_nc(){
set_none();
func_nc();}
function for_sy(){
set_none();
func_sy();}	
function for_pre(){
	set_none();
	func_pre();
}
function for_tr(){
	set_none();
	func_tr();
}

	
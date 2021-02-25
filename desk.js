hideStatusEditor=0;
	click_menu=1;
	
function showLoading(){
	
}

	function display_startmenu(){
		if(click_menu==1){
		document.getElementById("start-menu").style.display="block";
		document.getElementById("start-button").style.backgroundImage="url('start-click.png')";
		click_menu=0;
	}else{
		document.getElementById("start-menu").style.display="none";
		document.getElementById("start-button").style.backgroundImage="url('start-button.png')";
		
		click_menu=1;	
	}
	}

	function hide_startmenu(){
		document.getElementById("start-menu").style.display="none";
		document.getElementById("start-button").style.backgroundImage="url('start-button.png')";
		
		click_menu=1;
	}

	function show_text_editor(){
		if(hideStatusEditor==0){
			document.getElementById("text-edit").style.display="block";		
			hideStatusEditor=1;
		}
	}

	function hide_text_editor(){
		if(hideStatusEditor==1){
			document.getElementById("text-edit").style.display="none";
			hideStatusEditor=0;
		}
	}

	function hide_gallery(){
		document.getElementById("gallery").style.display="none";
	}

	function show_gallery(){
		document.getElementById("gallery").style.display="block";
	}

	function showlarge(id){
	var i=1;
		for(i=1;i<=7;i++){
			if(id==i){
			document.getElementById("image"+id).style.display="block";
			document.getElementById("opt"+id).style.border="black 2px solid";
			}
			else{
			document.getElementById("image"+i).style.display="none";
			document.getElementById("opt"+i).style.border="none";
			}
		}
	}

	digit=1;
function display(num){
	if(num!=11){
		var show=num;
		if(digit==0){
			document.getElementById("displayBoard").value=show;
		}
		else{
			document.getElementById("displayBoard").value+=show;
		}
	}
	else if(num==11){
		document.getElementById("displayBoard").value="";
		prevOpt=0;
		digit=1;
		choice=0;
	}
	digit=digit+1;
		
}

choice=0;

function changeChoice(){
	if(choice==0){
		choice=1;
	}
	else if(choice>=1){
		choice=choice+1;
	}
}

function blink(option){
	digit=0;
	opt=option;
	changeChoice();
	document.getElementById("displayBoard").style.color="white";
	setTimeout(function(){
		document.getElementById("displayBoard").style.color="black";
	},100)
	if(option==94){
		document.getElementById("displayBoard").value="0";	
	}
	else if(choice==1){
	num1=document.getElementById("displayBoard").value;
	changeAction(option);
	}
	else if(choice>0){
		num2=document.getElementById("displayBoard").value;
		action(opt,num1,num2);
		changeAction(option);
		num1=document.getElementById("displayBoard").value;
	}
}



prevOpt=0;

function changeAction(opt){
if(opt==99){
		prevOpt=99;
	}
	else if(opt==98){
		prevOpt=98;
	}
	else if(opt==96){
		prevOpt=96;
	}
	else if(opt==95){
		prevOpt=95;
	}
return;
}


function action(opt,num1,num2){
	one=parseInt(num1);
	two=parseInt(num2);
		if(prevOpt==99){
			document.getElementById("displayBoard").value=one+two;
		}
		else if(prevOpt==98){
		document.getElementById("displayBoard").value=one-two;
		}
		else if(prevOpt==96){
		document.getElementById("displayBoard").value=one*two;
		}
		else if(prevOpt==95){
		document.getElementById("displayBoard").value=one/two;
		}
		prevOpt=0;
	
}


function hideCalc(){
	document.getElementById("calc").style.display="none";

		document.getElementById("displayBoard").value="";
		prevOpt=0;
		digit=1;
		choice=0;
}


function show_calc(){
	document.getElementById("calc").style.display="block";
}
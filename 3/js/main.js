$(document).ready(function(){

	$(".women").on("click",function(){

		if ($(this).hasClass("rose")){
			$("#claire").toggleClass("hidden");
		}else{
			alert("Wrong!");
		}



	});

});

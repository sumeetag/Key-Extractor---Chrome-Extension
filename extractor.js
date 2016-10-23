

 var a = window.location.href;
  var n = a.search(/flipkart/i);
  if(n>=0){
 var x = document.getElementsByClassName("title");
	alert(x[2].innerHTML);
var x = document.getElementsByClassName("selling-price omniture-field");
	alert(x[0].innerHTML);
}
var m= a.search(/amazon/i); 
if (m>=0) {
	var x = document.getElementById("productTitle");
	alert(x.innerHTML);

	if (document.getElementById("priceblock_dealprice")){
	var x = document.getElementById("priceblock_dealprice").innerHTML;
	var n = x.search(/span>/i);
    var res = x.substring(n+5, x.length);
	alert(res);
	}	
	if (document.getElementById("priceblock_ourprice")){
	var x = document.getElementById("priceblock_ourprice").innerHTML;
	var n = x.search(/span>/i);
    var res = x.substring(n+5, x.length);
	alert(res);
	}	
	if (document.getElementById("priceblock_saleprice")){
	var x = document.getElementById("priceblock_saleprice").innerHTML;
	var n = x.search(/span>/i);
    var res = x.substring(n+5, x.length);
	alert(res);
	}	
};




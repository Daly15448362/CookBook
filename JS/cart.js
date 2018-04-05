var page_load = document.getElementById("cart");
page_load.addEventListener("load",loadCart());
function loadCart(){
	if(!sessionStorage.getItem("qty1")&&!sessionStorage.getItem("qty2")&&!sessionStorage.getItem("qty3")&&!sessionStorage.getItem("qty4")&&!sessionStorage.getItem("qty5")&&!sessionStorage.getItem("qty6")&&!sessionStorage.getItem("qty7")&&!sessionStorage.getItem("qty8")&&!sessionStorage.getItem("qty9")&&!sessionStorage.getItem("qty10")&&!sessionStorage.getItem("qty11")&&!sessionStorage.getItem("qty12")&&!sessionStorage.getItem("qty13")&&!sessionStorage.getItem("qty14")&&!sessionStorage.getItem("qty15")&&!sessionStorage.getItem("qty16")&&!sessionStorage.getItem("qty17")&&!sessionStorage.getItem("qty18")&&!sessionStorage.getItem("qty19")&&!sessionStorage.getItem("qty20")&&!sessionStorage.getItem("qty21")){
		document.getElementById("warn").innerHTML="No items selected for order. Return to home page - Click the back button<br><br>";
		sessionStorage.clear();
		page_load.style.visibility="hidden";
	}else{
		document.getElementById("warn").innerHTML="";
		page_load.style.visibility="visible";	
		populateTable();
	}
}

function populateTable(){
	var cost1 = 0;
	var cost2 = 0;
	var cost3 = 0;	
	var cost4 = 0;
	var cost5 = 0;
	var cost6 = 0;
	var cost7 = 0;	
	var cost8 = 0;	
	var cost9 = 0;
	var cost10 = 0;
	var cost11 = 0;	
	var cost12 = 0;	
	var cost13 = 0;
	var cost14 = 0;
	var cost15 = 0;	
	var cost16 = 0;	
	var cost17 = 0;
	var cost18 = 0;
	var cost19 = 0;	
	var cost20 = 0;	
	var cost21 = 0;	
	
	if(!sessionStorage.getItem("qty1")){
		document.getElementById("product1").innerHTML = "Classic Chicken Soup";
		document.getElementById("price1").innerHTML = "8.00";
		document.getElementById("qty1").innerHTML = "0";
		document.getElementById("cost1").innerHTML = "0";
		document.getElementById("cost1").innerHTML = "0";
		cost1=0;		
	}else{
		document.getElementById("product1").innerHTML = sessionStorage.getItem("product1");
		document.getElementById("price1").innerHTML = sessionStorage.getItem("price1");
		document.getElementById("qty1").innerHTML = sessionStorage.getItem("qty1");
		cost1=parseFloat(sessionStorage.getItem("qty1")) * sessionStorage.getItem("price1");
		document.getElementById("cost1").innerHTML = "&euro;"+cost1.toFixed(2);			
	}
	if(!sessionStorage.getItem("qty2")){
		document.getElementById("product2").innerHTML = "Mix Starter";
		document.getElementById("price2").innerHTML = "10.00";
		document.getElementById("qty2").innerHTML = "0";
		document.getElementById("cost2").innerHTML = "0";
		cost2=0;	
	}else{
		document.getElementById("product2").innerHTML = sessionStorage.getItem("product2");
		document.getElementById("price2").innerHTML = sessionStorage.getItem("price2");
		document.getElementById("qty2").innerHTML = sessionStorage.getItem("qty2");
		cost2=parseFloat(sessionStorage.getItem("qty2")) * sessionStorage.getItem("price2");
		document.getElementById("cost2").innerHTML = "&euro;"+cost2.toFixed(2);			
	}
	if(!sessionStorage.getItem("qty3")){
		document.getElementById("product3").innerHTML = "Skewed Chicken Pieces";
		document.getElementById("price3").innerHTML = "6.00";
		document.getElementById("qty3").innerHTML = "0";
		document.getElementById("cost3").innerHTML = "0";
		cost3=0;	
	}else{
		document.getElementById("product3").innerHTML = sessionStorage.getItem("product3");
		document.getElementById("price3").innerHTML = sessionStorage.getItem("price3");
		document.getElementById("qty3").innerHTML = sessionStorage.getItem("qty3");
		cost3=parseFloat(sessionStorage.getItem("qty3")) * sessionStorage.getItem("price3");
		document.getElementById("cost3").innerHTML = "&euro;"+cost3.toFixed(2);			
	}
	if(!sessionStorage.getItem("qty4")){
		document.getElementById("product4").innerHTML = "South Western Shrimp";
		document.getElementById("price4").innerHTML = "9.50";
		document.getElementById("qty4").innerHTML = "0";
		document.getElementById("cost4").innerHTML = "0";
		cost4=0;	
	}else{
		document.getElementById("product4").innerHTML = sessionStorage.getItem("product4");
		document.getElementById("price4").innerHTML = sessionStorage.getItem("price4");
		document.getElementById("qty4").innerHTML = sessionStorage.getItem("qty4");
		cost4=parseFloat(sessionStorage.getItem("qty4")) * sessionStorage.getItem("price4");
		document.getElementById("cost4").innerHTML = "&euro;"+cost4.toFixed(2);			
	}

	if(!sessionStorage.getItem("qty5")){
		document.getElementById("product5").innerHTML = "Stuffed Peppers";
		document.getElementById("price5").innerHTML = "9.00";
		document.getElementById("qty5").innerHTML = "0";
		document.getElementById("cost5").innerHTML = "0";
		cost5=0;	
	}else{
		document.getElementById("product5").innerHTML = sessionStorage.getItem("product5");
		document.getElementById("price5").innerHTML = sessionStorage.getItem("price5");
		document.getElementById("qty5").innerHTML = sessionStorage.getItem("qty5");
		cost5=parseFloat(sessionStorage.getItem("qty5")) * sessionStorage.getItem("price5");
		document.getElementById("cost5").innerHTML = "&euro;"+cost5.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty6")){
		document.getElementById("product6").innerHTML = "Veg Soup";
		document.getElementById("price6").innerHTML = "7.00";
		document.getElementById("qty6").innerHTML = "0";
		document.getElementById("cost6").innerHTML = "0";
		cost6=0;	
	}else{
		document.getElementById("product6").innerHTML = sessionStorage.getItem("product6");
		document.getElementById("price6").innerHTML = sessionStorage.getItem("price6");
		document.getElementById("qty6").innerHTML = sessionStorage.getItem("qty6");
		cost6=parseFloat(sessionStorage.getItem("qty6")) * sessionStorage.getItem("price6");
		document.getElementById("cost6").innerHTML = "&euro;"+cost6.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty7")){
		document.getElementById("product7").innerHTML = "Beef Brikset";
		document.getElementById("price7").innerHTML = "15.00";
		document.getElementById("qty7").innerHTML = "0";
		document.getElementById("cost7").innerHTML = "0";
		cost7=0;	
	}else{
		document.getElementById("product7").innerHTML = sessionStorage.getItem("product7");
		document.getElementById("price7").innerHTML = sessionStorage.getItem("price7");
		document.getElementById("qty7").innerHTML = sessionStorage.getItem("qty7");
		cost7=parseFloat(sessionStorage.getItem("qty7")) * sessionStorage.getItem("price7");
		document.getElementById("cost7").innerHTML = "&euro;"+cost7.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty8")){
		document.getElementById("product8").innerHTML = "Chilli Turkey";
		document.getElementById("price8").innerHTML = "12.50";
		document.getElementById("qty8").innerHTML = "0";
		document.getElementById("cost8").innerHTML = "0";
		cost8=0;	
	}else{
		document.getElementById("product8").innerHTML = sessionStorage.getItem("product8");
		document.getElementById("price8").innerHTML = sessionStorage.getItem("price8");
		document.getElementById("qty8").innerHTML = sessionStorage.getItem("qty8");
		cost5=parseFloat(sessionStorage.getItem("qty8")) * sessionStorage.getItem("price8");
		document.getElementById("cost8").innerHTML = "&euro;"+cost8.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty9")){
		document.getElementById("product9").innerHTML = "Classic Spaghetti";
		document.getElementById("price9").innerHTML = "15.00";
		document.getElementById("qty9").innerHTML = "0";
		document.getElementById("cost9").innerHTML = "0";
		cost9=0;	
	}else{
		document.getElementById("product9").innerHTML = sessionStorage.getItem("product9");
		document.getElementById("price9").innerHTML = sessionStorage.getItem("price9");
		document.getElementById("qty9").innerHTML = sessionStorage.getItem("qty9");
		cost9=parseFloat(sessionStorage.getItem("qty9")) * sessionStorage.getItem("price9");
		document.getElementById("cost9").innerHTML = "&euro;"+cost9.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty10")){
		document.getElementById("product10").innerHTML = "Honey Glazed Ham";
		document.getElementById("price10").innerHTML = "13.00";
		document.getElementById("qty10").innerHTML = "0";
		document.getElementById("cost10").innerHTML = "0";
		cost10=0;	
	}else{
		document.getElementById("product10").innerHTML = sessionStorage.getItem("product10");
		document.getElementById("price10").innerHTML = sessionStorage.getItem("price10");
		document.getElementById("qty10").innerHTML = sessionStorage.getItem("qty10");
		cost10=parseFloat(sessionStorage.getItem("qty10")) * sessionStorage.getItem("price10");
		document.getElementById("cost10").innerHTML = "&euro;"+cost10.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty11")){
		document.getElementById("product11").innerHTML = "Honey Glazed Heavan";
		document.getElementById("price11").innerHTML = "15.00";
		document.getElementById("qty11").innerHTML = "0";
		document.getElementById("cost11").innerHTML = "0";
		cost11=0;	
	}else{
		document.getElementById("product11").innerHTML = sessionStorage.getItem("product11");
		document.getElementById("price11").innerHTML = sessionStorage.getItem("price11");
		document.getElementById("qty11").innerHTML = sessionStorage.getItem("qty11");
		cost11=parseFloat(sessionStorage.getItem("qty11")) * sessionStorage.getItem("price11");
		document.getElementById("cost11").innerHTML = "&euro;"+cost11.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty12")){
		document.getElementById("product12").innerHTML = "Lancashire Hotpot";
		document.getElementById("price12").innerHTML = "16.00";
		document.getElementById("qty12").innerHTML = "0";
		document.getElementById("cost12").innerHTML = "0";
		cost12=0;	
	}else{
		document.getElementById("product12").innerHTML = sessionStorage.getItem("product12");
		document.getElementById("price12").innerHTML = sessionStorage.getItem("price12");
		document.getElementById("qty12").innerHTML = sessionStorage.getItem("qty12");
		cost12=parseFloat(sessionStorage.getItem("qty12")) * sessionStorage.getItem("price12");
		document.getElementById("cost12").innerHTML = "&euro;"+cost12.toFixed(2);			
	}

	if(!sessionStorage.getItem("qty13")){
		document.getElementById("product13").innerHTML = "Orange Stuffed Duck";
		document.getElementById("price13").innerHTML = "14.00";
		document.getElementById("qty13").innerHTML = "0";
		document.getElementById("cost13").innerHTML = "0";
		cost13=0;	
	}else{
		document.getElementById("product13").innerHTML = sessionStorage.getItem("product13");
		document.getElementById("price13").innerHTML = sessionStorage.getItem("price13");
		document.getElementById("qty13").innerHTML = sessionStorage.getItem("qty13");
		cost13=parseFloat(sessionStorage.getItem("qty13")) * sessionStorage.getItem("price13");
		document.getElementById("cost13").innerHTML = "&euro;"+cost13.toFixed(2);			
	}

	if(!sessionStorage.getItem("qty14")){
		document.getElementById("product14").innerHTML = "Prawn & Scallop Paella";
		document.getElementById("price14").innerHTML = "13.00";
		document.getElementById("qty14").innerHTML = "0";
		document.getElementById("cost14").innerHTML = "0";
		cost14=0;	
	}else{
		document.getElementById("product14").innerHTML = sessionStorage.getItem("product14");
		document.getElementById("price14").innerHTML = sessionStorage.getItem("price14");
		document.getElementById("qty14").innerHTML = sessionStorage.getItem("qty14");
		cost14=parseFloat(sessionStorage.getItem("qty14")) * sessionStorage.getItem("price14");
		document.getElementById("cost14").innerHTML = "&euro;"+cost14.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty15")){
		document.getElementById("product15").innerHTML = "Sweet Potato Wellington";
		document.getElementById("price15").innerHTML = "15.00";
		document.getElementById("qty15").innerHTML = "0";
		document.getElementById("cost15").innerHTML = "0";
		cost15=0;	
	}else{
		document.getElementById("product15").innerHTML = sessionStorage.getItem("product15");
		document.getElementById("price15").innerHTML = sessionStorage.getItem("price15");
		document.getElementById("qty15").innerHTML = sessionStorage.getItem("qty15");
		cost15=parseFloat(sessionStorage.getItem("qty15")) * sessionStorage.getItem("price15");
		document.getElementById("cost15").innerHTML = "&euro;"+cost15.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty16")){
		document.getElementById("product16").innerHTML = "Banana Caramel Cream";
		document.getElementById("price16").innerHTML = "12.00";
		document.getElementById("qty16").innerHTML = "0";
		document.getElementById("cost16").innerHTML = "0";
		cost16=0;	
	}else{
		document.getElementById("product16").innerHTML = sessionStorage.getItem("product16");
		document.getElementById("price16").innerHTML = sessionStorage.getItem("price16");
		document.getElementById("qty16").innerHTML = sessionStorage.getItem("qty16");
		cost16=parseFloat(sessionStorage.getItem("qty16")) * sessionStorage.getItem("price16");
		document.getElementById("cost16").innerHTML = "&euro;"+cost16.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty17")){
		document.getElementById("product17").innerHTML = "Cannoli";
		document.getElementById("price17").innerHTML = "10.00";
		document.getElementById("qty17").innerHTML = "0";
		document.getElementById("cost17").innerHTML = "0";
		cost17=0;	
	}else{
		document.getElementById("product17").innerHTML = sessionStorage.getItem("product17");
		document.getElementById("price17").innerHTML = sessionStorage.getItem("price17");
		document.getElementById("qty17").innerHTML = sessionStorage.getItem("qty17");
		cost17=parseFloat(sessionStorage.getItem("qty17")) * sessionStorage.getItem("price17");
		document.getElementById("cost17").innerHTML = "&euro;"+cost17.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty18")){
		document.getElementById("product18").innerHTML = "Pumpkin Pie";
		document.getElementById("price18").innerHTML = "11.00";
		document.getElementById("qty18").innerHTML = "0";
		document.getElementById("cost18").innerHTML = "0";
		cost18=0;	
	}else{
		document.getElementById("product18").innerHTML = sessionStorage.getItem("product18");
		document.getElementById("price18").innerHTML = sessionStorage.getItem("price18");
		document.getElementById("qty18").innerHTML = sessionStorage.getItem("qty18");
		cost18=parseFloat(sessionStorage.getItem("qty18")) * sessionStorage.getItem("price18");
		document.getElementById("cost18").innerHTML = "&euro;"+cost18.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty19")){
		document.getElementById("product19").innerHTML = "Red Velvet Cheesecake";
		document.getElementById("price19").innerHTML = "13.00";
		document.getElementById("qty19").innerHTML = "0";
		document.getElementById("cost19").innerHTML = "0";
		cost19=0;	
	}else{
		document.getElementById("product19").innerHTML = sessionStorage.getItem("product19");
		document.getElementById("price19").innerHTML = sessionStorage.getItem("price19");
		document.getElementById("qty19").innerHTML = sessionStorage.getItem("qty19");
		cost19=parseFloat(sessionStorage.getItem("qty19")) * sessionStorage.getItem("price19");
		document.getElementById("cost19").innerHTML = "&euro;"+cost19.toFixed(2);			
	}
	
	if(!sessionStorage.getItem("qty20")){
		document.getElementById("product20").innerHTML = "Sugarless Cheese Cake";
		document.getElementById("price20").innerHTML = "12.00";
		document.getElementById("qty20").innerHTML = "0";
		document.getElementById("cost20").innerHTML = "0";
		cost20=0;	
	}else{
		document.getElementById("product20").innerHTML = sessionStorage.getItem("product20");
		document.getElementById("price20").innerHTML = sessionStorage.getItem("price20");
		document.getElementById("qty20").innerHTML = sessionStorage.getItem("qty20");
		cost20=parseFloat(sessionStorage.getItem("qty20")) * sessionStorage.getItem("price20");
		document.getElementById("cost20").innerHTML = "&euro;"+cost20.toFixed(2);			
	}

	if(!sessionStorage.getItem("qty21")){
		document.getElementById("product21").innerHTML = "Tiramisu";
		document.getElementById("price21").innerHTML = "10.00";
		document.getElementById("qty21").innerHTML = "0";
		document.getElementById("cost21").innerHTML = "0";
		cost21=0;	
	}else{
		document.getElementById("product21").innerHTML = sessionStorage.getItem("product21");
		document.getElementById("price21").innerHTML = sessionStorage.getItem("price21");
		document.getElementById("qty21").innerHTML = sessionStorage.getItem("qty21");
		cost21=parseFloat(sessionStorage.getItem("qty21")) * sessionStorage.getItem("price21");
		document.getElementById("cost21").innerHTML = "&euro;"+cost21.toFixed(2);			
	}
	
	document.getElementById("total").innerHTML="&euro;"+(cost1+cost2+cost3+cost4+cost5+cost6+cost7+cost8+cost9+cost10+cost11+cost12+cost13+cost14+cost15+cost16+cost17+cost18+cost19+cost20+cost21).toFixed(2);
}

var input1 =document.getElementById('b1');
input1.addEventListener("click", removeFromCart1);
		
function removeFromCart1(event){
	sessionStorage.removeItem("product1");
	sessionStorage.removeItem("price1");
	sessionStorage.removeItem("qty1");
	window.location.reload();
}

var input2 =document.getElementById('b2');
input2.addEventListener("click", removeFromCart2);

function removeFromCart2(event){
	sessionStorage.removeItem("product2");
	sessionStorage.removeItem("price2");
	sessionStorage.removeItem("qty2");
	window.location.reload();
}

var input3 =document.getElementById('b3');
input3.addEventListener("click", removeFromCart3);

function removeFromCart3(event){
	sessionStorage.removeItem("product3");
	sessionStorage.removeItem("price3");
	sessionStorage.removeItem("qty3");
	window.location.reload();
}

var input4 =document.getElementById('b4');
input4.addEventListener("click", removeFromCart4);

function removeFromCart4(event){
	sessionStorage.removeItem("product4");
	sessionStorage.removeItem("price4");
	sessionStorage.removeItem("qty4");
	window.location.reload();
}

var input5 =document.getElementById('b5');
input5.addEventListener("click", removeFromCart5);

function removeFromCart5(event){
	sessionStorage.removeItem("product5");
	sessionStorage.removeItem("price5");
	sessionStorage.removeItem("qty5");
	window.location.reload();
}

var input6 =document.getElementById('b6');
input6.addEventListener("click", removeFromCart6);

function removeFromCart6(event){
	sessionStorage.removeItem("product6");
	sessionStorage.removeItem("price6");
	sessionStorage.removeItem("qty6");
	window.location.reload();
}

var input7 =document.getElementById('b7');
input7.addEventListener("click", removeFromCart7);

function removeFromCart7(event){
	sessionStorage.removeItem("product7");
	sessionStorage.removeItem("price7");
	sessionStorage.removeItem("qty7");
	window.location.reload();
}

var input8 =document.getElementById('b8');
input8.addEventListener("click", removeFromCart8);

function removeFromCart8(event){
	sessionStorage.removeItem("product8");
	sessionStorage.removeItem("price8");
	sessionStorage.removeItem("qty8");
	window.location.reload();
}

var input9 =document.getElementById('b9');
input9.addEventListener("click", removeFromCart9);

function removeFromCart9(event){
	sessionStorage.removeItem("product9");
	sessionStorage.removeItem("price9");
	sessionStorage.removeItem("qty9");
	window.location.reload();
}

var input10 =document.getElementById('b10');
input10.addEventListener("click", removeFromCart10);

function removeFromCart10(event){
	sessionStorage.removeItem("product10");
	sessionStorage.removeItem("price10");
	sessionStorage.removeItem("qty10");
	window.location.reload();
}

var input11 =document.getElementById('b11');
input11.addEventListener("click", removeFromCart11);

function removeFromCart11(event){
	sessionStorage.removeItem("product11");
	sessionStorage.removeItem("price11");
	sessionStorage.removeItem("qty11");
	window.location.reload();
}

var input12 =document.getElementById('b12');
input12.addEventListener("click", removeFromCart12);

function removeFromCart12(event){
	sessionStorage.removeItem("product12");
	sessionStorage.removeItem("price12");
	sessionStorage.removeItem("qty12");
	window.location.reload();
}

var input13 =document.getElementById('b13');
input13.addEventListener("click", removeFromCart13);

function removeFromCart13(event){
	sessionStorage.removeItem("product13");
	sessionStorage.removeItem("price13");
	sessionStorage.removeItem("qty13");
	window.location.reload();
}

var input14 =document.getElementById('b14');
input14.addEventListener("click", removeFromCart14);

function removeFromCart14(event){
	sessionStorage.removeItem("product14");
	sessionStorage.removeItem("price14");
	sessionStorage.removeItem("qty14");
	window.location.reload();
}

var input15 =document.getElementById('b15');
input15.addEventListener("click", removeFromCart15);

function removeFromCart15(event){
	sessionStorage.removeItem("product15");
	sessionStorage.removeItem("price15");
	sessionStorage.removeItem("qty15");
	window.location.reload();
}

var input16 =document.getElementById('b16');
input16.addEventListener("click", removeFromCart16);

function removeFromCart16(event){
	sessionStorage.removeItem("product16");
	sessionStorage.removeItem("price16");
	sessionStorage.removeItem("qty16");
	window.location.reload();
}

var input17 =document.getElementById('b17');
input17.addEventListener("click", removeFromCart17);

function removeFromCart17(event){
	sessionStorage.removeItem("product17");
	sessionStorage.removeItem("price17");
	sessionStorage.removeItem("qty17");
	window.location.reload();
}

var input18 =document.getElementById('b18');
input18.addEventListener("click", removeFromCart18);

function removeFromCart18(event){
	sessionStorage.removeItem("product18");
	sessionStorage.removeItem("price18");
	sessionStorage.removeItem("qty18");
	window.location.reload();
}

var input19 =document.getElementById('b19');
input19.addEventListener("click", removeFromCart19);

function removeFromCart19(event){
	sessionStorage.removeItem("product19");
	sessionStorage.removeItem("price19");
	sessionStorage.removeItem("qty19");
	window.location.reload();
}

var input20 =document.getElementById('b20');
input20.addEventListener("click", removeFromCart20);

function removeFromCart20(event){
	sessionStorage.removeItem("product20");
	sessionStorage.removeItem("price20");
	sessionStorage.removeItem("qty20");
	window.location.reload();
}

var input21 =document.getElementById('b21');
input21.addEventListener("click", removeFromCart21);

function removeFromCart21(event){
	sessionStorage.removeItem("product21");
	sessionStorage.removeItem("price21");
	sessionStorage.removeItem("qty21");
	window.location.reload();
}

document.getElementById("back").addEventListener("click", goBack);
function goBack(){
	window.location.href="Shop.html";
}

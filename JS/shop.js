/* products */
function product(){
	this.name="";
	this.price=0.00;
}

var product1 = new product();
product1.name="Classic Chicken Soup";
product1.price=8.00;

var product2 = new product();
product2.name="Mix Starter";
product2.price=10.00;

var product3 = new product();
product3.name="Skewed Chicken Pieces";
product3.price=6.00;

var product4 = new product();
product4.name="South Western Shrimp";
product4.price=9.50;

var product5 = new product();
product5.name="Stuffed Peppers";
product5.price=9.00;

var product6 = new product();
product6.name="Veg Soup";
product6.price=7.00;

var product7 = new product();
product7.name="Beef Brikset";
product7.price=15.00;

var product8 = new product();
product8.name="Chilli Turkey";
product8.price=12.50;

var product9 = new product();
product9.name="Classic Spaghetti";
product9.price=15.00;

var product10 = new product();
product10.name="Honey Glazed Ham";
product10.price=13.00;

var product11 = new product();
product11.name="Honey Glazed Heavan";
product11.price=15.00;

var product12 = new product();
product12.name="Lancashire Hotpot";
product12.price=16.00;

var product13 = new product();
product13.name="Orange Stuffed Duck";
product13.price=14.00;

var product14 = new product();
product14.name="Prawn & Scallop Paella";
product14.price=13.00;

var product15 = new product();
product15.name="Sweet Potato Wellington";
product15.price=15.00;

var product16 = new product();
product16.name="Banana Caramel Cream";
product16.price=12.00;

var product17 = new product();
product17.name="Cannoli";
product17.price=10.00;

var product18 = new product();
product18.name="Pumpkin Pie";
product18.price=11.00;

var product19 = new product();
product19.name="Red Velvet Cheesecake";
product19.price=13.00;

var product20 = new product();
product20.name="Sugarless Cheese Cake";
product20.price=12.00;

var product21 = new product();
product21.name="Tiramisu";
product21.price=10.00;

document.getElementById("name1").innerHTML=product1.name;
document.getElementById("name2").innerHTML=product2.name;
document.getElementById("name3").innerHTML=product3.name;
document.getElementById("name4").innerHTML=product4.name;
document.getElementById("name5").innerHTML=product5.name;
document.getElementById("name6").innerHTML=product6.name;
document.getElementById("name7").innerHTML=product7.name;
document.getElementById("name8").innerHTML=product8.name;
document.getElementById("name9").innerHTML=product9.name;
document.getElementById("name10").innerHTML=product10.name;
document.getElementById("name11").innerHTML=product11.name;
document.getElementById("name12").innerHTML=product12.name;
document.getElementById("name13").innerHTML=product13.name;
document.getElementById("name14").innerHTML=product14.name;
document.getElementById("name15").innerHTML=product15.name;
document.getElementById("name16").innerHTML=product16.name;
document.getElementById("name17").innerHTML=product17.name;
document.getElementById("name18").innerHTML=product18.name;
document.getElementById("name19").innerHTML=product19.name;
document.getElementById("name20").innerHTML=product20.name;
document.getElementById("name21").innerHTML=product21.name;

document.getElementById("price1").innerHTML=product1.price.toFixed(2); 
document.getElementById("price2").innerHTML=product2.price.toFixed(2);
document.getElementById("price3").innerHTML=product3.price.toFixed(2);
document.getElementById("price4").innerHTML=product4.price.toFixed(2);
document.getElementById("price5").innerHTML=product5.price.toFixed(2);
document.getElementById("price6").innerHTML=product6.price.toFixed(2);
document.getElementById("price7").innerHTML=product7.price.toFixed(2);
document.getElementById("price8").innerHTML=product8.price.toFixed(2);
document.getElementById("price9").innerHTML=product9.price.toFixed(2);
document.getElementById("price10").innerHTML=product10.price.toFixed(2);
document.getElementById("price11").innerHTML=product11.price.toFixed(2);
document.getElementById("price12").innerHTML=product12.price.toFixed(2);
document.getElementById("price13").innerHTML=product13.price.toFixed(2);
document.getElementById("price14").innerHTML=product14.price.toFixed(2);
document.getElementById("price15").innerHTML=product15.price.toFixed(2);
document.getElementById("price16").innerHTML=product16.price.toFixed(2);
document.getElementById("price17").innerHTML=product17.price.toFixed(2);
document.getElementById("price18").innerHTML=product18.price.toFixed(2);
document.getElementById("price19").innerHTML=product19.price.toFixed(2);
document.getElementById("price20").innerHTML=product20.price.toFixed(2);
document.getElementById("price21").innerHTML=product21.price.toFixed(2);
document.getElementById("i1").value=sessionStorage.getItem("qty1")||0;
document.getElementById("i2").value=sessionStorage.getItem("qty2")||0;
document.getElementById("i3").value=sessionStorage.getItem("qty3")||0;
document.getElementById("i4").value=sessionStorage.getItem("qty4")||0;
document.getElementById("i5").value=sessionStorage.getItem("qty5")||0;
document.getElementById("i6").value=sessionStorage.getItem("qty6")||0;
document.getElementById("i7").value=sessionStorage.getItem("qty7")||0;
document.getElementById("i8").value=sessionStorage.getItem("qty8")||0;
document.getElementById("i9").value=sessionStorage.getItem("qty9")||0;
document.getElementById("i10").value=sessionStorage.getItem("qty10")||0;
document.getElementById("i11").value=sessionStorage.getItem("qty11")||0;
document.getElementById("i12").value=sessionStorage.getItem("qty12")||0;
document.getElementById("i13").value=sessionStorage.getItem("qty13")||0;
document.getElementById("i14").value=sessionStorage.getItem("qty14")||0;
document.getElementById("i15").value=sessionStorage.getItem("qty15")||0;
document.getElementById("i16").value=sessionStorage.getItem("qty16")||0;
document.getElementById("i17").value=sessionStorage.getItem("qty17")||0;
document.getElementById("i18").value=sessionStorage.getItem("qty18")||0;
document.getElementById("i19").value=sessionStorage.getItem("qty19")||0;
document.getElementById("i20").value=sessionStorage.getItem("qty20")||0;
document.getElementById("i21").value=sessionStorage.getItem("qty21")||0;

   
document.getElementById("b1").addEventListener("click", addToCart1);
function addToCart1(){
	var qty = document.getElementById("i1").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product1","Classic Chicken Soup");
	sessionStorage.setItem("price1",8.00);
	sessionStorage.setItem("qty1",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+"Chicken Soup added to cart\n Total cost is: "+(8*qty));
}

document.getElementById("b2").addEventListener("click", addToCart2);
function addToCart2(){
	var qty = document.getElementById("i2").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product2","Mix Starter");
	sessionStorage.setItem("price2",10.00);
	sessionStorage.setItem("qty2",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Mix Starter added to cart\n Total cost is: "+(10*qty));
}

document.getElementById("b3").addEventListener("click", addToCart3);
function addToCart3(){

	var qty = document.getElementById("i3").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product3","Skewed Chicken Pieces");
	sessionStorage.setItem("price3",6.00);
	sessionStorage.setItem("qty3",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Skewed Chicken Pieces added to cart\n Total cost is: "+(50*qty));
}

document.getElementById("b4").addEventListener("click", addToCart4);
function addToCart4(){
	var qty = document.getElementById("i4").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product4","South Western Shrimp");
	sessionStorage.setItem("price4",9.50);
	sessionStorage.setItem("qty4",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" South Western Shrimp added to cart\n Total cost is: "+(9.50*qty));
}

document.getElementById("b5").addEventListener("click", addToCart5);
function addToCart5(){
	var qty = document.getElementById("i5").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product5","Stuffed Peppers");
	sessionStorage.setItem("price5",9);
	sessionStorage.setItem("qty5",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Stuffed Peppers added to cart\n Total cost is: "+(9*qty));
}

document.getElementById("b6").addEventListener("click", addToCart6);
function addToCart6(){
	var qty = document.getElementById("i6").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product6","Veg Soup");
	sessionStorage.setItem("price6",7);
	sessionStorage.setItem("qty6",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Veg Soup added to cart\n Total cost is: "+(7*qty));
}

document.getElementById("b7").addEventListener("click", addToCart7);
function addToCart7(){
	var qty = document.getElementById("i7").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product7","Beef Brikset");
	sessionStorage.setItem("price7",15);
	sessionStorage.setItem("qty7",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Beef Brikset added to cart\n Total cost is: "+(15*qty));
}

document.getElementById("b8").addEventListener("click", addToCart8);
function addToCart8(){
	var qty = document.getElementById("i8").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product8","Chilli Turkey");
	sessionStorage.setItem("price8",12.50);
	sessionStorage.setItem("qty8",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Chilli Turkey added to cart\n Total cost is: "+(12.50*qty));
}

document.getElementById("b9").addEventListener("click", addToCart9);
function addToCart9(){
	var qty = document.getElementById("i9").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product9","Classic Spaghetti");
	sessionStorage.setItem("price9",15);
	sessionStorage.setItem("qty9",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Classic Spaghetti added to cart\n Total cost is: "+(15*qty));
}

document.getElementById("b10").addEventListener("click", addToCart10);
function addToCart10(){
	var qty = document.getElementById("i10").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product10","Honey Glazed Ham");
	sessionStorage.setItem("price10",13);
	sessionStorage.setItem("qty10",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Honey Glazed Ham added to cart\n Total cost is: "+(13*qty));
}

document.getElementById("b11").addEventListener("click", addToCart11);
function addToCart11(){
	var qty = document.getElementById("i11").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product11","Honey Glazed Heaven");
	sessionStorage.setItem("price11",15);
	sessionStorage.setItem("qty11",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Honey Glazed Heaven	added to cart\n Total cost is: "+(15*qty));
}

document.getElementById("b12").addEventListener("click", addToCart12);
function addToCart12(){
	var qty = document.getElementById("i12").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product12","Lancashire Hotpot");
	sessionStorage.setItem("price12",16);
	sessionStorage.setItem("qty12",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Lancashire Hotpot added to cart\n Total cost is: "+(16*qty));
}

document.getElementById("b13").addEventListener("click", addToCart13);
function addToCart13(){
	var qty = document.getElementById("i13").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product13","Orange Stuffed Duck");
	sessionStorage.setItem("price13",14);
	sessionStorage.setItem("qty13",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Orange Stuffed Duck added to cart\n Total cost is: "+(14*qty));
}

document.getElementById("b14").addEventListener("click", addToCart14);
function addToCart14(){
	var qty = document.getElementById("i14").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product14","Prawn & Scallop Paella");
	sessionStorage.setItem("price14",13);
	sessionStorage.setItem("qty14",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Prawn & Scallop Paella added to cart\n Total cost is: "+(13*qty));
}

document.getElementById("b15").addEventListener("click", addToCart15);
function addToCart15(){
	var qty = document.getElementById("i15").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product15","Sweet Potato Wellington");
	sessionStorage.setItem("price15",15);
	sessionStorage.setItem("qty15",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Sweet Potato Wellington added to cart\n Total cost is: "+(15*qty));
}

document.getElementById("b16").addEventListener("click", addToCart16);
function addToCart16(){
	var qty = document.getElementById("i16").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product16","Banana Caramel Cream");
	sessionStorage.setItem("price16",12);
	sessionStorage.setItem("qty16",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Banana Caramel Cream added to cart\n Total cost is: "+(12*qty));
}

document.getElementById("b17").addEventListener("click", addToCart17);
function addToCart17(){
	var qty = document.getElementById("i17").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product17","Cannoli");
	sessionStorage.setItem("price17",10);
	sessionStorage.setItem("qty17",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Cannoli added to cart\n Total cost is: "+(10*qty));
}

document.getElementById("b18").addEventListener("click", addToCart18);
function addToCart18(){
	var qty = document.getElementById("i18").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product18","Pumpkin Pie");
	sessionStorage.setItem("price18",11);
	sessionStorage.setItem("qty18",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Pumpkin Pie added to cart\n Total cost is: "+(11*qty));
}

document.getElementById("b19").addEventListener("click", addToCart19);
function addToCart19(){
	var qty = document.getElementById("i19").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product19","Red Velvet Cheesecake");
	sessionStorage.setItem("price19",13);
	sessionStorage.setItem("qty19",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Red Velvet Cheesecake added to cart\n Total cost is: "+(13*qty));
}

document.getElementById("b20").addEventListener("click", addToCart20);
function addToCart20(){
	var qty = document.getElementById("i20").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product20","Sugarless Cheesecake");
	sessionStorage.setItem("price20",12);
	sessionStorage.setItem("qty20",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+" Sugarless Cheesecake  added to cart\n Total cost is: "+(12*qty));
}

document.getElementById("b21").addEventListener("click", addToCart21);
function addToCart21(){
	var qty = document.getElementById("i21").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product21","Tiramisu");
	sessionStorage.setItem("price21",10);
	sessionStorage.setItem("qty21",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+"Tiramisu added to cart\n Total cost is: "+(10*qty));
}






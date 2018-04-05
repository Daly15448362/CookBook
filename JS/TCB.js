var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/* LOGIN DETAILS */
document.getElementById("log_btn").addEventListener("click",login);
function login(){
	window.location.href="Shop.html";
}

/* customer checkout */
function customer(){
	this.name="";
	this.phone="";
	this.address="";
	this.email="";
}

var customer1 = new customer();
customer1.name="John Smith";
customer1.phone="091 742889";
customer1.address="1 Shop Street, Galway";

function showCustomerDetails(){
	document.getElementById("custname").innerHTML=customer1.name;
	document.getElementById("custphone").innerHTML=customer1.phone;
	document.getElementById("custaddr").innerHTML=customer1.address;
	document.getElementById("order").innerHTML="Cost of order is: €";
}

document.getElementById("customer_load").addEventListener("load", showCustomerDetails());



document.getElementById("checkout").addEventListener("click", confirmOrder);
function confirmOrder(){
	window.location.href="confirm.html";
}


/* products */
function product(){
	this.name="";
	this.price=0.00;
}

var product1 = new product();
product1.name="Shoes";
product1.price=40.00;

var product2 = new product();
product2.name="Runners";
product2.price=50.00;

document.getElementById("name1").innerHTML=product1.name;
document.getElementById("name2").innerHTML=product2.name;
document.getElementById("price1").innerHTML=product1.price.toFixed(2); 
document.getElementById("price2").innerHTML=product2.price.toFixed(2);
document.getElementById("i1").value=sessionStorage.getItem("qty1")||0;
document.getElementById("i2").value=sessionStorage.getItem("qty2")||0;
   
document.getElementById("b1").addEventListener("click", addToCart1);
function addToCart1(){
	var qty = document.getElementById("i1").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product1","Shoes");
	sessionStorage.setItem("price1",40.00);
	sessionStorage.setItem("qty1",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+pair+" of shoes added to cart\n Total cost is: €"+(40*qty));
}

document.getElementById("b2").addEventListener("click", addToCart2);
function addToCart2(){
	var qty = document.getElementById("i2").value;
	if(isNaN(qty)){
		alert("Must provide a number only for quantity");
		return false;
	}
	sessionStorage.setItem("product2","Runners");
	sessionStorage.setItem("price2",50.00);
	sessionStorage.setItem("qty2",qty);
	if(qty==1){
		var pair="pair";
	}else{
		var pair="pairs"
	}
	alert(qty+" "+pair+" of runners added to cart\n Total cost is: €"+(50*qty));
}
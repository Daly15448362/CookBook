/* customer */
function customer(){
	this.name="";
	this.phone="";
	this.address="";
	this.email="";
}

var customer1 = new customer();
customer1.name="";
customer1.phone="";
customer1.address="";

function showCustomerDetails(){
	document.getElementById("custname").innerHTML=customer1.name;
	document.getElementById("custphone").innerHTML=customer1.phone;
	document.getElementById("custaddr").innerHTML=customer1.address;
	document.getElementById("order").innerHTML="Cost of order is: &euro;";
}

document.getElementById("customer_load").addEventListener("load", showCustomerDetails());




function confirmOrder(){
	document.getElementById("checkout").addEventListener("click", confirmOrder);
	window.location.href="Confirm.html";
}
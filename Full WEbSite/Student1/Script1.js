// JavaScript source code
var price1;
var price2;
var price3;
var price4;
var quantityArray =[];
var productArray =[];
var priceArray =[];
var alertMessage =[];


function shopedProduct1(){
	price1=document.getElementById('product1').value*10000.00;	
	window.alert(document.getElementById('product1').value+" Football is added to your cart Rs"+price1);
	quantityArray.push(document.getElementById('product1').value);
	productArray.push("Football");
	priceArray.push(price1);
	
}

function shopedProduct2(){
	price2=document.getElementById('product2').value*8000.00;	
	window.alert(document.getElementById('product2').value+" Keeper Gloves is added to your cart Rs "+price2);
	quantityArray.push(document.getElementById('product2').value);
	productArray.push("Keeper Gloves");
	priceArray.push(price2);
}

function shopedProduct3(){
	price3=document.getElementById('product3').value*7500.00;	
	window.alert(document.getElementById('product3').value+" Leather bat is added to your cart. Rs"+price3);
	quantityArray.push(document.getElementById('product3').value);
	productArray.push("Leather Bat");
	priceArray.push(price3);
}

function shopedProduct4(){
	price4=document.getElementById('product4').value*5000.00;	
	window.alert(document.getElementById('product4').value+" Badminton is added to your cart. Rs"+price4);
	quantityArray.push(document.getElementById('product4').value);
	productArray.push("Badminton");
	priceArray.push(price4);
}

function validateForm(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var credit = document.getElementById("Cnumber").value;
	var mobile = document.getElementById("Mnumber").value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
	
	if(name.length < 3){
		alert("Name must be filled out");
		return false;
	}
	
	
	if(!email.match(mailformat)){
		alert("Email must be filled out");
		return false;
	}
	
	
	if(address==""){
		alert("Address must be filled out");
		return false;
	}

	if(credit==""){
		alert("Credit card number must be filled out");
		return false;
	}

	if(mobile.length < 9){
		alert("Mobile Number must be filled out");
		return false;
	}

	var totalPrice=0;
	var i;
	for(i = 0; i < productArray.length; i++){
		var tempString = quantityArray[i] + " x " + productArray[i] + " - Rs " + priceArray[i];
		alertMessage.push(tempString);
		totalPrice += priceArray[i];
	}
	
	
	window.alert("Customer name : "+document.getElementById('name').value + "\nCustomer Email : "+document.getElementById("email").value + "\nYour order summary : \n" + alertMessage.join("\n") + "\nYour total is Rs " + totalPrice.toString() + "\nThank you for shopping with SportBuzz online shop.\nYour products will be delivered soon as possible!")

}

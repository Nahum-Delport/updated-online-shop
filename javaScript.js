// declared variables for later use
// The total and other item prices
// Also an empty cart array
var total = 0;
var item1 = 350;
var item2 = 370;
var item3 = 2700;
var item4 = 400;
var item5 = 420;
var item6 = 3700;
var act_cart = [];

// For each button, once clicked, the object and price will be stored to the sessionStorage
var add_item1 = function(){
	total += item1;
	
	sessionStorage.setItem("object1", "The Lacerations");
	sessionStorage.setItem("price1", "R350.00");
	let object_1 = sessionStorage.getItem("object1");
	let price_1 = sessionStorage.getItem("price1");
	act_cart.push(sessionStorage.getItem("object1"));

}
var add_item2 = function(){
	total += item2;

	sessionStorage.setItem("object2", "Rodas Sweater Stripe");
	sessionStorage.setItem("price2", "R370.00");
	let object_2 = sessionStorage.getItem("object2");
	let price_2 = sessionStorage.getItem("price2");
	act_cart.push(sessionStorage.getItem("object2"));
}
var add_item3 = function(){
	total += item3; 

	sessionStorage.setItem("object3", "Sunset Getaway Complete");
	sessionStorage.setItem("price3", "R2,700.00");
	let object_3 = sessionStorage.getItem("object3");
	let price_3 = sessionStorage.getItem("price3");
	act_cart.push(sessionStorage.getItem("object3"));
}
var add_item4 = function(){
	total += item4;

	sessionStorage.setItem("object4", "Glass Shop LS Knit Tee Black Heather");
	sessionStorage.setItem("price4", "R400.00");
	let object_4 = sessionStorage.getItem("object4");
	let price_4 = sessionStorage.getItem("price4");
	act_cart.push(sessionStorage.getItem("object4"));
}
var add_item5 = function(){
	total += item5;

	sessionStorage.setItem("object5", "Rodas Sweater Stone");
	sessionStorage.setItem("price5", "R420.00");
	let object_5 = sessionStorage.getItem("object5");
	let price_5 = sessionStorage.getItem("price5");
	act_cart.push(sessionStorage.getItem("object5"));
}
var add_item6 = function(){
	total += item6

	sessionStorage.setItem("object6", "Eclipse Bonsai Complete");
	sessionStorage.setItem("price6", "R3,700.00");
	let object_6 = sessionStorage.getItem("object6");
	let price_6 = sessionStorage.getItem("price6");
	act_cart.push(sessionStorage.getItem("object6"));
}

// Called the grand function because it took me ages to figure this one out
// Also printed to the cart page HTML as list elements
// While the length of the session storage iis more than one, the loop will reitterate
var grand = function(){
	var length_of = sessionStorage.length / 2; 
	while (length_of > 0){
		if (typeof sessionStorage.object1 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.object1);
			x.appendChild(a);
			document.getElementById("item-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("object1");
			sessionStorage.removeItem("price1");
		}
		else if (typeof sessionStorage.object2 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.object2);
			x.appendChild(a);
			document.getElementById("item-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("object2");
			sessionStorage.removeItem("price2");
		}
		else if (typeof sessionStorage.object3 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.object3);
			x.appendChild(a);
			document.getElementById("item-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("object3");
			sessionStorage.removeItem("price3");
		}
		else if (typeof sessionStorage.object4 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.object4);
			x.appendChild(a);
			document.getElementById("item-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("object4");
			sessionStorage.removeItem("price4");
		}
		else if (typeof sessionStorage.object5 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.object5);
			x.appendChild(a);
			document.getElementById("item-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("object5");
			sessionStorage.removeItem("price5");
		}
		else if (typeof sessionStorage.object6 == "string"){
			var x = document.createElement("LI");
			var a = document.createTextNode(sessionStorage.object6);
			x.appendChild(a);
			document.getElementById("item-list").appendChild(x);
			length_of = length_of - 1;
			sessionStorage.removeItem("object6");
			sessionStorage.removeItem("price6");
		}
	};
	// Once clicked on "show cart", more buttons will be displayed
	document.getElementById("removeOne").style.display = "block";
	document.getElementById("confirmOrder").style.display = "block";
	document.getElementById("total_amount").innerHTML = "Your total: R" + localStorage.getItem("price");
};
// Simply removes an item from the list
var remove_one = function(){
  var list = document.getElementById("item-list");
  list.removeChild(list.childNodes[0]);
};

// Once clicked on "cart" the total will be saved to local storage to be displayed later
var save_to = function(){
	localStorage.setItem("price", total);
};
// This generates a reference number for the customer
function refnumber(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
// The confirm order does various things, but mainy asks about delivery and if the customer would like a coupon
var confirm_order = function(){
	var amount = Number(localStorage.getItem("price"));
    var coupon = prompt("Would you like to apply for a coupon? (yes/no)");
    if (coupon == "yes") {
        alert("You have received a R50 coupon off your purchase!");
        amount -= 50;
    }
    else {
        alert("Your order will be processed normally");
            }; 
	
	var person = prompt("Would you like it to be 'delivered' (R120 extra) or 'collected' by yourself").toLowerCase();
	if (person == "delivered") {
		alert("You have selected delivery");
		amount += 120;
	} else {
		alert("You have selected to manually collect your item(s)");
	}
	
	alert("Your order is successful.\nYour total is: R" + amount +"\nYour refference code is: " + refnumber(7));
// At the end of this function everything is cleared from the list
	localStorage.clear();
	sessionStorage.clear();
	$("#item-list").empty();
};



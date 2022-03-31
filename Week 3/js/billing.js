var orders = [];

var cusName = prompt("Welcome to Food and Order!\nPlease enter your name below!");
if(cusName){
    var order = true
    while(order){
        showOrder(orders);
        var selection = prompt("Hi " + cusName + "\nPlease select your order\n1. Fries - $2\n2. Burger - $3\n3. Coke - $1");
    
        while(selection < 0 || selection > 3){
            selection = prompt("Invaild choice! Please select again\n1. Fries - $2\n2. Burger - $3\n3. Coke - $1");
        }

        if(selection){
            var quantity = prompt("Please enter the quantity you would like");
            if(quantity){
                while(quantity <= 0 && quantity){
                    quantity = prompt("Quantity cannot be lower than 0");
                    
                }
                
                    var sub = subTotal(selection, quantity)
                    orders.push(sub);

            }



            var cont = confirm("Would you like to order more?");
            if(!cont){
                showOrder(orders);
                total = calculateTotal(orders);
                alert("Your total bill is $" + total);
                break;
            }
        }
        else{
            var cancel = confirm("Would you like to cancel this order?");
            if(cancel){
                break;
            }
        }
    
    }
}
alert("Thank you for using Food and Order! We hope to see you again!")

function subTotal(item, quan){
    switch(Number(item)){
        case 1:
            var order = {
                name:"Fries",
                price: 2,
                quantity:quan,
                subTotal: quan*2
            }
            return order
            break;
        case 2:
            var order = {
                name:"Burger",
                price: 3,
                quantity:quan,
                subTotal: quan*3
            }
            return order
            break;
        case 3:
            var order = {
                name:"Coke",
                price: 1,
                quantity:quan,
                subTotal: quan*1
            }
            return order
            break;
    }
}

function calculateTotal(orders){
    var total = 0
    for(var o of orders){
        total += o.subTotal;
    }

    return total;
}

function showOrder(orders){
    if(orders.length > 0){
        console.log("Current Order")
        console.log("Food   Price   Quantity    Subtotal")
        for(var o of orders){
            console.log(o.name +"   "+ o.price + "  " + o.quantity + "  " + o.subTotal)
        }
    }
    else{
        console.log("No orders yet!")
    }
}

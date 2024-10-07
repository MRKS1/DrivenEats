function choiceFood(itemFood) {
    const selectedBefore = document.querySelector(".food .selected");
    let nameFood = itemFood.innerHTML;
    if(selectedBefore !== null){
        selectedBefore.classList.remove("selected");
    }
    itemFood.classList.add("selected");
}

function choiceDrink(itemDrink) {
    const selectedBefore = document.querySelector(".drink .selected");
    if(selectedBefore !== null){
        selectedBefore.classList.remove("selected");
    }
    itemDrink.classList.add("selected");
}

function choiceCandy(itemCandy) {
    const selectedBefore = document.querySelector(".candy .selected");
    if(selectedBefore !== null){
        selectedBefore.classList.remove("selected");
    }
    itemCandy.classList.add("selected");
}

function choiceAll(all) {
    const foodYes = document.querySelector(".food .selected");
    const drinkYes = document.querySelector(".drink .selected");
    const candyYes = document.querySelector(".candy .selected");
    
    if(foodYes !== null && drinkYes !== null && candyYes !== null){
        const finish = document.querySelector(".notFinish");    
        finish.classList.remove("notFinish");
        finish.classList.add("footer-green");
        const newText = "Fechar pedido";
        document.querySelector(".footer-green").innerHTML = newText;
    }
}

function closeOrder(finishOrder) {
    const foodName = document.querySelector(".food .selected .name").innerHTML;
    const drinkName = document.querySelector(".drink .selected .name").innerHTML;
    const candyName = document.querySelector(".candy .selected .name").innerHTML;

    
    const foodPrice = Number(document.querySelector(".food .selected .price").innerHTML);
    const drinkPrice = Number(document.querySelector(".drink .selected .price").innerHTML);
    const candyPrice = Number(document.querySelector(".candy .selected .price").innerHTML);


    const foodChoice = `${foodName}: ${foodPrice}`;
    document.querySelector(".orderFood").innerHTML = foodChoice;

    
    const drinkChoice = `${drinkName}: ${drinkPrice}`;
    document.querySelector(".orderDrink").innerHTML = drinkChoice;

    const candyChoice = `${candyName}: ${candyPrice}`;
    document.querySelector(".orderCandy").innerHTML = candyChoice;
   

    const total = foodPrice + drinkPrice + candyPrice;
    const totalPrint = `TOTAL: ${total.toFixed(2)}`;
    document.querySelector(".orderTotal").innerHTML = totalPrint;


    document.querySelector(".lowOpacity").classList.remove("hide");
    document.querySelector(".popup").classList.remove("hide");

    }
    
    function cancel(returnButton) {
        document.querySelector(".lowOpacity").classList.add("hide");
        document.querySelector(".popup").classList.add("hide");
            
    }

    function sendMsg(wpp) {
        const foodNameWpp = document.querySelector(".food .selected .name").innerHTML;
        const drinkNameWpp = document.querySelector(".drink .selected .name").innerHTML;
        const candyNameWpp = document.querySelector(".candy .selected .name").innerHTML;
        const foodPriceWpp = Number(document.querySelector(".food .selected .price").innerHTML);
        const drinkPriceWpp = Number(document.querySelector(".drink .selected .price").innerHTML);
        const candyPriceWpp = Number(document.querySelector(".candy .selected .price").innerHTML);
        const totalWpp = foodPriceWpp + drinkPriceWpp + candyPriceWpp;
        const whatsappMsg = `Olá, gostaria de fazer o pedido:
- Prato: ${foodNameWpp}
- Bebida: ${drinkNameWpp}
- Sobremesa: ${candyNameWpp}
Total: ${totalWpp.toFixed(2)}`;
        let encoded = "https://wa.me//5511988484544?text=" + encodeURIComponent(whatsappMsg);
        document.querySelector(".order .wpp").setAttribute("href", encoded)
    }
function updatePositive(item){
    var total = parseInt(document.querySelector(".amount").textContent)
    total += parseInt(item.amount);
    document.querySelector(".amount").textContent = total+"$";
    document.querySelector("#amount").classList.toggle("minus");
    document.querySelector("#amount").value = ""
    document.querySelector("#transaction").value = ""
    var transHtml =  item.transaction
                     + " " + '+' + item.amount;
    var newP = document.createElement("p");
    newP.setAttribute("id",item.id);
    newP.setAttribute("value", item.amount);
    newP.setAttribute("onclick", "submitControl(this.id)")
    newP.innerHTML = transHtml;
    document.querySelector(".added-items").appendChild(newP);



};





function updateNegative(item){
    var total = parseInt(document.querySelector(".amount").textContent)
    total -= parseInt(item.amount);
    document.querySelector(".amount").textContent = total+"$";
    document.querySelector("#amount").classList.toggle("minus");
    document.querySelector("#amount").value = ""
    document.querySelector("#transaction").value = ""
    var transHtml =  item.transaction+ " " + '-' + item.amount;

    var newP = document.createElement("p");
    newP.setAttribute("id",item.id)
    newP.setAttribute("value", item.amount)
    newP.setAttribute("onclick", "submitControl(this.id)")
    newP.innerHTML = transHtml;
    document.querySelector(".minus-items").appendChild(newP);

};


function deleteItem(clicked_id){
    var parentPositive, parentNegative,toRemoveItemId, check, itemValue, total;
    total          = parseInt(document.querySelector(".amount").textContent);
    parentPositive = document.querySelector(".added-items");
    parentNegative = document.querySelector(".minus-items");
    toRemoveItemId = document.getElementById(clicked_id);
    check          = parentPositive.contains(toRemoveItemId);


    if(check == true){
        itemValue = parseInt(toRemoveItemId.getAttribute("value"));
        remaining = total - itemValue
        document.querySelector(".amount").textContent = remaining + "$";
        parentPositive.removeChild(toRemoveItemId);


    }else{
        
        itemValue = parseInt(toRemoveItemId.getAttribute("value"));
        remaining = total + itemValue
        document.querySelector(".amount").textContent = remaining + "$";
        parentNegative.removeChild(toRemoveItemId);
            
        
        

    }



}



function submitControl(ID){

    var positiveID     = parseInt(document.querySelector(".added-items").lastElementChild.id);
    var negativeID     = parseInt(document.querySelector(".minus-items").lastElementChild.id);
    var gotList        =[positiveID, negativeID]
    var biggestIdValue = Math.max.apply(null,gotList);
    var selector       = document.querySelector('.selector').value;
    var selectorValue  = document.querySelector('.'+selector).textContent;
    var transaction    = document.querySelector('#transaction').value;
    var amount         = document.querySelector('#amount').value;



    if(transaction && amount >= 1){
        if(selectorValue == "+"){
            if(biggestIdValue == 0 ){

                biggestIdValue    = 1;
                var newItem       = {"id":biggestIdValue,"transaction":transaction,"amount":amount, "value":selectorValue};
                
                return updatePositive(newItem);
            }else{

                var newItem       = {"id":biggestIdValue + 1,"transaction":transaction,"amount":amount, "value":selectorValue};
                
                return updatePositive(newItem);
            }




        }else{
            if(biggestIdValue == 0 ){

                biggestIdValue += 1;
                var newItem = {"id":biggestIdValue,"transaction":transaction,"amount":amount, "value":selectorValue};

                return updateNegative(newItem);

            }else{

                var newItem = {"id":biggestIdValue + 1 ,"transaction":transaction,"amount":amount, "value":selectorValue};

                return updateNegative(newItem);
                }}}
        else{
            
            
            console.log("put a number dude")
        }
return deleteItem(ID);
}

(selfInstanciate = function(){
    document.querySelector("#submit").addEventListener('click',submitControl);
    document.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        submitControl();
    }});
    
})();

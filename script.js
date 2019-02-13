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


    


    
    
    


    
    
    

    
    
    

    







//
//var parentAdd, parentMinus,negativeTransactions,positiveTransactions,total,id;
//
//negativeTransactions = [];
//positiveTransactions      = [];
//parentMinus          = document.querySelector(".minus-items");
//parentAdd            = document.querySelector(".added-items");
//total                = 0;
//id                   = 0;
//
//
//
//function updatePositive(){
//
//    while(parentAdd.firstChild){
//          parentAdd.firstChild.remove()}
//
//    for(item in positiveTransactions){
//        if(positiveTransactions[item]){
//
//            var transHtml =  positiveTransactions[item].transaction
//                             + " " + '+' + positiveTransactions[item].amount;
//            var newP = document.createElement("p");
//            newP.setAttribute("id",positiveTransactions[item].id)
//            newP.setAttribute("onClick", "deleteItem(this.id)")
//            newP.innerHTML = transHtml;
//            document.querySelector(".added-items").appendChild(newP);
//
//}}}
//
//function updateNegative(){
//
//    while(parentMinus.firstChild){
//         parentMinus.firstChild.remove()}
//
//    for(item in negativeTransactions){
//        if(negativeTransactions[item]){
//
//            var transHtml =  negativeTransactions[item].transaction
//                             + " " + '-' + negativeTransactions[item].amount;
//
//            var newP = document.createElement("p");
//            newP.setAttribute("id",negativeTransactions[item].id)
//            newP.setAttribute("onClick", "deleteItem(this.id)")
//            newP.innerHTML = transHtml;
//            document.querySelector(".minus-items").appendChild(newP);
//
//}}}
//
//function deleteItem(clicked_id){
//
//
//
//    for(item in positiveTransactions){
//        if(clicked_id == positiveTransactions[item].id){
//            total -= parseInt(positiveTransactions[item].amount)
//            delete positiveTransactions[item]
//            var deleteIt = document.getElementById(clicked_id);
//            parentAdd.removeChild(deleteIt)}}
//
//
//    for(item in negativeTransactions){
//        if(clicked_id == negativeTransactions[item].id){
//        total += parseInt(negativeTransactions[item].amount)
//        delete negativeTransactions[item]
//        var deleteIt = document.getElementById(clicked_id);
//        parentMinus.removeChild(deleteIt)}}
//
//    document.querySelector(".amount").textContent = total+"$";
//
//}
//
//function submitControl(){
//
//    id += 1
//    var selector      = document.querySelector('.selector').value;
//    var selectorValue = document.querySelector('.'+selector).textContent;
//    var transaction   = document.querySelector('#deposite').value;
//    var amount        = document.querySelector('#amount').value;
//    var newItem       =  {"id":id,"transaction":transaction,"amount":amount};
//
//
//    if(transaction && amount >= 1){
//        if(selectorValue == "+"){
//        total += parseInt(amount);
//        document.querySelector("#amount").classList.toggle("minus");
//        positiveTransactions.push(newItem);
//
//        updatePositive();
//
//
//    }else{
//        total -= parseInt(amount);
//        document.querySelector("#amount").classList.toggle("minus");
//        negativeTransactions.push(newItem);
//
//        updateNegative();}
//
//    document.querySelector(".amount").textContent = total+"$";
//
//
//
//
//    }else{
//
//        console.log("you need to enter a value")
//
//
//    }
//
//}
//
//document.querySelector("#submit").addEventListener('click',submitControl);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////
//// function Question(question, answer1, answer2, correctAnswer){
////     this.question = question
////     this.answer1 = answer1
////     this.answer2 = answer2
////     this.correctAnswer = correctAnswer
////
//// }
////
////
//// var questions = [
////     new Question("What's the name of your favorite pet?", "simba", "bahr", "simba"),
////     new Question("What's the name of your favorite teacher?", "Nabila", "Ahmed", "Nabila"),
////     new Question("What's the name of your mother?", "Amal", "Nagah", "Amal"),
////         ];
////
//// function checkAnswer(){
////     var successMessage = "You have selected the correctAnswer";
////     var wrongAnswer    = "Please select the correct answer";
////     var pickedQuestion = questions[Math.floor(Math.random() * questions.length)];
////     var getAnswer      = prompt(pickedQuestion.question)
////     var rightAnswer    = pickedQuestion.correctAnswer
////     if(getAnswer == rightAnswer){
////
////         console.log(successMessage);
////         checkAnswer()
////
////
////     }else if(getAnswer == "exit"){
////         console.log("Thanks for playing!")
////
////
////     }else{
////         console.log(wrongAnswer);
////
////         checkAnswer()
////     }
////
//// }
////
////
//// checkAnswer()
////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
///*This is how to use bind even tho we could just pass another parameter E.g anotherPar in resulter
//then we could just add that to the push method as a second parameter
//then just pass in whatever the value is in the var Japan as third parameter */
////var x = [1,2,3,4,5,6]
////
////function resulter(numbers, anotherFunc){
////    var newArray = [];
////    for(var i = 0; i < numbers.length; i++){
////
////        newArray.push(anotherFunc(numbers[i]));
////
////    }
////    return document.write(newArray)
////}
////function added(number, something){
////    return  number + something
////}
////
////var japan = resulter(x, added.bind(this, 10));
//
//
////This code below will change the value of
//// z.name but not of X
////because X is primative but z is OBJ
////var x = 12
////var z = {
////    name:"Hossam",
////    age:12
////}
////
////x =15;
////function h(a,b){
////    a.name = "monmon";
////    b = 30;
////
////}
////h(z, x)
////document.write(x);
//
//
//// function Car(make, year){
////
////     this.make = make
////     this.dob = year
////
//// }
////
//// // Commenly used in JS
//// Car.prototype.both = function (year = 2019) {
////     return year - this.dob
//// };
////
////
//// var x = new Car("Toyota", 1991);
////
//// document.write(x.both())
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//// var mark = {fullname:"Mark lastname",
////             mass: 150,
////             height: 170,
////             bmi: function(){
////               this.result = this.mass/this.height*2;
////             }
//// };
////
//// var john = {fullname:"John lastname",
////             mass: 120,
////             height: 1.50,
////             bmi: function(){
////               return this.mass/(this.height*2);
////             }
//// };
////
////
//// document.write(john.bmi());
//// console.log(john.bmi());
//
//// var names = ["hossam", "laila", "monmon", "adam"];
////
//// for (i = 0; i < names.length; i += 1 ){
////   document.write(names[i]+" ");
////
////
////
////
//// }
//
//// var john = [124, 48, 268, 180, 42];
////
//// function tipCalculator(){
////   var dict = {
////     tips: [],
////     total : [],
////
////   }
////
////
////   for(i = 0; i < john.length-1; i++){
////     if(john[i] < 50){
////       dict.tips[i] = john[i]*.2;
////       dict.total[i] = john[i] + dict.tips[i];
////     }else if(john[i] > 50 && john[i] < 200){
////       dict.tips[i] = john[i]*.15;
////       dict.total[i] = john[i] + dict.tips[i];
////     }else{
////       dict.tips[i] = john[i]*.1;
////       dict.total[i] = john[i] + dict.tips[i];
////       }}
////
//// return dict;
////
////
//// }
////
////
////
//// document.write(tipCalculator().tips, tipCalculator().total);
//
//// var fruits = {
////   apple: 28,
////   orange: 17,
////   pear: 54,
//// }
////
////
//// var entries = Object.entries(fruits)
//// var values = Object.values(fruits)
////
//// for (var [fruit, count] of entries) {
////   document.write(`There are ${count} ${fruit}s`)
//// }
//
//
//// const something = {
////     age:15,
////     dob: 1991,
////
////
//// }
//// const yeah = Object.entries(something)
//// document.write(yeah);
//
//// We will make a variable that will generate a random number
//// we will get the value of that variable when
//
////
//// var total, totalOne, totalTwo;
////
//// totalOne= 0;
//// totalTwo= 0;
//// currentPlayer = 1;
////
//
////
//// function button() {
////     var randomit = Math.floor(Math.random() * 6 + 1);
////     document.querySelector("#currentroll-"+currentPlayer).textContent = randomit;
////
////     if (currentPlayer === 1 ){
////         if(randomit !== 1){totalOne+= randomit;
////         document.querySelector("#total-1").textContent = totalOne;
////         }else{
////             currentPlayer = 2
////     }}else{
////         if(randomit !== 1){totalTwo+= randomit;
////         document.querySelector("#total-2").textContent = totalTwo;
////         }else{
////             currentPlayer = 1
////         }}
////
////
////     if (totalOne >= 20 && totalOne > totalTwo){
////         document.querySelector("#result").textContent = "Player One Won";
////     }else{
////         if (totalTwo >= 20 && totalTwo > totalOne){
////         document.querySelector("#result").textContent = "Player Two Won";
////         }}}
////
////
//// document.querySelector("#rolled").addEventListener('click',button );
//
//
////
//// function Family(brothers, sisters, fatherName, motherName){
////
////     this.brothers = brothers;
////     this.sisters = sisters;
////     this.fatherName = fatherName;
////     this.motherName = motherName;
////     // this.total = totalSiblings
////
//// }
////
////
//// function totalSiblings(){
////     var x = this.brothers;
////     x = 10;
////     return x
////
////
//// }
////
////
//// Family.prototype.something = 5;
//// var hossam = new Family(2,1,"omar","amal");
////
////
//// document.write(hossam.brothers);
////
////
//
//// function School(name){
////
////     if(name === "tabary"){
////         return function (area){
////             document.write("Madrasty kanet " + name + ' ' +  area);}
////
////
////     }
////
////
////
////
//// }
////
//// School("tabary")("Roxy");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////

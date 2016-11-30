Array.prototype.toTwenty = function(){
 var answer=[];
   
   for (var i=1; i<=20; i++){
     answer.push(i)
   }
   return answer;
}


Array.prototype.toForty = function(){
  var answer=[];
   
   for (var i=2; i<=40; i=i+2){
     answer.push(i)
   }

   return answer;
}

Array.prototype.toOneThousand = function(){
 var answer=[];
   
   for (var i=10; i<=1000; i=i+10){
     answer.push(i)
   }

   return answer;
}

Array.prototype.search = function(d){
 var minIndex = 0;
   var maxIndex = this.length - 1;
   var currentElement;
   var count=0;

   while(minIndex <= maxIndex) {
       currentElement = Math.floor((maxIndex + minIndex) / 2);

       if (this[currentElement] === d) {
           return {index:currentElement, count:count};
       }
       else if (this[currentElement] < d) {
           minIndex = currentElement + 1;
           count=0;
       }
       else if (this[currentElement] > d) {
           minIndex = currentElement - 1;
           count+=0;
       }
       else {
           maxIndex = currentElement - 1;
           count+=1;
       }
       
     

   }
return {index:-1, count:count, length:this.length};
   
}
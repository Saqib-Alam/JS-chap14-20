// ---------Arrays--------

// ques1
// var studentName=[];


// ques2
// var studentName= new studentName();

// ques3
// var studentName=["Saqib","Hamza","Areeb","Usama"];

// ques4
// var Roll_no=["347","876","908"];

// ques5
// var con=[true,false];

// ques6
// var array=["Saqib",22,"Ahmad",20,"Taha",18];

// ques7
// var quali=["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PHD"];

// document.write("<h1>Qualifications</h1><br>")
// for(var i=0;i<quali.length;i++){
//     document.write((i+1)+") " + quali[i]+"<br>")
// }

// ques8
// var stdNames=["Usama","Hamza","Areeb"];
// var stdScores=[420,390,400];

// for(var i=0;i<stdNames.length;i++){
//     document.write("Score of "+stdNames[i]+" is "+stdScores[i]+". Percentage : "+(stdScores[i]/500)*100+"%<br>")
// }


// ques9
// var colors=["Blue","Green","Red","Yellow","Purple"];
// document.write(colors);

// var usrColor=prompt("What color do you wanna add at the start");
// colors.unshift(usrColor)
// document.write("<br>"+colors)

// var usrColor=prompt("What color do you wanna add at the end");
// colors.push(usrColor);
// document.write("<br>"+colors);

// colors.unshift("Cyan","Orange");
// document.write("<br>"+colors);

// colors.shift();
// document.write("<br>"+colors);

// colors.pop();
// document.write("<br>"+colors);

// var usrIndex=+prompt("At what index do you wanna add the color");
// var usrColor=prompt("What color do you wanna add at the desired index");
// colors.splice(usrIndex,0,usrColor);
// document.write("<br>"+colors);

// var usrIndex=+prompt("At what index do you wanna delete the colors");
// var delColor=+prompt("How many colors do you wanna delete");
// colors.splice(usrIndex,delColor);
// document.write("<br>"+colors);

// ques10

// var stdScore=[320,230,480,120]
// document.write("Score of Students : "+stdScore)
// var temp;

// for(var i=0;i<stdScore.length;i++){
//     for(var j=i+1;j<stdScore.length;j++){

//     if(stdScore[i]>stdScore[j]){
//         temp=stdScore[i];
//         stdScore[i]=stdScore[j];
//         stdScore[j]=temp;
//     }
//     }
// }

// document.write("</br>Ordered Score of Students : "+stdScore);


// ques11

// var cities=["Karachi","Faislabad","Hyderabad","Islamabad","Lahore"];
// document.write("Cities List  : "+cities);
// document.write("</br>Selected Cities List  : "+cities.slice(2,4));


// ques12


// var arr=["This","is","my","cat."];
// document.write("Array : "+arr+"</br>");

// document.write("String : "+arr.join(" "));


// ques13


// var arr=["keyboard","mouse","printer","monitor"];
// document.write(arr);
// for(var i=0;i<arr.length;i++){
// document.write("</br>"+arr[i])
// }


// ques14

// var arr=["keyboard","mouse","printer","monitor"];
// document.write(arr);
// for(var i=arr.length-1;i>=0;i--){
// document.write("</br>"+arr[i])
// }

// ques15

// var Phones=["Apple","Samsung","Motorola","Nokia","Sony","Sony","Haier"];

// for(var i=0;i<Phones.length;i++){
// document.write("</br>"+Phones[i])}


// -------------Arrays and Loop------------

// ques1
// var arr=[[2,3,4],[4,5,6],[7,8,9]];


// ques2
// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];


// ques3
// for (var i=1;i<=10;i++){
//     document.write("</br>"+i);
// }

// ques4
// var tableNum=+prompt("Enter any number to show it's multiplication table")
// var tableLen=+prompt("Enter the length how long long you want multiplication table")

// document.write("<h3>Multiplication Table of "+tableNum+"</br> length "+tableLen+"</br>")

// for(var i=1;i<=tableLen;i++){

//     document.write("</br> "+tableNum+" x "+i+" = "+ tableNum*i)
// }

// ques5
// var fruits = ["apple","banana", "mango","orange", "strawberry"];

// for(var i=0;i<fruits.length;i++){

//     document.write("</br>"+fruits[i])
// }


// for(var i=0;i<fruits.length;i++){

//     document.write("</br> Element at index "+ i +" is "+fruits[i])
// }


// ques6
// document.write("<h3>Counting</h3>")
// for (var i=1;i<=15;i++){
//         document.write(i+",")
//     }
    
// document.write("</br></br><h3>Reverse counting</h3>")
// for (var j=10 ; j>=1 ; j--){
//         document.write(j+",")
//     }
    
// document.write("</br></br><h3>Even</h3>")
// for (var i=1;i<=20;i++){
//            if(i%2==0){
//                document.write(i+",")
//            }
//       }


// document.write("</br></br><h3>Odd</h3>")
// for (var i=1;i<=20;i++){
//            if(i%2!=0){
//                document.write(i+",")
//            }
//       }


// document.write("</br></br><h3>Series</h3>")
// for (var i=1;i<=20;i++){
//            if(i%2==0){
//                document.write(i+"k,")
//            }
//       }


// ques7

// var  items= ["cake", "pie", "cookie", "chips", "patties"]

// var search=prompt("Welcome to ABC Bakers, What do you want to search");

// var flag="no";

// for(var i=0; i<items.length;i++){
//     if(items[i]==search){
      
//         alert(search+" is vailable at index "+i+ " in our bakery");
//         flag="yes";
//     } 
// } 

// if(flag=="no") {
//     alert("We are sorry, "+search+" is not vailable in our bakery");
// }

// ques8
// var arr=[24,53,78,91,12]
// document.write("Array items : "+arr)
// var temp;

// for(var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){

//     if(arr[i]>arr[j]){
//         temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
//     }
// }

// document.write("</br>The largest number is : "+arr[arr.length-1]);

// ques9
// var arr=[24,53,78,91,12]
// document.write("Array items : "+arr)
// var temp;

// for(var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){

//     if(arr[i]>arr[j]){
//         temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
//     }
// }

// document.write("</br>The Smallest number is : "+arr[0]);


// ques10
// document.write("<h3>Multiples of 5</h3></br>")
// for(var i=1;i<=100;i++){
//     if(i%5==0)(
//         document.write(i+" ,")
//     )
// }
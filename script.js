 //console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument) ;
// علشان اعمل اي نوع من انواع اتفاعل في الموقع في جزء الزرار ازم اعمل هذة الفانكشن واستعدعي الا iD
function sayHello() {
 // console.log(
  var name=
    document.getElementById("name").value;//غلشان اما اكتب اي كلة تجع لي في ال
    var message ="<h2>Hello "+ name +" !</h2>";
   // document.getElementById("contant")
    //.textContent=message;
    document
     .getElementById("contant")
     .innerHTML=message;
    if(name === "student"){
     var title=
       document
         .querySelector("#title")
         .textContent;
      title +="adham"
      document
         .querySelector("#title")
          .textContent=title;
    }
}
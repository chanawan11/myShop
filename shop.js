function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          myFunction(this);
      }
  };
  xmlhttp.open("GET", "product.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var id, name, description, price, quantity, i, xmlDoc, txt1, txt2, txt3, txt4, txt5;
  xmlDoc = xml.responseXML;
  txt1 = "";
  txt2 = "";
  txt3 = "";
  txt4 = "";
  txt5 = "";

  id = xmlDoc.getElementsByTagName("id");
  name = xmlDoc.getElementsByTagName("name");
  description = xmlDoc.getElementsByTagName("description");
  price = xmlDoc.getElementsByTagName("price");
  quantity = xmlDoc.getElementsByTagName("quantity");

  for (i = 0; i < id.length; i++) {
      txt1 += id[i].childNodes[0].nodeValue + "<br>";
      txt2 += name[i].childNodes[0].nodeValue + "<br>";
      txt3 += description[i].childNodes[0].nodeValue + "<br>";
      txt4 += price[i].childNodes[0].nodeValue + "<br>";
      txt5 += quantity[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo1").innerHTML = txt1;
  document.getElementById("demo2").innerHTML = txt2;
  document.getElementById("demo3").innerHTML = txt3;
  document.getElementById("demo4").innerHTML = txt4;
  document.getElementById("demo5").innerHTML = txt5;
}

function loadXMLDoc1() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          myFunction1(this);
      }
  };
  xmlhttp.open("GET", "customer.xml", true);
  xmlhttp.send();
}

function myFunction1(xml) {
  var firstname, lastname, gender, phone, memberid, i, xmlDoc, txt1, txt2, txt3, txt4;
  xmlDoc = xml.responseXML;
  txt1 = "";
  txt2 = "";
  txt3 = "";
  txt4 = "";
  txt5 = "";

  firstname = xmlDoc.getElementsByTagName("firstname");
  lastname = xmlDoc.getElementsByTagName("lastname");
  gender = xmlDoc.getElementsByTagName("gender");
  phone = xmlDoc.getElementsByTagName("phone");
  memberid = xmlDoc.getElementsByTagName("memberid");

  for (i = 0; i < firstname.length; i++) {
      txt1 += firstname[i].childNodes[0].nodeValue + "<br>";
      txt2 += lastname[i].childNodes[0].nodeValue + "<br>";
      txt3 += gender[i].childNodes[0].nodeValue + "<br>";
      txt4 += phone[i].childNodes[0].nodeValue + "<br>";
      txt5 += memberid[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("po1").innerHTML = txt1;
  document.getElementById("po2").innerHTML = txt2;
  document.getElementById("po3").innerHTML = txt3;
  document.getElementById("po4").innerHTML = txt4;
  document.getElementById("po5").innerHTML = txt5;
}

function loadXMLDoc2() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          myFunction2(this);
      }
  };
  xmlhttp.open("GET", "order.xml", true);
  xmlhttp.send();
}

function myFunction2(xml) {
  var orderid, details, total, paid, change, i, xmlDoc, txt1, txt2, txt3, txt4, txt5;
  xmlDoc = xml.responseXML;
  txt1 = "";
  txt2 = "";
  txt3 = "";
  txt4 = "";
  txt5 = "";

  orderid = xmlDoc.getElementsByTagName("orderid");
  details = xmlDoc.getElementsByTagName("details");
  total = xmlDoc.getElementsByTagName("total");
  paid = xmlDoc.getElementsByTagName("paid");
  change = xmlDoc.getElementsByTagName("change");

  for (i = 0; i < orderid.length; i++) {
      txt1 += orderid[i].childNodes[0].nodeValue + "<br>";
      txt2 += details[i].childNodes[0].nodeValue + "<br>";
      txt3 += total[i].childNodes[0].nodeValue + "<br>";
      txt4 += paid[i].childNodes[0].nodeValue + "<br>";
      txt5 += change[i].childNodes[0].nodeValue + "<br>";
  }

  document.getElementById("em1").innerHTML = txt1;
  document.getElementById("em2").innerHTML = txt2;
  document.getElementById("em3").innerHTML = txt3;
  document.getElementById("em4").innerHTML = txt4;
  document.getElementById("em5").innerHTML = txt5;
}

function loadXMLDoc3() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          myFunction3(this);
      }
  };
  xmlhttp.open("GET", "shipping.xml", true);
  xmlhttp.send();
}

function myFunction3(xml) {
  var shipid, type, company, sender, province, i, xmlDoc, txt1, txt2, txt3, txt4, txt5;
  xmlDoc = xml.responseXML;
  txt1 = "";
  txt2 = "";
  txt3 = "";
  txt4 = "";
  txt5 = "";

  shipid = xmlDoc.getElementsByTagName("shipid");
  type = xmlDoc.getElementsByTagName("type");
  company = xmlDoc.getElementsByTagName("company");
  sender = xmlDoc.getElementsByTagName("sender");
  province = xmlDoc.getElementsByTagName("province");

  for (i = 0; i < shipid.length; i++) {
      txt1 += shipid[i].childNodes[0].nodeValue + "<br>";
      txt2 += type[i].childNodes[0].nodeValue + "<br>";
      txt3 += company[i].childNodes[0].nodeValue + "<br>";
      txt4 += sender[i].childNodes[0].nodeValue + "<br>";
      txt5 += province[i].childNodes[0].nodeValue + "<br>";
  }

  document.getElementById("e1").innerHTML = txt1;
  document.getElementById("e2").innerHTML = txt2;
  document.getElementById("e3").innerHTML = txt3;
  document.getElementById("e4").innerHTML = txt4;
  document.getElementById("e5").innerHTML = txt5;
}
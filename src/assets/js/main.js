var datumH4 = document.getElementById('datum');
var vremeH4 = document.getElementById('vreme');
var tBody = document.getElementsByTagName('tbody')[0];
var allAutomobiliBtn = document.getElementById('allAutomobili');
var dodajAutomobilBtn = document.getElementById('dodajAutomobilBtn');
var mainRow = document.getElementById('mainRow');
var id_i = document.getElementById('id_i');
var autoZaPromene;
var ime_i = document.getElementById('ime_i');
var model_i = document.getElementById('model_i');
var info_i = document.getElementById('info_i');
var slika_i = document.getElementById('slika_i');
var sub_i = document.getElementById('sub_i');
var editBtn = document.getElementById('editBtn');
var promeni_i = document.getElementById('promeni_i');
promeni_i.addEventListener('click', editDb);
sub_i.addEventListener('click', dodajUDb);
editBtn.addEventListener('click', novaTabela);
allAutomobiliBtn.addEventListener('click',prikaziAutomobile);
dodajAutomobilBtn.addEventListener('click', prikaziFormu);
//var formRow = document.getElementById('formRow');
var text = "";
var db = [
  {
    id : 1,
    ime : "BMW",
    model : "Model1",
    info : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nostrum suscipit tenetur ad officia recusandae necessitatibus esse magnam dolore corporis voluptas placeat magni autem soluta nihil eligendi illo ipsam nisi iusto exercitationem, quod, aliquam id nobis! Sit voluptas vel et, numquam. Itaque ipsa necessitatibus magni optio odio ad temporibus, minus!",
  slika :"img/3.jpg"
},
   {
    id : 2,
    ime : "Dacia",
     model : "Model2",
     info : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nostrum suscipit tenetur ad officia recusandae necessitatibus esse magnam dolore corporis voluptas placeat magni autem soluta nihil eligendi illo ipsam nisi iusto exercitationem, quod, aliquam id nobis! Sit voluptas vel et, numquam. Itaque ipsa necessitatibus magni optio odio ad temporibus, minus!",

slika :"img/2.jpg"
}
];
prikaziAutomobile();
prikaziDatumIVreme();


function prikaziDatumIVreme(){
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var date =  now.toDateString();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  var time = h + ":"+m+":"+s;
  vremeH4.innerHTML = time;
  datumH4.innerHTML = date;

  setTimeout(prikaziDatumIVreme,1000);
}
function prikaziAutomobile() {
  mainRow.style.display = "block";
  formRow.style.display = "none";
  text = "";
  for(var i=0; i < db.length;i++){
    text += '<tr><td>'+db[i].id+'</td><td>'+db[i].ime +'</td><td>'+db[i].model+'</td><td>'+db[i].info +'</td><td><img src='+db[i].slika +' /></td></tr>';
  }
  tBody.innerHTML = text;
}
function prikaziFormu() {
  id_i.value = "";
  ime_i.value = "";
  model_i.value ="";
  info_i.value = "";
  slika_i.value = "";
  sub_i.style.display = "block";
  promeni_i.style.display = "none";
  mainRow.style.display = "none";
  formRow.style.display = "block";
}
function dodajUDb() {
     var obj = {
       id : id_i.value,
       ime : ime_i.value,
       model : model_i.value,
       info : info_i.value,
       slika : slika_i.value


     }
     db.push(obj);
     id_i.value = "";
     ime_i.value = "";
     model_i.value ="";
     info_i.value = "";
     slika_i.value = "";
     prikaziAutomobile();


}

function novaTabela() {
  mainRow.style.display = "block";
  formRow.style.display = "none";
  text = "";
  for(var i=0; i < db.length;i++){
    text += '<tr><td>'+db[i].id+'</td><td>'+db[i].ime +'</td><td>'+db[i].model+'</td><td>'+db[i].info
    +'</td><td><img src='+db[i].slika +'></td> <td><input type="button" value="Promeni" class="'+i+' tableBtns btn btn-sm btn-warning" /></td><td><input type="button" value="Obrisi" class="'+i+' tableBtns btn btn-sm btn-danger" /></td></tr>';
}
tBody.innerHTML = text;
var allBtns = document.getElementsByClassName('tableBtns');

for (var i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener('click',editujAutmobil);


}

}

function editujAutmobil() {
 if(this.value === "Obrisi"){

var autoZaBrisanje = this.className[0];
console.log(autoZaBrisanje);
db.splice(autoZaBrisanje,1);
//splice -> (1,1) --> 1 znaci koje mesto u nizu , i samo jednu posziciju odatle
prikaziAutomobile();
 }
 else {
  prikaziFormu();
  sub_i.style.display = "none";
  promeni_i.style.display = "block";
  autoZaPromene = this.className[0];

  id_i.value = db[autoZaPromene].id;
  ime_i.value = db[autoZaPromene].ime;
  model_i.value =db[autoZaPromene].model;
  info_i.value = db[autoZaPromene].info;
  slika_i.value = db[autoZaPromene].slika;
 }
}

function editDb() {
  var obj = {
    id : id_i.value,
    ime : ime_i.value,
    model : model_i.value,
    info : info_i.value,
    slika : slika_i.value


  }
  db[autoZaPromene] = obj;
  prikaziAutomobile();
}

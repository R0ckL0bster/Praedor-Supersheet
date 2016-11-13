//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<AcroForm>
//<ACRO_source>Add-pages:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Add-pages:Annot1:MouseUp:Action1 ***********/
var vasenSivu = this.getTemplate("Muistiinpanot-Vasen");
var oikeaSivu = this.getTemplate("Muistiinpanot-Oikea");
var totalPages = Number(this.numPages);
vasenSivu.spawn();
oikeaSivu.spawn();
event.target.display = display.hidden;
this.getField("P"+(totalPages-1)+".Muistiinpanot-Oikea.Remove-pages").display = display.hidden;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hahmon kuva:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hahmon kuva:Annot1:MouseUp:Action1 ***********/
event.target.
buttonImportIcon();
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Kantokyky:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Kantokyky:Calculate ***********/
var myVoima = this.getField("Voima").value;
var numKantokyky = myVoima * 25;
if (numKantokyky == 0) {
    event.value = "";
} else {
    event.value = numKantokyky;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>More-pages:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:More-pages:Annot1:MouseUp:Action1 ***********/
var vasenSivu = this.getTemplate("Muistiinpanot-Vasen");
var oikeaSivu = this.getTemplate("Muistiinpanot-Oikea");
vasenSivu.spawn();
oikeaSivu.spawn();
event.target.display = display.hidden;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Osumahahmo-Mies:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Osumahahmo-Mies:Annot1:MouseUp:Action1 ***********/
this.getField("Osumahahmo-Mies").display = display.hidden;
this.getField("Osumahahmo-Nainen").display = display.visible;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Osumahahmo-Nainen:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Osumahahmo-Nainen:Annot1:MouseUp:Action1 ***********/
this.getField("Osumahahmo-Nainen").display = display.hidden;
this.getField("Osumahahmo-Mies").display = display.visible;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Paino-Aseet-Kilvet:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Paino-Aseet-Kilvet:Calculate ***********/
var myAseistuspaino = Number(this.getField("Aseistus-Paino 1").value)+Number(this.getField("Aseistus-Paino 2").value)+Number(this.getField("Aseistus-Paino 3").value)+Number(this.getField("Aseistus-Paino 4").value)+Number(this.getField("Aseistus-Paino 5").value)+Number(this.getField("Aseistus-Paino 6").value)+Number(this.getField("Aseistus-Paino 7").value)+Number(this.getField("Aseistus-Paino 8").value)+Number(this.getField("Kilpi-Paino").value);
if (myAseistuspaino == 0) {
    event.value = "";
} else {
    event.value = myAseistuspaino;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Paino-Haarniskat:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Paino-Haarniskat:Calculate ***********/
var myHaarniskointipaino = Number(this.getField("Haarniskointi-Paino 1").value)+Number(this.getField("Haarniskointi-Paino 2").value)+Number(this.getField("Haarniskointi-Paino 3").value)+Number(this.getField("Haarniskointi-Paino 4").value)+Number(this.getField("Haarniskointi-Paino 5").value)+Number(this.getField("Haarniskointi-Paino 6").value)+Number(this.getField("Haarniskointi-Paino 7").value)+Number(this.getField("Haarniskointi-Paino 8").value)+Number(this.getField("Haarniskointi-Paino 9").value)+Number(this.getField("Haarniskointi-Paino 10").value)+Number(this.getField("Haarniskointi-Paino 11").value)+Number(this.getField("Haarniskointi-Paino 12").value)+Number(this.getField("Haarniskointi-Paino 13").value)+Number(this.getField("Haarniskointi-Paino 14").value);
if (myHaarniskointipaino == 0) {
    event.value = "";
} else {
    event.value = myHaarniskointipaino;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Paino-Kaikki:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Paino-Kaikki:Calculate ***********/
var myPainoyht = Number(this.getField("Paino-Aseet-Kilvet").value)+Number(this.getField("Paino-Haarniskat").value)+Number(this.getField("Paino-Varustus").value);

if (myPainoyht == 0) {
    event.value = "";
} else {
    event.value = myPainoyht;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Paino-Varustus:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Paino-Varustus:Calculate ***********/
var myVarustuspaino = Number(this.getField("Varustus-Paino 1").value)+Number(this.getField("Varustus-Paino 2").value)+Number(this.getField("Varustus-Paino 3").value)+Number(this.getField("Varustus-Paino 4").value)+Number(this.getField("Varustus-Paino 5").value)+Number(this.getField("Varustus-Paino 6").value)+Number(this.getField("Varustus-Paino 7").value)+Number(this.getField("Varustus-Paino 8").value)+Number(this.getField("Varustus-Paino 9").value)+Number(this.getField("Varustus-Paino 10").value)+Number(this.getField("Varustus-Paino 11").value)+Number(this.getField("Varustus-Paino 12").value)+Number(this.getField("Varustus-Paino 13").value)+Number(this.getField("Varustus-Paino 14").value);
if (myVarustuspaino == 0) {
    event.value = "";
} else {
    event.value = myVarustuspaino;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Paino-Väistöön:Format</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Paino-Väistöön:Format ***********/
if (event.value>0){
	var cr ="+"
} else {
	var cr=""
}
AFNumber_Format(0,0,0,0,cr,true);

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Paino-Väistöön:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Paino-Väistöön:Calculate ***********/
var myPainoyht = Number(this.getField("Paino-Aseet-Kilvet").value)+Number(this.getField("Paino-Haarniskat").value)+Number(this.getField("Paino-Varustus").value);
var myVaikeus = 0;
if (myPainoyht == 0) {
    event.value = "";
} else {
	myVaikeus = Math.floor(myPainoyht/100);
    event.value = myVaikeus;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Poista hahmon kuva:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Poista hahmon kuva:Annot1:MouseUp:Action1 ***********/
this.addIcon("nullIcon", this.createIcon("", 0, 0));
var g = this.getField("Hahmon kuva");
g.buttonSetIcon(this.getIcon("nullIcon") );
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Remove-pages:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Remove-pages:Annot1:MouseUp:Action1 ***********/
var totalPages = Number(this.numPages);
var pageFieldnum = (totalPages-1);

/* Näytä ensimmäinen sivunlisäysnappi jos ollaan poistamassa viimeisiä ekstrasivuja */
if (totalPages == 6) {
	this.getField("More-pages").display = display.noPrint;
}

/* Palautetaan edellisten sivujen napit näkyviksi */
/* Pn.Muistiinpanot-Oikea.Add-pages */
/* Pn.Muistiinpanot-Oikea.Remove-pages */
if (totalPages > 6) {
	/* app.alert("P"+(pageFieldnum-2)+".Muistiinpanot-Oikea.Add-pages", 2, 0); */
	
	this.getField("P"+(pageFieldnum-2)+".Muistiinpanot-Oikea.Remove-pages").display = display.noPrint;
	this.getField("P"+(pageFieldnum-2)+".Muistiinpanot-Oikea.Add-pages").display = display.noPrint;
}

this.deletePages((totalPages-2), (totalPages-1));

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Syvä haava:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Syvä haava:Calculate ***********/
var myEdut = this.getField("Edut").value;
var myHaitat = this.getField("Haitat").value;
var myVoima = this.getField("Voima").value;
var myTerveys = this.getField("Terveys").value;
var myVoiTer = myVoima + myTerveys;
var numSyh = 0;
if (myVoiTer >= 1 && myVoiTer <= 10) {numSyh=5;}
if (myVoiTer >= 11 && myVoiTer <= 17) {numSyh=6;}
if (myVoiTer >= 18 && myVoiTer <= 24) {numSyh=7;}
if (myVoiTer >= 25 && myVoiTer <= 31) {numSyh=8;}
if (myVoiTer >= 32 && myVoiTer <= 38) {numSyh=9;}
if (myVoiTer >= 39 && myVoiTer <= 40) {numSyh=10;}
if (myHaitat.search(/[Hh]entoluinen/g)) {numSyh += 1};
if (myEdut.search(/[Kk]ookas/g)) {numSyh -= 1};
if (numSyh == 0) {
   event.value = ""; 
} else {
    event.value = numSyh;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Taakkahaitta:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Taakkahaitta:Calculate ***********/
var myPaino = Number(this.getField("Paino-Kaikki").value);
var myKantokyky = Number(this.getField("Kantokyky").value);
var myTaakkahaitta = "";

if (myPaino >= myKantokyky && myPaino <= (myKantokyky*2)) {
	myTaakkahaitta = "+1";
}
if (myPaino >= (myKantokyky*2) && myPaino <= (myKantokyky*3)) {
	myTaakkahaitta = "+2";
}

if (myPaino >= (myKantokyky*3)) {
	myTaakkahaitta = "XXX";
}

if (myTaakkahaitta == "" || myPaino == 0) {
	event.value = "---";
} else {
	event.value = myTaakkahaitta;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Tyhjennä lomake:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Tyhjennä lomake:Annot1:MouseUp:Action2 ***********/
/* Tyhjennä hahmon kuvalaatikko */
this.addIcon("nullIcon", this.createIcon("", 0, 0));
var f = this.getField("Hahmon kuva");
f.buttonSetIcon(this.getIcon("nullIcon") );

/* Poista kaikki ylimääräiset sivut */
var totalPages = Number(this.numPages);
this.deletePages(4, (totalPages-1));

/* Palauta Lisää sivuja -nappi alkuperäiseen tilaansa */
this.getField("More-pages").display = display.noPrint;

/* Tyhjennä Haavat-laatikot */
for (var numL=1; numL<=20; numL++) {
	this.getField("Haavat-Naarmuilla-"+numL).fillColor=color.transparent;
	this.getField("Haavat-Haavoittunut-"+numL).fillColor=color.transparent;
	this.getField("Haavat-PaHa-"+numL).fillColor=color.transparent;
	this.getField("Haavat-Shokissa-"+numL).fillColor=color.transparent;
	this.getField("Haavat-Naarmuilla-"+numL).readonly = false;
	this.getField("Haavat-Haavoittunut-"+numL).readonly = false;
	this.getField("Haavat-PaHa-"+numL).readonly = false;
	this.getField("Haavat-Shokissa-"+numL).readonly = false;
}

this.calculateNow();

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Vauriobonus:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Vauriobonus:Calculate ***********/
var myVoima = this.getField("Voima").value;
var numVauriobonus = "";
if (isFinite(myVoima)) {
	if (myVoima >= 1 && myVoima <= 5) {numVauriobonus="-2";}
	if (myVoima >= 6 && myVoima <= 9) {numVauriobonus="-1";}
	if (myVoima >= 10 && myVoima <= 13) {numVauriobonus="0";}
	if (myVoima >= 14 && myVoima <= 17) {numVauriobonus="+1";}
	if (myVoima >= 18 && myVoima <= 19) {numVauriobonus="+2";}
	if (myVoima == 20) {numVauriobonus="+3";}
    event.value = numVauriobonus;
} else {
	event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Veri:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Veri:Calculate ***********/
var myVeri = Number(this.getField("Veri").value);
var myEdut = this.getField("Edut").value;
var myTerveys = Number(this.getField("Terveys").value);
var locSitkeys = myEdut.search(/[Ss]itkeä\s*\(?(\d+)\)?/g);
var strSitkeys = myEdut.substr(locSitkeys, 10);
var numSitkeys = Number(strSitkeys.match(/\d+/));
var numVeri = 0;
if (myTerveys >= 1 && myTerveys <= 4) {numVeri=7;}
if (myTerveys >= 5 && myTerveys <= 6) {numVeri=8;}
if (myTerveys >= 7 && myTerveys <= 8) {numVeri=9;}
if (myTerveys >= 9 && myTerveys <= 10) {numVeri=10;}
if (myTerveys >= 11 && myTerveys <= 12) {numVeri=11;}
if (myTerveys >= 13 && myTerveys <= 14) {numVeri=12;}
if (myTerveys >= 15 && myTerveys <= 16) {numVeri=13;}
if (myTerveys >= 17 && myTerveys <= 18) {numVeri=14;}
if (myTerveys >= 19 && myTerveys <= 20) {numVeri=15;}

if (numVeri == 0) {
  var numFinal = "";
} else {
  var numFinal = numVeri+numSitkeys;
}

event.value = numFinal;

if (numFinal == "") {
	numFinal = 0;
}

/* Tarkista onko Veri-arvo muuttunut ja jos on niin */
/* looppaa haavataulukko läpi ja merkkaa veren mukaan mustaksi */
if (myVeri != numFinal || numFinal == 0) {

	if (numFinal == 0) {
		numFinal = 20;	
	}

	for (var numL=8; numL<=20; numL++) {
		if (numL <= numFinal) {
			this.getField("Haavat-Naarmuilla-"+numL).fillColor=color.transparent;
			this.getField("Haavat-Haavoittunut-"+numL).fillColor=color.transparent;
			this.getField("Haavat-PaHa-"+numL).fillColor=color.transparent;
			this.getField("Haavat-Shokissa-"+numL).fillColor=color.transparent;
			this.getField("Haavat-Naarmuilla-"+numL).readonly = false;
			this.getField("Haavat-Haavoittunut-"+numL).readonly = false;
			this.getField("Haavat-PaHa-"+numL).readonly = false;
			this.getField("Haavat-Shokissa-"+numL).readonly = false;
		} else {
			this.getField("Haavat-Naarmuilla-"+numL).fillColor=color.black;
			this.getField("Haavat-Haavoittunut-"+numL).fillColor=color.black;
			this.getField("Haavat-PaHa-"+numL).fillColor=color.black;
			this.getField("Haavat-Shokissa-"+numL).fillColor=color.black;
			this.getField("Haavat-Naarmuilla-"+numL).readonly = true;
			this.getField("Haavat-Haavoittunut-"+numL).readonly = true;
			this.getField("Haavat-PaHa-"+numL).readonly = true;
			this.getField("Haavat-Shokissa-"+numL).readonly = true;
		}
	}
}

//</ACRO_script>
//</AcroForm>

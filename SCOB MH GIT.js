[].forEach.call(document.querySelectorAll('[href^="/match/"]'), function(elem) {
    elem.setAttribute('href', elem.getAttribute('href').replace('match', 'match_history'));
	elem.setAttribute('target', "_blank");
});

[].forEach.call(document.querySelectorAll('.main.analysisMain'), function(elem) {
    elem.style.backgroundColor = "#a7aeb3";
    elem.style.backgroundImage= "none";	
    elem.style.paddingTop = "0";
});

[].forEach.call(document.querySelectorAll('.iamNotAdItem'), function(elem) {
   elem.remove();
});

[].forEach.call(document.querySelectorAll('.analysisH1'), function(elem) {
   elem.parentNode.parentNode.remove();
});

[].forEach.call(document.querySelectorAll('.analysisNav'), function(elem) {
	var rutaurl = location.pathname;
    var rutaurldividida = rutaurl.split("/");

if (rutaurldividida[1] == "match") {
    
    location.assign("//www.scorebing.com/match_history/"+rutaurldividida[2]);
}

if (rutaurldividida[1] == "match_live") {
    elem.remove();
}

if (rutaurldividida[1] == "match_history") {
    elem.remove();
    document.querySelector('footer.main-footer').remove();
}	

});

[].forEach.call(document.querySelectorAll('#topBar'), function(elem) {
	var rutaurl = location.pathname;
    var rutaurldividida = rutaurl.split("/");

if (rutaurldividida[1] == "match_live") {
    elem.remove();
}

});

[].forEach.call(document.querySelectorAll('.jet-color'), function(elem) {
   elem.parentNode.remove();
});

var buscarelemdata = document.getElementById('live-filter-bar').querySelector('.small-6');
var botonejecutar  = document.createElement("BUTTON");buscarelemdata.appendChild(botonejecutar);
botonejecutar.outerHTML = '<button class="botoneje" onclick="scobMH()" style="background-color:#1a5d73; width:200px; border-radius:3px;">Ejecutar</button>';


function scobMH() {

var colortd = "#dee1e4";

[].forEach.call(document.querySelectorAll('#history1 tbody tr, #history2 tbody tr'), function(elem) {

var ob_ptc = elem.childNodes[9].firstChild.nodeValue;
var nv_ptcl = parseInt(ob_ptc.slice(0,ob_ptc.indexOf("：")));
var nv_ptcv = parseInt(ob_ptc.slice(ob_ptc.indexOf("：")+1));

var ob_rfc = elem.childNodes[10].firstChild.nodeValue;
var nv_rfcl = parseInt(ob_rfc.slice(0,ob_rfc.indexOf("：")));
var nv_rfcv = parseInt(ob_rfc.slice(ob_rfc.indexOf("：")+1));

var nv_stcl = parseInt(nv_rfcl) - parseInt(nv_ptcl);
var nv_stcv = parseInt(nv_rfcv) - parseInt(nv_ptcv);

var stcor = nv_stcl + "：" + nv_stcv;

var nodotdcor = elem.querySelectorAll('.blueCell');
var nodoclonado = nodotdcor[0].cloneNode();

nodoclonado.innerText = stcor;

elem.insertBefore(nodoclonado, nodotdcor[1]);

});

[].forEach.call(document.getElementsByClassName('panel-l'), function(elem) {
   elem.style.backgroundColor = colortd;
   elem.style.fontWeight = "600";	
});

[].forEach.call(document.querySelectorAll('.row, .small-12, .medium-12'), function(elem) {
   elem.style.maxWidth = "100%";
   elem.style.margin = "0";
   elem.style.padding = "0";
});

[].forEach.call(document.querySelectorAll('td:not([class^="bg"])'), function(elem) {
    elem.style.backgroundColor = colortd;
});

[].forEach.call(document.getElementsByTagName('th'), function(elem) {
    elem.style.backgroundColor = "#c2c7d2";
});

[].forEach.call(document.getElementsByClassName('main-footer'), function(elem) {
    elem.style.backgroundColor = "black";
});

[].forEach.call(document.querySelectorAll('.main.analysisMain'), function(elem) {
    elem.style.backgroundColor = "#a7aeb3";
    elem.style.backgroundImage= "none";	
});

[].forEach.call(document.getElementsByClassName('bg1'), function(elem) {
    elem.style.backgroundColor = "#356371";	
});

[].forEach.call(document.getElementsByClassName('bg2'), function(elem) {
    elem.style.backgroundColor = "#64798e";	
});

[].forEach.call(document.querySelectorAll('[href^="/match_4_in_1/"]'), function(elem) {
    elem.parentNode.remove();
});

[].forEach.call(document.querySelectorAll('td span.ML10'), function(elem) {
    elem.remove();
});

var elementosTH = document.getElementsByTagName('th');
for (var indice = 0; indice < elementosTH.length; indice++) {
    var texto = elementosTH[indice].textContent;
    if (texto === "H / G / C") {
    elementosTH[indice].parentNode.removeChild(elementosTH[indice]);
    }
}

[].forEach.call(document.querySelectorAll('.timeLine'), function(elem) {
   elem.parentNode.style.width = "440px";
   elem.parentNode.style.backgroundColor = "#e4e7ea";
   elem.style.width = "99%";
   elem.style.height = "32px";
   elem.style.backgroundColor = "#c6d0da";
   elem.style.borderColor = "#b8bdc1";
});

[].forEach.call(document.querySelectorAll('caption, .timeLineBg1, .timeLineBg2, .timeLineHT, #pageFixedBar2, .iamNotAdItem'), function(elem) {
   elem.remove();
});

[].forEach.call(document.querySelectorAll('[href^="/match/"]'), function(elem) {
    elem.setAttribute('href', elem.getAttribute('href').replace('match', 'match_history'));
});

[].forEach.call(document.querySelectorAll('.statusListWrapper'), function(elem) {
    elem.cloneNode(true);
    elem.parentNode.parentNode.querySelector('[title="Analysis"]').parentNode.appendChild(elem);
});

[].forEach.call(document.querySelectorAll('[href^="/match_live/"]'), function(elem) {
    elem.setAttribute('target', "_blank");
});

[].forEach.call(document.querySelectorAll('.label'), function(elem) {
    elem.style.width = "22px";
    elem.style.height = "12px";
    elem.innerHTML = "";
	elem.parentNode.style.maxWidth = "30px";
    elem.parentNode.setAttribute("width", "30px");
	elem.parentNode.style.padding = "0";
});

[].forEach.call(document.querySelectorAll('th[style*="240px"] + th'), function(elem) {
    elem.style.width = "30px";
});

[].forEach.call(document.querySelectorAll('.timeLine .timeLineCorner'), function(elem) {
    elem.style.zoom = "118%";
    elem.style.top = "-12px";
});

[].forEach.call(document.querySelectorAll('.timeLine .timeLineGoal'), function(elem) {
    elem.style.zoom = "110%";
    elem.style.bottom = "5px";
});

[].forEach.call(document.querySelectorAll('.timeLine .timeLineMissed'), function(elem) {
    elem.style.zoom = "100%";
    elem.style.bottom = "-2px";
});

[].forEach.call(document.querySelectorAll('.timeLine .timeLineRedCard'), function(elem) {
    elem.style.zoom = "94%";
    elem.style.bottom = "2px";
});

[].forEach.call(document.querySelectorAll('.timeLine [title*="Disallowed"]'), function(elem) {
    elem.style.zoom = "100%";
    elem.style.bottom = "-2px";
});

[].forEach.call(document.querySelectorAll('.timeLine [style="left:50%;"]'), function(elem) {
    elem.style.width = "2px";
    elem.style.height = "30px";
    elem.style.backgroundColor = "black";
});

[].forEach.call(document.querySelectorAll('span[class$="min"][style="left:16.7%;"], span[class$="min"][style="left:33.3%;"], span[class$="min"][style="left:66.7%;"], span[class$="min"][style="left:83.3%;"]'), function(elem) {
    elem.style.width = "2px";
    elem.style.height = "15px";
    elem.style.backgroundColor = "#7599a0";
});

[].forEach.call(document.querySelectorAll('span[class$="min"][style="left:5.6%;"], span[class$="min"][style="left:11.1%;"], span[class$="min"][style="left:22.2%;"], span[class$="min"][style="left:27.8%;"], span[class$="min"][style="left:38.9%;"], span[class$="min"][style="left:44.4%;"], span[class$="min"][style="left:55.7%;"], span[class$="min"][style="left:61.1%;"], span[class$="min"][style="left:72.2%;"], span[class$="min"][style="left:77.8%;"], span[class$="min"][style="left:88.9%;"], span[class$="min"][style="left:94.4%;"]'), function(elem) {
    elem.style.height = "0px";
});

[].forEach.call(document.querySelectorAll('.red-color'), function(elem) {
    elem.classList.remove("red-color");
    elem.style.color = "#9c9283";
});

[].forEach.call(document.querySelectorAll('#history1 thead tr th[colspan="2"], #history2 thead tr th[colspan="2"]'), function(elem) {
    elem.colSpan="3";
});

[].forEach.call(document.querySelectorAll('.text-center'), function(elem) {
    elem.style.color = "#717b82";
});

[].forEach.call(document.querySelectorAll('td:first-child a'), function(elem) {
    elem.style.color = "#cacad2";
});

[].forEach.call(document.querySelectorAll('#history1 td:first-child, #history1 th:first-child, #history2 td:first-child, #history2 th:first-child'), function(elem) {
    elem.style.maxWidth = "70px";
    elem.style.width = "70px";
	elem.style.padding = "0";
	elem.style.overflow = "hidden";
});

[].forEach.call(document.querySelectorAll('#history1 td:first-child, #history1 td:first-child + td, #history2 td:first-child, #history2 td:first-child + td'), function(elem) {
    elem.style.maxHeight = "55px";
    elem.style.height = "55px";
	elem.style.fontWeight = "500";
});

[].forEach.call(document.querySelectorAll('#history1 td:first-child + td, #history1 th:first-child + th, #history2 td:first-child + td, #history2 th:first-child + th'), function(elem) {
    elem.style.maxWidth = "60px";
    elem.style.width = "60px";
	elem.style.padding = "0";
	elem.style.overflow = "hidden";
});

[].forEach.call(document.querySelectorAll('#history1 .text-right, #history1 .text-left, #history2 .text-right, #history2 .text-left'), function(elem) {
    elem.style.maxWidth = "90px";
    elem.style.width = "90px";
	elem.style.padding = "0";
	elem.style.overflow = "hidden";
    elem.style.fontWeight = "normal";
	elem.style.fontSize = "13px";
});

[].forEach.call(document.querySelectorAll('.blueCell'), function(elem) {
	elem.style.maxWidth = "45px";
    elem.setAttribute("width", "45px");
	elem.style.padding = "0";
    elem.style.color = "#010e17";
});

[].forEach.call(document.querySelectorAll('#history1 td:last-child, #history2 td:last-child'), function(elem) {
	elem.style.maxWidth = "30px";
    elem.style.width = "30px";
    elem.style.backgroundColor = "black";
});

[].forEach.call(document.querySelectorAll('#history1 .text-right + td, #history1 .text-left + td, #history2 .text-right + td, #history2 .text-left + td'), function(elem) {
	elem.style.width = "45px";
	elem.style.maxWidth = "45px";
	elem.style.padding = "0";
    elem.style.color = "#0a273c";
});

[].forEach.call(document.querySelectorAll('#history1 table thead, #history2 table thead'), function(elem) {
	elem.remove();
});


var historytable = document.getElementById("history_table").querySelector('tbody');
var ob_corlocal        = historytable.childNodes[0].childNodes[8].firstChild.textContent;
var ob_corlocaltotal = historytable.childNodes[1].childNodes[5].firstChild.textContent;
var ob_corvisit          = historytable.childNodes[2].childNodes[8].firstChild.textContent;
var ob_corlvisittotal  = historytable.childNodes[3].childNodes[5].firstChild.textContent;

var procorlocpt = Number(ob_corlocal.slice(0,ob_corlocal.indexOf(" /")+1));
var procorlocft = Number(ob_corlocal.slice(ob_corlocal.indexOf("/ ")+2));
var procorlocst = Number(((procorlocft - procorlocpt).toFixed(1))).valueOf();

var procorvispt = Number(ob_corvisit.slice(0,ob_corvisit.indexOf(" /")+1));
var procorvisft = Number(ob_corvisit.slice(ob_corvisit.indexOf("/ ")+2));
var procorvisst = Number(((procorvisft - procorvispt).toFixed(1))).valueOf();

var procorloctotpt = Number(ob_corlocaltotal.slice(0,ob_corlocaltotal.indexOf(" /")+1));
var procorloctotft = Number(ob_corlocaltotal.slice(ob_corlocaltotal.indexOf("/ ")+2));
var procorloctotst = Number(((procorloctotft - procorloctotpt).toFixed(1))).valueOf();

var procorvistotpt = Number(ob_corlvisittotal.slice(0,ob_corlvisittotal.indexOf(" /")+1));
var procorvistotft = Number(ob_corlvisittotal.slice(ob_corlvisittotal.indexOf("/ ")+2));
var procorvistotst = Number(((procorvistotft - procorvistotpt).toFixed(1))).valueOf();

var procorconlocpt = Number(((procorloctotpt - procorlocpt).toFixed(1))).valueOf();
var procorconlocft = Number(((procorloctotft - procorlocft).toFixed(1))).valueOf();
var procorconlocst = Number(((procorloctotst - procorlocst).toFixed(1))).valueOf();

var procorconvispt = Number(((procorvistotpt - procorvispt).toFixed(1))).valueOf();
var procorconvisft = Number(((procorvistotft - procorvisft).toFixed(1))).valueOf();
var procorconvisst = Number(((procorvistotst - procorvisst).toFixed(1))).valueOf();

var mitablaSCOB = '<table width="100%"><tbody><tr id="locdatgol"></tr></tr><tr id="visdatgol"><tr id="locdatcor"></tr><tr id="visdatcor"></tr></tbody></table>';
var history1 = document.getElementById('history1');
var divparamitabla  = document.createElement("DIV");
history1.appendChild(divparamitabla);
divparamitabla.innerHTML = mitablaSCOB;

var corptcolortd = "#b5c2d0";
var corstcolortd = "#c3cac4";
var corftcolortd = "#d0d4d8";

var mitdcorloc1 = document.createElement("TD");mitdcorloc1.textContent = procorlocpt;mitdcorloc1.style.backgroundColor = corptcolortd;             document.getElementById('locdatcor').appendChild(mitdcorloc1);
var mitdcorloc2 = document.createElement("TD");mitdcorloc2.textContent = procorlocst;mitdcorloc2.style.backgroundColor = corstcolortd;             document.getElementById('locdatcor').appendChild(mitdcorloc2);
var mitdcorloc3 = document.createElement("TD");mitdcorloc3.textContent = procorlocft;mitdcorloc3.style.backgroundColor = corftcolortd;               document.getElementById('locdatcor').appendChild(mitdcorloc3);
var mitdcorloc4 = document.createElement("TD");mitdcorloc4.textContent = procorconlocpt;mitdcorloc4.style.backgroundColor = corptcolortd;       document.getElementById('locdatcor').appendChild(mitdcorloc4);
var mitdcorloc5 = document.createElement("TD");mitdcorloc5.textContent = procorconlocst;mitdcorloc5.style.backgroundColor = corstcolortd;       document.getElementById('locdatcor').appendChild(mitdcorloc5);
var mitdcorloc6 = document.createElement("TD");mitdcorloc6.textContent = procorconlocft;mitdcorloc6.style.backgroundColor = corftcolortd;         document.getElementById('locdatcor').appendChild(mitdcorloc6);

var mitdcorloc7 = document.createElement("TD");mitdcorloc7.textContent = procorloctotpt;mitdcorloc7.style.backgroundColor = corptcolortd;         document.getElementById('locdatcor').appendChild(mitdcorloc7);
var mitdcorloc8 = document.createElement("TD");mitdcorloc8.textContent = procorloctotst;mitdcorloc8.style.backgroundColor = corstcolortd;         document.getElementById('locdatcor').appendChild(mitdcorloc8);
var mitdcorloc9 = document.createElement("TD");mitdcorloc9.textContent = procorloctotft;mitdcorloc9.style.backgroundColor = corftcolortd;           document.getElementById('locdatcor').appendChild(mitdcorloc9);

var mitdcorvis1 = document.createElement("TD");mitdcorvis1.textContent = procorconvispt;mitdcorvis1.style.backgroundColor = corptcolortd;         document.getElementById('visdatcor').appendChild(mitdcorvis1);
var mitdcorvis2 = document.createElement("TD");mitdcorvis2.textContent = procorconvisst;mitdcorvis2.style.backgroundColor = corstcolortd;         document.getElementById('visdatcor').appendChild(mitdcorvis2);
var mitdcorvis3 = document.createElement("TD");mitdcorvis3.textContent = procorconvisft;mitdcorvis3.style.backgroundColor = corftcolortd;           document.getElementById('visdatcor').appendChild(mitdcorvis3);
var mitdcorvis4 = document.createElement("TD");mitdcorvis4.textContent = procorvispt;mitdcorvis4.style.backgroundColor = corptcolortd;               document.getElementById('visdatcor').appendChild(mitdcorvis4);
var mitdcorvis5 = document.createElement("TD");mitdcorvis5.textContent = procorvisst;mitdcorvis5.style.backgroundColor = corstcolortd;               document.getElementById('visdatcor').appendChild(mitdcorvis5);
var mitdcorvis6 = document.createElement("TD");mitdcorvis6.textContent = procorvisft;mitdcorvis6.style.backgroundColor = corftcolortd;                 document.getElementById('visdatcor').appendChild(mitdcorvis6);

var mitdcorvis7 = document.createElement("TD");mitdcorvis7.textContent = procorvistotpt;mitdcorvis7.style.backgroundColor = corptcolortd;         document.getElementById('visdatcor').appendChild(mitdcorvis7);
var mitdcorvis8 = document.createElement("TD");mitdcorvis8.textContent = procorvistotst;mitdcorvis8.style.backgroundColor = corstcolortd;         document.getElementById('visdatcor').appendChild(mitdcorvis8);
var mitdcorvis9 = document.createElement("TD");mitdcorvis9.textContent = procorvistotft;mitdcorvis9.style.backgroundColor = corftcolortd;           document.getElementById('visdatcor').appendChild(mitdcorvis9);



[].forEach.call(document.querySelectorAll('#locdatcor td, #visdatcor td'), function(elem) {
	elem.style.maxWidth = "30px";
    elem.style.width = "30px";
    elem.style.textAlign = "center";	
});


}


	function getMinutos(tiempo) {
    var t = 0;
    var secc = tiempo.split("+");
    if (secc.length > 1) {
    t = parseInt(secc[0]) + parseInt(secc[1]);
    } else {
    t = parseInt(secc[0]);
    }
    return t;
    }

//Agregar Atributos DATA  a Elementos GOL, CORNER, REDCARD y MISSED en Tablas Hist1 e Hist2
[].forEach.call(document.querySelectorAll('#history1 table.live-list-table tbody tr, #history2 table.live-list-table tbody tr'), function(elem) {
	var eqloc = elem.querySelector('td.text-right a').textContent;
    var eqvis = elem.querySelector('td.text-left a').textContent;
	console.log(eqloc);
    console.log(eqvis);
	
	[].forEach.call(elem.querySelectorAll('.timeLine .timeLineGoal, .timeLine .timeLineCorner, .timeLine .timeLineRedCard, .timeLine .timeLineMissed'), function(todosElemTimeLine) {
	var titulo = 	todosElemTimeLine.getAttribute("title");
	var titulomintex = titulo.slice(0, titulo.indexOf("'")); //Minuto en Texto: 45+1, 90+5
	var titulominparse = parseInt(titulomintex); //Minuto en Número Maximo segun Tiempo: 45 o 90
	var titulominnum = getMinutos(titulomintex); //Minuto en Número Sumado al Tiempo Agregado: 46, 95
	var secciones = titulo.split(" - ");
	var numevento = parseInt(secciones[1]);
	//Data de EQ LOC y VIS
	if (titulo.indexOf(eqloc) > -1)  {
    todosElemTimeLine.setAttribute("data-equipo", "loc");
    } else if (titulo.indexOf(eqvis) > -1)  {
    todosElemTimeLine.setAttribute("data-equipo", "vis");
    }
	//Data de MINUTO DE EVENTO
	todosElemTimeLine.setAttribute("data-min", titulominnum);
	//Data de MINUTO MAX DE EVENTO
	todosElemTimeLine.setAttribute("data-minmax", titulominparse);	
	//Data de NUMERO DE EVENTO
	if (titulo.indexOf("Disallowed Goal") < 0 && titulo.indexOf("Missed Penalty") < 0)  {
	todosElemTimeLine.setAttribute("data-num", numevento);
	}
	//Data de PARTE DEL PARTIDO 
	if (titulominparse >=0 && titulominparse <=90)  {
    todosElemTimeLine.setAttribute("data-parte", "RT");
    } else if (titulominparse >=91 && titulominparse <=120)  {
    todosElemTimeLine.setAttribute("data-parte", "ET");
    }
	//Data TIPO DE GOL
	if (typeof secciones[3] !== "undefined") {
    todosElemTimeLine.setAttribute("data-tipodegol", secciones[3]);
	}
	//Data de MITADES
	if (titulominparse <=45)  {
    todosElemTimeLine.setAttribute("data-mitad", "1M");
    } else if (titulominparse >=46 && titulominparse <=90)  {
    todosElemTimeLine.setAttribute("data-mitad", "2M");
    }
    if (titulominparse >=91 && titulominparse <=105)  {
    todosElemTimeLine.setAttribute("data-mitad", "ET1M");
    } else if (titulominparse >=106 && titulominparse <=120)  {
    todosElemTimeLine.setAttribute("data-mitad", "ET2M");
    }
    //Data de PARTES DE 30 MIN
	if (titulominparse <=30)  {
    todosElemTimeLine.setAttribute("data-treinta", "1");
    } else if (titulominparse >=31 && titulominparse <=60)  {
    todosElemTimeLine.setAttribute("data-treinta", "2");
    }
	if (titulominparse >=61 && titulominparse <=90)  {
    todosElemTimeLine.setAttribute("data-treinta", "3");
    } else if (titulominparse >=91 && titulominparse <=120)  {
    todosElemTimeLine.setAttribute("data-treinta", "4");
    }	
   //Data de PARTES DE 15 MIN
	if (titulominparse <=15)  {
    todosElemTimeLine.setAttribute("data-quince", "1");
    } else if (titulominparse >=16 && titulominparse <=30)  {
    todosElemTimeLine.setAttribute("data-quince", "2");
    }
    if (titulominparse >=31 && titulominparse <=45)  {
    todosElemTimeLine.setAttribute("data-quince", "3");
    } else if (titulominparse >=46 && titulominparse <=60)  {
    todosElemTimeLine.setAttribute("data-quince", "4");
    }
    if (titulominparse >=61 && titulominparse <=75)  {
    todosElemTimeLine.setAttribute("data-quince", "5");
    } else if (titulominparse >=76 && titulominparse <=90)  {
    todosElemTimeLine.setAttribute("data-quince", "6");
    }
    if (titulominparse >=91 && titulominparse <=105)  {
    todosElemTimeLine.setAttribute("data-quince", "7");
    } else if (titulominparse >=106 && titulominparse <=120)  {
    todosElemTimeLine.setAttribute("data-quince", "8");
    }
	

    });//FIN FUNCIONES Timeline GOL, CORNER y REDCARD
	
   //Data de GEQL Temp, GEQVTemp, RES Temp y RESDET Temp
	var elementosTimeLineFT = elem.querySelectorAll('.timeLine [data-num][data-parte="RT"]');
    var i, gEQLtemFT, gEQVtemFT, tipoderesTemFT, tipoderesTemDetFT, mpugFT;
	for (i = 0,gEQLtemFT = 0,gEQVtemFT = 0,tipoderesTemFT = "E",tipoderesTemDetFT = "E0",mpugFT = 0; i < elementosTimeLineFT.length; i++) { 
	var clasedeelem = elementosTimeLineFT[i].getAttribute("class");
	var dataequipo = elementosTimeLineFT[i].getAttribute("data-equipo");
	var elemgol = "timeLineGoal";
	var tipoeqloc = "loc";
	var tipoeqvis = "vis";
	
	elementosTimeLineFT[i].setAttribute("data-gltemft", gEQLtemFT);
	elementosTimeLineFT[i].setAttribute("data-gvtemft", gEQVtemFT);
	elementosTimeLineFT[i].setAttribute("data-restemft", tipoderesTemFT);
	elementosTimeLineFT[i].setAttribute("data-restemftdet", tipoderesTemDetFT);

	if (clasedeelem == elemgol && dataequipo == tipoeqloc)  {
	gEQLtemFT +=1;
    }
	if (clasedeelem == elemgol && dataequipo == tipoeqvis)  {
	gEQVtemFT +=1;
    }
	
	if (gEQLtemFT > gEQVtemFT)  {
	tipoderesTemFT = "L";
    }
	if (gEQLtemFT < gEQVtemFT)  {
	tipoderesTemFT = "V";
    }
	if (gEQLtemFT == gEQVtemFT)  {
	tipoderesTemFT = "E";
    }

	if (gEQLtemFT > gEQVtemFT && (gEQLtemFT - gEQVtemFT) == 1)  {
	tipoderesTemDetFT = "L1";
    }
	if (gEQLtemFT > gEQVtemFT && (gEQLtemFT - gEQVtemFT) >= 2)  {
	tipoderesTemDetFT = "L2";
    }
	if (gEQLtemFT > gEQVtemFT && (gEQLtemFT - gEQVtemFT) >= 3)  {
	tipoderesTemDetFT = "L3";
    }	
	if (gEQVtemFT > gEQLtemFT && (gEQVtemFT - gEQLtemFT) == 1)  {
	tipoderesTemDetFT = "V1";
    }
	if (gEQVtemFT > gEQLtemFT && (gEQVtemFT - gEQLtemFT) >= 2)  {
	tipoderesTemDetFT = "V2";
    }
	if (gEQVtemFT > gEQLtemFT && (gEQVtemFT - gEQLtemFT) >= 3)  {
	tipoderesTemDetFT = "V3";
    }	
	if (gEQLtemFT == gEQVtemFT && gEQLtemFT >= 1 && gEQVtemFT >= 1)  {
	tipoderesTemDetFT = "EG";
    }
	if (gEQLtemFT == gEQVtemFT && gEQLtemFT == 0 && gEQVtemFT == 0)  {
	tipoderesTemDetFT = "E0";
    }
	
	//elementosTimeLineFT[i].setAttribute("data-gaya", gEQLtemFT);
	//elementosTimeLineFT[i].setAttribute("data-gbya", gEQVtemFT);
	//elementosTimeLineFT[i].setAttribute("data-resya", tipoderesTemFT);
	//elementosTimeLineFT[i].setAttribute("data-resdetya", tipoderesTemDetFT);
	
	if (clasedeelem == elemgol)  {
	var mpugFT = Number(elementosTimeLineFT[i].getAttribute("data-minmax")) - mpugFT;
	elementosTimeLineFT[i].setAttribute("data-mpug-ft", mpugFT);
	mpugFT = Number(elementosTimeLineFT[i].getAttribute("data-minmax"));
    }
	
	
    }	//FIN FUNCIONES Data de GEQA, GEQB, RES y RESDET
	
	//(Goles y RES DET 1erT) Data de GEQLTemp PT, GEQVTemp PT, RES Temp PT y RESDET Temp PT
	var elementosTimeLinePT = elem.querySelectorAll('.timeLine [data-num][data-mitad="1M"]');
    var i, gEQLtemPT, gEQVtemPT, tipoderesTemPT, tipoderesTemDetPT, mpugPT;
	for (i = 0,gEQLtemPT = 0,gEQVtemPT = 0,tipoderesTemPT = "E",tipoderesTemDetPT = "E0e",mpugPT = 0; i < elementosTimeLinePT.length; i++) { 
	var clasedeelem = elementosTimeLinePT[i].getAttribute("class");
	var dataequipo = elementosTimeLinePT[i].getAttribute("data-equipo");
	var elemgol = "timeLineGoal";
	var tipoeqloc = "loc";
	var tipoeqvis = "vis";
	
	elementosTimeLinePT[i].setAttribute("data-gltempt", gEQLtemPT);
	elementosTimeLinePT[i].setAttribute("data-gvtempt", gEQVtemPT);
	elementosTimeLinePT[i].setAttribute("data-restempt", tipoderesTemPT);
	elementosTimeLinePT[i].setAttribute("data-restemptdet", tipoderesTemDetPT);

	if (clasedeelem == elemgol && dataequipo == tipoeqloc)  {
	gEQLtemPT +=1;
    }
	if (clasedeelem == elemgol && dataequipo == tipoeqvis)  {
	gEQVtemPT +=1;
    }
	
	if (gEQLtemPT > gEQVtemPT)  {
	tipoderesTemPT = "L";
    }
	if (gEQLtemPT < gEQVtemPT)  {
	tipoderesTemPT = "V";
    }
	if (gEQLtemPT == gEQVtemPT)  {
	tipoderesTemPT = "E";
    }

	if (gEQLtemPT > gEQVtemPT && (gEQLtemPT - gEQVtemPT) == 1)  {
	tipoderesTemDetPT = "L1e";
    }
	if (gEQLtemPT > gEQVtemPT && (gEQLtemPT - gEQVtemPT) >= 2)  {
	tipoderesTemDetPT = "L2m";
    }
	if (gEQVtemPT > gEQLtemPT && (gEQVtemPT - gEQLtemPT) == 1)  {
	tipoderesTemDetPT = "V1e";
    }
	if (gEQVtemPT > gEQLtemPT && (gEQVtemPT - gEQLtemPT) >= 2)  {
	tipoderesTemDetPT = "V2m";
    }
	if (gEQLtemPT == gEQVtemPT && gEQLtemPT >= 1 && gEQVtemPT >= 1)  {
	tipoderesTemDetPT = "E1m";
    }
	if (gEQLtemPT == gEQVtemPT && gEQLtemPT == 0 && gEQVtemPT == 0)  {
	tipoderesTemDetPT = "E0e";
    }
	
    if (clasedeelem == elemgol)  {
	var mpugPT = Number(elementosTimeLinePT[i].getAttribute("data-minmax")) - mpugPT;
	elementosTimeLinePT[i].setAttribute("data-mpug-pt", mpugPT);
	mpugPT = Number(elementosTimeLinePT[i].getAttribute("data-minmax"));
    }
	
	
    }	//FIN FUNCIONES (Goles y RES DET 1erT) Data de GEQLTemp PT, GEQVTemp PT, RES Temp PT y RESDET Temp PT
	
   //(Goles y RES DET 2doT) Data de GEQLTemp ST, GEQVTemp ST, RES Temp ST y RESDET Temp ST
	var elementosTimeLineST = elem.querySelectorAll('.timeLine [data-num][data-mitad="2M"]');
    var i, gEQLtemST, gEQVtemST, tipoderesTemST, tipoderesTemDetST, mpugST;
	for (i = 0,gEQLtemST = 0,gEQVtemST = 0,tipoderesTemST = "E",tipoderesTemDetST = "E0e",mpugST = 45; i < elementosTimeLineST.length; i++) { 
	var clasedeelem = elementosTimeLineST[i].getAttribute("class");
	var dataequipo = elementosTimeLineST[i].getAttribute("data-equipo");
	var elemgol = "timeLineGoal";
	var tipoeqloc = "loc";
	var tipoeqvis = "vis";
	
	elementosTimeLineST[i].setAttribute("data-gltemst", gEQLtemST);
	elementosTimeLineST[i].setAttribute("data-gvtemst", gEQVtemST);
	elementosTimeLineST[i].setAttribute("data-restemst", tipoderesTemST);
	elementosTimeLineST[i].setAttribute("data-restemstdet", tipoderesTemDetST);

	if (clasedeelem == elemgol && dataequipo == tipoeqloc)  {
	gEQLtemST +=1;
    }
	if (clasedeelem == elemgol && dataequipo == tipoeqvis)  {
	gEQVtemST +=1;
    }
	
	if (gEQLtemST > gEQVtemST)  {
	tipoderesTemST = "L";
    }
	if (gEQLtemST < gEQVtemST)  {
	tipoderesTemST = "V";
    }
	if (gEQLtemST == gEQVtemST)  {
	tipoderesTemST = "E";
    }

	if (gEQLtemST > gEQVtemST && (gEQLtemST - gEQVtemST) == 1)  {
	tipoderesTemDetST = "L1e";
    }
	if (gEQLtemST > gEQVtemST && (gEQLtemST - gEQVtemST) >= 2)  {
	tipoderesTemDetST = "L2m";
    }
	if (gEQVtemST > gEQLtemST && (gEQVtemST - gEQLtemST) == 1)  {
	tipoderesTemDetST = "V1e";
    }
	if (gEQVtemST > gEQLtemST && (gEQVtemST - gEQLtemST) >= 2)  {
	tipoderesTemDetST = "V2m";
    }
	if (gEQLtemST == gEQVtemST && gEQLtemST >= 1 && gEQVtemST >= 1)  {
	tipoderesTemDetST = "E1m";
    }
	if (gEQLtemST == gEQVtemST && gEQLtemST == 0 && gEQVtemST == 0)  {
	tipoderesTemDetST = "E0e";
    }
	
    if (clasedeelem == elemgol)  {
	var mpugST = Number(elementosTimeLineST[i].getAttribute("data-minmax")) - mpugST;
	elementosTimeLineST[i].setAttribute("data-mpug-st", mpugST);
	mpugST = Number(elementosTimeLineST[i].getAttribute("data-minmax"));
    }
	
	
    }	//FIN FUNCIONES (Goles y RES DET 2doT) Data de GEQLTemp ST, GEQVTemp ST, RES Temp ST y RESDET Temp ST	
	
    var ob_ptg = elem.querySelector('td.text-left + td').firstChild.nodeValue;
    var nv_ptgl = parseInt(ob_ptg.slice(0,ob_ptg.indexOf("：")));
    var nv_ptgv = parseInt(ob_ptg.slice(ob_ptg.indexOf("：")+1));

   var ob_rfg =elem.querySelector('td.text-right + td').firstChild.nodeValue;
   var nv_rfgl = parseInt(ob_rfg.slice(0,ob_rfg.indexOf("：")));
   var nv_rfgv = parseInt(ob_rfg.slice(ob_rfg.indexOf("：")+1));

   var nv_stgl = parseInt(nv_rfgl) - parseInt(nv_ptgl);
   var nv_stgv = parseInt(nv_rfgv) - parseInt(nv_ptgv);
   
   var tipoderespt, tipoderesptdet, tipoderesst, tipoderesstdet, tipoderesft, tipoderesftdet;
   //Primer Tiempo
   	if (nv_ptgl > nv_ptgv)  {
	tipoderespt = "L";
    }
	if (nv_ptgl < nv_ptgv)  {
	tipoderespt = "V";
    }
	if (nv_ptgl == nv_ptgv)  {
	tipoderespt = "E";
    }

	if (nv_ptgl > nv_ptgv && (nv_ptgl - nv_ptgv) == 1)  {
	tipoderesptdet = "L1";
    }
	if (nv_ptgl > nv_ptgv && (nv_ptgl - nv_ptgv) >= 2)  {
	tipoderesptdet = "L2";
    }
	if (nv_ptgv > nv_ptgl && (nv_ptgv - nv_ptgl) == 1)  {
	tipoderesptdet = "V1";
    }
	if (nv_ptgv > nv_ptgl && (nv_ptgv - nv_ptgl) >= 2)  {
	tipoderesptdet = "V2";
    }
	if (nv_ptgl == nv_ptgv && nv_ptgl >= 1 && nv_ptgv >= 1)  {
	tipoderesptdet = "EG";
    }
	if (nv_ptgl == nv_ptgv && nv_ptgl == 0 && nv_ptgv == 0)  {
	tipoderesptdet = "E0";
    }
   //Segundo Tiempo
   	if (nv_stgl > nv_stgv)  {
	tipoderesst = "L";
    }
	if (nv_stgl < nv_stgv)  {
	tipoderesst = "V";
    }
	if (nv_stgl == nv_stgv)  {
	tipoderesst = "E";
    }

	if (nv_stgl > nv_stgv && (nv_stgl - nv_stgv) == 1)  {
	tipoderesstdet = "L1";
    }
	if (nv_stgl > nv_stgv && (nv_stgl - nv_stgv) >= 2)  {
	tipoderesstdet = "L2";
    }
	if (nv_stgv > nv_stgl && (nv_stgv - nv_stgl) == 1)  {
	tipoderesstdet = "V1";
    }
	if (nv_stgv > nv_stgl && (nv_stgv - nv_stgl) >= 2)  {
	tipoderesstdet = "V2";
    }
	if (nv_stgl == nv_stgv && nv_stgl >= 1 && nv_stgv >= 1)  {
	tipoderesstdet = "EG";
    }
	if (nv_stgl == nv_stgv && nv_stgl == 0 && nv_stgv == 0)  {
	tipoderesstdet = "E0";
    }
	//Resultado Final TR
   	if (nv_rfgl > nv_rfgv)  {
	tipoderesft = "L";
    }
	if (nv_rfgl < nv_rfgv)  {
	tipoderesft = "V";
    }
	if (nv_rfgl == nv_rfgv)  {
	tipoderesft = "E";
    }

	if (nv_rfgl > nv_rfgv && (nv_rfgl - nv_rfgv) == 1)  {
	tipoderesftdet = "L1";
    }
	if (nv_rfgl > nv_rfgv && (nv_rfgl - nv_rfgv) >= 2)  {
	tipoderesftdet = "L2";
    }
	if (nv_rfgv > nv_rfgl && (nv_rfgv - nv_rfgl) == 1)  {
	tipoderesftdet = "V1";
    }
	if (nv_rfgv > nv_rfgl && (nv_rfgv - nv_rfgl) >= 2)  {
	tipoderesftdet = "V2";
    }
	if (nv_rfgl == nv_rfgv && nv_rfgl >= 1 && nv_rfgv >= 1)  {
	tipoderesftdet = "EG";
    }
	if (nv_rfgl == nv_rfgv && nv_rfgl == 0 && nv_rfgv == 0)  {
	tipoderesftdet = "E0";
    }
   
   var divTimeline = elem.querySelector('td div.cornerTimeLine');
   divTimeline.setAttribute("data-ptgl", nv_ptgl);
   divTimeline.setAttribute("data-ptgv", nv_ptgv);
   divTimeline.setAttribute("data-stgl", nv_stgl);
   divTimeline.setAttribute("data-stgv", nv_stgv);
   divTimeline.setAttribute("data-rfgl", nv_rfgl);
   divTimeline.setAttribute("data-rfgv", nv_rfgv);
   
   divTimeline.setAttribute("data-respt", nv_ptgl + "-" + nv_ptgv);
   divTimeline.setAttribute("data-resst", nv_stgl + "-" + nv_stgv);
   divTimeline.setAttribute("data-resft", nv_rfgl + "-" + nv_rfgv);
   
   divTimeline.setAttribute("data-tiporespt", tipoderespt);
   divTimeline.setAttribute("data-tiporesdetpt", tipoderesptdet);   
   divTimeline.setAttribute("data-tiporesst", tipoderesst);
   divTimeline.setAttribute("data-tiporesdetst", tipoderesstdet);
   divTimeline.setAttribute("data-tiporesft", tipoderesft);
   divTimeline.setAttribute("data-tiporesdetft", tipoderesftdet);
   
   console.log(nv_ptgl + "-" + nv_ptgv);
   console.log(nv_stgl + "-" + nv_stgv);
   console.log(nv_rfgl + "-" + nv_rfgv);

   	function sumarMinResFT(listanodos) {
	for (var ind = 0,min = 0; ind < listanodos.length; ind++) {
    min += Number(listanodos[ind].getAttribute("data-mpug-ft"));
    }
	return min;
    }
	
	function sumarMinResST(listanodos) {
	for (var ind = 0,min = 0; ind < listanodos.length; ind++) {
    min += Number(listanodos[ind].getAttribute("data-mpug-st"));
    }
	return min;
    }
	
   var elementosTimeLineGolResFTL = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-parte="RT"][data-restemft="L"]');
   var elementosTimeLineGolResFTE = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-parte="RT"][data-restemft="E"]');
   var elementosTimeLineGolResFTV = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-parte="RT"][data-restemft="V"]');
   
   var elementosTimeLineGolResFTL1 = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-parte="RT"][data-restemftdet="L1"]');
   var elementosTimeLineGolResFTL2 = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-parte="RT"][data-restemftdet="L2"]');
   var elementosTimeLineGolResFTE0 = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-parte="RT"][data-restemftdet="E0"]');
   var elementosTimeLineGolResFTEG = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-parte="RT"][data-restemftdet="EG"]');
   var elementosTimeLineGolResFTV1 = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-parte="RT"][data-restemftdet="V1"]');
   var elementosTimeLineGolResFTV2 = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-parte="RT"][data-restemftdet="V2"]');
   
   
   var nodospt = elem.querySelectorAll('.timeLine [data-mitad="1M"]');
   var nodosft = elem.querySelectorAll('.timeLine [data-parte="RT"]');
   var tmaxjugpt = Number(nodospt[nodospt.length - 1].getAttribute("data-min"));
   var tmaxjugft = Number(nodosft[nodosft.length - 1].getAttribute("data-min"));
   var tmaxjugst = tmaxjugft - 45;
   
   var minLFT = sumarMinResFT(elementosTimeLineGolResFTL);
   var minEFT = sumarMinResFT(elementosTimeLineGolResFTE);
   var minVFT = sumarMinResFT(elementosTimeLineGolResFTV);
   
   var minL1FT = sumarMinResFT(elementosTimeLineGolResFTL1);
   var minL2FT = sumarMinResFT(elementosTimeLineGolResFTL2);
   var minE0FT = sumarMinResFT(elementosTimeLineGolResFTE0);
   var minEGFT = sumarMinResFT(elementosTimeLineGolResFTEG);
   var minV1FT = sumarMinResFT(elementosTimeLineGolResFTV1);
   var minV2FT = sumarMinResFT(elementosTimeLineGolResFTV2);
   
   	if (tipoderesft == "L")  {
	minLFT = 95 - minEFT - minVFT;
    }
    if (tipoderesft == "E")  {
	minEFT = 95 - minLFT - minVFT;
    }
    if (tipoderesft == "V")  {
	minVFT = 95 - minLFT - minEFT;
    }
	
	if (tipoderesftdet == "L1")  {
	minL1FT = 95 - minL2FT - minE0FT - minEGFT - minV1FT - minV2FT;
    }
	if (tipoderesftdet == "L2")  {
	minL2FT = 95 - minL1FT - minE0FT - minEGFT - minV1FT - minV2FT;
    }
	if (tipoderesftdet == "E0")  {
	minE0FT = 95- minL1FT - minL2FT - minEGFT - minV1FT - minV2FT;
    }
	if (tipoderesftdet == "EG")  {
	minEGFT = 95- minL1FT - minL2FT - minE0FT - minV1FT - minV2FT;
    }
	if (tipoderesftdet == "V1")  {
	minV1FT = 95- minL1FT - minL2FT - minE0FT - minEGFT - minV2FT;
    }
	if (tipoderesftdet == "V2")  {
	minV2FT = 95- minL1FT - minL2FT - minE0FT - minEGFT - minV1FT;
    }

	
   console.log(minLFT);
   console.log(minEFT); 
   console.log(minVFT);
   console.log("----");
   console.log(minL1FT);
   console.log(minL2FT);
   console.log(minE0FT);
   console.log(minEGFT);
   console.log(minV1FT);
   console.log(minV2FT);
   
   
   var elementosTimeLineGolResPTL = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-mitad="1M"][data-restemft="L"]');
   var elementosTimeLineGolResPTE = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-mitad="1M"][data-restemft="E"]');
   var elementosTimeLineGolResPTV = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-mitad="1M"][data-restemft="V"]');
   
   var minLPT = sumarMinResFT(elementosTimeLineGolResPTL);
   var minEPT = sumarMinResFT(elementosTimeLineGolResPTE);
   var minVPT = sumarMinResFT(elementosTimeLineGolResPTV);
   
    if (tipoderespt == "L")  {
	minLPT = 47 - minEPT - minVPT;
    }
    if (tipoderespt == "E")  {
	minEPT = 47 - minLPT - minVPT;
    }
    if (tipoderespt == "V")  {
	minVPT = 47 - minLPT - minEPT;
    }
	
   var elementosTimeLineGolResSTL = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-mitad="2M"][data-restemst="L"]');
   var elementosTimeLineGolResSTE = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-mitad="2M"][data-restemst="E"]');
   var elementosTimeLineGolResSTV = elem.querySelectorAll('.timeLine .timeLineGoal[data-num][data-mitad="2M"][data-restemst="V"]');
   
   var minLST = sumarMinResST(elementosTimeLineGolResSTL);
   var minEST = sumarMinResST(elementosTimeLineGolResSTE);
   var minVST = sumarMinResST(elementosTimeLineGolResSTV);
   
    if (tipoderesst == "L")  {
	minLST = 48 - minEST - minVST;
    }
    if (tipoderesst == "E")  {
	minEST = 48 - minLST - minVST;
    }
    if (tipoderesst == "V")  {
	minVST = 48 - minLST - minEST;
    }
	

	   console.log("----");
	   console.log("----");
   console.log(minLPT);
   console.log(minEPT); 
   console.log(minVPT);
   	   console.log("----");
   	   console.log("----");
   console.log(minLST);
   console.log(minEST); 
   console.log(minVST);   
   
});












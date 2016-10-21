document.addEventListener('deviceready', onDeviceReady, false);


items = {
           "acciughe": {"label": "Acciughe", "value": 1.02, "image": "acciughe.png"},
           "acqua": {"label": "Acqua", "value": 1, "image": "acqua.png"},
           "aglio": {"label": "Aglio", "value": 0.68, "image": "aglio.png"},
           "agliotritata": {"label": "Aglio (tritato)", "value": 0.64, "image": "agliotritata.png"},
           "albicoccheessiccato": {"label": "Albicocche (essiccate)", "value": 0.64, "image": "albicoccheessiccato.png"},
           "albume": {"label": "Albume (uovo)", "value": 0.93, "image": "albume.png"},
           "alici": {"label": "Alici", "value": 1.02, "image": "acciughe.png"},
           "anacardi": {"label": "Anacardi", "value": 0.47000000000000003, "image": "anacardioliotorrefatto.png"},
           "arachidi": {"label": "Arachidi", "value": 0.64, "image": "arachidioliotorrefatto.png"},
           "avenamacinata": {"label": "Avena (macinata)", "value": 0.68, "image": "avenamacinata.png"},
           "avenafiocchi": {"label": "Avena (fiocchi)", "value": 0.34, "image": "avenafiocchi.png"},
           "bananeafette": {"label": "Banane (a fette)", "value": 0.76, "image": "bananeafette.png"},
           "bananepurea": {"label": "Banane (purea)", "value": 0.97, "image": "bananepurea.png"},
           "basilicoessiccato": {"label": "Basilico (essiccato)", "value": 0.11, "image": "basilicoessiccato.png"},
           "bicarbonatodisodio": {"label": "Bicarbonato di sodio", "value": 0.87, "image": "bicarbonatodisodio.png"},
           "bucciadaranciacandita": {"label": "Buccia d'arancia candita", "value": 0.53, "image": "bucciadaranciacandita.png"},
           "burro": {"label": "Burro", "value": 0.97, "image": "burro.png"},
           "burrodiarachidi": {"label": "Burro di arachidi", "value": 0.76, "image": "burrodiarachidi.png"},
           "caffemacinato": {"label": "Caffè (macinato)", "value": 0.38, "image": "caffemacinato.png"},
           "caffeistantaneo": {"label": "Caffè (istantaneo)", "value": 0.23, "image": "caffeistantaneo.png"},
           "canditiscorzadilimone": {"label": "Canditi, scorza di limone", "value": 0.5700000000000001, "image": "canditiscorzadilimone.png"},
           "cannellapolvere": {"label": "Cannella (in polvere)", "value": 0.51, "image": "cannellapolvere.png"},
           "carnibovinecotti": {"label": "Carni bovine (cotti)", "value": 0.97, "image": "carnibovinecotti.png"},
           "carnibovinecruda": {"label": "Carni bovine (cruda)", "value": 0.93, "image": "carnibovinecruda.png"},
           "cavolfiore": {"label": "Cavolfiore", "value": 0.97, "image": "cavolfiore.png"},
           "cavolotriturato": {"label": "Cavolo (triturato)", "value": 1.44, "image": "cavolotriturato.png"},
           "cerealiricekrispies": {"label": "Cereali (Tipo Rice Krispies)", "value": 0.09, "image": "cerealiricekrispies.png"},
           "chiodidigarofanointeri": {"label": "Chiodi di garofano (interi)", "value": 0.38, "image": "chiodidigarofanointeri.png"},
           "chiodidigarofanoinpolvere": {"label": "Chiodi di garofano (in polvere)", "value": 0.4, "image": "chiodidigarofanoinpolvere.png"},
           "cioccolatocacaoinpolvere": {"label": "Cioccolato (cacao in polvere)", "value": 0.47000000000000003, "image": "cioccolatocacaoinpolvere.png"},
           "cioccolatofuso": {"label": "Cioccolato (fuso)", "value": 1.02, "image": "cioccolatofuso.png"},
           "cioccolatograttugiato": {"label": "Cioccolato (grattugiato)", "value": 0.42, "image": "cioccolatograttugiato.png"},
           "cioccolatoscaglie": {"label": "Cioccolato in scaglie", "value": 0.76, "image": "cioccolatoscaglie.png"},
           "cipollaaffettata": {"label": "Cipolla (affettata)", "value": 0.55, "image": "cipollaaffettata.png"},
           "cipollatritata": {"label": "Cipolla (tritata)", "value": 0.85, "image": "cipollatritata.png"},
           "coccotriturato": {"label": "Cocco (triturato)", "value": 0.32, "image": "coccotriturato.png"},
           "crackersbriciole": {"label": "Crackers in briciole", "value": 0.25, "image": "crackersbriciole.png"},
           "cranberry": {"label": "Cranberry", "value": 0.42, "image": "cranberry.png"},
           "cremadigrano": {"label": "Crema di grano", "value": 0.76, "image": "cremadigrano.png"},
           "cremaditartaro": {"label": "Crema di tartaro", "value": 0.64, "image": "cremaditartaro.png"},
           "crusca": {"label": "Crusca", "value": 0.23, "image": "crusca.png"},
           "curcumainpolvere": {"label": "Curcuma (in polvere)", "value": 0.59, "image": "curcumainpolvere.png"},
           "dattero": {"label": "Dattero (senza seme)", "value": 0.64, "image": "dattero.png"},
           "eggpasta": {"label": "Egg pasta", "value": 0.38, "image": "eggpasta.png"},
           "erbacipollinafrescotritato": {"label": "Erba cipollina (fresco tritato)", "value": 0.21, "image": "erbacipollinafrescotritato.png"},
           "erbacipollinasecchitritati": {"label": "Erba cipollina (secchi tritati)", "value": 0.03, "image": "erbacipollinasecchitritati.png"},
           "fagiolisecchi": {"label": "Fagioli (secchi)", "value": 0.85, "image": "fagiolisecchi.png"},
           "farina": {"label": "Farina", "value": 0.76, "image": "farina.png"},
           "farinadeafsmith": {"label": "Farina (Deaf Smith)", "value": 0.55, "image": "farinadeafsmith.png"},
           "farinagranointero": {"label": "Farina (grano intero)", "value": 0.55, "image": "farinagranointero.png"},
           "farinagranosaraceno": {"label": "Farina (grano saraceno)", "value": 0.72, "image": "farinagranosaraceno.png"},
           "farinalegume": {"label": "Farina (legume)", "value": 0.55, "image": "farinalegume.png"},
           "farinapanedifrumento": {"label": "Farina (pane di frumento)", "value": 0.42, "image": "farinapanedifrumento.png"},
           "farinapatata": {"label": "Farina (patata)", "value": 0.72, "image": "farinapatata.png"},
           "farinariso": {"label": "Farina (riso)", "value": 0.64, "image": "farinariso.png"},
           "farinasegale": {"label": "Farina (segale)", "value": 0.38, "image": "farinasegale.png"},
           "farinasemola": {"label": "Farina (semola)", "value": 0.74, "image": "farinasemola.png"},
           "farinastatiunitipertuttigliusi": {"label": "Farina (Stati Uniti per tutti gli usi)", "value": 0.42, "image": "farinastatiunitipertuttigliusi.png"},
           "farinatorta": {"label": "Farina (torta)", "value": 0.38, "image": "farinatorta.png"},
           "farinaukautoraccolta": {"label": "Farina (U.K. auto-raccolta)", "value": 0.47000000000000003, "image": "farinaukautoraccolta.png"},
           "farinadavenanoncotti": {"label": "Farina d'avena (non cotti)", "value": 0.34, "image": "farinadavenanoncotti.png"},
           "farinadigranturcocornflour": {"label": "Farina di granturco (cornflour)", "value": 0.64, "image": "farinadigranturcocornflour.png"},
           "farinadimaisblu": {"label": "Farina di mais blu", "value": 0.51, "image": "farinadimaisblu.png"},
           "fichiessiccato": {"label": "Fichi (essiccato)", "value": 0.7000000000000001, "image": "fichiessiccato.png"},
           "fioridigiglioditigre": {"label": "Fiori di giglio di tigre", "value": 0.17, "image": "fioridigiglioditigre.png"},
           "formaggicheddargrattugiato": {"label": "Formaggi (cheddar (grattugiato)", "value": 0.51, "image": "formaggicheddargrattugiato.png"},
           "formaggicolbygrattugiato": {"label": "Formaggi (Colby (grattugiato)", "value": 0.47000000000000003, "image": "formaggicolbygrattugiato.png"},
           "formaggicottage": {"label": "Formaggi (Cottage)", "value": 0.97, "image": "formaggicottage.png"},
           "formaggicrema": {"label": "Formaggi (crema)", "value": 1.02, "image": "formaggicrema.png"},
           "formaggijackgrattugiato": {"label": "Formaggi (jack (grattugiato)", "value": 0.55, "image": "formaggijackgrattugiato.png"},
           "formaggiparmigianograttugiato": {"label": "Formaggi (parmigiano grattugiato)", "value": 0.76, "image": "formaggiparmigianograttugiato.png"},
           "fragole": {"label": "Fragole", "value": 0.64, "image": "fragole.png"},
           "funghiafette": {"label": "Funghi (a fette)", "value": 0.28, "image": "funghiafette.png"},
           "funghicinesenero": {"label": "Funghi (cinese nero)", "value": 0.21, "image": "funghicinesenero.png"},
           "funghiintero": {"label": "Funghi (intero)", "value": 0.25, "image": "funghiintero.png"},
           "funghitagliato": {"label": "Funghi (tagliato)", "value": 0.32, "image": "funghitagliato.png"},
           "fungolegnoallorecchio": {"label": "Fungo (legno all'orecchio)", "value": 0.42, "image": "fungolegnoallorecchio.png"},
           "gelatina": {"label": "Gelatina", "value": 0.93, "image": "gelatina.png"},
           "germedigrano": {"label": "Germe di grano", "value": 0.53, "image": "germedigrano.png"},
           "germoglidibambu": {"label": "Germogli di bambù", "value": 1.1400000000000001, "image": "germoglidibambu.png"},
           "grahamcrackerbriciole": {"label": "Graham cracker briciole", "value": 0.38, "image": "grahamcrackerbriciole.png"},
           "granosaracenosemole": {"label": "Grano saraceno semole", "value": 0.72, "image": "granosaracenosemole.png"},
           "gumdrops": {"label": "Gumdrops", "value": 0.68, "image": "gumdrops.png"},
           "gummiorsi": {"label": "Gummi orsi", "value": 0.64, "image": "gummiorsi.png"},
           "kasha": {"label": "Kasha", "value": 0.72, "image": "kasha.png"},
           "lardo": {"label": "Lardo", "value": 0.76, "image": "lardo.png"},
           "latte": {"label": "Latte", "value": 1.032, "image": "latte.png"},
           "latteevaporato": {"label": "Latte (evaporato)", "value": 0.93, "image": "latteevaporato.png"},
           "latteinpolvere": {"label": "Latte (in polvere)", "value": 0.49, "image": "latteinpolvere.png"},
           "lenticchie": {"label": "Lenticchie", "value": 0.85, "image": "lenticchie.png"},
           "lievitoattivosecco": {"label": "Lievito (attivo secco)", "value": 1.23, "image": "lievitoattivosecco.png"},
           "lievitoinpolvere": {"label": "Lievito in polvere", "value": 0.76, "image": "lievitoinpolvere.png"},
           "maccheroninoncotti": {"label": "Maccheroni (non cotti)", "value": 0.49, "image": "maccheroninoncotti.png"},
           "maionese": {"label": "Maionese", "value": 0.93, "image": "maionese.png"},
           "mais": {"label": "mais", "value": 0.72, "image": "mais.png"},
           "mandorleintero": {"label": "Mandorle (intero)", "value": 0.72, "image": "mandorleintero.png"},
           "mandorleinpolvere": {"label": "Mandorle (inpolvere)", "value": 0.36, "image": "mandorleinpolvere.png"},
           "margarina": {"label": "Margarina", "value": 0.93, "image": "margarina.png"},
           "marshmallowpiccola": {"label": "Marshmallow (piccola)", "value": 0.21, "image": "marshmallowpiccola.png"},
           "melassa": {"label": "Melassa", "value": 1.48, "image": "melassa.png"},
           "meleafette": {"label": "Mele (a fette)", "value": 0.76, "image": "meleafette.png"},
           "meleessiccato": {"label": "Mele (essiccato)", "value": 0.38, "image": "meleessiccato.png"},
           "miele": {"label": "Miele", "value": 1.44, "image": "miele.png"},
           "noccioleintero": {"label": "Nocciole (intero)", "value": 0.72, "image": "noccioleintero.png"},
           "nocisgusciate": {"label": "Noci (sgusciate)", "value": 0.51, "image": "nocisgusciate.png"},
           "nocitritate": {"label": "Noci (tritate)", "value": 0.49, "image": "nocitritate.png"},
           "nocicomuniinpolvere": {"label": "Noci comuni (inpolvere)", "value": 0.36, "image": "nocicomuniinpolvere.png"},
           "nocidelbrasileintero": {"label": "Noci del Brasile (intero)", "value": 0.64, "image": "nocidelbrasileintero.png"},
           "nocidipecansgusciate": {"label": "Noci di pecan (sgusciate)", "value": 0.51, "image": "nocidipecansgusciate.png"},
           "nocidipecantagliato": {"label": "Noci di pecan (tagliato)", "value": 0.51, "image": "nocidipecantagliato.png"},
           "nocidipecaninpolvere": {"label": "Noci di pecan (inpolvere)", "value": 0.42, "image": "nocidipecaninpolvere.png"},
           "oliovegetale": {"label": "Olio (vegetale)", "value": 0.89, "image": "oliovegetale.png"},
           "oliodoliva": {"label": "Olio d'oliva", "value": 0.81, "image": "oliodoliva.png"},
           "olivetagliato": {"label": "Olive (tagliato)", "value": 0.76, "image": "olivetagliato.png"},
           "oreocookieschiacciato": {"label": "Oreo cookie (schiacciato)", "value": 0.51, "image": "oreocookieschiacciato.png"},
           "orzononcotti": {"label": "Orzo (non cotti)", "value": 0.78, "image": "orzononcotti.png"},
           "pangrattatoconfezionato": {"label": "Pangrattato (confezionato)", "value": 0.51, "image": "pangrattatoconfezionato.png"},
           "pangrattatofreschi": {"label": "Pangrattato (freschi)", "value": 0.25, "image": "pangrattatofreschi.png"},
           "pannaacida": {"label": "Panna acida", "value": 0.51, "image": "pannaacida.png"},
           "paprika": {"label": "Paprika", "value": 0.49, "image": "paprika.png"},
           "patatecottoadadini": {"label": "Patate (cotto a dadini)", "value": 0.85, "image": "patatecottoadadini.png"},
           "patatecrudoaffettato": {"label": "Patate (crudo affettato)", "value": 0.76, "image": "patatecrudoaffettato.png"},
           "patatepure": {"label": "Patate (purè)", "value": 0.89, "image": "patatepure.png"},
           "patatedolcicotti": {"label": "Patate dolci (cotti)", "value": 1.02, "image": "patatedolcicotti.png"},
           "patatedolcicruda": {"label": "Patate dolci (cruda)", "value": 0.76, "image": "patatedolcicruda.png"},
           "peanutstagliato": {"label": "Peanuts (tagliato)", "value": 0.68, "image": "peanutstagliato.png"},
           "pepebianco": {"label": "Pepe (bianco)", "value": 0.64, "image": "pepebianco.png"},
           "pepenero": {"label": "Pepe (nero)", "value": 0.5700000000000001, "image": "pepenero.png"},
           "pepepimento": {"label": "Pimento", "value": 0.42, "image": "pimento.png"},
           "peperonipeperoncinotritato": {"label": "Peperoni (peperoncino tritato)", "value": 0.72, "image": "peperonipeperoncinotritato.png"},
           "pignoliaspinoli": {"label": "Pignolias (pinoli)", "value": 0.53, "image": "pignoliaspinoli.png"},
           "pisellinoncotti": {"label": "Piselli (non cotti)", "value": 0.64, "image": "pisellinoncotti.png"},
           "pisellispezzati": {"label": "Piselli spezzati", "value": 0.85, "image": "pisellispezzati.png"},
           "pomodoritagliato": {"label": "Pomodori (tagliato)", "value": 0.68, "image": "pomodoritagliato.png"},
           "preparatoperpancake": {"label": "Preparato per pancake", "value": 0.55, "image": "preparatoperpancake.png"},
           "prezzemolofreschi": {"label": "Prezzemolo (freschi)", "value": 0.17, "image": "prezzemolofreschi.png"},
           "puredipatate": {"label": "Purè di patate", "value": 0.89, "image": "puredipatate.png"},
           "ribes": {"label": "Ribes", "value": 0.64, "image": "ribes.png"},
           "ricevapore": {"label": "Rice (vapore)", "value": 0.68, "image": "ricevapore.png"},
           "risocrudo": {"label": "Riso (crudo)", "value": 0.89, "image": "risocrudo.png"},
           "risononcottibasmati": {"label": "Riso (non cotti Basmati)", "value": 0.8300000000000001, "image": "risononcottibasmati.png"},
           "risoselvatico": {"label": "Riso (selvatico)", "value": 0.61, "image": "risoselvatico.png"},
           "sale": {"label": "Sale", "value": 1.02, "image": "sale.png"},
           "scalogni": {"label": "Scalogni", "value": 1.02, "image": "scalogni.png"},
           "scalognoverdecipolle": {"label": "Scalogno (verde cipolle)", "value": 0.21, "image": "scalognoverdecipolle.png"},
           "sciroppomais": {"label": "Sciroppo (mais)", "value": 1.48, "image": "sciroppomais.png"},
           "scorzadaranciagrattugiato": {"label": "Scorza d'arancia (grattugiato)", "value": 0.38, "image": "scorzadaranciagrattugiato.png"},
           "scorzadilimonegrattugiato": {"label": "Scorza di limone (grattugiato)", "value": 0.64, "image": "scorzadilimonegrattugiato.png"},
           "sedanosementi": {"label": "Sedano sementi", "value": 0.51, "image": "sedanosementi.png"},
           "semidipapavero": {"label": "Semi di papavero", "value": 0.5700000000000001, "image": "semidipapavero.png"},
           "semidisenape": {"label": "Semi di senape", "value": 0.64, "image": "semidisenape.png"},
           "semidisesamo": {"label": "Semi di sesamo", "value": 0.68, "image": "semidisesamo.png"},
           "senapepreparati": {"label": "Senape (preparati)", "value": 1.06, "image": "senapepreparati.png"},
           "senapepolvere": {"label": "Senape (in polvere)", "value": 0.49, "image": "senapepolvere.png"},
           "spaghettinoncotti": {"label": "Spaghetti (non cotti)", "value": 0.51, "image": "spaghettinoncotti.png"},
           "spinacicotti": {"label": "Spinaci (cotti)", "value": 0.76, "image": "spinacicotti.png"},
           "strutto": {"label": "Strutto", "value": 0.93, "image": "strutto.png"},
           "struttofuso": {"label": "Strutto (fuso)", "value": 0.89, "image": "struttofuso.png"},
           "te": {"label": "Tè", "value": 0.32, "image": "te.png"},
           "tonnoinscatola": {"label": "Tonno (in scatola)", "value": 0.85, "image": "tonnoinscatola.png"},
           "tortadibriciolefreschi": {"label": "Torta di briciole (freschi)", "value": 0.38, "image": "tortadibriciolefreschi.png"},
           "tuorliduovo": {"label": "Tuorli d'uovo", "value": 1.1400000000000001, "image": "tuorliduovo.png"},
           "uovasbattute": {"label": "Uova (sbattute)", "value": 0.97, "image": "uovasbattute.png"},
           "uvanoci": {"label": "Uva noci", "value": 0.51, "image": "uvanoci.png"},
           "uvasultanina": {"label": "Uva sultanina", "value": 0.64, "image": "uvasultanina.png"},
           "uvetta": {"label": "Uvetta", "value": 0.64, "image": "uvetta.png"},
           "wafervanigliaschiacciato": {"label": "Wafer vaniglia (schiacciato)", "value": 0.68, "image": "wafervanigliaschiacciato.png"},
           "zenzerocristallo": {"label": "Zenzero (cristallo)", "value": 1.02, "image": "zenzerocristallo.png"},
           "zenzerofresco": {"label": "Zenzero (fresco)", "value": 0.97, "image": "zenzerofresco.png"},
           "zenzeroinpolvere": {"label": "Zenzero (inpolvere)", "value": 0.51, "image": "zenzeroinpolvere.png"},
           "zuccacotti": {"label": "Zucca (cotti)", "value": 0.76, "image": "zuccacotti.png"},
           "zuccherodiricino": {"label": "Zucchero (di ricino)", "value": 0.81, "image": "zuccherodiricino.png"},
           "zuccherogranulato": {"label": "Zucchero (granulato)", "value": 0.81, "image": "zuccherogranulato.png"},
           "zuccheroinpolvere": {"label": "Zucchero (in polvere)", "value": 0.55, "image": "zuccheroinpolvere.png"},
           "zuccheromarrone": {"label": "Zucchero (marrone)", "value": 0.85, "image": "zuccheromarrone.png"},
           "zuccheropasticceria": {"label": "Zucchero (pasticceria)", "value": 0.55, "image": "zuccheropasticceria.png"}
        }


function onDeviceReady() {

}



function openDialog(elem, onclick, callback) {
   $.mobile.dialogHashKey = $.mobile.dialogHashKey.match(/\d+/) == null ? ($.mobile.dialogHashKey + 0) : $.mobile.dialogHashKey.replace(/\d+/, (parseInt($.mobile.dialogHashKey.match(/\d+/)[0]) + 1));
   if (!(elem instanceof jQuery))
   {
      elem = $(elem);
   }
   var parentPop = false;
   var title = elem.data("title") || "";
   var popupDialogObj = $('<div style="width: 100%;" data-role="popup" data-confirmed="yes" data-transition="pop" data-overlay-theme="a" data-theme="a" data-dismissible="true">' +
           (title.length > 0 ? '<div data-role="header" data-theme="a"><h1>' + title + '</h1></div>' : "") +
           '<div role="main" class="ui-content ui-page-theme-a"></div>')
           .appendTo($.mobile.pageContainer);
   popupDialogObj.find('.ui-content').append(elem.html());
   if (typeof onclick == "function") {
      var parent = this;
      popupDialogObj.find('[onclick]').bind("click", function(e) {
         onclick.apply(parent, [e, this])
      });
   }
   popupDialogObj.trigger('create');
   popupDialogObj.popup({
      history: true,
      positionTo: "window",
      afterclose: function(event, ui) {
         if (parentPop != false)
         {

            $.mobile.popup.active = parentPop;
         }
         $(event.target).remove();
         if (typeof callback == "function") {
            callback(this);
         }
      },
      create: function(event, ui) {
         if (typeof $.mobile.popup.active != "undefined")
         {
            parentPop = $.mobile.popup.active;
            $.mobile.popup.active = undefined;
         }
      }
   });
   popupDialogObj.popup('open');
}


var tplEngine = function(tpl, data) {
   tpl = tpl.trim();
   var re = /{{([^}}]+)?}}/g,
           code = 'var r=[];\n',
           cursor = 0, match;
   var add = function(line, js) {
      js ? code += 'r.push("' + data[line] + '");\n' :
              code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
   }
   var match;
   while (match = re.exec(tpl)) {
      add(tpl.slice(cursor, match.index));
      add(match[1], true); // <-- say that this is actually valid js
      cursor = match.index + match[0].length;
   }
   add(tpl.substr(cursor, tpl.length - cursor));
   code += 'return r.join("");'; // <-- return the result
   return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
}

function selectField(e, el)
{
   var carclass = {Peso: "fa fa-balance-scale", "Volume": "fa fa-tint", "Unità": "fa fa-clone"};
   var row = $(this);
   var sl = $(el).closest("li");
   var unit = sl.find(".lst_thumbicon").html();
   var cat = sl.prevAll('[data-role="list-divider"]').html();
   row.find('h2').html(cat);
   row.find('.lst_thumbicon i').attr('class', carclass[cat]);
   row.find('p').html(sl.find(".unitlabel").html() + " (" + unit + ")");
   sl.closest('[data-role="popup"]').popup("close");
   row.attr('data-value', unit);
}

function generateItems()
{
   var tplrow = $('#tplproducts_row').html();
   var tpl = $('#tplproducts').html();
   var rows = "";
   for (var x in items)
   {
      rows += TemplateEngine(tplrow, items[x]);
   }
   return tpl.replace('{{rows}}', rows);
}
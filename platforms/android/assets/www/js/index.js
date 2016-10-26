if ("cordova" in window)
{
   document.addEventListener('deviceready', function(e)
   {
      StatusBar.hide();
      if (typeof AndroidFullScreen !== 'undefined') {   // Fullscreen plugin exists ?
         function errorFunction(error) {
            console.error(error);
         }
         AndroidFullScreen.isSupported(AndroidFullScreen.immersiveMode, errorFunction);
      }
      onDeviceReady(e);
   }, false);
}
else
   document.addEventListener('DOMContentLoaded', onDeviceReady, false);

document.addEventListener("backbutton", function(e)
{
   var is_vis = $('[data-role="popup"]').parent().hasClass("ui-popup-active");
   if (!is_vis)
   {
      cp_clearOne();
   }
   else
      history.back();
}, false);


function XOR(a, b) {
   return (a || b) && !(a && b);
}

items = {
   "acciughe": {"label": "Acciughe", "value": 1.02, "image": "acciughe.png", "weight": "15 g"},
   "acqua": {"label": "Acqua", "value": 1, "image": "acqua.png", "weight": "1500 g"},
   "aglio": {"label": "Aglio", "value": 0.68, "image": "aglio.png", weight: "3 g"},
   "agliotritata": {"label": "Aglio (tritato)", "value": 0.64, "image": "agliotritata.png", weight: "1 g"},
   "albicoccheessiccato": {"label": "Albicocche (essiccate)", "value": 0.64, "image": "albicoccheessiccato.png", weight: "4 g"},
   "albume": {"label": "Albume (uovo)", "value": 0.93, "image": "albume.png", weight: "37.5 g"},
   "alici": {"label": "Alici", "value": 1.02, "image": "acciughe.png", weight: "15 g"},
   "anacardi": {"label": "Anacardi", "value": 0.47000000000000003, "image": "anacardioliotorrefatto.png", weight: "0.2 g"},
   "arachidi": {"label": "Arachidi", "value": 0.64, "image": "arachidioliotorrefatto.png", weight: "0.2 g"},
   "avenamacinata": {"label": "Avena (macinata)", "value": 0.68, "image": "avenamacinata.png", weight: "0.1 g"},
   "avenafiocchi": {"label": "Avena (fiocchi)", "value": 0.34, "image": "avenafiocchi.png", weight: "0.1 g"},
   "bananeafette": {"label": "Banane (a fette)", "value": 0.76, "image": "bananeafette.png", weight: "0.1 g"},
   "bananepurea": {"label": "Banane (purea)", "value": 0.97, "image": "bananepurea.png", weight: "1 g"},
   "basilicoessiccato": {"label": "Basilico (essiccato)", "value": 0.11, "image": "basilicoessiccato.png", weight: "0.08 g"},
   "bicarbonatodisodio": {"label": "Bicarbonato di sodio", "value": 0.87, "image": "bicarbonatodisodio.png", weight: "1 g"},
   "bucciadaranciacandita": {"label": "Buccia d'arancia candita", "value": 0.53, "image": "bucciadaranciacandita.png", weight: "0.01 g"},
   "burro": {"label": "Burro", "value": 0.97, "image": "burro.png", weight: "1 g"},
   "burrodiarachidi": {"label": "Burro di arachidi", "value": 0.76, "image": "burrodiarachidi.png", weight: "1 g"},
   "caffemacinato": {"label": "Caffè (macinato)", "value": 0.38, "image": "caffemacinato.png", weight: "1 g"},
   "caffeistantaneo": {"label": "Caffè (istantaneo)", "value": 0.23, "image": "caffeistantaneo.png", weight: "1 g"},
   "canditiscorzadilimone": {"label": "Canditi, scorza di limone", "value": 0.5700000000000001, "image": "canditiscorzadilimone.png", weight: "0.01 g"},
   "cannellapolvere": {"label": "Cannella (in polvere)", "value": 0.51, "image": "cannellapolvere.png", weight: "1 g"},
   "carnibovinecotti": {"label": "Carni bovine (cotti)", "value": 0.97, "image": "carnibovinecotti.png", weight: "1 g"},
   "carnibovinecruda": {"label": "Carni bovine (cruda)", "value": 0.93, "image": "carnibovinecruda.png", weight: "1 g"},
   "cavolfiore": {"label": "Cavolfiore", "value": 0.97, "image": "cavolfiore.png", weight: "1 g"},
   "cavolotriturato": {"label": "Cavolo (triturato)", "value": 1.44, "image": "cavolotriturato.png", weight: "1 g"},
   "cerealiricekrispies": {"label": "Cereali (Tipo Rice Krispies)", "value": 0.09, "image": "cerealiricekrispies.png", weight: "1 g"},
   "chiodidigarofanointeri": {"label": "Chiodi di garofano (interi)", "value": 0.38, "image": "chiodidigarofanointeri.png", weight: "1 g"},
   "chiodidigarofanoinpolvere": {"label": "Chiodi di garofano (in polvere)", "value": 0.4, "image": "chiodidigarofanoinpolvere.png", weight: "1 g"},
   "cioccolatocacaoinpolvere": {"label": "Cioccolato (cacao in polvere)", "value": 0.47000000000000003, "image": "cioccolatocacaoinpolvere.png", weight: "1 g"},
   "cioccolatofuso": {"label": "Cioccolato (fuso)", "value": 1.02, "image": "cioccolatofuso.png", weight: "1 g"},
   "cioccolatograttugiato": {"label": "Cioccolato (grattugiato)", "value": 0.42, "image": "cioccolatograttugiato.png", weight: "1 g"},
   "cioccolatoscaglie": {"label": "Cioccolato in scaglie", "value": 0.76, "image": "cioccolatoscaglie.png", weight: "1 g"},
   "cipollaaffettata": {"label": "Cipolla (affettata)", "value": 0.55, "image": "cipollaaffettata.png", weight: "1 g"},
   "cipollatritata": {"label": "Cipolla (tritata)", "value": 0.85, "image": "cipollatritata.png", weight: "1 g"},
   "coccotriturato": {"label": "Cocco (triturato)", "value": 0.32, "image": "coccotriturato.png", weight: "1 g"},
   "crackersbriciole": {"label": "Crackers in briciole", "value": 0.25, "image": "crackersbriciole.png", weight: "1 g"},
   "cranberry": {"label": "Cranberry", "value": 0.42, "image": "cranberry.png", weight: "1 g"},
   "cremadigrano": {"label": "Crema di grano", "value": 0.76, "image": "cremadigrano.png", weight: "1 g"},
   "cremaditartaro": {"label": "Crema di tartaro", "value": 0.64, "image": "cremaditartaro.png", weight: "1 g"},
   "crusca": {"label": "Crusca", "value": 0.23, "image": "crusca.png", weight: "1 g"},
   "curcumainpolvere": {"label": "Curcuma (in polvere)", "value": 0.59, "image": "curcumainpolvere.png", weight: "1 g"},
   "dattero": {"label": "Dattero (senza seme)", "value": 0.64, "image": "dattero.png", weight: "1 g"},
   "erbacipollinafrescotritato": {"label": "Erba cipollina (fresco tritato)", "value": 0.21, "image": "erbacipollinafrescotritato.png", weight: "1 g"},
   "erbacipollinasecchitritati": {"label": "Erba cipollina (secchi tritati)", "value": 0.03, "image": "erbacipollinasecchitritati.png", weight: "1 g"},
   "fagiolisecchi": {"label": "Fagioli (secchi)", "value": 0.85, "image": "fagiolisecchi.png", weight: "1 g"},
   "farina": {"label": "Farina", "value": 0.76, "image": "farina.png", weight: "1 g"},
   "farinadeafsmith": {"label": "Farina (Deaf Smith)", "value": 0.55, "image": "farinadeafsmith.png", weight: "1 g"},
   "farinagranointero": {"label": "Farina (grano intero)", "value": 0.55, "image": "farinagranointero.png", weight: "1 g"},
   "farinagranosaraceno": {"label": "Farina (grano saraceno)", "value": 0.72, "image": "farinagranosaraceno.png", weight: "1 g"},
   "farinalegume": {"label": "Farina (legume)", "value": 0.55, "image": "farinalegume.png", weight: "1 g"},
   "farinapanedifrumento": {"label": "Farina (pane di frumento)", "value": 0.42, "image": "farinapanedifrumento.png", weight: "1 g"},
   "farinapatata": {"label": "Farina (patata)", "value": 0.72, "image": "farinapatata.png", weight: "1 g"},
   "farinariso": {"label": "Farina (riso)", "value": 0.64, "image": "farinariso.png", weight: "1 g"},
   "farinasegale": {"label": "Farina (segale)", "value": 0.38, "image": "farinasegale.png", weight: "1 g"},
   "farinasemola": {"label": "Farina (semola)", "value": 0.74, "image": "farinasemola.png", weight: "1 g"},
   "farinastatiunitipertuttigliusi": {"label": "Farina (Stati Uniti per tutti gli usi)", "value": 0.42, "image": "farinastatiunitipertuttigliusi.png", weight: "1 g"},
   "farinatorta": {"label": "Farina (torta)", "value": 0.38, "image": "farinatorta.png", weight: "1 g"},
   "farinaukautoraccolta": {"label": "Farina (U.K. auto-raccolta)", "value": 0.47000000000000003, "image": "farinaukautoraccolta.png", weight: "1 g"},
   "farinadavenanoncotti": {"label": "Farina d'avena (non cotti)", "value": 0.34, "image": "farinadavenanoncotti.png", weight: "1 g"},
   "farinadigranturcocornflour": {"label": "Farina di granturco (cornflour)", "value": 0.64, "image": "farinadigranturcocornflour.png", weight: "1 g"},
   "farinadimaisblu": {"label": "Farina di mais blu", "value": 0.51, "image": "farinadimaisblu.png", weight: "1 g"},
   "fichiessiccato": {"label": "Fichi (essiccato)", "value": 0.7000000000000001, "image": "fichiessiccato.png", weight: "30 g"},
   "fioridigiglioditigre": {"label": "Fiori di giglio di tigre", "value": 0.17, "image": "fioridigiglioditigre.png", weight: "1 g"},
   "formaggicheddargrattugiato": {"label": "Formaggi (cheddar (grattugiato)", "value": 0.51, "image": "formaggicheddargrattugiato.png", weight: "1 g"},
   "formaggicolbygrattugiato": {"label": "Formaggi (Colby (grattugiato)", "value": 0.47000000000000003, "image": "formaggicolbygrattugiato.png", weight: "1 g"},
   "formaggicottage": {"label": "Formaggi (Cottage)", "value": 0.97, "image": "formaggicottage.png", weight: "1 g"},
   "formaggicrema": {"label": "Formaggi (crema)", "value": 1.02, "image": "formaggicrema.png", weight: "1 g"},
   "formaggijackgrattugiato": {"label": "Formaggi (jack (grattugiato)", "value": 0.55, "image": "formaggijackgrattugiato.png", weight: "1 g"},
   "formaggiparmigianograttugiato": {"label": "Formaggi (parmigiano grattugiato)", "value": 0.76, "image": "formaggiparmigianograttugiato.png", weight: "1 g"},
   "fragole": {"label": "Fragole", "value": 0.64, "image": "fragole.png", weight: "13.5 g"},
   "funghiafette": {"label": "Funghi (a fette)", "value": 0.28, "image": "funghiafette.png", weight: "1 g"},
   "funghicinesenero": {"label": "Funghi (cinese nero)", "value": 0.21, "image": "funghicinesenero.png", weight: "1 g"},
   "funghiintero": {"label": "Funghi (intero)", "value": 0.25, "image": "funghiintero.png", weight: "1 g"},
   "funghitagliato": {"label": "Funghi (tagliato)", "value": 0.32, "image": "funghitagliato.png", weight: "1 g"},
   "fungolegnoallorecchio": {"label": "Fungo (legno all'orecchio)", "value": 0.42, "image": "fungolegnoallorecchio.png", weight: "1 g"},
   "gelatina": {"label": "Gelatina", "value": 0.93, "image": "gelatina.png", weight: "1 g"},
   "germedigrano": {"label": "Germe di grano", "value": 0.53, "image": "germedigrano.png", weight: "1 g"},
   "germoglidibambu": {"label": "Germogli di bambù", "value": 1.1400000000000001, "image": "germoglidibambu.png", weight: "1 g"},
   "grahamcrackerbriciole": {"label": "Graham cracker briciole", "value": 0.38, "image": "grahamcrackerbriciole.png", weight: "1 g"},
   "granosaracenosemole": {"label": "Grano saraceno semole", "value": 0.72, "image": "granosaracenosemole.png", weight: "1 g"},
   "gumdrops": {"label": "Gumdrops", "value": 0.68, "image": "gumdrops.png", weight: "1 g"},
   "gummiorsi": {"label": "Gummi orsi", "value": 0.64, "image": "gummiorsi.png", weight: "1 g"},
   "kasha": {"label": "Kasha", "value": 0.72, "image": "kasha.png", weight: "1 g"},
   "lardo": {"label": "Lardo", "value": 0.76, "image": "lardo.png", weight: "1 g"},
   "latte": {"label": "Latte", "value": 1.032, "image": "latte.png", weight: "1000 ml"},
   "latteevaporato": {"label": "Latte (evaporato)", "value": 0.93, "image": "latteevaporato.png", weight: "1 g"},
   "latteinpolvere": {"label": "Latte (in polvere)", "value": 0.49, "image": "latteinpolvere.png", weight: "1 g"},
   "lenticchie": {"label": "Lenticchie", "value": 0.85, "image": "lenticchie.png", weight: "1 g"},
   "lievitoattivosecco": {"label": "Lievito (attivo secco)", "value": 1.23, "image": "lievitoattivosecco.png", weight: "1 g"},
   "lievitoinpolvere": {"label": "Lievito in polvere", "value": 0.76, "image": "lievitoinpolvere.png", weight: "1 g"},
   "maccheroninoncotti": {"label": "Maccheroni (non cotti)", "value": 0.49, "image": "maccheroninoncotti.png", weight: "1 g"},
   "maionese": {"label": "Maionese", "value": 0.93, "image": "maionese.png", weight: "1 g"},
   "mais": {"label": "mais", "value": 0.72, "image": "mais.png", weight: "1 g"},
   "mandorleintero": {"label": "Mandorle (intero)", "value": 0.72, "image": "mandorleintero.png", weight: "1 g"},
   "mandorleinpolvere": {"label": "Mandorle (inpolvere)", "value": 0.36, "image": "mandorleinpolvere.png", weight: "1 g"},
   "margarina": {"label": "Margarina", "value": 0.93, "image": "margarina.png", weight: "1 g"},
   "marshmallowpiccola": {"label": "Marshmallow (piccola)", "value": 0.21, "image": "marshmallowpiccola.png", weight: "1 g"},
   "melassa": {"label": "Melassa", "value": 1.48, "image": "melassa.png", weight: "1 g"},
   "meleafette": {"label": "Mele (a fette)", "value": 0.76, "image": "meleafette.png", weight: "1 g"},
   "meleessiccato": {"label": "Mele (essiccato)", "value": 0.38, "image": "meleessiccato.png", weight: "1 g"},
   "miele": {"label": "Miele", "value": 1.44, "image": "miele.png", weight: "1 g"},
   "noccioleintero": {"label": "Nocciole (intero)", "value": 0.72, "image": "noccioleintero.png", weight: "1 g"},
   "nocisgusciate": {"label": "Noci (sgusciate)", "value": 0.51, "image": "nocisgusciate.png", weight: "1 g"},
   "nocitritate": {"label": "Noci (tritate)", "value": 0.49, "image": "nocitritate.png", weight: "1 g"},
   "nocicomuniinpolvere": {"label": "Noci comuni (inpolvere)", "value": 0.36, "image": "nocicomuniinpolvere.png", weight: "1 g"},
   "nocidelbrasileintero": {"label": "Noci del Brasile (intero)", "value": 0.64, "image": "nocidelbrasileintero.png", weight: "1 g"},
   "nocidipecansgusciate": {"label": "Noci di pecan (sgusciate)", "value": 0.51, "image": "nocidipecansgusciate.png", weight: "1 g"},
   "nocidipecantagliato": {"label": "Noci di pecan (tagliato)", "value": 0.51, "image": "nocidipecantagliato.png", weight: "1 g"},
   "nocidipecaninpolvere": {"label": "Noci di pecan (inpolvere)", "value": 0.42, "image": "nocidipecaninpolvere.png", weight: "1 g"},
   "oliovegetale": {"label": "Olio (vegetale)", "value": 0.89, "image": "oliovegetale.png", weight: "1 g"},
   "oliodoliva": {"label": "Olio d'oliva", "value": 0.81, "image": "oliodoliva.png", weight: "1 g"},
   "olivetagliato": {"label": "Oliva (snocciolata)", "value": 0.76, "image": "olivetagliato.png", weight: "4 g"},
   "oreocookieschiacciato": {"label": "Oreo cookie (schiacciato)", "value": 0.51, "image": "oreocookieschiacciato.png", weight: "1 g"},
   "orzononcotti": {"label": "Orzo (non cotti)", "value": 0.78, "image": "orzononcotti.png", weight: "1 g"},
   "pangrattatoconfezionato": {"label": "Pangrattato (confezionato)", "value": 0.51, "image": "pangrattatoconfezionato.png", weight: "1 g"},
   "pangrattatofreschi": {"label": "Pangrattato (freschi)", "value": 0.25, "image": "pangrattatofreschi.png", weight: "1 g"},
   "pannaacida": {"label": "Panna acida", "value": 0.51, "image": "pannaacida.png", weight: "1 g"},
   "paprika": {"label": "Paprika", "value": 0.49, "image": "paprika.png", weight: "1 g"},
   "pastaalluovo": {"label": "Pasta all'uovo", "value": 0.38, "image": "eggpasta.png", weight: "1 g"},
   "patatecottoadadini": {"label": "Patate (cotto a dadini)", "value": 0.85, "image": "patatecottoadadini.png", weight: "1 g"},
   "patatecrudoaffettato": {"label": "Patate (crudo affettato)", "value": 0.76, "image": "patatecrudoaffettato.png", weight: "1 g"},
   "patatepure": {"label": "Patate (purè)", "value": 0.89, "image": "patatepure.png", weight: "1 g"},
   "patatedolcicotti": {"label": "Patate dolci (cotti)", "value": 1.02, "image": "patatedolcicotti.png", weight: "1 g"},
   "patatedolcicruda": {"label": "Patate dolci (cruda)", "value": 0.76, "image": "patatedolcicruda.png", weight: "1 g"},
   "peanutstagliato": {"label": "Peanuts (tagliato)", "value": 0.68, "image": "peanutstagliato.png", weight: "1 g"},
   "pepebianco": {"label": "Pepe (bianco)", "value": 0.64, "image": "pepebianco.png", weight: "1 g"},
   "pepenero": {"label": "Pepe (nero)", "value": 0.5700000000000001, "image": "pepenero.png", weight: "1 g"},
   "pepepimento": {"label": "Pimento", "value": 0.42, "image": "pimento.png", weight: "1 g"},
   "peperonipeperoncinotritato": {"label": "Peperoni (peperoncino tritato)", "value": 0.72, "image": "peperonipeperoncinotritato.png", weight: "1 g"},
   "pignoliaspinoli": {"label": "Pignolias (pinoli)", "value": 0.53, "image": "pignoliaspinoli.png", weight: "1 g"},
   "pisellinoncotti": {"label": "Piselli (non cotti)", "value": 0.64, "image": "pisellinoncotti.png", weight: "1 g"},
   "pisellispezzati": {"label": "Piselli spezzati", "value": 0.85, "image": "pisellispezzati.png", weight: "1 g"},
   "pomodoritagliato": {"label": "Pomodori (tagliato)", "value": 0.68, "image": "pomodoritagliato.png", weight: "1 g"},
   "preparatoperpancake": {"label": "Preparato per pancake", "value": 0.55, "image": "preparatoperpancake.png", weight: "1 g"},
   "prezzemolofreschi": {"label": "Prezzemolo (freschi)", "value": 0.17, "image": "prezzemolofreschi.png", weight: "1 g"},
   "puredipatate": {"label": "Purè di patate", "value": 0.89, "image": "puredipatate.png", weight: "1 g"},
   "ribes": {"label": "Ribes", "value": 0.64, "image": "ribes.png", weight: "1 g"},
   "ricevapore": {"label": "Rice (vapore)", "value": 0.68, "image": "ricevapore.png", weight: "1 g"},
   "risocrudo": {"label": "Riso (crudo)", "value": 0.89, "image": "risocrudo.png", weight: "1 g"},
   "risononcottibasmati": {"label": "Riso (non cotti Basmati)", "value": 0.8300000000000001, "image": "risononcottibasmati.png", weight: "1 g"},
   "risoselvatico": {"label": "Riso (selvatico)", "value": 0.61, "image": "risoselvatico.png", weight: "1 g"},
   "sale": {"label": "Sale", "value": 1.02, "image": "sale.png", weight: "1 g"},
   "scalogni": {"label": "Scalogni", "value": 1.02, "image": "scalogni.png", weight: "1 g"},
   "scalognoverdecipolle": {"label": "Scalogno (verde cipolle)", "value": 0.21, "image": "scalognoverdecipolle.png", weight: "1 g"},
   "sciroppomais": {"label": "Sciroppo (mais)", "value": 1.48, "image": "sciroppomais.png", weight: "1 g"},
   "scorzadaranciagrattugiato": {"label": "Scorza d'arancia (grattugiato)", "value": 0.38, "image": "scorzadaranciagrattugiato.png", weight: "1 g"},
   "scorzadilimonegrattugiato": {"label": "Scorza di limone (grattugiato)", "value": 0.64, "image": "scorzadilimonegrattugiato.png", weight: "1 g"},
   "sedanosementi": {"label": "Sedano sementi", "value": 0.51, "image": "sedanosementi.png", weight: "1 g"},
   "semidipapavero": {"label": "Semi di papavero", "value": 0.5700000000000001, "image": "semidipapavero.png", weight: "1 g"},
   "semidisenape": {"label": "Semi di senape", "value": 0.64, "image": "semidisenape.png", weight: "1 g"},
   "semidisesamo": {"label": "Semi di sesamo", "value": 0.68, "image": "semidisesamo.png", weight: "1 g"},
   "senapepreparati": {"label": "Senape (preparati)", "value": 1.06, "image": "senapepreparati.png", weight: "1 g"},
   "senapepolvere": {"label": "Senape (in polvere)", "value": 0.49, "image": "senapepolvere.png", weight: "1 g"},
   "spaghettinoncotti": {"label": "Spaghetti (non cotti)", "value": 0.51, "image": "spaghettinoncotti.png", weight: "1 g"},
   "spinacicotti": {"label": "Spinaci (cotti)", "value": 0.76, "image": "spinacicotti.png", weight: "1 g"},
   "strutto": {"label": "Strutto", "value": 0.93, "image": "strutto.png", weight: "1 g"},
   "struttofuso": {"label": "Strutto (fuso)", "value": 0.89, "image": "struttofuso.png", weight: "1 g"},
   "te": {"label": "Tè", "value": 0.32, "image": "te.png", weight: "1 g"},
   "tonnoinscatola": {"label": "Tonno (in scatola)", "value": 0.85, "image": "tonnoinscatola.png", weight: "1 g"},
   "tortadibriciolefreschi": {"label": "Torta di briciole (freschi)", "value": 0.38, "image": "tortadibriciolefreschi.png", weight: "1 g"},
   "tuorliduovo": {"label": "Tuorli d'uovo", "value": 1.1400000000000001, "image": "tuorliduovo.png", weight: "21 g"},
   "uovasbattute": {"label": "Uova (sbattute)", "value": 0.97, "image": "uovasbattute.png", weight: "58 g"},
   "uvanoci": {"label": "Uva noci", "value": 0.51, "image": "uvanoci.png", weight: "1 g"},
   "uvasultanina": {"label": "Uva sultanina", "value": 0.64, "image": "uvasultanina.png", weight: "1 g"},
   "uvetta": {"label": "Uvetta", "value": 0.64, "image": "uvetta.png", weight: "1 g"},
   "wafervanigliaschiacciato": {"label": "Wafer vaniglia (schiacciato)", "value": 0.68, "image": "wafervanigliaschiacciato.png", weight: "1 g"},
   "zenzerocristallo": {"label": "Zenzero (cristallo)", "value": 1.02, "image": "zenzerocristallo.png", weight: "1 g"},
   "zenzerofresco": {"label": "Zenzero (fresco)", "value": 0.97, "image": "zenzerofresco.png", weight: "1 g"},
   "zenzeroinpolvere": {"label": "Zenzero (inpolvere)", "value": 0.51, "image": "zenzeroinpolvere.png", weight: "1 g"},
   "zuccacotti": {"label": "Zucca (cotti)", "value": 0.76, "image": "zuccacotti.png", weight: "1 g"},
   "zuccherodiricino": {"label": "Zucchero (di ricino)", "value": 0.81, "image": "zuccherodiricino.png", weight: "1 g"},
   "zuccherogranulato": {"label": "Zucchero (granulato)", "value": 0.81, "image": "zuccherogranulato.png", weight: "1 g"},
   "zuccheroinpolvere": {"label": "Zucchero (in polvere)", "value": 0.55, "image": "zuccheroinpolvere.png", weight: "1 g"},
   "zuccheromarrone": {"label": "Zucchero (marrone)", "value": 0.85, "image": "zuccheromarrone.png", weight: "1 g"},
   "zuccheropasticceria": {"label": "Zucchero (pasticceria)", "value": 0.55, "image": "zuccheropasticceria.png"}
}

toconvert = ['g', 'mg', 'Kg', 'oz', 'lb', 'St', 'bc', 'tgt', 'qnt'];
from = null;
to = null;
coeff = 0;

var cp = null;
function onDeviceReady() {
   generateItems();
   cp = document.getElementsByClassName("code pipbody");
   $('.calcpad').on("click taphold", ".ui-btn", function(e)
   {
      e.preventDefault();
      e.stopPropagation();
      var content = this.textContent;
      switch (content)
      {
         case 'C':
            if (e.type == "taphold")
               cp_clearAll();
            else
               cp_clearOne();
            break;
         default:
            cp_insert(content);
            break;
      }
      return false;
   });

   math.createUnit({
      g: '1 ml',
      mg: '0.01 ml',
      Kg: '1000 ml',
      oz: '28.3495 ml',
      lb: '453.592 ml',
      St: '6350.288 ml',
      bc: '130 ml',
      tgt: '4.71239 ml',
      tsp: '1 teaspoon',
      tbsp: '1 tablespoon',
   },
           {
              override: true
           });

   selectUnits("tbsp", "g", 1);

}

function cp_clearAll()
{
   cp[0].innerHTML = 0;
   cp[1].innerHTML = 0;
   cp[0].style.transform = "";
   cp[1].style.transform = "";
}

function cp_clearOne()
{
   if (cp[0].innerHTML.length > 1)
      cp[0].innerHTML = cp[0].innerHTML.slice(0, -1);
   else
      cp[0].innerHTML = 0;
   cp_calc();
}

function cp_insert(char)
{
   var inhtml = cp[0].innerHTML;
   if (inhtml.length <= 10)
   {
      if (char == ',' && inhtml.match(/,/) != null)
         return;
      if (char != ',' && inhtml.length == 1 && inhtml == '0')
         cp[0].innerHTML = char;
      else
         cp[0].innerHTML += char;
      cp_calc();
   }
}

function cp_calc()
{
   //console.log(math.unit(parseFloat(cp[0].innerHTML.replace(',','.')), from).to(to).toNumber()+coeff);
   cp[1].innerHTML = math.format(math.eval(math.unit(parseFloat(cp[0].innerHTML.replace(',', '.')), from).to(to).toNumber() + coeff), {notation: 'auto', precision: "10", exponential: {lower: "1e-5", upper: "1e+10"}});
   for (var ix = 0; ix < 2; ix++)
   {
      var ln = cp[ix].innerHTML.length;
      if (ln > 11)
      {
         ln = 10 - (ln - 11);
         cp[ix].style.transform = "scaleX(0." + ln + ")";
      }
      else
         cp[ix].style.transform = "";
   }
}


function openDialog(elem, onclick, callback) {
   $.mobile.dialogHashKey = $.mobile.dialogHashKey.match(/\d+/) == null ? ($.mobile.dialogHashKey + 0) : $.mobile.dialogHashKey.replace(/\d+/, (parseInt($.mobile.dialogHashKey.match(/\d+/)[0]) + 1));
   if (!(elem instanceof jQuery))
   {
      elem = $(elem);
   }
   var parentPop = false;
   var title = elem.data("title") || "";
   var cache = elem.data("cache") || false;
   if (!cache || (cache && typeof elem.data("cached") == "undefined"))
   {
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
            if (!cache)
               $(event.target).remove();
            else
               elem.data("cached", popupDialogObj);

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
   else
   {
      elem.data("cached").popup('open');
   }
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
   var unit = sl.find(".lst_thumbicon").html().trim();
   var cat = sl.prevAll('[data-role="list-divider"]').html();
   row.find('h2').html(cat);
   row.find('.lst_thumbicon i').attr('class', carclass[cat]);
   row.find('p').html(sl.find(".unitlabel").html() + " (" + unit + ")");
   sl.closest('[data-role="popup"]').popup("close");
   row.attr('data-value', unit);
}

function selectProduct(e, el)
{
   var row = $(this);
   var sl = $(el).closest("li");
   var unit = sl.find("img.ui-thumbnail");
   var cat = sl.find('h2').html();
   row.find('.lst_thumbicon').replaceWith(unit);
   row.find('h2').html(cat);
   sl.closest('[data-role="popup"]').popup("close");
   row.attr('data-value', sl.attr('data-value'));
   row.attr('data-weight', sl.attr('data-weight'));
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
   $('#tplproducts').html(tpl.replace('{{rows}}', rows));
   return true;
}

function changeUnits()
{
   var els = $('[from][data-value],[to][data-value],[of][data-value]');
   if (els.length < 3)
      return openPopup("Seleziona le unità da convertire");
   var from = els.filter('[from]');
   var to = els.filter('[to]');
   if (from.attr('data-value') == to.attr('data-value'))
      return openPopup("Non puoi convertire la stessa misura");
   var labels = $('.codeinfo.pipbodyupper span');
   labels.eq(0).html(from.find('p').html());
   labels.eq(1).html(to.find('p').html());
   selectUnits(from.attr('data-value'), to.attr('data-value'), els.filter('[of]').attr('data-value'), els.filter('[of]').attr('data-weight'));
   $(this).closest('[data-role="popup"]').popup('close');
}

function selectUnits(from, to, of, weight)
{
   weight = weight || "1 g";
   if (XOR(toconvert.indexOf(from) != -1, toconvert.indexOf(to) != -1) & of != 1)
   {
      if (toconvert.indexOf(from) != -1)
         coeff = " * " + of;
      else
         coeff = " / " + of;
   }
   console.log(weight);
   if (from == "qnt" || to == "qnt")
   {
      math.createUnit({
         qnt: weight,
      },
              {
                 override: true
              });
   }
   window.from = from;
   window.to = to;
   cp_calc();

}

function openPopup(message, title)
{
   message = message || "";
   title = title || "Attenzione!";
   openDialog("<div data-title='" + title + "'>" + message + "<br><br><button onclick=\"javascript:(function(e, obj){ $(obj).closest('[data-role=popup]').popup('close'); })(event, this)\">OK!</button></div>")
}

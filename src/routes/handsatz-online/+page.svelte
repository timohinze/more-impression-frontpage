<script>
let inputs = {};


function inputs_auszahlen(){
    //reset inputs
    inputs = {};
	
    let elements = document.querySelectorAll('.felder input');

    for (let i of elements) {
    
    	var schrift = i.getAttribute("data-schrift")
    	var value = i.value;
    	
    	
    	// if undefined
    	if(	inputs[schrift] == undefined){
	    		inputs[schrift] = "";
    	}
    	
        //if the property has already been set, append the next matching schrift, otherwise just set the property to the schrift
        inputs[schrift] = inputs[schrift] === null ? value : inputs[schrift] + '' + value;   
             
    } 

 	console.log(inputs);

	//// count accurrence
	 character_count(inputs);
	
	
}

////// Zeichen zählen ///////

///TESt DATEN
let characterCount = {}
characterCount["636"] = {}; // New Object in Array				 





//////////////////

function character_count(inputs){

for (var item in inputs) {
      if(characterCount.hasOwnProperty(item)){	//neu
          characterCount[item]["zeichen"] = []; // New Object in Array		////oder noch nichtß???
          characterCount[item]["id"] = item;
      
          var value = inputs[item];
     
          //trimm whitespace		
            value = value.replace(/ /g,'');

      
          for (var i = 0; i < value.length; ++i) {	
              var zeichen = value.charAt(i);

              ///  escape……
            zeichen = escape(zeichen).replace(/[\u00A0-\u2666]/g, function(c) {
                return '&#'+c.charCodeAt(0)+';';
            });

            var counts = characterCount[item]["zeichen"] || {};
            counts[zeichen] = (counts[zeichen] || 0) + 1;	    
            characterCount[item]["zeichen"] = counts;	
        }
    }

             console.log(characterCount);
}
  berechnung_starten(characterCount);
}

////// Zeichen zählen Ende ///////

// let schriften_geladen = [
//     {
//         schrift: "arial",
//         zeichen: 
//             [
//           {
//             "zeichen": "A",
//             "anzahl": 7
//           },
//           {
//             "zeichen": "z",
//             "anzahl": 10
//           },
//           {
//             "zeichen": "d",
//             "anzahl": 10
//           },
//           {
//             "zeichen": "d",
//             "anzahl": 10
//           }
//         ]
        
//     },
// {
//     schrift: "times",
//         zeichen: 
//             [
//           {
//             "zeichen": "x",
//             "anzahl": 7
//           },
//           {
//             "zeichen": "o",
//             "anzahl": 7
//           },
//           {
//             "zeichen": "C",
//             "anzahl": 10
//           },
//           {
//             "zeichen": "b",
//             "anzahl": 5
//           }
//         ]
// }
//  ]


 let schriften_geladen  = {
    "248": {},
    "249": {},
    "292": {},
    "299": {},
    "335": {},
    "337": {},
    "617": {},
    "623": {},
    "628": {},
    "632": {},
    "633": {},
    "634": {},
    "635": {},
    "636": {
        "zeichen": {
            "A": 1,
            "u": 4,
            "r": 8,
            "e": 10,
            "l": 4,
            "i": 6,
            "a": 10,
            "M": 1,
            "k": 2,
            "w": 2,
            "d": 2,
            "L": 1,
            "s": 5,
            "B": 1,
            "t": 5,
            "%23": 5,
            "h": 5,
            "n": 4,
            "o": 6,
            "v": 1,
            "y": 2,
            "m": 4,
            "p": 4,
            "c": 2,
            "-": 1,
            ".": 1
        },
        "id": "636"
    },
    "922": {},
    "923": {},
    "1699": {},
    "1988": {}
}

 
//////// Berechnung ///////

var berechnung = [];
var zu_viele = {};
var fehlend  = {};

function berechnung_starten(characterCount){

	// gehe durch alle geladenen Schriften
	for (var schrift_id in schriften_geladen) {    
		
		 berechnung[schrift_id] = {}; // New Object in Array				 
 		 berechnung[schrift_id]["zeichen"] = {}; // New Object in Array
 		 
 		 zu_viele[schrift_id] = {}; // New Object in Array				 
 		 zu_viele[schrift_id]["zeichen"] = {}; // New Object in Array






 		 /// gehe durch alle Zeichen in geladener Schrift
 		 for (var zeichen_id in schriften_geladen[schrift_id]["zeichen"]) {




	 		 
	//hier problem mit neuer wp version, weil keine leeren requests geladen werden mit Rest
// kann man das auch beim laden direkt lösen?
//  		 		if(Object.keys(characterCount[schrift_id]).length >0){
		 		if(Object.keys(characterCount[schrift_id]).length >0){

// 			if(Object.keys(characterCount[schrift_id]).length === 0 && characterCount[schrift_id].constructor === Object) {
 		 
	 		 
 		 	
 		 	// beinhaltet 'ausgezählte Zeichen' diese Schrift?
 		 	if(characterCount[schrift_id]){
 		 		
 		 		// beinhaltet 'ausgezählte Zeichen' dieser Schrift dieses Zeichen?
 		 		if(characterCount[schrift_id]["zeichen"].hasOwnProperty(zeichen_id)){	

	 		 		// Berechnung vornehmen
	 		 		berechnung[schrift_id]["zeichen"][zeichen_id] = (schriften_geladen[schrift_id]["zeichen"][zeichen_id]-characterCount[schrift_id]["zeichen"][zeichen_id]);
	 		 		
					// zu viele?
					if(schriften_geladen[schrift_id]["zeichen"][zeichen_id]-characterCount[schrift_id]["zeichen"][zeichen_id] < 0){
						zu_viele[schrift_id]["zeichen"][zeichen_id]=true;
						
/*
						console.log("zu viele genutze zeichen >>> ");
						console.log(zu_viele);						
*/
						
						berechnung[schrift_id]["zeichen"][zeichen_id] = "0";
					}
					
				}else
				{
					// beinhaltet 'ausgezählte Zeichen' dieser Schrift dieses Zeichen NICHT?
					// Wert auf Startwert stellen
					berechnung[schrift_id]["zeichen"][zeichen_id] = schriften_geladen[schrift_id]["zeichen"][zeichen_id];
				}
			}else{
				//characterCounr ist noch leer? dann Berechnung für Schrift mit den start-werten
				//um einen angangsanzeige der schrift machen zu können 	
				berechnung[schrift_id]["zeichen"][zeichen_id] = schriften_geladen[schrift_id]["zeichen"][zeichen_id];
			}
			
			
		} //problem
		
		
		} //for	'Zeichen'		
		
	} //for 'Schriften'
	
	
	
	///
	
	/// Überprüfung andersherum:	
	/// check fehlende zeichen in backend die im input genutzt werden:
		
	if(schriften_geladen.hasOwnProperty(schrift_id)){	

		for (schrift_id in characterCount) {
		fehlend[schrift_id] = {}; // New Object in Array				 
		fehlend[schrift_id]["zeichen"] = {}; // New Object in Array
		
		// gehe durch alle Zeichen in 'Character Count'
		for (zeichen_id in characterCount[schrift_id]["zeichen"]) {	
			///neu…
			if(schriften_geladen.hasOwnProperty(schrift_id)){	
				
				if (schriften_geladen[schrift_id]["zeichen"][zeichen_id] === undefined || schriften_geladen[schrift_id]["zeichen"][zeichen_id] === null) {	
					console.log("nicht vorhanden -->"+zeichen_id );
					fehlend[schrift_id]["zeichen"][zeichen_id]=true;
				}
			}
		}
	}	
}

console.log("---- Berechnung:")
console.log("fehlend:")
console.log(fehlend)

console.log("zu viele:")
console.log(zu_viele)

console.log("berechnung");
console.log(berechnung)

console.log("---------")

// schrift_anzeige_zeichnen(input_aktuell)

// fehler_anzeigen_am_input(fehlend, zu_viele);

};
////////// Ende Berechnung ///////


let input_aktuell=636;

</script>

<div class="felder">
    <input id="0" type="text"  class="636" data-schrift="636" name="zeile[0]" maxlength="18" on:input={inputs_auszahlen}>
    <input id="1" type="text"  class="636" data-schrift="636" name="zeile[1]" maxlength="18" on:input={inputs_auszahlen}>
</div>

<h2>Berechnung</h2>

{#if berechnung.hasOwnProperty(input_aktuell) }

{#if berechnung[input_aktuell].hasOwnProperty("zeichen") }
<ul>
	{#each Object.entries(berechnung[input_aktuell]["zeichen"]) as  zeichen }
		<li>
            {zeichen}
		</li>
	{/each}
</ul>
{/if}
{/if}

<h2>fehlend</h2>
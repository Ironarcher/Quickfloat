var adns = []; //list of itemids
var ddns = []; //list of dids
var mdns = []; //list of listingids
window.alert("float.js active");
loadIDs()
//loadValues()
/*document.onkeydown = function() {
	window.alert("keydown");
  getSteamID();
};*/
function injectValues()
{
  var link_elements = document.getElementsByClassName("market_listing_item_name_block");
  var i;
  for (i = 0; i < link_elements.length; i++) {
	  var idval = arra[i]; //go through each item id
	  if(idval == 0) {
		  //RIPPERINO ITEM HAS BEEN SOLD, dont inject anything
	  } else {
		  var link =link_elements[i].childNodes[1]; //finds all labels for each weapon ie. AK-47 | Redline (Field-Tested) 
			var floatval = IDtoFloat(idval);
		  link.textContent=link.textContent.substr(0, link.textContent.length-1)+": " + floatval + ")"; //inject result into label ie. AK-47 | Redline (Field-Tested: 5724994217) 
		  /*var id = link.substring(86,96) fyi second parameter is length not ending position */
	  }
  }
}
function getIndicesOf(searchStr, str, caseSensitive) {
    var startIndex = 0, searchStrLen = searchStr.length;
    var index, indices = [];
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}
//market_listing_price market_listing_price_with_fee
function loadIDs()
{
	/*
	var link_elements = document.getElementsByClassName("market_listing_buy_button");
	var i;
	for (i = 0; i < link_elements.length; i++) {
		if(link_elements[i].childElementCount > 0) {
			var link =link_elements[i].childNodes[1].getAttribute("href").substr(72, 10); //gets item id from market purchase button
			arra.push(link);
		} else {
			arra.push(0); //market purchase button does not exist, despite there being a class instance. this occurs when the item has been sold and has that "sold!" message
		}
	}*/
	adns = [];
	ddns = [];
	mdns = [];
	var i; //SCRAPER CODE, FIND A, D, and M VALUES FOR EACH ITEM LISTED ON THE PAGE AND STORES THEM INTO ARRAYS
	var j;
	var k;
	var l;
		var scripts = document.all[0].getElementsByTagName("script");
		//window.alert(scripts.length + " scripts found!");
		for (i = 0; i < scripts.length; i++) {
			//var j = link_elements[i].getAttribute("href");
			//window.alert(j);
			if(scripts[i].innerText.indexOf("+csgo_econ_action_previe") > -1) { //finds correct script with item ids
				var locs = getIndicesOf('{"listingid":', scripts[i].innerText, true);
				for (j = 0; j < locs.length; j++) {
					mdns.push(scripts[i].innerText.substr(locs[j]+14, 16)); //find m value in javascript for each item
				}
				var locs2 = getIndicesOf('%listingid%A%assetid%', scripts[i].innerText, true);
				for (k = 0; k < locs.length; k++) {
					ddns.push(scripts[i].innerText.substr(locs2[k]+22, 19)); //find d value in javascript for each item
				}
				var locs3 = getIndicesOf('"id":', scripts[i].innerText, true);
				for (l = 0; l < locs.length; l++) {// side note: there is a second set of times id occurs in the oreder 
												   //1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10, making the second set of 10 redundant
					adns.push(scripts[i].innerText.substr(locs3[l]+6, 10)); //find itemid value in javascript for each item, the (a) value
				}
				//window.alert("DONE");
			}

		}
}
function ADMtoFloat(adn, ddn, mdn)
{
	  /*var steamid = "76561198035650073";
      var apikey = "81BE437FCC36A11081AECEBAF06EB91A";
      var searchUrl = 'http://api.steampowered.com/IEconItems_730/GetPlayerItems/v0001/?key=' + apikey + '&SteamID=' + steamid;
      var x = new XMLHttpRequest();
      x.open('GET', searchUrl);
      x.responseType = 'json';
	  window.alert(link); */
	  return idn;
}

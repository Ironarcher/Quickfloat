
document.addEventListener('DOMContentLoaded', function() {
		var scripts = document.getElementsByTagName("script");
		window.alert(scripts.length + " scripts found!");
		for (i = 0; i < scripts.length; i++) {
			//var j = link_elements[i].getAttribute("href");
			//window.alert(j);
			window.alert(scripts[i].innerHTML);
		}
});

function getSteamID()
{
  var link_elements = document.getElementsByClassName("popup_menu_item");
  var i;
  for (i = 0; i < link_elements.length; i++) {
      var link =link_elements[i].getAttribute("href");
      var id = link.substring(86,96)
      var steamid = "76561198035650073";
      var apikey = "81BE437FCC36A11081AECEBAF06EB91A";
      var searchUrl = 'http://api.steampowered.com/IEconItems_730/GetPlayerItems/v0001/?key=' + apikey + '&SteamID=' + steamid;
      var x = new XMLHttpRequest();
      x.open('GET', searchUrl);
      x.responseType = 'json';
  }
}
/*
 *  =====================================================================
 *                      *** FAZchannelTV Software ***
 *  =====================================================================
 *  Important   : Use This Code Free. Not Delete Author Credits
 *  Development : 25, August, 2015
 *  Update      : 29, June, 2020
 *  Version     : 9.8
 *  Name        : FAZchannelTV Player ®
 *  Description : Global function framework
 *  Website     : https://www.fazchanneltv.com
 *  Download    : https://dl.dropboxusercontent.com/s/qimju40n14p2qpe/fazchanneltv-main-head.js
 *  =====================================================================
 *  Author      : Fabian Zuñiga Educafinanciera
 *  Author URL  : https://fabianzunigaeducafinanciera.blogspot.com
 *  =====================================================================
 *  License     : This free Global function framework js is licensed under the Creative Commons Attribution 3.0 Unported License, which permits both personal and commercial use.
                  However, to satisfy the 'attribution' clause of the license, you are required to keep the head links intact which provides due credit to its authors.
 *  License URL : https://creativecommons.org/licenses/by/3.0/
 *  =====================================================================
 *  Notice      : FAZchannelTV, FAZchannelTV Player, FAZchannelTV Live, their respective logos, "FAZchannelTV Software," and the F83 POWER trade dress as well as corporate and
                  product identity used herein, are trademarks of FAZchannelTV and may not be used without permission.
                  FAZchannelTV and F83 POWER are registered trademarks of FAZchannelTV Social Network Inc., 100 N.E. Adams, Peoria IL 61629.
 *  =====================================================================
 *   © FAZchannelTV Software Industry, S.A 2015-2020 All Rights Reserved
 *  =====================================================================
*/

/*
    var same_hostname = false;
    try {
        same_hostname = (top.location.hostname === self.location.hostname);
    } catch (error) {}
    if (self != top && !same_hostname) {
        try {top.location.replace(self.location.href);} catch (e) {console.error(e);}
        setTimeout(function() {
            window.DB_FRAME_BUST = true;
            var frameBustImg = "https://cfl.dropboxstatic.com/static/images/logo-vflL7Ces6.png";
            document.body.innerHTML = ("<img src='" + frameBustImg + "' id='frame-bust-image' />");
            document.getElementById('frame-bust-image').addEventListener('click', function(evt) {
                top.location.href = window.location.href;
            });
        }, 1);
    };
*/

  window.addEventListener('resize', ons);
  function ons(){
    let players=Array.prototype.slice.call( document.getElementsByClassName('iframeLive3'));
    players.forEach(function(player) {
      let wdt=player.offsetWidth/1.77;
      player.style.height=(wdt+'px');
      player.style.border='5px dotted #292929';
    });
  };
  ons();

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var stream=getParameter('stream');
  function channelSwitch(){
    switch(stream){

      case '0001':
        title="FAZchannelTV"; //Zapping Music
        option="1";
        type="video";
        source="aHR0cHM6Ly96bWxpdmUuemFwcGluZ3R2LmNvbS96bS1mcmVlL3ptLnNtaWwvcGxheWxpc3QubTN1OA==";
        site="www.channelfight.com";
        break;

      case '0002':
        title="TC Mi Canal";
        option="1";
        type="video";
        source="Ly9tZHN0cm0uY29tL2xpdmUtc3RyZWFtLXBsYXlsaXN0LzVmZGQxNGUyYWU0ZGNjMDZlYmY3NTQ2ZS5tM3U4";
        site="www.tctelevision.com";
        break;

      case '0003':
        title="Locomotion TV";
        option="1";
        type="video";
        source="aHR0cDovL2xvY29tb3Rpb250di5jb20vZW52aXZvL2xvY29fY2gvc3RyZWFtLm0zdTg=";
        site="locomotiontv.com";
        break;

      case '0004':
        title="RT Noticias";
        option="1";
        type="video";
        source="aHR0cHM6Ly9ydC1lc3AtZ2Quc2VjdXJlMi5mb290cHJpbnQubmV0LzExMDJfNDAwS2IubTN1OA==";
        site="actualidad.rt.com";
        break;

      case '0005':
        title="Latinos UP";
        option="1";
        type="video";
        source="aHR0cHM6Ly9wYW5lbC5zdHJlYW1pbmd0di1tZWRpYWNwLm9ubGluZToxOTM2LzgwNDQvODA0NC9wbGF5bGlzdC5tM3U4";
        site="www.latinosuptv.com"; //www.flixtube.me
        break;

      case '0006':
        title="Canal CMB Television";
        option="1";
        type="video";
        source="aHR0cHM6Ly9saXZlaW5nZXN0YTExOC5jZG5tZWRpYS50di9iZXRoZXNkYWxpdmUvc21pbDpsaXZlLnNtaWwvcGxheWxpc3QubTN1OA==";
        site="www.cmbcolombia.tv";
        break;

      case '0007':
        title="PSC Televisión";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OTViODU0MTBhMTUxLnN0cmVhbWxvY2submV0LzgwNjgvODA2OC9wbGF5bGlzdC5tM3U4";
        site="psctelevision.com";
        break;

      case '0008':
        title="Ranchenato TV";
        option="1";
        type="video";
        source="aHR0cDovLzY2LjI0MC4yMzYuMjU6MTkzNi9yYW5jaGVuYXRvL3NtaWw6cmFuY2hlbmF0by5zbWlsL3BsYXlsaXN0Lm0zdTg=";
        site="www.ranchenatotv.co";
        break;

      case '0009':
        title="Mi LLano TV";
        option="1";
        type="frame";
        source="Ly9wbGF5ZXIuYW1lbGJhc29sdWNpb25lcy5jby9taWxsYW5vdHY=";
        site="www.millanotv.co";
        break;

      case '0010':
        title="Suram TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly81YjMwNTBiYjFiMmQ4LnN0cmVhbWxvY2submV0L3N1cmFtdHYvc3VyYW10di9wbGF5bGlzdC5tM3U4";
        site="www.suram.com.co";
        break;

      case '0011':
        title="TDI Colombia";
        option="1";
        type="frame";
        source="Ly9wbGF5ZXIuYW1lbGJhc29sdWNpb25lcy5jby90ZGljb2xvbWJpYQ==";
        site="www.tdicolombia.com.co";
        break;

      case '0012':
        title="Vision Dorada";
        option="1";
        type="video";
        source="aHR0cHM6Ly9tb3ZpbC5lamVzZXJ2ZXIuY29tL2xpdmUvdmlzaW9uZG9yYWRhLm0zdTg=";
        site="www.canalvisiondorada.com.co";
        break;

      case '0013':
        title="Dubai Zaman";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kbWlmZnRodmxsLmNkbi5tYW5nb21vbG8uY29tL2R1YmFpemFtYW4vc21pbDpkdWJhaXphbWFuLnN0cmVhbS5zbWlsL3BsYXlsaXN0Lm0zdTg=";
        site="www.awaan.ae/live/32/Dubai-Zaman";
        break;

      case '0014':
        title="Telepacifico";
        option="1";
        type="frame";
        source="Ly9wbGF5ZXIuY2RuLmxvZ2ljaWRlYXMubWVkaWEvZW1iZWQvTEkyOWE2MmZhMQ==";
        site="telepacifico.com";
        break;

      case '0015':
        title="Top Latino";
        option="1";
        type="video";
        source="aHR0cHM6Ly81Y2VmY2JmNThiYTJlLnN0cmVhbWxvY2submV0L3RsdHZ3ZWIvdGx0dndlYi5zdHJlYW0vY2h1bmtsaXN0Lm0zdTg=";
        site="toplatino.net";
        break;

      case '0016':
        title="DW";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kd3N0cmVhbTMtbGguYWthbWFpaGQubmV0L2kvZHdzdHJlYW0zX2xpdmVAMTI0NDA5L2luZGV4XzJfYXYtcC5tM3U4P3NkPTEwJnJlYmFzZT1vbg==";
        site="www.dw.com";
        break;

      case '0017':
        title="Canal C Cali";
        option="1";
        type="video";
        source="aHR0cHM6Ly9jbG91ZDIuc3RyZWFtaW5nbGl2ZWhkLmNvbToxOTM2LzgxMDQvODEwNC9wbGF5bGlzdC5tM3U4";
        site="canalccali.co";
        break;

      case '0018':
        title="Bloomberg";
        option="1";
        type="video";
        source="aHR0cHM6Ly9saXZlcHJvZGV1d2VzdC5ha2FtYWl6ZWQubmV0L2V1MS9DaGFubmVsLUVVVFZxdnMtQVdTLWlyZWxhbmQtMS9Tb3VyY2UtRVVUVnF2cy0xMDAwLTFfbGl2ZS5tM3U4";
        site="www.bloomberg.com/live";
        break;

      case '0019':
        title="La 1 España";
        option="1";
        type="video";
        source="aHR0cHM6Ly9ydHZlbGl2ZXN0cmVhbS5ha2FtYWl6ZWQubmV0L2xhMV9kdnIubTN1OA==";
        site="www.rtve.es/directo/la-1";
        break;

      case '0020':
        title="La Estacion TV";
        option="1";
        type="video";
        source="aHR0cDovL3VubGltaXRlZDEtdXMuZHBzLmxpdmUvZXN0YWNpb250di9lc3RhY2lvbnR2LnNtaWwvZXN0YWNpb250di9saXZlc3RyZWFtMy9jaHVua3MubTN1OA==";
        site="www.estaciontv.cl/site";
        break;

      case '0021':
        title="Retro Plus TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OWYyMzU0YzA1OTYxLnN0cmVhbWxvY2submV0OjE0NDMvcmV0cm9wbHVzdHYvX2RlZmluc3RfL3JldHJvcGx1c3R2L3BsYXlsaXN0Lm0zdTg=";
        site="retroplustv.com";
        break;

      case '0022':
        title="LTV Honduras";
        option="1";
        type="video";
        source="aHR0cHM6Ly81ZDU5N2JmY2VlMjg1LnN0cmVhbWxvY2submV0L2x0di9sdHYvcGxheWxpc3QubTN1OA==";
        site="ltv.hn";
        break;

      case '0023':
        title="Dios Te Ve HD";
        option="1";
        type="video";
        source="aHR0cHM6Ly9lbWlzb3Jhcy5objo4MDgxL2Rpb3N0ZXZldHYvdHJhY2tzLXYxYTEvbW9uby5tM3U4";
        site="www.diosteve.org";
        break;

      case '0024':
        title="Dios Te Ve Kids";
        option="1";
        type="video";
        source="aHR0cHM6Ly9yZXByb2R1Y3Rvci5sYXRpbi5teC9sYXRpbi9EaW9zL3BsYXlsaXN0Lm0zdTg=";
        site="www.diosteve.org";
        break;

      case '0025':
        title="Canal 10 Cancun";
        option="1";
        type="video";
        source="aHR0cHM6Ly93d3cuY2FuYWwxMC50di9saXZlL3R2bGl2ZTEvcGxheWxpc3QubTN1OA==";
        site="www.canal10.tv";
        break;

      case '0026':
        title="Olympic Channel";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kYWkuZ29vZ2xlLmNvbS9saW5lYXIvaGxzL2V2ZW50L29uTHYyOVN1U1dLVUFyeV9aN2gtUWcvbWFzdGVyLm0zdTg=";
        site="www.olympicchannel.com";
        break;

      case '0027':
        title="Canal Once";
        option="1";
        type="video";
        source="aHR0cHM6Ly9saXZlMi5jYW5hbG9uY2VsaXZlLnR2L2xpdmVwa2dyMi9zbWlsOmludGVybmFjaW9uYWwuc21pbC9wbGF5bGlzdC5tM3U4";
        site="canalonce.mx";
        break;

      case '0028':
        title="3 ABN Kids";
        option="1";
        type="video";
        source="aHR0cHM6Ly9tb2lwdHZobHMtaS5ha2FtYWloZC5uZXQvaGxzL2xpdmUvNjUyMzE4L3NlY3VyZS9tYXN0ZXIubTN1OA==";
        site="3abn.org/all-streams/kids.html";
        break;

      case '0029':
        title="Max TV Online";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OWMzYzdiZGExNWY0LnN0cmVhbWxvY2submV0OjQ0NC9tYXh0dm9ubGluZS9zbWlsOm1heHR2b25saW5lLnNtaWwvcGxheWxpc3QubTN1OA==";
        site="maxtvonline.com";
        break;

      case '0030':
        title="Canal Uno Ecuador";
        option="1";
        type="video";
        source="aHR0cDovLzE3My4yMTIuMjQ3Ljk5L2hscy90dmVjMS5tM3U4";
        site="www.canal1tv.com";
        break;

      case '0031':
        title="Canela TV";
        option="1";
        type="video";
        source="aHR0cDovL2lubGl2ZXNlcnZlci5jb206MTkzNS84MDc0LzgwNzQvcGxheWxpc3QubTN1OA==";
        site="www.canelatv.com";
        break;

      case '0032':
        title="Teleamazonas";
        option="1";
        type="video";
        source="aHR0cDovLzE3My4yMTIuMjQ3Ljk5L2hscy90dmVjNC5tM3U4";
        site="www.teleamazonas.com";
        break;

      case '0033':
        title="Ecuavisa";
        option="1";
        type="video";
        source="Ly8xNzMuMjEyLjI0Ny45OS9obHMvdHZlYzIubTN1OA==";
        site="www.ecuavisa.com";
        break;

      case '0034':
        title="Ecotel TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly81YjM4Y2U3MWYxZjAwLnN0cmVhbWxvY2submV0OjQ0My84MzQ0LzgzNDQvcGxheWxpc3QubTN1OA==";
        site="www.ecotel.tv";
        break;

      case '0035':
        title="UCSG TV";
        option="1";
        type="video";
        source="aHR0cDovL2VjdWFzdHJlYW1oZC5jb206MTkzNS9VQ1NHVFZtb3ZpbGVzL1VDU0dUVm1vdmlsZXMvcGxheWxpc3QubTN1OA==";
        site="ucsgrtv.com";
        break;

      case '0036':
        title="RTS";
        option="1";
        type="video";
        source="aHR0cDovLzE3My4yMTIuMjQ3Ljk5L2hscy90dmVjMy5tM3U4";
        site="www.rts.com.ec";
        break;

      case '0037':
        title="Bolovia TV 7.1";
        option="1";
        type="video";
        source="aHR0cDovL2JvbGl2aWF0djEuc3JmbXMuY29tOjU3MzUvbGl2ZS9saXZlc3RyZWFtL3BsYXlsaXN0Lm0zdTg=";
        site="www.boliviatv.bo";
        break;

      case '0038':
        title="Bolovia TV 7.2";
        option="1";
        type="video";
        source="aHR0cDovL2J0dmJvbGl2aWF0di5zcmZtcy5jb206NjU2OC9saXZlL2xpdmVzdHJlYW0vcGxheWxpc3QubTN1OA==";
        site="www.boliviatv.bo";
        break;

      case '0039':
        title="RTP Bolivia";
        option="1";
        type="video";
        source="aHR0cDovLzEzNi4yNDMuMy43MDoxOTM1L1J0cEJvbGl2aWEvUnRwQm9saXZpYS9wbGF5bGlzdC5tM3U4";
        site="www.rtpbolivia.com.bo";
        break;

      case '0040':
        title="Canal 9 Litoral";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OTc1ZTA2YTFmMjkyLnN0cmVhbWxvY2submV0OjQ0NDMvY2FuYWw5aGQvY2FuYWw5aGRfbWVkL3BsYXlsaXN0Lm0zdTg=";
        site="www.canal9litoral.tv";
        break;

      case '0041':
        title="LevanteTV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9saXZlLWVkZ2UtYmhzLTEuY2RuLmVuZXRyZXMubmV0L0MyRjZDQkI2N0U1QjREMDhBMTZDRTVGRTY3QUJDRUM5MDIzL2xldmFudGUvaW5kZXgubTN1OA==";
        site="www.levantetv.es";
        break;

      case '0042':
        title="Cosmovision TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly92aWRlby5jb3Ntb3Zpc2lvbi50di9saXZlL3NkXzcyMHAyNjI4a2JzL2luZGV4Lm0zdTg=";
        site="www.cosmovision.tv";
        break;

      case '0043':
        title="Pax TV";
        option="1";
        type="video";
        source="aHR0cDovL2QyZnhyZmJpZWR6MXRtLmNsb3VkZnJvbnQubmV0L2xpdmVwYXh0di9zbWlsOlBDLnNtaWwvcGxheWxpc3QubTN1OA==";
        site="paxtvmovil.org";
        break;

      case '0044':
        title="Radio Television Marti";
        option="1";
        type="video";
        source="aHR0cHM6Ly9vY2Jpbmdlc3QtaS5ha2FtYWloZC5uZXQvZGFzaC9saXZlLzY3ODc1Mi9EQVNIX09DQi1UVk1DMS9tYW5pZmVzdC5tcGQ=";
        site="www.radiotelevisionmarti.com";
        break;

      case '0045':
        title="America Stereo TV Quito";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OWMzYzdiZGExNWY0LnN0cmVhbWxvY2submV0OjQ0NC9yYWRpb2FtZXJpY2FxdWl0by9zbWlsOnJhZGlvYW1lcmljYXF1aXRvLnNtaWwvcGxheWxpc3QubTN1OA==";
        site="www.americaestereo.com";
        break;

      case '0046':
        title="Canal NET TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly91bmxpbWl0ZWQxLXVzLmRwcy5saXZlL25ldHR2L25ldHR2LnNtaWwvbmV0dHYvbGl2ZXN0cmVhbTEvcGxheWxpc3QubTN1OA==";
        site="www.canalnet.tv";
        break;

      case '0047':
        title="America Stereo TV Guayaquil";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OWMzYzdiZGExNWY0LnN0cmVhbWxvY2submV0OjQ0NC9yYWRpb2FtZXJpY2FndWF5YXF1aWwvc21pbDpyYWRpb2FtZXJpY2FndWF5YXF1aWwuc21pbC9wbGF5bGlzdC5tM3U4";
        site="www.americaestereo.com";
        break;

      case '0048':
        title="America Stereo TV Ibarra";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OWMzYzdiZGExNWY0LnN0cmVhbWxvY2submV0OjQ0NC9yYWRpb2FtZXJpY2FpYmFycmEvc21pbDpyYWRpb2FtZXJpY2FpYmFycmEuc21pbC9wbGF5bGlzdC5tM3U4";
        site="www.americaestereo.com";
        break;

      case '0049':
        title="Campus TV";
        option="1";
        type="video";
        source="aHR0cDovL3N0Mi53b3JsZGthc3QuY29tLzgwMDQvODAwNC9wbGF5bGlzdC5tM3U4";
        site="live.campushd.tv";
        break;

      case '0050':
        title="America Stereo TV Tulcan";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OWMzYzdiZGExNWY0LnN0cmVhbWxvY2submV0OjQ0NC9yYWRpb2FtZXJpY2F0dWxjYW4vc21pbDpyYWRpb2FtZXJpY2F0dWxjYW4uc21pbC9wbGF5bGlzdC5tM3U4";
        site="www.americaestereo.com";
        break;

      case '0051':
        title="Dubai TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kbWlzeHRodmxsLmNkbi5tYW5nb21vbG8uY29tL2R1YmFpdHYvc21pbDpkdWJhaXR2LnN0cmVhbS5zbWlsL3BsYXlsaXN0Lm0zdTg=";
        site="www.awaan.ae/live/6/dubai-tv";
        break;

      case '0052':
        title="BioBio TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly91bmxpbWl0ZWQxLXVzLmRwcy5saXZlL2JidHYvYmJ0di5zbWlsL2JidHYvbGl2ZXN0cmVhbTQvY2h1bmtzLm0zdTg=";
        site="www.biobiochile.cl";
        break;

      case '0053':
        title="RedBull TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9yYm1uLWxpdmUuYWthbWFpemVkLm5ldC9obHMvbGl2ZS81OTA5NjQvQm9SQi1BVC9tYXN0ZXJfOTI4Lm0zdTg=";
        site="www.redbull.com/int-en/channels/best-of-red-bull-stream";
        break;

      case '0054':
        title="América TeVé Miami";
        option="1";
        type="video";
        source="aHR0cHM6Ly90bmE1LmJvenp0di5jb20vQUNWVFYvaW5kZXgubTN1OA==";
        site="www.americateve.com";
        break;

      case '0055':
        title="Dubai One TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kbWlubnZsbC5jZG4ubWFuZ29tb2xvLmNvbS9kdWJhaW9uZS9zbWlsOmR1YmFpb25lLnN0cmVhbS5zbWlsL3BsYXlsaXN0Lm0zdTg=";
        site="www.awaan.ae/live/10/One-Tv";
        break;

      case '0056':
        title="A3 Series";
        option="1";
        type="video";
        
source="aHR0cHM6Ly9hM20tYTNzLWxpdmUtZGFzaC5zZWN1cmUuZm9vdHByaW50Lm5ldC9saXZlL25hc19saXZlL2Ezcy9kYXNoL2Ezcy5tcGQ/YmVnaW49JmVuZD0mbnZiPTE1OTUxNzUyMzgmbnZhPTE5MTA3MDgwMzQmaGFzaD0wNjE3OWYwMGY3NmU0NmJmOTE4YjA5YzE3ZTQ3MDc5YTFlZmEwOTk1NA==";
        site="";
        break;

      case '0057':
        title="Rewind TV HD";
        option="1";
        type="video";
        source="aHR0cHM6Ly81Y2Y0YTJjMjUxMmEyLnN0cmVhbWxvY2submV0L3Jld2ludHYvcmV3aW50di9wbGF5bGlzdC5tM3U4";
        site="www.rewindtv.cl";
        break;

      case '0058':
        title="24/7 Retro";
        option="1";
        type="video";
        source="aHR0cDovL2hsc2RwaS1jZG4tY2hxdHgwMS50b3RhbHN0cmVhbS5uZXQvZHBpbGl2ZS8yNDdyZXRyby9yZXQvZGFpL3BsYXlsaXN0Lm0zdTg=";
        site="www.247retro.com";
        break;

      case '0059':
        title="AMG TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly8yLWZzcy0yLnN0cmVhbWhvc3Rlci5jb20vcGxfMTM4LzIwMTY2MC0xMjcwNjM0LTEvcGxheWxpc3QubTN1OA==";
        site="amgtv.tv";
        break;

      case '0060':
        title="Red Mas TV";
        option="1";
        type="video";
        source="aHR0cDovL2luZm9yZWQubGNkbi5jbGFyby5uZXQuY28vQ29udGVudC9obHNfY2xlYXIvbGl2ZS9DaGFubmVsKFJFRFRWSEQpL1N0cmVhbSgwMSkvaW5kZXgubTN1OA==";
        site="redmas.com.co";
        break;

      case '0061':
        title="NTN 24";
        option="1";
        type="video";
        source="aHR0cHM6Ly9yY25oZC5jZG4ubmV0LmNvL2xpdmUwNC9udG4yNF80ODBwLm0zdTg=";
        site="www.ntn24.com";
        break;

      case '0062':
        title="Retro Cartoon";
        option="1";
        type="video";
        source="aHR0cHM6Ly9zdG12MS5zcnZpZi5jb20vcmV0cm90di9yZXRyb3R2L3BsYXlsaXN0LTQ4MHAubTN1OA==";
        site="";
        break;

      case '0063':
        title="ACS Network TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9jZG40Lmhvc3RsYWdhcnRvLmNvbTo4MDgxL2Fjc25ldHdvcmsvdHJhY2tzLXYxYTEvbW9uby5tM3U4";
        site="acsnetwork.tv";
        break;

      case '0064':
        title="Telemax Argentina";
        option="1";
        type="video";
        source="aHR0cDovL2xpdmUtZWRnZTAxLnRlbGVjZW50cm8ubmV0LmFyL2xpdmUvc21pbDp0bHguc21pbC9tYXN0ZXIubTN1OA==";
        site="www.diario26.com/streaming/index/landingName/telemax/Article_page/6";
        break;

      case '0065':
        title="CL3 Cablevision";
        option="1";
        type="video";
        source="aHR0cHM6Ly92aWRlb3N0cmVhbS5zaG9ja21lZGlhLmNvbS5hcjoxOTM2L2NsM2NhYmxlL2NsM2NhYmxlL3BsYXlsaXN0Lm0zdTg=";
        site="www.cl3cablevision.com.ar";
        break;

      case '0066':
        title="Madryn TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OWRiN2U2NzFhMWFkLnN0cmVhbWxvY2submV0OjQ0My9tYWRyeW50di9tYWRyeW50di9wbGF5bGlzdC5tM3U4";
        site="www.madryntv.com/canal12";
        break;

      case '0067':
        title="Cinevision Canal 19";
        option="1";
        type="video";
        source="aHR0cDovL2NpbmV2aXNpb24wMS5zdHJlYW1wcm9saXZlLmNvbS9obHMvbGl2ZS5tM3U4";
        site="www.canal19.do";
        break;

      case '0068':
        title="RNN Noticias";
        option="1";
        type="video";
        source="aHR0cHM6Ly9zczIuZG9taW50Lm5ldDozMjAyL3Jubl9zdHIvY2FuYWwyNy9wbHlsaXN0Lm0zdTg=";
        site="canal27.com.do";
        break;

      case '0069':
        title="Cananga TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9zczQuZG9taW50Lm5ldDozMDI0L2NhbmFfc3RyL2NhbmFuZ2F0di9wbGF5bGlzdC5tM3U4";
        site="canangatv.com";
        break;

      case '0070':
        title="Sport Vision 35";
        option="1";
        type="video";
        source="aHR0cHM6Ly81YjU5YzdhNDcyMzZhLnN0cmVhbWxvY2submV0L3Nwb3J0dmlzaW9uMzV0di9zcG9ydHZpc2lvbjM1dHYvcGxheWxpc3QubTN1OA==";
        site="sportvision35tv.com";
        break;

      case '0071':
        title="Policia RD";
        option="1";
        type="video";
        source="aHR0cHM6Ly9jZG40Lmhvc3RsYWdhcnRvLmNvbTo4MDgxL0xhcG9saWNpYW5hY2lvbmFsdHYvdHJhY2tzLXYxYTEvbW9uby5tM3U4";
        site="www.policianacional.gob.do";
        break;

      case '0072':
        title="EWTN";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kM2tyMGQ0bWZqeHBidi5jbG91ZGZyb250Lm5ldC9wL1NQQVNfNzYweDQzMl8xMjAway5tM3U4";
        site="https://www.ewtn.com/multimedia/live_player-es.asp";
        break;

      case '0073':
        title="Canal CDO";
        option="1";
        type="video";
        source="aHR0cHM6Ly90bHMuY2Ruei5jbC9jZG9mcmVlL3NtaWw6Y2RuLnNtaWwvcGxheWxpc3QubTN1OA==";
        site="www.canalcdo.cl";
        break;

      case '0074':
        title="Canal Mundo Vision";
        option="1";
        type="video";
        source="aHR0cHM6Ly9tb3ZpbC5lamVzZXJ2ZXIuY29tL2xpdmUvbXVuZG92aXNpb250di5tM3U4";
        site="canalmundovision.com";
        break;

      case '0075':
        title="Micro Vision Canal 10";
        option="1";
        type="video";
        source="aHR0cDovLzE5MC4xMDMuMTgzLjI0OjE5MzUvbGl2ZS9NaWNyb0hEL3BsYXlsaXN0Lm0zdTg=";
        site="microvision.com.do";
        break;

      case '0076':
        title="Luna TV Canal 53";
        option="1";
        type="video";
        source="aHR0cHM6Ly9jZG40Lmhvc3RsYWdhcnRvLmNvbTo4MDgxL2x1bmF0di90cmFja3MtdjFhMS9tb25vLm0zdTg=";
        site="lunatv.do";
        break;

      case '0077':
        title="Canal Caracol";
        option="1";
        type="video";
        source="aHR0cHM6Ly9tZHN0cm0uY29tL2xpdmUtc3RyZWFtLXBsYXlsaXN0LzU3NDQ2MzY5N2I5ODE3Y2YwODg2ZmMxNy5tM3U4";
        site="www.caracoltv.com";
        break;

      case '0078':
        title="Telecibao HD";
        option="1";
        type="video";
        source="aHR0cHM6Ly9jbS5ob3N0bGFnYXJ0by5jb206NDQ0NS9UZWxlY2liYW8vVGVsZWNpYmFvL3BsYXlsaXN0Lm0zdTg=";
        site="www.telecibaohd.tv";
        break;

      case '0079':
        title="Ibiza Global TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9pYmdydHYuc3RyZWFtaW5nLXByby5jb20vaGxzL2liZ3JsaXZlLm0zdTg=";
        site="ibizaglobal.tv";
        break;

      case '0080':
        title="Maimon TV Digital";
        option="1";
        type="video";
        source="aHR0cHM6Ly9zczguZG9taW50Lm5ldDo5MTEyL210ZF9zdHIvbWlhbW9udHYvbWFuaWZlc3QubTN1OA==";
        site="maimontvdigital.com";
        break;

      case '0081':
        title="Fuego TV Canal 40";
        option="1";
        type="video";
        source="aHR0cHM6Ly81NzkwZDI5NGFmMmRjLnN0cmVhbWxvY2submV0LzgwMjAvODAyMC9tYW5pZmVzdC5tM3U4";
        site="fuego40.com";
        break;

      case '0082':
        title="Nicavisión";
        option="1";
        type="video";
        source="aHR0cHM6Ly81Y2E5YWY0NjQ1ZTE1LnN0cmVhbWxvY2submV0L2NhbmFsMTIvdmlkZW9jYW5hbDEyL3BsYXlsaXN0Lm0zdTg=";
        site="www.canal12.com.ni";
        break;

      case '0083':
        title="El Garage TV";
        option="1";
        type="video";
        source="aHR0cDovLzE4Ni4wLjIzMy43NjoxOTM1L0dhcmFnZS9zbWlsOmdhcmFnZS5zbWlsL3BsYXlsaXN0Lm0zdTg=";
        site="elgarage.com";
        break;

      case '0084':
        title="DeporTV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9jb250YXItbGguYWthbWFpaGQubmV0L2kvZGVwb3J0dHZfMUAxNTU3NDIvaW5kZXhfMjAwMF9hdi1wLm0zdTg/c2Q9MTAmcmViYXNlPW9u";
        site="deportv.gov.ar";
        break;

      case '0085':
        title="Intercomarcal TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9zdHIuaW50ZXJjb21hcmNhbC5jb20vaGxzL3R2aXhhLm0zdTg=";
        site="www.intercomarcal.com";
        break;

      case '0086':
        title="Canal TV3";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kaXJlY3Rlcy10di1pbnQuY2NtYS5jYXQvaW50L25ncnA6dHYzX3dlYi9wbGF5bGlzdC5tM3U4";
        site="www.ccma.cat/tv3/directe/tv3";
        break;

      case '0087':
        title="Canal 324";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kaXJlY3Rlcy10di1pbnQuY2NtYS5jYXQvaW50L25ncnA6MzI0X3dlYi9wbGF5bGlzdC5tM3U4";
        site="www.ccma.cat/tv3/directe/324";
        break;

      case '0088':
        title="Bondia TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kaXJlY3Rlcy10di1pbnQuY2NtYS5jYXQvaW50L25ncnA6Ym5kX3dlYi9wbGF5bGlzdC5tM3U4";
        site="www.ccma.cat/bondiatv";
        break;

      case '0089':
        title="Hispan TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9saXZlLmhpc3BhbnR2LmNvbS9saXZlL3NtaWw6bGl2ZS5zbWlsL3BsYXlsaXN0Lm0zdTg=";
        site="www.hispantv.com";
        break;

      case '0090':
        title="Orbit TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9zczMuZG9taW50Lm5ldDozMTM0L290dl9zdHIvb3JiaXR0di9wbGF5bGlzdC5tM3U4";
        site="orbittv.net";
        break;

      case '0091':
        title="3ABN Latino";
        option="1";
        type="video";
        source="aHR0cHM6Ly9tb2lwdHZobHMtaS5ha2FtYWloZC5uZXQvaGxzL2xpdmUvNjUyMzE1L3NlY3VyZS9MUXMvY2h1bmtsaXN0Lm0zdTg=";
        site="3abnlatino.tv";
        break;

      case '0092':
        title="Canal 10 Mar Del Plata";
        option="1";
        type="video";
        source="aHR0cHM6Ly9jZG4yLnplbmNhc3QudHY6MzA0NDMvbGl2ZS9jYW5hbDEwc21pbC9wbGF5bGlzdC5tM3U4";
        site="www.canal10mardelplata.tv";
        break;

      case '0093':
        title="Canal 21 Chillán";
        option="1";
        type="video";
        source="aHR0cHM6Ly90bHMuY2Ruei5jbC9jYW5hbDIxdHYvbGl2ZS9wbGF5bGlzdC5tM3U4";
        site="www.canal21tv.cl";
        break;

      case '0094':
        title="CMMedia";
        option="1";
        type="video";
        source="aHR0cDovL2NkbmFwaS5rYWx0dXJhLmNvbS9wLzIyODg2OTEvc3AvMjI4ODY5MTAwL3BsYXlNYW5pZmVzdC9lbnRyeUlkLzBfeHM0NWl5NWkvcHJvdG9jb2wvaHR0cC9mb3JtYXQvYXBwbGVodHRwL2EubTN1OA==";
        site="www.cmmedia.es";
        break;

      case '0095':
        title="Dubai Racing";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kbWlzdnRodmxsLmNkbi5tYW5nb21vbG8uY29tL2V2ZW50cy9zbWlsOmV2ZW50cy5zbWlsL3BsYXlsaXN0Lm0zdTg=";
        site="www.dubairacing.ae";
        break;

      case '0096':
        title="CNC Pasto";
        option="1";
        type="video";
        source="aHR0cDovLzY2LjI0MC4yMzYuMjU6MTkzNi9jbmNwYXN0by9jbmNwYXN0by9wbGF5bGlzdC5tM3U4";
        site="www.cncpasto.com";
        break;

      case '0097':
        title="CNC Medellin";
        option="1";
        type="video";
        source="aHR0cDovLzY2LjI0MC4yMzYuMjU6MTkzNi9jYW5hbGNuYy9jYW5hbGNuYy9jaHVua2xpc3QubTN1OA==";
        site="canalcncmedellin.com";
        break;

      case '0098':
        title="Sama Dubai";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kbWllaWd0aHZsbC5jZG4ubWFuZ29tb2xvLmNvbS9zYW1hZHViYWkvc21pbDpzYW1hZHViYWkuc3RyZWFtLnNtaWwvcGxheWxpc3QubTN1OA==";
        site="www.awaan.ae/live/9/Sama-Dubai";
        break;

      case '0099':
        title="Melody Channel TV";
        option="1";
        type="video";
        source="aHR0cDovLzE4Ni4xNTUuMjAwLjExODoxOTM1L2xpdmUvTWVsb2R5Q2hhbm5lbC9wbGF5bGlzdC5tM3U4";
        site="melodychannel.tv";
        break;

      case '0100':
        title="Anime Loving TV";
        option="1";
        type="video";
        source="aHR0cDovL2FuaW1lbG92aW5nLm5ldC9obHMvc3RyZWFtLm0zdTg=";
        site="www.animeloving.net";
        break;

      case '0101':
        title="Extrema TV";
        option="1";
        type="video";
        source="aHR0cDovL2xpdmVzdHJlYW1jZG4ubmV0OjE5MzUvRXh0cmVtYVRWL0V4dHJlbWFUVi9wbGF5bGlzdC5tM3U4";
        site="www.radioextremacr.com";
        break;

      case '0102':
        title="Contivision";
        option="1";
        type="video";
        source="aHR0cDovL2V2by5lbHRlbG9uLmNvbToxOTM1L2xpdmUvY29udGl2aXNpb24vcGxheWxpc3QubTN1OA==";
        site="web.contivision.cl/ctv/envivo.php";
        break;

      case '0103':
        title="Real Madrid TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9ybXR2MjRod2VibGl2ZS1saC5ha2FtYWloZC5uZXQvaS9ybXR2MjRod2ViZXNfMUAzMDA2NjEvaW5kZXhfM19hdi1wLm0zdTg=";
        site="www.realmadrid.com";
        break;

      case '0104':
        title="Real Madrid TV Inglés";
        option="1";
        type="video";
        source="aHR0cHM6Ly9ybXR2MjRod2VibGl2ZS1saC5ha2FtYWloZC5uZXQvaS9ybXR2MjRod2ViZW5fMUAzMDA2NjIvaW5kZXhfM19hdi1wLm0zdTg=";
        site="www.realmadrid.com";
        break;

      case '0105':
        title="TeleMadrid";
        option="1";
        type="video";
        source="aHR0cHM6Ly90ZWxlbWFkcmlkaGxzLWxpdmUtaGxzLnNlY3VyZS5mb290cHJpbnQubmV0L3RlbGVtYWRyaWQvdGVsZW1hZHJpZDEvYml0cmF0ZV8xLm0zdTg=";
        site="www.telemadrid.es";
        break;

      case '0106':
        title="Telesistema";
        option="1";
        type="video";
        source="aHR0cHM6Ly9zczMuZG9taW50Lm5ldDozMTE0L3QxMV9zdHIvdGVsZXNpc3RlbWEvcGxheWxpc3QubTN1OA==";
        site="telesistema11.com.do";
        break;

      case '0107':
        title="Cartoon Club TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9lZGdlMi1ia2suM2JiLmNvLnRoOjk0NDMvQ2FydG9vbkNsdWJfTGl2ZXN0cmVhbS9jYXJ0b29uY2x1Yl80ODBQLnN0cmVhbS9wbGF5bGlzdC5tM3U4";
        site="cartoonclub.tv";
        break;

      case '0108':
        title="Euro Latina TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9saW1pdGVkMS50b2Rvc3RyZWFtaW5nLmVzL2xpdmUvZXVyb2xhdGluYS1saXZlc3RyZWFtLm0zdTg=";
        site="www.eurolatinatv.com";
        break;

      case '0109':
        title="Teleislas";
        option="1";
        type="video";
        source="aHR0cHM6Ly81YWI3NzIzMzRjMzljLnN0cmVhbWxvY2submV0L2xpdmUtdGVsZWlzbGFzL19kZWZpbnN0Xy90ZWxlaXNsYXMvcGxheWxpc3QubTN1OA==";
        site="www.teleislas.com.co";
        break;

      case '0110':
        title="TLT La TeleTuya";
        option="1";
        type="video";
        source="aHR0cHM6Ly92Y3AubXlwbGF5dHYuY29tL3RsdGhkL3RsdGhkL3BsYXlsaXN0Lm0zdTg=";
        site="lateletuya.com";
        break;

      case '0111':
        title="History Lab";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OTI5YjEzOGIxMzlkLnN0cmVhbWxvY2submV0L0hpc3RvcnlMYWIvbGl2ZXN0cmVhbS9wbGF5bGlzdC5tM3U4";
        site="www.radioetv.it/history-lab";
        break;

      case '0112':
        title="Nasa TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9udHYxLmFrYW1haXplZC5uZXQvaGxzL2xpdmUvMjAxNDA3NS9OQVNBLU5UVjEtSExTL21hc3Rlcl83MDAubTN1OA==";
        site="www.nasa.gov";
        break;

      case '0113':
        title="DTV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9lbWlzb3Jhcy5objo4MDgxL2R0di90cmFja3MtdjFhMS9tb25vLm0zdTg=";
        site="www.canaldtvlatino.com | www.facebook.com/canaldtvlatino";
        break;

      case '0114':
        title="Teleantillas";
        option="1";
        type="video";
        source="aHR0cHM6Ly9zczQuZG9taW50Lm5ldDozMDQwL3RhMl9zdHIvdGVsZWFudGlsbGFzL3BsYXlsaXN0Lm0zdTg=";
        site="teleantillas.com.do";
        break;

      case '0115':
        title="Canal RCN";
        option="1";
        type="video";
        source="aHR0cHM6Ly9yY25oZC5jZG4ubmV0LmNvL2xpdmUwMS9yY25oZC5tM3U4";
        site="www.canalrcn.com";
        break;

      case '0116':
        title="WOW TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9jZG4uZWxzYWx2YWRvcmRpZ2l0YWwuY29tOjE5MzYvd293dHYvc21pbDp3b3d0di5zbWlsL3BsYXlsaXN0Lm0zdTg=";
        site="wowelsalvador.com";
        break;

      case '0117':
        title="All Sports TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly81Y2Y0YTJjMjUxMmEyLnN0cmVhbWxvY2submV0L2RncmF1L2RncmF1L3BsYXlsaXN0Lm0zdTg=";
        site="www.allsports.tv.br";
        break;

      case '0118':
        title="AZ TV";
        option="1";
        type="video";
        source="aHR0cDovL3N0ci55b2RhY2RuLm5ldC9henR2L3RyYWNrcy12MWExL21vbm8ubTN1OD90b2tlbj01ZTg1NzRmMTJmOTFmODFlNjc5NmQ4NWUzMWM0MmJlYTNiNGYzMjIyLTg5MGUzOThhN2I3YmVmMzllYWZkYjk1YWRkMTBkOGJiLTE1OTgzNTE5MzItMTU5ODM0MTEzMg==";
        site="www.aztv.az/canli/aztv-canli.htm";
        break;

      case '0119':
        title="IDMAN TV";
        option="1";
        type="video";
        source="aHR0cDovL3N0ci55b2RhY2RuLm5ldC9pZG1hbi90cmFja3MtdjJhMS9tb25vLm0zdTg/dG9rZW49NjgyYmIyMGUwNGU5MjA0YzBmODY4OWY0Mzk4OTAxODdlNDg2Y2Q1My0wZmVmNjk2ZjZhMDM2ZWY3MTdmYWFlNmIzZTFmZDRiYS0xNTk4MzQ0NTAxLTE1OTgzMzM3MDE=";
        site="www.aztv.az/canli/aztv-canli.htm";
        break;

      case '0120':
        title="Madaniyat TV";
        option="1";
        type="video";
        source="aHR0cDovL3N0ci55b2RhY2RuLm5ldC9tZWRlbml5eWV0L3RyYWNrcy12MmExL21vbm8ubTN1OD90b2tlbj01ZTg1NzRmMTJmOTFmODFlNjc5NmQ4NWUzMWM0MmJlYTNiNGYzMjIyLTg5MGUzOThhN2I3YmVmMzllYWZkYjk1YWRkMTBkOGJiLTE1OTgzNTE5MzItMTU5ODM0MTEzMg==";
        site="www.aztv.az/canli/aztv-canli.htm";
        break;

      case '0121':
        title="Elonce TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9lbG9uY2UuemFwdG8ub3JnL2hscy9saXZlLm0zdTg=";
        site="www.elonce.com";
        break;

      case '0122':
        title="MV TV Mision Vida";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OTgyNWE1NGU0NDU0LnN0cmVhbWxvY2submV0Ojg0NDMvam9yZ2U4NTQvam9yZ2U4NTQvcGxheWxpc3QubTN1OA==";
        site="www.misionvida.org";
        break;

      case '0123':
        title="Justicia TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9saXZlLnNjam4uZ29iLm14L0VWTGl2ZVNDSk4vX2RlZmluc3RfL21wNDpZWFdLTENEVC9wbGF5bGlzdC5tM3U4";
        site="justiciatv.mx";
        break;

      case '0124':
        title="Dubai Sports";
        option="1";
        type="video";
        source="aHR0cDovL2RtaXRudGh2bGwuY2RuLm1hbmdvbW9sby5jb20vZHViYWlzcG9ydHMvc21pbDpkdWJhaXNwb3J0cy5zbWlsL2luZGV4Lm0zdTg=";
        site="www.dubaisports.ae";
        break;

      case '0125':
        title="Dubai Sports 2";
        option="1";
        type="video";
        source="aHR0cDovL2RtaXR3bHZ2bGwuY2RuLm1hbmdvbW9sby5jb20vZHViYWlzcG9ydHNoZC9zbWlsOmR1YmFpc3BvcnRzaGQuc21pbC9pbmRleC5tM3U4";
        site="www.dubaisports.ae";
        break;

      case '0126':
        title="Dubai Sports 3";
        option="1";
        type="video";
        source="aHR0cDovL2RtaXR3bHZ2bGwuY2RuLm1hbmdvbW9sby5jb20vZHViYWlzcG9ydHNoZDUvc21pbDpkdWJhaXNwb3J0c2hkNS5zbWlsL2luZGV4Lm0zdTg=";
        site="www.dubaisports.ae";
        break;

      case '0127':
        title="GS Spor TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9vd2lmYXZvNS5yb2NrZXRjZG4uY29tL2dzdHYvZ3N0di5zbWlsL3NsdHVyLm0zdTg=";
        site="galatasaray.com";
        break;

      case '0128':
        title="AD Sports";
        option="1";
        type="video";
        source="aHR0cHM6Ly9hZG1kbjF0YS5jZG4ubWFuZ29tb2xvLmNvbS9hZHNwb3J0czEvc21pbDphZHNwb3J0czEuc3RyZWFtLnNtaWwvaW5kZXgubTN1OA==";
        site="adsports.ae";
        break;

      case '0129':
        title="AD Sports 3";
        option="1";
        type="video";
        source="aHR0cHM6Ly9hZG1kbjN0YS5jZG4ubWFuZ29tb2xvLmNvbS9hZHNwb3J0czMvc21pbDphZHNwb3J0czMuc3RyZWFtLnNtaWwvaW5kZXgubTN1OA==";
        site="adsports.ae";
        break;

      case '0130':
        title="YAS TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9hZG1kbjF0YS5jZG4ubWFuZ29tb2xvLmNvbS95YXN0di9zbWlsOnlhc3R2LnN0cmVhbS5zbWlsL2luZGV4Lm0zdTg=";
        site="adsports.ae";
        break;

      case '0131':
        title="ITP TV";
        option="1";
        type="video";
        source="aHR0cDovLzEzOS4xNjIuMTgyLjc5L2xpdmUvdGVzdC9pbmRleC5tM3U4";
        site="www.itp.tv.tr";
        break;

      case '0132':
        title="Fight Time HD";
        option="1";
        type="video";
        source="aHR0cDovL25vZGUwMS5vcGVuZnV0Ym9sLmVzL1NWb3JpZ2luT3BlcmF0b3JFZGdlLzEyODc2MS5zbWlsL3BsYXlsaXN0Lm0zdTg=";
        site="";
        break;

      case '0133':
        title="Antofagasta TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly91bmxpbWl0ZWQxLXVzLmRwcy5saXZlL2F0di9hdHYuc21pbC9wbGF5bGlzdC5tM3U4";
        site="www.antofagasta.tv";
        break;

      case '0134':
        title="UESTV";
        option="1";
        type="video";
        source="aHR0cHM6Ly90bHMuY2Ruei5jbC91ZXN0di9saXZlL3BsYXlsaXN0Lm0zdTg/RFZS";
        site="www.uestv.cl/en-vivo";
        break;

      case '0135':
        title="Holvoet TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly91bmxpbWl0ZWQxLWNsLmRwcy5saXZlL2hvbHZvZXR0di9ob2x2b2V0dHYuc21pbC9ob2x2b2V0dHYvbGl2ZXN0cmVhbTMvY2h1bmtzLm0zdTg=";
        site="holvoet.cl/en-vivo";
        break;

      case '0136':
        title="WMS HD";
        option="1";
        type="video";
        source="aHR0cDovL2NtLmhvc3RsYWdhcnRvLmNvbTo4MDgxL3dtc2VydmljZUhEL3dtc2VydmljZWhkLm15U3RyZWFtL3BsYXlsaXN0Lm0zdTg=";
        site="";
        break;

      case '0137':
        title="GCTN";
        option="1";
        type="video";
        source="aHR0cHM6Ly9saXZlZXMuY2d0bi5jb20vMTAwMGUvcHJvZ19pbmRleC5tM3U4";
        site="espanol.cgtn.com";
        break;

      case '0138':
        title="Auto Moto TV";  //www.dengnz.com/wp-content/tv.txt
        option="1";
        type="video";
        source="aHR0cDovLzEwMGF1dG9tb3RvLnR2OjE5MzUvYmd0djEvYXV0b3R2L3BsYXlsaXN0Lm0zdTg=";
        site="www.100automoto.tv";
        break;

      case '0139':
        title="Luxury HD";
        option="1";
        type="video";
        source="aHR0cDovL25hbm8udGVsZXNlcnZpY2Uuc3U6ODA4MC9obHMvbHV4dXJ5Lm0zdTg=";
        site="";
        break;

      case '0140':
        title="FOLX";
        option="1";
        type="video";
        source="aHR0cDovL2F6dGVjYWxpdmUtbGguYWthbWFpaGQubmV0OjgwL2kvMHFtN2Nqdm9wXzFANTAyNDc2L2luZGV4XzNfYXYtcC5tM3U4";
        site="";
        break;

      case '0141':
        title="ITV Patagonia";
        option="1";
        type="video";
        source="aHR0cHM6Ly91bmxpbWl0ZWQxLXVzLmRwcy5saXZlL2l0di9pdHYuc21pbC9wbGF5bGlzdC5tM3U4";
        site="www.itvpatagonia.com";
        break;

      case '0142':
        title="TV 5 Linares";
        option="1";
        type="video";
        source="aHR0cHM6Ly91bmxpbWl0ZWQxLXVzLmRwcy5saXZlL3R2NS90djUuc21pbC9wbGF5bGlzdC5tM3U4";
        site="www.tv5.cl/envivo";
        break;

      case '0143':
        title="UMAG TV 2";
        option="1";
        type="video";
        source="aHR0cHM6Ly90bHMuY2Ruei5jbC91bWFndHYyL3NtaWw6dW1hZ3R2Mi5zbWlsL3BsYXlsaXN0Lm0zdTg=";
        site="www.umagtv.cl";
        break;

      case '0144':
        title="Canal UTV";
        option="1";
        type="video";
        source="aHR0cHM6Ly91bmxpbWl0ZWQxLXVzLmRwcy5saXZlL3Z0di92dHYuc21pbC9wbGF5bGlzdC5tM3U4";
        site="www.canalvtv.cl";
        break;

      case '0145':
        title="M2";
        option="1";
        type="video";
        source="aHR0cHM6Ly9jMjAxLW5vZGU2MS1jZG4uY29ubmVjdG1lZGlhLmh1LzExMDEvZDUzMDAwOGY5ODFhNTZkMjUyMmFiM2Q2ZWU3YzMzZTAvNWY0Zjg5NGMvMDMubTN1OA==";
        site="mediaklikk.hu/m2-elo";
        break;

      case '0146':
        title="Minika Go";
        option="1";
        type="video";
        source="aHR0cHM6Ly90cmt2ei1saXZlLmVyY2RuLm5ldC9taW5pa2Fnby9taW5pa2Fnby5tM3U4P3N0PUZRcTZZdnNwT3hWQndlczNvRnEzRHcmZT0xNTk5MDk2NDU2JlNlc3Npb25JRD0xLjMuMTI5NTU3MDI3Ny4xNTk5MDQ5MjE4JlN0cmVhbUdyb3VwPWNhbmxpLXlheWluJlNpdGU9bWluaWthZ28mRGV2aWNlR3JvdXA9d2Vi";
        site="www.minikago.com.tr/webtv/canli-yayin";
        break;

      case '0147':
        title="Minika Cocuk";
        option="1";
        type="video";
        source="aHR0cHM6Ly90cmt2ei1saXZlLmVyY2RuLm5ldC9taW5pa2Fnb2NvY3VrL21pbmlrYWdvY29jdWtfNTc2cC5tM3U4P3N0PWczbno1enlVODk3Z014NjJaWXNHNHcmZT0xNTk5MDk1OTE1JlNlc3Npb25JRD0xLjMuMTE4ODQzNTE5NC4xNTk5MDUwNzEwJlN0cmVhbUdyb3VwPWNhbmxpLXlheWluJlNpdGU9bWluaWthY29jdWsmRGV2aWNlR3JvdXA9d2Vi";
        site="";
        break;

      case '0148':
        title="M4 Sport";
        option="1";
        type="video";
        source="aHR0cHM6Ly9jNDAxLW5vZGU2MS1jZG4uY29ubmVjdG1lZGlhLmh1LzExMDQvZWVmODFiNjliNzliZDNkYzJmMDI5ODY5MjkxYTI4OTgvNWY0Zjk4M2EvMDQubTN1OA==";
        site="mediaklikk.hu/m4-elo";
        break;

      case '0149':
        title="Duna";
        option="1";
        type="video";
        source="aHR0cHM6Ly9jMjAyLW5vZGU2MS1jZG4uY29ubmVjdG1lZGlhLmh1LzExMDIvNmZjYjZmN2U5OTUzZWM4ODRhMjQ4ZmFiNDA5OGVkY2QvNWY0Zjk5OWMvMDIubTN1OA==";
        site="mediaklikk.hu/duna-elo";
        break;

      case '0150':
        title="Noor Dubai TV";
        option="1";
        type="video";
        source="aHR0cHM6Ly9kbWlmZnRodmxsLmNkbi5tYW5nb21vbG8uY29tL25vb3JkdWJhaXR2L3NtaWw6bm9vcmR1YmFpdHYuc21pbC9wbGF5bGlzdC5tM3U4";
        site="www.awaan.ae/live/13/Noor-Dubai-TV";
        break;

      case '0151':
        title="Canal 2 San Antonio";
        option="1";
        type="video";
        source="aHR0cHM6Ly91bmxpbWl0ZWQyLWNsLmRwcy5saXZlL2NhbmFsMi9jYW5hbDIuc21pbC9wbGF5bGlzdC5tM3U4";
        site="www.cablenoticias.cl";
        break;

      case '0152':
        title="Canal 2 Colombia";
        option="1";
        type="video";
        source="aHR0cHM6Ly92aWRlbzEzLnZpcnR1YWx0cm9uaWNzLmNvbS9zdHJlYW1lci9jYW5hbDIubTN1OA==";
        site="envivo.canal2.co";
        break;

      case '0153':
        title="Teleangol";
        option="1";
        type="video";
        source="aHR0cHM6Ly91bmxpbWl0ZWQxLXVzLmRwcy5saXZlL3RlbGVhbmdvbC90ZWxlYW5nb2wuc21pbC9wbGF5bGlzdC5tM3U4";
        site="www.teleangol.cl";
        break;

      case '0154':
        title="Al Kass Sports One";
        option="1";
        type="video";
        source="aHR0cHM6Ly9hbGthc21zbDQuYWthbWFpemVkLm5ldC9obHMvbGl2ZS8yMDAzMTIzL2Fsa2FzczF2R2x3aWFiL21hc3Rlci5tM3U4";
        site="www.alkass.net/alkass/live.aspx?ch=one";
        break;

      case '0155':
        title="Al Kass Sports Two";
        option="1";
        type="video";
        source="aHR0cHM6Ly9hbGthc21zbDQuYWthbWFpemVkLm5ldC9obHMvbGl2ZS8yMDAzMTIzL2Fsa2FzczJzZG5oeWlhL21hc3RlcjI3MC5tM3U4";
        site="www.alkass.net/alkass/live.aspx?ch=two";
        break;

      case '0156':
        title="Al Kass Sports Four";
        option="1";
        type="video";
        source="aHR0cHM6Ly9hbGthc21zbDQuYWthbWFpemVkLm5ldC9obHMvbGl2ZS8yMDAzMTIzL2Fsa2FzczRmemppbi9tYXN0ZXIubTN1OA==";
        site="www.alkass.net/alkass/live.aspx?ch=four";
        break;

      case '0157':
        title="Al Kass Sports Five";
        option="1";
        type="video";
        source="aHR0cHM6Ly9hbGthc21zbDQuYWthbWFpemVkLm5ldC9obHMvbGl2ZS8yMDAzMTIzL2Fsa2FzczVadGRkdWEvbWFzdGVyLm0zdTg=";
        site="www.alkass.net/alkass/live.aspx?ch=five";
        break;

      case '0158':
        title="Al Kass Sports Online";
        option="1";
        type="video";
        source="aHR0cHM6Ly9hbGthc21zbDQuYWthbWFpemVkLm5ldC9obHMvbGl2ZS8yMDAzMTIzL2Fsa2Fzc09ubGVzcGZ3R3NkL21hc3Rlci5tM3U4";
        site="www.alkass.net/alkass/live.aspx?ch=online";
        break;

      case '0159':
        title="Telecaribe";
        option="1";
        type="hls";
        source="aHR0cHM6Ly90a3guYXBpcy5hbnZhdG8ubmV0L3Jlc3QvdjIvbWNwL3ZpZGVvL2Fkc3RCNjRNWFl4cUxad3k/YW52YWNrPTRnWG1WVm9WSXAzWWVFQ0pXbTZhZjNqMG1sSHdsNnZPJmV1ZD1TS2pvSDFMJTJGOUVud281elFCaUJUUmZUU05HZkVOTU5PNnVkbTRDUU5Wdml4JTJGTDlYWDhrdWNCT3Z6V2FsSWdoTnJMNUdsbEdIOG91MTdJQ1lHdjI5UmclM0QlM0Q=";
        site="www.telecaribe.co";
        break;

      case '0160':
        title="Telecaribe Plus";
        option="1";
        type="hls";
        source="aHR0cHM6Ly90a3guYXBpcy5hbnZhdG8ubmV0L3Jlc3QvdjIvbWNwL3ZpZGVvL2Fkc3RySjRscW1rOFZPejA/YW52YWNrPVFNbDZOTFh2SFJqRU1udU1hMmpWY2J3UGRPY2pZdzB6JmV1ZD0zeWNkN25oZlBZa1FwTVhsb08lMkJIVDFRYkJvbmI2TUpqVDBoVk5qT2Faem9aYzU4c0xmSSUyQmxoNjVTSGVETEVQQjdpckpQcWZtNkh0OEJVdmdTT1hFYmclM0QlM0Q=";
        site="live.telecaribe.co/plus";
        break;

      case '0161':
        title="Fight Time";
        option="1";
        type="video";
        source="aHR0cDovL25vZGUwMS5vcGVuZnV0Ym9sLmVzL1NWb3JpZ2luT3BlcmF0b3JFZGdlLzEyODc2MS5zbWlsLy5tM3U4";
        site="";
        break;

      case '0162':
        title="Cartoon Network";
        option="1";
        type="video";
        source="aHR0cHM6Ly81OWNiYTRkMzRiNjc4LnN0cmVhbWxvY2submV0L2xpdmUyLzEwMC1jYXJ0b29uLW5ldHdvcmsuc3RyZWFtL3BsYXlsaXN0Lm0zdTg/aGFzaD1jYTBlZWM5N2Q3ZDRjMmJiMjdjMDlhZmEzNzQ2NzJkYg==";
        site="";
        break;

      case '0163':
        title="La Mega Mundial";
        option="1";
        type="video";
        source="aHR0cDovLzY4LjIzNS4zNS4yNDM6MTkzNS9sYW1lZ2FtdW5kaWFsL2xhbWVnYW11bmRpYWwyL3BsYXlsaXN0Lm0zdTg=";
        site="lamegamundial.com";
        break;

      case '0164':
        title="Hunt Channel TV";
        option="1";
        type="video";
        source="Ly9kZmJiaGJyaXg5M3oyLmNsb3VkZnJvbnQubmV0L0xTLUFUTC01Njg2OC0xL3RyYWNrcy12M2ExL21vbm8ubTN1OA==";
        site="https://www.huntchannel.tv";
        break;

      case '0165':
        title="Zapping Music";
        option="1";
        type="video";
        source="aHR0cHM6Ly96bWxpdmUuemFwcGluZ3R2LmNvbS96bS1mcmVlL3ptLnNtaWwvcGxheWxpc3QubTN1OA==";
        site="";
        break;

      case '0166':
        title="Channel Fight";
        option="1";
        type="video";
        source="aHR0cHM6Ly9zdHJlYW0uYWRzLm90dGVyYS50di9wbGF5bGlzdC5tM3U4P25ldHdvcmtfaWQ9MTEzJmF2b2Q9MSZjb3BwYT0wJmlzX2xhdD0wJnVzX3ByaXZhY3k9MS0tLSZkaWQ9ZmYwMDgwMWFjMGUzZGY1MDYzZmE1YTIwMGYzNjExZjUmYXBwX2J1bmRsZT1jb20uY2hhbm5lbGZpZ2h0Lm90dCZhcHBfc3RvcmVfdXJsPWh0dHBzOi8vd3d3LmNoYW5uZWxmaWdodC5jb20lMkZkZXZpY2VzJmFwcF9kb21haW49Y2hhbm5lbGZpZ2h0LmNvbSZhcHBfbmFtZT1jaGFubmVsZmlnaHQmY3VzdG9tX3RhcmdldGluZz13ZWImY3VzdG9tXzQ9aW50ZXJuYWwmaD03MjAmdz0xMjgwJmNvbnRlbnRfY2hhbm5lbD1jaGFubmVsZmlnaHQmY29udGVudF9kaXN0X25hbWU9aW50ZXJuYWwmZGV2aWNlX21ha2U9JmRldmljZV9tb2RlbD0mcHJlZmVycmVkX2xhbmd1YWdlPUVOJmdlbmRlcj1ub3Rfc3BlY2lmaWVkJnlvYj0wJmxpdmVzdHJlYW09MQ==";
        site="www.channelfight.com";
        break;

      case '0167':
        title="";
        option="1";
        type="video";
        source="";
        site="";
        break;

      case '0168':
        title="";
        option="1";
        type="video";
        source="";
        site="";
        break;

      case '0169':
        title="";
        option="1";
        type="video";
        source="";
        site="";
        break;

      case '0170':
        title="";
        option="1";
        type="video";
        source="";
        site="";
        break;

      //Iframe

      case '2001':
        title="Canal Cocina";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9jYW5hbC1jb2NpbmEucGhw";
        site="vertelevision.tv";
        break;

      case '2002':
        title="Play Boy";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvcGxheWJveS5waHA=";
        site="vertelevision.tv";
        break;

      case '2003':
        title="Hustler";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvaHVzdGxlci5waHA=";
        site="vertelevision.tv";
        break;

      case '2004':
        title="Red Light HD";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvY2FuYWwtcmVkbGlnaHQucGhw";
        site="vertelevision.tv";
        break;

      case '2005':
        title="Venus";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvdmVudXMucGhw";
        site="vertelevision.tv";
        break;

      case '2006':
        title="Gol TV";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RlcG9ydGVzL2dvbHR2LnBocA==";
        site="vertelevision.tv";
        break;

      case '2007':
        title="Movistar Deportes";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RlcG9ydGVzL21vdmlzdGFyLWRlcG9ydGVzLnBocA==";
        site="vertelevision.tv";
        break;

      case '2008':
        title="Movistar La Liga";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RlcG9ydGVzL3ZlcnRlbGV2aXNpb250di5waHA=";
        site="vertelevision.tv";
        break;

      case '2009':
        title="Movistar Liga De Campeones";
        option="1";
        type="frame";
        source="aHR0cDovL3dlbmdlci5zdHJlYW0vd3MvcHNnLnBocA=="; // aHR0cDovL2VsaXh4Lm1lL2F3L2Fwc2cucGhw
        site="vertelevision.tv";
        break;

      case '2010':
        title="Movistar Golf";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RlcG9ydGVzL21vdmlzdGFyLWdvbGYucGhw";
        site="vertelevision.tv";
        break;

      case '2011':
        title="Movistar Seriesmania";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvbW92aXN0YXItc2VyaWVzbWFuaWEucGhw";
        site="vertelevision.tv";
        break;

      case '2012':
        title="Directv Sports";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2xhdGlub3MvZGlyZWN0dnNwb3J0cy5waHA=";
        site="vertelevision.tv";
        break;

      case '2013':
        title="Discovery Channel";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9kaXNjb3ZlcnktY2hhbm5lbC5waHA=";
        site="vertelevision.tv";
        break;

      case '2014':
        title="Odisea";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9vZGlzZWEucGhw";
        site="vertelevision.tv";
        break;

      case '2015':
        title="National Geo";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9uYXRpb25hbC1nZW8ucGhw";
        site="vertelevision.tv";
        break;

      case '2016':
        title="NAT GEO Wild";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9uYXRpb25hbC13aWxkLnBocA==";
        site="vertelevision.tv";
        break;

      case '2017':
        title="Caza Y Pesca";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9jYXpheXBlc2NhLnBocA==";
        site="vertelevision.tv";
        break;

      case '2018':
        title="Crimen + Investigacion";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9jaS5waHA=";
        site="vertelevision.tv";
        break;

      case '2019':
        title="Bein Sport";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RlcG9ydGVzL2JlaW5zcG9ydGZyYW5jaWEucGhw";
        site="vertelevision.tv";
        break;

      case '2020':
        title="Fox";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvZm94LnBocA==";
        site="vertelevision.tv";
        break;

      case '2021':
        title="MTV";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvbXR2LnBocA==";
        site="vertelevision.tv";
        break;

      case '2022':
        title="AMC";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvYW1jLnBocA==";
        site="vertelevision.tv";
        break;

      case '2023':
        title="HBO Latino";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2xhdGlub3MvaGJvbGF0aW5vLnBocA==";
        site="vertelevision.tv";
        break;

      case '2024':
        title="Fox Premium Action";
        option="1";
        type="frame";
        source="L3AvMDA1MC5odG1s";
        site="vertelevision.tv";
        break;

      case '2025':
        title="Movistar Series";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvbW92aXN0YXItc2VyaWVzLnBocA==";
        site="vertelevision.tv";
        break;

      case '2026':
        title="Movistar Comedia";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvbW92aXN0YXItY29tZWRpYS5waHA=";
        site="vertelevision.tv";
        break;

      case '2027':
        title="Movistar Drama";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvbW92aXN0YXItZHJhbWEucGhw";
        site="vertelevision.tv";
        break;

      case '2028':
        title="Movistar Accion";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvbW92aXN0YXItYWNjaW9uLnBocA==";
        site="vertelevision.tv";
        break;

      case '2029':
        title="TLnovelas";
        option="1";
        type="frame";
        source="L3AvMDA1MS5odG1s";
        site="vertelevision.tv";
        break;

      case '2030':
        title="Caza Y Pesca";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9jYXpheXBlc2NhLnBocA==";
        site="vertelevision.tv";
        break;

      case '2031':
        title="Movistar Plus Disney";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvbW92aXN0YXItZGlzbmV5LnBocA==";
        site="vertelevision.tv";
        break;

      case '2032':
        title="Movistar Estrenos";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvbW92aXN0YXItZXN0cmVub3MucGhw";
        site="vertelevision.tv";
        break;

      case '2033':
        title="Crimen Investigacion";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9jaS5waHA=";
        site="vertelevision.tv";
        break;

      case '2034':
        title="Cinemax";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2xhdGlub3MvY2luZW1heC5waHA=";
        site="vertelevision.tv";
        break;

      case '2035':
        title="TNT";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2xhdGlub3MvdG50LnBocA==";
        site="vertelevision.tv";
        break;

      case '2036':
        title="Calle 13";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvY2FsbGUxMy5waHA=";
        site="vertelevision.tv";
        break;

      case '2037':
        title="Syfy";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvc3lmeS5waHA=";
        site="vertelevision.tv";
        break;

      case '2038':
        title="TCM";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvdGNtLnBocA==";
        site="vertelevision.tv";
        break;

      case '2039':
        title="Paramount Channel";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvcGFyYW1vdW50LWNoYW5uZWwucGhw";
        site="vertelevision.tv";
        break;

      case '2040':
        title="Fox Life";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvZm94bGlmZS5waHA=";
        site="vertelevision.tv";
        break;

      case '2041':
        title="Hollywood";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvaG9sbHl3b29kLnBocA==";
        site="vertelevision.tv";
        break;

      case '2042':
        title="Neox";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvbmVveC5waHA=";
        site="vertelevision.tv";
        break;

      case '2043':
        title="Dark";
        option="1";
        type="frame";
        source="Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvZGFyay5waHA=";
        site="vertelevision.tv";
        break;

      case '2044':
        title="DMAX";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9kbWF4LnBocA==";
        site="vertelevision.tv";
        break;

      case '2045':
        title="Box Nation";
        option="2";
        type="frame";
        source="aHR0cHM6Ly92ZXJsaWdhMS5uZXQvdHYvZGVwb3J0ZXMvYm94bmF0aW9uLnBocA==";
        site="vertelevision.tv";
        break;

      case '2046':
        title="Canal Vamos";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RlcG9ydGVzL3ZhbW9zLnBocA==";
        site="vertelevision.tv";
        break;

      case '2047':
        title="Euro Sport 1";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RlcG9ydGVzL2V1cm9zcG9ydC5waHA=";
        site="vertelevision.tv";
        break;

      case '2048':
        title="Euro Sport 2";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RlcG9ydGVzL2V1cm9zcG9ydDIucGhw";
        site="vertelevision.tv";
        break;

      case '2049':
        title="Teledeporte";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RlcG9ydGVzL3RlbGVkZXBvcnRlLnBocA==";
        site="vertelevision.tv";
        break;

      case '2050':
        title="History";
        option="2";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9oaXN0b3JpYS5waHA=";
        site="vertelevision.tv";
        break;

      case '2051':
        title="Canal Blaze";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L2RvY3VtZW50YWxlcy9ibGF6ZS5waHA=";
        site="vertelevision.tv";
        break;

      case '2052':
        title="13 TV";
        option="1";
        type="frame";
        source="aHR0cHM6Ly92ZXJ0ZWxldmlzaW9uLnR2L3R2L25hY2lvbmFsZXMvMTN0di5waHA=";
        site="vertelevision.tv";
        break;




      case '2053':
        title="FOX Sports HD";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zb2xvdmVvLmNvbS9mb3hzcG9ydHNoZC5waHA=";
        site="";
        break;

      case '2054':
        title="Edge Sports";
        option="1";
        type="frame";
        source="MDAzMS5odG1s";
        site="espn-live.stream";
        break;

      case '2055':
        title="ESPN";
        option="1";
        type="frame";
        source="MDAyNS5odG1s";
        site="espn-live.stream";
        break;

      case '2056':
        title="ESPN";
        option="2";
        type="frame";
        source="aHR0cHM6Ly9zb2xvdmVvLmNvbS9lc3BuaGQucGhw";
        site="espn-live.stream";
        break;

      case '2057':
        title="Telemundo";
        option="1";
        type="frame";
        source="MDAzMC5odG1s";
        site="espn-live.stream";
        break;

      case '2058':
        title="Hard Knocks Fighting";
        option="1";
        type="frame";
        source="MDAwMS5odG1s";
        site="espn-live.stream";
        break;

      case '2059':
        title="Univision";
        option="1";
        type="frame";
        source="Ly9hbmFoaXgxMS5jb20vdW5pdmkucGhw";
        site="wstream.to";
        break;

      case '2060':
        title="History";
        option="1";
        type="frame";
        source="Ly90ZWxlZ3JhdGlzLm9yZy9jYW5hbC9oaXN0b3J5LnBocA==";
        site="wstream.to";
        break;

      case '2061':
        title="Gol TV Peru";
        option="1";
        type="frame";
        source="Ly90ZWxlZ3JhdGlzLm9yZy9jYW5hbC9nb2x0di5waHA=";
        site="telegratis.org";
        break;

      case '2062':
        title="DMAX";
        option="2";
        type="frame";
        source="aHR0cHM6Ly9jYW5saXR2LmNvbS9lbWJlZC8/aWQ9MTI5Nzk=";
        site="";
        break;

      case '2063':
        title="TLC";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9jYW5saXR2LmNvbS9lbWJlZC8/aWQ9MTEyMTk=";
        site="";
        break;

      case '2064':
        title="Disney Channel";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9jYW5saXR2LmNvbS9lbWJlZC8/aWQ9MTI0NDA=";
        site="";
        break;

      case '2065':
        title="Cartoon Network";
        option="2";
        type="frame";
        source="aHR0cHM6Ly9jYW5saXR2LmNvbS9lbWJlZC8/aWQ9MTEyMzM=";
        site="";
        break;

      case '2066':
        title="CBC Sport";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9jYW5saXR2LmNvbS9lbWJlZC8/aWQ9MTI3MzI=";
        site="www.cbcsport.az/live";
        break;

      case '2067':
        title="Sports TV";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9jYW5saXR2LmNvbS9lbWJlZC8/aWQ9MTIwMTc=";
        site="";
        break;

      case '2068':
        title="Sports TV 1";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zcG9ydHpvbmxpbmUudG8vY2hhbm5lbHMvcHQvc3BvcnR0djEucGhw";
        site="wstream.to";
        break;

      case '2069':
        title="Sports TV 2";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zcG9ydHpvbmxpbmUudG8vY2hhbm5lbHMvcHQvc3BvcnR0djIucGhw";
        site="wstream.to";
        break;

      case '2070':
        title="TNT Sports";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zb2xvdmVvLmNvbS90bnRzcG9ydHMucGhw";
        site="";
        break;

      case '2071':
        title="Sports TV 3";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zcG9ydHpvbmxpbmUudG8vY2hhbm5lbHMvcHQvc3BvcnR0djMucGhw";
        site="";
        break;

      case '2072':
        title="Sports TV 4";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zcG9ydHpvbmxpbmUudG8vY2hhbm5lbHMvcHQvc3BvcnR0djQucGhw";
        site="";
        break;

      case '2073':
        title="Sports TV 5";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zcG9ydHpvbmxpbmUudG8vY2hhbm5lbHMvcHQvc3BvcnR0djUucGhw";
        site="";
        break;

      case '2074':
        title="Match 1";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zcG9ydHpvbmxpbmUudG8vY2hhbm5lbHMvcnUvbWF0Y2gxLnBocA==";
        site="";
        break;

      case '2075':
        title="Match 2";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zcG9ydHpvbmxpbmUudG8vY2hhbm5lbHMvcnUvbWF0Y2gyLnBocA==";
        site="";
        break;

      case '2076':
        title="Match 3";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zcG9ydHpvbmxpbmUudG8vY2hhbm5lbHMvcnUvbWF0Y2gzLnBocA==";
        site="";
        break;

      case '2077':
        title="BT Sports 2";
        option="1";
        type="frame";
        source="aHR0cDovL2NyaWNoZC53cy91cGRhdGUvYnQyLnBocA==";
        site="";
        break;

      case '2078':
        title="Sky News";
        option="1";
        type="frame";
        source="aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvOUF1cTltWXhGRUU=";
        site="www.canalvip.tv";
        break;

      case '2079':
        title="Cali TV";
        option="1";
        type="frame";
        source="Ly9zdHJlYW1pbmcuY29tLmNvL2NsaWVudGVzL2NhbGl0di9wbGF5ZXIucGhw";
        site="www.canalcalitv.com";
        break;

      case '2080':
        title="VPI TV";
        option="1";
        type="frame";
        source="aHR0cHM6Ly90YWdzLmxhdGF0di5jb20vdnBpdHYvaW1hLmh0bWw=";
        site="vpitv.com";
        break;

      case '2081':
        title="Canal Capital";
        option="1";
        type="frame";
        source="aHR0cDovL21kc3RybS5jb20vbGl2ZS1zdHJlYW0vNTdkMDFkNmMyOGIyNjNlYjczYjU5YTVh";
        site="www.canalcapital.gov.co";
        break;

      case '2082':
        title="Canal TRO";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9wbGF5ZXIuY2RubWVkaWEudHYvZW1iZWQvMDBkNzdmYWQ=";
        site="www.canaltro.com";
        break;
      case '2083':
        title="Panamericana";
        option="1";
        type="frame";
        source="Ly93d3cuZGFpbHltb3Rpb24uY29tL2VtYmVkL3ZpZGVvL3g3NzRzN3M/YXV0b3BsYXk9MQ==";
        site="panamericana.pe";
        break;

      case '2084':
        title="STGO TV";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zdHYuamFudXMuY2wvZnJvbnQvZW1iZWQuaHRtbA==";
        site="www.santiagotelevision.cl";
        break;

      case '2085':
        title="Televid";
        option="1";
        type="frame";
        source="Ly9saXZlc3RyZWFtLmNvbS9hY2NvdW50cy8yODIzODg4MS9ldmVudHMvODU3NDAzOC9wbGF5ZXI/YXV0b1BsYXk9dHJ1ZSZtdXRlPWZhbHNl";
        site="televid.tv";
        break;

      case '2086':
        title="Telemedellín";
        option="1";
        type="frame";
        source="Ly9wbGF5ZXIuY2RubWVkaWEudHYvZW1iZWQvMTE3MWVhOGI=";
        site="telemedellin.tv";
        break;

      case '2087':
        title="America TV Argentina";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9kejkyamgxdW5rYXBtLmNsb3VkZnJvbnQubmV0L2FjY291bnRzLzViYmNmNzhkYjgyN2NlNzZhYTgyYTZhMC9wbGF5ZXIuaHRtbA==";
        site="www.americatv.com.ar";
        break;

      case '2088':
        title="Teleantioquia";
        option="1";
        type="video";
        source="aHR0cHM6Ly9oZHZpZGVvMi5jZG4ubmV0LmNvL2xpdmUwMS90YS5tM3U4";
        site="www.teleantioquia.co";
        break;

      case '2089':
        title="Rate 8 Sport";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9pZnJhbWUuZGFjYXN0LmNvbS9iLzEwMzcyNy9jLzQ3Nzk3OA==";
        site="www.rete8.it/canali-tv/rete8-sport";
        break;

      case '2090':
        title="UTV Honduras";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9saXZlLXV0di51bmFoLmVkdS5obi9odG1sL2hsc3BsYXllci5odG1s";
        site="utv.unah.edu.hn";
        break;

      case '2091':
        title="ElDoce TV";
        option="1";
        type="frame";
        source="aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZ0JiTWJxSUx6WFU=";
        site="eldoce.tv";
        break;

      case '2092':
        title="TV Ciudad";
        option="1";
        type="frame";
        source="aHR0cHM6Ly90di52ZXJhLmNvbS51eS9zeW5kaWNhdGlvbi9pbmRleC5waHAvc2luZGljYWNpb24vcGxheS9BTlRFTC1QTEFZRVIvNjA0Ni8xMDAlMjUvMTAwJTI1LzEvTlRJek56RTFPVGM0TURJMk5UUTZPalZqWlRZeU9EWTBPREZpTkdGbVpXSTFZalpoTVdaa1pXVXlPVFF3TUdVd016TTRNakZqWkRKbU9XRmxZVFl4WkRGaU5tWmpZakkzTkRRMVkyRmpZbU09";
        site="www.tvciudad.uy";
        break;

      case '2093':
        title="KSL TV";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9saXZlc3RyZWFtLmNvbS9hY2NvdW50cy8yMjcxMTg3Ni9ldmVudHMvNjc1OTc5MC9wbGF5ZXI/JmF1dG9QbGF5PXRydWUmbXV0ZT1mYWxzZQ==";
        site="ksltv.com";
        break;

      case '2094':
        title="WMAR 2 News";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9hc3NldHMuc2NyaXBwc2RpZ2l0YWwuY29tL2Ntcy92aWRlb0lmcmFtZS5odG1sPyZob3N0PXd3dy53bWFyMm5ld3MuY29tJnRpdGxlPUVtYmVkZWQlMjBWaWRlbyZtM3U4PWh0dHBzOi8vY29udGVudC51cGx5bmsuY29tL2NoYW5uZWwvY2Y0ZGZlYzE3OTA2NDY2NGFlMzI2ZmExMGZmNGE0M2YubTN1OCZsaXZlPTEmcHVybD0vdmlkZW9zJnN0b3J5PTAmZXg9MSZzPXdtYXI=";
        site="www.wmar2news.com";
        break;

      case '2095':
        title="Canal Uno Colombia";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9tZHN0cm0uY29tL2xpdmUtc3RyZWFtLzVhNWUxYzI1NjhiMTkxMDkxM2RiNWZlMg==";
        site="canal1.com.co";
        break;

      case '2096':
        title="WIPR";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9saXZlc3RyZWFtLmNvbS9hY2NvdW50cy8xNjU1MDk2MC9ldmVudHMvODYwMDk0MS9wbGF5ZXI=";
        site="www.wipr.pr";
        break;

      case '2097':
        title="Telemicro Canal 5";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9saXZlc3RyZWFtLmNvbS9hY2NvdW50cy8yODEyNjg2MC9ldmVudHMvODgyNTI4Mi9wbGF5ZXI=";
        site="telemicro.com.do";
        break;

      case '2098':
        title="Colorvision Canal 9";
        option="1";
        type="frame";
        source="aHR0cHM6Ly93d3cuZGFpbHltb3Rpb24uY29tL2VtYmVkL3ZpZGVvL3g3Z3kwNTk/YXBpPXBvc3RNZXNzYWdlJmF1dG9wbGF5PXRydWUmaWQ9cGxheWVyJm11dGU9ZmFsc2U=";
        site="colorvision.com.do";
        break;

      case '2099':
        title="Canal 4 RD";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9saXZlc3RyZWFtLmNvbS9hY2NvdW50cy8yNzAzNTI3NS9ldmVudHMvODM3MTcxMC9wbGF5ZXI=";
        site="canal4rd.com";
        break;

      case '2100':
        title="El Toro TV";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9zaGFyZXMuZW5ldHJlcy5uZXQvbGl2ZS5waHA/c291cmNlPUNvcmVWMSZ2PTE2MDExOTM5QzYyRDQ0RUQ5MTM1MDUwOEZCMjU4MjhCMDIx";
        site="eltorotv.com";
        break;

      case '2101':
        title="Canal Caracol";
        option="2";
        type="frame";
        source="aHR0cHM6Ly9jZG4uY2hhdHl0dmdyYXRpcy5uZXQvY2FyYWNvbHRhYnMucGhw";
        site="www.caracoltv.com";
        break;

      case '2102':
        title="Noticias Caracol Ahora";
        option="3";
        type="frame";
        source="aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvOFhMOFFrNHF6eUE=";
        site="www.caracoltv.com";
        break;

      case '2103':
        title="Canal Volver";
        option="1";
        type="frame";
        source="aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvbTFUWnNGa0N2cXc=";
        site="www.volver.com.ar";
        break;

      case '2104':
        title="5RTV";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9saXZlc3RyZWFtLmNvbS9hY2NvdW50cy8yMjYzNjAxMi9ldmVudHMvODI0MjYxOS9wbGF5ZXI/YXV0b1BsYXk9dHJ1ZSZtdXRlPWZhbHNl";
        site="5rtv.com.ar";
        break;

      case '2105':
        title="TV Familia";
        option="1";
        type="frame";
        source="aHR0cHM6Ly95b3dpLnR2L2VtYmVkL3R2ZmFtaWxpYQ==";
        site="www.tvfamilia.com";
        break;

      case '2106':
        title="Telecafe";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9saXZlc3RyZWFtLmNvbS9hY2NvdW50cy8xMDE1NDc2L2V2ZW50cy83MTU4NTExL3BsYXllcj9hdXRvUGxheT10cnVlJm11dGU9ZmFsc2U=";
        site="telecafe.gov.co";
        break;

      case '2107':
        title="Canal RCN";
        option="2";
        type="frame";
        source="aHR0cHM6Ly9jZG4uY2hhdHl0dmdyYXRpcy5uZXQvcmNudGFicy5waHA=";
        site="www.canalrcn.com";
        break;

      case '2108':
        title="Telecentro";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9saXZlc3RyZWFtLmNvbS9hY2NvdW50cy8yODEyNjg2MC9ldmVudHMvODU1NTQzMy9wbGF5ZXI/YXV0b1BsYXk9dHJ1ZSZtdXRlPWZhbHNl";
        site="telecentro.com.do";
        break;

      case '2109':
        title="Enlace";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9saXZlc3RyZWFtLmNvbS9hY2NvdW50cy8yNjc1ODQzL2V2ZW50cy8xODM5MzMyL3BsYXllcj9hdXRvUGxheT10cnVlJm11dGU9ZmFsc2U=";
        site="www.enlace.org";
        break;

      case '2110':
        title="NASA Live Stream";
        option="1";
        type="frame";
        source="aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRUVJazdnd2pnSU0=";
        site="";
        break;

      case '2111':
        title="FAZchannelTV Love";
        option="1";
        type="frame";
        source="aHR0cHM6Ly9mYXpjaGFubmVsdHZsb3ZlLmNoYXR1cmJhdGUuY29tL2luLz90cmFjaz1lbWJlZCZ0b3VyPWRUbTAmY2FtcGFpZ249VXFIYUMmZGlzYWJsZV9zb3VuZD0xJm1vYmlsZVJlZGlyZWN0PWF1dG8mZW1iZWRfdmlkZW9fb25seT0x";
        site="fazchanneltvlove.com";
        break;

      case '2112':
        title="FB Spor TV";
        option="1";
        type="frame";
        source="aHR0cHM6Ly93d3cuZGFpbHltb3Rpb24uY29tL2VtYmVkL3ZpZGVvL3gyMW9vMTA/YXV0b3BsYXk9MQ==";
        site="www.fenerbahce.org";
        break;

      case '2113':
        title="ESPN";
        option="3";
        type="frame";
        source="aHR0cHM6Ly9zcG9ydHpvbmxpbmUudG8vY2hhbm5lbHMvYnJhL2JyMS5waHA=";
        site="";
        break;

      case '2114':
        title="Telemundo";
        option="2";
        type="frame";
        source="Ly9hbmFoaXgxMS5jb20vY2hpdmFzMy5waHA=";
        site="";
        break;

      case '2115':
        title="The Pitch Drop Experiment";
        option="2";
        type="frame";
        source="aHR0cHM6Ly9saXZlc3RyZWFtLmNvbS9hY2NvdW50cy80OTMxNTcxL2V2ZW50cy81MzY5OTEzL3BsYXllcj93aWR0aD0xNTkwJmhlaWdodD04OTUmYXV0b1BsYXk9dHJ1ZSZtdXRlPXRydWU=";
        site="";
        break;



      default:
        title="Canales De TV";
        option="1";
        source=stream;
        break;
    };
  };

  channelSwitch();

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var FAZchannelTVoverlay=Clappr.UIContainerPlugin.extend({
    initialize:function(){
      this.$el.html('<div class="clpr-emre overlayBootom"><iframe scrolling="no" src="//fazchanneltvads.blogspot.com/p/1-0050.html" style="width:100%;border:0px;"></iframe></div>');
      this.container.$el.append(this.$el);
      return this;
    },
  });

  function FAZchannelTV(){
    var fp=d.getElementById('fazchanneltvPlayer');
    if(typeof(type)!=='undefined' && type=='hls'){
      var st=d.createElement('style'), sc=d.createElement('script');
      st.innerHTML='#video{position:absolute;border:0px;width:100%;height:100%;}';
      head.appendChild(st);
      sc.rel='preload';
      sc.src='//cdn.jsdelivr.net/npm/hls.js@latest';
      head.appendChild(sc);
      var vd=d.createElement('video');
      vd.id='video';
      vd.src='';
      vd.width='';
      vd.height='';
      vd.controls=true;
      fp.appendChild(vd);
      window.addEventListener('load', function(){
        if(Hls.isSupported()){
          var video=d.getElementById('video');
          var hls=new Hls();
          hls.loadSource(atob(source));
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED,function(){
            video.play();
          });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')){
          video.src='playlist.m3u8';
          video.addEventListener('canplay', function(){
            video.play();
          });
        }
      });
    } else if(typeof(type)!=='undefined' && type=='frame'){
      var s2=d.createElement('style');
      s2.innerHTML='.networks{width:100%;}.networks .boxLogo{display:block;}@media screen and (max-width:600px){.networks .boxLogo{ display:none;}}';
      head.appendChild(s2);
      var i1=d.createElement('iframe');
      i1.setAttribute('class', 'iframeLive3');
      i1.frameBorder=0;
      i1.scrolling='no';
      i1.allowFullscreen='true';
      i1.onload='ons()';
      if(site=='vertelevision.tv'){
        i1.setAttribute('class', 'iframeLive4');
        i1.sandbox='allow-same-origin allow-scripts allow-forms';
      } else {
        function sandbox(){  // Sandbox Iframe Not Allowed
          return !(/espn-live.stream|wstream.to|fazchanneltv.com/i.test(site));
        };
        if(sandbox()){
          i1.sandbox='allow-same-origin allow-scripts allow-forms';
        };
      };
      fp.appendChild(i1);
      setTimeout(function(){
        i1.src='proxy.html?stream=' + getParameter('stream');
      }, 100);
    } else {
      var player=new Clappr.Player({
        source:atob(source),
        parentId:'#fazchanneltvPlayer',
        width:'100%',
        height:'100vh',
        preload:'auto',
        mute:false,
        autoPlay:true,
        actualLiveTime:true,
        watermark:'//1.bp.blogspot.com/-r7-A3epq4hc/XSgXhNdXOkI/AAAAAAAAE70/XaINssUFp5YLAyYlkHUokzrEIYamDKu4wCLcBGAs/s1600/fazchanneltv-live.png',
        watermarkLink:String.fromCharCode(47,47,119,119,119,46,102,97,122,99,104,97,110,110,101,108,116,118,46,99,111,109),
        position:'top-right',
        plugins:[LevelSelector, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback, Clappr.MediaControl, PlaybackRatePlugin, FAZchannelTVoverlay],
        strings:{
          'en-EN':{
            'live':'FAZchannelTV Player',
            'back_to_live':'RETURN TO LIVE BROADCAST',
            'playback_not_supported':'Your browser cannot reproduce this medium. Please try again with a different browser'
          }
        },
        language:'en-EN',
        mediacontrol:{
          seekbar:"#E113D3",
          buttons:"#66B2FF"
        },
        events:{
          onReady:function(){
            var plugin=this.getPlugin('click_to_pause');
            plugin && plugin.disable();
          },
        },
      });
      d1.onmousedown=function(){
        player.setVolume(100);
      };
    };
  };

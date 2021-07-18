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


/*
  https://canaltelesantiago.com/en-vivo
  http://envivo.win/
  http://www.m3u.cl/canales.php
  https://adictosalatele.com/TV/latinos/cinemax/
  https://photocall.tv/
  https://vercanalestv.live/cinemax-en-vivo-por-internet/
  https://3abnlatino.tv/tv/
  https://www.musicacristiana.com.ar/bethel-tv.html
  https://mmmcostarica.com/#why-us-section
   http://totv.org/tv-mtv-hits
  https://televisionlibre.net/es/
  https://toplatino.net/
  https://latinosnctv.com/
   http://lacalleochotv.org/cartoon-network-latino-online-gratis/
  https://latinoweb-tv.com/tv-en-vivo/fox-sports-premium
  https://www.latinmusictv.net/
  https://www.ver-television.online/canal-cinecanal-en-vivo
  https://serieslan.com/alf/bienvenidos
*/

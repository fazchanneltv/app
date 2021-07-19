//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* >>> Radio Playlist <<<
  ==================================================*/
var j = jQuery.noConflict();
var audio = j('audio');
var playlist = j('#playlist');
var current;
var tracks;
var link;

function run(a, source) {
  source.src = a.attr('href');
  p = a.parent();
  p.addClass('active').siblings().removeClass('active');
  audio[0].load();
  audio[0].play();
};

function init() {
  current = 0;
  audio[0].volume = 1;
  tracks = playlist.find('li a');
  len = tracks.length - 1;
  playlist.find('a').click(function(e) {
    e.preventDefault();
    link = j(this);
    current = link.parent().index();
    run(link, audio[0]);
  });

  audio[0].addEventListener('ended', function(e) {
    current++;
    if (current > len) {
      current = 0;
      link = playlist.find('a')[0];
    } else {
      link = playlist.find('a')[current];
    };
    run(j(link), audio[0]);
  });
};
init();

/* >>> Histats <<<
      =======================*/
var _Hasync = _Hasync || [];
_Hasync.push(['Histats.start', '1,4442247,4,107,170,20,00011111']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* >>> Radio Playlist <<<
  ==================================================*/
var audio;
var playlist;
var tracks;
var current;
var mylink;


function init() {
  current = 0;
  audio = $('audio');
  audio[0].volume = 1;
  playlist = $('#playlist');
  tracks = playlist.find('li a');
  len = tracks.length - 1;
  playlist.find('a').click(function(e) {
    e.preventDefault();
    mylink = $(this);
    current = mylink.parent().index();
    run(mylink, audio[0]);
  });

  audio[0].addEventListener('ended', function(e) {
    current++;
    if (current > len) {
      current = 0;
      mylink = playlist.find('a')[0];
    } else {
      mylink = playlist.find('a')[current];
    }
    run($(mylink), audio[0]);
  });
};
init();

function run(link, player) {
  player.src = link.attr('href');
  par = link.parent();
  par.addClass('active').siblings().removeClass('active');
  audio[0].load();
  audio[0].play();
};

/* >>> Histats <<<
      =======================*/
var _Hasync = _Hasync || [];
_Hasync.push(['Histats.start', '1,4442247,4,107,170,20,00011111']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);

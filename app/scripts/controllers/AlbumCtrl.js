(function() {
    function AlbumCtrl() {
      this.albumData = {
        title: 'Framing Defeat For the Critical Eye',
        artist: 'Cables & Arms',
        label: 'Wiretap Records',
        year: '2016',
        albumArtUrl: 'assets/images/album_covers/Cables_cover.jpg',
        songs: [
          { title: 'Loss of Gain', duration: '191.00', audioUrl: 'assets/music/01\ Loss\ Of\ Gain' },
          { title: 'Hang the Moon', duration: '179.01', audioUrl: 'assets/music/02\ Hang\ the\ Moon'},
          { title: 'A Lasting Mark', duration: '259.00', audioUrl: 'assets/music/03\ A\ Lasting\ Mark'},
          { title: 'Wisdom Teeth', duration: '216.00', audioUrl: 'assets/music/04\ Wisdom\ Teeth'},
          { title: 'Recurring State', duration: '76.00', audioUrl: 'assets/music/05\ Recurring\ State'},
          { title: 'Kill Yourself', duration: '156.00', audioUrl: 'assets/music/06\ Kill\ Yourself'},
          { title: 'Fool Me Twice', duration: '185.00', audioUrl: 'assets/music/07\ Fool\ Me\ Twice'},
          { title: 'Strongarm', duration: '259.00', audioUrl: 'assets/music/08\ Strongarm'},
          { title: 'Youll Be Sorry', duration: '216.00', audioUrl: 'assets/music/09\ Youll\ Be\ Sorry'},
          { title: 'Gift Horse', duration: '194.00', audioUrl: 'assets/music/010\ Gift\ Horse'}
        ]
      }
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();

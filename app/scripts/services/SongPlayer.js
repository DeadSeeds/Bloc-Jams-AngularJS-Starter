(function() {
    function SongPlayer($rootScope, Fixtures) {
      var currentAlbum = Fixtures.getAlbum();
      var SongPlayer = {};
      /*
       * @desc Buzz object audio file
       * @type {Object}
       */
      var currentBuzzObject = null;

      /*
      * @function setSong
      * @desc Stops currently playing song and loads new audio file as currentBuzzObject
      * @param {Object} song
      */

      var setSong = function(song) {
        if (currentBuzzObject) {
          currentBuzzObject.stop();
          SongPlayer.currentSong.playing = null;
        } else if (SongPlayer.currentSong === song) {
          if (currentBuzzObject.isPaused()) {
            currentBuzzObject.play();
          }
        }
        currentBuzzObject = new buzz.sound(song.audioUrl, {
          formats: ['mp3'],
          preload: true
        });

        currentBuzzObject.bind('timeupdate', function() {
          $rootScope.$apply(function() {
            SongPlayer.currentTime = currentBuzzObject.getTime();
          });
        });

        SongPlayer.currentSong = song;
      };

      /*
      * @function playSong
      * @desc Plays new audio file (song) as currentBuzzObject
      * @param {Object} song
      */

      var playSong = function(song) {
        currentBuzzObject.play();
        song.playing = true;
      };

      var stopSong = function(song) {
        currentBuzzObject.stop();
        song.playing = null;
      }

      /*
      * @function getSongIndex
      * @desc Determines the index position of the song
      * @param {Object} song
      */

      var getSongIndex = function(song) {
        return currentAlbum.songs.indexOf(song);
      }

      SongPlayer.currentSong = null;

      /*
      * @desc Current playback time (in seconds) of currently playing song
      * @type {Number}
      */
      SongPlayer.currentTime = null;

      /*
      * @function SongPlayer.play
      * @desc Method that sets current song and plays it
      * @param {Object} song
      */

      SongPlayer.play = function(song) {
        song = song || SongPlayer.currentSong;
        if (SongPlayer.currentSong !== song) {
          setSong(song);
          playSong(song);
        } else if (SongPlayer.currentSong === song) {
           if (currentBuzzObject.isPaused()) {
               playSong(song);
           }
        }
      };

      SongPlayer.pause = function(song) {
        song = song || SongPlayer.currentSong;
        currentBuzzObject.pause();
        song.playing = false;
      };

      /*
      * @function SongPlayer.previous
      * @desc Method that sets current song to the previous song
      */

      SongPlayer.previous = function() {
        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
        currentSongIndex--;

        if (currentSongIndex < 0) {
          currentBuzzObject.stop();
          SongPlayer.currentSong.playing = null;
        } else {
          var song = currentAlbum.songs[currentSongIndex];
          setSong(song);
          playSong(song);
          }
        };

        /*
        * @function SongPlayer.next
        * @desc Method that sets current song to the next song
        */

      SongPlayer.next = function() {
        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
        currentSongIndex++;

        if (currentSongIndex > currentAlbum.songs.length - 1) {
          currentBuzzObject.stop();
          SongPlayer.currentSong.playing = null;
        } else {
          var song = currentAlbum.songs[currentSongIndex];
          setSong(song);
          playSong(song);
        };

      };

      /*
      * @function setCurrentTime
      * @desc Set current time (in seconds) of currently playing song
      * @param {Number} time
      */

      SongPlayer.setCurrentTime = function(time) {
        if (currentBuzzObject) {
          currentBuzzObject.setTime(time);
        }
      };

      return SongPlayer;
    }

    angular
      .module('blocJams')
      .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();

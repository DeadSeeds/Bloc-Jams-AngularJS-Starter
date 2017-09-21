(function() {
    function SongPlayer() {
      var SongPlayer = {};
      var currentSong = null;

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
          currentSong.playing = null;
        } else if (currentSong === song) {
          if (currentBuzzObject.isPaused()) {
            currentBuzzObject.play();
          }
        }
        currentBuzzObject = new buzz.sound(song.audioUrl, {
          formats: ['mp3'],
          preload: true
        });
        currentSong = song;
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

      /*
      * @function SongPlayer.play
      * @desc Method that sets current song and plays it
      * @param {Object} song
      */

      SongPlayer.play = function(song) {
        if (currentSong !== song) {
          setSong(song);
          playSong(song);
        }
      };

      SongPlayer.pause = function(song) {
        currentBuzzObject.pause();
        song.playing = false;
      };

      return SongPlayer;
    }

    angular
      .module('blocJams')
      .factory('SongPlayer', SongPlayer);
})();

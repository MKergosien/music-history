$(document).ready(function() {

 $.ajax({
     url: "songs.json"
 }) .done(function(data) {
   // console.log(data);
   //this is transfer to browser
    var contentEl = $("#songs");
   

 for (var i = 0; i <data.songs.length; i++) {
   var songName = data.songs[i].name;
   var songArtist = data.songs[i].artist;
   var songAlbum = data.songs[i].album;
   var songsText = '<div class="song-name"><h3>' + songName + "</h3><p>" + songArtist 
                       + " | " + songAlbum + "</p>" + "<button id='deleteButton'>Delete</button>" + "</div>";
   $("#more").before(songsText);
   console.log(songsText);
  }
})

$("#more").click(function() {
 $(this).slideDown();

// $( document ).on( "click", “#deleteButton", function() {
//         remove(.song-name);
// });

 $.ajax({
   url: "songs2.json"
 }).done(function(data) {
   var contentEl = $("#songs");
   

 for (var i = 0; i <data.songs.length; i++) {
   var songName = data.songs[i].name;
   var songArtist = data.songs[i].artist;
   var songAlbum = data.songs[i].album;
   var songsText = '<div class="song-name"><h3>' + songName + "</h3><p>" + songArtist 
                      + " | " + songAlbum + "</p>" + "<button>Delete</button>" + "</div>";
   $("#more").before(songsText);
   console.log(songsText);

 }

 })


});

});
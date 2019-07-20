var playlist = {
  BigBang: "monster",
  Blink182: "I miss you"
} ;

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]; //Use bracket here bc input from test was in string form, so can't do playlist.artistname bc it'll be playlist.'artistname'
  return playlist
}

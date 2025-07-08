// Simulated Spotify Playlist Data
const playlists = [
    {
        title: "Chill Vibes",
        songs: [
            {
                title: "Sunset Lover",
                artist: "Petit Biscuit",
                album: "Presence",
                albumArt: "https://i.scdn.co/image/ab67616d0000b27341ad651919293ac9c2df362a"
            },
            {
                title: "Electric Feel",
                artist: "MGMT",
                album: "Oracular Spectacular",
                albumArt: "https://i.scdn.co/image/ab67616d0000b273b5f096a6645318a0026e641c"
            },
            {
                title: "The Less I Know The Better",
                artist: "Tame Impala",
                album: "Currents",
                albumArt: "https://i.scdn.co/image/ab67616d0000b27341ad651919293ac9c2df362a" // Placeholder, use unique if possible
            }
        ]
    },
    {
        title: "Workout Mix",
        songs: [
            {
                title: "Blinding Lights",
                artist: "The Weeknd",
                album: "After Hours",
                albumArt: "https://i.scdn.co/image/ab67616d0000b273e936ce44061556e4c274291c"
            },
            {
                title: "Thunderstruck",
                artist: "AC/DC",
                album: "The Razors Edge",
                albumArt: "https://i.scdn.co/image/ab67616d0000b273f5509939a3f2d01117178b66"
            },
            {
                title: "Eye of the Tiger",
                artist: "Survivor",
                album: "Eye of the Tiger",
                albumArt: "https://i.scdn.co/image/ab67616d0000b273c50059e66c770c8cf896c21e"
            }
        ]
    },
    {
        title: "Acoustic Focus",
        songs: [
            {
                title: "Skinny Love",
                artist: "Bon Iver",
                album: "For Emma, Forever Ago",
                albumArt: "https://i.scdn.co/image/ab67616d0000b2733979434863773176d6c97a8a"
            },
            {
                title: "I Will Follow You into the Dark",
                artist: "Death Cab for Cutie",
                album: "Plans",
                albumArt: "https://i.scdn.co/image/ab67616d0000b273d4a6f272c726353d262145e5"
            }
        ]
    }
];

// --- DOM Elements ---
const playlistTitleElem = document.getElementById('playlist-title');
const songTitleElem = document.getElementById('song-title');
const songArtistElem = document.getElementById('song-artist');
const songAlbumElem = document.getElementById('song-album');
const albumArtElem = document.getElementById('album-art');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// --- App State ---
let currentPlaylistIndex = 0;
let currentSongIndex = 0;

// --- Functions ---

/**
 * Renders the current playlist and song details to the DOM.
 */
function renderCurrentContent() {
    const currentPlaylist = playlists[currentPlaylistIndex];
    const currentSong = currentPlaylist.songs[currentSongIndex];

    playlistTitleElem.textContent = currentPlaylist.title;
    songTitleElem.textContent = currentSong.title;
    songArtistElem.textContent = currentSong.artist;
    songAlbumElem.textContent = currentSong.album;
    albumArtElem.src = currentSong.albumArt;
    albumArtElem.alt = `${currentSong.title} album art`;
}

/**
 * Moves to the next song or playlist.
 * If at the end of a playlist, moves to the next playlist's first song.
 * If at the end of all playlists, loops back to the beginning.
 */
function goToNext() {
    currentSongIndex++;
    if (currentSongIndex >= playlists[currentPlaylistIndex].songs.length) {
        currentSongIndex = 0; // Reset song index
        currentPlaylistIndex++; // Move to next playlist
        if (currentPlaylistIndex >= playlists.length) {
            currentPlaylistIndex = 0; // Loop back to the first playlist
        }
    }
    renderCurrentContent();
}

/*
 * Moves to the previous song or playlist.
 * If at the beginning of a playlist, moves to the previous playlist's last song.
 * If at the beginning of all playlists, loops back to the end.
*/
function goToPrevious() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentPlaylistIndex--; // Move to previous playlist
        if (currentPlaylistIndex < 0) {
            currentPlaylistIndex = playlists.length - 1; // Loop back to the last playlist
        }
        currentSongIndex = playlists[currentPlaylistIndex].songs.length - 1; // Set to last song of previous playlist
    }
    renderCurrentContent();
}

// --- Event Listeners ---
nextBtn.addEventListener('click', goToNext);
prevBtn.addEventListener('click', goToPrevious);

// --- Initial Render ---
renderCurrentContent();
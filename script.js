function recommendMusic(mood) {
  const result = document.getElementById("result");
  const playlist = document.getElementById("playlist");

  let message = "";
  let songLink = "";

  switch (mood) {
    case "Happy":
      message = "😊 You're feeling happy! Enjoy this joyful track!";
      songLink = "https://www.youtube.com/watch?v=hRkc-OPHApY";
      break;
    case "Sad":
      message = "😢 A bit down? Here's something calming.";
      songLink = "https://www.youtube.com/watch?v=CK7pPXdYZLQ";
      break;
    case "Excited":
      message = "🤩 Pumped up? Let’s turn up the volume!";
      songLink = "https://www.youtube.com/watch?v=ljnGl5nvUJY";
      break;
    case "Relaxed":
      message = "😌 Relax and vibe with this lo-fi track.";
      songLink = "https://www.youtube.com/watch?v=h1yULupp90M";
      break;
    default:
      message = "Please select a mood.";
  }

  result.innerText = message;
  playlist.innerHTML = `<a href="${songLink}" target="_blank">▶️ Play on YouTube</a>`;
}

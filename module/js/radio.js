export const radio = () => {
  const audioPicker = document.getElementById("audioPicker");
  const audioPlayer = document.getElementById("audioPlayer");

  audioPicker.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      audioPlayer.src = fileURL;
      audioPlayer.play();
    }
  });
};

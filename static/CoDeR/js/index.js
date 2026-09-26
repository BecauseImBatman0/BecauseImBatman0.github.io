function initializeVideoPlayer(video, playButton, videoError) {
  // Native controls remain available when JavaScript is disabled.
  video.controls = false;
  playButton.hidden = false;

  playButton.addEventListener('click', async () => {
    playButton.disabled = true;
    videoError.hidden = true;
    video.controls = true;
    try {
      await video.play();
      playButton.hidden = true;
      video.focus();
    } catch {
      playButton.hidden = true;
      videoError.hidden = false;
    } finally {
      playButton.disabled = false;
    }
  });

  video.addEventListener('playing', () => {
    playButton.hidden = true;
    videoError.hidden = true;
  });

  const showVideoError = () => {
    playButton.hidden = true;
    video.controls = true;
    videoError.hidden = false;
  };
  video.addEventListener('error', showVideoError);
  video.querySelector('source').addEventListener('error', showVideoError);
}

const video = document.querySelector('#teaser-video');
const playButton = document.querySelector('#play-teaser');
const videoError = document.querySelector('#video-error');
initializeVideoPlayer(video, playButton, videoError);

// Keep the labels inside comparison videos visible until playback begins.
document.querySelectorAll('.comparison-video').forEach((comparison, index) => {
  const button = playButton.cloneNode(true);
  button.removeAttribute('id');
  button.setAttribute('aria-label', `Play comparison video ${index + 1}`);
  comparison.parentElement.append(button);

  const error = videoError.cloneNode(true);
  error.removeAttribute('id');
  error.querySelector('a').setAttribute('href', comparison.querySelector('source').getAttribute('src'));
  comparison.closest('figure').append(error);
  initializeVideoPlayer(comparison, button, error);
});

const methodLink = document.querySelector('#open-method');
const methodDialog = document.querySelector('#method-dialog');
const methodViewport = methodDialog.querySelector('.dialog-image-container');
const zoomButton = document.querySelector('#zoom-method');

methodLink.addEventListener('click', (event) => {
  // Keep the image link as a fallback and preserve opening in a new tab.
  if (!methodDialog.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  methodDialog.showModal();
  document.body.classList.add('modal-open');
});

document.querySelector('#close-method').addEventListener('click', () => methodDialog.close());
methodDialog.addEventListener('click', (event) => {
  if (event.target !== methodDialog) return;
  const rect = methodDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
    methodDialog.close();
  }
});
methodDialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  methodViewport.classList.remove('is-zoomed');
  methodViewport.scrollTo(0, 0);
  zoomButton.setAttribute('aria-pressed', 'false');
  zoomButton.textContent = 'Zoom in';
  methodLink.focus({ preventScroll: true });
});
zoomButton.addEventListener('click', () => {
  const zoomed = methodViewport.classList.toggle('is-zoomed');
  zoomButton.setAttribute('aria-pressed', String(zoomed));
  zoomButton.textContent = zoomed ? 'Fit to screen' : 'Zoom in';
  if (!zoomed) methodViewport.scrollTo(0, 0);
});

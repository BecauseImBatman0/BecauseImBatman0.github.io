# Coding World System

Project page: [`../../CodingWorldSystem.html`](../../CodingWorldSystem.html).

The page follows the repository's existing convention: one HTML entry at the
repository root, with project assets grouped under `static/<project>/`.

- `css/index.css`: responsive layout, typography, and background styling.
- `js/index.js`: teaser playback and the method diagram's zoom dialog.
- `images/`: background, favicon, method diagram, and video poster.
- `videos/teaser.mp4`: browser-ready H.264/AAC teaser with fast-start metadata.
- `pdfs/method.pdf`: full-resolution method figure, accessible from the zoom dialog.

Author names, affiliation superscripts, and institution labels are maintained in
`CodingWorldSystem.html`. All assets are local; no build step, package installation,
external fonts, or JavaScript CDN is required.

The Paper and Code buttons below the affiliations are disabled placeholders until
their destination URLs are available. To enable one, replace its button with an
anchor using the same `resource-button` class and the confirmed URL.

Open `CodingWorldSystem.html` directly or serve the repository with a static HTTP
server. Use a server with HTTP byte-range support for video seeking.

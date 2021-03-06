# tout-videoplayer
The ToutVideoPlayer as a custom element.

## Goal
A lightweight alternate to players like Video.js or ToutVideoPlayer.
Look and feel like <video> with enhanced abilities.
* https://html.spec.whatwg.org/multipage/media.html#the-video-element
* https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement

* Focused on playing video and ad.
* Mobile first.
  * Only load resources when absolutely needed.
* Responsive sizing.
* Uses the same API as the standard <video> element.
* Can play HLS/Mpeg-Dash/MP4 videos
  * will load 3rd party support when browsers do not support the video type.
  * Only load 3rd party if needed. If there is a source with a supported video type, it will not load the support.

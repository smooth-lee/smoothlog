/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// require('prismjs/themes/prism-okaidia.css')
require('./src/themes/prism-material-dark.css')
const FontFaceObserver = require('fontfaceobserver')

if (typeof sessionStorage !== 'undefined') {
  if (sessionStorage.fontsLoaded) {
    const html = document.documentElement
    html.classList.add('fonts-loaded')
  } else {
    document.documentElement.classList.add('blocking-time')
    setTimeout(function() {
      document.documentElement.classList.remove('blocking-time')
    }, 400)
    const font = new FontFaceObserver('Noto Sans KR')
    const font2 = new FontFaceObserver('Noto Serif KR')

    Promise.all([font.load(null, 3000), font2.load(null, 3000)]).then(
      ([font, font2]) => {
        if (font.family && font2.family) {
          document.documentElement.classList.add('fonts-loaded')
          sessionStorage.fontsLoaded = true
        }
      }
    )
  }
}

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require('react')
exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
       (function() {
        var classNameDark = 'dark-mode';
        var classNameLight = 'light-mode';

        function setClassOnDocumentBody(darkMode) {
          document.body.classList.add(
            darkMode ? classNameDark : classNameLight
          );
          document.body.classList.remove(
            darkMode ? classNameLight : classNameDark
          );
        }

        var preferDarkQuery = '(prefers-color-scheme: dark)';
        var mql = window.matchMedia(preferDarkQuery);
        var supportsColorSchemeQuery = mql.media === preferDarkQuery;
        var localStorageTheme = null;
        try {
          localStorageTheme = localStorage.getItem('darkMode');
        } catch (err) {}
        var localStorageExists = localStorageTheme !== null;
        if (localStorageExists) {
          localStorageTheme = JSON.parse(localStorageTheme);
        }

        // Determine the source of truth
        if (localStorageExists) {
          // source of truth from localStorage
          setClassOnDocumentBody(localStorageTheme);
        } else if (supportsColorSchemeQuery) {
          // source of truth from system
          setClassOnDocumentBody(mql.matches);
          localStorage.setItem('darkMode', mql.matches);
        } else {
          // source of truth from document.body
          var isDarkMode = document.body.classList.contains(classNameDark);
          localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        }
      })();
     `,
      }}
    />,
  ])
}

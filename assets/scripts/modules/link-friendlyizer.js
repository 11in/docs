/**
 * We want two things:
 *
 * 1. Open external links in a new tab
 * 2. When opening links in a new tab, do it safely
 *
 * This code makes sure all links do those things.
 */
function setup() {
  Array.from(document.querySelectorAll(`a[href^="http"]`)).filter(el => {
    const url = new Window.URL(el.href, window.location);
    return url.host !== document.location.host;
  }).map(el => {
    const target = el.target;
    const rel = el.rel;
    if (!target) {
      el.target = `_blank`;
    }
    if ((!target && !rel) || (target === `_blank` && !rel)) {
      el.rel = `noopener noreferrer`;
    }
  })
}

export default setup

'use client';
import { isAndroid } from './BrowserDetection';
var defer = typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : setTimeout;
var strNone = 'none';
function safeSetSelection(element, selectionStart, selectionEnd) {
  if (document.activeElement === element) {
    if (isAndroid()) {
      defer(function () {
        return element.setSelectionRange(selectionStart, selectionEnd, strNone);
      }, 0);
    } else {
      element.setSelectionRange(selectionStart, selectionEnd, strNone);
    }
  }
}
export default safeSetSelection;
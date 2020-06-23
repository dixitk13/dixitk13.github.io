export function getPercentScrolled() {
  const topPos = document.documentElement.scrollTop;

  // Remaining left to scroll
  const remaining =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
  // clientHeight is the inner height of the element, including padding

  const percentage = (topPos / remaining) * 100;

  return percentage;
}

export default function windowsScrolling() {
const totalScrollHeight = document.body.clientHeight;

 window.scrollTo({
  top: totalScrollHeight,
  left: 0,
  behavior: 'smooth',
});
}
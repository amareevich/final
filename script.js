import "./style/style.scss";
import { modal_view } from "./js/modal.js";
modal_view();
document.addEventListener("DOMContentLoaded", () => {
  let mode = null;
  let swiperInst, desktopInst;
  async function setListener() {
    const newMode = window.innerWidth < 767 ? "modile" : "desktop";
    if (newMode === mode) return;
    mode = newMode;
    if (newMode === "modile") {
      desktopInst?.forEach((el) => el.destroy());
      swiperInst = (await import("./js/swiper.js")).default();
    } else if (newMode === "desktop") {
      swiperInst?.forEach((el) => el.destroy());
      desktopInst = (await import("./js/view_element.js")).default();
    }
  }
  setListener();
  window.addEventListener("resize", setListener);
});

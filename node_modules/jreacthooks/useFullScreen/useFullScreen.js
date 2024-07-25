// 선택한 태그 전체 화면으로 전환하는 hook
import { useRef } from "react";

export const useFullScreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === "function") callback(isFull);
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen)
        element.current.requestFullscreen();
      else if (element.current.mozRequestFullscreen)
        element.current.mozRequestFullscreen();
      else if (element.current.webkitRequestFullscreen)
        element.current.webkitRequestFullscreen();
      else if (element.current.msRequestFullscreen)
        element.current.msRequestFullscreen();
    }
    runCb(true);
  };

  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitExitFullScreen) document.webkitExitFullScreen();
      else if (document.msExitFullScreen) document.msExitFullScreen();
      runCb(false);
    }
  };

  return { element, triggerFull, exitFull };
};

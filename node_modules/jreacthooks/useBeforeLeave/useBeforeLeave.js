import { useEffect } from "react";

// 페이지를 벗어나기 전 함수를 실행하도록 하는 hook

export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

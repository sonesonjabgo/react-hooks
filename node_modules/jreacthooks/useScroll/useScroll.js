// 스크롤 넘어갈 때 어떤 작업을 해야할 때
import { useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => setState({ y: window.scrollY, x: window.scrollX });

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

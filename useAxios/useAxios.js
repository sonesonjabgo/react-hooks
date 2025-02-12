// axios 요청을 보내고 그에 따른 상태와 데이터를 반환하는 hook
import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  if (!opts.url) {
    console.log("url이 존재하지 않습니다.");
    return;
  }

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;

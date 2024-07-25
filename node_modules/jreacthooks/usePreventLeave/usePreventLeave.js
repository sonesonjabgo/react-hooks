// 페이지를 벗어날 때 경고문을 띄우는 hook

export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

// ex)
// export default function App() {
//   const { enablePrevent, disablePrevent } = usePreventLeave();

//   return (
//     <div className="App">
//       <button onClick={enablePrevent}>protect</button>
//       <button onClick={disablePrevent}>unprotect</button>
//     </div>
//   );
// }

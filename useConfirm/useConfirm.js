// 이벤트를 발생시키려고 버튼을 눌렀을 때
// 잠시 멈추고 경고문을 띄우는 함수

export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

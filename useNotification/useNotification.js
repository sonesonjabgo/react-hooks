// 웹에서 윈도우로 알림 날리는 함수

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") new Notification(title, options);
        else return;
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

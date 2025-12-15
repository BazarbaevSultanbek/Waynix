import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "@mantine/notifications";

import { clearMessages } from "../../store/reducers/userReducer";

const NotificationListener = () => {
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state?.user);

  useEffect(() => {
    if (error) {
      showNotification({
        title: "Xatolik!",
        message: error,
        color: "red",
      });


      setTimeout(() => {
        dispatch(clearMessages());
      }, 2000);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      showNotification({
        title: "Muvaffaqiyat!",
        message: success,
        color: "green",
      });

      setTimeout(() => {
        dispatch(clearMessages());
      }, 2000);
    }
  }, [success]);

  return null; 
};

export default NotificationListener;

import { Bounce, toast } from "react-toastify";

const config: any = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

export const notifySuccess = (message: string) => {
  toast.success(message, {
    ...config,
  });
};

export const notifyWarning = (message: string) => {
  toast.warning(message, {
    ...config,
  });
};

export const notifyError = (message: string) => {
  toast.error(message, {
    ...config,
  });
};

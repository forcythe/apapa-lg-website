import { toast, ToastOptions } from "react-toastify";

const useToast = () => {
  const success = (
    message: string,
    autoClose = 3000,
    options: ToastOptions = {}
  ) => {
    toast.success(message, {
      position: "top-right",
      autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      ...options,
    });
  };

  const error = (
    message: string,
    autoClose = 3000,
    options: ToastOptions = {}
  ) => {
    toast.error(message, {
      position: "top-right",
      autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      ...options,
    });
  };

  return {
    success,
    error,
  };
};

export default useToast;

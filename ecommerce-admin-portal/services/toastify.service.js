import { toast } from 'react-toastify';
const toastifyConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};

export const toasterSuccess = (message) => {
    return toast.success(message, toastifyConfig);
}

export const toasterWarning = (message) => {
    return toast.warn(message, toastifyConfig);
}

export const toasterError = (message) => {
    return toast.error(message, toastifyConfig);
}
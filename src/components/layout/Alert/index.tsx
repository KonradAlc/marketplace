import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

type AlertProps = {
  type?: "success" | "warning" | "error";
  message: string;
  onClose?: () => void;
  id?: string;
};

const Alert = (props: AlertProps) => {
  const { type = "success", message, id, onClose } = props;

  const icons = {
    success: CheckCircleIcon,
    warning: ExclamationCircleIcon,
    error: XCircleIcon,
  };

  return (
    <div id={id} className='flex items-center w-full p-4 text-gray-500 bg-white rounded-lg shadow' role='alert'>
      <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg'>
        {type === "success" && <icons.success className='w-5 h-5' fill='currentColor' />}
        {type === "warning" && <icons.warning className='w-5 h-5' fill='currentColor' />}
        {type === "error" && <icons.error className='w-5 h-5' fill='currentColor' />}
        <span className='sr-only'>{type} icon</span>
      </div>
      <div className='ms-3 text-sm font-normal'>{message}</div>
      <button
        type='button'
        className='ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8'
        aria-label='Close'
        onClick={onClose}
      >
        <span className='sr-only'>Close</span>
        <XMarkIcon className='h-5 w-5' />
      </button>
    </div>
  );
};

export default Alert;

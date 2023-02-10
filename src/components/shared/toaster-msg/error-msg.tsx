import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

export function errorMsg(text: string) {
  toast.error(text, {
    position: toast.POSITION.TOP_RIGHT,
  });
}

export function successMsg(text: string) { 
  toast.success(text, {
    position: toast.POSITION.TOP_RIGHT,
  });
}

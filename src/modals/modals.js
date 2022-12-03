import { toast } from "react-toastify";

export const correctAction = (message) => toast.success(message);

export const wrongAction = (message) => toast.error(message);

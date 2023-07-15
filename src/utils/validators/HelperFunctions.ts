 import { clearStorage } from "../storage";
 
 export const logoutUser = () => {
    clearStorage('all');
    window.location.reload()
  }
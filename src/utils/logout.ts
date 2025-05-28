// utils/logout.ts
import Cookies from 'js-cookie';

export function logoutAndRedirect() {
  Cookies.remove("token");
  window.location.href = "/login"; // redirect sem hook
}
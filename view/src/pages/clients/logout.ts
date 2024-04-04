import { getRequest } from "../../utils/GetRequest";

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  localStorage.removeItem("users");
}

export const handleLogout = () => {
  getRequest("/api/logout").then(() => {
    deleteCookie("rev_tax");
    window.location.href = "/login";
  });
}
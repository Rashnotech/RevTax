import { getRequest } from "../../utils/GetRequest";


export const handleLogout = () => {
  getRequest("/api/logout").then(() => {
    window.location.href = "/login";
  });
}
import api from "./api";

const fetchUsers = () => api.get("/users");

export { fetchUsers };

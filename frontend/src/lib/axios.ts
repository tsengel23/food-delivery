import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
});

// LocalStorage-аас token авж Authorization header автоматаар нэмнэ
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Backend { success: true, data: ... } format-аас data-г автоматаар задална
api.interceptors.response.use((response) => {
  if (response.data && typeof response.data === "object" && "success" in response.data) {
    response.data = response.data.data;
  }
  return response;
});

import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResponse {
  token?: string;
  message: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const { notification } = App.useApp();
  const { authenticate } = useAuth();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: (payload: LoginPayload) => {
      const username = "admin";
      const password = "1234";

      const promise = new Promise<LoginResponse>((resolve, reject) => {
        setTimeout(() => {
          if (payload.username === username && payload.password === password) {
            resolve({
              token: "asdasda987s8d7a8s7d8a9s7d",
              message: "Login Successful",
            });
          } else {
            resolve({ message: "Wrong username or password" });
          }
        }, 300);
      });

      return promise;
    },
    onSuccess: (data) => {
      if (data.token) {
        authenticate(data.token);
        navigate("/");
        notification.success({ message: data.message });
      } else {
        notification.info({ message: data.message });
      }
    },
    onError: (error: Error) => notification.error({ message: error.message }),
  });

  return { login: mutate, isLoading };
};

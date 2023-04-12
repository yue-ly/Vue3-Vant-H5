import http, { Response } from "@/utils/request";

// 创建请求传参规范
export interface LoginParams {
  userName: string;
  password: string;
}

// 返回值规范
interface UserInfo {
  id: number;
  username: string;
  mobile: number;
  email: string;
}

export default {
  async login(params: LoginParams) {
    return await http.post<Response<UserInfo>>("/user/login", params);
  },
};

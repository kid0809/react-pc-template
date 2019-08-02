/* eslint no-console: "off" */
import axios from 'axios';

export const get = async (url, data) => {
  try {
    const response = await axios.get(url, {
      params: data
    });
    return response;
  } catch (err) {
    if (err.response.status === 401) {
      // 执行登出操作
      console.log(err);
    } else {
      // 其他错误处理
      console.log(err);
      return err;
    }
  }
};

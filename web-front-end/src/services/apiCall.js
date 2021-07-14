import axios from "axios";

export const apiCall = (method, url, data) => {
  return new Promise((resolve, reject) => {
    return axios({
      method: method,
      url: url,
      data: data,
      proxy: {
        port: 3000,
      },
    })
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err.response.data.error);
      });
  });
};

export default apiCall;

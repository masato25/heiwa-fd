import axios from 'axios';
import st from 'settings.js';

const injectAxios = {
  getAxios: () => {
    const myCookie = decodeURIComponent(document.cookie);
    const secret = myCookie.match(/heiwa_secret=([^\s;]+)/m) || ["","test"];
    const api = axios.create({
      baseURL: st.baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: secret[1],
      }
    });
    api.interceptors.response.use((response) => response, (error) => {
      console.error(error);
      window.location.replace(`${st.fedRoot}/login`);
    });
    return api;
  }
}

export default injectAxios;
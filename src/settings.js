const settings = {
  fedRoot: "/prod/op/heiwa",
  // fedRoot: "/",
  baseURL: 'https://o9nves6395.execute-api.ap-northeast-1.amazonaws.com/prod',
  // baseURL: 'http://localhost:8888/prod',
};

const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': getCookieValue('authorization'),
  }
}
export default {...settings, axiosConfig: axiosConfig};
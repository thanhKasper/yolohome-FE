const is_deploy = 0
const fe_url: string = !is_deploy ? "http://localhost:3000" : ""
const be_url: string = "https://yolohomiebe.onrender.com"
export {fe_url, be_url}
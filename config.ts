const is_deploy = 0
const fe_url: string = !is_deploy ? "http://localhost:3000" : ""
export {fe_url}
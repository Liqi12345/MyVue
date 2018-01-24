import http from '../config/http'
let ajax = {
  login(data){
    return http.post('/login', data)
  }
}

export default {
  install: function (Vue, options) {
    Vue.prototype.http = ajax
  }
}

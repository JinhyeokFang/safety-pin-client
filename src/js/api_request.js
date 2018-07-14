import axios from 'axios';

/** API 변경시 변경 **/
const baseURL = 'https://letscoding.kr:8888/api/v1';
const pRequest = (url, data, cb, fcb, ecb) => axios.post(baseURL + url, data).then(r => r.data.success ? cb(r.data) : fcb(r)).catch(e => ecb(e));
export default {
  signIn: (email, password, cb) => pRequest('/account/t/login', {email, password}, result =>
    cb(result.message.session, result.message.name), cb, () => alert('잘못된 ID 또는 패스워드입니다.'), e => alert(e)),
  addStudent: (data, cb) => pRequest('/manage/student', data, cb, r => console.log(r), e => alert(e)),
  signUp: (email, password, name, className, info, cb) => pRequest('/account/t/register', {
    name, email, password, 'class': className, info
  }, cb, () => alert('회원가입에 실패하였습니다.'), e => alert(e))
};
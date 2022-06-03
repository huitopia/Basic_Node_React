import axios from "axios";
import { LOGIN_USER } from './types'

export function loginUser(dataTosubmit){

  // -- server에서 받은 data를 request에 저장
  const request = axios.post('/api/user/login', dataTosubmit)
  .then(response => response.data)

  // -- request를 reduce에 넘겨주는 작업 > action 정의
  return {
    type: "LOGIN_USER",
    payload: request
  }
}
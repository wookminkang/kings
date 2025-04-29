import axios from 'axios';

const http = axios.create({
  // baseURL: '/hp/api', // 필요하다면 기본 경로 지정
  // timeout: 10000,
  // headers: { ... }
});

// 요청 인터셉터 예시
http.interceptors.request.use(
  config => {
    // 예: 토큰 자동 추가
    // config.headers.Authorization = 'Bearer ...';
    return config;
  },
  error => Promise.reject(error)
);

// 응답 인터셉터 예시
http.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default http; 
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, //primeiros 30s => 20 usuários
    { duration: '1m30s', target: 10 }, //depois de 30s, os próximos 1m30s => Diminui para 10 usuários
    { duration: '20s', target: 0 }, //depois de 1m30s, os próximos 20s => Diminui para 0 usuários
  ],
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  check(res, { 'status was 200': (r) => r.status == 200 }); //checando se cada requisição retornou status 200
  sleep(1);
}

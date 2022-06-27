import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://test.k6.io/');
  check(res, {
    'is status 200': (r) => r.status === 200, //verifica status code
    'body size is 11,102 bytes': (r) => r.body.length == 11102,  //verifica quantidade de bites
  });
  console.log(res.body.length); //verificar a quantidade de bites no log => resposta em INFO[0001] 
}

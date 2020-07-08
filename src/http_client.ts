import axios from 'axios';

export function HttpGet(url: string, config: any) {
  return axios.get(url, config);
}

export function HttpPost(url: string, body: any, config: any): any {
  return axios.post(url, body, config);
}

export function HttpPatch(url: string, body: any, config: any) {
  return axios.patch(url, body, config);
}

export function HttpDelete(url: string, config: any) {
  return axios.delete(url, config);
}

export function HttpPut(url: string, body: any, config: any) {
  return axios.put(url, body, config);
}

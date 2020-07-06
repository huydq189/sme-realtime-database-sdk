import axios from 'axios';

let responseData = { status: 0, data: '' };

export function HttpGet(url: string, headers: any) {
  axios
    .get(url, headers)
    .then(response => {
      responseData.status = response.status;
      responseData.data = response.data;
      return responseData;
    })
    .catch(error => {
      console.log(error);
      responseData.status = -1;
      return responseData;
    });
}

export function HttpPost(url: string, body: any, headers: any): any {
  axios
    .post(url, body, headers)
    .then(response => {
      responseData.status = response.status;
      responseData.data = response.data;
      return responseData;
    })
    .catch(error => {
      console.log(error);
      responseData.status = -1;
      return responseData;
    });
}

export function HttpPatch(url: string, body: any, headers: any) {
  axios
    .patch(url, body, headers)
    .then(response => {
      responseData.status = response.status;
      responseData.data = response.data;
      return responseData;
    })
    .catch(error => {
      console.log(error);
      responseData.status = -1;
      return responseData;
    });
}

export function HttpDelete(url: string, headers: any) {
  axios
    .delete(url, headers)
    .then(response => {
      responseData.status = response.status;
      responseData.data = response.data;
      return responseData;
    })
    .catch(error => {
      console.log(error);
      responseData.status = -1;
      return responseData;
    });
}

export function HttpPut(url: string, body: any, headers: any) {
  axios
    .put(url, body, headers)
    .then(response => {
      responseData.status = response.status;
      responseData.data = response.data;
      return responseData;
    })
    .catch(error => {
      console.log(error);
      responseData.status = -1;
      return responseData;
    });
}

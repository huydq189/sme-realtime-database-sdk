import axios from 'axios';

let responseData = { status: 0, data: '' };

export function HttpGet(url: string, config: any) {
  axios
    .get(url, config)
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

export function HttpPost(url: string, body: any, config: any): any {
  axios
    .post(url, body, config)
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

export function HttpPatch(url: string, body: any, config: any) {
  axios
    .patch(url, body, config)
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

export function HttpDelete(url: string, config: any) {
  axios
    .delete(url, config)
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

export function HttpPut(url: string, body: any, config: any) {
  axios
    .put(url, body, config)
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

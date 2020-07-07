import axios from 'axios';
let responseData = { status: 0, data: '' };

function HttpGet(url: string, headers: any) {
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

function HttpPost(url: string, body: any, headers: any): any {
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

const body = {
    "bucket_id": "rooms",
    "data_item": {
        "bucket": "rooms",
        "content": {
            "channel": "3d1ec8fd-5a72-4760-8629-dce011dae55d",
            "devices": [
                "5ddb1f40-cfdb-4a88-9c7c-00fcce9b4a50",
                "fe27cfac-dc24-422d-ad8a-b7d2b75dd346"
            ],
            "name": "Testing created"
        },
        "createdByDevice": "Smart_Building",
        "created_at": "1594019742",
        "creatingDate": "2020/07/06 14:15:41",
        "description": "",
        "id": "22asdasd",
        "id_incr": 6,
        "updated_at": "1594019742"
    },
    "device_id": "Smart_Building",
    "record_id": "22asdasd"
};
const headers = {
    Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VJRCI6IlNtYXJ0X0J1aWxkaW5nIiwiZXhwIjoxNjI1MjE2OTE1LCJ1c2VySUQiOiJ1c2VyMSJ9.CZmXeB0E0Xc77MMT5fEumUPuBNVRE4zvnbgWEn7Pxyc',
};
let url: string = 'https://sme-dev.vdc2.com.vn/api/core/v1/data/all_in_bucket/rooms';
HttpGet(url, headers);
console.log('okie');


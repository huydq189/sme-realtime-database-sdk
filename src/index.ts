import axios from 'axios';
import * as vnpt from './vnpt_realtime_database';
let responseData = { status: 0, data: '' };

// function HttpGet(url: string, headers: any) {
//     axios
//         .get(url, headers)
//         .then(response => {
//             responseData.status = response.status;
//             responseData.data = response.data;
//             return responseData;
//         })
//         .catch(error => {
//             console.log(error);
//             responseData.status = -1;
//             return responseData;
//         });
// }

// function HttpPost(url: string, body: any, headers: any): any {
//     axios
//         .post(url, body, headers)
//         .then(response => {
//             responseData.status = response.status;
//             responseData.data = response.data;
//             return responseData;
//         })
//         .catch(error => {
//             console.log(error);
//             responseData.status = -1;
//             return responseData;
//         });
// }

const body = {
    "bucket_id": "hoangtest",
    "data_item": {
        "assignInfo": {
            "assignDate": "",
            "assignee": {
                "avatar": "",
                "id": "",
                "name": "",
                "phone": "",
                "workDate": ""
            },
            "assigner": {
                "id": "",
                "name": "",
                "phone": ""
            }
        },
        "chosenServices": [
            "service01"
        ],
        "created_at": 1593086923,
        "customerInfo": {
            "address": "Huy ros",
            "id": "123456",
            "name": "fdf",
            "phone": "0901231234"
        },
        "deviceid": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VJRCI6ImRldmljZTAwMSIsImV4cCI6MTYxMDMzNzgxNywidXNlcklEIjoidXNlcjEifQ.minv50xYpEq8OazvNq3fQfFS9ZXwbgjzGoWy-_rZX3o",
        "expectedAddress": "Huy ros",
        "expectedTime": "2020/01/10 15:14:01",
        "id": "testing",
        "id_incr": 2,
        "imageList": [],
        "note": "",
        "orderValue": {
            "details": [
                {
                    "charge": "1",
                    "description": "Bảo trì máy lạnh không chuyên nghiệp",
                    "id": "service01",
                    "image": "https://cdn.tgdd.vn/Files/2016/05/01/822919/bao-duong-dieu-hoa-va-nhung-dieu-can-luu-y9-1.jpg",
                    "name": "Không bảo trì máy lạnh"
                }
            ],
            "sum": ""
        },
        "paymentInfo": {
            "invoice": {},
            "paymentDate": "",
            "paymentMethod": "1",
            "status": "0"
        },
        "status": "7",
        "videoList": ""
    },
    "device_id": "hoangtest",
    "record_id": "testing"
};
const config = {
    headers: {
        Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VJRCI6ImhvYW5ndGVzdCIsImV4cCI6MTYyMzQ2NjQ3NiwidXNlcklEIjoidXNlcjEifQ.wtC3yxCPw7TdAj6jkCvyOuxzrOtWOlMmmlcBaX9k6L0',
    }
}

vnpt.CreateRecord('hoangtest', 'hoangtest', body);

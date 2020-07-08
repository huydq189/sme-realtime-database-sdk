import axios from 'axios';
import * as vnpt from './vnpt_realtime_database';
let responseData = { status: 0, data: '' };

const body = {
    "data_item": {
        "_id": "record1",
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
        "created_at": 1593086918,
        "customerInfo": {
            "address": "12 ghghg",
            "id": "123456",
            "name": "fdf",
            "phone": "0901231234"
        },
        "deviceid": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VJRCI6ImRldmljZTAwMSIsImV4cCI6MTYxMDMzNzgxNywidXNlcklEIjoidXNlcjEifQ.minv50xYpEq8OazvNq3fQfFS9ZXwbgjzGoWy-_rZX3o",
        "expectedAddress": "12 ghghg",
        "expectedTime": "2020/01/10 15:14:01",
        "id": "record1",
        "id_incr": 1,
        "imageList": [],
        "note": "",
        "orderValue": {
            "details": [
                {
                    "charge": "1",
                    "description": "Bảo trì máy lạnh 122",
                    "id": "service01",
                    "image": "https://cdn.tgdd.vn/Files/2016/05/01/822919/bao-duong-dieu-hoa-va-nhung-dieu-can-luu-y9-1.jpg",
                    "name": "Bảo trì máy lạnh"
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
    "record_id": "record1"
};
// 
// vnpt.CreateRecord('hoangtest', 'testtest', body)
//     .then(result => {
//         console.log('CreateRecord: ', result);
//     }).catch(err => {
//         console.log('error: ', err);
//     });

// vnpt.GetDetailRecord('hoangtest', 'hoangtest')
//     .then(result => {
//         console.log('GetDetailRecord: ', result);
//     }).catch(err => {
//         console.log('error: ', err);
//     });

// vnpt.DeleteRecord('hoangtest', 'testtest')
//     .then(result => {
//         console.log('DeleteRecord: ', result);
//     }).catch(err => {
//         console.log('error: ', err);
//     });
// 

// vnpt.GetListAndNumberRecordInBucket('hoangtest')
// .then(result=>{
//     console.log(result);
// })
// .catch(err=>{
//    console.log(err); 
// }); 

// vnpt.GetAllRecord('user3', { start: 1, stop: 5 })
//     .then(result => {
//         console.log(result.data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// vnpt.GetAllRecordInBucket('hoangtest')
//     .then(result => {
//         console.log(result.data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// vnpt.UpdateRecord('hoangtest', 'record1', body)
//     .then(result => {
//         console.log(result.data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// vnpt.SearchData('hoangtest', { field: 'customerInfo.id', pattern: '123456' })
//     .then(result => {
//         console.log(result.data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// const recordspecific = {
// 	"list":"record1,hoangtest,record4"
// }
// vnpt.GetSomeRecordSpecific('hoangtest', recordspecific)
//     .then(result => {
//         console.log(result.data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// ;
// const dataupdate = {
//     "data_item": {
//         "data_item": {
//             "customerInfo": {
//                 "address": "12 Pham Ngoc Thach",
//                 "id": "1718",
//                 "name": "huydo",
//                 "phone": "0901231234"
//             }
//         }
//     }
// }
// vnpt.UpdateSomeFieldInRecord('hoangtest', 'record1', body)
//     .then(result => {
//         console.log(result.data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// ;
// const query = {
//     "data_item.customerInfo.name": "fdf",
//     "data_item.customerInfo.address":"Huy ros"
// }
// vnpt.QueryDataByManyCondition('hoangtest', query)
//     .then(result => {
//         console.log(result.data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// vnpt.QueryDataWithSort('hoangtest',{field: "data_item.customerInfo.phone"})
// .then(result => {
//             console.log(result.data);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// vnpt.QueryDataWithLimit('hoangtest',{field: "data_item.customerInfo.phone",limit:"2"})
// .then(result => {
//             console.log(result.data);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// vnpt.QueryDataByPaggingAndLimit('hoangtest', { page: '2', limit: '1' })
//     .then(result => {
//         console.log(result.data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// vnpt.GetDataInSpecificFieldInAllRecordOfBucket('hoangtest', { field: 'assignInfo' })
//     .then(result => {
//         console.log(result.data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
vnpt.GetTotalNumberOfRecords('user1')
    .then(result => {
        console.log(result.data);
    })
    .catch(err => {
        console.log(err);
    });
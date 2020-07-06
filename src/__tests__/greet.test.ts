import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sme from '../vnpt_realtime_database';

describe('Chatbot', () => {
  it('returns data when sendMessage is called', done => {
    var mock = new MockAdapter(axios);
    mock.onPost();
    const data = { response: true };
    sme.CreateRecord('facebook', 'record1122', { "bucket": "crm_app_order", "content": { "assignInfo": { "assignDate": "", "assignee": { "avatar": "", "id": "", "name": "", "phone": "", "workDate": "" }, "assigner": { "id": "1", "name": "Huy Do", "phone": "0772566555" } }, "chosenServices": ["L"], "customerDirectContact": { "address": "Nzn, Phường 05, Quận 5, Thành phố Hồ Chí Minh", "name": "Kiên", "phone": "9784608874" }, "customerInfo": { "address": "Nzn, Phường 05, Quận 5, Thành phố Hồ Chí Minh", "id": "123456", "name": "Kiên", "phone": "9784608874" }, "deviceid": "c39ncQ-4qwM:APA91bGUjnIHMERDJib4xgBQMza2YyhxomX-Oi9Qn9E2pCNTZCDUWSkfoT12Az5_VX5M2EaF6iE8QbtY_aw2FaoZL8VMV3fYFBwaA-K6sNjZw3UkFuF_kuAmL1ZphdnXOczrTPxyjIXV;ANDROID", "expectedAddress": "Nzn, Phường 05, Quận 7, Thành phố Hồ Chí Minh", "expectedTime": "14/05/2020 14:37:49", "hasContract": "0", "id": "L002", "imageList": [], "linkContract": "", "mobileChannel": "c39ncQ-4qwMAPA91bGUjnIHMERDJib4xgBQMza2YyhxomX-Oi9Qn9E2pCNTZCDUWSkfoT12Az5_VX5M2EaF6iE8QbtY_aw2FaoZL8VMV3fYFBwaA-K6sNjZw3UkFuF_kuAmL1ZphdnXOczrTPxyjIXV", "note": "", "orderValue": { "details": [{ "charge": "123.123", "description": "HT lạnh", "id": "L", "image": "http://203.162.141.37:9000/crmappservice/img1.jpeg", "index": 1, "name": "HT lạnh" }], "sum": "123.123" }, "paymentInfo": { "invoice": {}, "paymentDate": "", "paymentMethod": "0", "status": "0" }, "quote_time": "", "status": "1", "videoList": "" }, "createdByDevice": "crm_app", "created_at": "1594020114", "creatingDate": "14/05/2020 14:38:11", "description": "", "id": "record1", "id_incr": 2, "updated_at": "1594020114" })
      .then((response: any) => {
      expect(response).toEqual(data);
      done();
    });
  });
});
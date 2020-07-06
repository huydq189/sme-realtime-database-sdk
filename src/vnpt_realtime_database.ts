import {
  apiKey,
  url_base,
  uri_create,
  uri_delete,
  uri_detail_record,
  uri_list_record,
  uri_all_record,
  uri_all_record_in_bucket,
  uri_update_record,
  uri_update_field_record,
  uri_search_data,
  uri_record_specific,
  uri_data_many_condition,
  uri_data_sort,
  uri_data_limit,
  uri_data_pagging,
  uri_data_specific_field_allrecord_bucket,
  uri_data_number_record,
  uri_data_add_relation,
  uri_data_remove_relation,
  uri_data_update_one
} from './constant';
import { HttpPost, HttpDelete, HttpGet, HttpPatch } from './http_client';

export function CreateRecord(bucket: string, record: string, body: any) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_create + '/' + bucket + '/' + record;
  return HttpPost(url, body, headers);
}

export function DeleteRecord(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function GetDetailRecord(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_detail_record + '/' + bucket + '/' + record;
  return HttpGet(url, headers);
}
//
export function GetListAndNumberRecordInBucket(bucket: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_list_record + '/' + bucket;
  return HttpGet(url, headers);
}
//
export function GetAllRecord(start: number, stop: number) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_all_record + '?' + 'start=' + start + 'stop=' + stop;
  return HttpGet(url, headers);
}
//
export function GetAllRecordInBucket(bucket: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_all_record_in_bucket + '/' + bucket;
  return HttpGet(url, headers);
}
//
export function UpdateRecord(bucket: string, record: string, body: any) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_update_record + '/' + bucket + '/' + record;
  return HttpPatch(url, body, headers);
}
//
export function SearchData(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_search_data + '/' + bucket + '/' + record;
  return HttpGet(url, headers);
}
//
export function GetSomeRecordSpecific(bucket: string, body: any) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_record_specific + '/' + bucket;
  return HttpPost(url, body, headers);
}
//
export function UpdateSomeFieldInRecord(bucket: string, record: string, body: any) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_update_field_record + '/' + bucket + '/' + record;
  return HttpPatch(url, body, headers);
}
// 
export function QueryDataByManyCondition(bucket: string, body: any) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_data_many_condition + '/' + bucket;
  return HttpPost(url, body, headers);
}
//
export function QueryDataWithSort(bucket: string, params: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_data_sort + '/' + bucket + '?' + params;
  return HttpGet(url, headers);
}
//
export function QueryDataWithLimit(bucket: string, params: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_data_limit + '/' + bucket + '?' + params;
  return HttpDelete(url, headers);
}
//
export function QueryDataByPaggingAndLimit(bucket: string, params: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_data_pagging + '/' + bucket + '?' + params;
  return HttpGet(url, headers);
}
//
export function GetDataInSpecificFieldInAllRecordOfBucket(bucket: string, params: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_data_specific_field_allrecord_bucket + '/' + bucket + '?' + params;
  return HttpGet(url, headers);
}

export function GetTotalNumberOfRecords(options: any) {
  let header = {
    Authorization: 'Bearer ' + apiKey,
  };
  const headers = { ...header, ...options };
  let url: string = url_base + uri_data_number_record;
  return HttpDelete(url, headers);
}

export function AddRecordRelationship(bucket: string, record: string, body: any) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_data_add_relation + '/' + bucket + '/' + record;
  return HttpPost(url, body, headers);
}

export function RemoveRecordRelationShip(bucket: string, record: string, body: any) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_data_remove_relation + '/' + bucket + '/' + record;
  return HttpPost(url, body, headers);
}

export function UpdateAFieldInRecord(bucket: string, record: string, body: any, params: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_data_update_one + '/' + bucket + '/' + record + params;
  return HttpPatch(url, body, headers);
}

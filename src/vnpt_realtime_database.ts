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

// 1
export async function CreateRecord(bucket: string, record: string, body: any) {
  let responseData = { status: 0, data: '' };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_create + '/' + bucket + '/' + record;
  try {
    const data = await HttpPost(url, body, config);
    responseData.status = data.status;
    responseData.data = data.data;
  } catch (err) {
    responseData.status = -1;
    throw err;
  }
  return responseData;
}
// 2
export async function DeleteRecord(bucket: string, record: string) {
  let responseData = { status: 0, data: '' };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  try {
    const data = await HttpDelete(url, config);
    responseData.status = data.status;
    responseData.data = data.data;
  } catch (err) {
    responseData.status = -1;
    throw err;
  }
  return responseData;
}
// 3
export async function GetDetailRecord(bucket: string, record: string) {
  let responseData = { status: 0, data: '' };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_detail_record + '/' + bucket + '/' + record;
  try {
    const data = await HttpGet(url, config);
    responseData.status = data.status;
    responseData.data = data.data;
  } catch (err) {
    responseData.status = -1;
    throw err;
  }
  return responseData;
}
// 4
export async function GetListAndNumberRecordInBucket(bucket: string) {
  let responseData = { status: 0, data: '' };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_list_record + '/' + bucket;
  try {
    const data = await HttpGet(url, config);
    responseData.status = data.status;
    responseData.data = data.data;
  } catch (err) {
    responseData.status = -1;
    throw err;
  }
  return responseData;
}
// can viet lai
export function GetAllRecord(params: object) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    },
    params: params
  };
  let url: string = url_base + uri_all_record;
  return HttpGet(url, config);
}
//
export function GetAllRecordInBucket(bucket: string) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_all_record_in_bucket + '/' + bucket;
  return HttpGet(url, config);
}
//
export function UpdateRecord(bucket: string, record: string, body: any) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_update_record + '/' + bucket + '/' + record;
  return HttpPatch(url, body, config);
}
//
export function SearchData(bucket: string, record: string) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_search_data + '/' + bucket + '/' + record;
  return HttpGet(url, config);
}
//
export function GetSomeRecordSpecific(bucket: string, body: any) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_record_specific + '/' + bucket;
  return HttpPost(url, body, config);
}
//
export function UpdateSomeFieldInRecord(bucket: string, record: string, body: any) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_update_field_record + '/' + bucket + '/' + record;
  return HttpPatch(url, body, config);
}
// 
export function QueryDataByManyCondition(bucket: string, body: any) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_data_many_condition + '/' + bucket;
  return HttpPost(url, body, config);
}
//
export function QueryDataWithSort(bucket: string, params: string) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_data_sort + '/' + bucket + '?' + params;
  return HttpGet(url, config);
}
//
export function QueryDataWithLimit(bucket: string, params: string) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_data_limit + '/' + bucket + '?' + params;
  return HttpDelete(url, config);
}
//
export function QueryDataByPaggingAndLimit(bucket: string, params: string) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_data_pagging + '/' + bucket + '?' + params;
  return HttpGet(url, config);
}
//
export function GetDataInSpecificFieldInAllRecordOfBucket(bucket: string, params: string) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_data_specific_field_allrecord_bucket + '/' + bucket + '?' + params;
  return HttpGet(url, config);
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
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_data_add_relation + '/' + bucket + '/' + record;
  return HttpPost(url, body, config);
}

export function RemoveRecordRelationShip(bucket: string, record: string, body: any) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_data_remove_relation + '/' + bucket + '/' + record;
  return HttpPost(url, body, config);
}

export function UpdateAFieldInRecord(bucket: string, record: string, body: any, params: string) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_data_update_one + '/' + bucket + '/' + record + params;
  return HttpPatch(url, body, config);
}

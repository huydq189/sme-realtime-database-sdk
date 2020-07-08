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
  let responseData = { status: 0, data: new Object() };
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
  let responseData = { status: 0, data: new Object() };
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
  let responseData = { status: 0, data: new Object() };
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
  let responseData = { status: 0, data: new Object() };
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
// 5
export async function GetAllRecord(userid: string, params: object) {
  let responseData = { status: 0, data: new Object() };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
      userid: userid
    },
    params: params
  };
  let url: string = url_base + uri_all_record;
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
// 6
export async function GetAllRecordInBucket(bucket: string) {
  let responseData = { status: 0, data: new Object() };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_all_record_in_bucket + '/' + bucket;
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
// 7
export async function UpdateRecord(bucket: string, record: string, body: any) {
  let responseData = { status: 0, data: new Object() };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_update_record + '/' + bucket + '/' + record;
  try {
    const data = await HttpPatch(url, body, config);
    responseData.status = data.status;
    responseData.data = data.data;
  } catch (err) {
    responseData.status = -1;
    throw err;
  }
  return responseData;
}
// 8
export async function SearchData(bucket: string, params: object) {
  let responseData = { status: 0, data: new Object() };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    },
    params: params
  };
  let url: string = url_base + uri_search_data + '/' + bucket;
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
// 9
export async function GetSomeRecordSpecific(bucket: string, body: any) {
  let responseData = { status: 0, data: new Object() };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_record_specific + '/' + bucket;
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
// 10
export async function UpdateSomeFieldInRecord(bucket: string, record: string, body: any) {
  let responseData = { status: 0, data: new Object() };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_update_field_record + '/' + bucket + '/' + record;
  try {
    const data = await HttpPatch(url, body, config);
    responseData.status = data.status;
    responseData.data = data.data;
  } catch (err) {
    responseData.status = -1;
    throw err;
  }
  return responseData;
}
// 11
export async function QueryDataByManyCondition(bucket: string, body: any) {
  let responseData = { status: 0, data: new Object() };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_data_many_condition + '/' + bucket;
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
// 12
export async function QueryDataWithSort(bucket: string, params: object) {
  let responseData = { status: 0, data: new Object() };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    },
    params: params
  };
  let url: string = url_base + uri_data_sort + '/' + bucket + '?' + params;
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
// 14
export async function QueryDataWithLimit(bucket: string, params: object) {
  let responseData = { status: 0, data: new Object() };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    },
    params: params
  };
  let url: string = url_base + uri_data_limit + '/' + bucket;
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
// 15
export async function QueryDataByPaggingAndLimit(bucket: string, params: object) {
  let responseData = { status: 0, data: new Object() };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    },
    params: params
  };
  let url: string = url_base + uri_data_pagging + '/' + bucket;
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
// 16
export async function GetDataInSpecificFieldInAllRecordOfBucket(bucket: string, params: object) {
  let responseData = { status: 0, data: new Object() };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    },
    params: params
  };
  let url: string = url_base + uri_data_specific_field_allrecord_bucket + '/' + bucket;
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
//17
export async function GetTotalNumberOfRecords(userid: string) {
  let responseData = { status: 0, data: new Object };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
      userid: userid
    }
  };
  let url: string = url_base + uri_data_number_record;
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
//18
export async function AddRecordRelationship(bucket: string, record: string, body: any) {
  let responseData = { status: 0, data: new Object };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_data_add_relation + '/' + bucket + '/' + record;
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
//19
export async function RemoveRecordRelationShip(bucket: string, record: string, body: any) {
  let responseData = { status: 0, data: new Object };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    }
  };
  let url: string = url_base + uri_data_add_relation + '/' + bucket + '/' + record;
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
//20 
export async function UpdateAFieldInRecord(bucket: string, record: string, body: any, params: object) {
  let responseData = { status: 0, data: new Object };
  const config = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
    },
    params: params
  };
  let url: string = url_base + uri_data_update_one + '/' + bucket + '/' + record;
  try {
    const data = await HttpPatch(url, body, config);
    responseData.status = data.status;
    responseData.data = data.data;
  } catch (err) {
    responseData.status = -1;
    throw err;
  }
  return responseData;
}

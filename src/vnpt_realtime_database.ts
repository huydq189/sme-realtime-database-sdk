import { apiKey, url_base, uri_create, uri_delete } from './constant';
import { HttpPost, HttpDelete } from './http_client';

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
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function GetListAndNumberRecordInBucket(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function GetAllRecord(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function GetAllRecordInBucket(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function UpdateRecord(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function SearchData(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function GetSomeRecordSpecific(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function UpdateSomeFieldInRecord(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function QueryDataByManyCondition(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function QueryDataWithSort(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function QueryDataWithLimit(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function QueryDataByPaggingAndLimit(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function GetDataInSpecificFieldInAllRecordOfBucket(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function GetTotalNumberOfRecords(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function AddRecordRelationship(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function RemoveRecordRelationShip(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export function UpdateAFieldInRecord(bucket: string, record: string) {
  const headers = {
    Authorization: 'Bearer ' + apiKey,
  };
  let url: string = url_base + uri_delete + '/' + bucket + '/' + record;
  return HttpDelete(url, headers);
}

export const url_base = 'https://sme-dev.vdc2.com.vn';
import key = require('./apikey.json');
export const apiKey = key.apikey;

export const uri_create = '/api/core/v1/data/create';
export const uri_delete = '/api/core/v1/data/delete';
export const uri_detail_record = '/api/core/v1/data/detail';
export const uri_list_record = '/api/core/v1/data/list';
export const uri_all_record = '/api/core/v1/data/all';
export const uri_all_record_in_bucket = '/api/core/v1/data/all_in_bucket';
export const uri_search_data = '/api/core/v1/data/all_in_bucket/search';
export const uri_data_many_condition = '/api/core/v1/data/all_in_bucket/match';
export const uri_data_sort = '/api/core/v1/data/all_in_bucket/sort';
export const uri_data_limit = '/api/core/v1/data/all_in_bucket/limit';
export const uri_data_pagging = '/api/core/v1/data/all_in_bucket/pagging';
export const uri_data_specific_field_allrecord_bucket = '/api/core/v1/data/all_in_bucket/detailField';
export const uri_data_number_record = '/api/core/v1/data/total';
export const uri_data_add_relation = '/api/core/v1/data/relation/add';
export const uri_data_remove_relation = '/api/core/v1/data/relation/remove';
export const uri_data_update_one = '/api/core/v1/data/update_one';
export const uri_record_specific = '/api/core/v1/data/retrieve_many';
export const uri_update_record = '/api/core/v1/update_many';
export const uri_update_field_record = '/api/core/v1/data/update_field';


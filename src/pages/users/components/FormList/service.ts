import {request} from 'umi'


export const data_outlets = async (value: any) => {
  return await request('http://localhost:4001/fromlist/data_outlets', {
    method: 'get',
    params: {
      token:value
    },
  }).then(response => response).catch(error => error);
};



export const data_site = async () => {
  return await request('http://localhost:4001/fromlist/data_site', {
    method: 'get',
  }).then(function(response) {
    return response;
  }).catch(function(error) {
    console.log(error);
  });
};

export const data_address = async () => {
  return await request('http://localhost:4001/fromlist/data_address', {
    method: 'get',
  }).then(function(response) {
    return response;
  }).catch(function(error) {
    console.log(error);
  });
};

export const data_business = async () => {
  return await request('http://localhost:4001/fromlist/data_business', {
    method: 'get',
  }).then(function(response) {
    return response;
  }).catch(function(error) {
    console.log(error);
  });
};

export const post_list = async (values: any) => {
  return await request('http://localhost:4001/postlistuser', {
    method: 'POST',
    data: values,
  }).then(response => console.log(response));

};


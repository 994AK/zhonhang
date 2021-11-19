import { request } from 'umi';
import {message} from 'antd'

//请求录完表单数据
export const getlistuser = async (value: any) => {
  return await request('http://localhost:4001/getlistuser', {
    method: 'get',
    params: value,
  }).then(response => response).catch(error => error);
};

//请求全部的数据渲染
export const getlistuser_all = async (value: any) => {
  return await request('http://localhost:4001/getlistuser_all', {
    method: 'get',
    params: {token:localStorage.getItem('token')},
  }).then(response => response).catch(error => error);
};

//用户修改数据,后端数据库更新
export const Update = async ({ key, values }: any) => {
  return await request(`http://localhost:4001/update/${key}`, {
    method: 'put',
    data: values,
  }).then(response => message.success('更新成功了,亲')).catch(error => message.error("更新失败了"));
};


//前端生成Excel
export const excel = async (value: any) => {

  return await request('http://localhost:4001/excel', {
    method: 'post',
    data: { token: value },
    header: {
      headers: { 'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
    },
    responseType: 'blob',
  }).then(res => {
    const url = window.URL.createObjectURL(
      new Blob([res], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }),
    );
    const link = document.createElement('a');
    link.href = url;
    const fileName = `${localStorage.getItem('name')}-商圈表.xlsx`;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);

  }).catch(error => error);
};


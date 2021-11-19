import React, { useEffect, useState } from 'react';
import { connect, history } from 'umi';
import { Button, Divider, Table, Space, Modal } from 'antd';
import moment from 'moment';
import UserModel from '@/pages/users/list/components/UserModel';
import { useModel } from 'umi';

const List = ({ list, dispatch }: any) => {
  //初始化数据
  const { initialState }: any = useModel('@@initialState');

  console.log(initialState);


  //数据渲染
  const [data, setData] = useState([]);
  console.log(data);
  //控制modal弹框
  const [modelVisible, setModelVisible] = useState(false);
  //获取record值,表单值
  const [record, setRecord] = useState(undefined);

  //读取数据
  useEffect(() => {
    setData(list);
  }, [list]);

  //获取用户的权限
  useEffect(() => {
    dispatch({
      type: 'login/welcome',
    });
  }, []);

  //弹框开启
  const editHandler = (record: any) => {
    setModelVisible(true);
    setRecord(record);
  };

  //弹框关闭
  const closeHandler = () => {
    setModelVisible(false);
  };

  //表单提交
  const onFinish = (values: any) => {
    // @ts-ignore
    const key = record.key;
    console.log(values);
    //访问model仓库
    dispatch({
      type: 'list/update',
      payload: {
        key,
        values,
      },
    });
    setModelVisible(false);
  };

  //表格数据
  const columns: any = [
    {
      title: '二级分行',
      dataIndex: 'sales_department',
      key: '_id',
      fixed: 'left',
    },
    {
      title: '营业部',
      dataIndex: 'sales_department_i',
      key: '_id',
      fixed: 'left',
    },
    {
      title: '商户号',
      dataIndex: 'business',
      key: '_id',
      fixed: 'left',
      //回调
      // render: (text: text) => <a>{text}</a>,
    },
    {
      title: '商户名称',
      dataIndex: 'business_name',
      key: '_id',
    },
    {
      title: '商户分店',
      dataIndex: 'business_branch',
      key: '_id',
    },
    {
      title: '商圈类型',
      dataIndex: 'activity',
      key: '_id',
    },
    {
      title: '活动细类',
      dataIndex: 'describe',
      key: '_id',
    },
    {
      title: '商户业态',
      dataIndex: 'format',
      key: '_id',
    },
    {
      title: '所属商圈',
      dataIndex: 'business_city',
      key: '_id',
    },
    {
      title: '营业执照名称',
      dataIndex: 'license_name',
      key: '_id',
    },
    {
      title: '地理位置',
      dataIndex: 'location',
      key: '_id',
    },
    {
      title: '按门店地理位置填写(路、楼层等)',
      dataIndex: 'store_location',
      key: '_id',
    },
    {
      title: '商户电话',
      dataIndex: 'telephone',
      key: '_id',
    },
    {
      title: '商户负责人',
      dataIndex: 'sales_principal',
      key: '_id',
    },
    {
      title: '网点电话',
      dataIndex: 'branch_phone',
      key: '_id',
    },
    {
      title: '优惠地图',
      dataIndex: 'discount_map',
      key: '_id',
    },
    {
      title: '新增/删除',
      dataIndex: 'merchant_status',
      key: '_id',
    },
    {
      title: '录入时间',
      dataIndex: 'time',
      key: '_id',
    },
    {
      title: '操作',
      key: '_id',
      render: (row: any, record: any) => {
        let rowTime = row.time.substring(0, 10).replace(/[\u4e00-\u9fa5]/g, '-'); //数据库录入时间
        let m = new Date(moment().format().substring(0, 10)).getTime(); //本地时间
        let r = new Date(moment(rowTime).add(3, 'd').format().substring(0, 10)).getTime(); //数据库录入时间 + 3天前

        /*
        *  数据库录入的时间 +3天 > 当前时间  true
        *  数据库录入的时间 +3天 === 当前时间 true
        *  数据库录入的时间 +3天 < 当前时间 || !==当前时间 false
        * */

        if (data.auth[0].auth === initialState.auth[0]) {
          return <Button
            //弹框对话打开
            onClick={() => {
              editHandler(record);
            }}
            disabled={false}
          >修改</Button>;
        } else if (r >= m) {
          return <Button
            //弹框对话打开
            onClick={() => {
              editHandler(record);
            }}
            disabled={false}
          >修改</Button>;
        } else {
          return <Button disabled={true}>修改</Button>;
        }

      },
    },
  ];


  return (
    <>
      {data ? <div>
        <Divider orientation={'center'}><h2>总录入数量:{data.length}</h2></Divider>
        <Table
          columns={columns}
          dataSource={data.getlistuser}
          scroll={{ x: 2100 }}
        />
        <UserModel
          visible={modelVisible}
          closeHandler={closeHandler}
          record={record}
          onFinish={onFinish}
        />
        <Divider orientation='center'>
          <Button onClick={() => {
            dispatch({
              type: 'list/excel',
              payload: localStorage.getItem('token'),
            });
          }}>导出表格</Button>
          <Button onClick={() => {
            history.push('/users');
          }}>继续录入</Button>

        </Divider>

      </div> : null}


    </>
  );
};

export default connect(({ list }: any) => ({
  list,
}))(List);

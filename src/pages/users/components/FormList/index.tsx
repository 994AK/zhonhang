import React, { useEffect, useState } from 'react';
import { Button, Divider, Form } from 'antd';
import OutletInfo from '@/pages/users/components/FormList/OutletInfo';
import DataInfo from '@/pages/users/components/FormList/DataInfo';
import Merchant from '@/pages/users/components/FormList/Merchant';
import { connect } from 'umi';

const FormList = ({ users, dispatch }: any) => {

  const [form] = Form.useForm();

  const [data, setData] = useState([]);

  //users传值有变化的时候就会更新
  useEffect(() => {
    setData(users);
  }, [users]);


  const onFinish = (value: any) => {
    dispatch({
      type: 'users/patch',
      payload: value,
    });
  };

  return (
    <>
      {
        (data.length > 0) ?
          <Form form={form} onFinish={onFinish}>
            <Merchant props={users[0].site} />
            <OutletInfo props={users[0].outlets} />
            <DataInfo props={users} />
            <Divider orientation='center'><Button htmlType={'submit'}>提交</Button></Divider>
          </Form>
          : null
      }
    </>

  );
};

export default connect(({ users, loading }: any) => ({
  users,
  loading: loading.models.list,
}))(FormList);


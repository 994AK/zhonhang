import React, { useEffect} from 'react';
import {  Form, Input, Modal } from 'antd';
import { useModel } from 'umi';

const UserModel = ({ visible, closeHandler, record ,onFinish }:any) => {


  const [form] = Form.useForm();

  //Modal触发显示了再渲染值
  useEffect(() => {
    form.setFieldsValue(record);
  }, [visible]);

  //Modal 按提交按钮后 提交
  const onOK = ()=>{
    form.submit();
  }

  const onFinishFailed = (errFinish:any) => {
    console.log("提交失败" + errFinish)
  }

  return (
    <div>
      <Modal
        title='修改内容'
        visible={visible}
        onOk={onOK}
        onCancel={closeHandler}
        forceRender
        okText={"确认"}
        cancelText={"取消"}

      >
        <Form
          form={form}
          size={'small'}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

          <Form.Item
            name='business_name'
            label='商户名称'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='business_branch'
            label='商户分店名称'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='activity'
            label='商圈类型'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='describe'
            label='活动细类'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='format'
            label='商户业态'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='business_city'
            label='所属商圈'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='license_name'
            label='营业执照名称'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='location'
            label='地理位置'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='store_location'
            label='按门店地理位置填写(路、楼层等)'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='sales_principal'
            label='商户负责人'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='telephone'
            label='网点电话'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='discount_map'
            label='优惠地图'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='merchant_status'
            label='新增/删除'
          >
            <Input />
          </Form.Item>
        </Form>


      </Modal>
    </div>
  );
};

export default UserModel;

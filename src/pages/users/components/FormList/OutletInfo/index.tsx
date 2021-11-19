import React from 'react';
import { Cascader, Col, Divider, Form, Input, Row } from 'antd';

const OutletInfo = ({props}:any) => {
  let data =[props.find((item:any)=>item.value === localStorage.getItem('name'))];
  const style = {paddingLeft:"5rem"}
  return (
    <>
      <Divider orientation='left'>网点信息</Divider>
      <Row>
        <Col span={8} style={style} className='gutter-row'  >
          <Form.Item
            name={'sales_department'}
            label={'网点营业部'}
            rules={[{ required: true, message: '选择网点咯,不选怎么给业绩咯= w =' }]}
          >
            <Cascader
              placeholder={'请选择营业部'}
              options={data}
            />
          </Form.Item>
        </Col>
        <Col span={8} style={style} className='gutter-row'  >
          <Form.Item
            name={"sales_principal"}
            label={'网点负责人'}
            rules={[{ required: true, message: '快快快,写上负责人哦' }]}

          >
            <Input placeholder={'网点负责人名字'} />
          </Form.Item>
        </Col>
        <Col span={8} style={style} className='gutter-row'  >
          <Form.Item
            name={"branch_phone"}
            label={'网点电话'}
            rules={[{ required: true, message: '我需要网点电话呢' }]}
          >
            <Input placeholder={'网点电话'} />
          </Form.Item>
        </Col>
      </Row>

    </>
  );
};

export default OutletInfo;

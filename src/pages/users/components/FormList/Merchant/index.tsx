import React from 'react';
import { Cascader, Col, Divider, Form, Input, Row } from 'antd';

const Merchant = ({ props }: any) => {

  const style = { paddingLeft: '5rem' };
  const strName = localStorage.getItem('name');

  return (
    <>
      <Divider orientation='left'>商户信息</Divider>
      <Row>
        <Col span={12} style={style} className='gutter-row'>
          <Form.Item
            name={'business'}
            label={'商户号'}
            rules={[{ required: true, message: '喂! 商户号写了吗？' }]}
          >
            <Input placeholder={'商户号'} />
          </Form.Item>
        </Col>
        <Col span={12} style={style} className='gutter-row'>
          <Form.Item
            name={'business_name'}
            label={'商户名称'}
            rules={[{ required: true, message: '哎呀! 不小心忘写商户名称了哦？快写上' }]}
          >
            <Input placeholder={'商户名称'} />
          </Form.Item>

        </Col>
        <Col span={12} style={style} className='gutter-row'>
          <Form.Item
            name={'telephone'}
            label={'商户电话'}
            rules={[{ required: true, message: '写电话哦,联系不到商户怎么办' }]}
          >
            <Input placeholder={'商户的联系电话'} />
          </Form.Item>
        </Col>
        <Col span={12} style={style} className='gutter-row'>
          <Form.Item
            name={'business_branch'}
            label={'商户分店'}
          >
            <Input placeholder={'是否有分店，有就写名字'} />
          </Form.Item>
        </Col>
        <Col span={12} style={style} className='gutter-row'>
          <Form.Item
            name={'location'}
            label={'地理位置'}
            rules={[{ required: true, message: '地理位置填一下为' }]}
          >
            <Cascader
              placeholder={'请选择门店地址的位置'}
              options={[{
                'value': '广西壮族自治区',
                'label': '广西壮族自治区',
                'children': props.map((i: any) => {
                  return i.children.find((Item: any) => Item.value + '分行' === strName);
                }),
              }]}
            />
          </Form.Item>
        </Col>
        <Col span={12} style={style} className='gutter-row'>
          <Form.Item
            name={'store_location'}
            label={'门店位置'}
            rules={[{ required: true, message: '门店具体位置也需要写哦' }]}
          >
            <Input placeholder={'门店具体位置（包括门牌号）'} />
          </Form.Item>
        </Col>
        <Col span={12} style={style} className='gutter-row'>
          <Form.Item
            name={'license_name'}
            label={'营业执照名字'}
            rules={[{ required: true, message: '营业执照名称写一下为' }]}
          >
            <Input placeholder={'商户营业执照名称'} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default Merchant;

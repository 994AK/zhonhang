import React from 'react';
import { Cascader, Col, Divider, Form, Input, Row, Select } from 'antd';

const DataInfo = ({props}:any) => {

  const { address, business } = props[0];

  const style = {paddingLeft:"5rem"}
  const { Option } = Select;

  return (
    <>
      <Divider orientation='left'>数据选择</Divider>
      <Row >
        <Col span={12} style={style} className='gutter-row'  >
          <Form.Item
            name={'activity'}
            label={'活动类型'}
            rules={[{ required: true, message: '选择活动类型了吗' }]}
          >
            <Cascader
              placeholder={'请选择活动类型'}
              options={address}
            />
          </Form.Item>
        </Col>
        <Col span={12} style={style} className='gutter-row'  >
          <Form.Item
            name={'describe'}
            label={'活动描述'}
            rules={[{ required: true, message: '选择活动描述了吗' }]}

          >
            <Select placeholder={'请选择活动的描述'}>
              <Option value='味享八桂-满10随机立减1~5元'>味享八桂-满10随机立减1~5元</Option>
              <Option value='满200档新兴消费（母婴、体育等）（地标商圈）'>满200档新兴消费（母婴、体育等）（地标商圈）</Option>
              <Option value='商圈快捷轻餐-满20随机立减5~10元'>商圈快捷轻餐-满20随机立减5~10元</Option>
              <Option value='商圈快捷正餐-满100随机立减30~50元'>商圈快捷正餐-满100随机立减30~50元</Option>
              <Option value='乐动八桂-6.8折最高立减30元'>乐动八桂-6.8折最高立减30元</Option>
              <Option value='其他—分行自行开展的活动'>其他—分行自行开展的活动</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12} style={style} className='gutter-row'  >
          <Form.Item
            name={'merchant_status'}
            label={'商户状态'}
            rules={[{ required: true, message: '请告诉我商户状态呗' }]}

          >
            <Select placeholder={'请选择新增/删除'}>
              <Option value={'新增'}>新增</Option>
              <Option value={'删除'}>删除</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12} style={style} className='gutter-row'  >
          <Form.Item
            name={"format"}
            label={'商户业态'}
            rules={[{ required: true, message: '当前商户属于什么业态呀?' }]}
          >
            <Select placeholder={'请选择商户业态'}>
              <Option value={'餐饮'}>餐饮</Option>
              <Option value={'文旅（观影、旅游、文创等'}>文旅</Option>
              <Option value={'便民(便利店、交通等)'}>便民</Option>
              <Option value={'时尚(服饰、奢侈品等)'}>时尚</Option>
              <Option value={'家装'}>家装</Option>
              <Option value={'家电'}>家电</Option>
              <Option value={'酒店'}>酒店</Option>
              <Option value={'体育（体育服饰、装备、健身、运动消费等）'}>体育</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12} style={style} className='gutter-row'  >
          <Form.Item
            name={'discount_map'}
            label={'优惠地图'}
            rules={[{ required: true, message: '我需要把他们展示在地图上，请你选择下优惠地图' }]}

          >
            <Select placeholder={'请选择优惠地图'}>
              <Option value={'餐饮美食'}>餐饮美食</Option>
              <Option value={'时尚购物'}>时尚购物</Option>
              <Option value={'休闲娱乐'}>休闲娱乐</Option>
              <Option value={'生活服务'}>生活服务</Option>
              <Option value={'冰雪运动'}>冰雪运动</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12} style={style} className='gutter-row'  >
          <Form.Item
            noStyle
            shouldUpdate
          >
            {({ getFieldValue }) => {
              if (getFieldValue('activity')) {

                const activity = getFieldValue('activity')[0];

                // //先知道他是哪个活动类型的
                const cityType = business.find((item:any)=>item.value === activity).children;

                //最后选择的城市商圈
                let bess = cityType.find((item:any)=>item.value+"分行" === localStorage.getItem("name")).children
                return <Form.Item
                  name={'business_city'}
                  label={'城市商圈'}
                  rules={[{ required: true, message: '商圈是不是没写呢' }]}
                >
                  <Cascader
                    placeholder='请选择城市商圈'
                    options={bess}
                  />
                </Form.Item>;
              } else {
                return null;
              }
            }}


          </Form.Item>
        </Col>

      </Row>

    </>
  );
};

export default DataInfo;

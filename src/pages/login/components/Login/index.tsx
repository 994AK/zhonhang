import { connect, history,Link } from 'umi';
import { Button, Form, Input, Card } from 'antd';
import styled from '@emotion/styled';
import topSvg from '@/assets/top.svg';


const Login = ({ dispatch }: any) => {

  function handleSubmit(value: any) {
    dispatch({
      type: 'login/fetch',
      payload: value,
    });
  }

  return (
    <Container>
      <DivBox>
        <GridBox>
          <GridLeft />
          <GridRight>
            <GridRightTop />
            <Card>
              <Form onFinish={handleSubmit}>
                <Form.Item
                  name={'username'}
                >
                  <Input placeholder={'用户名'} />
                </Form.Item>
                <Form.Item
                  name={'password'}
                >
                  <Input placeholder={'密码'} type={'password'} />
                </Form.Item>
                <Button htmlType={'submit'}> 登录 </Button>
              </Form>
            </Card>
            <br />
            <Link to={'/register'}> 没有账号?注册一个吧 </Link>
          </GridRight>

        </GridBox>
      </DivBox>
    </Container>
  );
};


export default connect()(Login);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vh;
  background: #707774;
`;

const DivBox = styled.div`
  min-width: 80rem;
  min-height: 50rem;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 100%);
  grid-template-columns: repeat(2, 60% 40%);


`;

const GridLeft = styled.div`
  //border: 1px solid red;
  background-color: #232831;
  border-radius: 10px 0 0 10px;
  min-height: 50rem;
  display: grid;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  background-color: #232831;
  box-shadow: 0 30px 20px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.40);
`;

const GridRight = styled.div`
  border-radius: 0 10px 10px 0;
  display: grid;
  background: #ffffff;
  min-height: 50rem;
  grid-template-rows: repeat(3, 30% 50% 10%);
  text-align: center;
  box-shadow: 0 30px 20px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.40);
`;

const GridRightTop = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${topSvg});

`;

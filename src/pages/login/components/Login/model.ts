import { Reducer, Effect, history,Subscription } from 'umi';
import { accountLogin, welcome } from '@/pages/login/components/Login/service';


interface LoginType {
  namespace: 'login';
  state: {},
  reducers: {
    save: Reducer
  },
  effects: {
    fetch: Effect
    welcome: Effect
  },
  subscriptions:{
    setup: Subscription
  }
}

const Login: LoginType = {
  namespace: 'login',

  //默认值
  state: {},

  //异步
  effects: {
    //登录
    * fetch({ payload, callback }, { call, put }) {
      const callLogin = yield call(accountLogin, payload);

      yield put({
        type: 'welcome',
        payload: {token:callLogin.token}
      });

      localStorage.setItem('token',callLogin.token)
      localStorage.setItem('name',callLogin.name)

      history.push("/users")
    },
    //登录后返回一个token，授权
    * welcome({ payload, callback }, { call, put }) {
      yield call(welcome, payload || localStorage.getItem('token'));
    },
  },

  //同步
  reducers: {
    save(state, action) {

    },
  },
  subscriptions: {
    //订阅部分
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        pathname === '/login' ? localStorage.clear() : null;
      });
    },
  },


};

export default Login;

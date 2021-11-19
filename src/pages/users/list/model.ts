import { Reducer, Effect, Subscription } from 'umi';
import { getlistuser, getlistuser_all, excel, Update } from './service';


interface UsersType {
  namespace: 'list';
  state: {},
  reducers: {
    save: Reducer
  },
  effects: {
    fetch: Effect
    excel: Effect
    update: Effect
    load: Effect
  },
  subscriptions: {
    setup: Subscription
  }
}

const Users: UsersType = {
  namespace: 'list',

  //默认值
  state: {},

  //异步
  effects: {
    * fetch({ payload, callback }, { call, put }) {
      const location = {
        sales_department: localStorage.getItem('name'),
        token: localStorage.getItem('token'),
      };
      yield put({
        type: 'save',
        payload: {
          getlistuser: yield call(getlistuser, location),
          auth: yield call(getlistuser_all),
        },
      });
    },
    * excel({ payload }, { call, put }) {
      yield call(excel, payload);
    },
    //表单修改 数据库更新
    * update({ payload: { key, values } }, { call, put }) {
      yield call(Update, { key, values });
      //重新触发下 刷新一下
      yield put({
        type: 'load',
      });
    },
    * load(a, { put }) {
      yield put({ type: 'fetch' });
    },
  },

  //同步
  reducers: {
    save(state, { payload }) {
      return payload;
    },
  },
  subscriptions: {
    //订阅部分
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        pathname === '/users/list' ? dispatch({
          type: 'fetch',
        }) : null;
      });
    },
  },
};

export default Users;

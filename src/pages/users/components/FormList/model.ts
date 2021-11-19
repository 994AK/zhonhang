import { Reducer, Effect, Subscription } from 'umi';
import * as listService from './service';
import { post_list } from './service';


interface UsersType {
  namespace: 'users';
  state: {},
  reducers: {
    save: Reducer
  },
  effects: {
    fetch: Effect
    patch: Effect
  },
  subscriptions: {
    setup: Subscription
  }
}

const Users: UsersType = {
  namespace: 'users',

  //默认值
  state: {},

  //异步
  effects: {
    * fetch({ payload, callback }, { call, put }) {
      const { data_outlets, data_site, data_address, data_business } = listService;
      yield put({
        type: 'save', payload: [{
          outlets: yield call(data_outlets),
          site: yield call(data_site),
          address: yield call(data_address),
          business: yield call(data_business),
        }],
      });
    },
    * patch ({payload},{call,put}) {
      alert("恭喜你填写完成")
      yield call(listService.post_list,payload)
    }
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
        pathname === '/users' ? dispatch({
          type: 'fetch',
        }) : null;
      });
    },
  },


};

export default Users;

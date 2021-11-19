// @ts-ignore
import { createLogger } from 'redux-logger';
import { message } from 'antd';

export const dva = {
  config: {
    onAction: createLogger(),
    onError(e: Error) {
      message.error(e.message, 3);
    },
  },
};
export async function getInitialState() {
  const data = {
    auth:['Admin','General']
  };
  return data;
}

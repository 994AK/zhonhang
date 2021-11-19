import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  history: { type: 'hash' },
  //配置dva
  dva: {
    immer: true,
    hmr: false,
  },


});

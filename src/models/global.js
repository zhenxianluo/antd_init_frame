/***************************************
 * Author:
 * Date:
 * Desc:
 ***************************************
 * update: name    datetime      commit
           张三    17-03-01 17   增加...
 **************************************/
import { otherService } from '../services/resource';
import { message } from 'antd';

export default {
  namespace: 'global',
  state: {
  },
  reducers: {
    saveData(state, {type, name, data}){
      return {...state, [name]: data}
    }
  },
  effects: {
  },
  subscriptions: {
  },
};

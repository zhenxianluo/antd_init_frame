/***************************************
 * Author:
 * Date:
 * Desc:
 ***************************************
 * update: name    datetime      commit
           张三    17-03-01 17   增加...
 **************************************/
import { browserHistory } from 'dva/router';
import {message} from 'antd';
import dva from 'dva';
import './index.less';

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e) {
    message.destroy();
    message.error(e.message);
  }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/global').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

/***************************************
 * Author:
 * Date:
 * Desc:
 ***************************************
 * update: name    datetime      commit
           张三    17-03-01 17   增加...
 **************************************/
import React from 'react';
import { connect } from 'dva';
import './IndexPage.less';

@connect( state => ({ global: state.global }))
class IndexPage extends React.Component {
  state = {
  }

  componentDidMount() {
  }

	render() {
		return (
      <div className="main">
        <div className="box">
          <div className="box_chdren"></div>
        </div>
        <div className="box">
          <div className="box_chdren"></div>
        </div>
      </div>
		)
	}
}
export default IndexPage;

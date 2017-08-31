import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import index from '../Component/index'; //销售录入
import my from '../page/user/my';
class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


const chooseProducts = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/chooseProducts').default)
    },'chooseProducts')
}

const helpCenter = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/helpCenter').default)
    },'helpCenter')
}

const saleRecord = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/saleRecord').default)
    },'saleRecord')
}

const allDeposit = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/allDeposit').default)
    },'allDeposit')
}

const applyRecord = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/applyRecord').default)
    },'applyRecord')
}

const applyDeposit = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/applyDeposit').default)
    },'applyDeposit')
}

const home = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../page/home/home').default)
    },'home')
}

const login = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../page/user/login').default)
    },'login')
}


const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={index} />//首页
            <Route path="index" component={index} />
            <Route path="helpCenter" getComponent={helpCenter} />//帮助中心
            <Route path="saleRecord" getComponent={saleRecord} />//销售记录
            <Route path="chooseProducts" getComponent={chooseProducts} />//选择商品
            <Route path="allDeposit" getComponent={allDeposit} />//余额
            <Route path="applyDeposit" getComponent={applyDeposit} />//申请提现
            <Route path="applyRecord" getComponent={applyRecord} /> //提现记录
			<Route path="home" getComponent={home} /> //首页
			<Route path="login" getComponent={login} /> //登录
			
			<Route onEnter={requireAuth} path="my" component={my}>
				<Route path="my" component={my}/>
		   </Route>
			
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);
function hasLogin(){
	let isLogin= $.fn.cookie('isLogin');
	return isLogin;
}
function requireAuth(nextState, replaceState) {
  if (!hasLogin()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

export default RouteConfig;
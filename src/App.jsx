import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './Router/Route'; //路由配置
import store from './Redux/Store/Store';
import './Config/Config.js';//引入默认配置
import './Config/Common.js';//引入默认配置

import './Style/common.scss';
import './Style/head.scss';
import './Style/index.scss';
import './Style/chooseProducts.scss';
import './Style/helpCenter.less';
import './Style/saleRecord.less';
import './Style/allDeposit.less';
import './Style/applyDeposit.less';
import './Style/applyRecord.less';

import './Style/page/header.scss';
import './Style/page/footer.scss';
import './Style/page/home.scss';
import './Style/page/button.scss';
import './Style/page/login.scss';


store.subscribe(() => { //监听state变化
    //console.log(store.getState())
});

render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);


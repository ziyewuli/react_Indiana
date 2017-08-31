import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import { connect } from 'react-redux';
import {History, Link } from 'react-router';
import { is, fromJS} from 'immutable';
import {Tool} from '../../Config/Tool';
import {Header,template} from '../../Component/common/mixin';



class Main extends Component{
	constructor(props,context){
		super(props,context);
		this.state={
			productList:[],//产品列表
			choosedClass:{'3':'selected box-col'}, //当前选中的类别，以此设置class名
			oldName:'1',////上次选中的类别，默认为1
			currentPage:1,//当前页
			totalPage:1//总页数
			
		}
		this.layout = (event) => { 
			 $.fn.cookie('isLogin','');
			 this.props.history.pushState(null, '/home');
		}
	}
	componentDidMount(){
		
		

	}
	componentWillReceiveProps(nextProps, nextState) {
		if (this.props !== nextProps) { 
			let {data} = nextProps.state;
			if (data) {
				data=jieshou(data);
				console.log(data);
				this.state.productList=data.data||[];
			}
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render(){
		return (
		<div ref='Container' className="component_container">
			<div className="m-simpleHeader" id="dvHeader">
				<h1>个人中心</h1>
				<a class="btn-submit theme-btn-pp" href="javascript:void(0);" onClick={this.layout}>退出登录</a>
			</div>
		</div>
		)
	}
}




export default template({
    id: 'home',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: 'json.php',
    data: {
            romd:(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000),
			y:'cplist',
			d:'soso',
			cpid:0,
			pg:4,
			px:1
        }
});

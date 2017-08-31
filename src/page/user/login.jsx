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
			username:'',
			password:''
		}
		this.handleChange=(event)=>{
			var newState = {};
			console.log(event.target.name);
			newState[event.target.name] = event.target.name === "permanent" ? event.target.checked : event.target.value;
			this.setState(newState);
		}
		this.login = (event) => { 
			 let regtoken = '',
			 username =this.state.username,
			 password =this.state.password;
			 if( username.length < 4 || username.length > 30){

                layer.tips( LANG.zherror , $("[name=username]"), {
                      tips: [1, 'red'],
                      time: 40000
                });

			 }else if(password.length < 6 || password.length > 32){

					layer.tips( LANG.mmerror , $("[name=password]"), {
						  tips: [1, 'red'],
						  time: 40000
					});

			 }else{
				  layer.tips();
				  /* let t=(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000);
				   $.get('/json.php',{'romd':t,'y' :'login', 'd':'edit','z':username,'m':password,'r': regtoken }, (res) => {
					    let DATA =  jieshou(res);
						if( DATA ){

						   var D = DATA.data;

						   if( D ){

							   if( D.regtoken ) regtoken = D.regtoken;
								
							   if(D.uid > 0){ 
								   
								   user(D);
								   if( username != '') this.props.history.pushState(null, '/my');

							   }
								
							}	
							if(DATA.code == 2){
							   
								  acdenglu();
							   
							}else if(DATA.code == '-2'){

									layer.tips(res.msg , $("[name=username]"), {
										  tips: [1, 'red'],
										  time: 2000
									 });

							}else if(DATA.code == '-3'){

									layer.tips(res.msg , $("[name=password]"), {
										  tips: [1, 'red'],
										  time: 2000
									 });

							}else if(DATA.code == '-4'){

									layer.tips(res.msg , $("[pro=submit]"), {
										  tips: [1, 'red'],
										  time: 2000
									 });

							}else if( DATA.code == 91){
								  layer.msg( '绑定成功',{ offset :'auto' ,time : 1000,url : HTTP });

							}else if( DATA.code == 90){

								layer.msg( '绑定失败' ,{ offset :'auto' ,time : 1000 ,url : HTTP });

							}else if( DATA.code == 99){

								layer.closeAll();
								window.location.href= tiaozhuan;
							}
						}
					   
				   })*/
				   $.fn.cookie('isLogin',true); 

				   this.props.history.pushState(null, '/my');
			 }
			 
			
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
		var bgwhite={
			background:'#ffffff'
		}
		var stylebtn = {
		  background:'#119bfb',
		  borderColor:'#119bfa'
		};
		return (
		<div ref='Container' className="component_container">
			<div className="m-simpleHeader" id="dvHeader">
				<a href="javascript:history.back(-1);" data-pro="back" data-back="true" className="m-simpleHeader-back"><i className="ico ico-back"></i></a>
				<h1>用户登录</h1>
			</div>
			<div className="m-login">
				<div className="m-login-tips" id="tips"></div>
				<div className="zzanniu">
					<div className="m-login-form w-form">
						<div className="w-form-item m-login-form-account w-inputBar w-bar">
							<div className="w-bar-label">登录帐号：</div>
							<a data-pro="clear" href="javascript:void(0);" className="w-bar-input-clear">×</a>
							<div className="w-bar-control">
								<input placeholder="手机登录" ref = 'telphone'  className="w-bar-input" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
							</div>
						</div>
						<div className="w-form-item m-login-form-password w-inputBar w-bar">
							<div className="w-bar-label">登录密码：</div>
							<a data-pro="clear" href="javascript:void(0);" className="w-bar-input-clear">×</a>
							<div className="w-bar-control">
								<input placeholder="请输入密码" ref = 'password' className="w-bar-input" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
							</div>
						</div>
						<div className="m-login-menu" id="autoCmpl"></div>
					</div>
					<div className="m-login-submit"><button className="w-button w-button-main" style={stylebtn} data-pro="submit" id="btnLogin" onClick={this.login}>登 录</button></div>
					<div className="m-login-link"><a href="javascript:newzhuce();" id="aReg">马上注册</a><a href="javascript:newpass();" id="aForget" className="aside">忘记密码？</a></div>
				</div>
				<div className="m-login-extLogin">
					<div className="hd"><span>第三方登录</span></div>
					<div className="bd"></div>
				</div>
			</div>
		</div>
		)
	}
}




export default template({
    id: 'home',  //应用关联使用的redux
    component: Main //接收数据的组件入口
   
});

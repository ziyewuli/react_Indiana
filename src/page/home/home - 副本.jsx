import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import { connect } from 'react-redux';
import {History, Link } from 'react-router';
import { is, fromJS} from 'immutable';
import {Tool} from '../../Config/Tool';
import {Header,template} from '../../Component/common/mixin';
/*import '../../plugins/swiper-3.4.2.jquery.min.js'
import '../../style/plugins/swiper-3.4.2.min.css'*/
import Swiper from 'react-native-swiper';


class List extends Component{
	shouldComponentUpdate(nextProps,nextState){
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
	}
	
	render(){
		return (
			<ul className="team_list">
			{
				this.props.list.map((item, index)=>{
				return <ListItem key={index} index={index}{...item}/>
				})
			}
			</ul>
		)
	}
}


class ListItem extends Component{
	constructor(props,context){
		super(props,context);
	}
	shouldComponentUpdate(nextProps,nextState){
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
	}
	render(){
		let {created_at,customers_phone,customers_name,product,product_price,commission,sales_money,type,sales_id,index,content} = this.props;
        let context;
        let showTip;
        let creatArr = created_at.split(':');
        created_at = creatArr[0] + ':' + creatArr[1];
        if (type == 'FAILED') {
            context = (<span className='order_status1'>未通过</span>);
            showTip = (<div className='failed_reason clear'>
                    <span className='left'>未通过原因：</span>
                    <span className='reason_content left'>{content}</span>
                    <span className='right delete_order' onClick={this.deleleOrder}>删除</span>
                </div>)
        }else if (type == 'UNAUDIT') {
            context = (<span className='order_status1'>待审核</span>);
            showTip = (<div className='failed_reason'>等待管理员审核，审核通过后，佣金将结算至账户</div>)
        }else if (type == 'PASS') {
            context = (<span className='order_status2'>已通过</span>);
            showTip = null;
        }

        return (
            <li className='order_li'>
                <header>创建时间：{created_at}{context}</header>
                <div className='order_inform'>
                    <div className='order_style'>
                        <span>客<span style={{display:'inline-block',width:'1.3rem'}}></span>户：</span>
                        <span style={{marginRight:'0.875rem'}}>{customers_name}</span>
                        <span>{customers_phone}</span>
                    </div>
                    <div className='order_style ellips'>
                        <span>购买商品：</span>
                        {
                            product.map((item,index) => {
                                return <span style={{marginRight:'0.875rem'}} key={index}>{item.product_name}</span>
                            })
                        }
                    </div>
                    <div className='order_style'>
                        <span>订单金额：</span>
                        <span style={{marginRight:'1.95rem',color:'red'}}>¥{sales_money}</span>
                        <span>佣金：</span>
                        <span style={{color:'red'}}>¥{commission}</span>
                    </div>
                </div>
                {showTip}
            </li>
        );
	}
}


class Main extends Component{
	constructor(props,context){
		super(props,context);
		this.state={
			data:[],
			choosedClass:{waite:'team_choosed'},
			oldName:'waited'
		}
		this.tabNavChange = (event) => {
			let  name=null;
			if(event.target.children[0]){
				name=event.target.children[0].getAttribute('name');
			}else{
				name=event.target.getAttribute('name');
			}
			if(name!== this.state.oldName){
				this.state.oldName=name;
				this.state.choosedClass={};
				this.state.choosedClass[name]='team_choosed';
				let type='';
				if(name=='failed'){
					type='FAILED';
				}else if(name=='waited'){
					type='UNAUDIT';
				}else{
					type='PASS';
				}
			 this.props.getData('/shopro/data/record',{page:1,type:type}, (res) => {
                    if (res.http_code == 200) {
                        this.setState({
                            data:res.data.data,
                            currentPage:1,
                            totalPage:res.data.totalPage
                        })
                    }else{
                        Tool.alert(res.data.msg)
                    }
                }, 'changeType')
			}
			
		}
	}
	componentDidMount(){
		var swiper = new Swiper('.swiper-container', {

                        pagination : '.swiper-pagination',
               paginationClickable : true,
                          autoplay : 3000,

        });

        /*var swiper = new Swiper('.swiper-container2', {

                         direction : 'vertical',
                          autoplay : 1500,
  
        }); */

	}
	render(){
		return (
		<div ref='Container' className="component_container">
		<div id='bd'>
			<div className="activity-delay-notice">
				<div className="delay-time-widget">
				   邀请你一起来夺宝
					<a className="btn-submit theme-btn-pp" href="javascript:xsfx();">点击关注</a>
				</div>
			</div>
			<div className='one-home-v2 mobile-widget home_theme_normal'>
				<div className="home-banner-widget swiper-container swiper-container-horizontal" >
                <ul className="swiper-wrapper">
                    <div className="swiper-slide" > 
						<Link className="frame" to="#" title="">
							<img src="http://www.duobaozhuanqu.com/attachment/all/201706/14_44a5b71303d9f61cf177e3bcfb23f5f.png"/>
						</Link>  
					</div>
					 <div className="swiper-slide" > 
						<Link className="frame" to="#" title="">
							<img src="http://www.duobaozhuanqu.com/attachment/all/201705/22_3cade0c45510dcfc5f55bed26e2c70c.png"/>
						</Link>  
					</div>
                </ul>
				<ul className="swipe-banners-radius-widget swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
				<span className="swiper-pagination-bullet"></span>
				<span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
				</ul>
                
            </div>
			</div>
		</div>
			
			<nav className="team_nav">
				<ul className="clear" onClick={this.tabNavChange}>
					<li className={this.state.choosedClass['failed']}><p name="failed">未通过</p><span></span></li>
					<li className={this.state.choosedClass['waited']}><p name="waited">待审核</p><span></span></li>
					<li className={this.state.choosedClass['passed']}><p name="passed">已通过</p></li>
				</ul>
				{
					this.state.data.length>0? <List list={this.state.data} /> : null
				}
			</nav>
		</div>
		)
	}
}




export default template({
    id: 'saleRecord1',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '/shopro/data/record',
    data: {
            page:1,
            type:'UNAUDIT'
        }
});

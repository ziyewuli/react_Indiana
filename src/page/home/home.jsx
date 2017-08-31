import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import { connect } from 'react-redux';
import {History, Link } from 'react-router';
import { is, fromJS} from 'immutable';
import {Tool} from '../../Config/Tool';
import {Header,template} from '../../Component/common/mixin';
import '../../plugins/swiper-3.4.2.jquery.min.js';
import '../../style/plugins/swiper-3.4.2.min.css';


class List extends Component{
	constructor(props,context) {
        super(props,context);
	}
	shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render(){
		return (
			<ul className="date-view-widget clearfix">
				{
                    this.props.list.map((item, index) => {
                        return <ListItem key={index} {...item} index={index}/>
                    })
                }					
			</ul>
		)
	}
}

class ListItem extends Component{
	 constructor(props,context) {
        super(props,context);
		this.hitcp= (cpid,event) =>{
			PICWIT ='140';
			var top  = $("#hitcp"+cpid).offset().top+10;
			var left = $("#hitcp"+cpid).offset().left+20;
			var src  =  $("#hitcp"+cpid+"  img.sssss").attr('src');
			var suij = Math.round(Math.random()*100000);
			$("body").append('<img src="'+src+'" class="woquyss'+suij+'" width="'+PICWIT+'" height="'+PICWIT+'" style="z-index:999999;position:absolute;top:'+top+'px;left:'+left+'px;">');
				
			var mbtop  = $(".global-ficon-cart").offset().top+20;
			var mbleft = $(".global-ficon-cart").offset().left+20;
			$(".woquyss"+suij).animate({ width: "0px", height: "0px", top:mbtop, left:mbleft,opacity:0.2 }, 500 );
		}
		this.addgouwu= (huidiaode,cpid,num,mode,lx,event) =>{
			this.gouwuche( huidiaode , cpid  , num , mode , lx );
		}
		this.gouwuche=(huidiaode,cpid,num,mode,lx,event)=>{
			/* 购物车 
            cpid  产品id
            num   数量
            lx     0 云够  1 直钩
            mode  add 一直加num
            mode  edit 等于num
            mode  del  删除 产品id
            mode  del  cpid 等于0 删除所有产品           
         */
		 if( cpid < 1){
         
             layer.msg( LANG.nocpid ,{ offset :'auto',closeBtn:1, icon: 2 ,time : 3000});

             return false;

         }else if(!num ||  num < 1 ){

             num = 1;
         }
		 if( !mode) mode = 'add';		
         if( !lx) lx = 0;
		 console.log(2);
		 let t=(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000);
		 $.get('/json.php',{'romd':t,'y' :'gouwuche', 'd' :mode , 'l' : lx, 'cpid' : cpid ,'num' : num}, (res) => {
				 let DATA=jieshou(res);
				 if(DATA){
					  
					 if(DATA.code == -1 ){

						layer.msg( DATA.msg ,{ offset :'auto' ,time : 3000});

					  }else{

						 var D = DATA.data;

						  if( D ){ 


								huidiaode( cpid , lx);

								this.gouwuchdu(D);


						   }
					 }
							 
				 }     
                })
		}
		 
		this.gouwuchdu=(D,event)=>{
         /*通用购物车读取*/
         
        if( $(".hidenotice").length > 0 ){
            $(".w-miniCart").show();
            if( D.ornum > 0){

                $(".hidenotice span").html(D.ornum );
                $(".hidenotice span").show();

            }else $(".hidenotice span").hide();

        }
}

		
		
	 }
	 shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render(){
		let {cpid,huobi,name,suoluetu,jindu,url}= this.props;
		return (
			<li className="data-view-item data-view-grid-item" id={"hitcp"+cpid}>
				<div className="item-img lazyload-animation"> 
					<Link to={url}>
						<img src={suoluetu} className="sssss" />
					</Link>
				</div>
				<div className="figure_pic"></div>
				<p className="item-title"> <Link to={url}>{name}</Link></p>
				<div className="item-operate">
					<div className="progress-widget"> 
						<div className="progress-tip ellipsis">开奖进度   <span className="theme-txt-color-f">{jindu}%</span> </div>
						<div className="progress-full"> 
							<div  style={{width: '{jindu}%'}} className="progress-use"></div>  
						</div>
					</div>
					<Link className="btn-join theme-btn-f" onClick={this.addgouwu.bind(this,this.hitcp,cpid,0)}>立即参与</Link> 
				</div>
				<div className="halfline halflineerect"></div> 
				<div className="halfline"></div> 
			</li>
		)
	}
}

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
		this.chooseStatus = (event) => { 
			let  name=null;
			if (event.target.children[0]) {
                name = event.target.children[0].getAttribute('name')
            }else{
                name = event.target.getAttribute('name')
            }
			 if (name !== this.state.oldName) {
				this.state.oldName = name;
				this.state.choosedClass = {};
                this.state.choosedClass[name] = 'selected box-col';
				this.forceUpdate();
			 this.props.getData('/json.php',{y:'cplist',d:'soso',cpid:0,pg:1,px:name}, (res) => {
				 if(res){
					 let data=jieshou(res);
					 this.setState({
                            productList:data.data
                        })		 
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

        var swiper = new Swiper('.swiper-container2', {

                         direction : 'vertical',
                          autoplay : 1500,
  
        }); 
		 $( window ).scroll( function () {
            var top = parseInt( $(this).scrollTop() );

            if ( top < 300 ){ 

                if( $(".list-nav-widget").length > 0 ) $(".list-nav-widget").removeClass( 'fixed-nav' );

            }else{

                if( $(".list-nav-widget").length > 0 ) $(".list-nav-widget").addClass( 'fixed-nav' );
            }
        });
		

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
			<div id='bd'>
				<div className="activity-delay-notice">
					<div className="delay-time-widget">
					   邀请你一起来夺宝
						<Link className="btn-submit theme-btn-pp" to="javascript:xsfx();">点击关注</Link>
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
							<div className="swiper-slide" > 
								<Link className="frame" to="#" title="">
									<img src="http://www.duobaozhuanqu.com/attachment/all/201705/22_077ca44f17917191c8727ea18b35b79.png"/>
								</Link>  
							</div>
							<div className="swiper-slide" > 
								<Link className="frame" to="#" title="">
									<img src="http://www.duobaozhuanqu.com/attachment/all/201705/22_d335e11738fa632797d437b51c5cf2f.jpg"/>
								</Link>  
							</div>
						</ul>
						<ul className="swipe-banners-radius-widget swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
						<span className="swiper-pagination-bullet"></span>
						<span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
						<span className="swiper-pagination-bullet"></span>
						<span className="swiper-pagination-bullet"></span>
						</ul>	
					</div>
					<div className="home-nav-widget">
						<ul className="nav-list clearfix">
							<li className="nav-item">
							   <Link className="ellipsis down" to="/l-20.html" > <b className="icon" ></b>APP下载</Link>
							</li>
							<li className="nav-item">
							   <Link className="ellipsis integral" to="/l-20.html" > <b className="icon" ></b>签到积分</Link>
							</li>
							<li className="nav-item">
							   <Link className="ellipsis pk" to="/l-20.html" > <b className="icon" ></b>PK专区</Link>
							</li>
							<li className="nav-item">
							   <Link className="ellipsis invite" to="/l-20.html" > <b className="icon" ></b>邀请赚钱</Link>
							</li>
							<li className="nav-item">
							   <Link className="ellipsis one" to="/l-20.html" > <b className="icon" ></b>一元专区</Link>
							</li>
							<li className="nav-item">
							   <Link className="ellipsis two" to="/l-20.html" > <b className="icon" ></b>二元专区</Link>
							</li>
							<li className="nav-item">
							   <Link className="ellipsis ten" to="/l-20.html" > <b className="icon" ></b>十元专区</Link>
							</li>
							<li className="nav-item">
							   <Link className="ellipsis hundred" to="/l-20.html" > <b className="icon" ></b>百元专区</Link>
							</li>
						</ul>
						<div className="halfline"></div>
					</div>
					<div className='real-notice-widget swiper-container2 swiper-container-vertical'>
						<ul className='swiper-wrapper'>
							<li className="ellipsis swiper-slide" ><Link to="#">恭喜<span className="theme-txt-color-f"> 我想知道为什么 </span> 获得 <span className="notice-detail"> 联通300元充值卡 </span></Link></li>
							<li className="ellipsis swiper-slide" ><Link to="#">恭喜<span className="theme-txt-color-f"> 我想知道为什么1 </span> 获得 <span className="notice-detail"> 联通300元充值卡 </span></Link></li>
							<li className="ellipsis swiper-slide" ><Link to="#">恭喜<span className="theme-txt-color-f"> 我想知道为什么2 </span> 获得 <span className="notice-detail"> 联通300元充值卡 </span></Link></li>
						</ul>
					</div>
					<div>
						<div className='one-near-prize mobile-widget'>
							<div className='nearprize-list'>
								<ul className='nearprize-container clearfix'>
									<li className="nearprize-item" id="c176_92">
										  <div className="item-img lazyload-animation"> 
										  <Link to="http://www.duobaozhuanqu.com/n-176-92.html"> <img src="http://www.duobaozhuanqu.com/attachment/image/201708/02_dd2cbf2eb7ec401cc13e60b86130ec2.jpg" className="sssss"/> </Link>
										  
										  </div>
										  
										 <div className="nearprize-detail">        
										  
											<div className="item-title"> <Link to="http://www.duobaozhuanqu.com/n-176-92.html">联通300元充值卡</Link> </div>
										   
											<div className="lottery-info">        
												 <p className="ellipsis"><Link to="http://www.duobaozhuanqu.com/user.php?y=userjilu&amp;uid=36229"><span className="theme-txt-color-f">我想知道为什么</span></Link>
												 
												 </p>
												 
												 <p className="ellipsis"><span className="theme-txt-color-p">10000141</span></p>
											   
											</div>
										</div>        
										<div className="halfline halflineerect"></div>
										<div className="halfline"></div>
									</li>
									<li className="nearprize-item" id="c176_92">
										  <div className="item-img lazyload-animation"> 
										  <Link to="http://www.duobaozhuanqu.com/n-176-92.html"> <img src="http://www.duobaozhuanqu.com/attachment/image/201708/02_dd2cbf2eb7ec401cc13e60b86130ec2.jpg" className="sssss"/> </Link>
										  
										  </div>
										  
										 <div className="nearprize-detail">        
										  
											<div className="item-title"> <Link to="http://www.duobaozhuanqu.com/n-176-92.html">联通300元充值卡</Link> </div>
										   
											<div className="lottery-info">        
												 <p className="ellipsis"><Link to="http://www.duobaozhuanqu.com/user.php?y=userjilu&amp;uid=36229"><span className="theme-txt-color-f">我想知道为什么</span></Link>
												 
												 </p>
												 
												 <p className="ellipsis"><span className="theme-txt-color-p">10000141</span></p>
											   
											</div>
										</div>        
										<div className="halfline halflineerect"></div>
										<div className="halfline"></div>
									</li>
									<li className="nearprize-item" id="c176_92">
										  <div className="item-img lazyload-animation"> 
										  <Link to="http://www.duobaozhuanqu.com/n-176-92.html"> <img src="http://www.duobaozhuanqu.com/attachment/image/201708/02_dd2cbf2eb7ec401cc13e60b86130ec2.jpg" className="sssss"/> </Link>
										  
										  </div>
										  
										 <div className="nearprize-detail halflineerect">        
										  
											<div className="item-title"> <Link to="http://www.duobaozhuanqu.com/n-176-92.html">联通300元充值卡</Link> </div>
										   
											<div className="lottery-info">        
												 <p className="ellipsis"><Link to="http://www.duobaozhuanqu.com/user.php?y=userjilu&amp;uid=36229"><span className="theme-txt-color-f">我想知道为什么</span></Link>
												 
												 </p>
												 
												 <p className="ellipsis"><span className="theme-txt-color-p">10000141</span></p>
											   
											</div>
										</div>        
										<div className="halfline halflineerect"></div>
										<div className="halfline"></div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="onehome-list">
						<ul className="list-nav-widget layout-box" onClick={this.chooseStatus}>
							<li className={this.state.choosedClass['1']} >
								<span name='1'>人气</span>
							</li>

							<li className={this.state.choosedClass['3']} >
								<span to="javascript:void(0);"  name='3'>最新</span>
							</li>

							<li  className={this.state.choosedClass['2']}>
								<span to="javascript:void(0);" name='2' >进度</span>
							</li>

							<li className={this.state.choosedClass['5']}>
								<span to="javascript:void(0);" name='5'>总需人次 <span className="order-arrow" name='5'></span> </span>
							</li>

							<div className="halfline halflinetop"></div>
							<div className="halfline"></div>
						</ul>
						{
							this.state.productList.length>0?<List list={this.state.productList} /> : null
						}
					</div>
					
					
				</div>
			</div>
			<div id='ft'>
				<div className="one-game-fbanner">
					<div className="halfline halflinetop"></div>
					<ul className="layout-box">
						<li className="box-col selected">
							<a href="javascript:void(0)" className="nav-item"><i className="global-ficon-one"></i>首页</a>
						</li>
						<li className="qbflei box-col ">
							<a className="nav-item" href="javascript:void(0)"><i className="global-ficon-all"></i>分类搜索</a>										
						</li>
						<li className="box-col ">
							<a className="nav-item" href="javascript:void(0)"><i className="global-ficon-prize"></i>最新揭晓</a>
						</li>
						<li className="box-col ">
							<a href="javascript:void(0)" className="nav-item hidenotice"><i className="global-ficon-cart"></i><b>购物车<span>0</span></b></a>
						</li>
						<li className="box-col ">
							<a href="/my" className="nav-item"><i className="global-ficon-profile"></i>我的</a>
						</li>
					</ul>
				</div>
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

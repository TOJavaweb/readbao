webpackJsonp([9],{472:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=t.actionHandlers=t.actions=t.resetState=t.saveImg=t.RESET_STATE=t.SAVE_IMG=void 0;var n,s=a(8),u=r(s),l=a(36),o=r(l),i=t.SAVE_IMG="SAVE_IMG",d=t.RESET_STATE="RESET_STATE",f=t.saveImg=function(e){return{type:i,data:e}},p=t.resetState=function(){return{type:d}},c=(t.actions={saveImg:f,resetState:p},t.actionHandlers=(n={},(0,u.default)(n,i,function(e,t){return(0,o.default)({},e,{img:t.data})}),(0,u.default)(n,d,function(e,t){return(0,o.default)({},e,{img:null})}),n)),m={img:null},v=t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments[1],a=c[t.type];return a?a(e,t):e};t.default=v},1043:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t._form=void 0;var n=a(7),s=r(n),u=a(19),l=r(u),o=a(3),i=r(o),d=a(20),f=r(d),p=a(5),c=r(p),m=a(4),v=r(m),g=a(1),_=r(g),h=a(30),E=a(127),y=a(45),S=r(y),T=h.Form.Item,I=E.STATIC_SERVE_PATH+"/commodity/uploadImage",b="commodity/addType",M=t._form=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){this.init()}},{key:"onUploadCover",value:function(e){"done"===e.file.status?(h.message.success(e.file.response.message),e.file.url=e.file.response.data):"error"===e.file.status&&h.message.error(e.file.response.message);var t=e.fileList;t=t.slice(-1),t=t.map(function(e){return e.response&&(e.url=e.response.data),e}),t=t.filter(function(e){return!e.response||e.response.success===!0});var a=this.props.saveImg;a(t)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.props.form,r=a.validateFields,n=a.getFieldsValue,s=a.getFieldValue;r(function(e,a){if(!e){var r=n();r.imgUrl=s("imgUrl").file.url,(0,S.default)(b,function(e){h.message.success(e.message),t.init()},{data:r})}})}},{key:"init",value:function(){var e=this.props.form.resetFields;e();var t=this.props.resetState;t()}},{key:"render",value:function(){var e={labelCol:{span:6},wrapperCol:{span:14}},t={name:"file",action:I,listType:"picture",onChange:this.onUploadCover.bind(this)},a=this.props.form.getFieldDecorator,r=this.props.home.img;return _.default.createElement(h.Form,{onSubmit:this.handleSubmit.bind(this)},_.default.createElement(T,(0,s.default)({label:"类型名"},e),a("name",{rules:[{required:!0,message:"请输入类型名"}]})(_.default.createElement(h.Input,null))),_.default.createElement(T,(0,s.default)({label:"类型图标"},e),a("imgUrl",{rules:[{required:!0,message:"必须上传图标"}]})(_.default.createElement(h.Upload,(0,s.default)({},t,{fileList:r}),_.default.createElement(h.Button,{type:"ghost"},_.default.createElement(h.Icon,{type:"upload"})," 点击上传")))),_.default.createElement(T,{wrapperCol:{span:8,offset:11}},_.default.createElement(h.Button,{type:"primary",htmlType:"submit"},"保存")))}}]),t}(g.Component);t.default=h.Form.create()(M)},1044:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.mapDispatchToProps=t.mapStateToProps=void 0;var n=a(472),s=a(31),u=a(1043),l=r(u),o=t.mapStateToProps=function(e){return{home:e.addType}},i=t.mapDispatchToProps={saveImg:n.saveImg,resetState:n.resetState};t.default=(0,s.connect)(o,i)(l.default)}});
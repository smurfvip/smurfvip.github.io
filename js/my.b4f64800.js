(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my"],{"048b":function(e,t,a){"use strict";var n=a("29fb"),i=a.n(n);i.a},"0861":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("router-link",{attrs:{to:e.path}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("0b8a"),expression:"require('@/assets/income_record.png')"}]}),n("span",[e._v(e._s(e.$t("message.dividendRecord")))])]),n("div",{staticClass:"header"},[n("div",[e._v(e._s(e.amount))]),n("span",[e._v(e._s(e.$t("message.dividendTitle"))+"/ETH")])]),n("div",{staticClass:"content"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("5567"),expression:"require('@/assets/time.png')"}]}),n("span",[e._v(e._s(e.$t("message.dividendTime"))+e._s(e.time))])]),n("Button",{attrs:{disabled:e.disabled,color:"linear-gradient(#814ABC, #4C44D8)"},on:{click:e.draw}},[e._v(e._s(e.$t("message.draw")))])],1)},i=[],s=(a("a9e3"),a("66b9"),a("b650")),r={components:{Button:s["a"]},props:{amount:[Number,String],time:String,disabled:Boolean,path:String},methods:{draw:function(){this.$emit("draw")}}},o=r,c=(a("8c30"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,"0488d010",null);t["a"]=l.exports},"12bd":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},["zh-CN"===e.$i18n.locale?n("pre",[n("span",[e._v("联盟节点说明：")]),e._v("\n1.联盟合伙人限定13名，需要支付200ETH购买；\n2.凡参与联盟节点的玩家，身份将会提升至V2；\n3.联盟节点每周进行一次分红奖励。分红时间以7日后出块速度决定。\n\t  "),n("p",[e._v("当前已有"+e._s(e.player)+"名玩家参与联盟节点")]),e._v("\n\t  "),n("p",[e._v("您当前需支付"),n("span",[e._v(e._s(e.prices)+"ETH")]),e._v("可进行参与")]),e._v("\n\t")]):n("pre",[n("span",[e._v("Alliance partner:")]),e._v("\n①.50 eth for top 20 participants and 100 eth for later 20 participants;\n②.All players participating in the alliance partners will be promoted to V2;\n③.The alliance partners will receive bonus once a week. Dividend time is determined by the rate of block issuance in 7 days.\n\t  "),n("p",[e._v("Currently, there are "+e._s(e.player)+" players participating in the alliance partners")]),e._v("\n\t  "),n("p",[e._v("You need to pay "),n("span",[e._v(e._s(e.prices)+"ETH")]),e._v(" to participate")]),e._v("\n\t")]),n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("i"),n("span",[e._v(e._s(e.$t("message.joinNode")))])]),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{type:"number"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}),n("span",[e._v("ETH")])]),n("div",{staticClass:"amount"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("c877"),expression:"require('@/assets/eth.png')"}]}),n("span",[e._v(e._s(e.balance)+" ETH")])])]),n("Button",{attrs:{disabled:"",color:"linear-gradient(#814ABC, #4C44D8)"},on:{click:e.join}},[e._v(e._s(e.$t("message.join")))])],1)},i=[],s=(a("99af"),a("e7e5"),a("d399")),r=(a("66b9"),a("b650")),o={components:{Button:r["a"]},data:function(){return{player:"0",prices:"0",balance:"0.00",amount:0}},methods:{init:function(){this.$cache.node?(this.balance=this.$cache.node.balance,this.player=this.$cache.node.player,this.prices=this.$cache.node.prices,this.amount=this.prices):this.$cache.node={},this.getData()},getData:function(){var e=this;this.$web3.eth.getBalance(this.$address).then((function(t){e.balance=e.$fromWei(t,2),e.$cache.node.balance=e.balance})),this.$contract.levelSub.methods._paymentedCount().call((function(t,a){t||(e.player=a,e.$cache.node.player=a)})),this.$contract.levelSub.methods._paymentLv2Prices().call((function(t,a){t||(e.prices=e.$fromWei(a),e.amount=e.prices,e.$cache.node.prices=e.prices)}))},join:function(){var e=this;if(this.amount<this.prices)return s["a"].fail("".concat(this.$t("message.minJoin")).concat(this.prices,"ETH"));this.$contract.levelSub.methods.PaymentToUpgradeNoderL2().send({from:this.$address,value:this.$toWei("".concat(this.amount))}).on("transactionHash",(function(e){console.log(e)})).on("error",console.error).on("receipt",(function(t){e.amount=0,e.getData()}))}},mounted:function(){this.init()}},c=o,l=(a("9ca5"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"062b654f",null);t["default"]=u.exports},"1b74":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"record"},[e.list.length?e._e():a("not-record"),a("div",{staticClass:"header"},[e._v(e._s(e.title))]),e.subtitle.length?a("div",{staticClass:"subtitle"},[a("Row",e._l(e.subtitle,(function(t,n){return a("Col",{key:n,attrs:{span:e.span}},[e._v(e._s(t))])})),1)],1):e._e(),a("div",{staticClass:"content"},e._l(e.list,(function(t,n){return a("Row",{key:n,staticClass:"row"},e._l(t,(function(t,n){return a("Col",{key:n,attrs:{span:e.span}},["string"===typeof t&&-1!=t.indexOf("png")?a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"ele"}]}):a("span",[e._v(e._s(t))])])})),1)})),1)],1)},i=[],s=(a("81e6"),a("9ffb")),r=(a("4d48"),a("d1e1")),o=a("995c"),c={components:{NotRecord:o["default"],Row:r["a"],Col:s["a"]},props:{title:String,subtitle:{type:Array,default:function(){return[]}},list:Array,span:String}},l=c,u=(a("581e"),a("2877")),d=Object(u["a"])(l,n,i,!1,null,"3e315baf",null);t["a"]=d.exports},"29fb":function(e,t,a){},"2fcb":function(e,t,a){},"44a5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("self-list",{attrs:{title:e.$t("message.dividendRecord"),list:e.list,span:"12"}})],1)},i=[],s=(a("99af"),a("a9e3"),a("159b"),a("1b74")),r={components:{SelfList:s["a"]},data:function(){return{list:[]}},methods:{init:function(){this.$cache.nodeRecord?this.list=this.$cache.nodeRecord.list:this.$cache.nodeRecord={},this.getData()},getData:function(){var e=this;this.$http.getNode(this.$address).then((function(t){e.list=[],t.forEach((function(t){var a=e.$web3.eth.abi.decodeParameter("uint256",t.topics[2]),n=e.$web3.eth.abi.decodeParameter("uint256",t.topics[3]),i=new Date(1e3*Number(a)),s=i.getFullYear(),r=i.getMonth()+1,o=i.getDate(),c=i.getHours(),l=i.getMinutes();e.list.unshift({amount:"".concat(e.$fromWei(n,2),"ETH"),time:"".concat(s,".").concat(r,".").concat(o," ").concat(c,":").concat(l)})})),e.$cache.nodeRecord.list=e.list}))}},mounted:function(){this.init()}},o=r,c=(a("955e"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,"dc4ef976",null);t["default"]=l.exports},"44af":function(e,t,a){"use strict";var n=a("5367"),i=a.n(n);i.a},"4cce":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("self-manager",{attrs:{amount:e.amount,time:e.time,disabled:e.disabled,path:"/nodeRecord"},on:{draw:e.withdraw}})},i=[],s=(a("99af"),a("a9e3"),a("66b9"),a("b650")),r=a("0861"),o={components:{Button:s["a"],SelfManager:r["a"]},data:function(){return{amount:"0.00",time:"2020/03/23",disabled:!0}},methods:{init:function(){this.$cache.nodeIncome?(this.amount=this.$cache.nodeIncome.amount,this.time=this.$cache.nodeIncome.time,this.disabled=this.$cache.nodeIncome.disabled):this.$cache.nodeIncome={},this.getData()},getData:function(){var e=this;this.$contract.noderAssets.methods._latestBonusTime().call((function(t,a){if(!t){var n=new Date(1e3*Number(a)),i=n.getFullYear(),s=n.getMonth()+1<10?"0".concat(n.getMonth()+1):n.getMonth()+1,r=n.getDate()<10?"0".concat(n.getDate()):n.getDate();e.time="".concat(i,"/").concat(s,"/").concat(r),e.$cache.nodeIncome.time=e.time}})),this.$contract.noderAssets.methods.MyProfix().call({from:this.$address},(function(t,a){t||(e.amount=e.$fromWei(a,2),e.$cache.nodeIncome.amount=e.amount,e.disabled=e.amount<=0,e.$cache.nodeIncome.disabled=e.disabled)}))},withdraw:function(){var e=this;this.$contract.noderAssets.methods.WithdrawProfix().send({from:this.$address}).on("transactionHash",(function(e){console.log(e)})).on("error",console.error).on("receipt",(function(t){e.disabled=!0,e.getData()}))}},mounted:function(){this.init()}},c=o,l=a("2877"),u=Object(l["a"])(c,n,i,!1,null,null,null);t["default"]=u.exports},5367:function(e,t,a){},"555e":function(e,t,a){},"57cb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("self-list",{attrs:{title:e.$t("message.inviteList"),subtitle:[e.$t("message.myBuddy"),e.$t("message.grade"),e.$t("message.totalJoin"),e.$t("message.community")],list:e.list,span:"6"}})],1)},i=[],s=(a("a4d3"),a("4de4"),a("a9e3"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),r=(a("96cf"),a("1da1")),o=a("1b74");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={components:{SelfList:o["a"]},data:function(){return{list:[]}},methods:{init:function(){this.$cache.myLnvitationList?this.list=this.$cache.myLnvitationList.list:this.$cache.myLnvitationList={},this.getData()},getData:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,this.$contract.recommend.methods.RecommendList(this.$address,0).call();case 3:n=e.sent,n.length>0&&n.forEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var s,r,o,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.$contract.recommend.methods.AddressToShortCode(n).call();case 2:return s=e.sent,e.next=5,i.$contract.levelSub.methods.LevelOf(n).call();case 5:return r=e.sent,e.t0=i,e.next=9,i.$contract.round.methods.GetCurrentGameStatus().call({from:n});case 9:return e.t1=e.sent.currentEther,o=e.t0.$fromWei.call(e.t0,e.t1),e.next=13,i.$contract.recommend.methods.TeamMemberTotal(n).call();case 13:c=e.sent,s=0===Number(s)?i.$t("message.notCode"):i.$web3.utils.hexToString(s),u={partner:s,state:a("8cec")("./v".concat(r,".png")),totalJoin:o,member:c},t.push(l({},u));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.list=t,this.$cache.myLnvitationList.list=t;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.init()}},d=u,m=(a("fc04"),a("2877")),h=Object(m["a"])(d,n,i,!1,null,"05f5f3ce",null);t["default"]=h.exports},"581e":function(e,t,a){"use strict";var n=a("ff9b"),i=a.n(n);i.a},"64b4":function(e,t,a){"use strict";var n=a("74d1"),i=a.n(n);i.a},"74d1":function(e,t,a){},"8c30":function(e,t,a){"use strict";var n=a("921b"),i=a.n(n);i.a},"8cec":function(e,t,a){var n={"./v0.png":"80fc","./v1.png":"37f9","./v2.png":"81fb","./v3.png":"6905","./v4.png":"9b7c"};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id="8cec"},"921b":function(e,t,a){},"955e":function(e,t,a){"use strict";var n=a("a0c3"),i=a.n(n);i.a},"95a2":function(e,t,a){"use strict";var n=a("95e7"),i=a.n(n);i.a},"95e7":function(e,t,a){},9656:function(e,t,a){},"9ca5":function(e,t,a){"use strict";var n=a("d227"),i=a.n(n);i.a},a0c3:function(e,t,a){},b434:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("self-list",{attrs:{title:e.$t("message.dividendRecord"),list:e.list,span:"12"}})],1)},i=[],s=(a("99af"),a("a9e3"),a("159b"),a("1b74")),r={components:{SelfList:s["a"]},data:function(){return{list:[]}},methods:{init:function(){this.$cache.managerRecord?this.list=this.$cache.managerRecord.list:this.$cache.managerRecord={},this.getData()},getData:function(){var e=this;this.$http.getManager(this.$address).then((function(t){e.list=[],t.forEach((function(t){var a=e.$web3.eth.abi.decodeParameter("uint256",t.topics[2]),n=e.$web3.eth.abi.decodeParameter("uint256",t.topics[3]),i=new Date(1e3*Number(a)),s=i.getFullYear(),r=i.getMonth()+1,o=i.getDate(),c=i.getHours(),l=i.getMinutes();e.list.unshift({amount:"".concat(e.$fromWei(n,2),"ETH"),time:"".concat(s,".").concat(r,".").concat(o," ").concat(c,":").concat(l)})})),e.$cache.managerRecord.list=e.list}))}},mounted:function(){this.init()}},o=r,c=(a("64b4"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,"15d7113f",null);t["default"]=l.exports},b60a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("62dd"),expression:"require('@/assets/grade_v1.png')"}]}),n("p",[e._v(e._s(e.$t("message.gradeTitle")))]),n("pre",[e._v(e._s(e.$t("message.gradeContent"))+"\n\t")]),n("Button",{attrs:{color:"linear-gradient(#814ABC, #4C44D8)"}},[e._v(e._s(e.$t("message.define")))])],1)},i=[],s=(a("66b9"),a("b650")),r={components:{Button:s["a"]}},o=r,c=(a("e460"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,"50b30d6a",null);t["default"]=l.exports},b64b:function(e,t,a){var n=a("23e7"),i=a("7b0bd"),s=a("df75"),r=a("d039"),o=r((function(){s(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(e){return s(i(e))}})},b6f6:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("self-ball",{attrs:{amount:e.current,title:e.$t("message.currentCanDraw")+"/SFC"}}),a("self-grid",{attrs:{grid:e.grid}}),a("Button",{attrs:{disabled:e.disabled,color:"linear-gradient(#814ABC, #4C44D8)"},on:{click:e.withdraw}},[e._v(e._s(e.$t("message.draw")))])],1)},i=[],s=(a("a9e3"),a("e7e5"),a("d399")),r=(a("96cf"),a("1da1")),o=(a("66b9"),a("b650")),c=a("ab74"),l=a("0309"),u={components:{SelfBall:c["a"],SelfGrid:l["a"],Button:o["a"]},data:function(){return{grid:[{img:a("c04d"),title:this.$t("message.totalRemedy"),amount:"0 SFC"},{img:a("c9dc"),class:"await",title:this.$t("message.awaitFreed"),amount:"0 SFC"},{img:a("2454"),class:"everyday",title:this.$t("message.everydayFreed"),amount:"0 SFC"},{img:a("b934"),class:"record",title:this.$t("message.drawRecord"),text:this.$t("message.details"),path:"/compensateRecord"}],current:"0.00",disabled:!1}},methods:{init:function(){this.$cache.compensate?(this.current=this.$cache.compensate.current,this.grid[0].amount=this.$cache.compensate.total,this.grid[1].amount=this.$cache.compensate.wait,this.grid[2].amount=this.$cache.compensate.everyday):this.$cache.compensate={},this.getData()},getData:function(){var e=this;this.$contract.redress.methods._withdrawProp().call((function(t,a){if(!t){var n=Number(a/100);e.$contract.redress.methods.RedressInfo().call({from:e.$address},(function(t,a){t||(e.current="".concat(e.$fromWei(a.cur,2)),e.grid[0].amount="".concat(e.$fromWei(a.total)," SFC"),e.grid[1].amount="".concat(e.$fromWei(a.total)-e.$fromWei(a.withdrawed)," SFC"),e.grid[2].amount="".concat(e.$fromWei(a.total)*n," SFC"),e.$cache.compensate.current=e.current,e.$cache.compensate.total=e.grid[0].amount,e.$cache.compensate.wait=e.grid[1].amount,e.$cache.compensate.everyday=e.grid[2].amount,e.disabled=!(e.$fromWei(a.cur)>0))}))}}))},withdraw:function(){var e=this,t=this.$contract.redress.methods.WithdrawRedress();t.call({from:this.$address},function(){var a=Object(r["a"])(regeneratorRuntime.mark((function a(n,i){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n){a.next=11;break}if(!(e.$fromWei(i)>0)){a.next=8;break}return a.next=4,t.send({from:e.$address});case 4:s["a"].success("领取成功！"),e.getData(),a.next=9;break;case 8:s["a"].fail("您没有补偿！");case 9:a.next=12;break;case 11:s["a"].fail("领取失败！");case 12:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}())}},mounted:function(){this.init()}},d=u,m=(a("44af"),a("2877")),h=Object(m["a"])(d,n,i,!1,null,"6bc6f38f",null);t["default"]=h.exports},c7d6:function(e,t,a){"use strict";a.r(t);var n,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"van-tabbar-page"},[n("div",{staticClass:"content van-content"},[n("span",[e._v(e._s(e.$t("message.inviteCode")))]),n("div",{staticClass:"grade"},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("8cec")("./v"+e.grade+".png"),expression:"require(`@/assets/v${grade}.png`)"}]})]),n("span",[e._v(e._s(e.invitationCode))]),e.isBind?n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("78a3"),expression:"require('@/assets/copy.png')"},{name:"clipboard",rawName:"v-clipboard:copy",value:e.invitationCode,expression:"invitationCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}]}):n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("78a3"),expression:"require('@/assets/copy.png')"}],on:{click:e.goBind}})]),e.isBind?n("div",{staticClass:"list"},[n("div",[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("61be"),expression:"require('@/assets/link.png')"}]}),n("span",[e._v(e._s(e.$t("message.inviteLink")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("78a3"),expression:"require('@/assets/copy.png')"},{name:"clipboard",rawName:"v-clipboard:copy",value:e.invitationLink,expression:"invitationLink",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}]})]),n("router-link",{attrs:{to:"/invitationList"}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("6e2c"),expression:"require('@/assets/list.png')"}]}),n("span",[e._v(e._s(e.$t("message.inviteList")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("2952"),expression:"require('@/assets/next.png')"}]})]),n("div",{staticClass:"eye"},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("8266"),expression:"require('@/assets/myInvite.png')"}]}),n("span",[e._v(e._s(e.$t("message.myInvite")))])]),e.showInviter?n("span",[e._v(e._s(e.myInviter))]):n("span",[e._v("******")]),e.showInviter?n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("7145"),expression:"require('@/assets/eye_show.png')"}],on:{click:function(t){e.showInviter=!e.showInviter}}}):n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("9864"),expression:"require('@/assets/eye.png')"}],on:{click:function(t){e.showInviter=!e.showInviter}}})]),n("router-link",{attrs:{to:"/compensate"}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("a217"),expression:"require('@/assets/drawSFC.png')"}]}),n("span",[e._v(e._s(e.$t("message.drawSFC")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("2952"),expression:"require('@/assets/next.png')"}]})]),n("router-link",{attrs:{to:e.path}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("1465"),expression:"require('@/assets/node.png')"}]}),n("span",[e._v(e._s(e.$t("message.allianceNode")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("2952"),expression:"require('@/assets/next.png')"}]})]),n("router-link",{attrs:{to:"/manager"}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("08c3"),expression:"require('@/assets/manager.png')"}]}),n("span",[e._v(e._s(e.$t("message.manager")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("2952"),expression:"require('@/assets/next.png')"}]})]),n("router-link",{staticClass:"lianshang",attrs:{to:"/my"},nativeOn:{click:function(t){e.lianshang=!0}}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("a266"),expression:"require('@/assets/lianshang.png')"}]}),n("span",[e._v(e._s(e.$t("message.lianshang")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("2952"),expression:"require('@/assets/next.png')"}]})])],1):n("div",{staticClass:"list"},[n("div",[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("61be"),expression:"require('@/assets/link.png')"}]}),n("span",[e._v(e._s(e.$t("message.inviteLink")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("78a3"),expression:"require('@/assets/copy.png')"}],on:{click:e.goBind}})]),n("div",{on:{click:e.goBind}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("6e2c"),expression:"require('@/assets/list.png')"}]}),n("span",[e._v(e._s(e.$t("message.inviteList")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("2952"),expression:"require('@/assets/next.png')"}]})]),n("div",{staticClass:"eye"},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("8266"),expression:"require('@/assets/myInvite.png')"}]}),n("span",[e._v(e._s(e.$t("message.myInvite")))])]),n("span",[e._v("*******")]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("9864"),expression:"require('@/assets/eye.png')"}],on:{click:e.goBind}})]),n("div",{on:{click:e.goBind}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("a217"),expression:"require('@/assets/drawSFC.png')"}]}),n("span",[e._v(e._s(e.$t("message.drawSFC")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("2952"),expression:"require('@/assets/next.png')"}]})]),n("div",{on:{click:e.goBind}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("1465"),expression:"require('@/assets/node.png')"}]}),n("span",[e._v(e._s(e.$t("message.allianceNode")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("2952"),expression:"require('@/assets/next.png')"}]})]),n("div",{on:{click:e.goBind}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("08c3"),expression:"require('@/assets/manager.png')"}]}),n("span",[e._v(e._s(e.$t("message.manager")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("2952"),expression:"require('@/assets/next.png')"}]})]),n("div",{staticClass:"lianshang",on:{click:e.goBind}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("a266"),expression:"require('@/assets/lianshang.png')"}]}),n("span",[e._v(e._s(e.$t("message.lianshang")))])]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("2952"),expression:"require('@/assets/next.png')"}]})])])]),n("self-tabbar",{attrs:{active:"my"}}),n("overlay",{staticClass:"overlay",attrs:{show:e.lianshang},on:{click:function(t){e.lianshang=!1}}},[n("div",{on:{click:function(e){e.stopPropagation()}}},[n("div",["zh-CN"===e.$i18n.locale?n("span",[e._v("通告")]):n("span",[e._v("Notice")]),n("icon",{attrs:{name:"cross"},on:{click:function(t){e.lianshang=!1}}})],1),n("pre",[e._v(e._s(e.$t("message.lianshangtext"))+"\n\t\t\t")])])])],1)},s=[],r=(a("99af"),a("a9e3"),a("159b"),a("e7e5"),a("d399")),o=(a("68ef"),a("a71a"),a("9d70"),a("09fe"),a("3743"),a("4d75"),a("e3b3"),a("bc1b"),a("2fcb"),a("c31d")),c=a("2b0e"),l=a("d282"),u=a("ea8e"),d=a("b1d2"),m=a("6605"),h=a("b650"),v=Object(l["a"])("dialog"),f=v[0],p=v[1],g=v[2],b=f({mixins:[m["a"]],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(e){var t=this;this.$emit(e),this.value&&(this.beforeClose?(this.loading[e]=!0,this.beforeClose(e,(function(a){!1!==a&&t.loading[e]&&t.onClose(e),t.loading.confirm=!1,t.loading.cancel=!1}))):this.onClose(e))},onClose:function(e){this.close(),this.callback&&this.callback(e)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")}},render:function(){var e,t,a=this,n=arguments[0];if(this.shouldRender){var i=this.message,s=this.messageAlign,r=this.slots(),o=this.slots("title")||this.title,c=o&&n("div",{class:p("header",{isolated:!i&&!r})},[o]),l=(r||i)&&n("div",{class:p("content")},[r||n("div",{domProps:{innerHTML:i},class:p("message",(e={"has-title":o},e[s]=s,e))})]),m=this.showCancelButton&&this.showConfirmButton,v=n("div",{class:[d["d"],p("footer",{buttons:m})]},[this.showCancelButton&&n(h["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||g("cancel")},class:p("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){a.handleAction("cancel")}}}),this.showConfirmButton&&n(h["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||g("confirm")},class:[p("confirm"),(t={},t[d["b"]]=m,t)],style:{color:this.confirmButtonColor},on:{click:function(){a.handleAction("confirm")}}})]);return n("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[n("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||i},class:[p(),this.className],style:{width:Object(u["a"])(this.width)}},[c,l,v])])}}}),y=a("a142");function $(e){return document.body.contains(e)}function w(){n&&n.$destroy(),n=new(c["a"].extend(b))({el:document.createElement("div"),propsData:{lazyRender:!1}}),n.$on("input",(function(e){n.value=e}))}function _(e){return y["d"]?Promise.resolve():new Promise((function(t,a){n&&$(n.$el)||w(),Object(o["a"])(n,_.currentOptions,e,{resolve:t,reject:a})}))}_.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(e){n["confirm"===e?"resolve":"reject"](e)}},_.alert=_,_.confirm=function(e){return _(Object(o["a"])({showCancelButton:!0},e))},_.close=function(){n&&(n.value=!1)},_.setDefaultOptions=function(e){Object(o["a"])(_.currentOptions,e)},_.resetDefaultOptions=function(){_.currentOptions=Object(o["a"])({},_.defaultOptions)},_.resetDefaultOptions(),_.install=function(){c["a"].use(b)},_.Component=b,c["a"].prototype.$dialog=_;var C=_,x=(a("c3a6"),a("ad06")),z=(a("f1dc"),a("6e47")),N=a("67de"),O=a("502f"),k={name:"my",components:{selfTabbar:N["a"],Overlay:z["a"],Icon:x["a"]},data:function(){return{grade:0,invitationCode:"******",invitationLink:"",myInviter:"******",showInviter:!1,path:"/node",isBind:"true"===localStorage.getItem("isBind"),lianshang:!1}},methods:{init:function(){this.$cache.my?(this.path=this.$cache.my.path,this.grade=this.$cache.my.grade,this.$cache.my.invitationCode&&(this.invitationCode=this.$cache.my.invitationCode,this.invitationLink=this.$cache.my.invitationLink,this.myInviter=this.$cache.my.myInviter)):this.$cache.my={},this.getData()},getData:function(){var e=this;this.$contract.levelSub.methods.LevelOf(this.$address).call((function(t,a){t||(e.grade=Number(a),e.$cache.my.grade=e.grade,e.$contract.levelSub.methods.CanUpgradeLv(e.$address).call((function(t,a){!t&&Number(a)>0&&e.grade<4&&(e.show=!0,e.updateGrade=a)})))})),this.$contract.recommend.methods.GetIntroducer(this.$address).call((function(t,a){!t&&Number(a)>0&&e.$contract.recommend.methods.AddressToShortCode(a).call((function(t,n){t||(Number(n)>0?e.myInviter=e.$web3.utils.hexToString(n):e.myInviter=a,e.$cache.my.myInviter=e.myInviter)}))})),this.$contract.recommend.methods.AddressToShortCode(this.$address).call((function(t,a){if(!t){var n=e.$web3.utils.hexToString(a);if(""===n)return;e.invitationCode=n,e.invitationLink="".concat(location.href,"?invitationCode=").concat(n),e.$cache.my.invitationCode=n,e.$cache.my.invitationLink=e.invitationLink}})),this.$contract.levelSub.methods.Noders().call((function(t,a){if(!t){var n=!1;a.forEach((function(t){t.toUpperCase()===e.$address.toUpperCase()&&(n=!0)})),e.path=n?"/nodeIncome":"/node",e.$cache.my.path=e.path}}))},goBind:function(){var e=this;return C.alert({message:"请先绑定邀请码!"}).then((function(){e.$router.push({path:"/?bind=1"})})),!1},onCopySuccess:function(){r["a"].success(this.$t("message.copySuccess"))},onCopyError:function(){r["a"].fail(this.$t("message.copyFail"))}},mounted:function(){O["d"]?this.init():this.isBind=!1}},S=k,B=(a("95a2"),a("2877")),D=Object(B["a"])(S,i,s,!1,null,"f2b88086",null);t["default"]=D.exports},d227:function(e,t,a){},d6e3:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("self-list",{attrs:{title:e.$t("message.drawRecord"),subtitle:[e.$t("message.type"),e.$t("message.number"),e.$t("message.time")],list:e.list,span:"8"}})],1)},i=[],s=(a("99af"),a("a9e3"),a("159b"),a("1b74")),r={components:{SelfList:s["a"]},data:function(){return{list:[]}},methods:{init:function(){this.$cache.compensateRecord?this.list=this.$cache.compensateRecord.list:this.$cache.compensateRecord={},this.getData()},getData:function(){var e=this;this.$http.getDrawRedress(this.$address).then((function(t){e.list=[],t.forEach((function(t){var a=e.$web3.eth.abi.decodeParameter("uint256",t.topics[2]),n=new Date(1e3*Number(t.timeStamp)),i=n.getFullYear(),s=n.getMonth()+1,r=n.getDate();e.list.unshift({type:"补偿",amount:"".concat(e.$fromWei(a)," SFC"),time:"".concat(i,".").concat(s,".").concat(r)})})),e.$cache.compensateRecord.list=e.list}))}},mounted:function(){this.init()}},o=r,c=(a("048b"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,"60fc6626",null);t["default"]=l.exports},dbb4:function(e,t,a){var n=a("23e7"),i=a("83ab"),s=a("56ef"),r=a("fc6a"),o=a("06cf"),c=a("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,a,n=r(e),i=o.f,l=s(n),u={},d=0;while(l.length>d)a=i(n,t=l[d++]),void 0!==a&&c(u,t,a);return u}})},e439:function(e,t,a){var n=a("23e7"),i=a("d039"),s=a("fc6a"),r=a("06cf").f,o=a("83ab"),c=i((function(){r(1)})),l=!o||c;n({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(e,t){return r(s(e),t)}})},e460:function(e,t,a){"use strict";var n=a("9656"),i=a.n(n);i.a},ee23:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("self-manager",{attrs:{amount:e.amount,time:e.time,disabled:e.disabled,path:"/managerRecord"},on:{draw:e.withdraw}})},i=[],s=(a("99af"),a("a9e3"),a("66b9"),a("b650")),r=a("0861"),o={components:{Button:s["a"],SelfManager:r["a"]},data:function(){return{amount:"0.00",time:"2020/03/23",disabled:!0}},methods:{init:function(){this.$cache.manager?(this.amount=this.$cache.manager.amount,this.time=this.$cache.manager.time,this.disabled=this.$cache.manager.disabled):this.$cache.manager={},this.getData()},getData:function(){var e=this;this.$contract.managerAssets.methods._latestBonusTime().call((function(t,a){if(!t){var n=new Date(1e3*Number(a)),i=n.getFullYear(),s=n.getMonth()+1<10?"0".concat(n.getMonth()+1):n.getMonth()+1,r=n.getDate()<10?"0".concat(n.getDate()):n.getDate();e.time="".concat(i,"/").concat(s,"/").concat(r),e.$cache.manager.time=e.time}})),this.$contract.managerAssets.methods.MyProfix().call({from:this.$address},(function(t,a){t||(e.amount=e.$fromWei(a,2),e.$cache.manager.amount=e.amount,e.disabled=e.amount<=0,e.$cache.manager.disabled=e.disabled)}))},withdraw:function(){var e=this;this.$contract.managerAssets.methods.WithdrawProfix().send({from:this.$address}).on("transactionHash",(function(e){console.log(e)})).on("error",console.error).on("receipt",(function(t){e.disabled=!0,e.getData()}))}},mounted:function(){this.init()}},c=o,l=a("2877"),u=Object(l["a"])(c,n,i,!1,null,null,null);t["default"]=u.exports},fc04:function(e,t,a){"use strict";var n=a("555e"),i=a.n(n);i.a},ff9b:function(e,t,a){}}]);
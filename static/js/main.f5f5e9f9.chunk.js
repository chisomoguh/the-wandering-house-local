(this["webpackJsonpthe-wandering-house"]=this["webpackJsonpthe-wandering-house"]||[]).push([[0],[,,,,,,,,,,,,,function(e,i,t){},function(e,i,t){},,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var s=t(2),n=t.n(s),a=t(4),c=t.n(a),d=(t(13),t(5)),r=t(6),o=t(1),l=t(8),h=t(7),m=(t(14),t(0)),u=function(e){var i=e.height,t=e.image_url,s=e.onClick;e.id;return Object(m.jsx)("div",{className:"rectangle-container",children:Object(m.jsx)("img",{className:"rectangle-picture",alt:"rectangle",src:"https://drive.google.com/uc?export=view&id=".concat(t),style:{width:"".concat(i,"%")},onClick:s})})},j=(t(16),function(e){var i=e.title;return Object(m.jsx)("div",{className:"card",children:Object(m.jsx)("h2",{children:i})})}),p=(t(17),function(e){var i=e.image_url,t=e.audio_url,s=e.age,n=e.statement,a=e.translation,c=e.embroiderer,d=e.main_text,r=e.main_font,o=e.onClick;return Object(m.jsxs)("div",{className:"pop-up-div",onClick:o,children:[Object(m.jsx)("div",{className:"pop-up-container-left",children:Object(m.jsxs)("div",{className:"pop-up-flex-box",children:[Object(m.jsx)("div",{className:"pop-up-flex-column",children:Object(m.jsx)("img",{alt:"rectangle",src:"https://drive.google.com/uc?export=view&id=".concat(i),style:{height:"100%"},className:"pop-up-img"})}),Object(m.jsxs)("p",{style:{fontWeight:"bold"},children:["Embroiderer: ",c]}),Object(m.jsx)("audio",{controls:"controls",style:{width:"90%"},src:"https://docs.google.com/uc?export=download&id=".concat(t)}),Object(m.jsx)("p",{children:Object(m.jsx)("i",{children:"At the time of the recording in 2019 the speaker was ".concat(s," years old")})})]})}),Object(m.jsxs)("div",{className:"pop-up-container-right",children:[Object(m.jsx)("div",{className:"main-text",style:{fontFamily:"".concat(r)},children:Object(m.jsx)("h2",{children:d})}),Object(m.jsx)("div",{className:"translation",style:{fontFamily:"".concat(r)},children:Object(m.jsx)("h4",{children:"".concat(a)})}),void 0===n?null:Object(m.jsx)("p",{className:"pop-up-by-embroiderer-text",children:"Statement by ".concat(c,":")}),Object(m.jsx)("p",{className:"pop-up-statement-text",children:n})]})]})}),g=(t(18),function(e){var i=e.onClick1,t=e.onClick2,s=e.height;return Object(m.jsx)("div",{className:"home-page-div",style:{height:"".concat(s,"%")},children:Object(m.jsxs)("div",{className:"home-page-container",children:[Object(m.jsxs)("div",{className:"main-page-ult-text",children:[Object(m.jsx)("div",{className:"main-page-title",children:"Welcome to the Wandering House"}),Object(m.jsxs)("div",{className:"main-page-text",children:[Object(m.jsx)("p",{children:"Comprised of 49 embroidered sentences, the Northfield Community Quilt is one of several works coming out of The Wandering House, a multi-platform project by Chilean-American filmmaker and artist, Cecilia Cornejo Sotelo. Featuring an ice-fishing house retrofitted as a mobile audio recording studio, The Wandering House examines notions of home from the perspective of rural and semi-rural towns in southern Minnesota."}),Object(m.jsx)("p",{children:"Click on any piece of this interactive version  of the Northfield Community Quilt and you will be able to listen to the sentence recorded anonymously in 2019 and read a short statement by the person who, a year later, embroidered it. The Lanesboro Community Quilt is currently in the works and will be exhibited at Lanesboro Arts in early 2022. Its interactive counterpart is also upcoming, so stay tuned!"}),Object(m.jsx)("div",{className:"read-more-text",children:Object(m.jsx)("p",{children:"In the summer and fall of 2019, Cecilia invited community members in Northfield and Lanesboro, Minnesota, to enter The Wandering House to record their thoughts on home in a physical space created solely for this purpose. Ranging in age from two to ninety-one years old, project participants included farmers, youths in high school and college, people with disabilities, immigrants from Central and South America, families with young children, and older adults living in retirement communities."})}),Object(m.jsx)("button",{className:"read-more-btn",onClick:t,children:"Read More..."})]})]}),Object(m.jsxs)("div",{className:"main-page-pics",children:[Object(m.jsx)("img",{alt:"Bridge Square Picture",src:"https://drive.google.com/uc?export=view&id=1nFn7O2-Xbl0-_ghUj8-sIv4l_Xr6xNOy",style:{width:"100%"}}),Object(m.jsx)("img",{alt:"Sergio Picture",src:"https://drive.google.com/uc?export=view&id=11VMzINfOPNogh_oSb7YA0bZ8wLr1wP4L",style:{width:"100%"}})]}),Object(m.jsx)("div",{className:"button-div",children:Object(m.jsx)("button",{className:"main-page-button",onClick:i,children:"Explore Quilt"})})]})})}),b=(t(19),function(e){Object(l.a)(t,e);var i=Object(h.a)(t);function t(e){var s;return Object(d.a)(this,t),(s=i.call(this,e)).state={width:0,height:0,showPopUp:!1,popUpInfo:{},pictures:[],showMainPage:!0},s.updateWindowDimensions=s.updateWindowDimensions.bind(Object(o.a)(s)),s.getPictures=s.getPictures.bind(Object(o.a)(s)),s.activePopUp=s.activePopUp.bind(Object(o.a)(s)),s.hidePopUp=s.hidePopUp.bind(Object(o.a)(s)),s.handleClickChildElement=s.handleClickChildElement.bind(Object(o.a)(s)),s.cleanImageUrl=s.cleanImageUrl.bind(Object(o.a)(s)),s.hideMainPage=s.hideMainPage.bind(Object(o.a)(s)),s.showReadMore=s.showReadMore.bind(Object(o.a)(s)),s.mainPagePictures=s.mainPagePictures.bind(Object(o.a)(s)),s}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),this.getPictures(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"chooseRandomFont",value:function(){var e=["Kranky","Caveat","Shadows into Light Two","Architects Daughter","Fuzzy Bubbles","Lobster Two","Indie Flower","Patrick Hand","Cormorant Upright"];return e[Math.floor(Math.random()*e.length)]}},{key:"getPictures",value:function(){var e=this,i=[];fetch("https://api.airtable.com/v0/appjPLcxTlXQZZfMa/tblZ9LuBa045zY0lw?fields%5B%5D=ID&fields%5B%5D=Image+Link+Low+Quality&sort%5B0%5D%5Bfield%5D=ID&sort%5B0%5D%5Bdirection%5D=asc",{method:"GET",headers:{Authorization:"Bearer keyFiXILZhl7sQLsn"}}).then((function(e){return e.json()})).then((function(e){return e.records.map((function(e){return i.push({id:e.fields.ID,image_url:e.fields["Image Link Low Quality"]})})),i})).then((function(i){return e.setState({pictures:i})}))}},{key:"getPopUpInfo",value:function(e){var i=this;console.log("this is get pop up info");var t=0;fetch("https://api.airtable.com/v0/appjPLcxTlXQZZfMa/tblZ9LuBa045zY0lw?fields%5B%5D=Translation&fields%5B%5D=ID&fields%5B%5D=Embroiderer&fields%5B%5D=Main+Text&fields%5B%5D=Translation&fields%5B%5D=Statement&fields%5B%5D=Age&fields%5B%5D=Image+Link+Low+Quality&fields%5B%5D=Audio+Link&filterByFormula=ID%3D".concat(e),{method:"GET",headers:{Authorization:"Bearer keyFiXILZhl7sQLsn"}}).then((function(e){return e.json()})).then((function(e){return t={translation:e.records[0].fields.Translation,image_url:e.records[0].fields["Image Link Low Quality"],main_text:e.records[0].fields["Main Text"],statement:e.records[0].fields.Statement,age:e.records[0].fields.Age,embroiderer:e.records[0].fields.Embroiderer,audio_url:e.records[0].fields["Audio Link"],main_font:i.chooseRandomFont()},console.log("Pop up attributes: ".concat(e)),t})).then((function(e){return i.setState({popUpInfo:e})}))}},{key:"cleanImageUrl",value:function(e){return e.split("/")[5]}},{key:"activePopUp",value:function(e){this.setState({showPopUp:!0}),this.getPopUpInfo(e),console.log("active pop up")}},{key:"hidePopUp",value:function(){this.setState({showPopUp:!1}),this.setState({popUpInfo:{}})}},{key:"hideMainPage",value:function(){this.setState({showMainPage:!1})}},{key:"showReadMore",value:function(e){var i=e.target;i.parentElement.getElementsByClassName("read-more-text")[0].classList.toggle("read-more-text--show"),i.textContent=i.textContent.includes("Read More...")?"Read Less...":"Read More..."}},{key:"mainPagePictures",value:function(){new Image}},{key:"handleClickChildElement",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this,i=this.state.popUpInfo,t=i.image_url,s=i.audio_url,n=i.age,a=i.statement,c=i.translation,d=i.embroiderer,r=i.main_text,o=i.main_font,l=[{},{id:1,height:70},{id:2,height:90},{id:3,height:90},{id:4,height:90},{id:5,height:90},{id:6,height:90},{id:7,height:90},{id:8,height:90},{id:9,height:70},{id:10,height:6},{id:11,height:6},{id:12,height:6},{id:13,height:6},{id:14,height:6},{id:15,height:6},{id:16,height:6},{id:17,height:6},{id:18,height:6},{id:19,height:6},{id:20,height:6},{id:21,height:90},{id:22,height:6},{id:23,height:6},{id:24,height:6},{id:25,height:5},{id:26,height:6},{id:27,height:6},{id:28,height:6},{id:29,height:6},{id:30,height:90},{id:31,height:90},{id:32,height:90},{id:33,height:90},{id:34,height:90},{id:35,height:90},{id:36,height:85},{id:37,height:85},{id:38,height:85},{id:39,height:85},{id:40,height:85},{id:41,height:75},{id:42,height:90},{id:43,height:90},{id:44,height:88},{id:45,height:97},{id:46,height:75},{id:47,height:97},{id:48,height:88},{id:49,height:75},{id:50,height:90}];return this.state.width>700?Object(m.jsxs)("div",{className:"home-div",children:[!0===this.state.showMainPage?Object(m.jsx)(g,{onClick1:this.hideMainPage,onClick2:this.showReadMore,height:this.height}):null,Object(m.jsxs)("div",{className:"main-container",children:[Object(m.jsx)("div",{className:"blue-line"}),Object(m.jsxs)("div",{className:"main-title-div",children:[Object(m.jsx)("img",{alt:"Wandering House Logo",src:"../public/favicon-96x96.png",style:{height:"50%"}}),Object(m.jsx)("h1",{className:"main-title",children:"I know I'm home when..."}),Object(m.jsx)("img",{alt:"Wandering House Logo",src:"..public/collabe.jpg",style:{height:"50%"}})]}),Object(m.jsx)("div",{className:"top-container",children:this.state.pictures.filter((function(e){return e.id<=9})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)}))}),Object(m.jsxs)("div",{className:"main-container-grid",children:[Object(m.jsx)("div",{className:"left-container",children:this.state.pictures.filter((function(e){return e.id>=10&&e.id<=19})).map((function(i){return Object(m.jsx)(u,{height:"90",onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)}))}),Object(m.jsx)("div",{className:"vertical-blue-line"}),Object(m.jsxs)("div",{className:"middle-container",children:[Object(m.jsx)("div",{className:"first-row-middle-container",children:this.state.pictures.filter((function(e){return e.id>=30&&e.id<=35})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)}))}),Object(m.jsxs)("div",{className:"second-row-middle-container",children:[this.state.pictures.filter((function(e){return 36===e.id})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)})),Object(m.jsx)("div",{className:"windows-div",children:Object(m.jsxs)("div",{className:"windows",children:[Object(m.jsxs)("div",{className:"windows-top-panes",children:[Object(m.jsx)("div",{className:"windows-top-panes-rectangles-left"}),Object(m.jsx)("div",{className:"windows-top-panes-rectangles-right"})]}),Object(m.jsxs)("div",{className:"windows-bottom-panes",children:[Object(m.jsx)("div",{className:"windows-bottom-panes-rectangles-left"}),Object(m.jsx)("div",{className:"windows-bottom-panes-rectangles-right"})]})]})}),this.state.pictures.filter((function(e){return 37===e.id})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)})),Object(m.jsx)("div",{className:"windows-div",children:Object(m.jsxs)("div",{className:"windows",children:[Object(m.jsxs)("div",{className:"windows-top-panes",children:[Object(m.jsx)("div",{className:"windows-top-panes-rectangles-left"}),Object(m.jsx)("div",{className:"windows-top-panes-rectangles-right"})]}),Object(m.jsxs)("div",{className:"windows-bottom-panes",children:[Object(m.jsx)("div",{className:"windows-bottom-panes-rectangles-left"}),Object(m.jsx)("div",{className:"windows-bottom-panes-rectangles-right"})]})]})}),this.state.pictures.filter((function(e){return 38===e.id})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)}))]}),Object(m.jsxs)("div",{className:"third-row-middle-container",children:[Object(m.jsxs)("div",{className:"first-sub-row-middle-container",children:[Object(m.jsx)("div",{className:"first-sub-row-flex",children:this.state.pictures.filter((function(e){return 39===e.id||40===e.id})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)}))}),Object(m.jsx)("div",{className:"second-sub-row-flex",children:this.state.pictures.filter((function(e){return 44===e.id||45===e.id})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)}))}),Object(m.jsx)("div",{className:"just-a-placeholder"}),Object(m.jsxs)("div",{className:"rectangle-for-diamond",children:[Object(m.jsx)("div",{className:"line"}),Object(m.jsxs)("div",{className:"diamonds-div",children:[Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"})]})]})]}),Object(m.jsxs)("div",{className:"second-sub-row-middle-container",children:[this.state.pictures.filter((function(e){return 41===e.id})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)})),Object(m.jsx)("div",{}),this.state.pictures.filter((function(e){return 46===e.id})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)})),Object(m.jsx)("div",{}),this.state.pictures.filter((function(e){return 49===e.id})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)}))]}),Object(m.jsxs)("div",{className:"third-sub-row-middle-container",children:[Object(m.jsx)("div",{className:"first-sub-row-flex",children:this.state.pictures.filter((function(e){return 42===e.id||43===e.id})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)}))}),Object(m.jsx)("div",{className:"second-sub-row-flex",children:this.state.pictures.filter((function(e){return 47===e.id||48===e.id})).map((function(i){return Object(m.jsx)(u,{height:l[i.id].height,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)}))}),Object(m.jsx)("div",{className:"just-a-placeholder"}),Object(m.jsxs)("div",{className:"rectangle-for-diamond",children:[Object(m.jsx)("div",{className:"line"}),Object(m.jsxs)("div",{className:"diamonds-div",children:[Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"})]})]})]})]})]}),Object(m.jsx)("div",{className:"vertical-blue-line"}),Object(m.jsx)("div",{className:"right-container",children:this.state.pictures.filter((function(e){return e.id>=20&&e.id<=29})).map((function(i){return Object(m.jsx)(u,{height:"90",onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id},i.id)}))})]}),Object(m.jsxs)("div",{className:"bottom-container",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(j,{title:"THE WANDERING HOUSE"}),Object(m.jsx)("div",{className:"blue-line-bottom"})]}),Object(m.jsxs)("div",{className:"stairs-container",children:[Object(m.jsx)("div",{className:"stair-step",style:{height:"14px",width:"30%"}}),Object(m.jsx)("div",{className:"stair-step",style:{height:"17px",width:"40%"}}),Object(m.jsx)("div",{className:"stair-step",style:{height:"20px",width:"55%"}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(j,{title:"NORTHFIELD 2019-2020"}),Object(m.jsx)("div",{className:"blue-line-bottom"})]})]})]}),!0===this.state.showPopUp?Object(m.jsx)("div",{className:"pop-up-container",onClick:this.hidePopUp,children:Object(m.jsx)(p,{onClick:this.handleClickChildElement,image_url:t,audio_url:s,translation:c,statement:a,age:n,main_text:r,embroiderer:d,main_font:o})}):null]}):Object(m.jsx)("div",{className:"main-container-phone",children:Object(m.jsxs)("div",{className:"main-sub-container-phone",children:[Object(m.jsx)("div",{className:"main-title-div",children:Object(m.jsx)("h1",{className:"main-title",children:"I know I'm home when..."})}),Object(m.jsx)("div",{className:"blue-line"}),Object(m.jsx)("div",{className:"first-container-grid-phone",children:this.state.pictures.filter((function(e){return 1===e.id||9===e.id})).map((function(i){return Object(m.jsx)(u,{height:90,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id,phone:!0},i.id)}))}),Object(m.jsx)("div",{className:"first-container-grid-phone",children:this.state.pictures.filter((function(e){return e.id>=2&&e.id<=14&&9!==e.id})).map((function(i){return Object(m.jsx)(u,{height:90,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id,phone:!0},i.id)}))}),Object(m.jsxs)("div",{className:"rectangle-for-diamond-phone",children:[Object(m.jsx)("div",{className:"line"}),Object(m.jsxs)("div",{className:"diamonds-div",children:[Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"})]})]}),Object(m.jsx)("div",{className:"first-container-grid-phone",children:this.state.pictures.filter((function(e){return e.id>=15&&e.id<=24})).map((function(i){return Object(m.jsx)(u,{height:90,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id,phone:!0},i.id)}))}),Object(m.jsxs)("div",{className:"pictures-with-windows-phone",children:[Object(m.jsx)("div",{className:"windows-div",children:Object(m.jsxs)("div",{className:"windows",children:[Object(m.jsxs)("div",{className:"windows-top-panes",children:[Object(m.jsx)("div",{className:"windows-top-panes-rectangles-left"}),Object(m.jsx)("div",{className:"windows-top-panes-rectangles-right"})]}),Object(m.jsxs)("div",{className:"windows-bottom-panes",children:[Object(m.jsx)("div",{className:"windows-bottom-panes-rectangles-left"}),Object(m.jsx)("div",{className:"windows-bottom-panes-rectangles-right"})]})]})}),this.state.pictures.filter((function(e){return 37===e.id})).map((function(i){return Object(m.jsx)(u,{height:90,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id,phone:!0},i.id)})),Object(m.jsx)("div",{className:"windows-div",children:Object(m.jsxs)("div",{className:"windows",children:[Object(m.jsxs)("div",{className:"windows-top-panes",children:[Object(m.jsx)("div",{className:"windows-top-panes-rectangles-left"}),Object(m.jsx)("div",{className:"windows-top-panes-rectangles-right"})]}),Object(m.jsxs)("div",{className:"windows-bottom-panes",children:[Object(m.jsx)("div",{className:"windows-bottom-panes-rectangles-left"}),Object(m.jsx)("div",{className:"windows-bottom-panes-rectangles-right"})]})]})})]}),Object(m.jsx)("div",{className:"first-container-grid-phone",children:this.state.pictures.filter((function(e){return e.id>=26&&e.id<=46&&37!==e.id&&41!==e.id&&44!==e.id})).map((function(i){return Object(m.jsx)(u,{height:90,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id,phone:!0},i.id)}))}),Object(m.jsxs)("div",{className:"rectangle-for-diamond-phone",children:[Object(m.jsx)("div",{className:"line"}),Object(m.jsxs)("div",{className:"diamonds-div",children:[Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"}),Object(m.jsx)("div",{className:"diamonds"})]})]}),Object(m.jsx)("div",{className:"first-container-grid-phone",children:this.state.pictures.filter((function(e){return 25===e.id||28===e.id})).map((function(i){return Object(m.jsx)(u,{height:80,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id,phone:!0},i.id)}))}),Object(m.jsx)("div",{className:"first-container-grid-phone",children:this.state.pictures.filter((function(e){return 47===e.id||29===e.id})).map((function(i){return Object(m.jsx)(u,{height:90,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id,phone:!0},i.id)}))}),Object(m.jsx)("div",{className:"first-container-grid-phone",children:this.state.pictures.filter((function(e){return 44===e.id||48===e.id})).map((function(i){return Object(m.jsx)(u,{height:70,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id,phone:!0},i.id)}))}),Object(m.jsx)("div",{className:"first-container-grid-phone",children:this.state.pictures.filter((function(e){return 41===e.id||49===e.id})).map((function(i){return Object(m.jsx)(u,{height:90,onClick:function(){return e.activePopUp(i.id)},image_url:i.image_url,id:i.id,phone:!0},i.id)}))}),!0===this.state.showPopUp?Object(m.jsx)("div",{className:"pop-up-container",onClick:this.hidePopUp,children:Object(m.jsx)(p,{onClick:this.handleClickChildElement,image_url:t,audio_url:s,translation:c,statement:a,age:n,main_text:r,embroiderer:d,main_font:o})}):null,Object(m.jsxs)("div",{children:[Object(m.jsx)(j,{title:"THE WANDERING HOUSE"}),Object(m.jsx)(j,{title:"NORTHFIELD 2019-2020"}),Object(m.jsx)("div",{className:"blue-line-bottom"})]})]})})}}]),t}(s.Component)),v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(i){var t=i.getCLS,s=i.getFID,n=i.getFCP,a=i.getLCP,c=i.getTTFB;t(e),s(e),n(e),a(e),c(e)}))};c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.f5f5e9f9.chunk.js.map
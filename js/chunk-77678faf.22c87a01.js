(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77678faf"],{"0202":function(e,t,a){"use strict";a("7827")},"06c5":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("fb6a"),a("d3b7"),a("b0c0"),a("a630"),a("3ca3"),a("ac1f"),a("00b4");var n=a("6b75");function r(e,t){if(e){if("string"===typeof e)return Object(n["a"])(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n["a"])(e,t):void 0}}},"1ea6":function(e,t,a){"use strict";a("b88f")},"2d78":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"wb-frmvld",attrs:{id:"surveyContainer"}},[a("survey",{attrs:{survey:e.survey}})],1)])},r=[],o=a("b85c"),i=a("d4ec"),s=a("bee2"),u=a("262e"),c=a("2caf"),l=a("9ab4"),d=a("60a3"),v=a("339e"),f=a.n(v),y=function(e){Object(u["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(s["a"])(a,[{key:"mounted",value:function(){var e=new f.a.Converter;this.survey.onTextMarkdown.add((function(t,a){var n=e.makeHtml(a.text);n=n.substring(3),n=n.substring(0,n.length-4),a.html=n}));var t,a=Object(o["a"])(document.getElementsByClassName("sv_q_rating_min_text"));try{for(a.s();!(t=a.n()).done;){var n=t.value,r=n.closest("fieldset"),i=document.createElement("LABEL");i.className="rating-min-label",i.appendChild(n),null===r||void 0===r||r.prepend(i)}}catch(v){a.e(v)}finally{a.f()}var s,u=Object(o["a"])(document.getElementsByClassName("sv_q_rating_max_text"));try{for(u.s();!(s=u.n()).done;){var c=s.value,l=c.closest("fieldset"),d=document.createElement("LABEL");d.className="rating-max-label",d.appendChild(c),null===l||void 0===l||l.append(d)}}catch(v){u.e(v)}finally{u.f()}}}]),a}(d["c"]);Object(l["a"])([Object(d["b"])()],y.prototype,"survey",void 0),y=Object(l["a"])([d["a"]],y);var m=y,h=m,p=a("2877"),b=Object(p["a"])(h,n,r,!1,null,null,null);t["a"]=b.exports},3601:function(e,t,a){},3739:function(e,t,a){"use strict";a("3601")},"4df4":function(e,t,a){"use strict";var n=a("0366"),r=a("7b0b"),o=a("9bdd"),i=a("e95a"),s=a("50c4"),u=a("8418"),c=a("35a1");e.exports=function(e){var t,a,l,d,v,f,y=r(e),m="function"==typeof this?this:Array,h=arguments.length,p=h>1?arguments[1]:void 0,b=void 0!==p,g=c(y),S=0;if(b&&(p=n(p,h>2?arguments[2]:void 0,2)),void 0==g||m==Array&&i(g))for(t=s(y.length),a=new m(t);t>S;S++)f=b?p(y[S],S):y[S],u(a,S,f);else for(d=g.call(y),v=d.next,a=new m;!(l=v.call(d)).done;S++)f=b?o(d,p,[l.value,S],!0):l.value,u(a,S,f);return a.length=S,a}},"57e1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",[a("SurveySectionsContainer",{attrs:{sections:e.sections,survey:e.Survey,"section-recommendation":e.sectionRecommendation}})],1),a("div",{staticClass:"btn-div"},[a("download-survey",{on:{confirmToDownload:e.downloadSurvey}}),a("upload-survey",{on:{surveyDataLoaded:e.onSurveyDataLoaded}})],1)])},r=[],o=a("d4ec"),i=a("bee2"),s=a("262e"),u=a("2caf"),c=(a("e9c4"),a("9ab4")),l=a("2d78"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-button",{staticClass:"btn btn-primary ml-auto",staticStyle:{"min-width":"500px !important"},attrs:{type:"button"},on:{click:function(t){return e.showFileNameModal()}}},[e._v(" "+e._s(e.$t("downloadUploadSurvey.downloadSurvey"))+" ")]),a("b-modal",{attrs:{id:"file-name-modal",size:"l"},on:{shown:e.focusFileNameInput},scopedSlots:e._u([{key:"modal-header",fn:function(){return[a("div",[e._v(e._s(e.$t("downloadUploadSurvey.downloadTitle")))])]},proxy:!0},{key:"default",fn:function(){return[a("b-form",{ref:"form",staticStyle:{margin:"10px"},on:{submit:e.onSubmit}},[a("div",{staticClass:"file-label"},[a("label",[e._v(e._s(e.$t("downloadUploadSurvey.fileName")))]),a("div",{staticClass:"text-right text-danger"},[e._v("* Required")])]),a("b-form-input",{ref:"fileNameInput",staticClass:"form-control",class:{"is-invalid":e.hasError},attrs:{id:"fileNameInput",placeholder:e.$t("downloadUploadSurvey.inputFileName")},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}}),e.hasError?a("div",{staticClass:"text-danger mt-3"},[e._v(" "+e._s(e.$t(e.errorMessage))+" ")]):e._e(),a("input",{ref:"submitButton",staticStyle:{display:"none"},attrs:{type:"submit"}})],1)]},proxy:!0},{key:"modal-footer",fn:function(){return[a("b-button",{staticClass:"btn btn-primary",staticStyle:{width:"120px"},on:{click:function(t){return e.onOkClicked()}}},[e._v(" "+e._s(e.$t("downloadUploadSurvey.OK"))+" ")]),a("b-button",{staticClass:"btn btn-default",staticStyle:{width:"120px","margin-right":"10px !important"},on:{click:function(t){return e.onCancelClicked()}}},[e._v(" "+e._s(e.$t("downloadUploadSurvey.cancel"))+" ")])]},proxy:!0}])})],1)},v=[],f=a("2b0e"),y=a("2fe1"),m=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.fileName="",e.hasError=!1,e.errorMessage="",e}return Object(i["a"])(a,[{key:"showFileNameModal",value:function(){this.fileName="",this.hasError=!1,this.errorMessage="",this.$bvModal.show("file-name-modal")}},{key:"focusFileNameInput",value:function(){this.$refs.fileNameInput.focus()}},{key:"onOkClicked",value:function(){this.$refs.submitButton.click()}},{key:"onSubmit",value:function(e){if(e.preventDefault(),0==this.fileName.length)return this.hasError=!0,void(this.errorMessage="validation.fileName.required");this.$emit("confirmToDownload",this.fileName),this.$bvModal.hide("file-name-modal")}},{key:"onCancelClicked",value:function(){this.$bvModal.hide("file-name-modal")}}]),a}(f["default"]);m=Object(c["a"])([Object(y["b"])({})],m);var h=m,p=h,b=(a("3739"),a("2877")),g=Object(b["a"])(p,d,v,!1,null,"4dbf97d2",null),S=g.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h5",[e._v(e._s(e.$t("currentSurveyResults")))]),e._l(e.sections,(function(t){return a("SurveySectionCard",{key:t.id,attrs:{section:t,survey:e.survey,icon:e.getIcon(t.name,e.sectionRecommendation)}})}))],2)},O=[],w=(a("7db0"),a("d3b7"),a("b0c0"),a("60a3")),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"survey-card-container",style:e.cardStyles},[a("div",{staticClass:"survey-card",attrs:{"img-top":"",tabindex:"0"},on:{click:function(t){return e.goToSection(e.section.name)},mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.goToSection(e.section.name)}}},[a("div",{staticClass:"icon-container"},[a("i",{class:e.setIconClass(e.icon)})]),a("div",{staticStyle:{flex:"auto"}},[a("div",{staticClass:"survey-title"},[e._v(" "+e._s(e.section.title)+" ")]),a("transition",{attrs:{name:"collapsed",mode:"out-in"}},[e.collapsed?e._e():a("div",{staticClass:"mt-3"},[a("p",{staticStyle:{"font-size":"16px"}},[e._v(" "+e._s(e.getShortDescription(e.section.description))+" ")]),a("span",{staticStyle:{color:"#395072"}},[e._v(" "+e._s(e.$t("currentScore"))+": "+e._s(e.sectionScoreLevel(e.section.name))+"% ")])])])],1)]),a("div",{staticClass:"show-hide-container"},[a("show-hide-link",{attrs:{hide:!0},on:{onToggled:function(t){return e.toggleCollapsed()}}})],1)])},k=[],D=a("fc60"),_=a("fc33"),x=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.collapsed=!0,e}return Object(i["a"])(a,[{key:"toggleCollapsed",value:function(){this.collapsed=!this.collapsed}},{key:"goToSection",value:function(e){this.survey.currentPage=e,this.$store.dispatch(D["a"].UpdateSurveyData,this.survey),this.$store.dispatch(D["a"].UpdateCurrentPageName,e),this.$router.push("/questions")}},{key:"setIconClass",value:function(e){var t="fas fa-"+e+" fa-2x";return t}},{key:"getShortDescription",value:function(e){var t=280;return e.length<=t?e:e.substr(0,e.lastIndexOf(" ",t))+"... "}},{key:"sectionScoreLevel",value:function(e){var t=this.$store.getters.returnSectionByName(e);if(void 0===t)return"0";var a=new Intl.NumberFormat("en-CA",{style:"decimal",maximumFractionDigits:0}).format(t.userScore/t.maxScore*100);return"NaN"===a?"0":a}},{key:"setStatusIcon",value:function(e){var t=this.$store.getters.returnSectionByName(e);return void 0===t||0===t.userScore?"far fa-circle":(t.userScore,"fas fa-circle")}}]),a}(w["c"]);Object(c["a"])([Object(w["b"])()],x.prototype,"section",void 0),Object(c["a"])([Object(w["b"])()],x.prototype,"survey",void 0),Object(c["a"])([Object(w["b"])()],x.prototype,"icon",void 0),x=Object(c["a"])([Object(w["a"])({components:{ShowHideLink:_["a"]},data:function(){return{cardStyleHover:{"box-shadow":"0 0 0 2px black",cursor:"pointer"},cardStyle:{"box-shadow":"0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"},hover:!1}},computed:{cardStyles:function(){return 1==this.$data.hover?this.$data.cardStyleHover:this.$data.cardStyle}}})],x);var C=x,$=C,E=(a("1ea6"),Object(b["a"])($,j,k,!1,null,"f7204aea",null)),P=E.exports,M=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(i["a"])(a,[{key:"getIcon",value:function(e,t){var a=t.find((function(t){return t.name===e}));return void 0!==a?a.icon:"smile"}}]),a}(w["c"]);Object(c["a"])([Object(w["b"])()],M.prototype,"sections",void 0),Object(c["a"])([Object(w["b"])()],M.prototype,"survey",void 0),Object(c["a"])([Object(w["b"])()],M.prototype,"sectionRecommendation",void 0),M=Object(c["a"])([Object(w["a"])({components:{SurveySectionCard:P}})],M);var F=M,U=F,A=Object(b["a"])(U,N,O,!1,null,null,null),L=A.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-button",{staticClass:"btn btn-primary",staticStyle:{"min-width":"500px !important"},attrs:{type:"button"},on:{click:function(t){return e.showUploadSurveyDialog()}}},[e._v(" "+e._s(e.$t("downloadUploadSurvey.uploadSurvey"))+" ")]),a("b-modal",{attrs:{id:"load-loacal-survey-modal",size:"xl"},scopedSlots:e._u([{key:"modal-header",fn:function(){return[a("div",{domProps:{innerHTML:e._s(e.$t("downloadUploadSurvey.title"))}})]},proxy:!0},{key:"default",fn:function(){return[a("div",{staticClass:"form-group",class:{"was-validated":e.hasError}},[a("textarea",{staticClass:"form-control",class:{"is-invalid":e.hasError},attrs:{readonly:"",id:"surveyDataInput",rows:"5",required:"",placeholder:e.$t("downloadUploadSurvey.surveyData")},domProps:{value:e.surveyDataForDisplay}}),e.hasError?a("div",{staticClass:"text-danger mt-3"},[e._v(" "+e._s(e.$t(e.errorMessage,{fileName:e.surveyData.fileName}))+" ")]):e._e()])]},proxy:!0},{key:"modal-footer",fn:function(){return[a("input",{ref:"fileUpload",staticClass:"btn btn-default mr-auto",staticStyle:{padding:"0"},attrs:{type:"file",title:e.$t("loadFile"),value:"Load"},on:{change:function(t){return e.onFileChanged(t)}}}),a("b-form-checkbox",{staticClass:"m-auto",attrs:{switch:"",size:"lg"},on:{change:e.onToggleFormat},model:{value:e.format,callback:function(t){e.format=t},expression:"format"}},[e._v(" "+e._s(e.$t("downloadUploadSurvey.format"))+" ")]),a("b-button",{staticClass:"btn btn-primary",staticStyle:{width:"120px"},on:{click:e.uploadSurveyData}},[e._v(" "+e._s(e.$t("downloadUploadSurvey.OK"))+" ")]),a("b-button",{staticClass:"btn btn-default",staticStyle:{width:"120px"},on:{click:function(t){return e.cancel()}}},[e._v(" "+e._s(e.$t("downloadUploadSurvey.cancel"))+" ")])]},proxy:!0}])})],1)},I=[],J=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.surveyData={},e.surveyDataForDisplay="",e.hasError=!1,e.format=!1,e.errorMessage="",e}return Object(i["a"])(a,[{key:"showUploadSurveyDialog",value:function(){this.$bvModal.show("load-loacal-survey-modal")}},{key:"uploadSurveyData",value:function(){if(!this.surveyData||!this.surveyData.name)return this.hasError=!0,void(this.errorMessage="validation.file.required");this.$emit("surveyDataLoaded",this.surveyData),this.$bvModal.hide("load-loacal-survey-modal")}},{key:"cancel",value:function(){this.$bvModal.hide("load-loacal-survey-modal")}},{key:"onFileChanged",value:function(e){if(null!==e&&null!==e.target&&null!==e.dataTransfer){var t=e.target,a=t.files||e.dataTransfer.files;0!==a.length&&this.loadSurveyFromFile(a[0])}}},{key:"onToggleFormat",value:function(){this.surveyData&&this.surveyData.name&&(this.surveyDataForDisplay=this.format?JSON.stringify(this.surveyData,null,4):JSON.stringify(this.surveyData))}},{key:"loadSurveyFromFile",value:function(e){var t=this,a=new FileReader;a.onload=function(n){var r=a.result;if("undefined"===r)return t.hasError=!0,t.errorMessage="validation.file.format",t.$refs.fileUpload.value="",t.surveyData={fileName:e.name,hasError:!0,errorMessage:"validation.file.format"},void(t.surveyDataForDisplay="");try{t.surveyData=JSON.parse(r),t.surveyData.fileName=e.name,t.surveyDataForDisplay=t.format?JSON.stringify(t.surveyData,null,4):JSON.stringify(t.surveyData),t.errorMessage="",t.hasError=!1}catch(n){t.$refs.fileUpload.value="",t.surveyData={fileName:e.name,hasError:!0,errorMessage:"validation.file.format"},t.surveyDataForDisplay="",t.hasError=!0,t.errorMessage="validation.file.format"}},a.readAsText(e)}}]),a}(f["default"]);J=Object(c["a"])([y["b"]],J);var q=J,B=q,R=Object(b["a"])(B,T,I,!1,null,null,null),z=R.exports,W=a("fe0b"),H=(a("159b"),a("caad"),a("2532"),a("dca8"),a("c740"),a("2f62")),Q=a("bfa9"),K=a("23db"),V=a.n(K),G=a("7570");f["default"].use(H["a"]);var X=new Q["a"]({storage:window.localStorage,reducer:function(e){return{toolData:e.toolData,currentPageNo:e.currentPageNo,currentPageName:e.currentPageName,displayWelcomeNotice:e.displayWelcomeNotice}}}),Y=function(e,t){var a,n=t.pages;a=[],n.forEach((function(e){e.name.includes("section_")&&a.push(e.name)})),e.sectionsNames=a},Z=function(e,t){e.sectionsNames.forEach((function(a){var n={sectionName:a,enabled:!1,completed:!1,questionsNames:[],userScore:0,maxScore:7*(t.getPageByName(a).questions.length-1),questions:[]};t.getPageByName(a).questions.forEach((function(e){n.questionsNames.push(e.name),n.questions.push(e)})),e.sections.push(n)}))},ee=function(e,t){e.surveyModel=t,e.currentPageNo=t.currentPageNo,e.recommendations=G,V()(e.sectionsNames)&&Y(e,t),V()(e.sections)&&Z(e,t),ne(e,t),e.toolData=Object.freeze(t.data),e.displayWelcomeNotice=Object.freeze(e.displayWelcomeNotice),e.answerData=t.getPlainData({includeEmpty:!1})};function te(e,t){var a=[];return e.pages.forEach((function(e){e.name.includes(t)&&a.push(e)})),a}var ae=function(e,t){var a=0,n=e.getPageByName(t);return n.questions.forEach((function(e){if(void 0!==e.value){var t=+e.value;a+=t}})),a},ne=function(e,t){e.sections.forEach((function(e){e.userScore=ae(t,e.sectionName),0!=e.userScore&&0==e.enabled&&(e.enabled=!0)}))},re=function(e,t){t>=0&&t<e.sections.length&&(e.currentPageNo=t)},oe=function(e,t){t.length>0&&(e.currentPageName=t)},ie={plugins:[X.plugin],state:{sections:[],sectionsNames:[],answerData:[],surveyModel:void 0,toolData:void 0,currentPageNo:0,currentPageName:void 0,recommendations:void 0,toolVersion:G.settings.version,displayWelcomeNotice:!0,sectionsPrefix:"",error:!1,loading:!1,initialized:!1},mutations:{updateSurveyData:function(e,t){ee(e,t)},calculateResult:function(e,t){ee(e,t)},moveInSection:function(e,t){},updateCurrentPageNo:function(e,t){re(e,t)},updateCurrentPageName:function(e,t){oe(e,t)},updateDisplayNotice:function(e,t){e.displayWelcomeNotice=t},initializeSections:function(e,t){Z(e,t)}},getters:{inProgress:function(e){return!V()(e.toolData)},returnSectionsNamesGenerated:function(e){var t=[];return void 0===e.surveyModel?{}:(e.surveyModel.pages.forEach((function(e){e.name.includes("section_")&&t.push(e.name)})),0===t.length?void 0:t)},returnSectionByName:function(e){return function(t){return e.sections.find((function(e){return e.sectionName===t}))}},returnCurrentSection:function(e){return e.sections.find((function(t){return t.sectionName===e.currentPageName}))},resultsDataSections:function(e){var t=[];return void 0===e.toolData?{}:(t=e.toolData,t)},returnAllQuestions:function(e){return e.sectionsNames},returnSections:function(e){return e.sections},returnSurveyModel:function(e){return void 0==e.surveyModel?void 0:e.surveyModel},returnCurrentPageNumber:function(e){return e.currentPageNo},returnDisplayWelcome:function(e){return e.displayWelcomeNotice}}},se=(new H["a"].Store(ie),a("6737")),ue=a("339e"),ce=a.n(ue),le=a("1b6e"),de=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.Survey=new le["Model"]({}),e.sections=te(e.Survey,"section_"),e.sectionRecommendation=G.sectionRecommendations,e}return Object(i["a"])(a,[{key:"fileLoaded",value:function(e){this.Survey.data=e.data,this.Survey.currentPageNo=e.currentPage,this.Survey.start(),this.$store.dispatch(D["a"].UpdateSurveyData,this.Survey),this.Survey.render()}},{key:"loadQeustions",value:function(e,t){this.Survey.clear(!0,!0);for(var a=this.Survey.PageCount,n=0;n<a;n++)this.Survey.removePage(this.Survey.pages[0]);this.Survey.fromJSON(e),this.Survey.data=t,this.sections=te(this.Survey,"section_"),this.$store.dispatch(D["a"].UseSurveyJSON,{surveyJSON:e,surveyModel:this.Survey})}},{key:"changeLanguage",value:function(e,t){this.Survey.locale=e,this.Survey.render()}},{key:"created",value:function(){var e=this,t=this.$store.getters.returnSurveyJSON;t||(t=se),this.loadQeustions(t,this.$store.getters.returnToolData),this.Survey.css={navigationButton:"btn survey-button"},this.Survey.onComplete.add((function(t){e.$store.dispatch(D["a"].UpdateSurveyData,t),e.$router.push("/results")}));var a=new ce.a.Converter;this.Survey.onTextMarkdown.add((function(e,t){var n=a.makeHtml(t.text);n=n.substring(3),n=n.substring(0,n.length-4),t.html=n})),this.Survey.locale=W["a"].locale,this.$store.getters.inProgress&&this.fileLoaded({currentPage:this.$store.state.currentPageNo,data:this.$store.state.toolData})}},{key:"buildSurveyFile",value:function(){return JSON.stringify({name:"surveyResults",version:this.$store.state.toolVersion,currentPage:this.$store.state.currentPageNo,data:this.$store.state.toolData,surveyJSON:this.$store.state.surveyJSON})}},{key:"downloadSurvey",value:function(e){var t="data:text/json;charset=utf-8,"+this.buildSurveyFile(),a=document.createElement("a");a.setAttribute("href",t),a.setAttribute("download",e+".json"),document.body.appendChild(a),a.click(),a.remove()}},{key:"onSurveyDataLoaded",value:function(e){this.loadQeustions(e.surveyJSON,e.data),this.fileLoaded(e)}}]),a}(w["c"]);Object(c["a"])([Object(w["d"])("$i18n.locale")],de.prototype,"changeLanguage",null),de=Object(c["a"])([Object(w["a"])({components:{AssessmentTool:l["a"],SurveySectionsContainer:L,UploadSurvey:z,DownloadSurvey:S}})],de);var ve=de,fe=ve,ye=(a("0202"),Object(b["a"])(fe,n,r,!1,null,"0df12414",null));t["default"]=ye.exports},"6b75":function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},7827:function(e,t,a){},"9bdd":function(e,t,a){var n=a("825a"),r=a("2a62");e.exports=function(e,t,a,o){try{return o?t(n(a)[0],a[1]):t(a)}catch(i){throw r(e),i}}},a630:function(e,t,a){var n=a("23e7"),r=a("4df4"),o=a("1c7e"),i=!o((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:i},{from:r})},b85c:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");var n=a("06c5");function r(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(n["a"])(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return s=e.done,e},e:function(e){u=!0,i=e},f:function(){try{s||null==a["return"]||a["return"]()}finally{if(u)throw i}}}}},b88f:function(e,t,a){}}]);
//# sourceMappingURL=chunk-77678faf.22c87a01.js.map
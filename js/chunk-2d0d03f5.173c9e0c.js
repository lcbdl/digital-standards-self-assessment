(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d03f5"],{"66ba":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"results"},[a("AssessmentTool",{attrs:{survey:t.Survey}}),a("div",{staticClass:"page-actions"},[a("div",{staticClass:"row",staticStyle:{padding:"0 5px"}},[a("div",{staticClass:"col-3 col-sm-2 col-md-3"},[a("button",{staticClass:"btn btn-default",staticStyle:{width:"inherit"},attrs:{type:"button"},on:{click:function(e){return t.goToHomePage()}}},[t._v(" ⇠ "+t._s(t.$t("navigation.goBack"))+" ")])]),a("div",{staticClass:"col-3 col-sm-2 col-md-3"},[a("button",{staticClass:"btn btn-primary",staticStyle:{width:"inherit"},attrs:{type:"button"},on:{click:function(e){return t.goToSectionResults()}}},[t._v(" "+t._s(t.$t("navigation.viewSectionResults"))+" ")])])])])],1)},n=[],r=a("d4ec"),i=a("bee2"),c=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("60a3"),v=a("1b6e"),p=a("2d78"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"alert alert-info"},[a("details",[a("summary",[t._v(t._s(t.$t("notice.localSaveWarningSummary")))]),a("p",{staticClass:"small"},[t._v(t._s(t.$t("notice.localSaveWarningParagraph")))]),a("p",{staticClass:"small"},[a("strong",[t._v(t._s(t.$t("notice.exception")))]),t._v(": "+t._s(t.$t("notice.localSaveWarningParagraph2"))+" ")])])])])},d=[],b=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(l["c"]);Object(u["a"])([Object(l["b"])()],b.prototype,"survey",void 0),b=Object(u["a"])([l["a"]],b);var y=b,g=y,S=a("2877"),f=Object(S["a"])(g,h,d,!1,null,null,null),m=f.exports,O=a("fc60"),$=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.Survey=new v["Model"](t.$store.getters.returnSurveyJSON),t}return Object(i["a"])(a,[{key:"goToHomePage",value:function(){this.$store.dispatch(O["a"].UpdateSurveyData,this.Survey),this.$router.push("/")}},{key:"goToSectionResults",value:function(){this.$store.dispatch(O["a"].UpdateSurveyData,this.Survey),this.$router.push("/sections")}},{key:"changeLanguage",value:function(t,e){this.Survey.locale=t,this.Survey.render()}},{key:"created",value:function(){var t=this;this.Survey.onComplete.add((function(e){t.$store.dispatch(O["a"].UpdateSurveyData,e),t.$router.push("/results")})),this.Survey.currentPageNo=this.$store.getters.returnCurrentPageNumber,this.Survey.data=this.$store.getters.resultsDataSections,this.Survey.locale=this.$i18n.locale}}]),a}(l["c"]);Object(u["a"])([Object(l["b"])()],$.prototype,"currentPageNo",void 0),Object(u["a"])([Object(l["d"])("$i18n.locale")],$.prototype,"changeLanguage",null),$=Object(u["a"])([Object(l["a"])({components:{AssessmentTool:p["a"],BaseNavigation:m}})],$);var j=$,_=j,C=Object(S["a"])(_,s,n,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d0d03f5.173c9e0c.js.map
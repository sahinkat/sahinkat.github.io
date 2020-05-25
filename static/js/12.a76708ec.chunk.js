(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{273:function(e,t,a){"use strict";var n=a(157),s=a(270);t.a={getCases:function(e,t,a){var r=e.allDataObject,l=r[t];void 0===l.cases||0===l.cases.length?(l.cases=[],n.get("https://corona.lmao.ninja/v2/historical/"+l.CountryName+"?lastdays=365").then(function(n){var o=n.data,i=o.timeline.cases,c=o.timeline.deaths,m=0,u=0;for(var d in i)i.hasOwnProperty(d)&&(l.cases.push({Date:s(d,"MM/DD/YYYY").format("YYYY-MM-DD"),Key:t,Confirmed:i[d]>=m?i[d]:m,Deaths:c[d]|u,NewCases:i[d]>=m?i[d]-m:0,NewDeaths:c[d]-u|0}),m=i[d],u=c[d]);r[t]=l,e.allDataObject=r,a(e)}).catch(function(e){console.log(e)})):a(e)}}},429:function(e,t,a){"use strict";a.r(t);var n=a(43),s=a(44),r=a(46),l=a(45),o=a(47),i=a(1),c=a.n(i),m=a(275),u=a(269),d=a(276),h=a(279),p=a(280),C=a(91),v=a(273),E=a(158),b=a(270),g=["primary","warning","success","danger","info"],f=[Object(h.getStyle)("--primary"),Object(h.getStyle)("--warning"),Object(h.getStyle)("--success"),Object(h.getStyle)("--danger"),Object(h.getStyle)("--info")],y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).loading=function(){return c.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.state={mainChartOpts:{tooltips:{enabled:!1,custom:d.CustomTooltips,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,t){return{backgroundColor:t.data.datasets[e.datasetIndex].borderColor}}}},maintainAspectRatio:!1,legend:{display:!0},scales:{xAxes:[{gridLines:{drawOnChartArea:!0}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:40}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}},inputs:{selectedCountry:"",selectedCountries:[],selectedTypeTotalNewChange:"NewDeaths"},mainChart:{labels:[],datasets:[]},radioSelected:0},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"onCountryChange",value:function(e,t){var a=this;if(""!==(t=t.target.value)){var n=this.state.inputs;n.selectedCountries.push(t),this.setState({inputs:n})}v.a.getCases(e,t,function(e){a.drawCovidGraph(e)})}},{key:"onTypeTotalNewChange",value:function(e,t){if(""!==t.target.value){var a=this.state.inputs;a.selectedTypeTotalNewChange=t.target.value,this.setState({inputs:a})}this.drawCovidGraph(e)}},{key:"onDismiss",value:function(e,t){if(""!==e){var a=this.state.inputs;E.remove(a.selectedCountries,function(t){return t===e}),this.setState({inputs:a})}this.drawCovidGraph(t)}},{key:"onRadioBtnClick",value:function(e,t){this.setState({radioSelected:e},this.drawCovidGraph(t))}},{key:"drawCovidGraph",value:function(e){var t=this,a=e.allDataObject,n=this.state.inputs.selectedCountries,s=this.state.inputs.selectedTypeTotalNewChange,r=this.state.mainChart,l=[];r.labels=[],r.datasets=[];var o="9999-99-99";n.forEach(function(e){var t=a[e];l.push(t),void 0!==t.cases&&t.cases.length>0&&o>t.cases[0].Date&&(o=t.cases[0].Date)});for(var i=new Date(o),c=new Date;i<c;)r.labels.push(b(i).format("DD/MM/YYYY")),i.setDate(i.getDate()+1);var m=0,u=0,d=0,h=0,C=0,v=0;l.forEach(function(e){var a=[],n=0,l={};r.labels.forEach(function(t){var r=E.find(e.cases,["Date",b(t,"DD/MM/YYYY").format("YYYY-MM-DD")]);void 0!==r?(a.push(0|r[s]),n=0|r[s],C+=0|(l=r).NewCases,v+=0|l.NewDeaths):a.push(n)}),d+=0|l.Confirmed,h+=0|l.Deaths,1===t.state.radioSelected?a=Object(p.b)(a,3):2===t.state.radioSelected?a=Object(p.a)(a,3):3===t.state.radioSelected&&(a=Object(p.c)(a,3)),r.datasets.push({label:e.CountryName,backgroundColor:"transparent",borderColor:f[m],pointHoverBackgroundColor:"#fff",borderWidth:2,data:a}),m++;var o=E.max(a);u<o&&(u=o)});var g=this.state.mainChartOpts;g.scales.yAxes.ticks={beginAtZero:!0,maxTicksLimit:50,stepSize:Math.ceil(1.1*u/50),max:Math.ceil(1.1*u)},this.setState({mainChart:r,mainChartOpts:g,totalCasesFooter:d,totalDeathsFooter:h,totalNewCasesFooter:C,totalNewDeathsFooter:v})}},{key:"render",value:function(){var e=this;return c.a.createElement(C.a,null,function(t){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(u.v,null,c.a.createElement(u.m,null,c.a.createElement(u.h,null,c.a.createElement(u.k,null,c.a.createElement(u.p,{row:!0},c.a.createElement(u.m,{md:"4"},c.a.createElement(u.r,{htmlFor:"countries"},c.a.createElement("mark",{className:"text-primary"},c.a.createElement("strong",null,c.a.createElement("small",null,"*Countries")))),c.a.createElement(u.q,{type:"select",name:"countries",id:"countries",bsSize:"sm",value:e.state.inputs.selectedCountry,onChange:e.onCountryChange.bind(e,t)},c.a.createElement("option",{value:""},"Please add a country"),t.countries.map(function(e,t){return c.a.createElement("option",{key:t,value:e.Key},e.CountryName)}))),c.a.createElement(u.m,{md:"4"},c.a.createElement(u.r,{htmlFor:"typeTotalNew"},c.a.createElement("mark",{className:"text-primary"},c.a.createElement("strong",null,c.a.createElement("small",null,"*Type")))),c.a.createElement(u.q,{type:"select",name:"typeTotalNew",id:"typeTotalNew",bsSize:"sm",value:e.state.inputs.selectedTypeTotalNewChange,onChange:e.onTypeTotalNewChange.bind(e,t)},c.a.createElement("option",{value:"NewDeaths"},"New Deaths"),c.a.createElement("option",{value:"Deaths"},"Deaths")))),c.a.createElement(u.v,null,e.state.inputs.selectedCountries.map(function(a,n){return c.a.createElement(u.a,{className:"mb-0 mr-1 pr-5",key:a+n,color:n<5?g[n]:g[4],isOpen:!0,toggle:e.onDismiss.bind(e,a,t)},c.a.createElement("div",null,t.allDataObject[a].CountryName))}))),c.a.createElement(u.i,null,c.a.createElement(u.v,null,c.a.createElement(u.m,{sm:"5"},c.a.createElement(u.l,{className:"mb-0"},"Covid-19 Statistics")),c.a.createElement(u.m,{sm:"7",className:"d-none d-sm-inline-block"},c.a.createElement(u.g,{className:"float-right","aria-label":"Toolbar with button groups"},c.a.createElement(u.f,{className:"mr-3","aria-label":"First group"},c.a.createElement(u.e,{className:"text-dark",color:"outline-primary",onClick:function(){return e.onRadioBtnClick(0,t)},active:0!==e.state.radioSelected},"Normal"),c.a.createElement(u.e,{className:"text-dark",color:"outline-primary",onClick:function(){return e.onRadioBtnClick(1,t)},active:1!==e.state.radioSelected},"MA"),c.a.createElement(u.e,{className:"text-dark",color:"outline-primary",onClick:function(){return e.onRadioBtnClick(2,t)},active:2!==e.state.radioSelected},"EMA"),c.a.createElement(u.e,{className:"text-dark",color:"outline-primary",onClick:function(){return e.onRadioBtnClick(3,t)},active:3!==e.state.radioSelected},"WMA"))))),c.a.createElement("div",{className:"chart-wrapper",style:{height:"300px",marginTop:"5px"}},c.a.createElement(m.b,{data:e.state.mainChart,options:e.state.mainChartOpts,height:300}))),c.a.createElement(u.j,null,c.a.createElement(u.v,{className:"text-center"},c.a.createElement(u.m,{sm:12,md:!0,className:"mb-sm-2 mb-0"},c.a.createElement("div",{className:"text-muted"},"Total Cases"),c.a.createElement("strong",null,e.state.totalCasesFooter)),c.a.createElement(u.m,{sm:12,md:!0,className:"mb-sm-2 mb-0 d-md-down-none"},c.a.createElement("div",{className:"text-muted"},"Total Deaths"),c.a.createElement("strong",null,e.state.totalDeathsFooter)),c.a.createElement(u.m,{sm:12,md:!0,className:"mb-sm-2 mb-0"},c.a.createElement("div",{className:"text-muted"},"New Cases"),c.a.createElement("strong",null,e.state.totalNewCasesFooter)),c.a.createElement(u.m,{sm:12,md:!0,className:"mb-sm-2 mb-0 d-md-down-none"},c.a.createElement("div",{className:"text-muted"},"New Deaths"),c.a.createElement("strong",null,e.state.totalNewDeathsFooter))))))))})}}]),t}(i.Component);t.default=y}}]);
//# sourceMappingURL=12.a76708ec.chunk.js.map
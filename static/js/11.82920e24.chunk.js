(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{423:function(a,e,r){"use strict";r.r(e);var t=r(43),o=r(44),n=r(46),l=r(45),s=r(47),i=r(1),d=r.n(i),c=r(274),b=r(270),u=r(276),h=r(91),m=r(160),g=r(313),C=["255,0,0","0,255,0","0,0,255","255,255,0","0,255,255","255,0,255"],p={tooltips:{enabled:!1,custom:u.CustomTooltips},responsive:!0,maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0},v=function(a){function e(a){var r;return Object(t.a)(this,e),(r=Object(n.a)(this,Object(l.a)(e).call(this,a))).loading=function(){return d.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},r.state={radar:{labels:["Cases Per 100.000","Deaths Per One Million","Tests Per 10.000","Active Per 100.000","Recovered Per 100.000","Critical Per Ten Million"],datasets:[]},bar:{labels:["North America","Europe","South America","Asia","Africa","Australia/Oceania"],datasets:[{label:"Today Cases",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[0,0,0,0,0,0]},{label:"Today Deaths",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",borderWidth:1,hoverBackgroundColor:"rgba(179,181,198,0.4)",hoverBorderColor:"rgba(179,181,198,1)",data:[0,0,0,0,0,0]}]},polar:{labels:["North America","Europe","South America","Asia","Africa","Australia/Oceania"],datasets:[{data:[0,0,0,0,0,0],backgroundColor:["#f86c6b","#ffc107","#20a8d8","#4dbd74","#2f353a","#c8ced3"],label:"My dataset"}]}},r}return Object(s.a)(e,a),Object(o.a)(e,[{key:"componentDidMount",value:function(){var a=this,e=this.state.radar,r=this.state.bar,t=this.state.polar;r.datasets=[{label:"Today Cases",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[]},{label:"Today Deaths",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",borderWidth:1,hoverBackgroundColor:"rgba(179,181,198,0.4)",hoverBorderColor:"rgba(179,181,198,1)",data:[]}],r.labels=[],t.datasets=[{data:[],backgroundColor:["#f86c6b","#ffc107","#20a8d8","#4dbd74","#2f353a","#c8ced3"],label:"My dataset"}],t.labels=[],m.get("https://corona.lmao.ninja/v2/continents?yesterday=true").then(function(o){var n=o.data,l=0;n.forEach(function(a){e.datasets.push({label:a.continent,backgroundColor:"rgba("+C[l]+",0.2)",borderColor:"rgba("+C[l]+",1)",pointBackgroundColor:"rgba("+C[l]+",1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba("+C[l]+",1)",data:[a.casesPerOneMillion/10,a.deathsPerOneMillion,a.testsPerOneMillion/100,a.activePerOneMillion/10,a.recoveredPerOneMillion/10,10*a.criticalPerOneMillion]}),t.datasets[0].data.push(a.casesPerOneMillion),t.labels.push(a.continent),l++}),m.get("https://corona.lmao.ninja/v2/countries?yesterday=true&sort=todayCases").then(function(t){for(var o=t.data,n=0;n<10;n++)r.datasets[0].data.push(o[n].todayCases),r.datasets[1].data.push(o[n].todayDeaths),r.labels.push(o[n].country);a.setState({bar:r,radar:e})})}).catch(function(a){console.log(a)})}},{key:"render",value:function(){var a=this;return d.a.createElement(h.a,null,function(e){return d.a.createElement(g,{loaded:e.removeLoadingBar},d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(b.v,null,d.a.createElement(b.m,{md:"6"},d.a.createElement(b.h,null,d.a.createElement(b.k,null,"Continental Covid Cases Per One Million"),d.a.createElement(b.i,null,d.a.createElement("div",{className:"chart-wrapper"},d.a.createElement(c.c,{data:a.state.polar,options:p}))))),d.a.createElement(b.m,{md:"6"},d.a.createElement(b.h,null,d.a.createElement(b.k,null,"Countries With The Most New Cases"),d.a.createElement(b.i,null,d.a.createElement("div",{className:"chart-wrapper"},d.a.createElement(c.a,{data:a.state.bar,options:p}))))))))})}}]),e}(i.Component);e.default=v}}]);
//# sourceMappingURL=11.82920e24.chunk.js.map
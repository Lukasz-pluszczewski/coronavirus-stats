(this["webpackJsonpcoronavirus-stats"]=this["webpackJsonpcoronavirus-stats"]||[]).push([[0],{165:function(e,t,a){},166:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(25),o=a.n(c),l=a(14),u=a(28),s=function(e){if(void 0!==e)return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},d=function(e){if(void 0!==e){var t=e.slice(0,4),a=e.slice(5,7),r=e.slice(8,10);return"".concat(a,"/").concat(r,"/").concat(t)}},i=function(e){if(void 0!==e){var t=e.slice(11,13),a=e.slice(14,16),r=e.slice(17,19);return"".concat(t,":").concat(a,":").concat(r)}},m=function(e){if(void 0!==e.history){var t=Object.keys(e.history).map((function(t){return{date:t,number:e.history[t]}}));t=t.sort((function(e,t){return new Date(e.date)-new Date(t.date)}));var a=(t=Object.values(t)).map((function(e){return e.date})),r=t.map((function(e){return e.number}));return[t,a,r]}},f=(a(29),a(72),Object(l.b)((function(e){return{error:e.apiData.error,data:e.apiData.data,numberOfConfirmed:s(e.apiData.numberOfConfirmed),numberOfDeaths:s(e.apiData.numberOfDeaths),numberOfRecovered:s(e.apiData.numberOfRecovered),numberOfCurrentlySick:s(e.apiData.numberOfCurrentlySick),lastUpdated:e.apiData.lastUpdated,lastUpdatedDate:d(e.apiData.lastUpdated),lastUpdatedTime:i(e.apiData.lastUpdated),countryConfirmedDataSum:e.apiData.countryConfirmedDataSum,countryDeathsDataSum:e.apiData.countryDeathsDataSum,countryRecoveredDataSum:e.apiData.countryRecoveredDataSum}}),(function(e){return{getApiData:function(){return e({type:"GET_API_DATA_REQUEST"})},selectedCountryDispatchToStore:function(t){return e(function(e){return{type:"SELECTED_COUNTRY",selectedCountry:e}}(t))}}}))((function(e){var t=Object(r.useState)(),a=Object(u.a)(t,2),c=a[0],o=a[1],l=e.getApiData;Object(r.useEffect)((function(){l()}),[l]),e.countryConfirmedDataSum&&void 0===c&&o(e.countryConfirmedDataSum);return n.a.createElement("div",{className:"col sidebar"},n.a.createElement("div",{className:"sum-data"},n.a.createElement("h2",null,"Corona Virus Statistics"),e.error?n.a.createElement("p",{style:{color:"#e60036"}},e.error):null,n.a.createElement("div",{className:"cards-row"},n.a.createElement("p",{className:"card confirmed"},n.a.createElement("span",null,e.numberOfConfirmed)," confirmed"),n.a.createElement("p",{className:"card deaths"},n.a.createElement("span",null,e.numberOfDeaths)," deaths")),n.a.createElement("div",{className:"cards-row"},n.a.createElement("p",{className:"card recovered"},n.a.createElement("span",null,e.numberOfRecovered)," recovered"),n.a.createElement("p",{className:"card currently-sick"},n.a.createElement("span",null,e.numberOfCurrentlySick)," currently sick")),e.lastUpdatedDate&&e.lastUpdatedTime?n.a.createElement("p",null,"Last update ",n.a.createElement("span",{id:"last-updated-date",title:"DD/MM/YYYY"},e.lastUpdatedDate)," in ",n.a.createElement("span",{id:"last-updated-time",title:"HH/MM/SS"},e.lastUpdatedTime),"."):null),n.a.createElement("div",{className:"input-search"},n.a.createElement("input",{placeholder:"Type country name...",autoFocus:!0,onChange:function(t){var a=t.target.value.toLowerCase(),r=e.countryConfirmedDataSum.filter((function(e){return e.country.toLowerCase().includes(a)}));o(r)}})),n.a.createElement("div",{className:"country-list"},c&&c.map((function(t,a){return n.a.createElement("div",{key:a,className:"country-row"},n.a.createElement("img",{src:"https://www.countryflags.io/".concat(t.country_code,"/flat/32.png"),alt:t.country_code}),n.a.createElement("p",{onClick:(r=t,function(){console.log("selected country",r),e.selectedCountryDispatchToStore(r)})},n.a.createElement("strong",null,t.country)," | ",n.a.createElement("span",{className:"numbers"},s(t.latest))));var r}))))}))),y=function(e){return n.a.createElement("p",{className:"country-card"},n.a.createElement("span",{className:"country-card-number"},e.cardText.includes("24h")?"+":null,s(e.cardNumber),e.totalNumber?n.a.createElement("span",{className:"percentage"},"(",n.a.createElement("span",{className:"".concat(e.cardName,"-color"),style:{margin:"0 2px"}},e.cardText.includes("24h")?"+":null,(t=e.totalNumber,(100*e.cardNumber/t).toFixed(2)+"%")),")"):null),e.cardText);var t},p=a(27),b=function(e){var t={labels:e.labels,datasets:[{backgroundColor:["#3333ff","#571aab","#4fc974"],hoverBackgroundColor:["#0000cc","#2d0d59","#2a8946"],data:[e.data.currentlySick?e.data.currentlySick:null,e.data.deaths?e.data.deaths.latest:null,e.data.recovered?e.data.recovered.latest:null]}]},a={title:{display:!0,text:e.title,fontSize:20,fontColor:"#ccc",fontStyle:"normal"},legend:{display:!0,position:"top"}};return n.a.createElement(p.b,{data:t,width:40,height:10,options:a})},v=function(e){var t={labels:e.labels,datasets:[{fill:!0,lineTension:.5,backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:3,pointBorderWidth:4,pointHoverRadius:8,pointHoverBackgroundColor:e.borderColor,data:e.data}]},a={title:{display:!0,text:e.title,fontSize:20,fontColor:"#ccc",fontStyle:"normal"},legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,precision:0}}]}};return n.a.createElement(p.a,{data:t,width:40,height:10,options:a})},E=(a(165),Object(l.b)((function(e){return{data:e.apiData.data,selectedCountry:e.selectedCountry,country:e.selectedCountry.country,latest:s(e.selectedCountry.latest)}}),null)((function(e){var t,a,r,c,o,l,u,s,d,i,f;if(e.country){t=e.data.confirmed.locations.find((function(t){return t.country===e.country})),a=e.data.deaths.locations.find((function(t){return t.country===e.country})),r=e.data.recovered.locations.find((function(t){return t.country===e.country})),c=t.latest-a.latest-r.latest;var p=m(t);o=p[1],l=p[2];var E=m(a);u=E[1],s=E[2];var h=m(r);d=h[1],i=h[2],f=l[l.length-1]-l[l.length-2]}return n.a.createElement("div",{className:"col main-content"},e.country?n.a.createElement(n.a.Fragment,null,e.selectedCountry.country_code?n.a.createElement("img",{style:{verticalAlign:"sub",marginRight:"20px"},src:"https://www.countryflags.io/".concat(e.selectedCountry.country_code,"/flat/32.png"),alt:e.selectedCountry.country_code}):null,n.a.createElement("h1",{style:{display:"inline-block"}},e.country)):null,e.selectedCountry&&e.country&&0!==e.selectedCountry.latest?n.a.createElement("div",{className:"info"},n.a.createElement(y,{cardNumber:t.latest,cardText:"Total cases"}),n.a.createElement(y,{cardName:"confirmed",cardNumber:f,cardText:"in the last 24h",totalNumber:t.latest}),n.a.createElement(y,{cardName:"deaths",cardNumber:a.latest,cardText:"Deaths",totalNumber:t.latest}),n.a.createElement(y,{cardName:"recovered",cardNumber:r.latest,cardText:"Recovered",totalNumber:t.latest}),n.a.createElement(y,{cardName:"currently-sick",cardNumber:c,cardText:"Currently sick",totalNumber:t.latest})):n.a.createElement((function(){return 0===e.selectedCountry.latest?n.a.createElement("p",{className:"text-in-center"},"No data available"):e.selectedCountry.country?void 0:n.a.createElement("p",{className:"text-in-center"},"Select country from the country list")}),null),t&&a&&r&&0!==e.selectedCountry.latest?n.a.createElement(n.a.Fragment,null,n.a.createElement(b,{labels:["Currently sick","Deaths","Recovered"],data:{currentlySick:c,deaths:a,recovered:r},title:"Total data"}),n.a.createElement(v,{labels:o,data:l,title:"Total cases per day",borderColor:"#e60036",backgroundColor:"rgba(230, 0, 54, 0.4)"}),n.a.createElement(v,{labels:u,data:s,title:"Total deaths per day",borderColor:"#571aab",backgroundColor:"rgb(87, 26, 171, 0.4)"}),n.a.createElement(v,{labels:d,data:i,title:"Total recovered per day",borderColor:"#4fc974",backgroundColor:"rgb(79, 201, 116, 0.4)"})):null)})));var h=function(){return n.a.createElement("div",{className:"flex-grid"},n.a.createElement(f,null),n.a.createElement(E,null))};a(166),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(6),C=a(62),g=a(13),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object(g.a)({},e);return"GET_API_DATA_SUCCESS"===t.type?Object(g.a)({},a,{data:t.data[0],numberOfConfirmed:t.data[0].latest.confirmed,numberOfDeaths:t.data[0].latest.deaths,numberOfRecovered:t.data[0].latest.recovered,numberOfCurrentlySick:t.data[0].latest.confirmed-t.data[0].latest.recovered,lastUpdated:t.data[0].confirmed.last_updated,countryConfirmedDataSum:t.data[1][0].countryConfirmedDataSum,countryDeathsDataSum:t.data[1][0].countryDeathsDataSum,countryRecoveredDataSum:t.data[1][0].countryRecoveredDataSum}):"GET_API_DATA_ERROR"===t.type?Object(g.a)({},a,{error:t.error}):a},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object(g.a)({},e);return"SELECTED_COUNTRY"===t.type?Object(g.a)({},a,{country:t.selectedCountry.country,latest:t.selectedCountry.latest,country_code:t.selectedCountry.country_code}):a},N=Object(D.c)({apiData:S,selectedCountry:O}),_=a(10),T=a.n(_),w=a(12),k=a(61),x=T.a.mark(R),j=T.a.mark(U);function A(e,t){var a;"confirmed"===t&&(a=e.confirmed.locations),"deaths"===t&&(a=e.deaths.locations),"recovered"===t&&(a=e.recovered.locations);var r=a.reduce((function(e,t){var a=e.get(t.country)||0;return e.set("".concat(t.country," ").concat(t.country_code),t.latest+a,t.country_code),e}),new Map);return Object(k.a)(r).map((function(e){var t=Object(u.a)(e,2),a=t[0],r=t[1];return{country:a.slice(0,-3),latest:r,country_code:a.slice(-2)}})).sort((function(e,t){return parseFloat(t.latest)-parseFloat(e.latest)}))}function R(){var e;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://coronavirus-tracker-api.herokuapp.com/all").then((function(e){return e.json()})).then((function(e){return console.log("data",e),[e,[{countryConfirmedDataSum:A(e,"confirmed"),countryDeathsDataSum:A(e,"deaths"),countryRecoveredDataSum:A(e,"recovered")}]]})).catch((function(e){return console.log(e)}));case 3:return e=t.sent,t.next=6,Object(w.c)({type:"GET_API_DATA_SUCCESS",data:e});case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log("getApiData saga Error: ",t.t0),t.next=13,Object(w.c)({type:"GET_API_DATA_ERROR",error:"Something went wrong while retrieving API data."});case 13:case"end":return t.stop()}}),x,null,[[0,8]])}function U(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.d)("GET_API_DATA_REQUEST",R);case 2:case"end":return e.stop()}}),j)}var I=T.a.mark(L);function L(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)([Object(w.b)(U)]);case 2:case"end":return e.stop()}}),I)}var P=Object(C.a)(),B=Object(D.e)(N,Object(D.d)(Object(D.a)(P),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));P.run(L);var F=B;o.a.render(n.a.createElement(l.a,{store:F},n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){},63:function(e,t,a){e.exports=a(168)},72:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.5a2a7c09.chunk.js.map
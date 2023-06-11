var e=require("babel-plugin-macros"),t=require("node-x-path"),n=require("cli-color"),a=require("path");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/r(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e){return(0,require("@babel/generator").default)(e.node).code}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t,n){var a,r,o,i;if(n.note("Attr action: replaceName and/or replaceValue","blackBright"),e.attrConfig.replaceName?("string"==typeof e.attrConfig.replaceName?a=e.attrConfig.replaceName:(a=e.attrConfig.replaceName(e),n.msg("[attrConfig.replaceName function]","blackBright")),n.note("newName: "+a,"blackBright"),a&&(r=t.jsxIdentifier(a))):r=e.nodePath.node.name,e.attrConfig.replaceValue?("string"==typeof e.attrConfig.replaceValue?i=e.attrConfig.replaceValue:(i=e.attrConfig.replaceValue(e),n.msg("[attrConfig.replaceValue funcrion]","blackBright")),"string"==typeof i?(n.msg("[newValue: string]: "+i,"blackBright"),o=t.stringLiteral(i)):"number"==typeof i?(n.msg("[newValue: number]: "+i,"blackBright"),o=t.jsxExpressionContainer(t.numericLiteral(i))):"boolean"==typeof i?(n.msg("[newValue: bool]: "+i,"blackBright"),o=t.jsxExpressionContainer(t.booleanLiteral(i))):t.isNode(i)&&(n.msg("[newValue: Node]: [Not printed]","blackBright"),o=i)):o=e.nodePath.node.value,r&&o){var l=t.jsxAttribute(r,o);e.nodePath.replaceWith(l)}else if(r){var c=t.jsxAttribute(r,o);e.nodePath.replaceWith(c)}else o&&e.nodePath.replaceWith(o);n.subheader("Transformed Attribute"),n.nodePath(e.nodePath)}var d=new(/*#__PURE__*/function(){function e(){this.logLines=[],this.content="",this.indent=2,this.maxDepth=4,this.showUndefined=!1,this.showNull=!0,this.lineWith=80,this.enabled=!1}var t=e.prototype;return t.stringify=function(e,t){return void 0===t&&(t=this.maxDepth),n=e,a={indent:this.indent,maxDepth:t,showUndefined:this.showUndefined,showNull:this.showNull},r=Object.assign({indent:"  ",maxDepth:4,showUndefined:!1,showNull:!0,leadingComma:!1},i({},a,{indent:void 0!==(null==a?void 0:a.indent)?" ".repeat(a.indent):"  "})),o=new WeakSet,l="",c=0,function e(t,n){if(r.removeKeys&&r.removeKeys.includes(t))return!1;var a=""===t?"":t+": ",i=""+r.indent.repeat(c),u=""+i+a;if(void 0===n)return!!r.showUndefined&&(l+=u+"undefined",!0);if(null===n)return!!r.showNull&&(l+=u+"null",!0);if(n instanceof Date)return l+=u+'"[Date: '+n.toISOString()+']"',!0;if("symbol"==typeof n)return l+=u+'"[Symbol: '+n.toString()+']"',!0;if("number"==typeof n)return l+=""+u+n,!0;if("string"==typeof n)return l+=u+'"'+n+'"',!0;if(n instanceof RegExp)return l+=u+'"[RegExp: '+n.toString()+']"',!0;if("object"==typeof n){if(o.has(n))return l+=u+'"[circular ref]"',!0;if(o.add(n),c++,Array.isArray(n)){l+=u+"[\n";for(var s=0;s<n.length;s++)e("",n[s])&&((r.leadingComma||s<n.length-1)&&(l+=","),l+="\n");l+=i+"]"}else{if(r.maxDepth&&c>r.maxDepth)return l+=u+"[max depth]",c--,!0;l+=u+"{\n";for(var d=Object.entries(n),f=0;f<d.length;f++){var h=d[f];e(h[0],h[1])&&((r.leadingComma||f<d.length-1)&&(l+=","),l+="\n")}l+=i+"}"}return c--,!0}return l+=""+u+n,!0}("",n),l;var n,a,r,o,l,c},t.object=function(e,t,n){if(void 0===t&&(t="white"),this.enabled){var a=this.stringify(e,n);this.msg(a,t)}},t.nodePath=function(e,t){if(void 0===t&&(t="white"),this.enabled){var n=l(e);this.msg(n,t)}},t.node=function(e,t){if(void 0===t&&(t="white"),this.enabled){var n=(a=e,(0,require("@babel/generator").default)(a).code);this.msg(n,t)}var a},t.msg=function(e,t){void 0===t&&(t="white"),this.enabled&&this.logLines.push({msg:e,color:t})},t.contentLine=function(e,t){if(void 0===t&&(t="white"),this.enabled){var n=e+": "+this.content.split("\n")[e-1];this.logLines.push({msg:n,color:t})}},t.note=function(e,t){void 0===t&&(t="blackBright"),this.enabled&&this.line(e,"## -- ",!1,t)},t.header=function(e,t){void 0===t&&(t="cyan"),this.enabled&&this.line(e,"## ",!0,t)},t.subheader=function(e,t){void 0===t&&(t="cyan"),this.enabled&&this.line(e,">> ",!1,t)},t.end=function(e){void 0===e&&(e="blackBright"),this.enabled&&this.line("","---- - - - - -",!0,e)},t.line=function(e,t,n,a){if(void 0===t&&(t=""),void 0===a&&(a="white"),this.enabled){var r=""+t+e+" ",o=r.length;o<this.lineWith&&(r+=(n?"-":" ").repeat(this.lineWith-o)),this.logLines.push({msg:r,color:a})}},t.getColorLog=function(){return this.logLines.map(function(e){return o.default[e.color](e.msg)}).join("\n")},t.getLog=function(){return this.logLines.map(function(e){return e.msg}).join("\n")},e}()),f=e.createMacro(function(n){var r=n.babel.types,i=n.state.file.path,c=n.state.filename;d.enabled=!0,d.header("attr-transform.macro"),d.note("file: "+c),d.content=n.state.file.code;var f=[],h=function(t,n){var r={},o=t.config;n.header("Config"),n.note("(from babel-macro-pluing under 'attr-transform' section)"),n.object(o),n.end();var i=void 0;if(void 0===(null==o?void 0:o.config)?i="attr-transform.config.cjs":"string"==typeof(null==o?void 0:o.config)?i=o.config:r=o,i){var l=process.cwd(),c=a.join(l,i);n.note("Loading config from file: ","cyan"),n.note("path: "+c,"blackBright"),r=require(c)}else{if(null==o||!o.elms)throw new e.MacroError("\n        You must provide a config file (or a 'attr-transform.elms' object in the babel-plugin-macro config - https://github.com/kentcdodds/babel-plugin-macros/blob/main/other/docs/author.md):\n        [attr-transform.config.js]\n        /** @type {import('../src/twin-atttributes.types.ts').TwinAttributeConfig} */\n        module.exports = {\n          elms: [\n            {\n              attrs: {\n                padding: {\n                  matchName: /p([0-9])/,\n                  replaceValue: ({match}) => `p-${match[1]}`,\n                },\n                color: {\n                  matchName: /([red|blue|green])/,\n                  replaceValue: ({match}) => `text-${match[1]}-600`,\n                },\n                line: {\n                  matchName: /line-([0-9])/,\n                  replaceValue: \"flex items-center justify-start\",\n                } \n              },\n            },\n          ],\n        }\n        ");r=o}return r.devMode&&r.devMode.maxDepth&&(n.maxDepth=r.devMode.maxDepth),r}(n,d);if(h.devMode||(d.enabled=!1),d.header("Using Config"),d.object(h),d.end(),d.header("Start traverse ast"),i.traverse({JSXElement:function(t){!function(t,n,a,r,i,l){var c,d,f,h,m,g,v;if(n.elms){var p,b=(p=t.get("openingElement.attributes"),Array.isArray(p)||(p=[p]),p.filter(function(e){return null==e?void 0:e.isJSXAttribute()})),y=function(e,t){var n,a,r=e.get("openingElement"),o=null!=(n=null==(a=r.node.name.name)?void 0:a.toString())?n:"";if(!o)return{elm:r,tagName:o,tagMatch:null,matchingElmConfig:void 0};var i=null,l=t.find(function(e){return void 0===e.match||("string"==typeof e.match&&(i=o===e.match?[o]:null),e.match instanceof RegExp&&(i=o.match(e.match)),!(!i||e.dontMatch&&o.match(e.dontMatch)))});return{elm:r,tagName:o,tagMatch:i,matchingElmConfig:l}}(t,n.elms),x=y.elm,N=y.tagMatch,j=y.matchingElmConfig,w=null!=(c=null==(d=x.node.loc)?void 0:d.start.line)?c:0,A=null!=(f=null==(h=x.node.loc)?void 0:h.start.line)?f:0,C=null==(m=x.node.loc)?void 0:m.start.column,M=null==(g=x.node.loc)?void 0:g.start.column,E=A-w+1;if(l.header("traverse - JSXElement: "+y.tagName+" - Line: "+w+":"+C+" to "+A+":"+M,"bgBlue"),E<4)for(var L=0;L<E;L++)l.contentLine(w+L);else l.contentLine(w+1),l.contentLine(w+2),l.msg("..."),l.contentLine(A-1),l.contentLine(A);if(!j)return l.note("No Elm Confiog not macthed!","redBright"),l.end(),!1;var B=b.map(function(e){return function(e,t,n,a,r){if(r.node&&n.node&&!r.removed)for(var o=r.node.name.name.toString(),i=0,l=Object.entries(t.attrs);i<l.length;i++){var c,u=l[i],s=u[0],d=u[1],f=null,h="",m=void 0,g=void 0,v=void 0,p=void 0;if(d.matchName){if("string"==typeof d.matchName&&!(f=o===d.matchName?[o]:null))continue;if(d.matchName instanceof RegExp&&!(f=o.match(d.matchName)))continue;"function"==typeof d.matchName&&(v=d.matchName)}if(d.dontMatchName){if("string"==typeof d.dontMatchName&&o===d.dontMatchName)continue;if(d.dontMatchName instanceof RegExp&&o.match(d.dontMatchName))continue;"function"==typeof d.dontMatchName&&(p=d.dontMatchName)}if("function"==typeof d.validate&&(g=d.validate),"string"==typeof d.value)h=d.value;else if("function"==typeof d.value)m=d.value;else if("function"==typeof d.replaceValue)m=d.replaceValue;else{var b,y,x,N;"StringLiteral"===(null==(b=r.node.value)?void 0:b.type)&&(h=null!=(y=null==(x=r.node.value)||null==(N=x.value)?void 0:N.toString())?y:"")}return{name:s,value:h,matchFunction:v,dontMatchFunction:p,validateFunction:g,valueFunction:m,attrConfig:d,match:f,collected:null!=(c=d.collect)&&c,tagMatch:a,allMatchingAttributes:[],collectedAttributes:[],nodePath:r,elmNodePath:n,macroParams:e}}}(a,j,x,N,e)}).filter(function(e){return!!e}),k=null!=(v=j.actions)?v:[];if(0===B.length&&0===k.length)return l.note("No attribute matched and no actions defined\n","redBright"),void l.end();l.note("Found "+B.length+" attributes: "+B.map(function(e){return e.nodePath.node.name.name}).join(", "));var S=[],P={collect:function(e){e.collected&&S.push(e)},setMeta:function(e){e.allMatchingAttributes=B,e.collectedAttributes=S},setValues:function(e){null!=e&&e.valueFunction&&(e.value=e.valueFunction(e))},callValidators:function(n){if(null!=n&&n.validateFunction){var r=n.validateFunction(n);if(r){var i,l=o.default.redBright("❌")+o.default.redBright(" Validation error")+o.default.blackBright(" (jsx-transform.macro)")+o.default.blackBright("\n\n in ")+o.default.cyan(a.state.filename)+o.default.blackBright("\n at ")+o.default.cyan("line "+(null==(i=t.node.loc)?void 0:i.start.line))+o.default.blackBright(":\n\n  ")+o.default.red("  "+r);throw new e.MacroError("\n\n"+l+"\n\n")}}}};Object.values(P).forEach(function(e){B.forEach(e)}),l.note("Run attribute actions (count: "+B.length+")","blackBright");for(var V,F=u(B);!(V=F()).done;){var D=V.value;l.subheader("Attr: "+D.nodePath.node.name.name+" - Source:","cyan"),l.nodePath(D.nodePath),l.subheader("Value from attr config: "+D.value,"blackBright"),(D.attrConfig.replaceName||D.attrConfig.replaceValue)&&s(D,i,l),l.note("End attribute parsing")}l.subheader("Run elm actions conditions","blackBright");var O=k.map(function(e){var t,n={name:null!=(t=e.name)?t:"",value:"",postMatchAction:e,allMatchingAttributes:B,collectedAttributes:S,elmNodePath:x,tagMatch:N,macroParams:a};if(e.condition){if(!e.condition(n))return;return e.value&&"function"==typeof e.value?n.value=e.value(n):e.value&&(n.value=e.value),n}return n}).filter(function(e){return!!e});l.note("Found "+k.length+" Elm actions: "+k.map(function(e){return e.name})),l.note("Macthed Elm action  - (condition met) (count: "+O.length+")","blackBright");for(var T,W=function(){var e,t=T.value;l.subheader("Action: "+(null!=(e=t.name)?e:" (no name)"),"cyan");var n=t.value;if(t.postMatchAction.createAttribute){l.note("Elm action: createAttribute","blackBright");var a=t.postMatchAction.createAttribute;if("string"==typeof a){var r,o=a,c=b.find(function(e){return e.node.name.name===o}),u=i.jsxIdentifier(o);n?"string"==typeof n?r=i.jsxAttribute(u,i.stringLiteral(n)):"number"==typeof n?r=i.jsxAttribute(u,i.jsxExpressionContainer(i.numericLiteral(n))):"boolean"==typeof n?r=i.jsxAttribute(u,i.jsxExpressionContainer(i.booleanLiteral(n))):i.isNode(n)&&(r=i.jsxAttribute(u,n)):r=i.jsxAttribute(u),r&&(c?t.value&&(c.replaceWith(r),l.note("existing attribute replaced"),l.nodePath(c)):(x.node.attributes.push(r),l.note("attribute added"),l.object(r)))}}},q=u(O);!(T=q()).done;)W();for(var _,I=u(B);!(_=I()).done;){var R=_.value;r.includes(R.nodePath)||R.attrConfig.remove&&r.push(R.nodePath)}}}(t,h,n,f,r,d)}}),i.scope.crawl(),f.forEach(function(e){e.remove()}),h.devMode){var m,g=h.devMode,v=l(i);if(g.onlyTranformation&&(d.logLines=[]),g.onlyFiles){var p=g.onlyFiles,b=c.split("/").pop(),y=b.replace(/\.[^/.]+$/,"");if(Array.isArray(p)||(p=[p]),!p.some(function(e){return"string"==typeof e?e===c||e===b||e===y:e.test(c)||e.test(b)||e.test(y)}))return}if(d.msg("\n\n"),d.header("Transformed Code"),d.note("jsx-transform.macro (DevMode Transformed)"),d.note("file: "+n.state.filename),d.msg(v,"white"),d.msg("\n"),d.end(),d.msg("\n\n"),!0===g.colors?m=d.getColorLog():!1===g.colors&&(m=d.getLog()),g.logToConsole&&(void 0===m&&(m=d.getColorLog()),console.log(m)),g.logWithThrow)throw void 0===m&&(m=d.getColorLog()),new e.MacroError(m);if(g.printToFile){void 0===m&&(m=d.getLog());var x="attr-transform.macro.debug-log.txt";"string"==typeof g.printToFile&&(x=g.printToFile);var N=require("path").join(process.cwd(),x),j="#####################__##__attr-tranform__##__#########################",w=t.x.loadSync(N),A="########## "+c,C="\n"+A+"\n"+m;if(w.length>0){var M=w.split(j),E=M.findIndex(function(e){return e.includes(A)});E>=0?M.splice(E,1,C):M.push(C);var L=M.join(j);t.x.saveSync(N,L)}else t.x.saveSync(N,j+"\n"+C)}}d.msg("\n"),d.header("attr-attribute.macro : DONE","blackBright"),d.msg("\n\n")},{configName:"attr-transform"});module.exports=f;
//# sourceMappingURL=macro.cjs.map

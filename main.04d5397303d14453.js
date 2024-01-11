              || (${Y} == "string" && ${q} && ${q} == +${q})`).assign(ee,E._`+${q}`);case"integer":return void X.elseIf(E._`${Y} === "boolean" || ${q} === null
              || (${Y} === "string" && ${q} && ${q} == +${q} && !(${q} % 1))`).assign(ee,E._`+${q}`);case"boolean":return void X.elseIf(E._`${q} === "false" || ${q} === 0 || ${q} === null`).assign(ee,!1).elseIf(E._`${q} === "true" || ${q} === 1`).assign(ee,!0);case"null":return X.elseIf(E._`${q} === "" || ${q} === 0 || ${q} === false`),void X.assign(ee,null);case"array":X.elseIf(E._`${Y} === "string" || ${Y} === "number"
              || ${Y} === "boolean" || ${q} === null`).assign(ee,E._`[${q}]`)}}X.else(),j(V),X.endIf(),X.if(E._`${ee} !== undefined`,()=>{X.assign(q,ee),function x({gen:V,parentData:Z,parentDataProperty:G},X){V.if(E._`${Z} !== undefined`,()=>V.assign(E._`${Z}[${G}]`,X))}(V,ee)})}(V,Z,Q):j(V)})}return Y};const _=new Set(["string","number","integer","boolean","null"]);function T(V,Z,G,X=m.Correct){const q=X===m.Correct?E.operators.EQ:E.operators.NEQ;let Q;switch(V){case"null":return E._`${Z} ${q} null`;case"array":Q=E._`Array.isArray(${Z})`;break;case"object":Q=E._`${Z} && typeof ${Z} == "object" && !Array.isArray(${Z})`;break;case"integer":Q=Y(E._`!(${Z} % 1) && !isNaN(${Z})`);break;case"number":Q=Y();break;default:return E._`typeof ${Z} ${q} ${V}`}return X===m.Correct?Q:(0,E.not)(Q);function Y(ee=E.nil){return(0,E.and)(E._`typeof ${Z} == "number"`,ee,G?E._`isFinite(${Z})`:E.nil)}}function L(V,Z,G,X){if(1===V.length)return T(V[0],Z,G,X);let q;const Q=(0,u.toHash)(V);if(Q.array&&Q.object){const Y=E._`typeof ${Z} != "object"`;q=Q.null?Y:E._`!${Z} || ${Y}`,delete Q.null,delete Q.array,delete Q.object}else q=E.nil;Q.number&&delete Q.integer;for(const Y in Q)q=(0,E.and)(q,T(Y,Z,G,X));return q}s.checkDataType=T,s.checkDataTypes=L;const N={message:({schema:V})=>`must be ${V}`,params:({schema:V,schemaValue:Z})=>"string"==typeof V?E._`{type: ${V}}`:E._`{type: ${Z}}`};function j(V){const Z=function B(V){const{gen:Z,data:G,schema:X}=V,q=(0,u.schemaRefOrVal)(V,X,"type");return{gen:Z,keyword:"type",data:G,schema:X.type,schemaCode:q,schemaValue:q,parentSchema:X,params:{},it:V}}(V);(0,w.reportError)(Z,N)}s.reportTypeError=j},57866:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.assignDefaults=void 0;const h=p(56382),M=p(97990);function E(u,m,y){const{gen:b,compositeRule:S,data:_,opts:A}=u;if(void 0===y)return;const P=h._`${_}${(0,h.getProperty)(m)}`;if(S)return void(0,M.checkStrictMode)(u,`default is ignored for: ${P}`);let x=h._`${P} === undefined`;"empty"===A.useDefaults&&(x=h._`${x} || ${P} === null || ${P} === ""`),b.if(x,h._`${P} = ${(0,h.stringify)(y)}`)}s.assignDefaults=function w(u,m){const{properties:y,items:b}=u.schema;if("object"===m&&y)for(const S in y)E(u,S,y[S].default);else"array"===m&&Array.isArray(b)&&b.forEach((S,_)=>E(u,_,S.default))}},66764:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.getData=s.KeywordCxt=s.validateFunctionCode=void 0;const h=p(8007),M=p(59078),w=p(20368),E=p(59078),u=p(57866),m=p(22707),y=p(62639),b=p(56382),S=p(5976),_=p(31880),A=p(97990),P=p(75091);function T({gen:Se,validateName:ce,schema:be,schemaEnv:Ne,opts:Fe},lt){Fe.code.es5?Se.func(ce,b._`${S.default.data}, ${S.default.valCxt}`,Ne.$async,()=>{Se.code(b._`"use strict"; ${V(be,Fe)}`),function N(Se,ce){Se.if(S.default.valCxt,()=>{Se.var(S.default.instancePath,b._`${S.default.valCxt}.${S.default.instancePath}`),Se.var(S.default.parentData,b._`${S.default.valCxt}.${S.default.parentData}`),Se.var(S.default.parentDataProperty,b._`${S.default.valCxt}.${S.default.parentDataProperty}`),Se.var(S.default.rootData,b._`${S.default.valCxt}.${S.default.rootData}`),ce.dynamicRef&&Se.var(S.default.dynamicAnchors,b._`${S.default.valCxt}.${S.default.dynamicAnchors}`)},()=>{Se.var(S.default.instancePath,b._`""`),Se.var(S.default.parentData,b._`undefined`),Se.var(S.default.parentDataProperty,b._`undefined`),Se.var(S.default.rootData,S.default.data),ce.dynamicRef&&Se.var(S.default.dynamicAnchors,b._`{}`)})}(Se,Fe),Se.code(lt)}):Se.func(ce,b._`${S.default.data}, ${function L(Se){return b._`{${S.default.instancePath}="", ${S.default.parentData}, ${S.default.parentDataProperty}, ${S.default.rootData}=${S.default.data}${Se.dynamicRef?b._`, ${S.default.dynamicAnchors}={}`:b.nil}}={}`}(Fe)}`,Ne.$async,()=>Se.code(V(be,Fe)).code(lt))}function V(Se,ce){const be="object"==typeof Se&&Se[ce.schemaId];return be&&(ce.code.source||ce.code.process)?b._`/*# sourceURL=${be} */`:b.nil}function Z(Se,ce){X(Se)&&(Q(Se),G(Se))?function q(Se,ce){const{schema:be,gen:Ne,opts:Fe}=Se;Fe.$comment&&be.$comment&&d(Se),function o(Se){const ce=Se.schema[Se.opts.schemaId];ce&&(Se.baseId=(0,_.resolveUrl)(Se.opts.uriResolver,Se.baseId,ce))}(Se),function a(Se){if(Se.schema.$async&&!Se.schemaEnv.$async)throw new Error("async schema in sync schema")}(Se);const lt=Ne.const("_errs",S.default.errors);Y(Se,lt),Ne.var(ce,b._`${lt} === ${S.default.errors}`)}(Se,ce):(0,h.boolOrEmptySchema)(Se,ce)}function G({schema:Se,self:ce}){if("boolean"==typeof Se)return!Se;for(const be in Se)if(ce.RULES.all[be])return!0;return!1}function X(Se){return"boolean"!=typeof Se.schema}function Q(Se){(0,A.checkUnknownRules)(Se),function ee(Se){const{schema:ce,errSchemaPath:be,opts:Ne,self:Fe}=Se;ce.$ref&&Ne.ignoreKeywordsWithRef&&(0,A.schemaHasRulesButRef)(ce,Fe.RULES)&&Fe.logger.warn(`$ref: keywords ignored in schema at path "${be}"`)}(Se)}function Y(Se,ce){if(Se.opts.jtd)return F(Se,[],!1,ce);const be=(0,M.getSchemaTypes)(Se.schema);F(Se,be,!(0,M.coerceAndCheckDataType)(Se,be),ce)}function d({gen:Se,schemaEnv:ce,schema:be,errSchemaPath:Ne,opts:Fe}){const lt=be.$comment;if(!0===Fe.$comment)Se.code(b._`${S.default.self}.logger.log(${lt})`);else if("function"==typeof Fe.$comment){const Ge=b.str`${Ne}/$comment`,He=Se.scopeValue("root",{ref:ce.root});Se.code(b._`${S.default.self}.opts.$comment(${lt}, ${Ge}, ${He}.schema)`)}}function F(Se,ce,be,Ne){const{gen:Fe,schema:lt,data:Ge,allErrors:He,opts:Ht,self:et}=Se,{RULES:tt}=et;function Yt(ot){(0,w.shouldUseGroup)(lt,ot)&&(ot.type?(Fe.if((0,E.checkDataType)(ot.type,Ge,Ht.strictNumbers)),z(Se,ot),1===ce.length&&ce[0]===ot.type&&be&&(Fe.else(),(0,E.reportTypeError)(Se)),Fe.endIf()):z(Se,ot),He||Fe.if(b._`${S.default.errors} === ${Ne||0}`))}!lt.$ref||!Ht.ignoreKeywordsWithRef&&(0,A.schemaHasRulesButRef)(lt,tt)?(Ht.jtd||function C(Se,ce){Se.schemaEnv.meta||!Se.opts.strictTypes||(function f(Se,ce){if(ce.length){if(!Se.dataTypes.length)return void(Se.dataTypes=ce);ce.forEach(be=>{oe(Se.dataTypes,be)||Ie(Se,`type "${be}" not allowed by context "${Se.dataTypes.join(",")}"`)}),function de(Se,ce){const be=[];for(const Ne of Se.dataTypes)oe(ce,Ne)?be.push(Ne):ce.includes("integer")&&"number"===Ne&&be.push("integer");Se.dataTypes=be}(Se,ce)}}(Se,ce),Se.opts.allowUnionTypes||function k(Se,ce){ce.length>1&&(2!==ce.length||!ce.includes("null"))&&Ie(Se,"use allowUnionTypes to allow union type keyword")}(Se,ce),function se(Se,ce){const be=Se.self.RULES.all;for(const Ne in be){const Fe=be[Ne];if("object"==typeof Fe&&(0,w.shouldUseRule)(Se.schema,Fe)){const{type:lt}=Fe.definition;lt.length&&!lt.some(Ge=>te(ce,Ge))&&Ie(Se,`missing type "${lt.join(",")}" for keyword "${Ne}"`)}}}(Se,Se.dataTypes))}(Se,ce),Fe.block(()=>{for(const ot of tt.rules)Yt(ot);Yt(tt.post)})):Fe.block(()=>ve(Se,"$ref",tt.all.$ref.definition))}function z(Se,ce){const{gen:be,schema:Ne,opts:{useDefaults:Fe}}=Se;Fe&&(0,u.assignDefaults)(Se,ce.type),be.block(()=>{for(const lt of ce.rules)(0,w.shouldUseRule)(Ne,lt)&&ve(Se,lt.keyword,lt.definition,ce.type)})}function te(Se,ce){return Se.includes(ce)||"number"===ce&&Se.includes("integer")}function oe(Se,ce){return Se.includes(ce)||"integer"===ce&&Se.includes("number")}function Ie(Se,ce){ce+=` at "${Se.schemaEnv.baseId+Se.errSchemaPath}" (strictTypes)`,(0,A.checkStrictMode)(Se,ce,Se.opts.strictTypes)}s.validateFunctionCode=function x(Se){X(Se)&&(Q(Se),G(Se))?function j(Se){const{schema:ce,opts:be,gen:Ne}=Se;T(Se,()=>{be.$comment&&ce.$comment&&d(Se),function I(Se){const{schema:ce,opts:be}=Se;void 0!==ce.default&&be.useDefaults&&be.strictSchema&&(0,A.checkStrictMode)(Se,"default is ignored in the schema root")}(Se),Ne.let(S.default.vErrors,null),Ne.let(S.default.errors,0),be.unevaluated&&function B(Se){const{gen:ce,validateName:be}=Se;Se.evaluated=ce.const("evaluated",b._`${be}.evaluated`),ce.if(b._`${Se.evaluated}.dynamicProps`,()=>ce.assign(b._`${Se.evaluated}.props`,b._`undefined`)),ce.if(b._`${Se.evaluated}.dynamicItems`,()=>ce.assign(b._`${Se.evaluated}.items`,b._`undefined`))}(Se),Y(Se),function g(Se){const{gen:ce,schemaEnv:be,validateName:Ne,ValidationError:Fe,opts:lt}=Se;be.$async?ce.if(b._`${S.default.errors} === 0`,()=>ce.return(S.default.data),()=>ce.throw(b._`new ${Fe}(${S.default.vErrors})`)):(ce.assign(b._`${Ne}.errors`,S.default.vErrors),lt.unevaluated&&function D({gen:Se,evaluated:ce,props:be,items:Ne}){be instanceof b.Name&&Se.assign(b._`${ce}.props`,be),Ne instanceof b.Name&&Se.assign(b._`${ce}.items`,Ne)}(Se),ce.return(b._`${S.default.errors} === 0`))}(Se)})}(Se):T(Se,()=>(0,h.topBoolOrEmptySchema)(Se))};class ye{constructor(ce,be,Ne){if((0,m.validateKeywordUsage)(ce,be,Ne),this.gen=ce.gen,this.allErrors=ce.allErrors,this.keyword=Ne,this.data=ce.data,this.schema=ce.schema[Ne],this.$data=be.$data&&ce.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,A.schemaRefOrVal)(ce,this.schema,Ne,this.$data),this.schemaType=be.schemaType,this.parentSchema=ce.schema,this.params={},this.it=ce,this.def=be,this.$data)this.schemaCode=ce.gen.const("vSchema",ge(this.$data,ce));else if(this.schemaCode=this.schemaValue,!(0,m.validSchemaType)(this.schema,be.schemaType,be.allowUndefined))throw new Error(`${Ne} value must be ${JSON.stringify(be.schemaType)}`);("code"in be?be.trackErrors:!1!==be.errors)&&(this.errsCount=ce.gen.const("_errs",S.default.errors))}result(ce,be,Ne){this.failResult((0,b.not)(ce),be,Ne)}failResult(ce,be,Ne){this.gen.if(ce),Ne?Ne():this.error(),be?(this.gen.else(),be(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(ce,be){this.failResult((0,b.not)(ce),void 0,be)}fail(ce){if(void 0===ce)return this.error(),void(this.allErrors||this.gen.if(!1));this.gen.if(ce),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(ce){if(!this.$data)return this.fail(ce);const{schemaCode:be}=this;this.fail(b._`${be} !== undefined && (${(0,b.or)(this.invalid$data(),ce)})`)}error(ce,be,Ne){if(be)return this.setParams(be),this._error(ce,Ne),void this.setParams({});this._error(ce,Ne)}_error(ce,be){(ce?P.reportExtraError:P.reportError)(this,this.def.error,be)}$dataError(){(0,P.reportError)(this,this.def.$dataError||P.keyword$DataError)}reset(){if(void 0===this.errsCount)throw new Error('add "trackErrors" to keyword definition');(0,P.resetErrorsCount)(this.gen,this.errsCount)}ok(ce){this.allErrors||this.gen.if(ce)}setParams(ce,be){be?Object.assign(this.params,ce):this.params=ce}block$data(ce,be,Ne=b.nil){this.gen.block(()=>{this.check$data(ce,Ne),be()})}check$data(ce=b.nil,be=b.nil){if(!this.$data)return;const{gen:Ne,schemaCode:Fe,schemaType:lt,def:Ge}=this;Ne.if((0,b.or)(b._`${Fe} === undefined`,be)),ce!==b.nil&&Ne.assign(ce,!0),(lt.length||Ge.validateSchema)&&(Ne.elseIf(this.invalid$data()),this.$dataError(),ce!==b.nil&&Ne.assign(ce,!1)),Ne.else()}invalid$data(){const{gen:ce,schemaCode:be,schemaType:Ne,def:Fe,it:lt}=this;return(0,b.or)(function Ge(){if(Ne.length){if(!(be instanceof b.Name))throw new Error("ajv implementation error");const Ht=Array.isArray(Ne)?Ne:[Ne];return b._`${(0,E.checkDataTypes)(Ht,be,lt.opts.strictNumbers,E.DataType.Wrong)}`}return b.nil}(),function He(){if(Fe.validateSchema){const Ht=ce.scopeValue("validate$data",{ref:Fe.validateSchema});return b._`!${Ht}(${be})`}return b.nil}())}subschema(ce,be){const Ne=(0,y.getSubschema)(this.it,ce);(0,y.extendSubschemaData)(Ne,this.it,ce),(0,y.extendSubschemaMode)(Ne,ce);const Fe={...this.it,...Ne,items:void 0,props:void 0};return Z(Fe,be),Fe}mergeEvaluated(ce,be){const{it:Ne,gen:Fe}=this;Ne.opts.unevaluated&&(!0!==Ne.props&&void 0!==ce.props&&(Ne.props=A.mergeEvaluated.props(Fe,ce.props,Ne.props,be)),!0!==Ne.items&&void 0!==ce.items&&(Ne.items=A.mergeEvaluated.items(Fe,ce.items,Ne.items,be)))}mergeValidEvaluated(ce,be){const{it:Ne,gen:Fe}=this;if(Ne.opts.unevaluated&&(!0!==Ne.props||!0!==Ne.items))return Fe.if(be,()=>this.mergeEvaluated(ce,b.Name)),!0}}function ve(Se,ce,be,Ne){const Fe=new ye(Se,be,ce);"code"in be?be.code(Fe,Ne):Fe.$data&&be.validate?(0,m.funcKeywordCode)(Fe,be):"macro"in be?(0,m.macroKeywordCode)(Fe,be):(be.compile||be.validate)&&(0,m.funcKeywordCode)(Fe,be)}s.KeywordCxt=ye;const ae=/^\/(?:[^~]|~0|~1)*$/,fe=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function ge(Se,{dataLevel:ce,dataNames:be,dataPathArr:Ne}){let Fe,lt;if(""===Se)return S.default.rootData;if("/"===Se[0]){if(!ae.test(Se))throw new Error(`Invalid JSON-pointer: ${Se}`);Fe=Se,lt=S.default.rootData}else{const et=fe.exec(Se);if(!et)throw new Error(`Invalid JSON-pointer: ${Se}`);const tt=+et[1];if(Fe=et[2],"#"===Fe){if(tt>=ce)throw new Error(Ht("property/index",tt));return Ne[ce-tt]}if(tt>ce)throw new Error(Ht("data",tt));if(lt=be[ce-tt],!Fe)return lt}let Ge=lt;const He=Fe.split("/");for(const et of He)et&&(lt=b._`${lt}${(0,b.getProperty)((0,A.unescapeJsonPointer)(et))}`,Ge=b._`${Ge} && ${lt}`);return Ge;function Ht(et,tt){return`Cannot access ${et} ${tt} levels up, current level is ${ce}`}}s.getData=ge},22707:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.validateKeywordUsage=s.validSchemaType=s.funcKeywordCode=s.macroKeywordCode=void 0;const h=p(56382),M=p(5976),w=p(92812),E=p(75091);function y(x){const{gen:T,data:L,it:N}=x;T.if(N.parentData,()=>T.assign(L,h._`${N.parentData}[${N.parentDataProperty}]`))}function _(x,T,L){if(void 0===L)throw new Error(`keyword "${T}" failed to compile`);return x.scopeValue("keyword","function"==typeof L?{ref:L}:{ref:L,code:(0,h.stringify)(L)})}s.macroKeywordCode=function u(x,T){const{gen:L,keyword:N,schema:j,parentSchema:B,it:V}=x,Z=T.macro.call(V.self,j,B,V),G=_(L,N,Z);!1!==V.opts.validateSchema&&V.self.validateSchema(Z,!0);const X=L.name("valid");x.subschema({schema:Z,schemaPath:h.nil,errSchemaPath:`${V.errSchemaPath}/${N}`,topSchemaRef:G,compositeRule:!0},X),x.pass(X,()=>x.error(!0))},s.funcKeywordCode=function m(x,T){var L;const{gen:N,keyword:j,schema:B,parentSchema:V,$data:Z,it:G}=x;!function S({schemaEnv:x},T){if(T.async&&!x.$async)throw new Error("async keyword in sync schema")}(G,T);const X=!Z&&T.compile?T.compile.call(G.self,B,V,G):T.validate,q=_(N,j,X),Q=N.let("valid");function o(d=(T.async?h._`await `:h.nil)){const g=G.opts.passContext?M.default.this:M.default.self,D=!("compile"in T&&!Z||!1===T.schema);N.assign(Q,h._`${d}${(0,w.callValidateCode)(x,q,g,D)}`,T.modifying)}function a(d){var g;N.if((0,h.not)(null!==(g=T.valid)&&void 0!==g?g:Q),d)}x.block$data(Q,function Y(){if(!1===T.errors)o(),T.modifying&&y(x),a(()=>x.error());else{const d=T.async?function ee(){const d=N.let("ruleErrs",null);return N.try(()=>o(h._`await `),g=>N.assign(Q,!1).if(h._`${g} instanceof ${G.ValidationError}`,()=>N.assign(d,h._`${g}.errors`),()=>N.throw(g))),d}():function I(){const d=h._`${q}.errors`;return N.assign(d,null),o(h.nil),d}();T.modifying&&y(x),a(()=>function b(x,T){const{gen:L}=x;L.if(h._`Array.isArray(${T})`,()=>{L.assign(M.default.vErrors,h._`${M.default.vErrors} === null ? ${T} : ${M.default.vErrors}.concat(${T})`).assign(M.default.errors,h._`${M.default.vErrors}.length`),(0,E.extendErrors)(x)},()=>x.error())}(x,d))}}),x.ok(null!==(L=T.valid)&&void 0!==L?L:Q)},s.validSchemaType=function A(x,T,L=!1){return!T.length||T.some(N=>"array"===N?Array.isArray(x):"object"===N?x&&"object"==typeof x&&!Array.isArray(x):typeof x==N||L&&typeof x>"u")},s.validateKeywordUsage=function P({schema:x,opts:T,self:L,errSchemaPath:N},j,B){if(Array.isArray(j.keyword)?!j.keyword.includes(B):j.keyword!==B)throw new Error("ajv implementation error");const V=j.dependencies;if(V?.some(Z=>!Object.prototype.hasOwnProperty.call(x,Z)))throw new Error(`parent schema must have dependencies of ${B}: ${V.join(",")}`);if(j.validateSchema&&!j.validateSchema(x[B])){const G=`keyword "${B}" value is invalid at path "${N}": `+L.errorsText(j.validateSchema.errors);if("log"!==T.validateSchema)throw new Error(G);L.logger.error(G)}}},62639:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.extendSubschemaMode=s.extendSubschemaData=s.getSubschema=void 0;const h=p(56382),M=p(97990);s.getSubschema=function w(m,{keyword:y,schemaProp:b,schema:S,schemaPath:_,errSchemaPath:A,topSchemaRef:P}){if(void 0!==y&&void 0!==S)throw new Error('both "keyword" and "schema" passed, only one allowed');if(void 0!==y){const x=m.schema[y];return void 0===b?{schema:x,schemaPath:h._`${m.schemaPath}${(0,h.getProperty)(y)}`,errSchemaPath:`${m.errSchemaPath}/${y}`}:{schema:x[b],schemaPath:h._`${m.schemaPath}${(0,h.getProperty)(y)}${(0,h.getProperty)(b)}`,errSchemaPath:`${m.errSchemaPath}/${y}/${(0,M.escapeFragment)(b)}`}}if(void 0!==S){if(void 0===_||void 0===A||void 0===P)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:S,schemaPath:_,topSchemaRef:P,errSchemaPath:A}}throw new Error('either "keyword" or "schema" must be passed')},s.extendSubschemaData=function E(m,y,{dataProp:b,dataPropType:S,data:_,dataTypes:A,propertyName:P}){if(void 0!==_&&void 0!==b)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:x}=y;if(void 0!==b){const{errorPath:L,dataPathArr:N,opts:j}=y;T(x.let("data",h._`${y.data}${(0,h.getProperty)(b)}`,!0)),m.errorPath=h.str`${L}${(0,M.getErrorPath)(b,S,j.jsPropertySyntax)}`,m.parentDataProperty=h._`${b}`,m.dataPathArr=[...N,m.parentDataProperty]}if(void 0!==_){T(_ instanceof h.Name?_:x.let("data",_,!0)),void 0!==P&&(m.propertyName=P)}function T(L){m.data=L,m.dataLevel=y.dataLevel+1,m.dataTypes=[],y.definedProperties=new Set,m.parentData=y.data,m.dataNames=[...y.dataNames,L]}A&&(m.dataTypes=A)},s.extendSubschemaMode=function u(m,{jtdDiscriminator:y,jtdMetadata:b,compositeRule:S,createErrors:_,allErrors:A}){void 0!==S&&(m.compositeRule=S),void 0!==_&&(m.createErrors=_),void 0!==A&&(m.allErrors=A),m.jtdDiscriminator=y,m.jtdMetadata=b}},25910:(ne,s,p)=>{"use strict";var h=p(59344).default;Object.defineProperty(s,"__esModule",{value:!0}),s.CodeGen=s.Name=s.nil=s.stringify=s.str=s._=s.KeywordCxt=void 0;var M=p(66764);Object.defineProperty(s,"KeywordCxt",{enumerable:!0,get:function(){return M.KeywordCxt}});var w=p(56382);Object.defineProperty(s,"_",{enumerable:!0,get:function(){return w._}}),Object.defineProperty(s,"str",{enumerable:!0,get:function(){return w.str}}),Object.defineProperty(s,"stringify",{enumerable:!0,get:function(){return w.stringify}}),Object.defineProperty(s,"nil",{enumerable:!0,get:function(){return w.nil}}),Object.defineProperty(s,"Name",{enumerable:!0,get:function(){return w.Name}}),Object.defineProperty(s,"CodeGen",{enumerable:!0,get:function(){return w.CodeGen}});const E=p(20496),u=p(80140),m=p(62848),y=p(17140),b=p(56382),S=p(31880),_=p(59078),A=p(97990),P=p(64775),x=p(51364),T=(k,se)=>new RegExp(k,se);T.code="new RegExp";const L=["removeAdditional","useDefaults","coerceTypes"],N=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),j={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},B={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},V=200;function Z(k){var se,te,oe,de,Ie,ye,ve,ae,fe,ge,Se,ce,be,Ne,Fe,lt,Ge,He,Ht,et,tt,Yt,ot,at,Xt;const Re=k.strict,Ae=null===(se=k.code)||void 0===se?void 0:se.optimize,Te=!0===Ae||void 0===Ae?1:Ae||0,Be=null!==(oe=null===(te=k.code)||void 0===te?void 0:te.regExp)&&void 0!==oe?oe:T,Ve=null!==(de=k.uriResolver)&&void 0!==de?de:x.default;return{strictSchema:null===(ye=null!==(Ie=k.strictSchema)&&void 0!==Ie?Ie:Re)||void 0===ye||ye,strictNumbers:null===(ae=null!==(ve=k.strictNumbers)&&void 0!==ve?ve:Re)||void 0===ae||ae,strictTypes:null!==(ge=null!==(fe=k.strictTypes)&&void 0!==fe?fe:Re)&&void 0!==ge?ge:"log",strictTuples:null!==(ce=null!==(Se=k.strictTuples)&&void 0!==Se?Se:Re)&&void 0!==ce?ce:"log",strictRequired:null!==(Ne=null!==(be=k.strictRequired)&&void 0!==be?be:Re)&&void 0!==Ne&&Ne,code:k.code?{...k.code,optimize:Te,regExp:Be}:{optimize:Te,regExp:Be},loopRequired:null!==(Fe=k.loopRequired)&&void 0!==Fe?Fe:V,loopEnum:null!==(lt=k.loopEnum)&&void 0!==lt?lt:V,meta:null===(Ge=k.meta)||void 0===Ge||Ge,messages:null===(He=k.messages)||void 0===He||He,inlineRefs:null===(Ht=k.inlineRefs)||void 0===Ht||Ht,schemaId:null!==(et=k.schemaId)&&void 0!==et?et:"$id",addUsedSchema:null===(tt=k.addUsedSchema)||void 0===tt||tt,validateSchema:null===(Yt=k.validateSchema)||void 0===Yt||Yt,validateFormats:null===(ot=k.validateFormats)||void 0===ot||ot,unicodeRegExp:null===(at=k.unicodeRegExp)||void 0===at||at,int32range:null===(Xt=k.int32range)||void 0===Xt||Xt,uriResolver:Ve}}class G{constructor(se={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,se=this.opts={...se,...Z(se)};const{es5:te,lines:oe}=this.opts.code;this.scope=new b.ValueScope({scope:{},prefixes:N,es5:te,lines:oe}),this.logger=function a(k){if(!1===k)return o;if(void 0===k)return console;if(k.log&&k.warn&&k.error)return k;throw new Error("logger must implement log, warn and error methods")}(se.logger);const de=se.validateFormats;se.validateFormats=!1,this.RULES=(0,m.getRules)(),X.call(this,j,se,"NOT SUPPORTED"),X.call(this,B,se,"DEPRECATED","warn"),this._metaOpts=I.call(this),se.formats&&Y.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),se.keywords&&ee.call(this,se.keywords),"object"==typeof se.meta&&this.addMetaSchema(se.meta),Q.call(this),se.validateFormats=de}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:se,meta:te,schemaId:oe}=this.opts;let de=P;"id"===oe&&(de={...P},de.id=de.$id,delete de.$id),te&&se&&this.addMetaSchema(de,de[oe],!1)}defaultMeta(){const{meta:se,schemaId:te}=this.opts;return this.opts.defaultMeta="object"==typeof se?se[te]||se:void 0}validate(se,te){let oe;if("string"==typeof se){if(oe=this.getSchema(se),!oe)throw new Error(`no schema with key or ref "${se}"`)}else oe=this.compile(se);const de=oe(te);return"$async"in oe||(this.errors=oe.errors),de}compile(se,te){const oe=this._addSchema(se,te);return oe.validate||this._compileSchemaEnv(oe)}compileAsync(se,te){if("function"!=typeof this.opts.loadSchema)throw new Error("options.loadSchema should be a function");const{loadSchema:oe}=this.opts;return de.call(this,se,te);function de(Fe,lt){return Ie.apply(this,arguments)}function Ie(){return(Ie=h(function*(Fe,lt){yield ye.call(this,Fe.$schema);const Ge=this._addSchema(Fe,lt);return Ge.validate||ae.call(this,Ge)})).apply(this,arguments)}function ye(Fe){return ve.apply(this,arguments)}function ve(){return(ve=h(function*(Fe){Fe&&!this.getSchema(Fe)&&(yield de.call(this,{$ref:Fe},!0))})).apply(this,arguments)}function ae(Fe){return fe.apply(this,arguments)}function fe(){return(fe=h(function*(Fe){try{return this._compileSchemaEnv(Fe)}catch(lt){if(!(lt instanceof u.default))throw lt;return ge.call(this,lt),yield Se.call(this,lt.missingSchema),ae.call(this,Fe)}})).apply(this,arguments)}function ge({missingSchema:Fe,missingRef:lt}){if(this.refs[Fe])throw new Error(`AnySchema ${Fe} is loaded but ${lt} cannot be resolved`)}function Se(Fe){return ce.apply(this,arguments)}function ce(){return(ce=h(function*(Fe){const lt=yield be.call(this,Fe);this.refs[Fe]||(yield ye.call(this,lt.$schema)),this.refs[Fe]||this.addSchema(lt,Fe,te)})).apply(this,arguments)}function be(Fe){return Ne.apply(this,arguments)}function Ne(){return(Ne=h(function*(Fe){const lt=this._loading[Fe];if(lt)return lt;try{return yield this._loading[Fe]=oe(Fe)}finally{delete this._loading[Fe]}})).apply(this,arguments)}}addSchema(se,te,oe,de=this.opts.validateSchema){if(Array.isArray(se)){for(const ye of se)this.addSchema(ye,void 0,oe,de);return this}let Ie;if("object"==typeof se){const{schemaId:ye}=this.opts;if(Ie=se[ye],void 0!==Ie&&"string"!=typeof Ie)throw new Error(`schema ${ye} must be string`)}return te=(0,S.normalizeId)(te||Ie),this._checkUnique(te),this.schemas[te]=this._addSchema(se,oe,te,de,!0),this}addMetaSchema(se,te,oe=this.opts.validateSchema){return this.addSchema(se,te,!0,oe),this}validateSchema(se,te){if("boolean"==typeof se)return!0;let oe;if(oe=se.$schema,void 0!==oe&&"string"!=typeof oe)throw new Error("$schema must be a string");if(oe=oe||this.opts.defaultMeta||this.defaultMeta(),!oe)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const de=this.validate(oe,se);if(!de&&te){const Ie="schema is invalid: "+this.errorsText();if("log"!==this.opts.validateSchema)throw new Error(Ie);this.logger.error(Ie)}return de}getSchema(se){let te;for(;"string"==typeof(te=q.call(this,se));)se=te;if(void 0===te){const{schemaId:oe}=this.opts,de=new y.SchemaEnv({schema:{},schemaId:oe});if(te=y.resolveSchema.call(this,de,se),!te)return;this.refs[se]=te}return te.validate||this._compileSchemaEnv(te)}removeSchema(se){if(se instanceof RegExp)return this._removeAllSchemas(this.schemas,se),this._removeAllSchemas(this.refs,se),this;switch(typeof se){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const te=q.call(this,se);return"object"==typeof te&&this._cache.delete(te.schema),delete this.schemas[se],delete this.refs[se],this}case"object":{const te=se;this._cache.delete(te);let oe=se[this.opts.schemaId];return oe&&(oe=(0,S.normalizeId)(oe),delete this.schemas[oe],delete this.refs[oe]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(se){for(const te of se)this.addKeyword(te);return this}addKeyword(se,te){let oe;if("string"==typeof se)oe=se,"object"==typeof te&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),te.keyword=oe);else{if("object"!=typeof se||void 0!==te)throw new Error("invalid addKeywords parameters");if(oe=(te=se).keyword,Array.isArray(oe)&&!oe.length)throw new Error("addKeywords: keyword must be string or non-empty array")}if(g.call(this,oe,te),!te)return(0,A.eachItem)(oe,Ie=>D.call(this,Ie)),this;z.call(this,te);const de={...te,type:(0,_.getJSONTypes)(te.type),schemaType:(0,_.getJSONTypes)(te.schemaType)};return(0,A.eachItem)(oe,0===de.type.length?Ie=>D.call(this,Ie,de):Ie=>de.type.forEach(ye=>D.call(this,Ie,de,ye))),this}getKeyword(se){const te=this.RULES.all[se];return"object"==typeof te?te.definition:!!te}removeKeyword(se){const{RULES:te}=this;delete te.keywords[se],delete te.all[se];for(const oe of te.rules){const de=oe.rules.findIndex(Ie=>Ie.keyword===se);de>=0&&oe.rules.splice(de,1)}return this}addFormat(se,te){return"string"==typeof te&&(te=new RegExp(te)),this.formats[se]=te,this}errorsText(se=this.errors,{separator:te=", ",dataVar:oe="data"}={}){return se&&0!==se.length?se.map(de=>`${oe}${de.instancePath} ${de.message}`).reduce((de,Ie)=>de+te+Ie):"No errors"}$dataMetaSchema(se,te){const oe=this.RULES.all;se=JSON.parse(JSON.stringify(se));for(const de of te){const Ie=de.split("/").slice(1);let ye=se;for(const ve of Ie)ye=ye[ve];for(const ve in oe){const ae=oe[ve];if("object"!=typeof ae)continue;const{$data:fe}=ae.definition,ge=ye[ve];fe&&ge&&(ye[ve]=f(ge))}}return se}_removeAllSchemas(se,te){for(const oe in se){const de=se[oe];(!te||te.test(oe))&&("string"==typeof de?delete se[oe]:de&&!de.meta&&(this._cache.delete(de.schema),delete se[oe]))}}_addSchema(se,te,oe,de=this.opts.validateSchema,Ie=this.opts.addUsedSchema){let ye;const{schemaId:ve}=this.opts;if("object"==typeof se)ye=se[ve];else{if(this.opts.jtd)throw new Error("schema must be object");if("boolean"!=typeof se)throw new Error("schema must be object or boolean")}let ae=this._cache.get(se);if(void 0!==ae)return ae;oe=(0,S.normalizeId)(ye||oe);const fe=S.getSchemaRefs.call(this,se,oe);return ae=new y.SchemaEnv({schema:se,schemaId:ve,meta:te,baseId:oe,localRefs:fe}),this._cache.set(ae.schema,ae),Ie&&!oe.startsWith("#")&&(oe&&this._checkUnique(oe),this.refs[oe]=ae),de&&this.validateSchema(se,!0),ae}_checkUnique(se){if(this.schemas[se]||this.refs[se])throw new Error(`schema with key or id "${se}" already exists`)}_compileSchemaEnv(se){if(se.meta?this._compileMetaSchema(se):y.compileSchema.call(this,se),!se.validate)throw new Error("ajv implementation error");return se.validate}_compileMetaSchema(se){const te=this.opts;this.opts=this._metaOpts;try{y.compileSchema.call(this,se)}finally{this.opts=te}}}function X(k,se,te,oe="error"){for(const de in k){const Ie=de;Ie in se&&this.logger[oe](`${te}: option ${de}. ${k[Ie]}`)}}function q(k){return k=(0,S.normalizeId)(k),this.schemas[k]||this.refs[k]}function Q(){const k=this.opts.schemas;if(k)if(Array.isArray(k))this.addSchema(k);else for(const se in k)this.addSchema(k[se],se)}function Y(){for(const k in this.opts.formats){const se=this.opts.formats[k];se&&this.addFormat(k,se)}}function ee(k){if(Array.isArray(k))this.addVocabulary(k);else{this.logger.warn("keywords option as map is deprecated, pass array");for(const se in k){const te=k[se];te.keyword||(te.keyword=se),this.addKeyword(te)}}}function I(){const k={...this.opts};for(const se of L)delete k[se];return k}s.default=G,G.ValidationError=E.default,G.MissingRefError=u.default;const o={log(){},warn(){},error(){}};const d=/^[a-z_$][a-z0-9_$:-]*$/i;function g(k,se){const{RULES:te}=this;if((0,A.eachItem)(k,oe=>{if(te.keywords[oe])throw new Error(`Keyword ${oe} is already defined`);if(!d.test(oe))throw new Error(`Keyword ${oe} has invalid name`)}),se&&se.$data&&!("code"in se)&&!("validate"in se))throw new Error('$data keyword must have "code" or "validate" function')}function D(k,se,te){var oe;const de=se?.post;if(te&&de)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:Ie}=this;let ye=de?Ie.post:Ie.rules.find(({type:ae})=>ae===te);if(ye||(ye={type:te,rules:[]},Ie.rules.push(ye)),Ie.keywords[k]=!0,!se)return;const ve={keyword:k,definition:{...se,type:(0,_.getJSONTypes)(se.type),schemaType:(0,_.getJSONTypes)(se.schemaType)}};se.before?F.call(this,ye,ve,se.before):ye.rules.push(ve),Ie.all[k]=ve,null===(oe=se.implements)||void 0===oe||oe.forEach(ae=>this.addKeyword(ae))}function F(k,se,te){const oe=k.rules.findIndex(de=>de.keyword===te);oe>=0?k.rules.splice(oe,0,se):(k.rules.push(se),this.logger.warn(`rule ${te} is not defined`))}function z(k){let{metaSchema:se}=k;void 0!==se&&(k.$data&&this.opts.$data&&(se=f(se)),k.validateSchema=this.compile(se,!0))}const C={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function f(k){return{anyOf:[k,C]}}},40834:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const h=p(12559);h.code='require("ajv/dist/runtime/equal").default',s.default=h},26344:(ne,s)=>{"use strict";function p(h){const M=h.length;let u,w=0,E=0;for(;E<M;)w++,u=h.charCodeAt(E++),u>=55296&&u<=56319&&E<M&&(u=h.charCodeAt(E),56320==(64512&u)&&E++);return w}Object.defineProperty(s,"__esModule",{value:!0}),s.default=p,p.code='require("ajv/dist/runtime/ucs2length").default'},51364:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const h=p(96482);h.code='require("ajv/dist/runtime/uri").default',s.default=h},20496:(ne,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});class p extends Error{constructor(M){super("validation failed"),this.errors=M,this.ajv=this.validation=!0}}s.default=p},29282:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.validateAdditionalItems=void 0;const h=p(56382),M=p(97990),E={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:m}})=>h.str`must NOT have more than ${m} items`,params:({params:{len:m}})=>h._`{limit: ${m}}`},code(m){const{parentSchema:y,it:b}=m,{items:S}=y;Array.isArray(S)?u(m,S):(0,M.checkStrictMode)(b,'"additionalItems" is ignored when "items" is not an array of schemas')}};function u(m,y){const{gen:b,schema:S,data:_,keyword:A,it:P}=m;P.items=!0;const x=b.const("len",h._`${_}.length`);if(!1===S)m.setParams({len:y.length}),m.pass(h._`${x} <= ${y.length}`);else if("object"==typeof S&&!(0,M.alwaysValidSchema)(P,S)){const L=b.var("valid",h._`${x} <= ${y.length}`);b.if((0,h.not)(L),()=>function T(L){b.forRange("i",y.length,x,N=>{m.subschema({keyword:A,dataProp:N,dataPropType:M.Type.Num},L),P.allErrors||b.if((0,h.not)(L),()=>b.break())})}(L)),m.ok(L)}}s.validateAdditionalItems=u,s.default=E},75459:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const h=p(92812),M=p(56382),w=p(5976),E=p(97990),m={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:y})=>M._`{additionalProperty: ${y.additionalProperty}}`},code(y){const{gen:b,schema:S,parentSchema:_,data:A,errsCount:P,it:x}=y;if(!P)throw new Error("ajv implementation error");const{allErrors:T,opts:L}=x;if(x.props=!0,"all"!==L.removeAdditional&&(0,E.alwaysValidSchema)(x,S))return;const N=(0,h.allSchemaProperties)(_.properties),j=(0,h.allSchemaProperties)(_.patternProperties);function Z(q){b.code(M._`delete ${A}[${q}]`)}function G(q){if("all"===L.removeAdditional||L.removeAdditional&&!1===S)Z(q);else{if(!1===S)return y.setParams({additionalProperty:q}),y.error(),void(T||b.break());if("object"==typeof S&&!(0,E.alwaysValidSchema)(x,S)){const Q=b.name("valid");"failing"===L.removeAdditional?(X(q,Q,!1),b.if((0,M.not)(Q),()=>{y.reset(),Z(q)})):(X(q,Q),T||b.if((0,M.not)(Q),()=>b.break()))}}}function X(q,Q,Y){const ee={keyword:"additionalProperties",dataProp:q,dataPropType:E.Type.Str};!1===Y&&Object.assign(ee,{compositeRule:!0,createErrors:!1,allErrors:!1}),y.subschema(ee,Q)}(function B(){b.forIn("key",A,q=>{N.length||j.length?b.if(function V(q){let Q;if(N.length>8){const Y=(0,E.schemaRefOrVal)(x,_.properties,"properties");Q=(0,h.isOwnProperty)(b,Y,q)}else Q=N.length?(0,M.or)(...N.map(Y=>M._`${q} === ${Y}`)):M.nil;return j.length&&(Q=(0,M.or)(Q,...j.map(Y=>M._`${(0,h.usePattern)(y,Y)}.test(${q})`))),(0,M.not)(Q)}(q),()=>G(q)):G(q)})})(),y.ok(M._`${P} === ${w.default.errors}`)}};s.default=m},46186:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const h=p(97990),M={keyword:"allOf",schemaType:"array",code(w){const{gen:E,schema:u,it:m}=w;if(!Array.isArray(u))throw new Error("ajv implementation error");const y=E.name("valid");u.forEach((b,S)=>{if((0,h.alwaysValidSchema)(m,b))return;const _=w.subschema({keyword:"allOf",schemaProp:S},y);w.ok(y),w.mergeEvaluated(_)})}};s.default=M},60290:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const M={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:p(92812).validateUnion,error:{message:"must match a schema in anyOf"}};s.default=M},25738:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});const h=p(56382),M=p(97990),E={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:u,max:m}})=>void 0===m?h.str`must contain at least ${u} valid item(s)`:h.str`must contain at least ${u} and no more than ${m} valid item(s)`,params:({params:{min:u,max:m}})=>void 0===m?h._`{minContains: ${u}}`:h._`{minContains: ${u}, maxContains: ${m}}`},code(u){const{gen:m,schema:y,parentSchema:b,data:S,it:_}=u;let A,P;const{minContains:x,maxContains:T}=b;_.opts.next?(A=void 0===x?1:x,P=T):A=1;const L=m.const("len",h._`${S}.length`);if(u.setParams({min:A,max:P}),void 0===P&&0===A)return void(0,M.checkStrictMode)(_,'"minContains" == 0 without "maxContains": "contains" keyword ignored');if(void 0!==P&&A>P)return(0,M.checkStrictMode)(_,'"minContains" > "maxContains" is always invalid'),void u.fail();if((0,M.alwaysValidSchema)(_,y)){let Z=h._`${L} >= ${A}`;return void 0!==P&&(Z=h._`${Z} && ${L} <= ${P}`),void u.pass(Z)}_.items=!0;const N=m.name("valid");function j(){const Z=m.name("_valid"),G=m.let("count",0);B(Z,()=>m.if(Z,()=>function V(Z){m.code(h._`${Z}++`),void 0===P?m.if(h._`${Z} >= ${A}`,()=>m.assign(N,!0).break()):(m.if(h._`${Z} > ${P}`,()=>m.assign(N,!1).break()),1===A?m.assign(N,!0):m.if(h._`${Z} >= ${A}`,()=>m.assign(N,!0)))}(G)))}function B(Z,G){m.forRange("i",0,L,X=>{u.subschema({keyword:"contains",dataProp:X,dataPropType:M.Type.Num,compositeRule:!0},Z),G()})}void 0===P&&1===A?B(N,()=>m.if(N,()=>m.break())):0===A?(m.let(N,!0),void 0!==P&&m.if(h._`${S}.length > 0`,j)):(m.let(N,!1),j()),u.result(N,()=>u.reset())}};s.default=E},1886:(ne,s,p)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.validateSchemaDeps=s.validatePropertyDeps=s.error=void 0;const h=p(56382),M=p(97990),w=p(92812);s.error={message:({params:{property:b,depsCount:S,deps:_}})=>{const A=1===S?"property":"properties";return h.str`must have ${A} ${_} when property ${b} is present`},params:({params:{property:b,depsCount:S,deps:_,missingProperty:A}})=>h._`{property: ${b},
    missingProperty: ${A},
    depsCount: ${S},
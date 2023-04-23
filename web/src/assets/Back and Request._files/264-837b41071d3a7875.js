"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{34388:function(e,t,n){n.d(t,{T:function(){return o}});function o(e){return void 0!==e.userMessage}},33264:function(e,t,n){var o=n(61706),a=n(35025),i=n(9135),s=n(31501),r=n(61079),c=n(42928),h=n(45813),u=n(48879),d=n(44928);n(138);var p=n(34388),l=n(49674),f="https://chat.openai.com/backend-api",g=["cf-ipcountry"],m=function(){function e(){(0,a.Z)(this,e)}return e.setAccessToken=function(e){this.accessToken=e},e.getAuthHeader=function(e){var t=e||this.accessToken;if(!t)throw console.error("No access token when trying to use AuthHeader"),Error("No access token when trying to use AuthHeader");return{Authorization:"Bearer ".concat(t)}},e.refreshApiKey=function(){var e=this;if(this.apiKeyRefreshing)return this.apiKeyRefreshing;var t=this;return this.apiKeyRefreshing=(0,o.Z)(function(){var e;return(0,h.__generator)(this,function(n){switch(n.label){case 0:return[4,(0,d.getSession)()];case 1:return(e=n.sent())&&t.setAccessToken(e.accessToken),[2];case 2:throw Error("Cannot refresh access token outside of browser");case 3:return[2]}})})(),setTimeout(function(){e.apiKeyRefreshing=null},6e4),this.apiKeyRefreshing},e.fetch=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=this;return(0,o.Z)(function(){var o,i,c,u,d,p;return(0,h.__generator)(this,function(h){switch(h.label){case 0:return[4,fetch(e,o=(0,s.Z)({credentials:"include"},t))];case 1:if((i=h.sent()).status>=500)throw new l.kb;if(!(i.status>=400))return[3,12];h.label=2;case 2:return h.trys.push([2,4,,5]),[4,i.json()];case 3:return c=(null==(u=h.sent())?void 0:u.detail)||(null==u?void 0:u.error),[3,5];case 4:return d=h.sent(),console.error("Failed to parse error response",d),[3,5];case 5:if(console.error("API error",e,c),!((null==c?void 0:c.code)==="expired_session_key"||(null==c?void 0:c.code)==="token_expired"))return[3,11];h.label=6;case 6:if(h.trys.push([6,9,,10]),n.isRetry)return[3,8];return[4,a.refreshApiKey()];case 7:return h.sent(),[2,a.fetch(e,o,(0,r.Z)((0,s.Z)({},n),{isRetry:!0}))];case 8:return[3,10];case 9:return p=h.sent(),console.error("Failed to refresh expired access token: ".concat(p)),[3,10];case 10:console.error("Refresh access token failed when retrieving",e,c),window._oaiHandleSessionExpired("fetch",JSON.stringify(c)),h.label=11;case 11:if(null==c?void 0:c.type)throw new l.gK((null==c?void 0:c.message)||c,i.status,null==c?void 0:c.code,null==c?void 0:c.type);throw new l.kb;case 12:if(204===i.status)return[2,{}];return[2,i.json()]}})})()},e.getArtifacts=function(){return this.fetch("".concat(f,"/artifacts"),{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader())})},e.createArtifact=function(e){return this.fetch("".concat(f,"/artifacts"),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({url:e,contents:"\n"})})},e.upload=function(e,t,n,o){var a=new FormData;return t&&a.append("conversation_id",t),a.append("model",n),a.append("parent_message_id",e),a.append("file",o),this.fetch("".concat(f,"/conversation/upload"),{method:"POST",headers:(0,s.Z)({},this.getAuthHeader()),body:a})},e.fetchFileForDownload=function(e,t){var n=new URLSearchParams({path:t});return fetch("".concat(f,"/conversation/").concat(e,"/download?").concat(n),{method:"GET",headers:(0,s.Z)({},this.getAuthHeader())})},e.checkFile=function(e,t){var n=new URLSearchParams({path:t});return this.fetch("".concat(f,"/conversation/").concat(e,"/check_file?").concat(n),{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader())})},e.sendDocument=function(){return this.fetch("".concat(f,"/private"),{method:"GET",headers:{"Content-Type":"application/json"}})},e.getRetrievalResults=function(e){return this.fetch("".concat(f,"/retrieval/public_data"),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({query:e})})},e.getModels=function(e){return this.fetch("".concat(f,"/models"),{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(e))})},e.getConversations=function(e,t,n){var o=new URLSearchParams({offset:e.toString(),limit:t.toString()});return this.fetch("".concat(f,"/conversations?").concat(o),{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(n))})},e.getConversation=function(e,t){return this.fetch("".concat(f,"/conversation/").concat(e),{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(t))})},e.generateTitle=function(e,t,n){return this.fetch("".concat(f,"/conversation/gen_title/").concat(e),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({message_id:t})})},e.patchConversation=function(e,t){return this.fetch("".concat(f,"/conversation/").concat(e),{method:"PATCH",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify(t)})},e.deleteConversations=function(){return this.fetch("".concat(f,"/conversations"),{method:"PATCH",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({is_visible:!1})})},e.getLoginLink=function(e){return this.fetch("".concat(f,"/bypass/link"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})})},e.publicApiCompletionStream=function(e,t){var n=this;return(0,o.Z)(function(){var a,r,c;return(0,h.__generator)(this,function(c){return a=new AbortController,r={action:e.completionType,messages:e.messages.length>0?e.messages:void 0,conversation_id:e.threadId,parent_message_id:e.parentMessageId,model:e.model,plugin_ids:e.threadId?void 0:e.enabledPluginIds,timezone_offset_min:new Date().getTimezoneOffset()},(0,u.L)("".concat("https://chat.openai.com/backend-api","/conversation"),{method:"POST",credentials:"include",headers:(0,s.Z)({"Content-Type":"application/json"},n.getAuthHeader()),body:JSON.stringify(r),signal:a.signal,openWhenHidden:!0,onopen:function(e){return(0,o.Z)(function(){var t,n,o;return(0,h.__generator)(this,function(a){switch(a.label){case 0:if(t=e.headers.get("content-type")||"",e.ok&&t.includes("text/event-stream"))return[2];if(!t.includes("application/json"))return[3,2];return[4,e.json()];case 1:if(n=a.sent(),console.error(n),o=(null==n?void 0:n.error)||(null==n?void 0:n.detail)){if(e.status>=500)throw new l.kb((null==o?void 0:o.message)||o);throw((null==o?void 0:o.code)==="expired_session_key"||(null==o?void 0:o.code)==="invalid_api_key"||(null==o?void 0:o.code)==="token_expired")&&window._oaiHandleSessionExpired("stream",JSON.stringify(o)),new l.gK((null==o?void 0:o.message)||o,e.status,null==o?void 0:o.code,null==o?void 0:o.type,void 0,null==o?void 0:o.clears_in)}a.label=2;case 2:throw new l.kb}})})()},onmessage:function(e){if("[DONE]"===e.data)a.abort(),t({finish_reason:"stop"});else if("ping"===e.event);else try{var n=JSON.parse(e.data);if(n.error)throw new l.kb(n.error.message);t({message:n.message,threadId:n.conversation_id})}catch(o){if((0,p.T)(o))throw new l.kb(o.message)}},onerror:function(e){throw"Failed to fetch"===e.message&&(e=new l.kb("An error occurred. Either the engine you requested does not exist or there was another issue processing your request. If this issue persists please contact us through our help center at help.openai.com.")),t({err:e}),e}}).catch(function(e){(0,i.Z)(e,l.gK)||(0,i.Z)(e,l.kb)||console.error(e)}),[2,a]})})()},e.runModerationApi=function(e,t,n){return this.fetch("".concat("https://chat.openai.com/backend-api","/moderations"),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({input:e,model:"text-moderation-playground",conversation_id:t,message_id:n})})},e.submitMessageFeedback=function(e){return this.fetch("".concat(f,"/conversation/message_feedback"),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify(e)})},e.submitMessageComparisonFeedback=function(e){return this.fetch("".concat(f,"/conversation/message_comparison_feedback"),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify(e)})},e.submitCheckoutForm=function(){return this.fetch("".concat(f,"/payments/checkout"),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader())})},e.fetchCustomerPortalUrl=function(e){return this.fetch("".concat(f,"/payments/customer_portal"),{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(e))})},e.getPlugins=function(e){var t=e.offset,n=e.limit,o=e.statuses,a=e.isInstalled,i=e.accessToken,r=[["offset",t.toString()],["limit",n.toString()],];if(o){var c=!0,h=!1,u=void 0;try{for(var d,p=o[Symbol.iterator]();!(c=(d=p.next()).done);c=!0){var l=d.value;r.push(["statuses",l])}}catch(g){h=!0,u=g}finally{try{c||null==p.return||p.return()}finally{if(h)throw u}}}a&&r.push(["is_installed","true"]);var m=new URLSearchParams(r);return this.fetch("".concat(f,"/aip/p?").concat(m),{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(i))})},e.getPluginByDomain=function(e){var t=e.domain,n=e.accessToken,o=new URLSearchParams({domain:t});return this.fetch("".concat(f,"/aip/p/domain?").concat(o),{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(n))})},e.createOrUpdateLocalhostPlugin=function(e){var t=e.localhost,n=e.manifest,o=e.openapiSpec,a=e.accessToken;return this.fetch("".concat(f,"/aip/lhp"),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(a)),body:JSON.stringify({localhost:t,manifest:n,openapi_spec:o})})},e.scrapePluginManifest=function(e){var t=e.domain,n=e.manifestAccessToken,o=e.accessToken;return this.fetch("".concat(f,"/aip/p"),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(o)),body:JSON.stringify({domain:t,manifest_access_token:n})})},e.getPluginApi=function(e){var t=e.id,n=e.accessToken;return this.fetch("".concat(f,"/aip/p/").concat(t,"/api"),{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(n))})},e.updatePluginUserSettings=function(e){var t=e.pluginId,n=e.isInstalled,o=e.accessToken;return this.fetch("".concat(f,"/aip/p/").concat(t,"/user-settings"),{method:"PATCH",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(o)),body:JSON.stringify({is_installed:n})})},e.deletePlugin=function(e){var t=e.id,n=e.accessToken;return this.fetch("".concat(f,"/aip/p/").concat(t),{method:"DELETE",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(n))})},e.setPluginUserHttpToken=function(e){var t=e.id,n=e.userAccessToken,o=e.accessToken;return this.fetch("".concat(f,"/aip/p/").concat(t,"/user-settings/http-auth"),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(o)),body:JSON.stringify({access_token:n})})},e.setPluginServiceHttpToken=function(e){var t=e.id,n=e.serviceAccessToken,o=e.accessToken;return this.fetch("".concat(f,"/aip/p/").concat(t,"/http-auth"),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(o)),body:JSON.stringify({access_token:n})})},e.setPluginOAuthClientCredentials=function(e){var t=e.id,n=e.clientId,o=e.clientSecret,a=e.accessToken;return this.fetch("".concat(f,"/aip/p/").concat(t,"/oauth"),{method:"POST",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(a)),body:JSON.stringify({client_id:n,client_secret:o})})},e.getAccountStatus=function(e,t){var n=(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(e));if(t){var o={},a=!0,i=!1,r=void 0;try{for(var h,u=Object.entries(t)[Symbol.iterator]();!(a=(h=u.next()).done);a=!0){var d=(0,c.Z)(h.value,2),p=d[0],l=d[1];g.includes(p.toLowerCase())&&(o[p]=l)}}catch(m){i=!0,r=m}finally{try{a||null==u.return||u.return()}finally{if(i)throw r}}n=(0,s.Z)({},o,n)}return this.fetch("".concat(f,"/accounts/check"),{method:"GET",headers:n})},e.pluginOauthCallback=function(e,t,n,o){var a=new URLSearchParams({code:t,redirect_uri:n});return this.fetch("".concat(f,"/aip/p/").concat(e,"/user-settings/oauth/callback?").concat(a),{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader(o))})},e.getPageMetadata=function(e){var t=e.url;return this.fetch("".concat(f,"/opengraph/tags?url=").concat(encodeURIComponent(t)),{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader())})},e.getModelMessageCap=function(){return this.fetch("https://chat.openai.com/public-api/conversation_limit",{method:"GET",headers:(0,s.Z)({"Content-Type":"application/json"},this.getAuthHeader())})},e}();m.auth0Client=null,t.ZP=m}}]);
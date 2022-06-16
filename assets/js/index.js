window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/towny.axiomthemes.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.0" } };
/*! This file is auto-generated */
!function (e, a, t) { var n, r, o, i = a.createElement("canvas"), p = i.getContext && i.getContext("2d"); function s(e, t) { var a = String.fromCharCode, e = (p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, e), 0, 0), i.toDataURL()); return p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, t), 0, 0), e === i.toDataURL() } function c(e) { var t = a.createElement("script"); t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t) } for (o = Array("flag", "emoji"), t.supports = { everything: !0, everythingExceptFlag: !0 }, r = 0; r < o.length; r++)t.supports[o[r]] = function (e) { if (!p || !p.fillText) return !1; switch (p.textBaseline = "top", p.font = "600 32px Arial", e) { case "flag": return s([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) ? !1 : !s([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !s([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]); case "emoji": return !s([129777, 127995, 8205, 129778, 127999], [129777, 127995, 8203, 129778, 127999]) }return !1 }(o[r]), t.supports.everything = t.supports.everything && t.supports[o[r]], "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]); t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function () { t.DOMReady = !0 }, t.supports.everything || (n = function () { t.readyCallback() }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function () { "complete" === a.readyState && t.readyCallback() })), (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji), c(e.wpemoji))) }(window, document, window._wpemojiSettings);

function setREVStartSize(e) {
    //window.requestAnimationFrame(function() {
    window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
    window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
    try {
        var pw = document.getElementById(e.c).parentNode.offsetWidth,
            newh;
        pw = pw === 0 || isNaN(pw) ? window.RSIW : pw;
        e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
        e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
        e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
        e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
        e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
        e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
        e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
        if (e.layout === "fullscreen" || e.l === "fullscreen")
            newh = Math.max(e.mh, window.RSIH);
        else {
            e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
            for (var i in e.rl) if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
            e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
            e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
            for (var i in e.rl) if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

            var nl = new Array(e.rl.length),
                ix = 0,
                sl;
            e.tabw = e.tabhide >= pw ? 0 : e.tabw;
            e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
            e.tabh = e.tabhide >= pw ? 0 : e.tabh;
            e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
            for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
            sl = nl[0];
            for (var i in nl) if (sl > nl[i] && nl[i] > 0) { sl = nl[i]; ix = i; }
            var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);
            newh = (e.gh[ix] * m) + (e.tabh + e.thumbh);
        }
        var el = document.getElementById(e.c);
        if (el !== null && el) el.style.height = newh + "px";
        el = document.getElementById(e.c + "_wrapper");
        if (el !== null && el) {
            el.style.height = newh + "px";
            el.style.display = "block";
        }
    } catch (e) {
        console.log("Failure at Presize of Slider:" + e)
    }
    //});
};
(function () {
    window.mc4wp = window.mc4wp || {
        listeners: [],
        forms: {
            on: function (evt, cb) {
                window.mc4wp.listeners.push(
                    {
                        event: evt,
                        callback: cb
                    }
                );
            }
        }
    }
})();
window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = true;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = 'compiled';
(function () {
    function maybePrefixUrlField() {
        if (this.value.trim() !== '' && this.value.indexOf('http') !== 0) {
            this.value = "http://" + this.value;
        }
    }

    var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
    if (urlFields) {
        for (var j = 0; j < urlFields.length; j++) {
            urlFields[j].addEventListener('blur', maybePrefixUrlField);
        }
    }
})();
(function () {
    var c = document.body.className;
    c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
    document.body.className = c;
})();

!function(){"use strict";const e=e=>Math.abs(parseInt(e,10)),t=(e,t)=>{const r=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["payment_required","payment-required"]]);r.has(t)&&(t=r.get(t)),Array.from(r.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const n=e.getAttribute("data-status");return e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),n&&n!==t&&e.classList.remove(n),t},r=(e,t,r)=>{const n=new CustomEvent(`wpcf7${t}`,{bubbles:!0,detail:r});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(n)},n=e=>{const{root:t,namespace:r="contact-form-7/v1"}=wpcf7.api;return a.reduceRight(((e,t)=>r=>t(r,e)),(e=>{let n,a,{url:c,path:s,endpoint:o,headers:i,body:l,data:p,...d}=e;"string"==typeof o&&(n=r.replace(/^\/|\/$/g,""),a=o.replace(/^\//,""),s=a?n+"/"+a:n),"string"==typeof s&&(-1!==t.indexOf("?")&&(s=s.replace("?","&")),s=s.replace(/^\//,""),c=t+s),i={Accept:"application/json, */*;q=0.1",...i},delete i["X-WP-Nonce"],p&&(l=JSON.stringify(p),i["Content-Type"]="application/json");const u={code:"fetch_error",message:"You are probably offline."},f={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(c||s||window.location.href,{...d,headers:i,body:l}).then((e=>Promise.resolve(e).then((e=>{if(e.status>=200&&e.status<300)return e;throw e})).then((e=>{if(204===e.status)return null;if(e&&e.json)return e.json().catch((()=>{throw f}));throw f}))),(()=>{throw u}))}))(e)},a=[];function c(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(wpcf7.blocked)return s(e),void t(e,"submitting");const c=new FormData(e);a.submitter&&a.submitter.name&&c.append(a.submitter.name,a.submitter.value);const o={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(c,(e=>{const t=e[0],r=e[1];return!t.match(/^_/)&&{name:t,value:r}})).filter((e=>!1!==e)),formData:c},i=t=>{const r=document.createElement("li");r.setAttribute("id",t.error_id),t.idref?r.insertAdjacentHTML("beforeend",`<a href="#${t.idref}">${t.message}</a>`):r.insertAdjacentText("beforeend",t.message),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(r)},l=t=>{const r=e.querySelector(t.into),n=r.querySelector(".wpcf7-form-control");n.classList.add("wpcf7-not-valid"),n.setAttribute("aria-describedby",t.error_id);const a=document.createElement("span");a.setAttribute("class","wpcf7-not-valid-tip"),a.setAttribute("aria-hidden","true"),a.insertAdjacentText("beforeend",t.message),r.appendChild(a),r.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","true")})),n.closest(".use-floating-validation-tip")&&(n.addEventListener("focus",(e=>{a.setAttribute("style","display: none")})),a.addEventListener("mouseover",(e=>{a.setAttribute("style","display: none")})))};n({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:c,wpcf7:{endpoint:"feedback",form:e,detail:o}}).then((n=>{const a=t(e,n.status);return o.status=n.status,o.apiResponse=n,["invalid","unaccepted","spam","aborted"].includes(a)?r(e,a,o):["sent","failed"].includes(a)&&r(e,`mail${a}`,o),r(e,"submit",o),n})).then((t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&(t.invalid_fields.forEach(i),t.invalid_fields.forEach(l)),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=t.message}))})).catch((e=>console.error(e)))}n.use=e=>{a.unshift(e)},n.use(((e,n)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:n,detail:a}=e.wpcf7;s(n),r(n,"beforesubmit",a),t(n,"submitting")}return n(e)}));const s=e=>{e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText="",e.querySelectorAll(".wpcf7-not-valid-tip").forEach((e=>{e.remove()})),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","false")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid")})),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=""}))};function o(e){const a=new FormData(e),c={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(a,(e=>{const t=e[0],r=e[1];return!t.match(/^_/)&&{name:t,value:r}})).filter((e=>!1!==e)),formData:a};n({endpoint:`contact-forms/${e.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:e,detail:c}}).then((n=>{e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,t(e,"mail_sent")):t(e,"init"),c.apiResponse=n,r(e,"reset",c)})).catch((e=>console.error(e)))}n.use(((e,r)=>{if(e.wpcf7&&"refill"===e.wpcf7.endpoint){const{form:r,detail:n}=e.wpcf7;s(r),t(r,"resetting")}return r(e)}));const i=(e,t)=>{for(const r in t){const n=t[r];e.querySelectorAll(`input[name="${r}"]`).forEach((e=>{e.value=""})),e.querySelectorAll(`img.wpcf7-captcha-${r}`).forEach((e=>{e.setAttribute("src",n)}));const a=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);a&&e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${r}"]`).forEach((e=>{e.value=a[1]}))}},l=(e,t)=>{for(const r in t){const n=t[r][0],a=t[r][1];e.querySelectorAll(`.wpcf7-form-control-wrap.${r}`).forEach((e=>{e.querySelector(`input[name="${r}"]`).value="",e.querySelector(".wpcf7-quiz-label").textContent=n,e.querySelector(`input[name="_wpcf7_quiz_answer_${r}"]`).value=a}))}};function p(t){const r=new FormData(t);t.wpcf7={id:e(r.get("_wpcf7")),status:t.getAttribute("data-status"),pluginVersion:r.get("_wpcf7_version"),locale:r.get("_wpcf7_locale"),unitTag:r.get("_wpcf7_unit_tag"),containerPost:e(r.get("_wpcf7_container_post")),parent:t.closest(".wpcf7")},t.querySelectorAll(".has-spinner").forEach((e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')})),(e=>{e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t=>{t.addEventListener("change",(t=>{const r=t.target.getAttribute("name");e.querySelectorAll(`input[type="checkbox"][name="${r}"]`).forEach((e=>{e!==t.target&&(e.checked=!1)}))}))}))})(t),(e=>{e.querySelectorAll(".has-free-text").forEach((t=>{const r=t.querySelector("input.wpcf7-free-text"),n=t.querySelector('input[type="checkbox"], input[type="radio"]');r.disabled=!n.checked,e.addEventListener("change",(e=>{r.disabled=!n.checked,e.target===n&&n.checked&&r.focus()}))}))})(t),(e=>{e.querySelectorAll(".wpcf7-validates-as-url").forEach((e=>{e.addEventListener("change",(t=>{let r=e.value.trim();r&&!r.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==r.indexOf(".")&&(r=r.replace(/^\/+/,""),r="http://"+r),e.value=r}))}))})(t),(e=>{if(!e.querySelector(".wpcf7-acceptance")||e.classList.contains("wpcf7-acceptance-as-validation"))return;const t=()=>{let t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((e=>{if(!t||e.classList.contains("optional"))return;const r=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&r.checked||!e.classList.contains("invert")&&!r.checked)&&(t=!1)})),e.querySelectorAll(".wpcf7-submit").forEach((e=>{e.disabled=!t}))};t(),e.addEventListener("change",(e=>{t()})),e.addEventListener("wpcf7reset",(e=>{t()}))})(t),(t=>{const r=(t,r)=>{const n=e(t.getAttribute("data-starting-value")),a=e(t.getAttribute("data-maximum-value")),c=e(t.getAttribute("data-minimum-value")),s=t.classList.contains("down")?n-r.value.length:r.value.length;t.setAttribute("data-current-value",s),t.innerText=s,a&&a<r.value.length?t.classList.add("too-long"):t.classList.remove("too-long"),c&&r.value.length<c?t.classList.add("too-short"):t.classList.remove("too-short")},n=e=>{e={init:!1,...e},t.querySelectorAll(".wpcf7-character-count").forEach((n=>{const a=n.getAttribute("data-target-name"),c=t.querySelector(`[name="${a}"]`);c&&(c.value=c.defaultValue,r(n,c),e.init&&c.addEventListener("keyup",(e=>{r(n,c)})))}))};n({init:!0}),t.addEventListener("wpcf7reset",(e=>{n()}))})(t),window.addEventListener("load",(e=>{wpcf7.cached&&t.reset()})),t.addEventListener("reset",(e=>{wpcf7.reset(t)})),t.addEventListener("submit",(e=>{const r=e.submitter;wpcf7.submit(t,{submitter:r}),e.preventDefault()})),t.addEventListener("wpcf7submit",(e=>{e.detail.apiResponse.captcha&&i(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&l(t,e.detail.apiResponse.quiz)})),t.addEventListener("wpcf7reset",(e=>{e.detail.apiResponse.captcha&&i(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&l(t,e.detail.apiResponse.quiz)}))}document.addEventListener("DOMContentLoaded",(e=>{var t;if("undefined"==typeof wpcf7)return void console.error("wpcf7 is not defined.");if(void 0===wpcf7.api)return void console.error("wpcf7.api is not defined.");if("function"!=typeof window.fetch)return void console.error("Your browser doesn't support window.fetch().");if("function"!=typeof window.FormData)return void console.error("Your browser doesn't support window.FormData().");const r=document.querySelectorAll(".wpcf7 > form");"function"==typeof r.forEach?(wpcf7={init:p,submit:c,reset:o,...null!==(t=wpcf7)&&void 0!==t?t:{}},r.forEach((e=>wpcf7.init(e)))):console.error("Your browser doesn't support NodeList.forEach().")}))}();
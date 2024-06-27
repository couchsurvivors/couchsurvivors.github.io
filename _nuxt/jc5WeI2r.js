import{F as O,G as Y,H as z,I as L,J as U,K as J,L as R,A as t,M as _,N as $,V as Q,O as W,R as ee,P as B,c as T,Q as te,S as I,T as oe,U as ie,W as ne,X as ae,Y as se,Z as re,$ as le,a0 as ce,a1 as P,a2 as de,a3 as ue,a4 as he,a5 as pe,a6 as fe,a7 as l,d as me,r as Te,i as be,v as m,a8 as E,B as i,a9 as N,C as u,aa as Ie,ab as S,ac as ye,x as D,ad as V,ae as M,af as ge,ag as Ee,ah as Oe,z as b,ai as Le,y as v,aj as F,ak as w}from"./B_dC6DF4.js";import{V as Re}from"./C7WhdF0w.js";import{V as Ae,a as C}from"./D5nagFcI.js";const G=O({...Y(),...z()},"VExpansionPanelText"),H=L()({name:"VExpansionPanelText",props:G(),setup(e,c){let{slots:n}=c;const o=U(y);if(!o)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:h,onAfterLeave:r}=J(e,o.isSelected);return R(()=>t(Q,{onAfterLeave:r},{default:()=>{var s;return[_(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&h.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(s=n.default)==null?void 0:s.call(n)])]),[[$,o.isSelected.value]])]}})),{}}}),j=O({color:String,expandIcon:{type:W,default:"$expand"},collapseIcon:{type:W,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...Y()},"VExpansionPanelTitle"),k=L()({name:"VExpansionPanelTitle",directives:{Ripple:ee},props:j(),setup(e,c){let{slots:n}=c;const o=U(y);if(!o)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:h,backgroundColorStyles:r}=B(e,"color"),s=T(()=>({collapseIcon:e.collapseIcon,disabled:o.disabled.value,expanded:o.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return R(()=>{var p;return _(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":o.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},h.value,e.class],style:[r.value,e.style],type:"button",tabindex:o.disabled.value?-1:void 0,disabled:o.disabled.value,"aria-expanded":o.isSelected.value,onClick:e.readonly?void 0:o.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(p=n.default)==null?void 0:p.call(n,s.value),!e.hideActions&&t("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(s.value):t(I,{icon:o.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[te("ripple"),e.ripple]])}),{}}}),Z=O({title:String,text:String,bgColor:String,...oe(),...ie(),...ne(),...ae(),...j(),...G()},"VExpansionPanel"),Ne=L()({name:"VExpansionPanel",props:Z(),emits:{"group:selected":e=>!0},setup(e,c){let{slots:n}=c;const o=se(e,y),{backgroundColorClasses:h,backgroundColorStyles:r}=B(e,"bgColor"),{elevationClasses:s}=re(e),{roundedClasses:p}=le(e),a=T(()=>(o==null?void 0:o.disabled.value)||e.disabled),g=T(()=>o.group.items.value.reduce((f,d,A)=>(o.group.selected.value.includes(d.id)&&f.push(A),f),[])),K=T(()=>{const f=o.group.items.value.findIndex(d=>d.id===o.id);return!o.isSelected.value&&g.value.some(d=>d-f===1)}),X=T(()=>{const f=o.group.items.value.findIndex(d=>d.id===o.id);return!o.isSelected.value&&g.value.some(d=>d-f===-1)});return ce(y,o),R(()=>{const f=!!(n.text||e.text),d=!!(n.title||e.title),A=k.filterProps(e),q=H.filterProps(e);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":o.isSelected.value,"v-expansion-panel--before-active":K.value,"v-expansion-panel--after-active":X.value,"v-expansion-panel--disabled":a.value},p.value,h.value,e.class],style:[r.value,e.style]},{default:()=>{var x;return[t("div",{class:["v-expansion-panel__shadow",...s.value]},null),d&&t(k,P({key:"title"},A),{default:()=>[n.title?n.title():e.title]}),f&&t(H,P({key:"text"},q),{default:()=>[n.text?n.text():e.text]}),(x=n.default)==null?void 0:x.call(n)]}})}),{}}}),y=Symbol.for("vuetify:v-expansion-panel"),Se=["default","accordion","inset","popout"],ve=O({flat:Boolean,...de(),...Z(),...ue(),variant:{type:String,default:"default",validator:e=>Se.includes(e)}},"VExpansionPanels"),we=L()({name:"VExpansionPanels",props:ve(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;he(e,y);const{themeClasses:o}=pe(e),h=T(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return fe({VExpansionPanel:{bgColor:l(e,"bgColor"),collapseIcon:l(e,"collapseIcon"),color:l(e,"color"),eager:l(e,"eager"),elevation:l(e,"elevation"),expandIcon:l(e,"expandIcon"),focusable:l(e,"focusable"),hideActions:l(e,"hideActions"),readonly:l(e,"readonly"),ripple:l(e,"ripple"),rounded:l(e,"rounded"),static:l(e,"static")}}),R(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},o.value,h.value,e.class],style:e.style},n)),{}}}),Ce={class:"ml-2"},He={class:"d-flex justify-center"},Pe=me({__name:"about",setup(e){const c=Te([]),n=[{title:"nougatbyte",icon:"M12,11.64L7.92,2H16.08L12,11.64M12,21.95L3.27,4.91H7.84L12,14.47L16.16,4.91H20.73L12,21.95Z",link:"https://github.com/nougatbyte"},{title:"casraw",icon:"M12,11.64L7.92,2H16.08L12,11.64M12,21.95L3.27,4.91H7.84L12,14.47L16.16,4.91H20.73L12,21.95Z",link:"#"},{title:"pye",icon:"M12,11.64L7.92,2H16.08L12,11.64M12,21.95L3.27,4.91H7.84L12,14.47L16.16,4.91H20.73L12,21.95Z",link:"#"}],o=[{title:"Vite",icon:"custom:vite",link:"https://vitejs.dev/",supportLink:"",licence:`MIT License

Copyright (c) 2019-present, Yuxi (Evan) You and Vite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`},{title:"Vuetify",icon:"custom:vuetify",link:"https://vuetifyjs.com",supportLink:"https://vuetifyjs.com/en/introduction/sponsors-and-backers/#preamble",licence:`The MIT License (MIT)

Copyright (c) 2016-2023 John Jeremy Leider

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in the
Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`},{title:"Vue",icon:"custom:vue",link:"https://vuejs.org/",supportLink:"https://vuejs.org/sponsor/",licence:`The MIT License (MIT)

Copyright (c) 2013-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`},{title:"Supabase",icon:"custom:supabase",link:"https://supabase.com/",supportLink:"https://supabase.com/pricing",licence:`                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2024 Supabase

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`},{title:"Pl@ntNet",icon:"M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z",link:"https://plantnet.org",supportLink:"https://plantnet.org/donations/",licence:`MIT License

Copyright (c) 2022 Cos4Cloud & Pl@ntNet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`},{title:"gpx.studio",icon:"M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z",link:"https://gpx.studio/about.html",supportLink:"https://ko-fi.com/gpxstudio",licence:`Copyright 2019 Vianney Coppé

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in the
Software without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`},{title:"OpenStreetMap",icon:"custom:osm",link:"https://openstreetmap.org",supportLink:"https://donate.openstreetmap.org/",licence:""},{title:"Material Design Icons",icon:"M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z",link:"https://pictogrammers.com/library/mdi/",supportLink:"",licence:`Pictogrammers Free License
--------------------------

Last Updated: February 1st, 2023

This package is released as free, open-source, and GPL friendly by
the [Pictogrammers](https://pictogrammers.com/). You may use it
for commercial projects, open-source projects, or anything really.

# Icons: Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
Some of the icons are redistributed under the Apache 2.0 license. All other
icons are either redistributed under their respective licenses or are
distributed under the Apache 2.0 license.

# Fonts: Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
All web and desktop fonts are distributed under the Apache 2.0 license. Web
and desktop fonts contain some icons that are redistributed under the Apache
2.0 license. All other icons are either redistributed under their respective
licenses or are distributed under the Apache 2.0 license.

# Code: MIT (https://opensource.org/licenses/MIT)
The MIT license applies to all non-font and non-icon files.`},{title:"Icons by Cahya Kurniawan",icon:"M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z",link:"https://dribbble.com/sikeystudio?ref=svgrepo.com",supportLink:"",licence:`Vectors and icons by Cahya Kurniawan
[https://dribbble.com/sikeystudio?ref=svgrepo.com] in CC Attribution License
via SVG Repo
[https://www.svgrepo.com/]`}];function h(r){for(let s=r.length-1;s>0;s--){const p=Math.floor(Math.random()*(s+1));[r[s],r[p]]=[r[p],r[s]]}}return h(n),h(o),(r,s)=>{const p=be("v-list-item-icon");return m(),E(Re,null,{default:i(()=>[t(S,{class:"mb-2"},{default:i(()=>[t(N,null,{default:i(()=>[u("About")]),_:1}),t(Ie,null,{default:i(()=>[u(" This app is a work in progress and is not yet ready for production use. It is a personal project and is not affiliated with any organization. The app is open source and the code can be found on GitHub. Any feedback or suggestions are welcome. This is just AI generated text. I will update this later. ")]),_:1})]),_:1}),t(S,{class:"mb-2"},{default:i(()=>[t(N,null,{default:i(()=>[t(I,{color:"primary"},{default:i(()=>[u("M5 9.15V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V9.16C17.84 9.57 17 10.67 17 11.97V14H7V11.96C7 10.67 6.16 9.56 5 9.15M20 10C18.9 10 18 10.9 18 12V15H6V12C6 10.9 5.11 10 4 10S2 10.9 2 12V17C2 18.1 2.9 19 4 19V21H6V19H18V21H20V19C21.1 19 22 18.1 22 17V12C22 10.9 21.1 10 20 10Z")]),_:1}),u(" Main contributors")]),_:1}),t(ye,null,{default:i(()=>[(m(),D(M,null,V(n,a=>t(Oe,{key:a.title,link:"",target:"_blank",href:a.link},{prepend:i(()=>[t(p,{class:"pr-3"},{default:i(()=>[t(I,null,{default:i(()=>[u(b(a.icon),1)]),_:2},1024)]),_:2},1024)]),default:i(()=>[t(Le,null,{default:i(()=>[u(b(a.title),1)]),_:2},1024)]),_:2},1032,["href"])),64))]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(N,null,{default:i(()=>[t(I,{color:"primary"},{default:i(()=>[u("M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z")]),_:1}),u(" Made possible by")]),_:1}),t(we,{variant:"inset",modelValue:ge(c),"onUpdate:modelValue":s[0]||(s[0]=a=>Ee(c)?c.value=a:null)},{default:i(()=>[(m(),D(M,null,V(o,(a,g)=>t(Ne,{key:g},{default:i(()=>[t(k,{"expand-icon":"M7,10L12,15L17,10H7Z"},{default:i(()=>[t(I,null,{default:i(()=>[u(b(a.icon),1)]),_:2},1024),v("span",Ce,b(a.title),1)]),_:2},1024),t(H,null,{default:i(()=>[t(Ae,{class:"my-2"},{default:i(()=>[a.link?(m(),E(C,{key:0,class:"text-center"},{default:i(()=>[t(F,{color:"primary","prepend-icon":"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z",href:a.link,target:"_blank",rel:"noopener noreferrer"},{default:i(()=>[u("Website")]),_:2},1032,["href"])]),_:2},1024)):w("",!0),a.supportLink?(m(),E(C,{key:1,class:"text-center"},{default:i(()=>[a.supportLink?(m(),E(F,{key:0,color:"primary","prepend-icon":"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z",href:a.supportLink,target:"_blank",rel:"noopener noreferrer"},{default:i(()=>[u("Donate")]),_:2},1032,["href"])):w("",!0)]),_:2},1024)):w("",!0),t(C,{cols:"12"},{default:i(()=>[v("div",He,[v("pre",null,b(a.licence),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});export{Pe as default};

webpackJsonp([2,0],{0:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=o(118),s=n(i),r=o(113),a=n(r);new s["default"]({el:"body",components:{App:a["default"]}})},13:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(52),s=n(i),r=o(56),a=n(r),u=o(57),d=n(u),c=o(59),f=n(c),l=o(58),p=n(l),h=o(96),v=n(h),m=o(102),x=n(m),y=function(t){function e(){(0,a["default"])(this,e);var t=(0,f["default"])(this,(0,s["default"])(e).call(this)),o=x["default"].initializeApp({apiKey:"AIzaSyBzAz2HcPiBTu0OPWtUrEV6JGwhAWt1J6I",authDomain:"keepit-94bf4.firebaseapp.com",databaseURL:"https://keepit-94bf4.firebaseio.com",storageBucket:"keepit-94bf4.appspot.com"});return t.ref=o.database().ref("/notes"),t.attachFirebaseListeners(),t}return(0,p["default"])(e,t),(0,d["default"])(e,[{key:"create",value:function(t,e){var o=t.title,n=void 0===o?"":o,i=t.content,s=void 0===i?"":i;this.ref.push({title:n,content:s},e)}},{key:"update",value:function(t,e){var o=t.key,n=t.title,i=void 0===n?"":n,s=t.content,r=void 0===s?"":s;this.ref.child(o).update({title:i,content:r},e)}},{key:"remove",value:function(t,e){var o=t.key;this.ref.child(o).remove(e)}},{key:"attachFirebaseListeners",value:function(){this.ref.on("child_added",this.onAdded,this),this.ref.on("child_removed",this.onRemoved,this),this.ref.on("child_changed",this.onChanged,this)}},{key:"detachFirebaseListeners",value:function(){this.ref.off("child_added",this.onAdded,this),this.ref.off("child_removed",this.onRemoved,this),this.ref.off("child_changed",this.onChanged,this)}},{key:"onAdded",value:function(t){var e=this.snapshotToNote(t);this.emit("added",e)}},{key:"onRemoved",value:function(t){var e=this.snapshotToNote(t);this.emit("removed",e)}},{key:"onChanged",value:function(t){var e=this.snapshotToNote(t);this.emit("changed",e)}},{key:"snapshotToNote",value:function(t){var e=t.key,o=t.val();return o.key=e,o}},{key:"findIndex",value:function(t,e){return t.findIndex(function(t){return t.key===e})}},{key:"find",value:function(t,e){return t.find(function(t){return t.key===e})}}]),e}(v["default"]);e["default"]=new y},45:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(115),s=n(i),r=o(114),a=n(r),u=o(117),d=n(u);e["default"]={components:{Notes:s["default"],CreateNoteForm:a["default"],UpdateModal:d["default"]},data:function(){return{selectedNote:null}},events:{"note.selected":function(t){this.selectedNote=t}}}},46:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(13),s=n(i);e["default"]={data:function(){return{title:"",content:""}},methods:{createNote:function(){var t=this;(this.title.trim()||this.content.trim())&&s["default"].create({title:this.title,content:this.content},function(e){if(e)throw e;t.title="",t.content=""})}}}},47:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(13),s=n(i),r=o(105),a=n(r),u=o(116),d=n(u);e["default"]={components:{Note:d["default"]},data:function(){return{notes:[]}},methods:{selectNote:function(t){var e=t.key,o=t.title,n=t.content;this.$dispatch("note.selected",{key:e,title:o,content:n})}},ready:function(){var t=this;this.masonry=new a["default"](this.$els.notes,{itemSelector:".note",columnWidth:240,gutter:16,fitWidth:!0}),s["default"].on("added",function(e){t.notes.unshift(e)}),s["default"].on("changed",function(e){var o=e.key,n=e.title,i=e.content,r=s["default"].find(t.notes,o);r.title=n,r.content=i}),s["default"].on("removed",function(e){var o=e.key,n=s["default"].find(t.notes,o);t.notes.$remove(n)})},watch:{notes:{handler:function(){this.masonry.reloadItems(),this.masonry.layout()},deep:!0}}}},48:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(13),s=n(i);e["default"]={props:["note"],methods:{remove:function(){s["default"].remove(this.note,function(t){if(t)throw t})}}}},49:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(13),s=n(i);e["default"]={props:["note"],methods:{remove:function(){var t=this;s["default"].remove(this.note,function(e){if(e)throw e;t.dismissModal()})},update:function(){var t=this;s["default"].update(this.note,function(e){if(e)throw e;t.dismissModal()})},dismissModal:function(){this.note=null}}}},97:function(t,e){},98:function(t,e){},99:function(t,e){},100:function(t,e){},101:function(t,e){},108:function(t,e){t.exports=" <div id=app> <create-note-form></create-note-form> <notes></notes> <update-modal :note.sync=selectedNote></update-modal> </div> "},109:function(t,e){t.exports=' <form class=create-note v-on:submit.prevent=createNote()> <input name=title v-model=title placeholder=Title /> <textarea name=content v-model=content placeholder="Text goes here..." rows=3>\n  </textarea> <button type=submit>+</button> </form> '},110:function(t,e){t.exports=' <div class=notes v-el:notes> <note v-for="note in notes" :note=note v-on:click=selectNote(note)></note> </div>'},111:function(t,e){t.exports=' <div class=note> <h1>{{note.title}}</h1> <pre>{{note.content}}</pre> <button type=button v-on:click.stop=remove> <i class="fa fa-trash-o" aria-hidden=true></i> </button> <button type=button class=edit> <i class="fa fa-pencil" aria-hidden=true></i> </button> </div> '},112:function(t,e){t.exports=' <div v-if=note transition=modal class=backdrop v-on:click=dismissModal> <form class=edit-note v-on:submit.prevent=update v-on:click.stop=""> <input name=title v-model=note.title placeholder=Title /> <textarea name=content v-model=note.content placeholder="Text goes here..." rows=8>\n    </textarea> <button type=button v-on:click=remove> <i class="fa fa-trash-o" aria-hidden=true></i> </button> <button type=submit>Done</button> </form> </div> '},113:function(t,e,o){var n,i;o(97),n=o(45),i=o(108),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},114:function(t,e,o){var n,i;o(98),n=o(46),i=o(109),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},115:function(t,e,o){var n,i;o(99),n=o(47),i=o(110),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},116:function(t,e,o){var n,i;o(100),n=o(48),i=o(111),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},117:function(t,e,o){var n,i;o(101),n=o(49),i=o(112),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}});
//# sourceMappingURL=app.799d5e6e927632bf353b.js.map
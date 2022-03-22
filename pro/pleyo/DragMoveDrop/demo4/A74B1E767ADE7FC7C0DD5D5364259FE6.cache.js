(function(){
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var _, package_DmD_client_ = 'DmD.client.', package_com_google_gwt_core_client_ = 'com.google.gwt.core.client.', package_com_google_gwt_lang_ = 'com.google.gwt.lang.', package_com_google_gwt_user_client_ = 'com.google.gwt.user.client.', package_com_google_gwt_user_client_dnd_ = 'com.google.gwt.user.client.dnd.', package_com_google_gwt_user_client_impl_ = 'com.google.gwt.user.client.impl.', package_com_google_gwt_user_client_ui_ = 'com.google.gwt.user.client.ui.', package_java_lang_ = 'java.lang.', package_java_util_ = 'java.util.';
function nullMethod(){
}

function java_lang_Object_equals__Ljava_lang_Object_2(other){
  return this === other;
}

function java_lang_Object_hashCode__(){
  return java_lang_System_identityHashCode__Ljava_lang_Object_2(this);
}

function java_lang_Object(){
}

_ = java_lang_Object.prototype = {};
_.java_lang_Object_equals$ = java_lang_Object_equals__Ljava_lang_Object_2;
_.java_lang_Object_hashCode$ = java_lang_Object_hashCode__;
_.java_lang_Object_typeId$ = 1;
function DmD_client_DragMove_$onModuleLoad__LDmD_client_DragMove_2(this$static){
  var child1, child1Fitement, child2, child2Fitement, childList, grandChild1, grandChild2, grandChild3, grandChild4, grandChildList1, grandChildList2, grandFather, grandFatherFitment, grandFatherList, myDrag;
  myDrag = DmD_client_DragWidget_$DragWidget__LDmD_client_DragWidget_2Ljava_lang_String_2(new DmD_client_DragWidget(), 'DragMe');
  grandFather = DmD_client_DropWidget_$DropWidget__LDmD_client_DropWidget_2Ljava_lang_String_2(new DmD_client_DropWidget(), 'grandfather');
  child1 = DmD_client_DropWidget_$DropWidget__LDmD_client_DropWidget_2Ljava_lang_String_2(new DmD_client_DropWidget(), 'child one');
  child2 = DmD_client_DropWidget_$DropWidget__LDmD_client_DropWidget_2Ljava_lang_String_2(new DmD_client_DropWidget(), 'child two');
  grandChild1 = DmD_client_DropWidget_$DropWidget__LDmD_client_DropWidget_2Ljava_lang_String_2(new DmD_client_DropWidget(), 'grandchild one (child one)');
  grandChild2 = DmD_client_DropWidget_$DropWidget__LDmD_client_DropWidget_2Ljava_lang_String_2(new DmD_client_DropWidget(), 'grandchild two (child one)');
  grandChild3 = DmD_client_DropWidget_$DropWidget__LDmD_client_DropWidget_2Ljava_lang_String_2(new DmD_client_DropWidget(), 'grandchild three (parent two)');
  grandChild4 = DmD_client_DropWidget_$DropWidget__LDmD_client_DropWidget_2Ljava_lang_String_2(new DmD_client_DropWidget(), 'grandchild four (parent two)');
  grandFatherList = java_util_Vector_$Vector__Ljava_util_Vector_2(new java_util_Vector());
  childList = java_util_Vector_$Vector__Ljava_util_Vector_2(new java_util_Vector());
  grandChildList1 = java_util_Vector_$Vector__Ljava_util_Vector_2(new java_util_Vector());
  grandChildList2 = java_util_Vector_$Vector__Ljava_util_Vector_2(new java_util_Vector());
  grandFatherFitment = DmD_client_RussianDolls_$RussianDolls__LDmD_client_RussianDolls_2Lcom_google_gwt_user_client_ui_Widget_2Ljava_util_Vector_2(new DmD_client_RussianDolls(), grandFather, childList);
  child1Fitement = DmD_client_RussianDolls_$RussianDolls__LDmD_client_RussianDolls_2Lcom_google_gwt_user_client_ui_Widget_2Ljava_util_Vector_2(new DmD_client_RussianDolls(), child1, grandChildList1);
  child2Fitement = DmD_client_RussianDolls_$RussianDolls__LDmD_client_RussianDolls_2Lcom_google_gwt_user_client_ui_Widget_2Ljava_util_Vector_2(new DmD_client_RussianDolls(), child2, grandChildList2);
  DmD_client_RussianDolls_$addDropListener__LDmD_client_RussianDolls_2LDmD_client_DropWidget_2(grandFatherFitment, grandFather);
  DmD_client_RussianDolls_$addDropListener__LDmD_client_RussianDolls_2LDmD_client_DropWidget_2(child1Fitement, child1);
  DmD_client_RussianDolls_$addDropListener__LDmD_client_RussianDolls_2LDmD_client_DropWidget_2(child2Fitement, child2);
  java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(grandFatherList, grandFatherFitment.DmD_client_RussianDolls_dropCollection);
  java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(childList, child1Fitement.DmD_client_RussianDolls_dropCollection);
  java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(childList, child2Fitement.DmD_client_RussianDolls_dropCollection);
  java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(grandChildList1, grandChild1.DmD_client_DropWidget_dropCollection);
  java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(grandChildList1, grandChild2.DmD_client_DropWidget_dropCollection);
  java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(grandChildList2, grandChild3.DmD_client_DropWidget_dropCollection);
  java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(grandChildList2, grandChild4.DmD_client_DropWidget_dropCollection);
  DmD_client_DragWidget_$setDropMap__LDmD_client_DragWidget_2Ljava_util_Vector_2(myDrag, grandFatherList);
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(grandFather, 550, 280);
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(child1, 220, 200);
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(child2, 220, 200);
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(grandChild1, 95, 90);
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(grandChild2, 95, 90);
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(grandChild3, 95, 90);
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(grandChild4, 95, 90);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(grandFather, com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), 'GrandFather'), 0, 0);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(grandFather, child1, 10, 50);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(grandFather, child2, 310, 50);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(child1, com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), 'child 1'), 0, 0);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(child1, grandChild1, 10, 50);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(child1, grandChild2, 110, 50);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(child2, com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), 'child 2'), 0, 0);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(child2, grandChild3, 10, 50);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(child2, grandChild4, 110, 50);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(grandChild1, com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), 'grandChild 1'), 0, 0);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(grandChild2, com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), 'grandChild 2'), 0, 0);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(grandChild3, com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), 'grandChild 3'), 0, 0);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(grandChild4, com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), 'grandChild 4'), 0, 0);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(com_google_gwt_user_client_ui_RootPanel_get__(), grandFather, 10, 70);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(com_google_gwt_user_client_ui_RootPanel_get__(), myDrag, 10, 10);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(com_google_gwt_user_client_ui_RootPanel_get__(), (DmD_client_DropWidget_$clinit__() , DmD_client_DropWidget_currentNode), 110, 10);
}

function DmD_client_DragMove(){
}

_ = DmD_client_DragMove.prototype = new java_lang_Object();
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_user_client_ui_UIObject_$replaceNode__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(this$static, node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  if (this$static.com_google_gwt_user_client_ui_UIObject_element !== null) {
    com_google_gwt_user_client_ui_UIObject_$replaceNode__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(this$static, this$static.com_google_gwt_user_client_ui_UIObject_element, elem);
  }
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
}

function com_google_gwt_user_client_ui_UIObject_$setHeight__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, height){
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, 'height', height);
}

function com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(this$static, width, height){
  if (width >= 0) {
    com_google_gwt_user_client_ui_UIObject_$setWidth__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, width + 'px');
  }
  if (height >= 0) {
    com_google_gwt_user_client_ui_UIObject_$setHeight__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, height + 'px');
  }
}

function com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, style){
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, style);
}

function com_google_gwt_user_client_ui_UIObject_$setWidth__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, width){
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, 'width', width);
}

function com_google_gwt_user_client_ui_UIObject_$sinkEvents__Lcom_google_gwt_user_client_ui_UIObject_2I(this$static, eventBitsToAdd){
  com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2I(this$static.com_google_gwt_user_client_ui_UIObject_element, eventBitsToAdd | com_google_gwt_user_client_DOM_getEventsSunk__Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_UIObject_element));
}

function com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(elem, styleName){
  com_google_gwt_user_client_DOM_setElementProperty__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, 'className', styleName);
}

function com_google_gwt_user_client_ui_UIObject(){
}

_ = com_google_gwt_user_client_ui_UIObject.prototype = new java_lang_Object();
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_UIObject_element = null;
function com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), "Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.com_google_gwt_user_client_ui_Widget_attached = true;
  com_google_gwt_user_client_DOM_setEventListener__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(this$static.com_google_gwt_user_client_ui_UIObject_element, this$static);
  this$static.doAttachChildren__();
  this$static.onLoad__();
}

function com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), "Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload__();
  }
   finally {
    this$static.doDetachChildren__();
    com_google_gwt_user_client_DOM_setEventListener__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(this$static.com_google_gwt_user_client_ui_UIObject_element, null);
    this$static.com_google_gwt_user_client_ui_Widget_attached = false;
  }
}

function com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_Widget_parent !== null) {
    com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_ui_Widget_parent, this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent !== null) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), "This widget's parent does not implement HasWidgets");
  }
}

function com_google_gwt_user_client_ui_Widget_$setElement__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  if (this$static.com_google_gwt_user_client_ui_Widget_attached) {
    com_google_gwt_user_client_DOM_setEventListener__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(this$static.com_google_gwt_user_client_ui_UIObject_element, null);
  }
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static, elem);
  if (this$static.com_google_gwt_user_client_ui_Widget_attached) {
    com_google_gwt_user_client_DOM_setEventListener__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(elem, this$static);
  }
}

function com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, parent){
  var oldParent;
  oldParent = this$static.com_google_gwt_user_client_ui_Widget_parent;
  if (parent === null) {
    if (oldParent !== null && oldParent.com_google_gwt_user_client_ui_Widget_attached) {
      com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2(this$static);
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = null;
  }
   else {
    if (oldParent !== null) {
      throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), 'Cannot set a new parent without first clearing the old parent');
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = parent;
    if (parent.com_google_gwt_user_client_ui_Widget_attached) {
      com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2(this$static);
    }
  }
}

function com_google_gwt_user_client_ui_Widget_doAttachChildren__(){
}

function com_google_gwt_user_client_ui_Widget_doDetachChildren__(){
}

function com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2(event){
}

function com_google_gwt_user_client_ui_Widget_onLoad__(){
}

function com_google_gwt_user_client_ui_Widget_onUnload__(){
}

function com_google_gwt_user_client_ui_Widget(){
}

_ = com_google_gwt_user_client_ui_Widget.prototype = new com_google_gwt_user_client_ui_UIObject();
_.doAttachChildren__ = com_google_gwt_user_client_ui_Widget_doAttachChildren__;
_.doDetachChildren__ = com_google_gwt_user_client_ui_Widget_doDetachChildren__;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2 = com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2;
_.onLoad__ = com_google_gwt_user_client_ui_Widget_onLoad__;
_.onUnload__ = com_google_gwt_user_client_ui_Widget_onUnload__;
_.java_lang_Object_typeId$ = 3;
_.com_google_gwt_user_client_ui_Widget_attached = false;
_.com_google_gwt_user_client_ui_Widget_parent = null;
function com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2(this$static){
  com_google_gwt_user_client_ui_Widget_$setElement__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2(this$static, com_google_gwt_user_client_DOM_createDiv__());
  com_google_gwt_user_client_ui_UIObject_$sinkEvents__Lcom_google_gwt_user_client_ui_UIObject_2I(this$static, 131197);
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, 'gwt-Label');
  return this$static;
}

function com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(this$static, text){
  com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2(this$static);
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(this$static, text);
  return this$static;
}

function com_google_gwt_user_client_ui_Label_$addDragListener__Lcom_google_gwt_user_client_ui_Label_2Lcom_google_gwt_user_client_dnd_DragListener_2(this$static, listener){
  if (this$static.com_google_gwt_user_client_ui_Label_dragListeners === null) {
    this$static.com_google_gwt_user_client_ui_Label_dragListeners = com_google_gwt_user_client_dnd_DragListenerCollection_$DragListenerCollection__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2(new com_google_gwt_user_client_dnd_DragListenerCollection());
  }
  com_google_gwt_user_client_dnd_DragListenerCollection_$add__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_dnd_DragListener_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_ui_Label_dragListeners, listener, this$static);
}

function com_google_gwt_user_client_ui_Label_$addMouseListener__Lcom_google_gwt_user_client_ui_Label_2Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2(this$static, listener){
  if (this$static.com_google_gwt_user_client_ui_Label_mouseListeners === null) {
    this$static.com_google_gwt_user_client_ui_Label_mouseListeners = com_google_gwt_user_client_ui_MouseListenerCollection_$MouseListenerCollection__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2(new com_google_gwt_user_client_ui_MouseListenerCollection());
  }
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_Label_mouseListeners, listener);
}

function com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(this$static, text){
  com_google_gwt_user_client_DOM_setInnerText__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, text);
}

function com_google_gwt_user_client_ui_Label_onBrowserEvent__Lcom_google_gwt_user_client_Event_2(event){
  switch (com_google_gwt_user_client_DOM_eventGetType__Lcom_google_gwt_user_client_Event_2(event)) {
    case 1:
      break;
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (this.com_google_gwt_user_client_ui_Label_mouseListeners !== null) {
        com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseEvent__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2(this.com_google_gwt_user_client_ui_Label_mouseListeners, this, event);
      }

      break;
    case 131072:
      break;
  }
}

function com_google_gwt_user_client_ui_Label(){
}

_ = com_google_gwt_user_client_ui_Label.prototype = new com_google_gwt_user_client_ui_Widget();
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2 = com_google_gwt_user_client_ui_Label_onBrowserEvent__Lcom_google_gwt_user_client_Event_2;
_.java_lang_Object_typeId$ = 4;
_.com_google_gwt_user_client_ui_Label_dragListeners = null;
_.com_google_gwt_user_client_ui_Label_mouseListeners = null;
function DmD_client_DragWidget_$$init__LDmD_client_DragWidget_2(this$static){
  this$static.DmD_client_DragWidget_dragListener = DmD_client_DragWidget$1_$DragWidget$1__LDmD_client_DragWidget$1_2LDmD_client_DragWidget_2(new DmD_client_DragWidget$1(), this$static);
}

function DmD_client_DragWidget_$DragWidget__LDmD_client_DragWidget_2Ljava_lang_String_2(this$static, text){
  com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(this$static, text);
  DmD_client_DragWidget_$$init__LDmD_client_DragWidget_2(this$static);
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, 'border', '1px solid #330000');
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, 'cursor', 'pointer');
  com_google_gwt_user_client_ui_Label_$addDragListener__Lcom_google_gwt_user_client_ui_Label_2Lcom_google_gwt_user_client_dnd_DragListener_2(this$static, this$static.DmD_client_DragWidget_dragListener);
  return this$static;
}

function DmD_client_DragWidget_$setDropMap__LDmD_client_DragWidget_2Ljava_util_Vector_2(this$static, dropToDetect){
  this$static.DmD_client_DragWidget_dropList = dropToDetect;
}

function DmD_client_DragWidget(){
}

_ = DmD_client_DragWidget.prototype = new com_google_gwt_user_client_ui_Label();
_.java_lang_Object_typeId$ = 5;
_.DmD_client_DragWidget_dropList = null;
function com_google_gwt_user_client_dnd_DragListenerAdapter_onDragDropEnd__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, target){
}

function com_google_gwt_user_client_dnd_DragListenerAdapter_onDragEnd__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y){
}

function com_google_gwt_user_client_dnd_DragListenerAdapter_onDragEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, target){
}

function com_google_gwt_user_client_dnd_DragListenerAdapter_onDragExit__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, target){
}

function com_google_gwt_user_client_dnd_DragListenerAdapter_onDragMouseMoved__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y){
}

function com_google_gwt_user_client_dnd_DragListenerAdapter_onDragOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, target){
}

function com_google_gwt_user_client_dnd_DragListenerAdapter_onDragStart__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y){
}

function com_google_gwt_user_client_dnd_DragListenerAdapter(){
}

_ = com_google_gwt_user_client_dnd_DragListenerAdapter.prototype = new java_lang_Object();
_.onDragDropEnd__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_dnd_DragListenerAdapter_onDragDropEnd__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDragEnd__Lcom_google_gwt_user_client_ui_Widget_2II = com_google_gwt_user_client_dnd_DragListenerAdapter_onDragEnd__Lcom_google_gwt_user_client_ui_Widget_2II;
_.onDragEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_dnd_DragListenerAdapter_onDragEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDragExit__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_dnd_DragListenerAdapter_onDragExit__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDragMouseMoved__Lcom_google_gwt_user_client_ui_Widget_2II = com_google_gwt_user_client_dnd_DragListenerAdapter_onDragMouseMoved__Lcom_google_gwt_user_client_ui_Widget_2II;
_.onDragOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_dnd_DragListenerAdapter_onDragOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDragStart__Lcom_google_gwt_user_client_ui_Widget_2II = com_google_gwt_user_client_dnd_DragListenerAdapter_onDragStart__Lcom_google_gwt_user_client_ui_Widget_2II;
_.java_lang_Object_typeId$ = 6;
function DmD_client_DragWidget$1_$DragWidget$1__LDmD_client_DragWidget$1_2LDmD_client_DragWidget_2(this$static, this$0){
  this$static.DmD_client_DragWidget$1_this$0 = this$0;
  return this$static;
}

function DmD_client_DragWidget$1_onDragStart__Lcom_google_gwt_user_client_ui_Widget_2II(arg0, arg1, arg2){
  DmD_client_RussianDolls_mouse = com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getGestureMouse__Lcom_google_gwt_user_client_ui_Widget_2(arg0);
  com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_setDropMap__Ljava_util_Vector_2(this.DmD_client_DragWidget$1_this$0.DmD_client_DragWidget_dropList);
}

function DmD_client_DragWidget$1(){
}

_ = DmD_client_DragWidget$1.prototype = new com_google_gwt_user_client_dnd_DragListenerAdapter();
_.onDragStart__Lcom_google_gwt_user_client_ui_Widget_2II = DmD_client_DragWidget$1_onDragStart__Lcom_google_gwt_user_client_ui_Widget_2II;
_.java_lang_Object_typeId$ = 7;
function com_google_gwt_user_client_ui_Panel_$adopt__Lcom_google_gwt_user_client_ui_Panel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, child){
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(child, this$static);
}

function com_google_gwt_user_client_ui_Panel_$orphan__Lcom_google_gwt_user_client_ui_Panel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, child){
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(child, null);
}

function com_google_gwt_user_client_ui_Panel_doAttachChildren__(){
  var child, it;
  for (it = this.iterator__(); com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$hasNext__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(it);) {
    child = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(it);
    com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2(child);
  }
}

function com_google_gwt_user_client_ui_Panel_doDetachChildren__(){
  var child, it;
  for (it = this.iterator__(); com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$hasNext__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(it);) {
    child = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(it);
    com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2(child);
  }
}

function com_google_gwt_user_client_ui_Panel_onLoad__(){
}

function com_google_gwt_user_client_ui_Panel_onUnload__(){
}

function com_google_gwt_user_client_ui_Panel(){
}

_ = com_google_gwt_user_client_ui_Panel.prototype = new com_google_gwt_user_client_ui_Widget();
_.doAttachChildren__ = com_google_gwt_user_client_ui_Panel_doAttachChildren__;
_.doDetachChildren__ = com_google_gwt_user_client_ui_Panel_doDetachChildren__;
_.onLoad__ = com_google_gwt_user_client_ui_Panel_onLoad__;
_.onUnload__ = com_google_gwt_user_client_ui_Panel_onUnload__;
_.java_lang_Object_typeId$ = 8;
function com_google_gwt_user_client_ui_ComplexPanel_$$init__Lcom_google_gwt_user_client_ui_ComplexPanel_2(this$static){
  this$static.com_google_gwt_user_client_ui_ComplexPanel_children = com_google_gwt_user_client_ui_WidgetCollection_$WidgetCollection__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_HasWidgets_2(new com_google_gwt_user_client_ui_WidgetCollection(), this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$ComplexPanel__Lcom_google_gwt_user_client_ui_ComplexPanel_2(this$static){
  com_google_gwt_user_client_ui_ComplexPanel_$$init__Lcom_google_gwt_user_client_ui_ComplexPanel_2(this$static);
  return this$static;
}

function com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2(this$static, child, container){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(child);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
  com_google_gwt_user_client_DOM_appendChild__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(container, child.com_google_gwt_user_client_ui_UIObject_element);
  com_google_gwt_user_client_ui_Panel_$adopt__Lcom_google_gwt_user_client_ui_Panel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, child);
}

function com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  var elem;
  if (w.com_google_gwt_user_client_ui_Widget_parent !== this$static) {
    return false;
  }
  com_google_gwt_user_client_ui_Panel_$orphan__Lcom_google_gwt_user_client_ui_Panel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w);
  elem = w.com_google_gwt_user_client_ui_UIObject_element;
  com_google_gwt_user_client_DOM_removeChild__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_user_client_DOM_getParent__Lcom_google_gwt_user_client_Element_2(elem), elem);
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  return true;
}

function com_google_gwt_user_client_ui_ComplexPanel_iterator__(){
  return com_google_gwt_user_client_ui_WidgetCollection_$iterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2(this.com_google_gwt_user_client_ui_ComplexPanel_children);
}

function com_google_gwt_user_client_ui_ComplexPanel(){
}

_ = com_google_gwt_user_client_ui_ComplexPanel.prototype = new com_google_gwt_user_client_ui_Panel();
_.iterator__ = com_google_gwt_user_client_ui_ComplexPanel_iterator__;
_.java_lang_Object_typeId$ = 9;
function com_google_gwt_user_client_ui_AbsolutePanel_$AbsolutePanel__Lcom_google_gwt_user_client_ui_AbsolutePanel_2(this$static){
  com_google_gwt_user_client_ui_ComplexPanel_$ComplexPanel__Lcom_google_gwt_user_client_ui_ComplexPanel_2(this$static);
  com_google_gwt_user_client_ui_Widget_$setElement__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2(this$static, com_google_gwt_user_client_DOM_createDiv__());
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, 'position', 'relative');
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, 'overflow', 'hidden');
  return this$static;
}

function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2(this$static, w, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, w, left, top){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(w);
  com_google_gwt_user_client_ui_AbsolutePanel_$setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, w, left, top);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w);
}

function com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w);
  if (removed) {
    com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element);
  }
  return removed;
}

function com_google_gwt_user_client_ui_AbsolutePanel_$setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, w, left, top){
  var h;
  h = w.com_google_gwt_user_client_ui_UIObject_element;
  if (left == (-1) && top == (-1)) {
    com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2(h);
  }
   else {
    com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(h, 'position', 'absolute');
    com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(h, 'left', left + 'px');
    com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(h, 'top', top + 'px');
  }
}

function com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2(elem){
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, 'left', '');
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, 'top', '');
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, 'position', '');
}

function com_google_gwt_user_client_ui_AbsolutePanel(){
}

_ = com_google_gwt_user_client_ui_AbsolutePanel.prototype = new com_google_gwt_user_client_ui_ComplexPanel();
_.java_lang_Object_typeId$ = 10;
function DmD_client_DropWidget_$clinit__(){
  DmD_client_DropWidget_$clinit__ = nullMethod;
  DmD_client_DropWidget_currentNode = com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), 'I listen');
}

function DmD_client_DropWidget_$$init__LDmD_client_DropWidget_2(this$static){
  this$static.DmD_client_DropWidget_dropListener = DmD_client_DropWidget$1_$DropWidget$1__LDmD_client_DropWidget$1_2LDmD_client_DropWidget_2(new DmD_client_DropWidget$1(), this$static);
}

function DmD_client_DropWidget_$DropWidget__LDmD_client_DropWidget_2Ljava_lang_String_2(this$static, familyNode){
  DmD_client_DropWidget_$clinit__();
  com_google_gwt_user_client_ui_AbsolutePanel_$AbsolutePanel__Lcom_google_gwt_user_client_ui_AbsolutePanel_2(this$static);
  DmD_client_DropWidget_$$init__LDmD_client_DropWidget_2(this$static);
  this$static.DmD_client_DropWidget_node = familyNode;
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, 'border', '1px solid #330000');
  this$static.DmD_client_DropWidget_dropCollection = com_google_gwt_user_client_dnd_DropListenerCollection_$DropListenerCollection__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2(new com_google_gwt_user_client_dnd_DropListenerCollection());
  com_google_gwt_user_client_dnd_DropListenerCollection_$add__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_dnd_DropListener_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.DmD_client_DropWidget_dropCollection, this$static.DmD_client_DropWidget_dropListener, this$static);
  com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListenerMap.remove__Ljava_lang_Object_2(this$static.DmD_client_DropWidget_dropCollection);
  return this$static;
}

function DmD_client_DropWidget(){
}

_ = DmD_client_DropWidget.prototype = new com_google_gwt_user_client_ui_AbsolutePanel();
_.java_lang_Object_typeId$ = 11;
_.DmD_client_DropWidget_dropCollection = null;
_.DmD_client_DropWidget_node = '';
var DmD_client_DropWidget_currentNode;
function DmD_client_DropWidget$1_$DropWidget$1__LDmD_client_DropWidget$1_2LDmD_client_DropWidget_2(this$static, this$0){
  this$static.DmD_client_DropWidget$1_this$0 = this$0;
  return this$static;
}

function DmD_client_DropWidget$1_onDrop__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(arg0, arg1){
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2((DmD_client_DropWidget_$clinit__() , DmD_client_DropWidget_currentNode), 'You have drop ' + this.DmD_client_DropWidget$1_this$0.DmD_client_DropWidget_node);
}

function DmD_client_DropWidget$1_onDropEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(arg0, arg1){
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2((DmD_client_DropWidget_$clinit__() , DmD_client_DropWidget_currentNode), 'You are over ' + this.DmD_client_DropWidget$1_this$0.DmD_client_DropWidget_node);
}

function DmD_client_DropWidget$1_onDropExit__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(arg0, arg1){
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2((DmD_client_DropWidget_$clinit__() , DmD_client_DropWidget_currentNode), 'Not over node');
}

function DmD_client_DropWidget$1_onDropOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(arg0, arg1){
}

function DmD_client_DropWidget$1(){
}

_ = DmD_client_DropWidget$1.prototype = new java_lang_Object();
_.onDrop__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = DmD_client_DropWidget$1_onDrop__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDropEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = DmD_client_DropWidget$1_onDropEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDropExit__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = DmD_client_DropWidget$1_onDropExit__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDropOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = DmD_client_DropWidget$1_onDropOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.java_lang_Object_typeId$ = 12;
function DmD_client_RussianDolls_$$init__LDmD_client_RussianDolls_2(this$static){
  this$static.DmD_client_RussianDolls_childListener = DmD_client_RussianDolls$1_$RussianDolls$1__LDmD_client_RussianDolls$1_2LDmD_client_RussianDolls_2(new DmD_client_RussianDolls$1(), this$static);
}

function DmD_client_RussianDolls_$RussianDolls__LDmD_client_RussianDolls_2Lcom_google_gwt_user_client_ui_Widget_2Ljava_util_Vector_2(this$static, dropWidget, dropChildList){
  DmD_client_RussianDolls_$$init__LDmD_client_RussianDolls_2(this$static);
  this$static.DmD_client_RussianDolls_dropWidget = dropWidget;
  this$static.DmD_client_RussianDolls_childList = dropChildList;
  this$static.DmD_client_RussianDolls_dropCollection = com_google_gwt_user_client_dnd_DropListenerCollection_$DropListenerCollection__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2(new com_google_gwt_user_client_dnd_DropListenerCollection());
  com_google_gwt_user_client_dnd_DropListenerCollection_$add__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_dnd_DropListener_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.DmD_client_RussianDolls_dropCollection, this$static.DmD_client_RussianDolls_childListener, dropWidget);
  com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListenerMap.remove__Ljava_lang_Object_2(this$static.DmD_client_RussianDolls_dropCollection);
  return this$static;
}

function DmD_client_RussianDolls_$addDropListener__LDmD_client_RussianDolls_2LDmD_client_DropWidget_2(this$static, drop){
  if (drop === this$static.DmD_client_RussianDolls_dropWidget) {
    java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(this$static.DmD_client_RussianDolls_dropCollection, drop.DmD_client_DropWidget_dropListener);
  }
}

function DmD_client_RussianDolls_$detectChildren__LDmD_client_RussianDolls_2Ljava_util_Vector_2(this$static, childList){
  var drop, it, widget;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(childList); it.hasNext__();) {
    drop = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 2);
    widget = drop.com_google_gwt_user_client_dnd_DropListenerCollection_widget;
    if (com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_detectDrop__IIIILcom_google_gwt_user_client_ui_Widget_2(DmD_client_RussianDolls_mouse.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_left, DmD_client_RussianDolls_mouse.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_right, DmD_client_RussianDolls_mouse.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_top, DmD_client_RussianDolls_mouse.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_bottom, widget) && widget !== this$static.DmD_client_RussianDolls_dropWidget) {
      com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$setDrop__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2Lcom_google_gwt_user_client_ui_Widget_2(DmD_client_RussianDolls_mouse, widget);
      com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$setDropCollection__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2Lcom_google_gwt_user_client_dnd_DropListenerCollection_2(DmD_client_RussianDolls_mouse, drop);
      com_google_gwt_user_client_dnd_DropListenerCollection_$fireOnDropEnter__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(drop, widget, DmD_client_RussianDolls_mouse.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drag);
      break;
    }
  }
}

function DmD_client_RussianDolls(){
}

_ = DmD_client_RussianDolls.prototype = new java_lang_Object();
_.java_lang_Object_typeId$ = 0;
_.DmD_client_RussianDolls_childList = null;
_.DmD_client_RussianDolls_dropCollection = null;
_.DmD_client_RussianDolls_dropWidget = null;
var DmD_client_RussianDolls_mouse = null;
function com_google_gwt_user_client_dnd_DropListenerAdapter_onDrop__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, source){
}

function com_google_gwt_user_client_dnd_DropListenerAdapter_onDropEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, source){
}

function com_google_gwt_user_client_dnd_DropListenerAdapter_onDropExit__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, source){
}

function com_google_gwt_user_client_dnd_DropListenerAdapter_onDropOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, source){
}

function com_google_gwt_user_client_dnd_DropListenerAdapter(){
}

_ = com_google_gwt_user_client_dnd_DropListenerAdapter.prototype = new java_lang_Object();
_.onDrop__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_dnd_DropListenerAdapter_onDrop__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDropEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_dnd_DropListenerAdapter_onDropEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDropExit__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_dnd_DropListenerAdapter_onDropExit__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDropOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_dnd_DropListenerAdapter_onDropOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.java_lang_Object_typeId$ = 13;
function DmD_client_RussianDolls$1_$RussianDolls$1__LDmD_client_RussianDolls$1_2LDmD_client_RussianDolls_2(this$static, this$0){
  this$static.DmD_client_RussianDolls$1_this$0 = this$0;
  return this$static;
}

function DmD_client_RussianDolls$1_onDrop__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(arg0, arg1){
}

function DmD_client_RussianDolls$1_onDropEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(arg0, arg1){
  com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$updatePosition__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2Ljava_util_Vector_2(DmD_client_RussianDolls_mouse, this.DmD_client_RussianDolls$1_this$0.DmD_client_RussianDolls_childList);
}

function DmD_client_RussianDolls$1_onDropOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(arg0, arg1){
  DmD_client_RussianDolls_$detectChildren__LDmD_client_RussianDolls_2Ljava_util_Vector_2(this.DmD_client_RussianDolls$1_this$0, this.DmD_client_RussianDolls$1_this$0.DmD_client_RussianDolls_childList);
}

function DmD_client_RussianDolls$1(){
}

_ = DmD_client_RussianDolls$1.prototype = new com_google_gwt_user_client_dnd_DropListenerAdapter();
_.onDrop__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = DmD_client_RussianDolls$1_onDrop__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDropEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = DmD_client_RussianDolls$1_onDropEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.onDropOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2 = DmD_client_RussianDolls$1_onDropOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2;
_.java_lang_Object_typeId$ = 14;
var com_google_gwt_core_client_GWT_sUncaughtExceptionHandler = null;
function com_google_gwt_core_client_Impl_getHashCode__Lcom_google_gwt_core_client_JavaScriptObject_2(o){
  return o == null?0:o.$H?o.$H:(o.$H = com_google_gwt_core_client_Impl_getNextHashId__());
}

function com_google_gwt_core_client_Impl_getHashCode__Ljava_lang_Object_2(o){
  return o == null?0:o.$H?o.$H:(o.$H = com_google_gwt_core_client_Impl_getNextHashId__());
}

function com_google_gwt_core_client_Impl_getNextHashId__(){
  return ++com_google_gwt_core_client_Impl_sNextHashId;
}

var com_google_gwt_core_client_Impl_sNextHashId = 0;
function java_lang_Throwable_$Throwable__Ljava_lang_Throwable_2Ljava_lang_String_2(this$static, message){
  message;
  return this$static;
}

function java_lang_Throwable(){
}

_ = java_lang_Throwable.prototype = new java_lang_Object();
_.java_lang_Object_typeId$ = 15;
function java_lang_Exception_$Exception__Ljava_lang_Exception_2Ljava_lang_String_2(this$static, message){
  java_lang_Throwable_$Throwable__Ljava_lang_Throwable_2Ljava_lang_String_2(this$static, message);
  return this$static;
}

function java_lang_Exception(){
}

_ = java_lang_Exception.prototype = new java_lang_Throwable();
_.java_lang_Object_typeId$ = 16;
function java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(this$static, message){
  java_lang_Exception_$Exception__Ljava_lang_Exception_2Ljava_lang_String_2(this$static, message);
  return this$static;
}

function java_lang_RuntimeException(){
}

_ = java_lang_RuntimeException.prototype = new java_lang_Exception();
_.java_lang_Object_typeId$ = 17;
function com_google_gwt_core_client_JavaScriptException_$JavaScriptException__Lcom_google_gwt_core_client_JavaScriptException_2Ljava_lang_String_2Ljava_lang_String_2(this$static, name, description){
  java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(this$static, 'JavaScript ' + name + ' exception: ' + description);
  return this$static;
}

function com_google_gwt_core_client_JavaScriptException(){
}

_ = com_google_gwt_core_client_JavaScriptException.prototype = new java_lang_RuntimeException();
_.java_lang_Object_typeId$ = 18;
function com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static, other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(other, 3)) {
    return false;
  }
  return com_google_gwt_core_client_JavaScriptObject_equalsImpl__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(other, 3));
}

function com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2(this$static){
  return com_google_gwt_core_client_Impl_getHashCode__Lcom_google_gwt_core_client_JavaScriptObject_2(this$static);
}

function com_google_gwt_core_client_JavaScriptObject_createArray__(){
  return [];
}

function com_google_gwt_core_client_JavaScriptObject_createObject__(){
  return {};
}

function com_google_gwt_core_client_JavaScriptObject_equals__Ljava_lang_Object_2(other){
  return com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this, other);
}

function com_google_gwt_core_client_JavaScriptObject_equalsImpl__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(o, other){
  return o === other;
}

function com_google_gwt_core_client_JavaScriptObject_hashCode__(){
  return com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2(this);
}

function com_google_gwt_core_client_JavaScriptObject(){
}

_ = com_google_gwt_core_client_JavaScriptObject.prototype = new java_lang_Object();
_.java_lang_Object_equals$ = com_google_gwt_core_client_JavaScriptObject_equals__Ljava_lang_Object_2;
_.java_lang_Object_hashCode$ = com_google_gwt_core_client_JavaScriptObject_hashCode__;
_.java_lang_Object_typeId$ = 19;
function com_google_gwt_lang_Array_$Array__Lcom_google_gwt_lang_Array_2IIILjava_lang_String_2(this$static, length, typeId, queryId, typeName){
  this$static.com_google_gwt_lang_Array_length = length;
  this$static.com_google_gwt_lang_Array_queryId = queryId;
  typeName;
  this$static.java_lang_Object_typeId$ = typeId;
  return this$static;
}

function com_google_gwt_lang_Array__1set__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(array, index, value){
  return array[index] = value;
}

function com_google_gwt_lang_Array_getIntValue__Ljava_lang_Object_2I(values, index){
  return values[index];
}

function com_google_gwt_lang_Array_getValueCount__Ljava_lang_Object_2(values){
  return values.length;
}

function com_google_gwt_lang_Array_initDims__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(typeName, typeIdExprs, queryIdExprs, dimExprs, defaultValue){
  return com_google_gwt_lang_Array_initDims__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2IILjava_lang_Object_2(typeName, typeIdExprs, queryIdExprs, dimExprs, 0, com_google_gwt_lang_Array_getValueCount__Ljava_lang_Object_2(dimExprs), defaultValue);
}

function com_google_gwt_lang_Array_initDims__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2IILjava_lang_Object_2(typeName, typeIdExprs, queryIdExprs, dimExprs, index, count, defaultValue){
  var i, length, result;
  if ((length = com_google_gwt_lang_Array_getIntValue__Ljava_lang_Object_2I(dimExprs, index)) < 0) {
    throw new java_lang_NegativeArraySizeException();
  }
  result = com_google_gwt_lang_Array_$Array__Lcom_google_gwt_lang_Array_2IIILjava_lang_String_2(new com_google_gwt_lang_Array(), length, com_google_gwt_lang_Array_getIntValue__Ljava_lang_Object_2I(typeIdExprs, index), com_google_gwt_lang_Array_getIntValue__Ljava_lang_Object_2I(queryIdExprs, index), typeName);
  ++index;
  if (index < count) {
    typeName = java_lang_String_$substring__Ljava_lang_String_2I(typeName, 1);
    for (i = 0; i < length; ++i) {
      com_google_gwt_lang_Array__1set__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(result, i, com_google_gwt_lang_Array_initDims__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2IILjava_lang_Object_2(typeName, typeIdExprs, queryIdExprs, dimExprs, index, count, defaultValue));
    }
  }
   else {
    for (i = 0; i < length; ++i) {
      com_google_gwt_lang_Array__1set__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(result, i, defaultValue);
    }
  }
  return result;
}

function com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(array, index, value){
  if (value !== null && array.com_google_gwt_lang_Array_queryId != 0 && !com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(value, array.com_google_gwt_lang_Array_queryId)) {
    throw new java_lang_ArrayStoreException();
  }
  return com_google_gwt_lang_Array__1set__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(array, index, value);
}

function com_google_gwt_lang_Array(){
}

_ = com_google_gwt_lang_Array.prototype = new java_lang_Object();
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_lang_Cast_canCast__II(srcId, dstId){
  return !(!(srcId && com_google_gwt_lang_Cast_typeIdArray[srcId][dstId]));
}

function com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(src, dstId){
  if (src != null)
    com_google_gwt_lang_Cast_canCast__II(src.java_lang_Object_typeId$, dstId) || com_google_gwt_lang_Cast_throwClassCastException__();
  return src;
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(src, dstId){
  return src != null && com_google_gwt_lang_Cast_canCast__II(src.java_lang_Object_typeId$, dstId);
}

function com_google_gwt_lang_Cast_throwClassCastException__(){
  throw new java_lang_ClassCastException();
}

function com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2(o){
  if (o !== null) {
    throw new java_lang_ClassCastException();
  }
  return o;
}

function com_google_gwt_lang_Cast_wrapJSO__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(jso, seed){
  _ = seed.prototype;
  if (jso && !(jso.java_lang_Object_typeId$ >= _.java_lang_Object_typeId$)) {
    var oldToString = jso.toString;
    for (var i in _) {
      jso[i] = _[i];
    }
    jso.toString = oldToString;
  }
  return jso;
}

var com_google_gwt_lang_Cast_typeIdArray;
function com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2(e){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(e, 4)) {
    return e;
  }
  return com_google_gwt_core_client_JavaScriptException_$JavaScriptException__Lcom_google_gwt_core_client_JavaScriptException_2Ljava_lang_String_2Ljava_lang_String_2(new com_google_gwt_core_client_JavaScriptException(), com_google_gwt_lang_Exceptions_javaScriptExceptionName__Ljava_lang_Object_2(e), com_google_gwt_lang_Exceptions_javaScriptExceptionDescription__Ljava_lang_Object_2(e));
}

function com_google_gwt_lang_Exceptions_javaScriptExceptionDescription__Ljava_lang_Object_2(e){
  return e.message;
}

function com_google_gwt_lang_Exceptions_javaScriptExceptionName__Ljava_lang_Object_2(e){
  return e.name;
}

function com_google_gwt_user_client_DOM_$clinit__(){
  com_google_gwt_user_client_DOM_$clinit__ = nullMethod;
  com_google_gwt_user_client_DOM_sEventPreviewStack = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  {
    com_google_gwt_user_client_DOM_impl = new com_google_gwt_user_client_impl_DOMImplSafari();
    com_google_gwt_user_client_impl_DOMImplStandard_$init__Lcom_google_gwt_user_client_impl_DOMImplStandard_2(com_google_gwt_user_client_DOM_impl);
  }
}

function com_google_gwt_user_client_DOM_appendChild__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(parent, child){
  com_google_gwt_user_client_DOM_$clinit__();
  com_google_gwt_user_client_impl_DOMImpl_$appendChild__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_user_client_DOM_impl, parent, child);
}

function com_google_gwt_user_client_DOM_compare__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(elem1, elem2){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImplStandard_$compare__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_user_client_DOM_impl, elem1, elem2);
}

function com_google_gwt_user_client_DOM_createDiv__(){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImpl_$createElement__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2(com_google_gwt_user_client_DOM_impl, 'div');
}

function com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(evt, elem, listener){
  com_google_gwt_user_client_DOM_$clinit__();
  var handler;
  handler = com_google_gwt_core_client_GWT_sUncaughtExceptionHandler;
  {
    com_google_gwt_user_client_DOM_dispatchEventImpl__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(evt, elem, listener);
  }
}

function com_google_gwt_user_client_DOM_dispatchEventImpl__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(evt, elem, listener){
  com_google_gwt_user_client_DOM_$clinit__();
  var prevCurrentEvent;
  if (elem === com_google_gwt_user_client_DOM_sCaptureElem) {
    if (com_google_gwt_user_client_DOM_eventGetType__Lcom_google_gwt_user_client_Event_2(evt) == 8192) {
      com_google_gwt_user_client_DOM_sCaptureElem = null;
    }
  }
  prevCurrentEvent = com_google_gwt_user_client_DOM_currentEvent;
  com_google_gwt_user_client_DOM_currentEvent = evt;
  try {
    listener.onBrowserEvent__Lcom_google_gwt_user_client_Event_2(evt);
  }
   finally {
    com_google_gwt_user_client_DOM_currentEvent = prevCurrentEvent;
  }
}

function com_google_gwt_user_client_DOM_eventCancelBubble__Lcom_google_gwt_user_client_Event_2Z(evt, cancel){
  com_google_gwt_user_client_DOM_$clinit__();
  com_google_gwt_user_client_impl_DOMImpl_$eventCancelBubble__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Event_2Z(com_google_gwt_user_client_DOM_impl, evt, cancel);
}

function com_google_gwt_user_client_DOM_eventGetClientX__Lcom_google_gwt_user_client_Event_2(evt){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImplSafari_$eventGetClientX__Lcom_google_gwt_user_client_impl_DOMImplSafari_2Lcom_google_gwt_user_client_Event_2(com_google_gwt_user_client_DOM_impl, evt);
}

function com_google_gwt_user_client_DOM_eventGetClientY__Lcom_google_gwt_user_client_Event_2(evt){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImplSafari_$eventGetClientY__Lcom_google_gwt_user_client_impl_DOMImplSafari_2Lcom_google_gwt_user_client_Event_2(com_google_gwt_user_client_DOM_impl, evt);
}

function com_google_gwt_user_client_DOM_eventGetFromElement__Lcom_google_gwt_user_client_Event_2(evt){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImplStandard_$eventGetFromElement__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Event_2(com_google_gwt_user_client_DOM_impl, evt);
}

function com_google_gwt_user_client_DOM_eventGetToElement__Lcom_google_gwt_user_client_Event_2(evt){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImplStandard_$eventGetToElement__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Event_2(com_google_gwt_user_client_DOM_impl, evt);
}

function com_google_gwt_user_client_DOM_eventGetType__Lcom_google_gwt_user_client_Event_2(evt){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Event_2(com_google_gwt_user_client_DOM_impl, evt);
}

function com_google_gwt_user_client_DOM_eventPreventDefault__Lcom_google_gwt_user_client_Event_2(evt){
  com_google_gwt_user_client_DOM_$clinit__();
  com_google_gwt_user_client_impl_DOMImplStandard_$eventPreventDefault__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Event_2(com_google_gwt_user_client_DOM_impl, evt);
}

function com_google_gwt_user_client_DOM_getAbsoluteLeft__Lcom_google_gwt_user_client_Element_2(elem){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImplSafari_$getAbsoluteLeft__Lcom_google_gwt_user_client_impl_DOMImplSafari_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_user_client_DOM_impl, elem);
}

function com_google_gwt_user_client_DOM_getAbsoluteTop__Lcom_google_gwt_user_client_Element_2(elem){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImplSafari_$getAbsoluteTop__Lcom_google_gwt_user_client_impl_DOMImplSafari_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_user_client_DOM_impl, elem);
}

function com_google_gwt_user_client_DOM_getElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(elem, prop){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImpl_$getElementPropertyInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(com_google_gwt_user_client_DOM_impl, elem, prop);
}

function com_google_gwt_user_client_DOM_getEventsSunk__Lcom_google_gwt_user_client_Element_2(elem){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImpl_$getEventsSunk__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_user_client_DOM_impl, elem);
}

function com_google_gwt_user_client_DOM_getParent__Lcom_google_gwt_user_client_Element_2(elem){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImplStandard_$getParent__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_user_client_DOM_impl, elem);
}

function com_google_gwt_user_client_DOM_isOrHasChild__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(parent, child){
  com_google_gwt_user_client_DOM_$clinit__();
  return com_google_gwt_user_client_impl_DOMImplStandard_$isOrHasChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_user_client_DOM_impl, parent, child);
}

function com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2(evt){
  com_google_gwt_user_client_DOM_$clinit__();
  var preview, ret;
  ret = true;
  if (com_google_gwt_user_client_DOM_sEventPreviewStack.java_util_ArrayList_size > 0) {
    preview = com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(com_google_gwt_user_client_DOM_sEventPreviewStack, com_google_gwt_user_client_DOM_sEventPreviewStack.java_util_ArrayList_size - 1));
    if (!(ret = null.nullMethod())) {
      com_google_gwt_user_client_DOM_eventCancelBubble__Lcom_google_gwt_user_client_Event_2Z(evt, true);
      com_google_gwt_user_client_DOM_eventPreventDefault__Lcom_google_gwt_user_client_Event_2(evt);
    }
  }
  return ret;
}

function com_google_gwt_user_client_DOM_releaseCapture__Lcom_google_gwt_user_client_Element_2(elem){
  com_google_gwt_user_client_DOM_$clinit__();
  if (com_google_gwt_user_client_DOM_sCaptureElem !== null && com_google_gwt_user_client_DOM_compare__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(elem, com_google_gwt_user_client_DOM_sCaptureElem)) {
    com_google_gwt_user_client_DOM_sCaptureElem = null;
  }
  com_google_gwt_user_client_impl_DOMImplStandard_$releaseCapture__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_user_client_DOM_impl, elem);
}

function com_google_gwt_user_client_DOM_removeChild__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(parent, child){
  com_google_gwt_user_client_DOM_$clinit__();
  com_google_gwt_user_client_impl_DOMImpl_$removeChild__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_user_client_DOM_impl, parent, child);
}

function com_google_gwt_user_client_DOM_setCapture__Lcom_google_gwt_user_client_Element_2(elem){
  com_google_gwt_user_client_DOM_$clinit__();
  com_google_gwt_user_client_DOM_sCaptureElem = elem;
  com_google_gwt_user_client_impl_DOMImplStandard_$setCapture__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_user_client_DOM_impl, elem);
}

function com_google_gwt_user_client_DOM_setElementProperty__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, prop, value){
  com_google_gwt_user_client_DOM_$clinit__();
  com_google_gwt_user_client_impl_DOMImpl_$setElementProperty__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_user_client_DOM_impl, elem, prop, value);
}

function com_google_gwt_user_client_DOM_setElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2I(elem, prop, value){
  com_google_gwt_user_client_DOM_$clinit__();
  com_google_gwt_user_client_impl_DOMImpl_$setElementPropertyInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2I(com_google_gwt_user_client_DOM_impl, elem, prop, value);
}

function com_google_gwt_user_client_DOM_setEventListener__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(elem, listener){
  com_google_gwt_user_client_DOM_$clinit__();
  com_google_gwt_user_client_impl_DOMImpl_$setEventListener__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(com_google_gwt_user_client_DOM_impl, elem, listener);
}

function com_google_gwt_user_client_DOM_setInnerText__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(elem, text){
  com_google_gwt_user_client_DOM_$clinit__();
  com_google_gwt_user_client_impl_DOMImpl_$setInnerText__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(com_google_gwt_user_client_DOM_impl, elem, text);
}

function com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, attr, value){
  com_google_gwt_user_client_DOM_$clinit__();
  com_google_gwt_user_client_impl_DOMImpl_$setStyleAttribute__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_user_client_DOM_impl, elem, attr, value);
}

function com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2I(elem, eventBits){
  com_google_gwt_user_client_DOM_$clinit__();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2I(com_google_gwt_user_client_DOM_impl, elem, eventBits);
}

var com_google_gwt_user_client_DOM_currentEvent = null, com_google_gwt_user_client_DOM_impl = null, com_google_gwt_user_client_DOM_sCaptureElem = null, com_google_gwt_user_client_DOM_sEventPreviewStack;
function com_google_gwt_user_client_Element_equals__Ljava_lang_Object_2(other){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(other, 5)) {
    return com_google_gwt_user_client_DOM_compare__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(other, 5));
  }
  return com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_wrapJSO__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this, com_google_gwt_user_client_Element), other);
}

function com_google_gwt_user_client_Element_hashCode__(){
  return com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2(com_google_gwt_lang_Cast_wrapJSO__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this, com_google_gwt_user_client_Element));
}

function com_google_gwt_user_client_Element(){
}

_ = com_google_gwt_user_client_Element.prototype = new com_google_gwt_core_client_JavaScriptObject();
_.java_lang_Object_equals$ = com_google_gwt_user_client_Element_equals__Ljava_lang_Object_2;
_.java_lang_Object_hashCode$ = com_google_gwt_user_client_Element_hashCode__;
_.java_lang_Object_typeId$ = 20;
function com_google_gwt_user_client_Event_equals__Ljava_lang_Object_2(other){
  return com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_wrapJSO__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this, com_google_gwt_user_client_Event), other);
}

function com_google_gwt_user_client_Event_hashCode__(){
  return com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2(com_google_gwt_lang_Cast_wrapJSO__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this, com_google_gwt_user_client_Event));
}

function com_google_gwt_user_client_Event(){
}

_ = com_google_gwt_user_client_Event.prototype = new com_google_gwt_core_client_JavaScriptObject();
_.java_lang_Object_equals$ = com_google_gwt_user_client_Event_equals__Ljava_lang_Object_2;
_.java_lang_Object_hashCode$ = com_google_gwt_user_client_Event_hashCode__;
_.java_lang_Object_typeId$ = 21;
function com_google_gwt_user_client_Timer_$clinit__(){
  com_google_gwt_user_client_Timer_$clinit__ = nullMethod;
  com_google_gwt_user_client_Timer_timers = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  {
    com_google_gwt_user_client_Timer_hookWindowClosing__();
  }
}

function com_google_gwt_user_client_Timer_hookWindowClosing__(){
  com_google_gwt_user_client_Timer_$clinit__();
  com_google_gwt_user_client_Window_addWindowCloseListener__Lcom_google_gwt_user_client_WindowCloseListener_2(new com_google_gwt_user_client_Timer$1());
}

var com_google_gwt_user_client_Timer_timers;
function com_google_gwt_user_client_Timer$1_onWindowClosed__(){
  while ((com_google_gwt_user_client_Timer_$clinit__() , com_google_gwt_user_client_Timer_timers).java_util_ArrayList_size > 0) {
    com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2I((com_google_gwt_user_client_Timer_$clinit__() , com_google_gwt_user_client_Timer_timers), 0)).nullMethod();
  }
}

function com_google_gwt_user_client_Timer$1_onWindowClosing__(){
  return null;
}

function com_google_gwt_user_client_Timer$1(){
}

_ = com_google_gwt_user_client_Timer$1.prototype = new java_lang_Object();
_.onWindowClosed__ = com_google_gwt_user_client_Timer$1_onWindowClosed__;
_.onWindowClosing__ = com_google_gwt_user_client_Timer$1_onWindowClosing__;
_.java_lang_Object_typeId$ = 22;
function com_google_gwt_user_client_Window_$clinit__(){
  com_google_gwt_user_client_Window_$clinit__ = nullMethod;
  com_google_gwt_user_client_Window_closingListeners = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  com_google_gwt_user_client_Window_resizeListeners = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  {
    com_google_gwt_user_client_Window_init__();
  }
}

function com_google_gwt_user_client_Window_addWindowCloseListener__Lcom_google_gwt_user_client_WindowCloseListener_2(listener){
  com_google_gwt_user_client_Window_$clinit__();
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(com_google_gwt_user_client_Window_closingListeners, listener);
}

function com_google_gwt_user_client_Window_fireClosedImpl__(){
  com_google_gwt_user_client_Window_$clinit__();
  var it, listener;
  for (it = com_google_gwt_user_client_Window_closingListeners.iterator__(); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 6);
    listener.onWindowClosed__();
  }
}

function com_google_gwt_user_client_Window_fireClosingImpl__(){
  com_google_gwt_user_client_Window_$clinit__();
  var it, listener, msg, ret;
  ret = null;
  for (it = com_google_gwt_user_client_Window_closingListeners.iterator__(); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 6);
    msg = listener.onWindowClosing__();
    {
      ret = msg;
    }
  }
  return ret;
}

function com_google_gwt_user_client_Window_fireResizedImpl__(){
  com_google_gwt_user_client_Window_$clinit__();
  var it, listener;
  for (it = com_google_gwt_user_client_Window_resizeListeners.iterator__(); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2(it.next__());
    null.nullMethod();
  }
}

function com_google_gwt_user_client_Window_getScrollLeft__(){
  com_google_gwt_user_client_Window_$clinit__();
  return $doc.documentElement.scrollLeft || $doc.body.scrollLeft;
}

function com_google_gwt_user_client_Window_getScrollTop__(){
  com_google_gwt_user_client_Window_$clinit__();
  return $doc.documentElement.scrollTop || $doc.body.scrollTop;
}

function com_google_gwt_user_client_Window_init__(){
  com_google_gwt_user_client_Window_$clinit__();
  __gwt_initHandlers(function(){
    com_google_gwt_user_client_Window_onResize__();
  }
  , function(){
    return com_google_gwt_user_client_Window_onClosing__();
  }
  , function(){
    com_google_gwt_user_client_Window_onClosed__();
    $wnd.onresize = null;
    $wnd.onbeforeclose = null;
    $wnd.onclose = null;
  }
  );
}

function com_google_gwt_user_client_Window_onClosed__(){
  com_google_gwt_user_client_Window_$clinit__();
  var handler;
  handler = com_google_gwt_core_client_GWT_sUncaughtExceptionHandler;
  {
    com_google_gwt_user_client_Window_fireClosedImpl__();
  }
}

function com_google_gwt_user_client_Window_onClosing__(){
  com_google_gwt_user_client_Window_$clinit__();
  var handler;
  handler = com_google_gwt_core_client_GWT_sUncaughtExceptionHandler;
  {
    return com_google_gwt_user_client_Window_fireClosingImpl__();
  }
}

function com_google_gwt_user_client_Window_onResize__(){
  com_google_gwt_user_client_Window_$clinit__();
  var handler;
  handler = com_google_gwt_core_client_GWT_sUncaughtExceptionHandler;
  {
    com_google_gwt_user_client_Window_fireResizedImpl__();
  }
}

var com_google_gwt_user_client_Window_closingListeners, com_google_gwt_user_client_Window_resizeListeners;
function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_util_Iterator_2Ljava_lang_Object_2(this$static, iter, o){
  var t;
  while (iter.hasNext__()) {
    t = iter.next__();
    if (o === null?t === null:o.java_lang_Object_equals$(t)) {
      return iter;
    }
  }
  return null;
}

function java_util_AbstractCollection_add__Ljava_lang_Object_2(o){
  throw java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2(new java_lang_UnsupportedOperationException(), 'add');
}

function java_util_AbstractCollection_contains__Ljava_lang_Object_2(o){
  var iter;
  iter = java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_util_Iterator_2Ljava_lang_Object_2(this, this.iterator__(), o);
  return iter !== null;
}

function java_util_AbstractCollection_remove__Ljava_lang_Object_2(o){
  var iter;
  iter = java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_util_Iterator_2Ljava_lang_Object_2(this, this.iterator__(), o);
  if (iter !== null) {
    iter.remove__();
    return true;
  }
   else {
    return false;
  }
}

function java_util_AbstractCollection(){
}

_ = java_util_AbstractCollection.prototype = new java_lang_Object();
_.add__Ljava_lang_Object_2 = java_util_AbstractCollection_add__Ljava_lang_Object_2;
_.contains__Ljava_lang_Object_2 = java_util_AbstractCollection_contains__Ljava_lang_Object_2;
_.remove__Ljava_lang_Object_2 = java_util_AbstractCollection_remove__Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 0;
function java_util_AbstractList_$indexOutOfBounds__Ljava_util_AbstractList_2I(this$static, i){
  throw java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_String_2(new java_lang_IndexOutOfBoundsException(), 'Index: ' + i + ', Size: ' + this$static.java_util_ArrayList_size);
}

function java_util_AbstractList_add__ILjava_lang_Object_2(index, element){
  throw java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2(new java_lang_UnsupportedOperationException(), 'add');
}

function java_util_AbstractList_add__Ljava_lang_Object_2(obj){
  this.add__ILjava_lang_Object_2(this.size__(), obj);
  return true;
}

function java_util_AbstractList_equals__Ljava_lang_Object_2(o){
  var elem, elemOther, iter, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(o, 17)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(o, 17);
  if (this.size__() != other.size__()) {
    return false;
  }
  iter = this.iterator__();
  iterOther = other.iterator__();
  while (iter.hasNext__()) {
    elem = iter.next__();
    elemOther = iterOther.next__();
    if (!(elem === null?elemOther === null:elem.java_lang_Object_equals$(elemOther))) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractList_hashCode__(){
  var coeff, iter, k, obj;
  k = 1;
  coeff = 31;
  iter = this.iterator__();
  while (iter.hasNext__()) {
    obj = iter.next__();
    k = 31 * k + (obj === null?0:obj.java_lang_Object_hashCode$());
  }
  return k;
}

function java_util_AbstractList_iterator__(){
  return java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2Ljava_util_AbstractList_2(new java_util_AbstractList$IteratorImpl(), this);
}

function java_util_AbstractList_remove__I(index){
  throw java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2(new java_lang_UnsupportedOperationException(), 'remove');
}

function java_util_AbstractList(){
}

_ = java_util_AbstractList.prototype = new java_util_AbstractCollection();
_.add__ILjava_lang_Object_2 = java_util_AbstractList_add__ILjava_lang_Object_2;
_.add__Ljava_lang_Object_2 = java_util_AbstractList_add__Ljava_lang_Object_2;
_.java_lang_Object_equals$ = java_util_AbstractList_equals__Ljava_lang_Object_2;
_.java_lang_Object_hashCode$ = java_util_AbstractList_hashCode__;
_.iterator__ = java_util_AbstractList_iterator__;
_.remove__I = java_util_AbstractList_remove__I;
_.java_lang_Object_typeId$ = 23;
function java_util_Vector_$Vector__Ljava_util_Vector_2(this$static){
  this$static.java_util_Vector_arrayList = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  return this$static;
}

function java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(this$static, o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static.java_util_Vector_arrayList, o);
}

function java_util_Vector_$iterator__Ljava_util_Vector_2(this$static){
  return this$static.java_util_Vector_arrayList.iterator__();
}

function java_util_Vector_add__ILjava_lang_Object_2(index, o){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_Vector_arrayList, index, o);
}

function java_util_Vector_add__Ljava_lang_Object_2(o){
  return java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(this, o);
}

function java_util_Vector_contains__Ljava_lang_Object_2(elem){
  return java_util_ArrayList_$contains__Ljava_util_ArrayList_2Ljava_lang_Object_2(this.java_util_Vector_arrayList, elem);
}

function java_util_Vector_get__I(index){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this.java_util_Vector_arrayList, index);
}

function java_util_Vector_iterator__(){
  return java_util_Vector_$iterator__Ljava_util_Vector_2(this);
}

function java_util_Vector_remove__I(index){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2I(this.java_util_Vector_arrayList, index);
}

function java_util_Vector_size__(){
  return this.java_util_Vector_arrayList.java_util_ArrayList_size;
}

function java_util_Vector(){
}

_ = java_util_Vector.prototype = new java_util_AbstractList();
_.add__ILjava_lang_Object_2 = java_util_Vector_add__ILjava_lang_Object_2;
_.add__Ljava_lang_Object_2 = java_util_Vector_add__Ljava_lang_Object_2;
_.contains__Ljava_lang_Object_2 = java_util_Vector_contains__Ljava_lang_Object_2;
_.get__I = java_util_Vector_get__I;
_.iterator__ = java_util_Vector_iterator__;
_.remove__I = java_util_Vector_remove__I;
_.size__ = java_util_Vector_size__;
_.java_lang_Object_typeId$ = 24;
_.java_util_Vector_arrayList = null;
function com_google_gwt_user_client_dnd_DragListenerCollection_$DragListenerCollection__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2(this$static){
  java_util_Vector_$Vector__Ljava_util_Vector_2(this$static);
  return this$static;
}

function com_google_gwt_user_client_dnd_DragListenerCollection_$add__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_dnd_DragListener_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, listener, w){
  if (this$static.com_google_gwt_user_client_dnd_DragListenerCollection_handle === null && listener !== null) {
    this$static.com_google_gwt_user_client_dnd_DragListenerCollection_handle = com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$MouseDragGestureRecognizer__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2(new com_google_gwt_user_client_dnd_MouseDragGestureRecognizer(), this$static, w);
  }
  if (listener !== null) {
    java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(this$static, listener);
  }
}

function com_google_gwt_user_client_dnd_DragListenerCollection_$fireDragOnDrop__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender, target){
  var it, listener;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(this$static); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 7);
    listener.onDragDropEnd__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, target);
  }
}

function com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragEnd__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, sender, x, y){
  var it, listener;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(this$static); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 7);
    listener.onDragEnd__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y);
  }
}

function com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragEnter__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender, target){
  var it, listener;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(this$static); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 7);
    listener.onDragEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, target);
  }
}

function com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragExit__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender, target){
  var it, listener;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(this$static); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 7);
    listener.onDragExit__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, target);
  }
}

function com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragMove__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, sender, x, y){
  var it, listener;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(this$static); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 7);
    listener.onDragMouseMoved__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y);
  }
}

function com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragOver__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender, target){
  var it, listener;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(this$static); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 7);
    listener.onDragOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, target);
  }
}

function com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragStart__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, sender, x, y){
  var it, listener;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(this$static); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 7);
    listener.onDragStart__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y);
  }
}

function com_google_gwt_user_client_dnd_DragListenerCollection(){
}

_ = com_google_gwt_user_client_dnd_DragListenerCollection.prototype = new java_util_Vector();
_.java_lang_Object_typeId$ = 25;
_.com_google_gwt_user_client_dnd_DragListenerCollection_handle = null;
function com_google_gwt_user_client_dnd_DropListenerCollection_$DropListenerCollection__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2(this$static){
  java_util_Vector_$Vector__Ljava_util_Vector_2(this$static);
  return this$static;
}

function com_google_gwt_user_client_dnd_DropListenerCollection_$add__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_dnd_DropListener_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, listener, w){
  if (listener !== null) {
    this$static.com_google_gwt_user_client_dnd_DropListenerCollection_widget = w;
    if (this$static.java_util_Vector_arrayList.java_util_ArrayList_size == 0) {
      com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_addDropMap__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2(this$static);
    }
    java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(this$static, listener);
  }
}

function com_google_gwt_user_client_dnd_DropListenerCollection_$fireDropOnDrop__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender, source){
  var it, listener;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(this$static); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 8);
    listener.onDrop__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, source);
  }
}

function com_google_gwt_user_client_dnd_DropListenerCollection_$fireOnDropEnter__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender, source){
  var it, listener;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(this$static); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 8);
    listener.onDropEnter__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, source);
  }
}

function com_google_gwt_user_client_dnd_DropListenerCollection_$fireOnDropExit__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender, source){
  var it, listener;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(this$static); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 8);
    listener.onDropExit__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, source);
  }
}

function com_google_gwt_user_client_dnd_DropListenerCollection_$fireOnDropOver__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender, source){
  var it, listener;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(this$static); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 8);
    listener.onDropOver__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(sender, source);
  }
}

function com_google_gwt_user_client_dnd_DropListenerCollection(){
}

_ = com_google_gwt_user_client_dnd_DropListenerCollection.prototype = new java_util_Vector();
_.java_lang_Object_typeId$ = 26;
_.com_google_gwt_user_client_dnd_DropListenerCollection_widget = null;
function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$MouseDragGestureRecognizer__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, listener, dragHandle){
  this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragListener = listener;
  if (dragHandle !== null) {
    com_google_gwt_user_client_ui_Label_$addMouseListener__Lcom_google_gwt_user_client_ui_Label_2Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2(dragHandle, this$static);
    if (com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_mouseGesture === null) {
      com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_mouseGesture = java_util_HashMap_$HashMap__Ljava_util_HashMap_2(new java_util_HashMap());
    }
    java_util_HashMap_$put__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_mouseGesture, dragHandle, this$static);
  }
  if (com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListenerMap === null) {
    com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListenerMap = java_util_Vector_$Vector__Ljava_util_Vector_2(new java_util_Vector());
  }
  return this$static;
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$endDrag__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2II(this$static, x, y){
  this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_isClic = false;
  this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragOver = false;
  this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_update = true;
  if (this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop !== null && this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle !== null) {
    if (com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_detectDrop__IIIILcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_left, this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_right, this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_top, this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_bottom, this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop)) {
      com_google_gwt_user_client_dnd_DragListenerCollection_$fireDragOnDrop__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragListener, this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle, this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop);
      com_google_gwt_user_client_dnd_DropListenerCollection_$fireDropOnDrop__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListener, this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop, this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle);
      this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListener = null;
      this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop = null;
    }
  }
  if (this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle !== null) {
    com_google_gwt_user_client_DOM_releaseCapture__Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle.com_google_gwt_user_client_ui_UIObject_element);
    com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragEnd__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragListener, this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle, x, y);
    this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle = null;
  }
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$setDrop__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop = w;
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$setDropCollection__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2Lcom_google_gwt_user_client_dnd_DropListenerCollection_2(this$static, d){
  this$static.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListener = d;
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$updatePosition__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2Ljava_util_Vector_2(this$static, list){
  var dropElem, it;
  for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(list); it.hasNext__();) {
    dropElem = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 2).com_google_gwt_user_client_dnd_DropListenerCollection_widget.com_google_gwt_user_client_ui_UIObject_element;
    com_google_gwt_user_client_DOM_setElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2I(dropElem, 'startWidth', com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getWidth__Lcom_google_gwt_user_client_Element_2(dropElem));
    com_google_gwt_user_client_DOM_setElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2I(dropElem, 'startHeight', com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getHeight__Lcom_google_gwt_user_client_Element_2(dropElem));
    com_google_gwt_user_client_DOM_setElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2I(dropElem, 'startLeft', com_google_gwt_user_client_DOM_getAbsoluteLeft__Lcom_google_gwt_user_client_Element_2(dropElem));
    com_google_gwt_user_client_DOM_setElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2I(dropElem, 'startTop', com_google_gwt_user_client_DOM_getAbsoluteTop__Lcom_google_gwt_user_client_Element_2(dropElem));
  }
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_addDropMap__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2(listener){
  if (com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListenerMap === null) {
    com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListenerMap = java_util_Vector_$Vector__Ljava_util_Vector_2(new java_util_Vector());
  }
  java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2(com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListenerMap, listener);
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_detectDrop__IIIILcom_google_gwt_user_client_ui_Widget_2(left, right, top, bottom, w){
  var targetLeft, targetTop, w2;
  w2 = w.com_google_gwt_user_client_ui_UIObject_element;
  targetLeft = com_google_gwt_user_client_DOM_getElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(w2, 'startLeft');
  targetTop = com_google_gwt_user_client_DOM_getElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(w2, 'startTop');
  return bottom > targetTop && top < targetTop + com_google_gwt_user_client_DOM_getElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(w2, 'startHeight') && right > targetLeft && left < targetLeft + com_google_gwt_user_client_DOM_getElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(w2, 'startWidth');
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getBorderLeft__Lcom_google_gwt_user_client_Element_2(elem){
  if (navigator.userAgent.indexOf('Opera') != -1) {
    return -elem.clientLeft;
  }
   else if ($doc.defaultView != null && navigator.userAgent.indexOf('Safari') == -1) {
    var sElem = $doc.defaultView.getComputedStyle(elem, null);
    if (sElem != null) {
      var bLeft = parseInt(sElem.getPropertyValue('border-left-width'));
      return bLeft == -1?0:bLeft;
    }
  }
  return 0;
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getBorderTop__Lcom_google_gwt_user_client_Element_2(elem){
  if (navigator.userAgent.indexOf('Opera') != -1) {
    return -elem.clientTop;
  }
   else if ($doc.defaultView != null && navigator.userAgent.indexOf('Safari') == -1) {
    var sElem = $doc.defaultView.getComputedStyle(elem, null);
    if (sElem != null) {
      var bTop = parseInt(sElem.getPropertyValue('border-top-width'));
      return bTop == -1?0:bTop;
    }
  }
  return 0;
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getGestureMouse__Lcom_google_gwt_user_client_ui_Widget_2(dragHandle){
  if (com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_mouseGesture !== null && java_util_HashMap_$containsKey__Ljava_util_HashMap_2Ljava_lang_Object_2(com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_mouseGesture, dragHandle)) {
    return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_HashMap_$get__Ljava_util_HashMap_2Ljava_lang_Object_2(com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_mouseGesture, dragHandle), 9);
  }
   else {
    return null;
  }
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getHeight__Lcom_google_gwt_user_client_Element_2(elem){
  return parseInt(elem.offsetHeight);
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getLeft__Lcom_google_gwt_user_client_Element_2(elem){
  return parseInt(elem.offsetLeft);
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getTop__Lcom_google_gwt_user_client_Element_2(elem){
  return parseInt(elem.offsetTop);
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getWidth__Lcom_google_gwt_user_client_Element_2(elem){
  return parseInt(elem.offsetWidth);
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_onMouseDown__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y){
  var $e0, dragParent;
  try {
    this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_isClic = true;
    this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle = sender;
    if (this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle !== null) {
      com_google_gwt_user_client_DOM_setCapture__Lcom_google_gwt_user_client_Element_2(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle.com_google_gwt_user_client_ui_UIObject_element);
      if (this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drag === null) {
        this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drag = this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle;
      }
      if (this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_init) {
        this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_xOffset = x;
        this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_yOffset = y;
        dragParent = this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drag.com_google_gwt_user_client_ui_Widget_parent.com_google_gwt_user_client_ui_UIObject_element;
        this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_borderLeft = com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getBorderLeft__Lcom_google_gwt_user_client_Element_2(dragParent);
        this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_borderTop = com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getBorderTop__Lcom_google_gwt_user_client_Element_2(dragParent);
      }
      com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragStart__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragListener, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle, x, y);
    }
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I($e0, 10)) {
      $e0;
      com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$endDrag__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2II(this, x, y);
    }
     else 
      throw $e0;
  }
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_onMouseEnter__Lcom_google_gwt_user_client_ui_Widget_2(sender){
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_onMouseLeave__Lcom_google_gwt_user_client_ui_Widget_2(sender){
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_onMouseMove__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y){
  var $e0, compare, dragElem, it;
  try {
    if (this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_isClic && this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drag !== null && this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle !== null) {
      com_google_gwt_user_client_DOM_setCapture__Lcom_google_gwt_user_client_Element_2(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle.com_google_gwt_user_client_ui_UIObject_element);
      dragElem = this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drag.com_google_gwt_user_client_ui_UIObject_element;
      if (this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragPadding) {
        this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_left = com_google_gwt_user_client_DOM_getAbsoluteLeft__Lcom_google_gwt_user_client_Element_2(dragElem) + this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_padding;
        this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_top = com_google_gwt_user_client_DOM_getAbsoluteTop__Lcom_google_gwt_user_client_Element_2(dragElem) + this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_padding;
        this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_right = this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_left + com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getWidth__Lcom_google_gwt_user_client_Element_2(dragElem) - this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_padding;
        this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_bottom = this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_top + com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getHeight__Lcom_google_gwt_user_client_Element_2(dragElem) - this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_padding;
      }
      com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragMove__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragListener, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle, x, y);
      if (this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop === null && !this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_update) {
        for (it = java_util_Vector_$iterator__Ljava_util_Vector_2(com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListenerMap); it.hasNext__();) {
          this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 2);
          compare = this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListener.com_google_gwt_user_client_dnd_DropListenerCollection_widget;
          if (com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_detectDrop__IIIILcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_left, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_right, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_top, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_bottom, compare) && this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drag !== compare) {
            this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragOver = true;
            this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop = compare;
            if (this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop !== null) {
              com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragEnter__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragListener, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop);
              com_google_gwt_user_client_dnd_DropListenerCollection_$fireOnDropEnter__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListener, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle);
            }
            break;
          }
        }
      }
      if (this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop !== null && this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragOver) {
        if (com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_detectDrop__IIIILcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_left, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_right, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_top, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_bottom, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop)) {
          com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragOver__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragListener, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop);
          com_google_gwt_user_client_dnd_DropListenerCollection_$fireOnDropOver__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListener, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle);
        }
         else {
          com_google_gwt_user_client_dnd_DragListenerCollection_$fireOnDragExit__Lcom_google_gwt_user_client_dnd_DragListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragListener, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop);
          com_google_gwt_user_client_dnd_DropListenerCollection_$fireOnDropExit__Lcom_google_gwt_user_client_dnd_DropListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListener, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop, this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle);
          this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop = null;
        }
      }
      if (this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragMove) {
        com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_setWidgetPosition__Lcom_google_gwt_user_client_ui_Widget_2II(this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drag, x + com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getLeft__Lcom_google_gwt_user_client_Element_2(dragElem) + this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_borderLeft - this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_xOffset, y + com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_getTop__Lcom_google_gwt_user_client_Element_2(dragElem) + this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_borderTop - this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_yOffset);
      }
      if (this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_update) {
        com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$updatePosition__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2Ljava_util_Vector_2(this, com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListenerMap);
      }
      this.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_update = false;
    }
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I($e0, 10)) {
      $e0;
      com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$endDrag__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2II(this, x, y);
    }
     else 
      throw $e0;
  }
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_onMouseUp__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y){
  var $e0;
  try {
    com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$endDrag__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2II(this, x, y);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I($e0, 10)) {
      $e0;
      com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_$endDrag__Lcom_google_gwt_user_client_dnd_MouseDragGestureRecognizer_2II(this, x, y);
    }
     else 
      throw $e0;
  }
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_setDropMap__Ljava_util_Vector_2(v){
  com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListenerMap = v;
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_setWidgetPosition__Lcom_google_gwt_user_client_ui_Widget_2II(w, left, top){
  var h;
  h = w.com_google_gwt_user_client_ui_UIObject_element;
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(h, 'position', 'absolute');
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(h, 'left', left + 'px');
  com_google_gwt_user_client_DOM_setStyleAttribute__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(h, 'top', top + 'px');
}

function com_google_gwt_user_client_dnd_MouseDragGestureRecognizer(){
}

_ = com_google_gwt_user_client_dnd_MouseDragGestureRecognizer.prototype = new java_lang_Object();
_.onMouseDown__Lcom_google_gwt_user_client_ui_Widget_2II = com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_onMouseDown__Lcom_google_gwt_user_client_ui_Widget_2II;
_.onMouseEnter__Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_onMouseEnter__Lcom_google_gwt_user_client_ui_Widget_2;
_.onMouseLeave__Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_onMouseLeave__Lcom_google_gwt_user_client_ui_Widget_2;
_.onMouseMove__Lcom_google_gwt_user_client_ui_Widget_2II = com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_onMouseMove__Lcom_google_gwt_user_client_ui_Widget_2II;
_.onMouseUp__Lcom_google_gwt_user_client_ui_Widget_2II = com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_onMouseUp__Lcom_google_gwt_user_client_ui_Widget_2II;
_.java_lang_Object_typeId$ = 27;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_borderLeft = 0;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_borderTop = 0;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_bottom = 0;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drag = null;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragHandle = null;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragListener = null;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragMove = true;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragOver = false;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dragPadding = true;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_drop = null;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListener = null;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_init = true;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_isClic = false;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_left = 0;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_padding = 0;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_right = 0;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_top = 0;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_update = true;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_xOffset = 0;
_.com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_yOffset = 0;
var com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_dropListenerMap = null, com_google_gwt_user_client_dnd_MouseDragGestureRecognizer_mouseGesture = null;
function com_google_gwt_user_client_impl_DOMImpl_$appendChild__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(this$static, parent, child){
  parent.appendChild(child);
}

function com_google_gwt_user_client_impl_DOMImpl_$createElement__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2(this$static, tag){
  return $doc.createElement(tag);
}

function com_google_gwt_user_client_impl_DOMImpl_$eventCancelBubble__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Event_2Z(this$static, evt, cancel){
  evt.cancelBubble = cancel;
}

function com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Event_2(this$static, evt){
  switch (evt.type) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$getElementPropertyInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(this$static, elem, prop){
  var i = parseInt(elem[prop]);
  if (!i) {
    return 0;
  }
  return i;
}

function com_google_gwt_user_client_impl_DOMImpl_$getEventsSunk__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  return elem.__eventBits || 0;
}

function com_google_gwt_user_client_impl_DOMImpl_$removeChild__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(this$static, parent, child){
  parent.removeChild(child);
}

function com_google_gwt_user_client_impl_DOMImpl_$setElementProperty__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static, elem, prop, value){
  elem[prop] = value;
}

function com_google_gwt_user_client_impl_DOMImpl_$setElementPropertyInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2I(this$static, elem, prop, value){
  elem[prop] = value;
}

function com_google_gwt_user_client_impl_DOMImpl_$setEventListener__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(this$static, elem, listener){
  elem.__listener = listener;
}

function com_google_gwt_user_client_impl_DOMImpl_$setInnerText__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(this$static, elem, text){
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  if (text != null) {
    elem.appendChild($doc.createTextNode(text));
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$setStyleAttribute__Lcom_google_gwt_user_client_impl_DOMImpl_2Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static, elem, attr, value){
  elem.style[attr] = value;
}

function com_google_gwt_user_client_impl_DOMImpl(){
}

_ = com_google_gwt_user_client_impl_DOMImpl.prototype = new java_lang_Object();
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_user_client_impl_DOMImplStandard_$compare__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(this$static, elem1, elem2){
  return elem1 == elem2;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$eventGetFromElement__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Event_2(this$static, evt){
  return evt.relatedTarget?evt.relatedTarget:null;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$eventGetToElement__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Event_2(this$static, evt){
  return evt.relatedTarget || null;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$eventPreventDefault__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Event_2(this$static, evt){
  evt.preventDefault();
}

function com_google_gwt_user_client_impl_DOMImplStandard_$getParent__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  var parent = elem.parentNode;
  if (parent == null) {
    return null;
  }
  if (parent.nodeType != 1)
    parent = null;
  return parent || null;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$init__Lcom_google_gwt_user_client_impl_DOMImplStandard_2(this$static){
  $wnd.__dispatchCapturedMouseEvent = function(evt){
    if ($wnd.__dispatchCapturedEvent(evt)) {
      var cap = $wnd.__captureElem;
      if (cap && cap.__listener) {
        com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(evt, cap, cap.__listener);
        evt.stopPropagation();
      }
    }
  }
  ;
  $wnd.__dispatchCapturedEvent = function(evt){
    if (!com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2(evt)) {
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    }
    return true;
  }
  ;
  $wnd.addEventListener('click', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('dblclick', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousedown', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseup', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousemove', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousewheel', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('keydown', $wnd.__dispatchCapturedEvent, true);
  $wnd.addEventListener('keyup', $wnd.__dispatchCapturedEvent, true);
  $wnd.addEventListener('keypress', $wnd.__dispatchCapturedEvent, true);
  $wnd.__dispatchEvent = function(evt){
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener))
      curElem = curElem.parentNode;
    if (curElem && curElem.nodeType != 1)
      curElem = null;
    if (listener)
      com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(evt, curElem, listener);
  }
  ;
  $wnd.__captureElem = null;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$isOrHasChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(this$static, parent, child){
  while (child) {
    if (parent == child) {
      return true;
    }
    child = child.parentNode;
    if (child && child.nodeType != 1) {
      child = null;
    }
  }
  return false;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$releaseCapture__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  if (elem == $wnd.__captureElem)
    $wnd.__captureElem = null;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$setCapture__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  $wnd.__captureElem = elem;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2I(this$static, elem, bits){
  elem.__eventBits = bits;
  elem.onclick = bits & 1?$wnd.__dispatchEvent:null;
  elem.ondblclick = bits & 2?$wnd.__dispatchEvent:null;
  elem.onmousedown = bits & 4?$wnd.__dispatchEvent:null;
  elem.onmouseup = bits & 8?$wnd.__dispatchEvent:null;
  elem.onmouseover = bits & 16?$wnd.__dispatchEvent:null;
  elem.onmouseout = bits & 32?$wnd.__dispatchEvent:null;
  elem.onmousemove = bits & 64?$wnd.__dispatchEvent:null;
  elem.onkeydown = bits & 128?$wnd.__dispatchEvent:null;
  elem.onkeypress = bits & 256?$wnd.__dispatchEvent:null;
  elem.onkeyup = bits & 512?$wnd.__dispatchEvent:null;
  elem.onchange = bits & 1024?$wnd.__dispatchEvent:null;
  elem.onfocus = bits & 2048?$wnd.__dispatchEvent:null;
  elem.onblur = bits & 4096?$wnd.__dispatchEvent:null;
  elem.onlosecapture = bits & 8192?$wnd.__dispatchEvent:null;
  elem.onscroll = bits & 16384?$wnd.__dispatchEvent:null;
  elem.onload = bits & 32768?$wnd.__dispatchEvent:null;
  elem.onerror = bits & 65536?$wnd.__dispatchEvent:null;
  elem.onmousewheel = bits & 131072?$wnd.__dispatchEvent:null;
}

function com_google_gwt_user_client_impl_DOMImplStandard(){
}

_ = com_google_gwt_user_client_impl_DOMImplStandard.prototype = new com_google_gwt_user_client_impl_DOMImpl();
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_user_client_impl_DOMImplSafari_$eventGetClientX__Lcom_google_gwt_user_client_impl_DOMImplSafari_2Lcom_google_gwt_user_client_Event_2(this$static, evt){
  return evt.pageX - $doc.body.scrollLeft || -1;
}

function com_google_gwt_user_client_impl_DOMImplSafari_$eventGetClientY__Lcom_google_gwt_user_client_impl_DOMImplSafari_2Lcom_google_gwt_user_client_Event_2(this$static, evt){
  return evt.pageY - $doc.body.scrollTop || -1;
}

function com_google_gwt_user_client_impl_DOMImplSafari_$getAbsoluteLeft__Lcom_google_gwt_user_client_impl_DOMImplSafari_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    var parent = elem.offsetParent;
    if (parent && (parent.tagName == 'BODY' && elem.style.position == 'absolute')) {
      break;
    }
    elem = parent;
  }
  return left;
}

function com_google_gwt_user_client_impl_DOMImplSafari_$getAbsoluteTop__Lcom_google_gwt_user_client_impl_DOMImplSafari_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top = 0;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top += elem.offsetTop;
    var parent = elem.offsetParent;
    if (parent && (parent.tagName == 'BODY' && elem.style.position == 'absolute')) {
      break;
    }
    elem = parent;
  }
  return top;
}

function com_google_gwt_user_client_impl_DOMImplSafari(){
}

_ = com_google_gwt_user_client_impl_DOMImplSafari.prototype = new com_google_gwt_user_client_impl_DOMImplStandard();
_.java_lang_Object_typeId$ = 0;
function java_util_ArrayList_$$init__Ljava_util_ArrayList_2(this$static){
  {
    java_util_ArrayList_$clearImpl__Ljava_util_ArrayList_2(this$static);
  }
}

function java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(this$static){
  java_util_ArrayList_$$init__Ljava_util_ArrayList_2(this$static);
  return this$static;
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index, o){
  if (index < 0 || index > this$static.java_util_ArrayList_size) {
    java_util_AbstractList_$indexOutOfBounds__Ljava_util_AbstractList_2I(this$static, index);
  }
  java_util_ArrayList_addImpl__Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2(this$static.java_util_ArrayList_array, index, o);
  ++this$static.java_util_ArrayList_size;
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static, o){
  java_util_ArrayList_setImpl__Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2(this$static.java_util_ArrayList_array, this$static.java_util_ArrayList_size++, o);
  return true;
}

function java_util_ArrayList_$clearImpl__Ljava_util_ArrayList_2(this$static){
  this$static.java_util_ArrayList_array = com_google_gwt_core_client_JavaScriptObject_createArray__();
  this$static.java_util_ArrayList_size = 0;
}

function java_util_ArrayList_$contains__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static, o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static, o) != (-1);
}

function java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static, index){
  if (index < 0 || index >= this$static.java_util_ArrayList_size) {
    java_util_AbstractList_$indexOutOfBounds__Ljava_util_AbstractList_2I(this$static, index);
  }
  return java_util_ArrayList_getImpl__Lcom_google_gwt_core_client_JavaScriptObject_2I(this$static.java_util_ArrayList_array, index);
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static, o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2I(this$static, o, 0);
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2I(this$static, o, index){
  if (index < 0) {
    java_util_AbstractList_$indexOutOfBounds__Ljava_util_AbstractList_2I(this$static, index);
  }
  for (; index < this$static.java_util_ArrayList_size; ++index) {
    if (java_util_ArrayList_equals__Ljava_lang_Object_2Ljava_lang_Object_2(o, java_util_ArrayList_getImpl__Lcom_google_gwt_core_client_JavaScriptObject_2I(this$static.java_util_ArrayList_array, index))) {
      return index;
    }
  }
  return (-1);
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2I(this$static, index){
  var previous;
  previous = java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static, index);
  java_util_ArrayList_removeRangeImpl__Lcom_google_gwt_core_client_JavaScriptObject_2II(this$static.java_util_ArrayList_array, index, 1);
  --this$static.java_util_ArrayList_size;
  return previous;
}

function java_util_ArrayList_add__ILjava_lang_Object_2(index, o){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index, o);
}

function java_util_ArrayList_add__Ljava_lang_Object_2(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this, o);
}

function java_util_ArrayList_addImpl__Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2(array, index, o){
  array.splice(index, 0, o);
}

function java_util_ArrayList_contains__Ljava_lang_Object_2(o){
  return java_util_ArrayList_$contains__Ljava_util_ArrayList_2Ljava_lang_Object_2(this, o);
}

function java_util_ArrayList_equals__Ljava_lang_Object_2Ljava_lang_Object_2(a, b){
  return a === b || a !== null && a.java_lang_Object_equals$(b);
}

function java_util_ArrayList_get__I(index){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this, index);
}

function java_util_ArrayList_getImpl__Lcom_google_gwt_core_client_JavaScriptObject_2I(array, index){
  return array[index];
}

function java_util_ArrayList_remove__I(index){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2I(this, index);
}

function java_util_ArrayList_remove__Ljava_lang_Object_2(o){
  var i;
  i = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2(this, o);
  if (i == (-1)) {
    return false;
  }
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2I(this, i);
  return true;
}

function java_util_ArrayList_removeRangeImpl__Lcom_google_gwt_core_client_JavaScriptObject_2II(array, index, count){
  array.splice(index, count);
}

function java_util_ArrayList_setImpl__Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2(array, index, o){
  array[index] = o;
}

function java_util_ArrayList_size__(){
  return this.java_util_ArrayList_size;
}

function java_util_ArrayList(){
}

_ = java_util_ArrayList.prototype = new java_util_AbstractList();
_.add__ILjava_lang_Object_2 = java_util_ArrayList_add__ILjava_lang_Object_2;
_.add__Ljava_lang_Object_2 = java_util_ArrayList_add__Ljava_lang_Object_2;
_.contains__Ljava_lang_Object_2 = java_util_ArrayList_contains__Ljava_lang_Object_2;
_.get__I = java_util_ArrayList_get__I;
_.remove__I = java_util_ArrayList_remove__I;
_.remove__Ljava_lang_Object_2 = java_util_ArrayList_remove__Ljava_lang_Object_2;
_.size__ = java_util_ArrayList_size__;
_.java_lang_Object_typeId$ = 28;
_.java_util_ArrayList_array = null;
_.java_util_ArrayList_size = 0;
function com_google_gwt_user_client_ui_MouseListenerCollection_$MouseListenerCollection__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2(this$static){
  java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(this$static);
  return this$static;
}

function com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseDown__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, sender, x, y){
  var it, listener;
  for (it = this$static.iterator__(); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 11);
    listener.onMouseDown__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y);
  }
}

function com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseEnter__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender){
  var it, listener;
  for (it = this$static.iterator__(); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 11);
    listener.onMouseEnter__Lcom_google_gwt_user_client_ui_Widget_2(sender);
  }
}

function com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseEvent__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2(this$static, sender, event){
  var from, senderElem, to, x, y;
  senderElem = sender.com_google_gwt_user_client_ui_UIObject_element;
  x = com_google_gwt_user_client_DOM_eventGetClientX__Lcom_google_gwt_user_client_Event_2(event) - com_google_gwt_user_client_DOM_getAbsoluteLeft__Lcom_google_gwt_user_client_Element_2(senderElem) + com_google_gwt_user_client_DOM_getElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(senderElem, 'scrollLeft') + com_google_gwt_user_client_Window_getScrollLeft__();
  y = com_google_gwt_user_client_DOM_eventGetClientY__Lcom_google_gwt_user_client_Event_2(event) - com_google_gwt_user_client_DOM_getAbsoluteTop__Lcom_google_gwt_user_client_Element_2(senderElem) + com_google_gwt_user_client_DOM_getElementPropertyInt__Lcom_google_gwt_user_client_Element_2Ljava_lang_String_2(senderElem, 'scrollTop') + com_google_gwt_user_client_Window_getScrollTop__();
  switch (com_google_gwt_user_client_DOM_eventGetType__Lcom_google_gwt_user_client_Event_2(event)) {
    case 4:
      com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseDown__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, sender, x, y);
      break;
    case 8:
      com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseUp__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, sender, x, y);
      break;
    case 64:
      com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseMove__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, sender, x, y);
      break;
    case 16:
      from = com_google_gwt_user_client_DOM_eventGetFromElement__Lcom_google_gwt_user_client_Event_2(event);
      if (!com_google_gwt_user_client_DOM_isOrHasChild__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(senderElem, from)) {
        com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseEnter__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender);
      }

      break;
    case 32:
      to = com_google_gwt_user_client_DOM_eventGetToElement__Lcom_google_gwt_user_client_Event_2(event);
      if (!com_google_gwt_user_client_DOM_isOrHasChild__Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2(senderElem, to)) {
        com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseLeave__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender);
      }

      break;
  }
}

function com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseLeave__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, sender){
  var it, listener;
  for (it = this$static.iterator__(); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 11);
    listener.onMouseLeave__Lcom_google_gwt_user_client_ui_Widget_2(sender);
  }
}

function com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseMove__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, sender, x, y){
  var it, listener;
  for (it = this$static.iterator__(); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 11);
    listener.onMouseMove__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y);
  }
}

function com_google_gwt_user_client_ui_MouseListenerCollection_$fireMouseUp__Lcom_google_gwt_user_client_ui_MouseListenerCollection_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, sender, x, y){
  var it, listener;
  for (it = this$static.iterator__(); it.hasNext__();) {
    listener = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 11);
    listener.onMouseUp__Lcom_google_gwt_user_client_ui_Widget_2II(sender, x, y);
  }
}

function com_google_gwt_user_client_ui_MouseListenerCollection(){
}

_ = com_google_gwt_user_client_ui_MouseListenerCollection.prototype = new java_util_ArrayList();
_.java_lang_Object_typeId$ = 29;
function com_google_gwt_user_client_ui_RootPanel_$clinit__(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__ = nullMethod;
  com_google_gwt_user_client_ui_RootPanel_rootPanels = java_util_HashMap_$HashMap__Ljava_util_HashMap_2(new java_util_HashMap());
}

function com_google_gwt_user_client_ui_RootPanel_$RootPanel__Lcom_google_gwt_user_client_ui_RootPanel_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  com_google_gwt_user_client_ui_RootPanel_$clinit__();
  com_google_gwt_user_client_ui_AbsolutePanel_$AbsolutePanel__Lcom_google_gwt_user_client_ui_AbsolutePanel_2(this$static);
  if (elem === null) {
    elem = com_google_gwt_user_client_ui_RootPanel_getBodyElement__();
  }
  com_google_gwt_user_client_ui_Widget_$setElement__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2(this$static, elem);
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2(this$static);
  return this$static;
}

function com_google_gwt_user_client_ui_RootPanel_get__(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__();
  return com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null);
}

function com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(id){
  com_google_gwt_user_client_ui_RootPanel_$clinit__();
  var elem, gwt;
  gwt = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_HashMap_$get__Ljava_util_HashMap_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, id), 12);
  if (gwt !== null) {
    return gwt;
  }
  elem = null;
  if (com_google_gwt_user_client_ui_RootPanel_rootPanels.java_util_HashMap_size == 0) {
    com_google_gwt_user_client_ui_RootPanel_hookWindowClosing__();
  }
  java_util_HashMap_$put__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, id, gwt = com_google_gwt_user_client_ui_RootPanel_$RootPanel__Lcom_google_gwt_user_client_ui_RootPanel_2Lcom_google_gwt_user_client_Element_2(new com_google_gwt_user_client_ui_RootPanel(), elem));
  return gwt;
}

function com_google_gwt_user_client_ui_RootPanel_getBodyElement__(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__();
  return $doc.body;
}

function com_google_gwt_user_client_ui_RootPanel_hookWindowClosing__(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__();
  com_google_gwt_user_client_Window_addWindowCloseListener__Lcom_google_gwt_user_client_WindowCloseListener_2(new com_google_gwt_user_client_ui_RootPanel$1());
}

function com_google_gwt_user_client_ui_RootPanel(){
}

_ = com_google_gwt_user_client_ui_RootPanel.prototype = new com_google_gwt_user_client_ui_AbsolutePanel();
_.java_lang_Object_typeId$ = 30;
var com_google_gwt_user_client_ui_RootPanel_rootPanels;
function com_google_gwt_user_client_ui_RootPanel$1_onWindowClosed__(){
  var gwt, it;
  for (it = java_util_AbstractMap$3_$iterator__Ljava_util_AbstractMap$3_2(java_util_AbstractMap_$values__Ljava_util_AbstractMap_2((com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_rootPanels))); java_util_AbstractMap$4_$hasNext__Ljava_util_AbstractMap$4_2(it);) {
    gwt = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractMap$4_$next__Ljava_util_AbstractMap$4_2(it), 12);
    if (gwt.com_google_gwt_user_client_ui_Widget_attached) {
      com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2(gwt);
    }
  }
}

function com_google_gwt_user_client_ui_RootPanel$1_onWindowClosing__(){
  return null;
}

function com_google_gwt_user_client_ui_RootPanel$1(){
}

_ = com_google_gwt_user_client_ui_RootPanel$1.prototype = new java_lang_Object();
_.onWindowClosed__ = com_google_gwt_user_client_ui_RootPanel$1_onWindowClosed__;
_.onWindowClosing__ = com_google_gwt_user_client_ui_RootPanel$1_onWindowClosing__;
_.java_lang_Object_typeId$ = 31;
function com_google_gwt_user_client_ui_WidgetCollection_$WidgetCollection__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_HasWidgets_2(this$static, parent){
  this$static.com_google_gwt_user_client_ui_WidgetCollection_parent = parent;
  this$static.com_google_gwt_user_client_ui_WidgetCollection_array = com_google_gwt_lang_Array_initDims__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2('[Lcom.google.gwt.user.client.ui.Widget;', [0], [14], [4], null);
  return this$static;
}

function com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w, this$static.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  var i;
  for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    if (this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] === w) {
      return i;
    }
  }
  return (-1);
}

function com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException();
  }
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection_size == this$static.com_google_gwt_user_client_ui_WidgetCollection_array.com_google_gwt_lang_Array_length) {
    newArray = com_google_gwt_lang_Array_initDims__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2('[Lcom.google.gwt.user.client.ui.Widget;', [0], [14], [this$static.com_google_gwt_user_client_ui_WidgetCollection_array.com_google_gwt_lang_Array_length * 2], null);
    for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_array.com_google_gwt_lang_Array_length; ++i) {
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(newArray, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i]);
    }
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array = newArray;
  }
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = this$static.com_google_gwt_user_client_ui_WidgetCollection_size - 1; i > beforeIndex; --i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i - 1]);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, beforeIndex, w);
}

function com_google_gwt_user_client_ui_WidgetCollection_$iterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2(this$static){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_WidgetCollection_2(new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator(), this$static);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2I(this$static, index){
  var i;
  if (index < 0 || index >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException();
  }
  --this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = index; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i + 1]);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, this$static.com_google_gwt_user_client_ui_WidgetCollection_size, null);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  var index;
  index = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w);
  if (index == (-1)) {
    throw new java_util_NoSuchElementException();
  }
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2I(this$static, index);
}

function com_google_gwt_user_client_ui_WidgetCollection(){
}

_ = com_google_gwt_user_client_ui_WidgetCollection.prototype = new java_lang_Object();
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_WidgetCollection_array = null;
_.com_google_gwt_user_client_ui_WidgetCollection_parent = null;
_.com_google_gwt_user_client_ui_WidgetCollection_size = 0;
function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_WidgetCollection_2(this$static, this$0){
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0 = this$0;
  return this$static;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$hasNext__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(this$static){
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size - 1;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_util_NoSuchElementException();
  }
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_array[++this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index];
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$hasNext__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(this);
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(this);
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_remove__(){
  if (this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < 0 || this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IllegalStateException();
  }
  com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_parent, this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_array[this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index--]);
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator(){
}

_ = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator.prototype = new java_lang_Object();
_.hasNext__ = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__;
_.next__ = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__;
_.remove__ = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_remove__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index = (-1);
function java_lang_ArrayStoreException(){
}

_ = java_lang_ArrayStoreException.prototype = new java_lang_RuntimeException();
_.java_lang_Object_typeId$ = 32;
function java_lang_ClassCastException(){
}

_ = java_lang_ClassCastException.prototype = new java_lang_RuntimeException();
_.java_lang_Object_typeId$ = 33;
function java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(this$static, s){
  java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(this$static, s);
  return this$static;
}

function java_lang_IllegalStateException(){
}

_ = java_lang_IllegalStateException.prototype = new java_lang_RuntimeException();
_.java_lang_Object_typeId$ = 34;
function java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_String_2(this$static, message){
  java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(this$static, message);
  return this$static;
}

function java_lang_IndexOutOfBoundsException(){
}

_ = java_lang_IndexOutOfBoundsException.prototype = new java_lang_RuntimeException();
_.java_lang_Object_typeId$ = 35;
function java_lang_NegativeArraySizeException(){
}

_ = java_lang_NegativeArraySizeException.prototype = new java_lang_RuntimeException();
_.java_lang_Object_typeId$ = 36;
function java_lang_String_$substring__Ljava_lang_String_2I(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function java_lang_String__1_1equals__Ljava_lang_String_2Ljava_lang_Object_2(me, other){
  return String(me) == other;
}

function java_lang_String_equals__Ljava_lang_Object_2(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(other, 1))
    return false;
  return java_lang_String__1_1equals__Ljava_lang_String_2Ljava_lang_Object_2(this, other);
}

function java_lang_String_hashCode__(){
  var hashCache = java_lang_String_hashCache;
  if (!hashCache) {
    hashCache = java_lang_String_hashCache = {};
  }
  var key = ':' + this;
  var hashCode = hashCache[key];
  if (hashCode == null) {
    hashCode = 0;
    var n = this.length;
    var inc = n < 64?1:n / 32 | 0;
    for (var i = 0; i < n; i += inc) {
      hashCode <<= 1;
      hashCode += this.charCodeAt(i);
    }
    hashCode |= 0;
    hashCache[key] = hashCode;
  }
  return hashCode;
}

_ = String.prototype;
_.java_lang_Object_equals$ = java_lang_String_equals__Ljava_lang_Object_2;
_.java_lang_Object_hashCode$ = java_lang_String_hashCode__;
_.java_lang_Object_typeId$ = 2;
var java_lang_String_hashCache = null;
function java_lang_System_identityHashCode__Ljava_lang_Object_2(o){
  return com_google_gwt_core_client_Impl_getHashCode__Ljava_lang_Object_2(o);
}

function java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2(this$static, message){
  java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(this$static, message);
  return this$static;
}

function java_lang_UnsupportedOperationException(){
}

_ = java_lang_UnsupportedOperationException.prototype = new java_lang_RuntimeException();
_.java_lang_Object_typeId$ = 37;
function java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2Ljava_util_AbstractList_2(this$static, this$0){
  this$static.java_util_AbstractList$IteratorImpl_this$0 = this$0;
  return this$static;
}

function java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2(this$static){
  return this$static.java_util_AbstractList$IteratorImpl_i < this$static.java_util_AbstractList$IteratorImpl_this$0.size__();
}

function java_util_AbstractList$IteratorImpl_hasNext__(){
  return java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2(this);
}

function java_util_AbstractList$IteratorImpl_next__(){
  if (!java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2(this)) {
    throw new java_util_NoSuchElementException();
  }
  return this.java_util_AbstractList$IteratorImpl_this$0.get__I(this.java_util_AbstractList$IteratorImpl_last = this.java_util_AbstractList$IteratorImpl_i++);
}

function java_util_AbstractList$IteratorImpl_remove__(){
  if (this.java_util_AbstractList$IteratorImpl_last < 0) {
    throw new java_lang_IllegalStateException();
  }
  this.java_util_AbstractList$IteratorImpl_this$0.remove__I(this.java_util_AbstractList$IteratorImpl_last);
  this.java_util_AbstractList$IteratorImpl_i = this.java_util_AbstractList$IteratorImpl_last;
  this.java_util_AbstractList$IteratorImpl_last = (-1);
}

function java_util_AbstractList$IteratorImpl(){
}

_ = java_util_AbstractList$IteratorImpl.prototype = new java_lang_Object();
_.hasNext__ = java_util_AbstractList$IteratorImpl_hasNext__;
_.next__ = java_util_AbstractList$IteratorImpl_next__;
_.remove__ = java_util_AbstractList$IteratorImpl_remove__;
_.java_lang_Object_typeId$ = 0;
_.java_util_AbstractList$IteratorImpl_i = 0;
_.java_util_AbstractList$IteratorImpl_last = (-1);
function java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2Z(this$static, key, remove){
  var entry, iter, k;
  for (iter = java_util_HashMap$EntrySet_$iterator__Ljava_util_HashMap$EntrySet_2(this$static.entrySet__()); java_util_HashMap$EntrySetIterator_$hasNext__Ljava_util_HashMap$EntrySetIterator_2(iter);) {
    entry = java_util_HashMap$EntrySetIterator_$next__Ljava_util_HashMap$EntrySetIterator_2(iter);
    k = entry.getKey__();
    if (key === null?k === null:key.java_lang_Object_equals$(k)) {
      if (remove) {
        java_util_HashMap$EntrySetIterator_$remove__Ljava_util_HashMap$EntrySetIterator_2(iter);
      }
      return entry;
    }
  }
  return null;
}

function java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2(this$static){
  var entrySet;
  entrySet = this$static.entrySet__();
  return java_util_AbstractMap$1_$AbstractMap$1__Ljava_util_AbstractMap$1_2Ljava_util_AbstractMap_2Ljava_util_Set_2(new java_util_AbstractMap$1(), this$static, entrySet);
}

function java_util_AbstractMap_$values__Ljava_util_AbstractMap_2(this$static){
  var entrySet;
  entrySet = java_util_HashMap_$entrySet__Ljava_util_HashMap_2(this$static);
  return java_util_AbstractMap$3_$AbstractMap$3__Ljava_util_AbstractMap$3_2Ljava_util_AbstractMap_2Ljava_util_Set_2(new java_util_AbstractMap$3(), this$static, entrySet);
}

function java_util_AbstractMap_containsKey__Ljava_lang_Object_2(key){
  return java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2Z(this, key, false) !== null;
}

function java_util_AbstractMap_equals__Ljava_lang_Object_2(obj){
  var iter, key, keys, otherKeys, otherMap, otherValue, value;
  if (obj === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(obj, 18)) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(obj, 18);
  keys = java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2(this);
  otherKeys = otherMap.keySet__();
  if (!java_util_AbstractSet_$equals__Ljava_util_AbstractSet_2Ljava_lang_Object_2(keys, otherKeys)) {
    return false;
  }
  for (iter = java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2(keys); java_util_AbstractMap$2_$hasNext__Ljava_util_AbstractMap$2_2(iter);) {
    key = java_util_AbstractMap$2_$next__Ljava_util_AbstractMap$2_2(iter);
    value = this.get__Ljava_lang_Object_2(key);
    otherValue = otherMap.get__Ljava_lang_Object_2(key);
    if (value === null?otherValue !== null:!value.java_lang_Object_equals$(otherValue)) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractMap_get__Ljava_lang_Object_2(key){
  var entry;
  entry = java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2Z(this, key, false);
  return entry === null?null:entry.getValue__();
}

function java_util_AbstractMap_hashCode__(){
  var entry, hashCode, iter;
  hashCode = 0;
  for (iter = java_util_HashMap$EntrySet_$iterator__Ljava_util_HashMap$EntrySet_2(this.entrySet__()); java_util_HashMap$EntrySetIterator_$hasNext__Ljava_util_HashMap$EntrySetIterator_2(iter);) {
    entry = java_util_HashMap$EntrySetIterator_$next__Ljava_util_HashMap$EntrySetIterator_2(iter);
    hashCode += entry.java_lang_Object_hashCode$();
  }
  return hashCode;
}

function java_util_AbstractMap_keySet__(){
  return java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2(this);
}

function java_util_AbstractMap(){
}

_ = java_util_AbstractMap.prototype = new java_lang_Object();
_.containsKey__Ljava_lang_Object_2 = java_util_AbstractMap_containsKey__Ljava_lang_Object_2;
_.java_lang_Object_equals$ = java_util_AbstractMap_equals__Ljava_lang_Object_2;
_.get__Ljava_lang_Object_2 = java_util_AbstractMap_get__Ljava_lang_Object_2;
_.java_lang_Object_hashCode$ = java_util_AbstractMap_hashCode__;
_.keySet__ = java_util_AbstractMap_keySet__;
_.java_lang_Object_typeId$ = 38;
function java_util_AbstractSet_$equals__Ljava_util_AbstractSet_2Ljava_lang_Object_2(this$static, o){
  var iter, other, otherItem;
  if (o === this$static) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(o, 19)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(o, 19);
  if (other.size__() != this$static.size__()) {
    return false;
  }
  for (iter = other.iterator__(); iter.hasNext__();) {
    otherItem = iter.next__();
    if (!this$static.contains__Ljava_lang_Object_2(otherItem)) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractSet_equals__Ljava_lang_Object_2(o){
  return java_util_AbstractSet_$equals__Ljava_util_AbstractSet_2Ljava_lang_Object_2(this, o);
}

function java_util_AbstractSet_hashCode__(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator__(); iter.hasNext__();) {
    next = iter.next__();
    if (next !== null) {
      hashCode += next.java_lang_Object_hashCode$();
    }
  }
  return hashCode;
}

function java_util_AbstractSet(){
}

_ = java_util_AbstractSet.prototype = new java_util_AbstractCollection();
_.java_lang_Object_equals$ = java_util_AbstractSet_equals__Ljava_lang_Object_2;
_.java_lang_Object_hashCode$ = java_util_AbstractSet_hashCode__;
_.java_lang_Object_typeId$ = 39;
function java_util_AbstractMap$1_$AbstractMap$1__Ljava_util_AbstractMap$1_2Ljava_util_AbstractMap_2Ljava_util_Set_2(this$static, this$0, val$entrySet){
  this$static.java_util_AbstractMap$1_this$0 = this$0;
  this$static.java_util_AbstractMap$1_val$entrySet = val$entrySet;
  return this$static;
}

function java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2(this$static){
  var outerIter;
  outerIter = java_util_HashMap$EntrySet_$iterator__Ljava_util_HashMap$EntrySet_2(this$static.java_util_AbstractMap$1_val$entrySet);
  return java_util_AbstractMap$2_$AbstractMap$2__Ljava_util_AbstractMap$2_2Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(new java_util_AbstractMap$2(), this$static, outerIter);
}

function java_util_AbstractMap$1_contains__Ljava_lang_Object_2(key){
  return this.java_util_AbstractMap$1_this$0.containsKey__Ljava_lang_Object_2(key);
}

function java_util_AbstractMap$1_iterator__(){
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2(this);
}

function java_util_AbstractMap$1_size__(){
  return this.java_util_AbstractMap$1_val$entrySet.java_util_HashMap$EntrySet_this$0.java_util_HashMap_size;
}

function java_util_AbstractMap$1(){
}

_ = java_util_AbstractMap$1.prototype = new java_util_AbstractSet();
_.contains__Ljava_lang_Object_2 = java_util_AbstractMap$1_contains__Ljava_lang_Object_2;
_.iterator__ = java_util_AbstractMap$1_iterator__;
_.size__ = java_util_AbstractMap$1_size__;
_.java_lang_Object_typeId$ = 40;
function java_util_AbstractMap$2_$AbstractMap$2__Ljava_util_AbstractMap$2_2Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(this$static, this$1, val$outerIter){
  this$static.java_util_AbstractMap$2_val$outerIter = val$outerIter;
  return this$static;
}

function java_util_AbstractMap$2_$hasNext__Ljava_util_AbstractMap$2_2(this$static){
  return this$static.java_util_AbstractMap$2_val$outerIter.hasNext__();
}

function java_util_AbstractMap$2_$next__Ljava_util_AbstractMap$2_2(this$static){
  var entry;
  entry = this$static.java_util_AbstractMap$2_val$outerIter.next__();
  return entry.getKey__();
}

function java_util_AbstractMap$2_hasNext__(){
  return java_util_AbstractMap$2_$hasNext__Ljava_util_AbstractMap$2_2(this);
}

function java_util_AbstractMap$2_next__(){
  return java_util_AbstractMap$2_$next__Ljava_util_AbstractMap$2_2(this);
}

function java_util_AbstractMap$2_remove__(){
  this.java_util_AbstractMap$2_val$outerIter.remove__();
}

function java_util_AbstractMap$2(){
}

_ = java_util_AbstractMap$2.prototype = new java_lang_Object();
_.hasNext__ = java_util_AbstractMap$2_hasNext__;
_.next__ = java_util_AbstractMap$2_next__;
_.remove__ = java_util_AbstractMap$2_remove__;
_.java_lang_Object_typeId$ = 0;
function java_util_AbstractMap$3_$AbstractMap$3__Ljava_util_AbstractMap$3_2Ljava_util_AbstractMap_2Ljava_util_Set_2(this$static, this$0, val$entrySet){
  this$static.java_util_AbstractMap$3_this$0 = this$0;
  this$static.java_util_AbstractMap$3_val$entrySet = val$entrySet;
  return this$static;
}

function java_util_AbstractMap$3_$iterator__Ljava_util_AbstractMap$3_2(this$static){
  var outerIter;
  outerIter = java_util_HashMap$EntrySet_$iterator__Ljava_util_HashMap$EntrySet_2(this$static.java_util_AbstractMap$3_val$entrySet);
  return java_util_AbstractMap$4_$AbstractMap$4__Ljava_util_AbstractMap$4_2Ljava_util_AbstractMap$3_2Ljava_util_Iterator_2(new java_util_AbstractMap$4(), this$static, outerIter);
}

function java_util_AbstractMap$3_contains__Ljava_lang_Object_2(value){
  return java_util_HashMap_$containsValue__Ljava_util_HashMap_2Ljava_lang_Object_2(this.java_util_AbstractMap$3_this$0, value);
}

function java_util_AbstractMap$3_iterator__(){
  return java_util_AbstractMap$3_$iterator__Ljava_util_AbstractMap$3_2(this);
}

function java_util_AbstractMap$3_size__(){
  return this.java_util_AbstractMap$3_val$entrySet.java_util_HashMap$EntrySet_this$0.java_util_HashMap_size;
}

function java_util_AbstractMap$3(){
}

_ = java_util_AbstractMap$3.prototype = new java_util_AbstractCollection();
_.contains__Ljava_lang_Object_2 = java_util_AbstractMap$3_contains__Ljava_lang_Object_2;
_.iterator__ = java_util_AbstractMap$3_iterator__;
_.size__ = java_util_AbstractMap$3_size__;
_.java_lang_Object_typeId$ = 0;
function java_util_AbstractMap$4_$AbstractMap$4__Ljava_util_AbstractMap$4_2Ljava_util_AbstractMap$3_2Ljava_util_Iterator_2(this$static, this$1, val$outerIter){
  this$static.java_util_AbstractMap$4_val$outerIter = val$outerIter;
  return this$static;
}

function java_util_AbstractMap$4_$hasNext__Ljava_util_AbstractMap$4_2(this$static){
  return this$static.java_util_AbstractMap$4_val$outerIter.hasNext__();
}

function java_util_AbstractMap$4_$next__Ljava_util_AbstractMap$4_2(this$static){
  var value;
  value = this$static.java_util_AbstractMap$4_val$outerIter.next__().getValue__();
  return value;
}

function java_util_AbstractMap$4_hasNext__(){
  return java_util_AbstractMap$4_$hasNext__Ljava_util_AbstractMap$4_2(this);
}

function java_util_AbstractMap$4_next__(){
  return java_util_AbstractMap$4_$next__Ljava_util_AbstractMap$4_2(this);
}

function java_util_AbstractMap$4_remove__(){
  this.java_util_AbstractMap$4_val$outerIter.remove__();
}

function java_util_AbstractMap$4(){
}

_ = java_util_AbstractMap$4.prototype = new java_lang_Object();
_.hasNext__ = java_util_AbstractMap$4_hasNext__;
_.next__ = java_util_AbstractMap$4_next__;
_.remove__ = java_util_AbstractMap$4_remove__;
_.java_lang_Object_typeId$ = 0;
function java_util_HashMap_$clinit__(){
  java_util_HashMap_$clinit__ = nullMethod;
  java_util_HashMap_UNDEFINED = java_util_HashMap_createUndefinedValue__();
}

function java_util_HashMap_$$init__Ljava_util_HashMap_2(this$static){
  {
    java_util_HashMap_$clearImpl__Ljava_util_HashMap_2(this$static);
  }
}

function java_util_HashMap_$HashMap__Ljava_util_HashMap_2(this$static){
  java_util_HashMap_$clinit__();
  java_util_HashMap_$$init__Ljava_util_HashMap_2(this$static);
  return this$static;
}

function java_util_HashMap_$clearImpl__Ljava_util_HashMap_2(this$static){
  this$static.java_util_HashMap_hashCodeMap = com_google_gwt_core_client_JavaScriptObject_createArray__();
  this$static.java_util_HashMap_stringMap = com_google_gwt_core_client_JavaScriptObject_createObject__();
  this$static.java_util_HashMap_nullSlot = com_google_gwt_lang_Cast_wrapJSO__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_HashMap_UNDEFINED, com_google_gwt_core_client_JavaScriptObject);
  this$static.java_util_HashMap_size = 0;
}

function java_util_HashMap_$containsKey__Ljava_util_HashMap_2Ljava_lang_Object_2(this$static, key){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(key, 1)) {
    return java_util_HashMap_getStringValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(this$static.java_util_HashMap_stringMap, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(key, 1)) !== java_util_HashMap_UNDEFINED;
  }
   else if (key === null) {
    return this$static.java_util_HashMap_nullSlot !== java_util_HashMap_UNDEFINED;
  }
   else {
    return java_util_HashMap_getHashValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2I(this$static.java_util_HashMap_hashCodeMap, key, key.java_lang_Object_hashCode$()) !== java_util_HashMap_UNDEFINED;
  }
}

function java_util_HashMap_$containsValue__Ljava_util_HashMap_2Ljava_lang_Object_2(this$static, value){
  if (this$static.java_util_HashMap_nullSlot !== java_util_HashMap_UNDEFINED && java_util_HashMap_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashMap_nullSlot, value)) {
    return true;
  }
   else if (java_util_HashMap_containsStringValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_HashMap_stringMap, value)) {
    return true;
  }
   else if (java_util_HashMap_containsHashValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_HashMap_hashCodeMap, value)) {
    return true;
  }
  return false;
}

function java_util_HashMap_$entrySet__Ljava_util_HashMap_2(this$static){
  return java_util_HashMap$EntrySet_$HashMap$EntrySet__Ljava_util_HashMap$EntrySet_2Ljava_util_HashMap_2(new java_util_HashMap$EntrySet(), this$static);
}

function java_util_HashMap_$get__Ljava_util_HashMap_2Ljava_lang_Object_2(this$static, key){
  var result;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(key, 1)) {
    result = java_util_HashMap_getStringValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(this$static.java_util_HashMap_stringMap, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(key, 1));
  }
   else if (key === null) {
    result = this$static.java_util_HashMap_nullSlot;
  }
   else {
    result = java_util_HashMap_getHashValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2I(this$static.java_util_HashMap_hashCodeMap, key, key.java_lang_Object_hashCode$());
  }
  return result === java_util_HashMap_UNDEFINED?null:result;
}

function java_util_HashMap_$put__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value){
  var previous;
  if (key === null) {
    previous = this$static.java_util_HashMap_nullSlot;
    this$static.java_util_HashMap_nullSlot = value;
  }
   else {
    previous = java_util_HashMap_putHashValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Ljava_lang_Object_2I(this$static.java_util_HashMap_hashCodeMap, key, value, key.java_lang_Object_hashCode$());
  }
  if (previous === java_util_HashMap_UNDEFINED) {
    ++this$static.java_util_HashMap_size;
    return null;
  }
   else {
    return previous;
  }
}

function java_util_HashMap_$remove__Ljava_util_HashMap_2Ljava_lang_Object_2(this$static, key){
  var previous;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(key, 1)) {
    previous = java_util_HashMap_removeStringValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(this$static.java_util_HashMap_stringMap, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(key, 1));
  }
   else if (key === null) {
    previous = this$static.java_util_HashMap_nullSlot;
    this$static.java_util_HashMap_nullSlot = com_google_gwt_lang_Cast_wrapJSO__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_HashMap_UNDEFINED, com_google_gwt_core_client_JavaScriptObject);
  }
   else {
    previous = java_util_HashMap_removeHashValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2I(this$static.java_util_HashMap_hashCodeMap, key, key.java_lang_Object_hashCode$());
  }
  if (previous === java_util_HashMap_UNDEFINED) {
    return null;
  }
   else {
    --this$static.java_util_HashMap_size;
    return previous;
  }
}

function java_util_HashMap_addAllHashEntries__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_util_Collection_2(hashCodeMap, dest){
  java_util_HashMap_$clinit__();
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add__Ljava_lang_Object_2(array[i]);
      }
    }
  }
}

function java_util_HashMap_addAllStringEntries__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_util_Collection_2(stringMap, dest){
  java_util_HashMap_$clinit__();
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var value = stringMap[key];
      var entry = java_util_HashMap$EntryImpl_create__Ljava_lang_Object_2Ljava_lang_Object_2(key.substring(1), value);
      dest.add__Ljava_lang_Object_2(entry);
    }
  }
}

function java_util_HashMap_containsHashValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(hashCodeMap, value){
  java_util_HashMap_$clinit__();
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue__();
        if (java_util_HashMap_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(value, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}

function java_util_HashMap_containsKey__Ljava_lang_Object_2(key){
  return java_util_HashMap_$containsKey__Ljava_util_HashMap_2Ljava_lang_Object_2(this, key);
}

function java_util_HashMap_containsStringValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(stringMap, value){
  java_util_HashMap_$clinit__();
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entryValue = stringMap[key];
      if (java_util_HashMap_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(value, entryValue)) {
        return true;
      }
    }
  }
  return false;
}

function java_util_HashMap_createUndefinedValue__(){
  java_util_HashMap_$clinit__();
}

function java_util_HashMap_entrySet__(){
  return java_util_HashMap_$entrySet__Ljava_util_HashMap_2(this);
}

function java_util_HashMap_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(a, b){
  java_util_HashMap_$clinit__();
  if (a === b) {
    return true;
  }
   else if (a === null) {
    return false;
  }
   else {
    return a.java_lang_Object_equals$(b);
  }
}

function java_util_HashMap_get__Ljava_lang_Object_2(key){
  return java_util_HashMap_$get__Ljava_util_HashMap_2Ljava_lang_Object_2(this, key);
}

function java_util_HashMap_getHashValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2I(hashCodeMap, key, hashCode){
  java_util_HashMap_$clinit__();
  var array = hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__();
      if (java_util_HashMap_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(key, entryKey)) {
        return entry.getValue__();
      }
    }
  }
}

function java_util_HashMap_getStringValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(stringMap, key){
  java_util_HashMap_$clinit__();
  return stringMap[':' + key];
}

function java_util_HashMap_putHashValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Ljava_lang_Object_2I(hashCodeMap, key, value, hashCode){
  java_util_HashMap_$clinit__();
  var array = hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__();
      if (java_util_HashMap_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(key, entryKey)) {
        var previous = entry.getValue__();
        entry.setValue__Ljava_lang_Object_2(value);
        return previous;
      }
    }
  }
   else {
    array = hashCodeMap[hashCode] = [];
  }
  var entry = java_util_HashMap$EntryImpl_create__Ljava_lang_Object_2Ljava_lang_Object_2(key, value);
  array.push(entry);
}

function java_util_HashMap_removeHashValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2I(hashCodeMap, key, hashCode){
  java_util_HashMap_$clinit__();
  var array = hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__();
      if (java_util_HashMap_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(key, entryKey)) {
        if (array.length == 1) {
          delete hashCodeMap[hashCode];
        }
         else {
          array.splice(i, 1);
        }
        return entry.getValue__();
      }
    }
  }
}

function java_util_HashMap_removeStringValue__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(stringMap, key){
  java_util_HashMap_$clinit__();
  key = ':' + key;
  var result = stringMap[key];
  delete stringMap[key];
  return result;
}

function java_util_HashMap(){
}

_ = java_util_HashMap.prototype = new java_util_AbstractMap();
_.containsKey__Ljava_lang_Object_2 = java_util_HashMap_containsKey__Ljava_lang_Object_2;
_.entrySet__ = java_util_HashMap_entrySet__;
_.get__Ljava_lang_Object_2 = java_util_HashMap_get__Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 41;
_.java_util_HashMap_hashCodeMap = null;
_.java_util_HashMap_nullSlot = null;
_.java_util_HashMap_size = 0;
_.java_util_HashMap_stringMap = null;
var java_util_HashMap_UNDEFINED;
function java_util_HashMap$EntryImpl_$HashMap$EntryImpl__Ljava_util_HashMap$EntryImpl_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value){
  this$static.java_util_HashMap$EntryImpl_key = key;
  this$static.java_util_HashMap$EntryImpl_value = value;
  return this$static;
}

function java_util_HashMap$EntryImpl_create__Ljava_lang_Object_2Ljava_lang_Object_2(key, value){
  return java_util_HashMap$EntryImpl_$HashMap$EntryImpl__Ljava_util_HashMap$EntryImpl_2Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_HashMap$EntryImpl(), key, value);
}

function java_util_HashMap$EntryImpl_equals__Ljava_lang_Object_2(other){
  var entry;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(other, 20)) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(other, 20);
    if (java_util_HashMap_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_HashMap$EntryImpl_key, entry.getKey__()) && java_util_HashMap_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_HashMap$EntryImpl_value, entry.getValue__())) {
      return true;
    }
  }
  return false;
}

function java_util_HashMap$EntryImpl_getKey__(){
  return this.java_util_HashMap$EntryImpl_key;
}

function java_util_HashMap$EntryImpl_getValue__(){
  return this.java_util_HashMap$EntryImpl_value;
}

function java_util_HashMap$EntryImpl_hashCode__(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  if (this.java_util_HashMap$EntryImpl_key !== null) {
    keyHash = this.java_util_HashMap$EntryImpl_key.java_lang_Object_hashCode$();
  }
  if (this.java_util_HashMap$EntryImpl_value !== null) {
    valueHash = this.java_util_HashMap$EntryImpl_value.java_lang_Object_hashCode$();
  }
  return keyHash ^ valueHash;
}

function java_util_HashMap$EntryImpl_setValue__Ljava_lang_Object_2(object){
  var old;
  old = this.java_util_HashMap$EntryImpl_value;
  this.java_util_HashMap$EntryImpl_value = object;
  return old;
}

function java_util_HashMap$EntryImpl(){
}

_ = java_util_HashMap$EntryImpl.prototype = new java_lang_Object();
_.java_lang_Object_equals$ = java_util_HashMap$EntryImpl_equals__Ljava_lang_Object_2;
_.getKey__ = java_util_HashMap$EntryImpl_getKey__;
_.getValue__ = java_util_HashMap$EntryImpl_getValue__;
_.java_lang_Object_hashCode$ = java_util_HashMap$EntryImpl_hashCode__;
_.setValue__Ljava_lang_Object_2 = java_util_HashMap$EntryImpl_setValue__Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 42;
_.java_util_HashMap$EntryImpl_key = null;
_.java_util_HashMap$EntryImpl_value = null;
function java_util_HashMap$EntrySet_$HashMap$EntrySet__Ljava_util_HashMap$EntrySet_2Ljava_util_HashMap_2(this$static, this$0){
  this$static.java_util_HashMap$EntrySet_this$0 = this$0;
  return this$static;
}

function java_util_HashMap$EntrySet_$contains__Ljava_util_HashMap$EntrySet_2Ljava_lang_Object_2(this$static, o){
  var entry, key, value;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(o, 20)) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(o, 20);
    key = entry.getKey__();
    if (java_util_HashMap_$containsKey__Ljava_util_HashMap_2Ljava_lang_Object_2(this$static.java_util_HashMap$EntrySet_this$0, key)) {
      value = java_util_HashMap_$get__Ljava_util_HashMap_2Ljava_lang_Object_2(this$static.java_util_HashMap$EntrySet_this$0, key);
      return java_util_HashMap_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(entry.getValue__(), value);
    }
  }
  return false;
}

function java_util_HashMap$EntrySet_$iterator__Ljava_util_HashMap$EntrySet_2(this$static){
  return java_util_HashMap$EntrySetIterator_$HashMap$EntrySetIterator__Ljava_util_HashMap$EntrySetIterator_2Ljava_util_HashMap_2(new java_util_HashMap$EntrySetIterator(), this$static.java_util_HashMap$EntrySet_this$0);
}

function java_util_HashMap$EntrySet_contains__Ljava_lang_Object_2(o){
  return java_util_HashMap$EntrySet_$contains__Ljava_util_HashMap$EntrySet_2Ljava_lang_Object_2(this, o);
}

function java_util_HashMap$EntrySet_iterator__(){
  return java_util_HashMap$EntrySet_$iterator__Ljava_util_HashMap$EntrySet_2(this);
}

function java_util_HashMap$EntrySet_remove__Ljava_lang_Object_2(entry){
  var key;
  if (java_util_HashMap$EntrySet_$contains__Ljava_util_HashMap$EntrySet_2Ljava_lang_Object_2(this, entry)) {
    key = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(entry, 20).getKey__();
    java_util_HashMap_$remove__Ljava_util_HashMap_2Ljava_lang_Object_2(this.java_util_HashMap$EntrySet_this$0, key);
    return true;
  }
  return false;
}

function java_util_HashMap$EntrySet_size__(){
  return this.java_util_HashMap$EntrySet_this$0.java_util_HashMap_size;
}

function java_util_HashMap$EntrySet(){
}

_ = java_util_HashMap$EntrySet.prototype = new java_util_AbstractSet();
_.contains__Ljava_lang_Object_2 = java_util_HashMap$EntrySet_contains__Ljava_lang_Object_2;
_.iterator__ = java_util_HashMap$EntrySet_iterator__;
_.remove__Ljava_lang_Object_2 = java_util_HashMap$EntrySet_remove__Ljava_lang_Object_2;
_.size__ = java_util_HashMap$EntrySet_size__;
_.java_lang_Object_typeId$ = 43;
function java_util_HashMap$EntrySetIterator_$HashMap$EntrySetIterator__Ljava_util_HashMap$EntrySetIterator_2Ljava_util_HashMap_2(this$static, this$0){
  var list;
  this$static.java_util_HashMap$EntrySetIterator_this$0 = this$0;
  list = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  if (this$static.java_util_HashMap$EntrySetIterator_this$0.java_util_HashMap_nullSlot !== (java_util_HashMap_$clinit__() , java_util_HashMap_UNDEFINED)) {
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(list, java_util_HashMap$EntryImpl_$HashMap$EntryImpl__Ljava_util_HashMap$EntryImpl_2Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_HashMap$EntryImpl(), null, this$static.java_util_HashMap$EntrySetIterator_this$0.java_util_HashMap_nullSlot));
  }
  java_util_HashMap_addAllStringEntries__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_util_Collection_2(this$static.java_util_HashMap$EntrySetIterator_this$0.java_util_HashMap_stringMap, list);
  java_util_HashMap_addAllHashEntries__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_util_Collection_2(this$static.java_util_HashMap$EntrySetIterator_this$0.java_util_HashMap_hashCodeMap, list);
  this$static.java_util_HashMap$EntrySetIterator_iter = list.iterator__();
  return this$static;
}

function java_util_HashMap$EntrySetIterator_$hasNext__Ljava_util_HashMap$EntrySetIterator_2(this$static){
  return this$static.java_util_HashMap$EntrySetIterator_iter.hasNext__();
}

function java_util_HashMap$EntrySetIterator_$next__Ljava_util_HashMap$EntrySetIterator_2(this$static){
  return this$static.java_util_HashMap$EntrySetIterator_last = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this$static.java_util_HashMap$EntrySetIterator_iter.next__(), 20);
}

function java_util_HashMap$EntrySetIterator_$remove__Ljava_util_HashMap$EntrySetIterator_2(this$static){
  if (this$static.java_util_HashMap$EntrySetIterator_last === null) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), 'Must call next() before remove().');
  }
   else {
    this$static.java_util_HashMap$EntrySetIterator_iter.remove__();
    java_util_HashMap_$remove__Ljava_util_HashMap_2Ljava_lang_Object_2(this$static.java_util_HashMap$EntrySetIterator_this$0, this$static.java_util_HashMap$EntrySetIterator_last.getKey__());
    this$static.java_util_HashMap$EntrySetIterator_last = null;
  }
}

function java_util_HashMap$EntrySetIterator_hasNext__(){
  return java_util_HashMap$EntrySetIterator_$hasNext__Ljava_util_HashMap$EntrySetIterator_2(this);
}

function java_util_HashMap$EntrySetIterator_next__(){
  return java_util_HashMap$EntrySetIterator_$next__Ljava_util_HashMap$EntrySetIterator_2(this);
}

function java_util_HashMap$EntrySetIterator_remove__(){
  java_util_HashMap$EntrySetIterator_$remove__Ljava_util_HashMap$EntrySetIterator_2(this);
}

function java_util_HashMap$EntrySetIterator(){
}

_ = java_util_HashMap$EntrySetIterator.prototype = new java_lang_Object();
_.hasNext__ = java_util_HashMap$EntrySetIterator_hasNext__;
_.next__ = java_util_HashMap$EntrySetIterator_next__;
_.remove__ = java_util_HashMap$EntrySetIterator_remove__;
_.java_lang_Object_typeId$ = 0;
_.java_util_HashMap$EntrySetIterator_iter = null;
_.java_util_HashMap$EntrySetIterator_last = null;
function java_util_NoSuchElementException(){
}

_ = java_util_NoSuchElementException.prototype = new java_lang_RuntimeException();
_.java_lang_Object_typeId$ = 44;
function init(){
  DmD_client_DragMove_$onModuleLoad__LDmD_client_DragMove_2(new DmD_client_DragMove());
}

function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      init();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    init();
  }
}

var com_google_gwt_lang_Cast_typeIdArray = [{}, {}, {1:1}, {13:1, 14:1, 15:1, 16:1}, {13:1, 14:1, 15:1, 16:1}, {13:1, 14:1, 15:1, 16:1}, {7:1}, {7:1}, {13:1, 14:1, 15:1, 16:1}, {13:1, 14:1, 15:1, 16:1}, {13:1, 14:1, 15:1, 16:1}, {13:1, 14:1, 15:1, 16:1}, {8:1}, {8:1}, {8:1}, {4:1}, {4:1}, {4:1}, {4:1, 10:1}, {3:1}, {3:1, 5:1}, {3:1}, {6:1}, {17:1}, {17:1}, {17:1}, {2:1, 17:1}, {9:1, 11:1}, {17:1}, {17:1}, {12:1, 13:1, 14:1, 15:1, 16:1}, {6:1}, {4:1}, {4:1}, {4:1}, {4:1}, {4:1}, {4:1}, {18:1}, {19:1}, {19:1}, {18:1}, {20:1}, {19:1}, {4:1}];

if (DmD_DragMove) {
  var __gwt_initHandlers = DmD_DragMove.__gwt_initHandlers;  DmD_DragMove.onScriptLoad(gwtOnLoad);
}
})();

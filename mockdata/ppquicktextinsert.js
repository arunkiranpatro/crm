function initializePPTextAreas(myElement) {
    myElement.addClass('keyup-handler-pp').on('keyup', function (event) {
        //checking for ctrl+r
        if (event.keyCode == 82 && event.ctrlKey) {         
            var ifHiddenExists = document.getElementById("quickTextTarget");
            if (ifHiddenExists) {
                document.body.removeChild(ifHiddenExists);
            }
            var myTextArea = event.target;
            var myQuickText = $('<input type="hidden" id="quickTextTarget" >');
            myQuickText.attr("value", myTextArea.name);
            myQuickText.attr("data-cursorpos", myTextArea.selectionStart);
            myQuickText.appendTo('body');
            /*var mysectiondiv = $('div.quick-text-list');
            mysectiondiv.appendTo('body');
            var l = myTextArea.getClientRects();
            mysectiondiv[0].style.left = l[0].left + "px";
            mysectiondiv[0].style.top = l[0].top + l[0].height +"px";
            mysectiondiv[0].style.display = "block";
            //debugger;*/
            var options = {
                flowAction: 'QuickTextList',
                displayMode: pega.api.ui.constants.OVERLAY,
                event: event,
                flowActionClass: "@baseclass",
                closeOnClickAway: true,
                centerOverlay: false
            };
            pega.api.ui.actions.launchLocalAction(options);
        }
    });
}
function copyText(event) {
    var srcElement = pega.ctx.dom.getElementsByName(event.target.name);
    var trgtElementName = document.getElementById("quickTextTarget");
    var trgtElement = pega.ctx.dom.getElementsByName(trgtElementName.value);
    var cursorPos = trgtElementName.getAttribute("data-cursorpos");
    cursorPos = Number(cursorPos);
    var myTextArea = trgtElement[0];
    var copyText = srcElement[0].title;
    var copyTextLength = copyText.length;
    if (myTextArea.value == "") {
        myTextArea.value = copyText;
    } else myTextArea.value = myTextArea.value.substring(0, cursorPos) + " " + copyText + " " + myTextArea.value.substring(cursorPos, myTextArea.value.length);
    pega.ctx.dom.$(myTextArea).trigger("change");
    cursorPos = cursorPos + copyTextLength + 2;
    myTextArea.selectionStart = cursorPos;
    myTextArea.selectionEnd = cursorPos;
    if (pega.util.Event.isIE != 0) {
        var range = myTextArea.createTextRange();
        range.collapse(true);
        range.moveEnd('character', cursorPos);
        range.moveStart('character', cursorPos);
        range.select();
    } else myTextArea.focus();
    //var mysectiondiv = $('div.quick-text-list');
    //mysectiondiv[0].style.display='none';
    //FPTI Log
    customLogFPTIData("CopyText");
}
if (pega.u && pega.u.d) {
    pega.u.d.attachOnload(function () {
        var myTextAreas = pega.ctx.dom.$('textarea');
        var i = 0;
        for (; i < myTextAreas.length; i++) {
            if (myTextAreas[i].className.indexOf("keyup-handler-pp") == -1) {
                initializePPTextAreas(pega.ctx.dom.$(myTextAreas[i]));
            }
        }
    }, true);
}

function PPScrollToTopFunc(TargetEle){
    //var TargetElePath = "div[data-node-id='"+SectionName+"']";
    var TargetEleDOM = pega.ctx.dom.querySelector(TargetEle);
     if(TargetEleDOM){
       TargetEleDOM.scrollIntoView();
     }  
  }

function toggleHeader(event){
  var header = document.querySelector('header.workarea-view-header-fixed');
  $(header).toggleClass('hide-header-panel');
}
function toggleLeftPanel(event){
  var leftPanel = document.querySelector('aside.workarea-main-left');
  $(leftPanel).toggleClass('hide-left-panel');
}
function toggleCentrePanel(event){
  toggleLeftPanel(event);
  toggleHeader(event);
  var min_max_button_icon= document.querySelector('.max-min-button > span > button > i');
  $(min_max_button_icon).toggleClass('pp-fullscreen');
  $(min_max_button_icon).toggleClass('pp-fullscreen-exit');
  var min_max_button= document.querySelector('.max-min-button > span > button');
  if(min_max_button.title && min_max_button.title ==='Maximize'){
    min_max_button.title = 'Minimize';
  }else min_max_button.title = 'Maximize';
  customLogFPTIData("max-min-centrepanel");
}
function customLogFPTIData(link_name){
    var fptiData;
    if(window.CS && window.CS.aggregateDataForFPTI){
      var performanceData = performance.getEntries().filter(function (data) {
          return data.name.indexOf("t.paypal.com") < 0 && data.name.indexOf("tracking.qa.paypal.com") < 0;
        });
      fptiData = window.CS.aggregateDataForFPTI(performanceData);
    }
    var logMsg = {};
    if(fptiData){
      logMsg.link = link_name;
      logMsg.account_number = fptiData.account_number;
      logMsg.caseInfo = fptiData.caseInfo;
      logMsg.caseid = fptiData.caseid;
      logMsg.channel = fptiData.channel;
      logMsg.page = fptiData.page;
      logMsg.pglk = fptiData.pglk;
      logMsg.pgrp = fptiData.pgrp;
      logMsg.qual = fptiData.qual;
      logMsg.reqCount = fptiData.reqCount;
      logMsg.tm_jvm = fptiData.tm_jvm;
      logMsg.tm_location = fptiData.tm_location;
      logMsg.tm_skillset = fptiData.tm_skillset;
      logMsg.ver = fptiData.ver;
      logMsg.application_name = "cs_compass";
      logMsg.pgrp = "cs_console";
      logMsg.comp = "pegacspserv";
      if (window.pega && window.pega.desktop) {
          logMsg.internal_user = window.pega.desktop.pyUID;
      }
      if (window.PAYPAL && window.PAYPAL.analytics) {
          window.PAYPAL.analytics.logActivity(logMsg);
      }
    }
  
}
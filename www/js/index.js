document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

}

function openDialog(elem, callback) {
   $.mobile.dialogHashKey = $.mobile.dialogHashKey.match(/\d+/)==null ? ($.mobile.dialogHashKey+0) : $.mobile.dialogHashKey.replace(/\d+/,(parseInt($.mobile.dialogHashKey.match(/\d+/)[0])+1));
   if (!(elem instanceof jQuery) )
   {
      elem = $(elem);
   }
   var parentPop = false;
   var title=elem.data("title")||"";
   var popupDialogObj = $('<div data-role="popup" data-confirmed="yes" data-transition="pop" data-overlay-theme="a" data-theme="a" data-dismissible="true">'+
                           (title.length > 0?'<div data-role="header" data-theme="a"><h1>'+title+'</h1></div>':"")+
                           '<div role="main" class="ui-content"></div>')
                        .appendTo($.mobile.pageContainer);
   popupDialogObj.find('.ui-content').append(elem.html());
   popupDialogObj.trigger('create');
   popupDialogObj.popup({
      history: true,
      positionTo:"window",
      afterclose: function(event, ui) {
         if (parentPop != false)
         {

            $.mobile.popup.active = parentPop;
         }
         popupDialogObj.find(".optionConfirm").first().off('click');
         var isConfirmed = popupDialogObj.attr('data-confirmed') === 'yes' ? true : false;
         $(event.target).remove();
         if (isConfirmed && typeof callback=="function") {
            callback();
         }
      },
              create: function( event, ui ) {
               if (typeof $.mobile.popup.active != "undefined")
               {
                  parentPop = $.mobile.popup.active;
                  $.mobile.popup.active = undefined;
               }
              }
   });
   popupDialogObj.popup('open');
   popupDialogObj.find(".optionConfirm").first().on('click', function() {
      popupDialogObj.attr('data-confirmed', 'yes');
   });
}


var tplEngine = function(tpl, data) {
    tpl = tpl.trim();
    var re = /{{([^}}]+)?}}/g,
        code = 'var r=[];\n',
        cursor = 0, match;
    var add = function(line, js) {
    js? code += 'r.push("' + data[line] + '");\n' :
        code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
    }
    var match;
    while(match = re.exec(tpl)) {
        add(tpl.slice(cursor, match.index));
        add(match[1], true); // <-- say that this is actually valid js
        cursor = match.index + match[0].length;
    }
    add(tpl.substr(cursor, tpl.length - cursor));
    code += 'return r.join("");'; // <-- return the result
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
}
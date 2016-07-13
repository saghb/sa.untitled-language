define(function (require, exports, module) {
    'use strict';

    var DocumentManager   = brackets.getModule("document/DocumentManager"),
        EditorManager     = brackets.getModule("editor/EditorManager"),
        AppInit           = brackets.getModule("utils/AppInit");
    
    function _onActiveEditorChange(event, current, previous) {
        var editor = EditorManager.getCurrentFullEditor(),
            doc = editor.document;
        if(doc.isUntitled()){
            $('#status-language > button').prop('disabled',false);
            if(current)
                current.document.on("languageChanged.statusbar", function () {$('#status-language > button').prop('disabled',false);});
        }
    }

    function load() {
        EditorManager.on("activeEditorChange", _onActiveEditorChange);
        _onActiveEditorChange();
    }
    
    AppInit.appReady(function () {
        load();
    });
});
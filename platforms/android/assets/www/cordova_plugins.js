cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
        "id": "cordova-plugin-fullscreen.AndroidFullScreen",
        "clobbers": [
            "AndroidFullScreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-fullscreen": "1.1.0",
    "cordova-plugin-statusbar": "2.2.1-dev"
};
// BOTTOM OF METADATA
});
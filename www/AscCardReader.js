/*global cordova, module*/

module.exports = {
    greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AscCardReader", "greet", [name]);
    },
    connect: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AscCardReader", "connect", [name]);
    },
    read: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AscCardReader", "read", [name]);
	}
};


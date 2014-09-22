'use strict';
var express = require('express');


module.exports = function spec() {

	return {
		onconfig: function (config, next) {
            //any config setup/overrides here
            next(null, config);
        }
	};

};

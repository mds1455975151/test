/**
 * Created by wyq on 16/12/26.
 * .join
 */

"use strict";
var Promise = require("bluebird");

function promResolve(args) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, args || "success");
	});
}

console.log(new Date().toLocaleString());
Promise.join(promResolve("AAA"), promResolve("BBB"), promResolve("CCC"), (v1, v2, v3) => {
	console.log("[%j]", new Date().toLocaleString(), v1, v2, v3);
});

Promise.join(promResolve("DDD"), promResolve("EEE")).then(val => {
	console.log("val: %j", val);
});


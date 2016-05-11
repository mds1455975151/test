var mWxhb = require("./wxhb.js");
var uuid = require("uuid");

var spend = 200;
var act_name = "去购物得返现活动";
var remark = "提现" + (spend/100).toFixed(2) + "元到账。订单来源:天天电视宝商城 2016040116274120b4556135d6fbokyh 电子文档0.01分";
mWxhb.sendHb(1, GetUuid(), "wx44490bbc768ce355", "oxWE2s_3y2RcuEb1r6XSp2u9rZnQ", spend, "orEt2t9TyFNWO3XX5E-YTj61Hd0U", act_name, remark, function (err, doc) {
	console.log("args: %j", arguments);
});

function GetUuid() {
	var buffer = new Array(32);
	uuid.v4(null, buffer, 0);
	var string = uuid.unparse(buffer);
	string = string.replace(/-/g, "");
	return string;
}

/*
 =============== param: {"nonce_str":"gfk5yswk8l5IyMNlKGc7xuRVrfMAqG3e","mch_id":"1317968801","mch_billno":"1317968801201604052051373863","wxappid":"wxd06496bae6bb4a78","nick_name":"天天电视宝","send_name":"天天电视宝","act_name":"去购物得返现活动","wishing":"提现2.00元到账。订单来源:天天电视宝商城 201604011","remark":"提现2.00元到账。订单来源:天天电视宝商城 2016040116274120b4556135d6fbokyh 电子文档0.01","re_openid":"orEt2t9TyFNWO3XX5E-YTj61Hd0U","total_amount":200,"min_value":200,"max_value":200,"total_num":1,"client_ip":"127.0.0.1","sign":"B754BDE7C72E911F402351AF4451D966"}
 =============== payInfo: {"payKey":"1237c26bd69e8b16ebd64bdf201da901","baseConfig":{"appid":"wxd06496bae6bb4a78","mch_id":"1317968801","trade_type":"JSAPI"},"wx_ssl_options":{"key":[45,45,45,45,45,66,69,71,73,78,32,80,82,73,86,65,84,69,32,75,69,89,45,45,45,45,45,10,77,73,73,69,118,81,73,66,65,68,65,78,66,103,107,113,104,107,105,71,57,119,48,66,65,81,69,70,65,65,83,67,66,75,99,119,103,103,83,106,65,103,69,65,65,111,73,66,65,81,67,106,76,100,80,85,88,69,90,76,54,102,100,81,10,100,99,72,103,74,73,81,120,56,52,68,57,75,81,86,101,104,74,116,50,112,115,113,76,55,105,115,107,86,120,109,90,50,79,84,114,101,71,80,88,80,70,122,66,84,104,88,112,108,98,72,50,78,47,57,103,83,83,101,105,55,110,119,74,10,76,84,122,103,72,76,100,54,97,108,110,48,68,119,74,80,78,52,83,52,102,55,53,88,57,101,56,87,88,47,101,70,73,66,99,51,110,88,112,107,112,107,56,103,75,100,112,51,55,83,65,118,79,75,67,122,115,101,78,103,77,73,116,84,10,102,66,67,98,66,80,119,73,105,82,88,87,77,50,67,51,99,51,48,89,110,83,43,86,81,116,82,114,86,43,77,113,109,120,105,56,87,89,104,109,43,107,86,89,90,87,88,111,70,83,85,53,108,105,76,54,71,71,116,107,114,66,104,89,10,118,122,73,98,86,53,73,83,104,108,55,75,57,120,47,110,72,107,84,72,77,73,84,86,48,55,114,109,52,71,103,106,76,101,68,89,71,98,117,75,56,117,79,113,109,79,105,88,52,83,67,109,106,103,75,101,75,67,49,82,50,82,102,53,10,115,72,86,104,68,120,97,116,78,47,81,109,121,57,122,77,104,88,52,56,112,54,68,111,118,114,43,111,75,56,75,53,107,76,53,99,50,55,101,53,110,83,53,119,112,78,48,98,57,65,116,116,112,89,79,70,81,122,78,68,112,108,76,52,10,77,89,99,110,57,115,52,108,65,103,77,66,65,65,69,67,103,103,69,65,78,90,101,84,102,113,100,102,110,119,99,85,90,113,83,71,76,67,116,83,68,50,87,57,56,50,100,74,107,67,86,86,79,98,55,70,118,118,100,86,121,47,87,102,10,80,116,118,120,77,122,83,121,57,98,109,112,98,81,78,77,82,119,56,88,66,53,113,85,107,80,98,49,119,90,107,53,117,51,110,85,67,72,98,108,43,53,112,54,79,75,72,70,84,71,99,98,101,56,122,89,111,117,76,117,120,120,90,49,10,111,73,57,78,107,77,74,122,116,67,75,54,48,103,70,115,56,118,52,54,70,56,103,116,88,49,99,74,75,107,112,72,79,65,65,68,74,67,97,97,55,43,75,49,47,85,101,97,101,67,88,66,55,66,101,84,122,82,51,74,122,103,98,107,10,56,112,115,106,121,86,48,79,75,104,119,67,74,65,102,85,104,56,82,82,119,117,75,49,86,80,98,56,104,99,47,83,90,110,51,71,68,121,119,121,101,86,66,106,100,119,121,90,118,75,97,49,108,70,88,72,110,117,67,121,50,70,104,67,10,68,84,84,110,114,83,77,121,56,108,119,109,118,54,103,87,112,90,66,122,66,43,65,57,86,114,119,83,110,120,114,105,48,71,49,54,120,49,65,84,111,49,98,85,97,50,72,51,49,69,74,47,112,73,76,118,66,87,70,86,120,54,104,54,10,56,106,48,104,72,102,105,50,84,51,67,83,81,82,69,43,71,105,68,98,104,105,72,65,113,67,101,90,74,78,118,112,109,81,69,87,75,107,97,76,56,81,75,66,103,81,68,88,75,84,53,85,83,77,74,83,111,101,113,115,113,101,102,53,10,77,114,102,103,83,113,116,122,89,65,107,117,47,47,120,87,75,86,65,73,100,51,68,113,74,43,105,52,114,50,71,77,65,80,71,110,103,84,118,104,121,66,69,101,76,87,56,70,90,49,84,97,116,90,110,116,47,87,97,43,78,52,99,57,10,65,49,120,69,99,98,73,122,117,69,73,57,55,99,110,101,112,111,112,78,54,110,53,49,82,86,89,54,85,116,71,117,102,50,103,57,49,71,121,101,69,52,50,66,51,118,82,72,70,109,115,71,115,111,114,85,73,79,117,47,119,56,80,47,10,122,88,50,80,108,110,55,73,89,74,122,67,70,49,111,114,116,111,52,68,116,89,122,43,51,119,75,66,103,81,68,67,74,115,70,80,52,121,84,65,76,76,43,71,97,90,81,69,71,75,83,81,48,120,82,48,79,51,111,101,97,87,82,120,10,56,108,105,98,68,66,120,77,43,54,107,47,99,114,70,109,84,114,48,71,89,74,114,112,85,70,120,121,50,74,49,49,103,105,98,107,116,111,83,80,78,104,50,100,54,85,73,51,101,108,48,85,111,70,97,54,72,114,117,52,87,48,109,114,10,112,55,118,74,84,90,51,101,90,49,81,57,120,106,77,106,74,71,106,57,54,77,116,110,43,82,116,113,72,83,106,77,104,53,110,67,107,104,81,104,57,120,104,69,49,109,114,76,77,66,57,97,121,98,104,84,66,116,50,69,114,70,115,48,10,107,81,74,88,66,81,102,72,101,119,75,66,103,65,84,120,117,54,55,119,74,82,99,70,66,89,71,71,80,103,66,112,43,47,79,53,103,52,115,90,76,57,122,87,111,82,80,82,121,122,99,71,108,53,43,112,51,120,48,118,87,111,120,47,10,69,81,54,75,86,55,102,117,103,119,89,119,103,82,97,99,115,48,82,55,87,57,103,117,78,73,103,50,101,110,77,97,101,113,112,80,43,111,112,90,116,53,118,52,116,79,84,97,54,116,54,122,102,115,104,118,71,88,89,112,112,81,118,102,10,102,97,79,43,70,43,106,105,66,105,82,118,51,83,107,116,67,76,83,85,115,99,65,67,75,97,105,48,100,80,75,82,53,69,114,67,97,74,78,117,78,79,118,52,52,87,101,84,119,70,117,120,100,108,88,57,65,111,71,65,87,55,57,111,10,116,116,72,71,79,106,74,114,82,53,57,52,51,80,54,119,78,101,103,112,48,69,117,84,66,47,65,83,69,87,55,79,120,71,90,83,115,87,90,122,115,112,73,71,108,121,119,54,85,49,115,118,109,88,88,113,87,106,78,88,74,89,75,100,10,48,112,77,86,122,88,57,114,79,52,90,82,84,108,111,54,120,108,97,71,53,87,108,69,109,72,103,55,78,105,48,76,112,114,78,82,71,82,113,72,83,114,72,119,49,72,105,79,84,80,55,72,115,74,105,100,104,101,88,70,115,47,71,89,10,106,99,80,117,85,54,97,114,66,48,121,48,74,116,84,85,51,70,104,98,68,74,69,47,43,85,82,104,122,86,79,66,89,90,72,48,47,83,85,67,103,89,69,65,110,76,54,66,43,84,90,75,68,84,102,101,97,116,84,118,104,106,66,67,10,102,108,78,105,118,72,104,48,85,118,77,69,106,53,105,105,115,111,122,118,67,85,85,70,107,71,71,73,121,118,113,70,70,69,68,71,100,65,68,105,107,66,65,66,111,114,73,104,120,86,66,68,114,54,51,86,109,67,43,73,80,54,122,55,10,57,103,116,113,55,121,83,68,121,107,68,98,99,88,102,69,70,120,105,97,104,119,82,67,76,75,56,74,117,67,90,105,81,65,81,48,119,84,55,104,103,102,47,97,101,74,89,47,120,111,86,97,57,87,120,55,114,52,88,75,108,112,81,83,10,107,86,74,66,50,115,54,102,53,120,86,113,109,80,74,108,89,115,86,79,82,66,111,61,10,45,45,45,45,45,69,78,68,32,80,82,73,86,65,84,69,32,75,69,89,45,45,45,45,45,10,10],"cert":[45,45,45,45,45,66,69,71,73,78,32,67,69,82,84,73,70,73,67,65,84,69,45,45,45,45,45,10,77,73,73,69,97,106,67,67,65,57,79,103,65,119,73,66,65,103,73,68,69,102,52,111,77,65,48,71,67,83,113,71,83,73,98,51,68,81,69,66,66,81,85,65,77,73,71,75,77,81,115,119,67,81,89,68,86,81,81,71,69,119,74,68,10,84,106,69,83,77,66,65,71,65,49,85,69,67,66,77,74,82,51,86,104,98,109,100,107,98,50,53,110,77,82,69,119,68,119,89,68,86,81,81,72,69,119,104,84,97,71,86,117,101,109,104,108,98,106,69,81,77,65,52,71,65,49,85,69,10,67,104,77,72,86,71,86,117,89,50,86,117,100,68,69,77,77,65,111,71,65,49,85,69,67,120,77,68,86,49,104,72,77,82,77,119,69,81,89,68,86,81,81,68,69,119,112,78,98,88,66,104,101,87,49,106,97,69,78,66,77,82,56,119,10,72,81,89,74,75,111,90,73,104,118,99,78,65,81,107,66,70,104,66,116,98,88,66,104,101,87,49,106,97,69,66,48,90,87,53,106,90,87,53,48,77,66,52,88,68,84,69,50,77,68,77,119,77,84,65,48,77,84,65,122,77,49,111,88,10,68,84,73,50,77,68,73,121,78,122,65,48,77,84,65,122,77,49,111,119,103,90,111,120,67,122,65,74,66,103,78,86,66,65,89,84,65,107,78,79,77,82,73,119,69,65,89,68,86,81,81,73,69,119,108,72,100,87,70,117,90,50,82,118,10,98,109,99,120,69,84,65,80,66,103,78,86,66,65,99,84,67,70,78,111,90,87,53,54,97,71,86,117,77,82,65,119,68,103,89,68,86,81,81,75,69,119,100,85,90,87,53,106,90,87,53,48,77,81,52,119,68,65,89,68,86,81,81,76,10,69,119,86,78,84,86,66,104,101,84,69,118,77,67,48,71,65,49,85,69,65,120,81,109,53,97,83,112,54,73,83,74,54,73,71,97,53,114,113,81,75,79,87,77,108,43,83,54,114,67,110,110,112,53,72,109,105,111,68,109,110,73,110,112,10,109,90,68,108,104,97,122,108,106,55,103,120,69,84,65,80,66,103,78,86,66,65,81,84,67,68,69,120,78,68,99,120,78,68,81,122,77,73,73,66,73,106,65,78,66,103,107,113,104,107,105,71,57,119,48,66,65,81,69,70,65,65,79,67,10,65,81,56,65,77,73,73,66,67,103,75,67,65,81,69,65,111,121,51,84,49,70,120,71,83,43,110,51,85,72,88,66,52,67,83,69,77,102,79,65,47,83,107,70,88,111,83,98,100,113,98,75,105,43,52,114,74,70,99,90,109,100,106,107,10,54,51,104,106,49,122,120,99,119,85,52,86,54,90,87,120,57,106,102,47,89,69,107,110,111,117,53,56,67,83,48,56,52,66,121,51,101,109,112,90,57,65,56,67,84,122,101,69,117,72,43,43,86,47,88,118,70,108,47,51,104,83,65,88,10,78,53,49,54,90,75,90,80,73,67,110,97,100,43,48,103,76,122,105,103,115,55,72,106,89,68,67,76,85,51,119,81,109,119,84,56,67,73,107,86,49,106,78,103,116,51,78,57,71,74,48,118,108,85,76,85,97,49,102,106,75,112,115,89,10,118,70,109,73,90,118,112,70,87,71,86,108,54,66,85,108,79,90,89,105,43,104,104,114,90,75,119,89,87,76,56,121,71,49,101,83,69,111,90,101,121,118,99,102,53,120,53,69,120,122,67,69,49,100,79,54,53,117,66,111,73,121,51,103,10,50,66,109,55,105,118,76,106,113,112,106,111,108,43,69,103,112,111,52,67,110,105,103,116,85,100,107,88,43,98,66,49,89,81,56,87,114,84,102,48,74,115,118,99,122,73,86,43,80,75,101,103,54,76,54,47,113,67,118,67,117,90,67,43,10,88,78,117,51,117,90,48,117,99,75,84,100,71,47,81,76,98,97,87,68,104,85,77,122,81,54,90,83,43,68,71,72,74,47,98,79,74,81,73,68,65,81,65,66,111,52,73,66,82,106,67,67,65,85,73,119,67,81,89,68,86,82,48,84,10,66,65,73,119,65,68,65,115,66,103,108,103,104,107,103,66,104,118,104,67,65,81,48,69,72,120,89,100,73,107,78,70,85,121,49,68,81,83,66,72,90,87,53,108,99,109,70,48,90,83,66,68,90,88,74,48,97,87,90,112,89,50,70,48,10,90,83,73,119,72,81,89,68,86,82,48,79,66,66,89,69,70,76,110,100,105,86,108,118,102,83,97,72,70,106,69,50,121,48,78,54,51,101,104,53,113,51,99,99,77,73,71,47,66,103,78,86,72,83,77,69,103,98,99,119,103,98,83,65,10,70,68,52,70,74,118,89,105,89,114,81,86,87,52,106,78,90,72,54,119,49,71,75,110,53,89,90,48,111,89,71,81,112,73,71,78,77,73,71,75,77,81,115,119,67,81,89,68,86,81,81,71,69,119,74,68,84,106,69,83,77,66,65,71,10,65,49,85,69,67,66,77,74,82,51,86,104,98,109,100,107,98,50,53,110,77,82,69,119,68,119,89,68,86,81,81,72,69,119,104,84,97,71,86,117,101,109,104,108,98,106,69,81,77,65,52,71,65,49,85,69,67,104,77,72,86,71,86,117,10,89,50,86,117,100,68,69,77,77,65,111,71,65,49,85,69,67,120,77,68,86,49,104,72,77,82,77,119,69,81,89,68,86,81,81,68,69,119,112,78,98,88,66,104,101,87,49,106,97,69,78,66,77,82,56,119,72,81,89,74,75,111,90,73,10,104,118,99,78,65,81,107,66,70,104,66,116,98,88,66,104,101,87,49,106,97,69,66,48,90,87,53,106,90,87,53,48,103,103,107,65,117,49,83,88,75,55,119,65,54,70,99,119,68,103,89,68,86,82,48,80,65,81,72,47,66,65,81,68,10,65,103,98,65,77,66,89,71,65,49,85,100,74,81,69,66,47,119,81,77,77,65,111,71,67,67,115,71,65,81,85,70,66,119,77,67,77,65,48,71,67,83,113,71,83,73,98,51,68,81,69,66,66,81,85,65,65,52,71,66,65,70,50,99,10,70,111,99,102,51,47,113,53,103,81,106,50,68,68,120,77,85,114,70,72,76,57,68,100,83,83,104,56,89,47,72,82,87,118,88,75,121,82,86,54,74,75,85,77,104,111,120,104,54,76,99,90,89,52,80,47,113,78,81,109,114,118,72,79,10,81,89,97,78,79,117,111,69,68,67,79,71,77,105,80,89,52,87,89,79,104,112,72,119,116,47,110,110,73,76,84,107,101,119,100,106,103,86,72,73,119,89,115,48,98,48,76,117,113,75,51,99,51,99,88,114,74,118,113,68,113,73,70,122,10,70,73,73,105,107,82,116,115,118,116,122,80,84,105,82,49,81,78,77,114,72,85,105,118,50,100,101,78,53,77,114,72,66,97,109,73,119,104,113,108,10,45,45,45,45,45,69,78,68,32,67,69,82,84,73,70,73,67,65,84,69,45,45,45,45,45,10,10]},"token":"46497107fa23"}
 * */
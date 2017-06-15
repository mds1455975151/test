/**
 * Created by wyq on 17/6/15.
 * 如果没有mytest01、mytest02两个索引和数据,调用z00_准备数据.js插入数据到es
 */
"use strict";
const client = require("./esClient.js").esClient;

function multi_match() {
	let condition = {
		body: {
			query: {//multi_match 查询可以在多个字段上执行相同的 match 查询
				multi_match: {    //以下条件查询的是 make或color字段中包含bmw或green字段的文档
					query: "bmw green",
					fields: ["make", "color"]
				}
			}
		}
	};
	client.search(condition).then(response => {
		console.log("response = %j", response);
		response = {
			"took": 10,
			"timed_out": false,
			"_shards": {"total": 15, "successful": 15, "failed": 0},
			"hits": {
				"total": 3,
				"max_score": 0.03329011,
				"hits": [
					{
						"_index": "mytest01",
						"_type": "cars",
						"_id": "AVymD0CD2dNT6M0pjpZC",
						"_score": 0.03329011,
						"_source": {
							"price": 30000,
							"color": "green",
							"make": "ford",
							"sold": "2014-05-18",
							"remark": "make by ford company"
						}
					}, {
						"_index": "mytest02",
						"_type": "cars",
						"_id": "AVymD0CD2dNT6M0pjpZG",
						"_score": 0.03329011,
						"_source": {
							"price": 80000,
							"color": "red",
							"make": "bmw",
							"sold": "2014-01-01",
							"remark": "make by bmw company"
						}
					}, {
						"_index": "mytest02",
						"_type": "cars",
						"_id": "AVymD0CD2dNT6M0pjpZE",
						"_score": 0.03329011,
						"_source": {
							"price": 12000,
							"color": "green",
							"make": "toyota",
							"sold": "2014-08-19",
							"remark": "make by toyota company"
						}
					}
				]
			}
		}
	}).catch(err => {
		console.log("err: %j", err.message || err);
	});
}

function range() {
	let condition = {
		body: {
			query: {
				range: {    //范围匹配
					price: {
						gte: 25000,
						lte: 80000
					}
				}
			}
		}
	};
	client.search(condition).then(response => {
		console.log("response = %j", response);
		response = {
			"took": 6,
			"timed_out": false,
			"_shards": {"total": 15, "successful": 15, "failed": 0},
			"hits": {
				"total": 3,
				"max_score": 1,
				"hits": [
					{
						"_index": "mytest01",
						"_type": "cars",
						"_id": "AVymD0CD2dNT6M0pjpZC",
						"_score": 1,
						"_source": {
							"price": 30000,
							"color": "green",
							"make": "ford",
							"sold": "2014-05-18",
							"remark": "make by ford company"
						}
					}, {
						"_index": "mytest02",
						"_type": "cars",
						"_id": "AVymD0CD2dNT6M0pjpZG",
						"_score": 1,
						"_source": {
							"price": 80000,
							"color": "red",
							"make": "bmw",
							"sold": "2014-01-01",
							"remark": "make by bmw company"
						}
					}, {
						"_index": "mytest02",
						"_type": "cars",
						"_id": "AVymD0CD2dNT6M0pjpZH",
						"_score": 1,
						"_source": {
							"price": 25000,
							"color": "blue",
							"make": "ford",
							"sold": "2014-02-12",
							"remark": "make by honda company"
						}
					}
				]
			}
		}
	}).catch(err => {
		console.log("err: %j", err.message || err);
	});
}

function term() {
	let condition = {
		body: {
			query: {
				bool: {
					must: [
						{
							term: { //term 查询被用于精确值 匹配 term 查询对于输入的文本不 分析 ，所以它将给定的值进行精确查询
								make: "honda"
							}
						},
						{
							term: {
								price: 10000
							}
						}
					]
				}
			}
		}
	};
	client.search(condition).then(response => {
		console.log("response = %j", response);
		response = {
			"took": 3,
			"timed_out": false,
			"_shards": {"total": 15, "successful": 15, "failed": 0},
			"hits": {
				"total": 1,
				"max_score": 0.4339554,
				"hits": [
					{
						"_index": "mytest01",
						"_type": "cars",
						"_id": "AVymD0CD2dNT6M0pjpZA",
						"_score": 0.4339554,
						"_source": {
							"price": 10000,
							"color": "red",
							"make": "honda",
							"sold": "2014-10-28",
							"remark": "make by honda company"
						}
					}
				]
			}
		}
	}).catch(err => {
		console.log("err: %j", err.message || err);
	});
}







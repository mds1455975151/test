/**
 * Created by wyq on 17/8/10.
 */
function t1() {
	const s = new Set();
	[2, 2, 3, 3, 4, 4, 5, 5].forEach(e => s.add(e));  //代码通过add方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值
	for (let v of s) {
		console.log(v); //2 3 4 5
	}
}

function t2() {
	const set = new Set([1, 2, 3, 4, 4]); //Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化
	let sArr = [...set];    // <=> Array.from(set);
	console.log("sArr = %j", sArr); //sArr = [1,2,3,4]
	console.log("set.size = %j", set.size);   //set.size = 4
}

function t3() {
	let srcArr = [1, 1, 2, "2", undefined, undefined, null, null, NaN, NaN];
	let arr1 = [...new Set(srcArr)];        //数组去重方式一
	let arr2 = Array.from(new Set(srcArr)); //数组去重方式二
	console.log(arr1, arr2);  //[ 1, 2, '2', undefined, null, NaN ] [ 1, 2, '2', undefined, null, NaN ]
}

function t4() {
	let s = new Set([10, 20, 30, 40, 50, 60]);
	let key = s.keys();
	let value = s.values();
	let entry = s.entries();
	console.log(key, value, entry);
	/*
	 SetIterator { 10, 20, 30, 40, 50, 60 }
	 SetIterator { 10, 20, 30, 40, 50, 60 }
	 SetIterator {	[ 10, 10 ], [ 20, 20 ], [ 30, 30 ], [ 40, 40 ], [ 50, 50 ], [ 60, 60 ] }
	 */
	console.log("====================");
	s.forEach(item => {
		console.log("item = %j", item);
		/*
		 item = 10
		 item = 20
		 item = 30
		 item = 40
		 item = 50
		 item = 60
		 */
	});
}

function t5() {
	let a = new Set([1, 2, 3]);
	let b = new Set([4, 3, 2]);

	let union = new Set([...a, ...b]);  //// 并集
	console.log("union: ", union);  //union:  Set { 1, 2, 3, 4 }

	let intersect = new Set([...a].filter(x => b.has(x)));  // 交集
	console.log("intersect: ", intersect);  //intersect:  Set { 2, 3 }

	let difference = new Set([...a].filter(x => !b.has(x)));  // 差集
	console.log("difference: ", difference);  //difference:  Set { 1 }
}

function t6() {
	const m = new Map();
	const o = {p: "hello world"};
	m.set(o, "content");
	console.log(m.get(o));    //content
	console.log(m.has(o));    //true
	m.delete(o);
	console.log(m.has(o));    //false
}

function t7() {
	const map = new Map([
		['name', 'zhangsan'],
		['title', 'Author']
	]);
	console.log("map size: %j", map.size);              //map size: 2
	console.log("map has name: %j", map.has("name"));   //map has name: true
	console.log("map.name: %j", map.get("name"));       //map.name: "zhangsan"
}

function t8() {
	const map = new Map([
		['name', 'zhangsan'],
		['title', 'Author'],
		['addr', 'beijing']
	]);
	let keys = map.keys();        //keys()：返回键名的遍历器。
	console.log("keys = ", [...keys]); //keys =  [ 'name', 'title', 'addr' ]
	let values = map.values();    //values()：返回键值的遍历器。
	console.log("values = ", [...values]);   //values =  [ 'zhangsan', 'Author', 'beijing' ]
	let entries = map.entries();  //entries()：返回所有成员的遍历器。
	console.log("entries = ", [...entries]); //entries =  [[ 'name', 'zhangsan' ],[ 'title', 'Author' ],[ 'addr', 'beijing' ]]
	map.forEach((v, k, m) => {
		//v: "zhangsan", k: "name", m: [["name","zhangsan"],["title","Author"],["addr","beijing"]]
		console.log("v: %j, k: %j, m: %j", v, k, [...m]);
	});
}

function t9() {
	let myMap = new Map().set("yes", true).set("no", false);

}
t9();





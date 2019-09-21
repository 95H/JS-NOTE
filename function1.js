// 1.余两位小数 千分位显示 四舍五入
// 2.余一位小数 四舍五入
// 3. 数组去重.1
// 4.数组去重 数组中的元素为数字或字符串
// 5.删除数组中某个元素.1
// 6.删除数组中某个元素.2
// 7.判断数组是否包含某个元素  找到一个就不再往后面找
// 8.去掉字符串空格
// 9.获取一个对象里面第一层元素的数量
// 10.动态去重
// 11.获取元素相对于浏览器窗口的位置，返回一个{x,y}对象
// 12.判断某个字母在字符串中出现的次数
// 13.计算出数组中出现次数最多的元素
// 14. 数组filter（搜索功能）
// 15.copy 对象
// 16.深度克隆
// 17.求数组最大值和最小值
// 18.json数组去重
// 19.对比两个数组，取出交集
// 20.数组和对象比较。取出对象的key和数组元素相同的
// 21.二叉排序（快速排序）
// 22数组去重
// 余两位小数 千分位显示 四舍五入
// function toThousands(num) {
// 	return parseFloat(num).toFixed(2).replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,");
// }
// 余一位小数 四舍五入
// function decimal(num) {
// 	return parseFloat(num).toFixed(2)
// }
// 防止类中的方法被多次创建,将实例写到原型链上面
//  数组去重
// Array.prototype.Unique = function () {
// 	return [...new Set(this)];
// }
// console.log([1,1,1,1,1,2,33,44,5,7,8].Unique())
// 数组去重 数组中的元素为数字或字符串
// function newarr(arr) {
// 	var arrs = []
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arrs.indexOf(arr[i]) == -1) {
// 			arrs.push(arr[i])
// 		}
// 	}
// 	return arrs
// }
// console.log(newarr([1, '23', '23', 1, 1, 1, 2, 33, 44, 5, 7, 8]))
// 删除数组中某个元素.1
// Array.prototype.remove = function (val) {
// 	var index = this.indexOf(val);
// 	if (index != 0) {
// 		this.splice(index, 1)
// 	}
// }
// var arr3 = [1, 3, 4].remove(3)
// console.log(arr3)//[1,4]
//删除数组中某个元素.2
// function remove(arr, indx) {
// 	for (var i = 0; i < arr.length; i++) {
// 		var index = arr.indexOf(arr[i]);
// 		if (indx == index) {
// 			arr.splice(index, 1)
// 		}
// 	}
// 	return arr
// }
// var arr3 = [1, 3, 4]
// console.log(remove(arr3, 0))//[3,4]
// 判断数组是否包含某个元素  找到一个就不再往后面找
// Array.prototype.contains = function (val) {
// 	console.log(this.length)
// 	for (var i = 0; i < this.length; i++) {
// 		console.log('this[i]==' + this[i])
// 		console.log('val==' + val)
// 		if (this[i] == val) {
// 			return true;
// 		}
// 	}
// 	return false;
// }
// console.log(['ss', 2, 3, 4].contains(2))
// 去掉字符串空格
// function trim(str) {
// 	return str.replace(/^[" "||"　"]*/, "").replace(/[" "|"　"]*$/, "");// 去除头和尾
// 	return str.replace(/\s/g, '');//去除所有空格
// 	return str.replace(/(\s*$)/g, "");//去除右边所有空格
// }
// 获取一个对象里面第一层元素的数量
// function getObjectLength(obj) {
// 	var i = 0;
// 	for (attr in obj) {
// 		i++;
// 	}
// 	return i
// }
// var obj = {
// 	name: 'kob', age: 20, sex: {
// 		add: 1, ssd: 3
// 	}
// };
// console.log(getObjectLength(obj)) //2
// 动态去重
// var arr = [1, 2, 3, 4];
// function add() {
// 	var newarr = [];
// 	$('.addEle').click(() => {
// 		var rnd = Math.ceil(Math.random() * 10);
// 		newarr.push(rnd)
// 		for (var i = 0; i < newarr.length; i++) {
// 			if (arr.indexOf(newarr[i]) == -1) {
// 				arr.push(newarr[i])
// 				arr.sort(function (a, b) {
// 					return b - a //降序
// 				});
// 			}
// 		}
// 		console.log(arr)//[1,2,3,4,5,6,7,8,9]
// 	})
// }
// 获取元素相对于浏览器窗口的位置，返回一个{x,y}对象
// function getPosition(element) {
// 	var offsety = 0;
// 	offsety += element.offsetTop;
// 	var offsetx = 0;
// 	offsetx += element.offsetLeft;
// 	if (element.offsetParent != null) {
// 		getPosition(element.offsetParent);
// 	}
// 	return { Left: offsetx, Top: offsety };
// }
// 判断某个字母在字符串中出现的次数
// var str = 'To be, or not to be, that is the question.';
// var count = 0;
// var pos = str.indexOf('e');
// while (pos !== -1) {
// 	count++;
// 	pos = str.indexOf('e', pos + 1);
// }
// console.log(count) //4
// 计算出数组中出现次数最多的元素
// var arrayObj = [1, 1, 2, 3, 3, 3, 4, 5, 5];
// var tepm = '', count = 0;
// var newarr = new Array();
// for (var i = 0; i < arrayObj.length; i++) {
// 	if (arrayObj[i] != -1) {
// 		temp = arrayObj[i];
// 	}
// 	for (var j = 0; j < arrayObj.length; j++) {
// 		if (temp == arrayObj[j]) {
// 			count++;
// 			arrayObj[j] = -1;
// 		}
// 	}
// 	newarr.push(temp + ":" + count);
// 	count = 0;
// }
// for (var i = 0; i < newarr.length; i++) {
// 	console.log(newarr[i]);
// }
// 数组filter（搜索功能）
// var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// function filterItems(query) {
// 	return fruits.filter(function (el) {
// 		return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
// 	})
// }
// console.log(filterItems('ap')); // ['apple', 'grapes']
// copy 对象（第一种）
//第一种
// 		var cloneObj = function (obj) {
// 			var newObj = {};
// 			if (obj instanceof Array) {
// 				newObj = [];
// 			}
// 			for (var keyin obj) {
// 				var val = obj[key];
// 				newObj[key] = typeof val === 'object' ? cloneObj(val) : val;
// }
// 		return newObj;
// };
// 		//第二种
// 		function clone(origin, target) {
// 			var target = target || {};
// 			for (var propin origin) {
// 				target[prop] = origin[prop];
// }
// 		return target;
// }
//  深度克隆
// 		var newObj = {};
// 		function deepClone(origin, target) {
// 			var target = target || {},
// 				toStr = Object.prototype.toString,
// 				arrStr = "[object Array]";
// 			for (var propin origin) {
// 				if(origin.hasOwnProperty(prop)){
// 					if(origin[prop] != "null" && typeof (origin[prop]) == 'object') {//判断原型链
// 				target[prop] = (toStr.call(origin[prop]) == arrStr) ? [] : {}//判断obj的key是否是数组
// 				deepClone(origin[prop], target[prop]);//递归的方式
// 			}else {
// 				target[prop] = origin[prop];
// 			}
// 		}
// }
// 		return target
// }
// 		deepClone(obj, newObj);
// 		console.log(newObj)
// 求数组最大值和最小值
// Array.prototype.max = function () {
// 	return Math.max.apply({}, this)
// }
// Array.prototype.min = function () {
// 	return Math.min.apply({}, this)
// }
// console.log([1, 5, 2].max())
// json数组去重
// function UniquePay(paylist) {
// 	var payArr = [paylist[0]];
// 	for (var i = 1; i < paylist.length; i++) {
// 		var payItem = paylist[i];
// 		var repeat = false;
// 		for (var j = 0; j < payArr.length; j++) {
// 			if (payItem.name == payArr[j].name) {
// 				repeat = true;
// 				break;
// 			}
// 		}
// 		if (!repeat) {
// 			payArr.push(payItem);
// 		}
// 	}
// 	return payArr;
// }
// 对比两个数组，取出交集
// Array.intersect = function () {
// 	var result = new Array();
// 	var obj = {};
// 	for (var i = 0; i < arguments.length; i++) {
// 		for (var j = 0; j < arguments[i].length; j++) {
// 			var str = arguments[i][j];
// 			if (!obj[str]) {
// 				obj[str] = 1;
// 			}
// 			else {
// 				obj[str]++;
// 				if (obj[str] == arguments.length) {
// 					result.push(str);
// 				}
// 			}//end else
// 		}//end for j
// 	}//end for i
// 	return result;
// }
// console.log(Array.intersect(["1", "2", "3"], ["2", "3", "4", "5", "6"]))
// 数组和对象比较。取出对象的key和数组元素相同的
// var arr = ['F00006', 'F00007', 'F00008'];
// var obj = { 'F00006': [{ 'id': 21 }], 'F00007': [{ 'id': 11 }] }
// var newobj = {};
// for (var itemin obj) {
// 	if(arr.includes(item)){
// 		newobj[item] = obj[item]
// 	}
//    }
// 	console.log(newObj)
// 封装函数
function sortArr(arr) {
    // 5.结束条件 当数组长度已经小于等于1 那么就表示我们已经将数组细化到极致了
    if (arr.length <= 1) {
        return arr
    }
    // 思路：1.选取中间项（基准值）将基准值切掉
    var center = arr.splice(Math.ceil(arr.length / 2), 1)
    console.log(center)
    // 2.创建左右两个数组
    var left = [],
        right = []
    // 3.循环要排序的数组，获取每一项和刚刚获取到的基准值 并作比较 如果小于基准值 放进左数组 反之放右
    for (var i = 0; i < arr.length; i++) {
        // 判断
        if (arr[i] < center) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    // 4.填充玩left right 将left和right拼接
    return sortArr(left).concat(center, sortArr(right))
}
// 1.双循环去重
// 双重for或while 原理:定义一个包含原始数组第一个元素的数组，然后遍历原始数组，将原始数组中的每个元素与新数组中的每个元素进行比对，如果不重复则添加到新数组中，最后返回新数组
// 缺点：数组长度很大 会非常耗费内存
// function unique(arr){
// 	if(!Array.isArray(arr)){
// 		console.log('type error!')
// 		return
// 	}
// 	let res = [arr[0]]
// 	for (let i=1;i<arr.length;i++){
// 		let flag=true
// 		for(let j=0;j<res.length;j++){
// 			if(arr[i]===res[j]){
// 				flag=false;
// 				break
// 			}
// 		}
// 		if(flag){
// 			res.push(arr[i])
// 		}
// 	}
// 	return res
// }
// index Of
// 可返回某个指定的元素在数组中首次出现的位置，该方法首先定义一个空数组res 然后调用index Of方法对原来的数组进行遍历判断，如果元素不在res中，则将其push进res中，最后将res返回即可获得去重的数组

// function unique(arr){
// 	if(!Array.isArray(arr)){
// 		console.log('type error!')
// 		return
// 	}
// 	let res=[]
// 	for(let i=0;i<arr.length;i++){
// 		if(res.indexOf(arr[i])===-1){
// 			res.push(arr[i])
// 		}
// 	}
// 	return res
// }
// indexOf(2)
// 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，如果不等则说明该元素是重复元素
// function unique(arr){
// 	if(!Array.isArray(arr)){
// 		console.log('type error!')
// 		return
// 	}
// 	return Array.prototype.filter.call(arr,function(item,index){
// 		return arr.indexOf(item)===indx;
// 	})
// }
// 相邻元素去重
// 方法首先调用了数组的排序方法sort(),然后根据排序后的结果进行遍历及相邻元素比对，如果相等则跳过该元素，直到遍历结束
// function unique(arr){
// 	if(!Array.isArray(arr)){
// 		console.log('type error!')
// 		return
// 	}
// 	arr=arr.sort()
// 	let res=[]
// 	for(let i=0;i<arr.length;i++){
// 		if(arr[i]!==arr[i-1]){
// 			res.push(arr[i])
// 		}
// 	}
// 	return res
// }
// 利用对象属性去重
// 创建空对象 遍历数组 将数组中的值设为对象的属性 并给该属性赋初始值1，每出现一次 对应的属性值增加1 这样属性值对应的就是该元素出现的次数了
// function unique(arr){
// 	if(!Array.isArray(arr)){
// 		console.log('type error!')
// 		return
// 	}
// 	let res=[],
// 	obj={}
// 	for(let i=0;i<arr.length;i++){
// 		if(!obj[arr[i]]){
// 			res.push(arr[i])
// 			obj[arr[i]]=1
// 		}else{
// 			obj[arr[i]]++
// 		}
// 	}
// 	return res
// }

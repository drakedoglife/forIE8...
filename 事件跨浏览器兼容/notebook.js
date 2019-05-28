// 事件兼容所有浏览器
var EventUntil = {
	// 添加事件
	addHandler: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		}else if (element.attachEvent) {
			element.attachEvent("no" + type, handler);
		}else {
			element["no" + type] = null;
		}
	},
	// 移除事件
	removeHandler: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		}else if (element.detachEvent) {
			element.detachEvent("on" + type, handler);
		}else {
			element["on" + type] = null;
		}
	},
	// 得到event目标
	getTarget: function(event) {
		return event.target || event.srcElement;
	},
	// 阻止默认行为
	preventDefault: function(event) {
		if (event.preventDefault) {
			evet.preventDefault();
		}else {
			event.returnValue = false;
		}
	},
	// 停止冒泡或委托
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		}else {
			event.cancelBubble = true;
		}
	}
}
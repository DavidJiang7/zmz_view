export default {
	get(name) {
		//console.log(window.location);
		var d = localStorage.getItem(name);
		if (!d) {
			if (name == 'Token' && this.isNeedToken()) {
				setTimeout(function () {
					window.location.href = '/index?returnurl=' + encodeURIComponent(window.location.href.replace(window.location.origin, ""));
				}, 2000);
			}
			return null;
		}
		var data = JSON.parse(d);
		var now = new Date().getTime();
		if (data.time && data.time < now) {
			this.del(name);
			if (name == 'Token') {
				setTimeout(function () {
					window.location.href = '/index?returnurl=' + encodeURIComponent(window.location.href.replace(window.location.origin, ""));
				}, 2000);
			}
			return null;
		}
		return data.data;
	},
	//带有有效期的
	setWithExpire(name, value, expiredays) {
		if (!expiredays || expiredays <= 0) {
			expiredays = 1;
		}
		var curTime = new Date().getTime();
		var thatTime = new Date(curTime + expiredays * (24 * 60 * 60 * 1000)).getTime();
		localStorage.setItem(name, JSON.stringify({
			data: value,
			time: thatTime
		}));
	},
	set(name, value) {
		localStorage.setItem(name, JSON.stringify({
			data: value
		}));
	},
	del(name) {
		localStorage.removeItem(name);
	},
	clear() {
		localStorage.clear();
	}
}
/***************************************
 * Author:
 * Date:
 * Desc:
 ***************************************
 * update: name    datetime      commit
           张三    17-03-01 17   增加...
 **************************************/
class LocalStorage {
	getItem(key) {
		const value = localStorage.getItem(key);
		return value !== 'undefined' ? JSON.parse(value) : undefined;
	}

	setItem(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	removeItem(key) {
		localStorage.removeItem(key);
	}

	getlength() {
		return localStorage.length;
	}

	key(number) {
		return localStorage.key(number)
	}

	clear() {
		localStorage.clear();
	}
}

export default new LocalStorage();

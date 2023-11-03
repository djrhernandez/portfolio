// redux
import en_us from './en_us';
//import es_MX from './es_MX';

class Strings {
	constructor(langCode) {
		this.langs = {
			'en_us': en_us,
		//	'es_mx': es_mx
		}
		this.language = langCode
	}

	set language(code) {
		const _lang = this.langs[code];
		// apply methods
		for (let f in _lang) {
			this[f] = _lang[f];
		}
	}
}

export default new Strings(localStorage.language || 'en_US');
// (() => {
// 	return langs[store.getState().settingsReducer.language]
// })();

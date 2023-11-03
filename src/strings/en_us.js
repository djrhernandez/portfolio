import config from '../config';
import moment from 'moment';

// var sysName = 'Portfolio';
// var isReal = false;
// export { sysName, isReak };
// export function setSystemDev(isReal) {
// 	sysName = isReal ? 'Docker' : 'Localhost';
// 	isDocker = isReal;
// }

const strings = {

	PAGE_TITLE:(page) => `Portfolio | ${page}`,

	NAVIGATION:(id) => {
		switch(id) {
			case `about`: return `About`;
            case `menu`: return `Menu`;
			case `projects`: return `Projects`;
			case `resume`: return `Resume`;
			case `skills`: return `Skills`;
			default: return ``;
		}
	},

	MONTHS_ABBREVIATED:index => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index],
	WEEKS_ABBREVIATED:index => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index],
	DAYS_ABBREVIATED:index => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index],
}

export default strings;

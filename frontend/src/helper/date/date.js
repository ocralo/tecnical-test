import moment from "moment";
import "moment/locale/es";

export const date = (date) => {
	moment.locale("es");
	if (moment(date, "YYYY-MMM-DD HH:mm A").isValid()) {
		return moment(date, "YYYY-MMM-DD HH:mm A").format("LLLL");
	}
	return moment(date).format("LLLL");
};

export const dateHour = (date) => {
	moment.locale("es");
	if (moment(date, "YYYY-MMM-DD HH:mm A").isValid()) {
		return moment(date, "YYYY-MMM-DD HH:mm A").format("LLL");
	}
	return moment(date).format("LLL");
};

export const dateDaeTime = (date) => {
	moment.locale("es");
	return moment(date).format("YYYY-MM-DD HH:mm:ss");
};

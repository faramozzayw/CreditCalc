export const capitalize = s => {
	if (typeof s !== 'string') {
		return '';
	}
	
	return s.charAt(0).toUpperCase() + s.slice(1);
}

export const isEmptyString = string => {
	if (typeof string !== 'string') {
		return false;
	}

	return string.trim() === "";
}

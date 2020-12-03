var search = function(a, element) {
    low = 0
	high = a.length - 1
	while(low <= high) {
		var mid = Math.floor((low + high) / 2)
		if(a[mid] < element) {
			low = mid + 1
		} else if (a[mid] > element) {
			high = mid - 1
		} else {
			return mid
		}
	}
	return -1
};

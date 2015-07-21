function  collect_same_elements(collection_a, object_b) {
	return collection_a.filter(function(val){
		return object_b.value.indexOf(val) !== -1;
	})
}
function collect_same_elements(collection_a, collection_b) {
	return collection_a.filter(function(val){
		return collection_b.indexOf(val)!==-1;
	})
}
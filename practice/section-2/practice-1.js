function count_same_elements(collection) {
	var result = []; 

	for (var i in collection) { 
		find_same_item(collection[i], result); 
	} 
	return result; 
}
function find_same_item(item, collection){
	for (var i in collection){
		if(item === collection[i].key){
			collection[i].count++;
			return;
		}
	}
	collection.push({key: item, count : 1});
}
	

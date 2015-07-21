function count_same_elements(collection) { 
	var objResult = {}; 
	var result = []; 
	collection.map(function(val) { 
		return { 
			key: val.split("-")[0], 
			count: parseInt(val.split("-")[1] || 1) 
		} 
	}).forEach(function(val) { 
	objResult[val.key] = objResult[val.key] || 0; //objResult[val.key]为真直接赋值否则赋0
	objResult[val.key] += val.count; 
}) 
	for (var i in objResult) { 
		result.push({ 
			key: i, 
			count: objResult[i] 
		}); 
	} 
	return result;
} 

function create_updated_collection(collection_a, object_b) {
  
  var result = [];
  var  value ; 
  var count ;
  var collection_c = object_b.value; 
  for(var i = 0; i < collection_a.length; i++) 
  { 
  	var temp = 0; 
	value = collection_a[i].key; 
	for(var j = 0; j < collection_c.length; j++) 
	{ 
		if(value == collection_c[j]) 
 			{ 
 				temp = 1; 
 			} 
 	} 
 	if(temp == 1) 
 	{ 
 		result.push({key:value,count:(collection_a[i].count-1)}); 
 	} 
 	else if(temp == 0) 
 	{ 
		result.push({key:value,count:collection_a[i].count});	 
 	} 
 }
  return result; 
} 

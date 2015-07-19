function collect_same_elements(collection_a, collection_b) {
	var result = [];
	for(var j = 0;j < collection_a.length;j++)
  	for(var i = 0;i < collection_b.length;i++)
  	{
  		if(collection_b[i] == collection_a[j])
  		result.push(collection_a[j]);
  	}
  	return result;
}

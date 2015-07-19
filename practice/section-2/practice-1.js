function count_same_elements(collection) {
	var result = [];  
	for (var i = 0; i < collection.length; i++)
	{
		var count = 1;
		for (var j = i+1;j < collection.length;j++)
		{
			if( collection[i] == collection[j])
			{
				count ++;
				collection.splice(j,1);
				j--;
			}
		}
		result.push({key:collection[i],count:count});
	}
	return result;
}

function count_same_elements(collection) {
	var result = [];  
	for (var i = 0; i < collection.length; i++)
	{
		var count = 1;
		if (collection[i].length < 2)
		{
			for (var j = i+1; j < collection.length; j++)
			{
				if( collection[i] == collection[j])
				{
					count ++;
					collection.splice(j,1);
					j--;
				}
			}
			result.push({key:collection[i],count:count});count =1;
		}
		else 
			result.push({key:collection[i].charAt(0),count:parseInt(collection[i].charAt(2))})
	}
	console.log(result);
	return result;
}

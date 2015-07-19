function count_same_elements(collection) {
	var result=[];
	var temp = 0;
	for (var i = 0;i < collection.length; i ++)
	{
		if(collection[i].length == 1)
		{
			for (var j = 0;j < result.length; j ++)
			{
				if( collection[i] == result[j].name )
				{
					result[j].summary++;
					temp=1;
					break;
				}
			}
			if(temp==0)
			{
				result.push({name:collection[i],summary:1});
			}
			temp=0;
		}
		else
		{
			for (var k = 0; k < result.length; k ++)
			{
				if(collection[i].charAt(0) == result[k].name)
				{
					result[k].summary +=parseInt(collection[i].substr(2,2));
					temp=1;
					break;
				}
			}
			if(temp==0)
			{
				result.push({name:collection[i].charAt(0),summary:parseInt(collection[i].charAt(2))})
			}
			temp=0;
		}
	}
	return result;
}

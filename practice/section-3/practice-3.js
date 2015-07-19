function create_updated_collection(collection_a, object_b) {
  var collection_b=object_b.value;
  var collection_c=[];
  var result=[];
  var value;	
  var count=1;
  for (var i = 0;i<collection_a.length;i++)
  {
  	for(var j = i+1; j<collection_a.length;j++)
  	{
  		if(collection_a[i] == collection_a[j])
  		{
  			count++;
  			collection_a.splice(j,1);
  			j--;
  		}
  	}
  	collection_c.push({key:collection_a[i],count:count});
  	count =1;
  }
  for(var i = 0; i < collection_c.length; i++)
  {
  	var temp = 0;
	value=collection_c[i].key;
	for(var j = 0; j < collection_b.length; j++)
	{
		if( value == collection_b[j] )
		{
				if( collection_c[i].count >= 3)
			{
				temp=1;
				count3 = parseInt(collection_c[i].count / 3);
			}
		}
	}
	if (temp==1)
	result.push({key:collection_c[i].key,count:(collection_c[i].count - count3)});
	else if(temp==0)
		result.push({key:collection_c[i].key,count:collection_c[i].count});
  }
  return result;
}
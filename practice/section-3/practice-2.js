function create_updated_collection(collection_a, object_b) {
var result = [];
var count3 = 0;
var collection_b = object_b.value;
for(var i = 0; i < collection_a.length; i++)
{
	var temp = 0;
	value=collection_a[i].key;
	for(var j = 0; j < collection_b.length; j++)
	{
		if( value == collection_b[j] )
			{if( collection_a[i].count >= 3)
			{
				temp=1;
				count3 = parseInt(collection_a[i].count / 3);
				}

			}
	}
	if (temp==1)
	result.push({key:collection_a[i].key,count:(collection_a[i].count - count3)});
	else if(temp==0)
		result.push({key:collection_a[i].key,count:collection_a[i].count});

}
	return result;

}

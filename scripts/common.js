// Задание разобрать объект

   obj = {
 	    a: 1,
 	    b: [
		    {
 			    a: 2,
			    b: [
 				    {a: 3, c: 'qwe1'}, {a: 3, c: 'qwe2'}, {a: 3, c: 'qwe3'}
                ] 		
            },
		    {
			    a: 2,
			    b: [
 				    {a: 3, c: 'qwer1'}, {a: 3, c: 'qwer2'}
 			    ]
 		    },
		    {
 			    a: 2,
 			    b: [
 				    {a: 3, c: 'qwert1'}
 			    ]
 		    }
 	    ]
    }

    ArrayOfLeafs = []

function unpack(ob) {
    if (ob.b !== undefined) {
        for (el of ob.b) {
            unpack(el);
        }
    } else {
        ArrayOfLeafs.push({
            c: ob.c,
        });
    }

}

unpack(obj);

console.log(ArrayOfLeafs);
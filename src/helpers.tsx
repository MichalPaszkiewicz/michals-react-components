export var nullOrMap = (array: any[], mapFunc: (arrayItem: any) => JSX.Element) => 
    !array ? null : array.map(mapFunc);

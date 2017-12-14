export var nullOrMap = (array: any[], mapFunc: (arrayItem: any) => HTMLElement) => 
    !array ? null : array.map(mapFunc);

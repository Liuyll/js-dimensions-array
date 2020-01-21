function createDimensionsArray(number,...layerCounts) {
    var dimensions = [];
    for (var _i = 0; _i < number; _i++) {
        dimensions[_i] = layerCounts[_i] || number
    }
    if (dimensions.length == 1) {
        return helper(1, []);
    }

    return create(dimensions.length - 1);

    function helper(capacity, sonDimensionsArray) {
        if (sonDimensionsArray === void 0) { sonDimensionsArray = []; }
        // clone array to new array
        // avoid different array has same reference 
        return Array.from(Array(capacity), function () { return deepCloneStructure(sonDimensionsArray) });
    }

    function deepCloneStructure(target){
        let dcTarget = Array(target.length) 
        for(let i = 0;i < target.length ; i++){
            dcTarget[i] = typeof target[i] === 'object' ? deepCloneStructure(target[i]) : undefined
        }
        return dcTarget
    }

    function create(cur, sonDimensionsArray) {
        if (sonDimensionsArray === void 0) { sonDimensionsArray = []; }
        if (cur < 0) {
            return sonDimensionsArray;
        }
        var capacity = dimensions[cur];

        // create current layer array
        var curArray = helper(capacity, sonDimensionsArray);
        return curArray = create(cur - 1, curArray);
    }
}

console.table(createDimensionsArray(3))
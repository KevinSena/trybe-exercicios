"use strict";
function convert(value, unity, conversion) {
    const options = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    const from = options.indexOf(unity);
    const to = options.indexOf(conversion);
    return Math.floor(value * (10 ** (to - from)));
}
console.log(convert(100, 'cm', 'hm'));

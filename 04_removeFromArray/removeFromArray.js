const removeFromArray = function(firstArray, ...itemsToRemove) {
return firstArray.filter(function(item) {
    return !itemsToRemove.includes(item);
});
};
// Do not edit below this line
module.exports = removeFromArray;

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(function(arr, element, init){
    return element + arr
})
// totalBatteries(batteryBatches, element, 0)
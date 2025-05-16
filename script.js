function divide(arr, n) {
    const result = [];
    let current = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] <= n) {
            current.push(arr[i]);
            currentSum += arr[i];
        } else {
            if (current.length > 0) {
                result.push(current);
            }
            
            current = [arr[i]];
            currentSum = arr[i];
        }
    }

    
    if (current.length > 0) {
        result.push(current);
    }

    return result;
}
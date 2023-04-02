function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let tempI = i;
    let j = i - 1;
    while (nums[tempI] < nums[j]) {
      [nums[tempI], nums[j]] = [nums[j], nums[tempI]];
      j--;
      tempI--;
    }
  }
  return nums;
}

const testArr = [1, 4, 2, 3, 6, 110, 3, 44, 65,43,23,4,42,3];

insertionSort(testArr);

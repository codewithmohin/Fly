 var twoSum = function(nums, target) {
  let map = {}; 

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];

    if (map[needed] !== undefined) {
      return [map[needed], i];
    }

    map[nums[i]] = i;
  }
};

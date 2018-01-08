exports.findDuplicate = function findDuplicate(nums) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (seen[num]) return num;
    seen[num] = true;
  }
};

// Time Complexity : O(m + n)
// Space Complexity : O(1)

// merge sorted Array
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let i = (m + n) - 1

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] >= nums2[p2]) {
            nums1[i] = nums1[p1]
            p1 -= 1
        } else {
            nums1[i] = nums2[p2]
            p2 -= 1
        }
        i -= 1
    }
    while (p2 >= 0) {
        nums1[i] = nums2[p2]
        p2 -= 1
        i -= 1
    }
};
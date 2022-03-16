//
// const romanToInt = (s: string):number => {
//   const romanData: { [key: string]: number } = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let total = 0;
//   for (let i = 0; i < s.length; i++) {
//     const curNumber = romanData[s[i]];
//     const nextNumber = s.length > i + 1 ? romanData[s[i + 1]] : null;
//     if (nextNumber && nextNumber > curNumber) {
//       total += nextNumber - curNumber;
//       i++;
//     } else {
//       total += curNumber;
//     }
//   }
//   return total;
// };
// console.log(romanToInt("ICM"));

//------------9. Palindrome Number----------------
// const isPalindrome = (x: number): boolean => {
//   return parseInt(x.toString().split("").reverse().join("")) == x
//     ? true
//     : false;
// };
// console.log(isPalindrome(121));
//-------------14. Longest Common Prefix---------------
// const longestCommonPrefix = (strs: Array<string>): string => {
//   let common = strs.shift() as string;
//   for (let i = 0; i < strs.length; i++) {
//     //trường hợp thằng 2 ít số hơn thằng đầu
//     if (strs[i].length < common.length)
//       common = common?.slice(0, strs[i].length);
//     for (let j = 0; j < strs[i].length; j++) {
//       if (strs[i][j] != common[j]) common = common?.slice(0, j);
//     }
//   }
//   return common;
// };
// console.log(longestCommonPrefix(["abab", "aba", ""]));
// --------------20. Valid Parentheses-----------------
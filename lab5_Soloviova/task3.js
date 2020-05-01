function removeLastVowel(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let ans = arr.split(" ");

    for (i = 0; i < ans.length; i++) 
	{
      for (j = ans[i].length - 1; j >= 0; j--) 
	  {
        if (vowels.includes(ans[i][j])) 
		{
          ans[i] = ans[i].slice(0, j) + ans[i].slice(j + 1);
          break;
        }
      }
    }
    return ans.join(' ');
}
console.log("Task 3");  
console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly."));
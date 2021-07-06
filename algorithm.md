# Tip 1: Come up with a brute-force solution first

```
[-1, 3, 8, 2, 9, 5] [4, 1, 2, 10, 5, 20]
target:24
Check every single pair and keep track of the pair with the closest sum
Time & Space complexity = O(n^2)
```

# Tip 2: Think of a simpler version of the problem

```
Initialize an empty set, iterate through all the elements in the first array,
Then add those elements to the set.
Iterate through the elements in the second array and check if there are any pairs,
that add up to the target of 24
Time & Space complexity = O(x * n)
```

# Tip 3: Think about the existing problem with simpler examples -> try noticing a pattern

```
It would be easiest to sort the arrays first in order to spot a pattern
```

# Tip 4: Use some sort of Visualization

# Tip 5: Test your solution on a few examples

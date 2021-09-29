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

# 1. Can I restate the problem in my own words?

```
 "Add two numbers and return the value"
```

# 2. What are the inputs that go into the problem?

```
 - ints?
 - floats?
 - what about string for large numbers?
```

# 3. What are the outputs that should come from the solution to the problem?

```
 -int? -float? -string?
```

# 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?

```
 What if there is only one number?
```

# 5. How should I label the important pieces of data that are a part of the problem?

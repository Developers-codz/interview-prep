# for i in range(2,6):
#     print(i)

# for i in range(5,1,-1):
#     print(i)

# division is decimal bydefault

print(5/2)

# double slash round down
print(-5//2)

import math
print(math.fmod(-10,3))
# math.floor()
# math.ceil()
# math.sqrt()
# math.pow()

# python numbers are infinite so they never overflow

print(math.pow(2,1023) < float("inf"))

arr = [1,2,3]
arr.append(5)
arr.append(6)
arr.pop()
print(arr)

# slicing

print(arr[-1])

print(arr[1:3])


# Loop through multiple arrays simultaneously with unpacking

nums1 = [1,2,3]
nums2 = [4,5,6]
for n1, n2 in zip(nums1, nums2):
   print(n1,n2)

nums1.reverse()
nums1.sort() #accending order for reverse pass reverse=True


arr = ["komal", "Kishan", "Runu", "Doe"]
# custom sort by length of string
arr.sort(key=lambda x:len(x), reverse=True)
print(arr)


# list Comprehension


print(ord("a"))

# delimitor

arrStr = ["abc", "def", "ghi"]
print(" ".join(arrStr))

# Queues

from collections import deque

queue = deque()

queue.append(1)
queue.append(2)
queue.popleft()
print(queue)
queue.appendleft(1)
queue.pop()

# Hashset

# Set doesnt have any duplicate

mySet = set()

mySet.add(1)
mySet.add(2)
mySet.add(3)
print(mySet)
print(len(mySet))
print(1 in mySet)
print(19 in mySet)

mySet.remove(2)

# Hashmap aka Dictionary

myMap = {}
myMap["alice"] = 18
myMap["John"] = 20
print(myMap)

print("alice" in myMap)
myMap.pop("alice")
print(myMap)

myMap2 = { "alice": 20, "john": 10}


# Dict comprehension




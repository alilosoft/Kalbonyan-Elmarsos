# try out the Python queue functions
from collections import deque
# Unlike lists, deque objects in Python are optimized for removing
# items from the beginning (first in- first out) 
# TODO: create a new empty deque object that will function as a queue
queue = deque()

# TODO: add some items to the queue
# adding items to a queue are O(1) operations
queue.append(1)
queue.append(2)
queue.append(3)
queue.append(4)

# TODO: print the queue contents
print(queue)

# TODO: pop an item off the front of the queue
queue.popleft() # dequeuing items are also O(1) operations
print(queue)
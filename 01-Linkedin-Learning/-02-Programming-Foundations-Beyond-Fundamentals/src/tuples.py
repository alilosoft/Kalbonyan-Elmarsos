
example = ('abc', 123, True) # define an immutable tuple
print(example[0]) # abc
example[0] = 'xyz' # runtime error: 'tuple' object does not support item assignment

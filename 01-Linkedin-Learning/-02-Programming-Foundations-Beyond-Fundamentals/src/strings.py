num = input('Enter your favorite number: ')

# String concatenation with +
print(num + ' is my favorite number')

# convert the String num to an int
num_int = int(num) 
print(num + ' * 10 is ')
print(num_int * 10)

name = 'ali fellahi'

first_name = name[:3] # String slicing using: string_val[start:end]
last_name_index = name.find('fellahi') # looking for a substring
last_name = name[last_name_index:]
print(first_name.capitalize() + ' ' + last_name.capitalize())


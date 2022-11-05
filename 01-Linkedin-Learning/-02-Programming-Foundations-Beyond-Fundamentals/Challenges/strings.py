miles = input('Enter a distance in miles: ')
# kilometers_value = miles_value * 1.609344

miles_value = float(miles) # convet input to float

kilometers_value = miles_value * 1.609344 # do the math
km_string = str(kilometers_value) # convert the result back to String
print('Distance in kilometers is: ' + km_string) # show them


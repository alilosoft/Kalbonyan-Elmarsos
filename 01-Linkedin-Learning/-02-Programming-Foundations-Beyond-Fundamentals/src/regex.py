import re # regular expressions module

zip = '12345'
zip_regex = r'\d{5}'
match = re.search(zip_regex, zip)
print(match)

date = '05-04-2022' 
date_regex = r'\d{2}-\d{2}-\d{4}'
match = re.search(date_regex, date)
print(match)

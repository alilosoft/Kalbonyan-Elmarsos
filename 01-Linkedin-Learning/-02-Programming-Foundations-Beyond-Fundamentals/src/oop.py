# defining a class
class Employee:
    # constructor: a special method used to create objects
    def __init__(self, name, salary):
        self.name = name # attribute
        self.salary = salary # attribute
    
    def display(self): # method
        print(f'Name: {self.name}, Salary: {self.salary}')
    
    def increaseSalary(self, amount): # method
        self.salary += amount

# creating objects from the Employee class
emp1 = Employee('Ali', 10000)
emp2 = Employee('Ahmed', 50000)
# calling methods
emp1.display()
emp2.display()

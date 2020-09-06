# Introduce concept of inheritance
# Show how objects can interact
# Three classes: Person, Vehicle, Car
# Allow people to buy and sell cars

class Car:
    def __init__(self, make, model, year, mileage = 0):
        self.make = make
        self.model = model
        self.year = year
        self.mileage = mileage

        self.owner = None
    
    def set_owner(self, person):
        self.owner = person

class Person:
    def __init__(self, name, money = 30000):
        self.name = name
        self.money = money

        self.cars = []
    
    def buy_car(self, price, car):
        if self.money < price:
            print("You need a loan!")
            return False
        else:
            self.cars.append(car)
            car.set_owner(self)
            self.money = self.money - price
        
        return self
    
    def sell_car(self, price, car):
        if len(self.cars) > 0:
            self.cars.remove(car)
            car.set_owner(None)
            self.money += price

        return self

    def __str__(self):
        my_str = f"Name: {self.name}; money: {self.money}; cars: "

        for car in self.cars:
            my_str += f"{car.make} - {car.model}, "

        return my_str

honda_civic = Car("Honda", "Civic", 2012, 2000)

lambo = Car("Lamborghini", "Gallardo", 2008, 1)

delorean = Car("DMC", "The Delorean", 1982, 200000)

marty = Person("Marty Chavez", 100000)
jorge = Person("Jorge Hernandez", 20000)
bill_gates = Person("Bill Gates", 70000000000)

marty.buy_car(95000, lambo)

if jorge.buy_car(20000, lambo) != False:
    marty.sell_car(20000, lambo)

marty.buy_car(10000, honda_civic)

bill_gates.buy_car(95000, lambo)
jorge.sell_car(95000, lambo)

jorge.buy_car(90000, delorean)

print(marty)
print(jorge)
print(bill_gates)
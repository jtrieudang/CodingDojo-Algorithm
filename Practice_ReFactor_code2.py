# Hi, my name is Morley Tatro, and I have been coding seriously for 8 years.
first_name = "Morley"
last_name = "Tatro"

years_coding = 8

str1 = f"Hi, my name is {first_name} {last_name}, and I have been coding seriously for {years_coding} years."

print(str1)

# The other day, I was hoping to buy toilet paper, and I went to 3 stores: Ralphs, CVS, and Walgreens.
stores = [
    "Ralphs",
    "CVS",
    "Walgreens"
]

length = len(stores)

stores_string = f"The other day, I was hoping to buy toilet paper, and I went to {length} stores: "

for i in range(length):
    if i < length - 1:
        stores_string += stores[i] + ", "
    else:
        stores_string += "and " + stores[i]

print(stores_string + ".")

items = [
    {
        "name": "bags of coffee",
        "quantity": 4,
        "price": 5
    },
    {
        "name": "bags of rice",
        "quantity": 2,
        "price": 2.5
    }
]

print(f"Unfortunately, I wasn't able to find any. Instead, I bought the following {len(items)} items:")

sum = 0

# JavaScript syntax
# for(var i = 0; i < items.length; i++) {}
# for(var thing of items) {}

for thing in items:
    item_total = thing["quantity"] * thing["price"]
    sum = item_total + sum

    price = thing["price"]

    my_string = f"{thing['quantity']} {thing['name']}, at a price of {price}, for a total of {item_total}; "

    if price < 3:
        my_string += "it was cheap"
    else:
        my_string += "it was expensive"
    
    print(my_string)

print(f"The total for everything was {sum}")

# 6 bananas, at a price of .25, for a total of 1.50; it was cheap
# 1 carrot bag, at a price of 2, for a total of 2; it was expensive
# The total for everything was 3.50
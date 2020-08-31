my_list = [
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

def iterate_through_dictonaries(input_list):
    for element in my_list:
        # this is the item
        for key, val in element.items():
            print(key, "-", val)
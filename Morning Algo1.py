# Morning algos and lecture on python classes
# function parensValid(str) {
#   // returns a boolean
#   // are the parens valid?
# }

# // parensValid('(()))') returns false
# // parensValid('((some)a)') returns true
# // parensValid(')(') returns false

# function bracesValid(str) {
#   // returns a boolean
#   // are the braces valid?
# }

# // bracesValid('{[()]}') returns true
# // bracesValid('{[()}]') returns false
# // bracesValid('{[a()b]c}') returns true
# // bracesValid('{}[]()[(])') returns false
# problem is above and below is a possible function
function bracesValid(str) {
    var newArr = [];
    for (var i = 0; i<str.length; i++){
        if (str[i]==="(" || str[i]==="[" || str[i]==="{"){
            newArr.push(str[i]);
        }
        else if (str[i]===")"){
            if (newArr[newArr.length-1]==="("){
                newArr.pop();
            }
            else{
                return false;
            }
        }
        else if (str[i]==="}"){
            if (newArr[newArr.length-1]==="{"){
                newArr.pop();
            }
            else{
                return false;
            }
        }
        else if (str[i]==="]"){
            if (newArr[newArr.length-1]==="["){
                newArr.pop();
            }
            else{
                return false;
            }
        }
    }
    if (newArr.length>0){
        return false;
    }
    return true;
}

# Shortened:

function bracesValid(str) {
    var openings = [];
    for (var i = 0; i<str.length; i++){
        if (str[i]==="(" || str[i]==="[" || str[i]==="{"){
            openings.push(str[i]);
        }
        else if (str[i]===")"){
            if (openings.pop()!=="("){
                return false;
            }
        }
        else if (str[i]==="}"){
            if (openings.pop()!=="{"){
                return false;
            }
        }
        else if (str[i]==="]"){
            if (openings.pop()!=="["){
                return false;
            }
        }
    }
    return openings.length==0;
}

	
# instructor_morley
# 11:42 AM
# Today's class notes:
# OOP - Object Oriented Programming

# Why? Thinking about our programs as if they have real objects we could see/touch
# Benefits? Things become easier to reason about when we're thinking about objects we already know
# It's just one programming paradigm of many.

# How?
# Classes - Blueprint
# Instances - Individual object created with the blueprint

# Attributes - things the objects "have"
# Methods - functions inside a class; things the objects can do

import random
import math

class Person:
  def __init__(self, birthday = "1/11/11", name = "Bob Smith", gender = "male", favorite_color = "red", hit_points = 100):
    self.birthday = birthday
    self.name = name
    self.gender = gender
    self.favorite_color = favorite_color
    self.hit_points = hit_points
  
  def get_attacked(self):
    dice_value = math.ceil(random.random() * 20)
    self.hit_points = self.hit_points - dice_value


sam = Person("1/13/10", "Sam Black", "male", "black")

jorge = Person("1/1/11", "Jorge Hernandez", "male", "black")

jimmy = Person("1/1/12", "Jimmy Trieudang", "male", "black")

niv = Person(gender="male", name="Niv Brook", birthday="1/1/11")

print(niv.name)

some_person = Person(gender="male")
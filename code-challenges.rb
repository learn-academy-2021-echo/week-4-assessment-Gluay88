# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# num1 = 7
# Expected output: '7 is odd'
# num2 = 42
# Expected output: '42 is even'
# num3 = 221
# # Expected output: '221 is odd'

newArray = [7, 42, 221]
newNum = newArray.map do |value|
    if value % 2 == 0
        p "#{value} is even"
    else
        p "#{value} is odd"
    end
end

# another way to do this task (down below)
    num1 = 7
        if num1 % 2 == 0
            p "#{num1} is even"
        else
            p "#{num1} is odd"
        end
        
    num2 = 42
    if num2 % 2 == 0
        p "#{num2} is even"
    else
        p "#{num2} is odd"
    end

    num3 = 221
    if num3 % 2 == 0
        p "#{num3} is even"
    else
        p "#{num3} is odd"
    end



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
# album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
# album3 = 'Abbey Road'
# # Expected output: 'bby Rd'

album1 = 'Rubber Soul'
def remvowel(string)
    string.delete 'aeiouAEIOU'
  end
p remvowel(album1)


album2 = 'Sgt Pepper'
def remvowel(string)
    string.delete 'aeiouAEIOU'
  end
p remvowel(album2)


album3 = 'Abbey Road'
def remvowel(string)
    string.delete 'aeiouAEIOU'
  end
p remvowel(album3)



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

# is_palindrome1 = 'Racecar'
# # Expected output: 'Racecar is a palindrome'
# is_palindrome2 = 'LEARN'
# # Expected output: 'LEARN is not a palindrome'
# is_palindrome3 = 'Rotator'
# # Expected output: 'Rotator is a palindrome'

is_palindrome1 = 'Racecar'
def palindrome?(string)
    if string.downcase == string.reverse.downcase
        puts "#{string} is a palindrome"
    else
        puts "#{string} is a palindrome"
    end
end
palindrome?(is_palindrome1)


is_palindrome2 = 'LEARN'
def palindrome?(string)
    if string.downcase == string.reverse.downcase
        puts "#{string} is a palindrome"
    else
        puts "#{string} is a not palindrome"
    end
end
palindrome?(is_palindrome2)


is_palindrome3 = 'Rotator'
def palindrome?(string)
    if string.downcase == string.reverse.downcase
        puts "#{string} is a palindrome"
    else
        puts "#{string} is a not palindrome"
    end
end
palindrome?(is_palindrome3)


def checkPrime(num):
    lst = []
    prime_lst = [1, num]
    for i in range(1, int(num**0.5)+1):
        if num%i == 0:
            lst.append(i)
    lst.append(num)
    if lst == prime_lst:
        return "Prime"
    else :
        return "Composite"
    

if __name__ == "__main__":
    number = int(input("Enter number: "))
    
    if number == 1:
        print(f"{number} is neither Prime nor Composite.")
    elif number>1:
        result = checkPrime(number)
        print(f"{number} is {result} number.")
    else :
        print("Invalid Entry.")

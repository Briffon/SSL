class Grader:
    aName=""
    grade=""
    def __init__(self,n,g):
        self.aName=n
        self.grade=g
        self.gradeAssignment(grade)
    def gradeAssignment(x,y):
        grade=int(y)
        if grade >= 90:
            print ("You got an A on your assingment!")
            print(grade)
        elif grade >= 80:
            print ("You got a B on your assingment!")
        elif grade >= 70:
            print("You got a C on your assingment!")
        elif grade >= 61:
            print("You got a D on your assingment!")
        else:
            print("You got a F on your assingment!")
name = raw_input("What is your name?")
aName= raw_input("Hello "+name+", what is the name of your assignment?")
grade= raw_input("What was your grade on your assingment?")
x = Grader(grade,aName)
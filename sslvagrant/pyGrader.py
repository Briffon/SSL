class Grader:
    aName=""
    grade=""
    def __init__(self,n,g):
        self.aName=n
        self.grade=g
        self.gradeAssignment(grade)
    def gradeAssignment(grade,aName):
        if grade>=90:
            print ("You got an A on "+aName+"!")
        elif grade >= 80:
            print ("You got a B on "+aName+"!")
        elif grade >= 70:
            print("You got a C on "+aName+"!")
        elif grade >= 61:
            print("You got a D on "+aName+"!")
        else:
            print("You got a F on "+aName+"!")
name = raw_input("What is your name?")
aName= raw_input("Hello "+name+", what is the name of your assignment?")
grade= raw_input("What was your grade on "+aName+"?")
x = Grader(grade,aName)
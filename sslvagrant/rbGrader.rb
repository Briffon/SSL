class Test
    def initialize
        puts "What is your name?"
        @name=gets
        puts "Hello #@name, what is the name of your assignment?"
        @aName=gets
        puts "What did you make on #@aName"
        @grade=gets
        grader (@grade,@aName)

    end

    def grader (x,aName)
        if x >= 90
            puts `You got an A on #{@aName}!`
        elsif x >= 80
            puts `You got a B on #{@aName}!`
        elsif x >= 70 
            puts`You got a C on #{@aName}!`
         elsif x >= 61 
            puts`You got a D on #{@aName}!`
         else 
            puts`You got a F on #{@aName}!`
         end
        
    end
end

x = Test.new;


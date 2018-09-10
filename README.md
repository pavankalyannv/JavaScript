# JavaScript js 1st hand's on excercises

1. Write a function named tellFortune that:
  • takes 4 arguments: number of children, partner's name, geographic location, job title.
  • outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N
    kids."
  • Call that function 3 times with 3 different values for the arguments.
  • Sample Function call: tellFortune('bball player', 'spain', 'Shaq', 3);

2. Write a function named calculateSupply that:
  • takes 2 arguments: age, amount per day.
  • calculates the amount consumed for rest of the life (based on a constant max age).
  • outputs the result to the screen like so: "You will need NN to last you until the ripe old
  age of X"
  • Call that function three times, passing in different values each time.
  • Bonus: Accept floating point values for amount per day, and round the result to a round
  number.
  • Sample Function call: calculateSupply(28, 36);

3. Write a function named calculateAge that:
  • takes 2 arguments: birth year, current year.
  • calculates the 2 possible ages based on those years.
  • outputs the result to the screen like so: "You are either NN or NN"
  • Call the function three times with different sets of values.
  • Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
  • Sample Function call: calculateAge(1984, 2012);

4. Create an array to hold your top choices (colors, presidents, whatever).
  • For each choice, log to the screen a string like: "My #1 choice is blue."
  • Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the
  right suffix for the number based on what it is.

5. Write a function named greaterNum that:
  • takes 2 arguments, both numbers.
  • returns whichever number is the greater (higher) number.
  • Call that function 2 times with different number pairs, and log the output to make sure it
  works (e.g. "The greater number of 5 and 10 is 10.").

6. Write a function named helloWorld that:
  • takes 1 argument, a language code (e.g. "es", "de", "en")
  • returns "Hello, World" for the given language, for atleast 3 languages. It should default
  to returning English.
  • Call that function for each of the supported languages and log the result to make sure it
  works.
  • Sample Function calls:
  ▪ console.log(helloWorld('en'));
  ▪ console.log(helloWorld('fr'));

7. Write a function named assignGrade that:
  • takes 1 argument, a number score.
  • returns a grade for the score, either "A", "B", "C", "D", or "F".
  • Call that function for a few different scores and log the result to make sure it works.
  • Sample Function call: console.log('You got a ' + assignGrade(95));

8. Create an object to hold information on your favorite recipe. It should have properties for
title (a string), servings (a number), and ingredients (an array of strings).
  • On separate lines (one console.log statement for each), log the recipe information so it
  looks like:
  ▪ Mole
  ▪ Serves: 2
  ▪ Ingredients:
    • cinnamon
    • cumin
    • cocoa

9. Create an array of objects, where each object describes a book and has properties for the
title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
  • Iterate through the array of books. For each book, log the book title and book author like
  so: "The Hobbit by J.R.R. Tolkien".
  • Now use an if/else statement to change the output depending on whether you read it
  yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R.
  Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by
  J.R.R. Tolkien.'

10. Create a Movie database
  • Create an object to store the following information about your favorite movie: title (a
  string), duration (a number), and stars (an array of strings).
  • Create a function to print out the movie information like so: "Puff the Magic Dragon
  lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

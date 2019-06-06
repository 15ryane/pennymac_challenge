# PennyMac Challenge


1) In the attached file (w_data.dat), you’ll find daily weather data. Write a program to output the day number (column one) with the smallest temperature spread (the maximum temperature is the second column, the minimum the third column).

2) The attached soccer.dat file contains the results from the English Premier League.  The columns labeled ‘F’ and ‘A’ contain the total number of goals scored for and against each team in that season (so Arsenal scored 79 goals against opponents, and had 36 goals scored against them). Write a program to print the name of the team with the smallest difference in ‘for’ and ‘against’ goals.

How to run:

```sh
$ cd pennymac_challenge
$ npm start
```

### Thoughts on completing the two challenges:

What was common between both questions? 
- Needed to parse a text file.
- The text files had a similar shape - columns of data seperated by whitespace, with trailing column info, enclosed in a pre-tag.
- Take the difference of numbers found in two columns.
- Remember the smallest difference and return an output based on that.

What was different?
- The location of the rows in question were different.

What could I generalize?
- Text file parsing.
- Taking the difference of numbers.


Generalized functions were given parameters where the user can define specific behaviors: exactly what to parse, exactly what columns to compare, etc.


Were there any edge cases present in one and not the other?
- That '------' row in the soccer file, as well as random '*'s in the weather file. Each required that the generalized funcations be changed to accomodate their abberant inputs, which complicates the functions somewhat.
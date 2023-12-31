Instruction for Mars Rover Project:

👾 🚀 You are working in an Engineering Squad for the 🎶 Melody Mars Mission, tasked with designing software to manage robots 🤖 and
cool vehicles for space exploration! 👽 🛸🌏

Setting the Scene:
You have been asked to create a program to move rovers around the surface of Mars!

- The surface of Mars is represented by a Plateau, you can make the assumption that the Plateau is a square/ rectangular grid for the purpose of this task.
- Rovers navigate the Plateau so they can use their special cameras and robot arms to collect samples back to Planet Earth
  Representation of a Rover’s Position on the Plateau
  -The Plateau is divided into a grid. A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North,South, West, East (the four cardinal compass points) respectively.

Example:
0 0 N
This means the Rover is at the bottom-left corner facing in the North direction.

Instructing a Rover to Move Around the Plateau
To move a Rover around the Plateau, a string of letters is sent to a Rover.
Here are the letters and their resultant action:

- Letter Action
  L ---> Spins the Rover 90 degrees Left without moving from the current coordinate point
  R ---> Spins the Rover 90 degrees Right without moving from the current coordinate point
  M ---> Moves the Rover forward by one grid point, maintaining the same heading (i.e. from where the Rover is facing (its orientation)).
  N.B. Assume that the square directly North from (x, y) is (x, y+1).

Inputs into the Program:
First Line of Input to the Program

- The first line inputted into the program represents the upper-right coordinates of the Plateau.eg(5,5)
- This Plateau has maximum (x, y) co-ordinates of (5, 5).
- N.B. Assume that the lower-left coordinates is (0, 0).

Subsequent Lines of Input into the Program - Input to Rovers
This represents the instructions to move the rovers.
Each rover receives two lines of input.

- First Line of Input to a Rover
  The Rover’s position is represented by two integers representing the X and Y coordinates and a letter representing where the Rover is facing (its orientation). Eg: 1 2 N
- Second Line of Input to a Rover
  A string of letters representing the instructions to move the Rover around the Plateau.
  Movement Rules
  Rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move.

Output Excepted:
For each Rover, the output represents its final position (final coordinates and where it is facing).
Example Test Case
Lines of Input to the Program:
5 5
1 2 N
LMLMLMLMM

3 3 E
MMRMMRMRRM
Expected Output:
1 3 N
5 1 E

Algorithm to solve MarsRovers project:

Define the Plateau into matrix ex: 5X5 .
Read the input of Rover position and direction ex:1,2 N .
Read the input for Rover navigation ex: LMLMLMLMM .
In a loop, read each character of rover navigation and find out the next position and direction by mapping the character to switch cases.
for example: Rover position : 1,2,N 4.
Direction of the movement : LMLMLMLMM a. L -> 1,2 W b. M -> 0,2 W c. L  
 -> 0,2 S d. M -> 0,1 S e. L -> 0,1 E f. M -> 1,1 E g. L -> 1,1 N h. M -> 1,2 N i. M -> 1,3 N

Getting Started with Roman Numerals Kata:
first clone the repository with the link, https://github.com/mousumi-ish/Mars-Rovers.git.

command is ,git clone https://github.com/mousumi-ish/Mars-Rovers.git.

Prerequisites for running the tests is:
node current version

Installing dependencies: npm install

Running Tests: npm test

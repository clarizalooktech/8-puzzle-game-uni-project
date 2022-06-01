# 8 Puzzle Game

8 Puzzle Game is a puzzle solving web application to help improve concentration on focusing on logical and conceptual challenges of a player. It also helps kids and adult players about the concepts of whole and how each pieces are structured together. 


# Table of Contents
* Background
* Technologies
* Setup
* Features
* Status

# Background

The 8-puzzle problem is a puzzle invented and popularized by Noyes Palmer Chapman in the 1870s. It is played on a 3-by-3 grid with 8 square blocks labeled 1 through 8 and a blank square. An 8 puzzle is a simple game consisting of a 3 x 3 grid (containing 9 squares). One of the squares is empty. The object is to move to squares around into different positions and having the numbers displayed in the numeric orders.

 ### 
 
 ### Rules for solving the puzzle

The players of 8 Puzzle Game is encouraged to rearrange the tiles so that they are in row-major order, using as few moves as possible. players are permitted to slide tiles either horizontally or vertically into the blank square. Basically swapping the tile with the empty space. The empty space can only move in four directions.

1. Up
2. Down
3. Right 
4. Left

The empty space cannot move diagonally and can take only one step at a time (i.e. move the empty space one position at a time).

You can read more about solving the 8-Puzzle problem [here](https://www.geeksforgeeks.org/8-puzzle-problem-using-branch-and-bound/).


### How to check if the 8 puzzle is solvable?

As the objective is to place the numbers on tiles in order using the empty space. There is one simple rule to check if a 8 puzzle is solvable. It is impossible to solve an instance of 8 puzzle if number of inversions is odd in the input state.

### What is inversion?

An inversion is created when a larger number appear after a smaller number in the sequence. 

Assuming the switch pushes the number forward in the sequence, 3 numbers A, B and C. There are 3 cases:

A < B, C. A jumping forward 2 positions will create 2 more inversions in the sequence (B vs A and C vs A)
A > B, C. A jumping forward 2 positions will reduce the number of inversions by 2
A is between B and C. A jumping forward 2 positions will create a new inversion, but reduce another inversion => the total number of inversions in the sequence stay the same.



# Technologies

* Html
* CSS
* Javascript
* Flask
* Python3
* SQLite

# Setup

## Running the web application

Step 1: Download the source code file which includes the zip file of the project: app folder, README.md, requirements.txt, gitlogs.txt, run.py, tests.py file <br>
- The 'app folder' contains all files of the project including 'static folder' covering CSS,JS and images. 
- Within the app folder is the also the 'template folder' contains all the html files. 
- The DB is located just inside the 'app folder' called tile_swapping.db (where tables have been loaded with a few data) 
- The models.py contains all the models 
- The routes.py contains all the route path and 
- The __init__.py file to initialize the project. <br>

Step 2: On your command line prompt (linux) create a virtual enviroment <br>
> python3 -m venv venv

Step 3: Activate virtual environment
> source venv/bin/activate

Step 4: Install requirements
> python3 -m pip install -r requirements.txt

Step 5: Run the run.py on the command line
> python3 app.py

* Please note running the web app under incognito would be preferred.

## Testing
Step: Run the tests.py on the command line
#### Testing
Step: To test the web app, run the tests.py on the command line
> python3 tests.py

### Test Cases
* Ensure correct data validates.
* Ensure incorrect data does not validate. 
* Ensure user can't register when a duplicate email is used   

## Gitlogs
* Please refer to gitlogs.txt

# Features

* A sliding puzzle that is displayed on a 3-by-3 grid with 8 square tiles labeled 1 to 8, plus one blank square.
* Game Timer - track the time spent on solving the puzzle
* Pop out modal when the player wins the game
* User Login - claim identity 
* User Statistics - track and record the time that a user has spent on playing the game

## For Future States of 8 puzzle game

* Recording the time users spend on completing the game automatically without requiring users click on the timer button, when users start playing.
* Level of Difficulty - Different levels of difficulty in slider game. Instead of fixing the game at 3x3, 4x4 or 5x5 puzzle could be selected as options.
* Share results with friends - an API that allows user to post their statitics to social meida (Facebook, twitter, etc)
 

# Project Status

* The project is done with its initial phase of development. Test cases are not comprehensive due to time contraint.There are still areas for improvement for future development.

## Screenshots
<center>*Home Page*</center>
<br>
 <img align="center" alt="home-page" width="400px" src="https://github.com/dalizheng/8_Puzzle_Game/blob/main/app/static/images/AA-image-home-page.JPG" />

<center>*Register Page*</center>
<br>

 <img align="center" alt="register-page" width="400px" src="https://github.com/dalizheng/8_Puzzle_Game/blob/main/app/static/images/AA-image-register-page.JPG" />
 
<center>*Play The Game Page*</center>
<br>
 <img align="center" alt="play-game-page" width="400px" src="https://github.com/dalizheng/8_Puzzle_Game/blob/main/app/static/images/AA-image-play-the-game-page.JPG" />
 
<center>*Game Statistics Page*</center>
<br>
 <img align="center" alt="game-statistics-page" width="400px" src="https://github.com/dalizheng/8_Puzzle_Game/blob/main/app/static/images/AA-image-game-stats-page.JPG" />
 
<center>*Login Page*</center>
<br>
 <img align="center" alt="login-page" width="400px" src="https://github.com/dalizheng/8_Puzzle_Game/blob/main/app/static/images/AA-image-login-page.JPG" />

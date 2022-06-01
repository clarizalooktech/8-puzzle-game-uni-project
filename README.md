# 8-puzzle-game-uni-project
This is my 8-puzzle game uni project for our Agile Web Dev unit using html, css, js, bootstrap, flask, sqlite. For the front-end look please refer to: https://clarizalooktech.github.io/8-puzzle-game-uni-project/

The task was to build an online daily puzzle, operating in a similar manner to Wordle.The app should have a short daily exercise that users do; the users recieve a score, or a rank, or some kind of feedback; they can share their performance with others through social media or similar mechanisms; and they can track their progress and statistics. It should also be convenient and easy to play via mobile devices, and engaging enough for the users to want to return regularly. The application should be written using HTML, CSS, AJAX, JQuery, and Bootstrap with backend technologies Flask, (Jinja), and sqlite.


# Technologies

* Html
* CSS
* Javascript
* Flask
* Python3
* SQLite

# Setup

## Running the web application

Step 1: Download the 'source code files' folder which includes the zip file of the project: app folder, README.md, requirements.txt, gitlogs.txt, run.py, tests.py file <br>
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


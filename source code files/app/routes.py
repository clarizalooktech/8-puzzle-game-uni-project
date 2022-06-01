from flask import render_template, request, redirect, url_for, jsonify, session, flash
import time
from app import app, db
from app.models import User, Others

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title = "Tile Swapping Puzzle Game")

@app.route('/play-the-game', methods=['POST', 'GET'])
def play_the_game():
    user_id = session.get('user', None)
    user = User.query.get(user_id)
    return render_template('play-the-game.html', title = "Play The Game", user_values=user)

@app.route('/game-statistics', methods=['POST', 'GET'])
def game_statistics():
    user_values = User.query.all() 
    return render_template('game-statistics.html', title = "Game Statistics", user_values=user_values)

@app.route('/register-user', methods=['POST'])
def register_user():
    form = request.form
    user_values = User(
        username=form['username'],
        email=form['email']
    )
    user_values.set_password(form['password'])
    db.session.add(user_values)
    db.session.commit()
    flash('Account registered successfully. Please login', 'success')
    return redirect(url_for('index'))

@app.route('/validate-registration', methods=['POST'])
def validate_registration():
    if request.method == "POST":
        username_val = request.get_json()['username']
        email_val = request.get_json()['email']
        user_email = User.query.filter_by(email=email_val).first()
        user_username = User.query.filter_by(username=username_val).first()
        if user_email: 
            return jsonify({"user_exists": "true"})
        elif user_username: 
            return jsonify({"user_exists": "true"})
        else:
            session['user_email'] = email_val
            return jsonify({"user_exists": "false"})

@app.route('/login-user', methods=['POST'])
def login_user():
    form = request.form
    user = User.query.filter_by(email=form['email']).first()
    if user.check_password(form['password']):
        session['user'] = user.id
        return redirect(url_for('play_the_game'))
    else:
        flash("Password was incorrect.", 'error')
        return redirect(url_for('index'))

@app.route('/validate-login', methods=['POST'])
def validate_login():
    if request.method == "POST":
        email_val = request.get_json()['email']
        user_email = User.query.filter_by(email=email_val).first()
        if user_email: 
            return jsonify({"user_exists": "true"})
        else:
            return jsonify({"user_exists": "false"})

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user', None)
    return redirect(url_for('index'))

@app.route('/others-data', methods=['POST'])
def others_data():
    if request.method == "POST":
        drop_count_final = request.get_json()['drop_count_final']
        time_display_final = request.get_json()['time_display_final']
        user_id = Others.query.filter_by(user_id=session['user']).first()

        user_others = Others(
            drop_count_final=drop_count_final,
            time_display_final=time_display_final,
            user_id=session['user']
        )

        if user_id is None:
            db.session.add(user_others)
            db.session.commit()
        else:
            if user_id.user_id == session['user']:
                db.session.delete(user_id)
                db.session.add(user_others)
                db.session.commit()
        return redirect(url_for('play_the_game'))
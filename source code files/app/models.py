from app import db
from werkzeug.security import check_password_hash, generate_password_hash

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(120), nullable=False)
  email = db.Column(db.String(120), index=True, unique=True, nullable=False)
  password_hash = db.Column(db.String(128))
  others = db.relationship('Others', backref='user', lazy=True)

  def set_password(self, password):
    self.password_hash = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password_hash, password)

class Others(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  time_display_final = db.Column(db.String(12))
  drop_count_final = db.Column(db.String(12))
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

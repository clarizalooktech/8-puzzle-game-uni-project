import os
import warnings
import unittest

from app import app, db
from app.models import User


class TestSetup(unittest.TestCase):

    def setUp(self):
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://'
        self.app=app.test_client()#creates a virtual test environment
        db.create_all()
       
    def tearDown(self):
        db.session.remove()
        db.drop_all()


class UserRegistration(TestSetup):

    # Ensure correct data validates.
    def test_validate_success_register_form(self):
        form = User(email='new@test.test')
        form.set_password('cat')
        self.assertTrue(form.check_password('cat'))

     # Ensure incorrect data does not validate.    
    def test_validate_invalid_password_format(self):
        form = User(email='new@test.test')
        form.set_password('cat')
        self.assertFalse(form.check_password(''))
        self.assertFalse(form.check_password('dog'))
        
    # Ensure user can't register when a duplicate email is used
    def test_validate_email_already_registered(self):
        form = User(email='test@user.com')
        self.assertFalse(form.query.filter_by(email='test@user.com').first())


if __name__ == '__main__':
    unittest.main(verbosity=2)    
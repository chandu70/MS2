from flask import Flask, render_template, request, jsonify, redirect, url_for,session
import pandas as pd
from sklearn.preprocessing import StandardScaler
from catboost import CatBoostClassifier
import joblib
import os
import logging
import requests

app = Flask(__name__, template_folder='templates', static_folder='static')

# Directory paths
MODEL_DIR = 'model'
model_path = os.path.join(MODEL_DIR, 'catboost_model.pkl')
scaler_path = os.path.join(MODEL_DIR, 'scaler1.pkl')

# Load the trained model and scaler
model = joblib.load(model_path)
scaler = joblib.load(scaler_path)

# Define a function to preprocess input data
def preprocess_data(data):
    
    data = pd.DataFrame(data, index=[0])

    # Scale numerical variables
    numerical_cols = ['pH', 'Temperature', 'Taste', 'Odor', 'Fat', 'Turbidity', 'Colour']
    data[numerical_cols] = scaler.transform(data[numerical_cols])

    return data

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ContactUs')
def ContactUs():
    return render_template('ContactUs.html')

@app.route('/AboutUs')
def AboutUs():
    return render_template('AboutUs.html')



@app.route('/login')
def login():
    return render_template('LoginPage.html')

@app.route('/Milkmanregister')
def Milkmanregister():
    return render_template('Milkmanregister.html')

@app.route('/Cooperatorregister')
def Cooperatorregister():
    return render_template('Cooperatorregister.html')

@app.route('/RetailerRegister')
def RetailerRegister():
    return render_template('RetailerRegister.html')

@app.route('/CustomerRegister')
def CustomerRegister():
    return render_template('CustomerRegister.html')

@app.route('/Collectmilk')
def Collectmilk():
    return render_template('Collectmilk1.html')
@app.route('/audit_milk')
def audit_milk():
    return render_template('Auditmilk1.html')
@app.route('/record_milk')
def record_milk():
    return render_template('RecordMilk1.html')

@app.route('/retail_milk')
def retail_milk():
    return render_template('Retailmilk1.html')
@app.route('/customer')
def customer():
    return render_template('Customer.html')

@app.route('/redirect-to-page/<user_type>')
def redirect_to_page(user_type):
    # Define a dictionary to map user types to registration pages
    user_registration_pages = {
        'milkman': 'Milkmanregister',
        'cooperator': 'Cooperatorregister',
        'retailer': 'RetailerRegister',
        'customer': 'CustomerRegister'
    }

    # Check if the user type is valid
    if user_type in user_registration_pages:
        # Get the corresponding registration page for the user type
        registration_page = user_registration_pages[user_type]
        # Construct the URL for the registration page
        redirect_url = url_for(registration_page)
        # Redirect the user to the registration page
        return redirect(redirect_url)
    else:
        # Handle invalid user types
        return "Invalid user type"
@app.route('/predict1', methods=['POST'])
def predict1():
     pH = float(request.form['pH'])
     temp = float(request.form['temp'])
     taste = float(request.form['taste'])
     odor = float(request.form['odor'])
     fat = float(request.form['fat'])
     turbidity = float(request.form['turbidity'])
     colour = float(request.form['colour'])

    # Preprocess the input data
     input_data = {'pH': pH, 'Temperature': temp, 'Taste': taste, 'Odor': odor, 'Fat': fat, 'Turbidity': turbidity, 'Colour': colour}
     processed_data = preprocess_data(input_data) 
     prediction = model.predict(processed_data)[0]
     return jsonify({'prediction': prediction[0]}) 

    

if __name__ == '__main__':
    app.run(debug=True)

# import necessary libraries
from models import create_classes
import os 
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy

# DATABASE_URL is automatically populated from Heroku
# Removed SQLite connection as this example connects to postgres
# .replace("://", "ql://", 1) addresses Heroku dialect mismatch
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '').replace("://", "ql://", 1)

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

Budget = create_classes(db)
Arrests = create_classes(db)

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

# @TODO: Route needed for each dataset
# Example 1: Two column table
@app.route("/api/budget.json")
def budget():
    results = db.session.query(Budget.id, Budget.expenditures, Budget.actual_fy_18_19, Budget.adopted_fy_19_20, Budget.estimated_fy_19_20, Budget.adopted_fy_20_21).all()

    budget_id = [result[0] for result in results]
    budget_expenditures = [result[1] for result in results]
    budget_actual_fy_18_19 = [result[2] for result in results]
    budget_adopted_fy_19_20 = [result[3] for result in results]
    budget_estimated_fy_19_20 = [result[4] for result in results]
    budget_adopted_fy_20_21 = [result[5] for result in results]

    Budget_data = [{
        "id": budget_id,
        "expenditures": budget_expenditures,
        "actual_fy_18_19": budget_actual_fy_18_19,
        "adopted_fy_19_20": budget_adopted_fy_19_20,
        "estimated_fy_19_20": budget_estimated_fy_19_20,
        "adopted_fy_20_21": budget_adopted_fy_20_21

    }]

    return jsonify(Budget_data)

# @app.route("/api/arrests.json")
# def arrests():
#     results = db.session.query(Arrests.id, Arrests.arrests_id, Arrests.year, Arrests.month, Arrests.arrest_type, Arrests.arrest_charge, Arrests.ward, Arrests.division, Arrests.arrestee_race, Arrests.arrestee_sex).all()

#     id = [result[0] for result in results]
#     arrests_id = [result[1] for result in results]
#     arrests_year = [result[2] for result in results]
#     arrests_month = [result[3] for result in results]
#     arrests_arrest_type = [result[4] for result in results]
#     arrests_arrest_charge = [result[5] for result in results]
#     arrests_ward = [result[6] for result in results]
#     arrests_division = [result[7] for result in results]
#     arrests_arrestee_race = [result[8] for result in results]
#     arrests_arrestee_sex = [result[9] for result in results]

#     arrests_data = [{
#         "id": id,
#         "arrest id": arrests_id,
#         "arrest year": arrests_year,
#         "arrest month": arrests_month,
#         "arrest type": arrests_arrest_type,
#         "arrest charge": arrests_arrest_charge,
#         "ward": arrests_ward,
#         "division": arrests_division,
#         "arrestee_race": arrests_arrestee_race,
#         "arrestee sex": arrests_arrestee_sex

#     }]

#     return jsonify(arrests_data)


if __name__ == "__main__":
    app.run()

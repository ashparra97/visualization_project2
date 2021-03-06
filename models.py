def create_classes(db):
    class Budget(db.Model):
        __tablename__ = 'budget'

        id = db.Column(db.Integer, primary_key=True)
        expenditures = db.Column(db.String(255))
        actual_fy_18_19 = db.Column(db.Float)
        adopted_fy_19_20 = db.Column(db.Float)
        estimated_fy_19_20 = db.Column(db.Float)
        adopted_fy_20_21 = db.Column(db.Float)

        def __repr__(self):
            return '<Budget %r>' % (self.name)
    return Budget

def create_classes2(db):
    class Arrests(db.Model):
        __tablename__ = 'arrests'

        id = db.Column(db.Integer, primary_key=True)
        booking_id = db.Column(db.String(255))
        year = db.Column(db.Integer)
        month = db.Column(db.String(255))
        arrest_type = db.Column(db.String(255))
        arrest_charge = db.Column(db.String(255))
        ward = db.Column(db.String(255))
        division = db.Column(db.String(255))
        arrestee_race = db.Column(db.String(255))
        arrestee_sex = db.Column(db.String(255))

        def __repr__(self):
            return '<Arrests %r>' % (self.name)
    return Arrests  
    
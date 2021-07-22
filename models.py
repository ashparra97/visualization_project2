def create_classes(db):
    class Budget(db.Model):
        __tablename__ = 'budget'

        id = db.Column(db.Integer, primary_key=True)
        expenditures = db.Column(db.String(255))
        actual_fy_18_19 = db.Column(db.Money)
        adopted_fy_19_20 = db.Column(db.Money)
        estimated_fy_19_20 = db.Column(db.Money)
        adopted_fy_20_21 = db.Column(db.Money)

        def __repr__(self):
            return '<Budget %r>' % (self.name)
    return Budget

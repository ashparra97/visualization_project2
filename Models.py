def create_classes(db):
    class Budget(db.Model):
        __tablename__ = 'budget'

        id = db.Column(db.Integer, primary_key=True)
        expenditures = db.Column(db.String(255))
        

        def __repr__(self):
            return '<Budget %r>' % (self.name)
    return Budget
from mongoengine import Document, StringField, IntField, ListField, DictField, DateTimeField, FloatField
import datetime

class Order(Document):
    meta = {'collection': 'orders'}
    customer_name = StringField(max_length=100, required=True)
    customer_email = StringField(max_length=100, required=True)
    customer_phone = StringField(max_length=20, required=True)
    customer_address = StringField(max_length=255, required=True)
    items = ListField(DictField(), required=True)
    total_amount = FloatField(required=True)
    status = StringField(default="Pending")
    created_at = DateTimeField(default=datetime.datetime.now)

    def __str__(self):
        return f"Order by {self.customer_name} - {self.total_amount}"

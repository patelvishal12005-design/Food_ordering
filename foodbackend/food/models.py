from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    image = models.CharField(max_length=200, default="/burger.jpg")

    def __str__(self):
        return self.name

class Order(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_email = models.CharField(max_length=100)
    customer_phone = models.CharField(max_length=20)
    customer_address = models.CharField(max_length=255)
    items = models.JSONField()
    total_amount = models.FloatField()
    status = models.CharField(max_length=50, default="Pending")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order by {self.customer_name} - {self.total_amount}"
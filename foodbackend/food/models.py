from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    image = models.CharField(max_length=200, default="/burger.jpg")

    def __str__(self):
        return self.name
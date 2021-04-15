from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=75)

    def __str__(self):
        return f"{self.title}"

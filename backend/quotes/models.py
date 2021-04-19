from django.db import models

class Quote(models.Model):
    text = models.TextField(max_length=600)

    def __str__(self):
        return f"{self.text}"
from django.db import models

class Resource(models.Model):
    resourceType = models.CharField(max_length=50)
    title = models.CharField(max_length=400)
    url = models.CharField(max_length=400)

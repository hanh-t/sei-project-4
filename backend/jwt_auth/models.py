from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField

class User(AbstractUser):
    fullName = models.CharField(max_length=50)
    email = models.CharField(max_length=50, unique=True)
    profileImage = models.CharField(max_length=300, blank=True)
    points = models.PositiveIntegerField(blank=True, null=True)
    wishlist = ArrayField(models.CharField(max_length=400, blank=True), default=list, null=True)
    
    
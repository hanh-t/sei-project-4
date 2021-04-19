from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    fullName = models.CharField(max_length=50)
    email = models.CharField(max_length=50, unique=True)
    profileImage = models.CharField(max_length=300, blank=True)
    points = models.PositiveIntegerField(blank=True, null=True)
    # wishlist = ArrayField(ArrayField(models.CharField(max_length=)))
    
    
from django.db import models

class Habit(models.Model):
    title = models.TextField(max_length=350)
    frequency = models.CharField(max_length=100)
    user = models.ForeignKey(
        "jwt_auth.User",
        related_name="habits",
        on_delete=models.CASCADE
    )
    # category = models.ForeignKey(
    #     "categories.Category",
    #     related_name="categorys",
    #     on_delete=models.PROTECT
    # )

    def __str__(self):
        return f"{self.title}"
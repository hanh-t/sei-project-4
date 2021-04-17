from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=75)
    # comment = models.ForeignKey(
    #     "comments.Comment",
    #     related_name="comments",
    #     on_delete=models.CASCADE
    # )

    def __str__(self):
        return f"{self.title}"

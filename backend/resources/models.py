from django.db import models

class Resource(models.Model):
    resourceType = models.CharField(max_length=50)
    title = models.CharField(max_length=400)
    url = models.CharField(max_length=400)
    price = models.PositiveIntegerField(blank=True, null=True)
    # category = models.ForeignKey(
    #     "categories.Category",
    #     related_name="comments",
    #     on_delete= models.CASCADE
    # )

    def __str__(self):
        return f"{self.title} - {self.resourceType} - {self.price} points"
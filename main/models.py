from django.db import models
# Create your models here.

class Data(models.Model):
    id = models.AutoField(primary_key=True)
    company = models.CharField(max_length=200)
    job = models.CharField(max_length=100)
    employed_year = models.CharField(max_length=20)
    pub_date = models.DateTimeField()
    body = models.TextField()
    image = models.ImageField(upload_to = "post/", blank=True, null=True)

    def __str__(self):
        return self.company
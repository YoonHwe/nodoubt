from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Data(models.Model):
    id = models.AutoField(primary_key=True)
    company = models.CharField(max_length=200)
    job = models.CharField(max_length=100)
    employed_year = models.CharField(max_length=20)
    pub_date = models.DateTimeField()
    body = models.TextField()
    image = models.ImageField(upload_to = "data/", blank=True, null=True)

    def __str__(self):
        return self.company

class Request(models.Model):
    EMPLOY_TYPE_CHOICES = {
        ('정규', '정규'),
        ('인턴', '인턴'),
        ('IPP', 'IPP')
    }
    id = models.AutoField(primary_key=True)
    employ_type = models.CharField(max_length=20, choices=EMPLOY_TYPE_CHOICES)
    job_type = models.CharField(max_length=30)
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    school_number = models.CharField(max_length=30)
    email = models.CharField(max_length=100)
    pub_date = models.DateTimeField()

    def __str__(self):
        return self.name

class Feedback(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    image = models.ImageField(upload_to = "feedback/", blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    def __str__(self):
        return self.title
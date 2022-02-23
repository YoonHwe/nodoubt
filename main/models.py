from pyexpat import model
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
    like_user_set = models.ManyToManyField(User, blank=True, related_name='likes_user_set',through='Like')

    def __str__(self):
        return self.company

    @property
    def like_count(self):
        return self.like_user_set.count()

class Request(models.Model):
    EMPLOY_TYPE_CHOICES = {
        ('정규', '정규'),
        ('인턴', '인턴')
    }
    id = models.AutoField(primary_key=True)
    employ_type = models.CharField(max_length=20, choices=EMPLOY_TYPE_CHOICES)
    company_name = models.CharField(max_length=30)
    school_major = models.CharField(max_length=30)
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    phone_num = models.CharField(max_length=100)
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

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Data, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together =(('user', 'post'))

class Board(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    # pub_date = models.DateTimeField()
    body = models.TextField()
    image = models.ImageField(upload_to = "board/", blank=True, null=True)
    board_like_user_set = models.ManyToManyField(User, blank=True, related_name='board_likes_user_set', through='Board_Like')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def board_like_count(self):
        return self.board_like_user_set.count()

    def __str__(self):
        return self.title

    def title_summary(self):
        if(len(self.title) > 20):
            return self.title[:20] + "..."
        else:
            return self.title

    def summary(self):
        return self.body[:10]

class Board_Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Board, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together =(('user', 'post'))

class Comment_board(models.Model):
    content = models.TextField()
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name="board_comments")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
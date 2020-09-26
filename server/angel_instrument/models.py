from django.db import models

class User(models.Model):
    user_id = models.CharField(max_length=20,  primary_key=True)
    user_name = models.CharField(max_length=20)
    email = models.EmailField(max_length=30)
    password = models.CharField(max_length=20)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'users'

class Music(models.Model):
    rank = models.IntegerField()
    title = models.TextField(max_length=256)
    artist = models.TextField(max_length=256)
    like = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['rank']

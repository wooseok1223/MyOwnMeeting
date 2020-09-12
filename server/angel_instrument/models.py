from django.db import models


class Music(models.Model):
    rank = models.IntegerField(null=False,unique=True)
    title = models.TextField(max_length=50)
    artist = models.TextField(max_length=20)
    like = models.IntegerField(null=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['rank']

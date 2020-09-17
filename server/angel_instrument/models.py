from django.db import models


class Music(models.Model):
    rank = models.IntegerField()
    title = models.TextField(max_length=256)
    artist = models.TextField(max_length=256)
    like = models.IntegerField()

    class Meta:
        ordering = ['rank']

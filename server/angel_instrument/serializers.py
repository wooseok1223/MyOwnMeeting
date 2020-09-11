from rest_framework import serializers
from datetime import datetime

class MusicTable(serializers.Serializer):
    rank = serializers.IntegerField()
    title = serializers.CharField(max_length=50)
    artist = serializers.CharField(max_length=20)
    like = serializers.IntegerField()
    created = serializers.DateTimeField()

class Comment(object):
    def __init__(self,rank,title,artist,like,created=None):
        self.rank = rank
        self.title = title
        self.artist = artist
        self.like = like
        self.created = created or datetime.now()

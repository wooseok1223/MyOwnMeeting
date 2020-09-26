from rest_framework import serializers
from .models import Music, User
from django.contrib.auth import authenticate

class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = ['rank', 'title', 'artist', "like", "created"]

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("user_id", "user_name", "email", "password", "created")


from mainContent.models import Snippet
from rest_framework import serializers

class SnippetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Snippet
        fields = ['id', 'src', 'title','head', 'content']
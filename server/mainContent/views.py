from rest_framework import viewsets
from mainContent.serializers import PersonSerializer
from mainContent.models import Person


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
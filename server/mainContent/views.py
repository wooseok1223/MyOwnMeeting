from rest_framework import viewsets
from server.mainContent.serializers import PersonSerializer
from server.mainContent.models import Person


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
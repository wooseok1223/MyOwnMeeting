from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('piano/music/', include('angel_instrument.urls'))
]
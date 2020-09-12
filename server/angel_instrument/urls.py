from django.urls import path
from angel_instrument import views

urlpatterns = [
    path('list/', views.snippet_list),
]

from django.urls import path
from angel_instrument import views

urlpatterns = [
    path('list/', views.music_list),
    path('graph/', views.showGraph),
    # path('auth/register/', views),
    path('auth/login/', views.login),
    # path('auth/user/', views)
]

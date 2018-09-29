from django.urls import path
from . import views
from django.conf.urls import url
from django.contrib import admin
from django.contrib.staticfiles.views import serve
from django.views.generic import RedirectView

urlpatterns = [
	#path('', views.random_thought, name='random_thought'),
	path('get_random_thought/', views.get_random_thought),
]
from django.urls import path
from . import views
from django.conf.urls import url
from django.contrib import admin
from django.contrib.staticfiles.views import serve
from django.views.generic import RedirectView

urlpatterns = [
	#path('', views.random_thought, name='random_thought'),
	path('random_thought/', views.random_thought),
	url(r'^$', serve,kwargs={'path': 'index.html'}),    
	url(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$',
		RedirectView.as_view(url='/static/%(path)s', permanent=False)),
]
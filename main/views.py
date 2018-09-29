# -*- coding: utf-8 -*-
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
#from django.shortcuts import render
from .models import Thought 
from .serializers import *  

@api_view()
def get_random_thought(request):
	#return render(request, 'main/random_thought.html', {})
	try:
		thoughts = Thought.objects.all()
		serializer = ThoughtSerializer(thoughts,context={'request': request} ,many=True)
		return Response(serializer.data)
	except:
		return Response("error retrieving thought")

@api_view(['POST'])
def post_thought(request):
	#return render(request, 'main/random_thought.html', {})
	try:
		thoughts = Thought.objects.all()
		serializer = ThoughtSerializer(thoughts,context={'request': request} ,many=True)
		return Response(serializer.data)
	except:
		return Response("error posting thought")
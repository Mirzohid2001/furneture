from django.shortcuts import render
from .models import Blog, Contact, Banner, Overdrawing,PriceOverdrawing
from .serializers import BlogSerializer, BannerSerializer, ContactSerializer, OverdrawingSerializer,PriceOverdrawingSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class BlogList(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BannerList(generics.ListCreateAPIView):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer

class BlogDetailView(APIView):
    def get(self, request, pk, format=None):
        try:
            blog = Blog.objects.get(pk=pk)
            serializer = BlogSerializer(blog)
            return Response(serializer.data)
        except Blog.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class ContactList(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class OverdrawingList(generics.ListCreateAPIView):
    queryset = Overdrawing.objects.all()
    serializer_class = OverdrawingSerializer

class PriceOverdrawingList(generics.ListCreateAPIView):
    queryset = PriceOverdrawing.objects.all()
    serializer_class = PriceOverdrawingSerializer



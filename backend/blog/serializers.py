from rest_framework import serializers
from .models import Blog, Contact, Banner, Overdrawing,PriceOverdrawing

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('id','title', 'about', 'price', 'image')

class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = ('id','img')

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id','name', 'email', 'message', 'phone')

class OverdrawingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Overdrawing
        fields = ('id','img', 'text', 'material')

class PriceOverdrawingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceOverdrawing
        fields = ('id','name', 'price')
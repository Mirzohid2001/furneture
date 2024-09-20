from django.db import models

# Create your models here.
class Banner(models.Model):
    img = models.ImageField(upload_to='banner/',null=True,blank=True)

class Blog(models.Model):
    title = models.CharField(max_length=200)
    about = models.TextField()
    price = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/',blank=True,null=True)

    def __str__(self):
        return self.title

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Overdrawing(models.Model):
    img = models.ImageField(upload_to='overdrawing/',null=True,blank=True)
    text = models.TextField()
    material = models.CharField(max_length=100)

    def __str__(self):
        return self.text

class PriceOverdrawing(models.Model):
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)

    def __str__(self):
        return self.name

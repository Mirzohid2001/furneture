from django.contrib import admin
from .models import Blog, Contact, Banner,Overdrawing,PriceOverdrawing
# Register your models here.

admin.site.register(Blog)
admin.site.register(Contact)
admin.site.register(Banner)
admin.site.register(Overdrawing)
admin.site.register(PriceOverdrawing)

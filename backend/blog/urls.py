from django.urls import path
from .views import BlogList, BannerList, ContactList,BlogDetailView,OverdrawingList,PriceOverdrawingList

urlpatterns = [
    path('blog/', BlogList.as_view(),name='blog'),
    path('banner/', BannerList.as_view(),name='banner'),
    path('contact/', ContactList.as_view(),name='contact'),
    path('blogjon/<int:pk>', BlogDetailView.as_view(),name='blogjon'),
    path('overdrawing/', OverdrawingList.as_view(),name='overdrawing'),
    path('price/', PriceOverdrawingList.as_view(),name='price')


]
from re import search
from django.urls import path
from .views import index,signupPage,login_page,Search
urlpatterns = [

    path('',index),
    path('customer_registration',signupPage),
    path('loginPage',login_page),
    path('search',Search),


]

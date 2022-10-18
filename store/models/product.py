from os import name, stat
from unittest.util import _MAX_LENGTH

from django.db import models
from .category import Category

# Product saving database
class Product(models.Model):
    name = models.CharField(max_length=50)
    price = models.IntegerField(default=0)
    description = models.CharField(max_length=50)
    categories =  models.ForeignKey(Category,on_delete=models.CASCADE,default=0)
    image = models.ImageField(upload_to='products/')




    @staticmethod

    def get_all_products():
        return Product.objects.all()


    @staticmethod


    def get_products_by_id(category_id):
        if category_id:
             return Product.objects.filter(categories=category_id)

        else:
            
            return Product.objects.all()

       















    

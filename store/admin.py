from django.contrib import admin

# Register your models here.
from .models.customers import Customer
from .models.product import Product
from .models.category import Category

admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Category)

from asyncio import constants
from copyreg import constructor
from ctypes.wintypes import PLARGE_INTEGER
from http.client import ResponseNotReady
from itertools import product
from pickletools import read_uint1
from statistics import quantiles
from urllib import request
from urllib.robotparser import RequestRate
from wsgiref.simple_server import WSGIRequestHandler
from xml.dom.minidom import Document


from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password,check_password
from .models.product import Product
from .models.customers import Customer
from .models.category import Category



# Create your views here.

def index(request):

    if request.method == "POST":
        # get product id 
        prd_ID = request.POST.get("productID")
        print("ID :", prd_ID)

        cart =  request.session.get('cart')

        #
        # if cart:
        #     quantity = cart.get(prd_ID)
        #     if quantity:
        #         cart[quantity] = quantity+1
        #     else:
        #         cart[quantity] = 1
        # else:
        #
        #     cart[prd_ID] = 1
        #
        # request.session['cart'] = cart
        #
        # print("valued addded: ", request.session['cart'])




        ctr =  Category.get_categories()
        category_id = request.GET.get('category')
        if category_id:
            prd = Product.get_products_by_id(category_id)
        else:
            prd = Product.get_all_products()
            return render(request, "index.html", {"Products": prd,"categories":ctr})



    else:
        
        ctr =  Category.get_categories()
        category_id = request.GET.get('category')
        if category_id:
            prd = Product.get_products_by_id(category_id)
        else:

            prd = Product.get_all_products()

        
    
    return render(request, "index.html", {"Products": prd,"categories":ctr})



    


def signupPage(request):
    if request.method == 'GET':
        return render(request, "signup.html" )


    else:

        if request.method == 'POST':
            u_name = request.POST.get("u1")
            u_phone = request.POST.get("up")
            u_email = request.POST.get("ue")
            u_password = request.POST.get("upass")
            u_RePassword = request.POST.get("urp")

            customer_obj = Customer(name=u_name, phone=u_phone, email=u_email, password=u_password,repeat_password=u_RePassword)
            error_message = None

            if not(u_name):
                error_message = "Please!, enter user name"
            elif not(u_phone):
                error_message = "Please, enter your phone"

            elif not(u_email):
                error_message = "Please, enter your email"
            elif not(u_password):
                error_message = "Please, enter your password"
            elif not (u_RePassword):
                error_message = "Please, enter your re-password"


            elif customer_obj.isExist():
                error_message = "Email is already registred"

            if not (error_message):
                customer_obj.isExist()
                customer_obj.password = make_password(u_password)
                customer_obj.repeat_password = make_password(u_RePassword)
                customer_obj.save()
                email1 = u_email


                return render(request,'login.html',{"loginEmail":email1})

            else:

                values = {
                         'username':u_name,
                         'userphone':u_phone,
                         'useremail':u_email,

                          }

        



        return render(request, "signup.html", {'error': error_message, 'value': values})



def login_page(request):

    if request.method == "GET":
        return render(request, "login.html")


    else:

        if request.method == 'POST':

            loginEmail = request.POST.get('login_email')
            loginPassword = request.POST.get('login_pass')
            error_message = None

            if not (loginEmail):
                error_message = "Required email"
            elif not (loginPassword):
                error_message = "Required Password"

            customerlogin = Customer.compare_email(loginEmail)

            if not(customerlogin):
                error_message = "Sorry ! be Registered"

            else:
                return redirect('127.0.0.1:8000')



        return render(request,"login.html",{'error':error_message})



def Search(request):

    return render(request,'search.html')
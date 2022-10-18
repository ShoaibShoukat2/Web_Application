import email

from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=50)
    phone = models.IntegerField(default=0)
    email = models.EmailField()
    password = models.CharField(max_length=50,default=0)
    repeat_password = models.CharField(max_length=50,default=0)





    def isExist(self):
        if Customer.objects.filter(email = self.email):
            return True
        return False




    @staticmethod
    def compare_email(loginEmail):
        try:
            return Customer.objects.get(email=loginEmail)

        except:
            return False










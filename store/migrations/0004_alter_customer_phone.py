# Generated by Django 3.2.9 on 2022-10-04 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_customer_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='phone',
            field=models.IntegerField(default=0),
        ),
    ]
# Generated by Django 3.2.9 on 2022-10-08 17:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0006_product_categories'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='categories',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.category'),
        ),
    ]

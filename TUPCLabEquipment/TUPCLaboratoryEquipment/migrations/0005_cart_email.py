# Generated by Django 5.1.1 on 2024-11-18 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TUPCLaboratoryEquipment', '0004_otp'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True, unique=True),
        ),
    ]

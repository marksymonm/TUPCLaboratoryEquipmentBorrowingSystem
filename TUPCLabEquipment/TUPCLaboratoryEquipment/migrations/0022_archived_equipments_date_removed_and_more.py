# Generated by Django 5.1.1 on 2025-01-07 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TUPCLaboratoryEquipment', '0021_remove_studentaccounts_is_active_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='archived_equipments',
            name='date_removed',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='inventoryitem',
            name='added_quantity',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='inventoryitem',
            name='date_added',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='inventoryitem',
            name='initial_quantity',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='inventoryitem',
            name='last_updated_date',
            field=models.DateField(auto_now=True, null=True),
        ),
    ]

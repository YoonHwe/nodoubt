# Generated by Django 3.2.5 on 2021-07-25 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_request'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='request',
            name='private',
        ),
        migrations.AlterField(
            model_name='request',
            name='employ_type',
            field=models.CharField(choices=[('IPP', 'IPP'), ('정규', '정규'), ('인턴', '인턴')], max_length=20),
        ),
    ]
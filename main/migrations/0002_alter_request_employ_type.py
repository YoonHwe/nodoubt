# Generated by Django 3.2.5 on 2021-08-23 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='employ_type',
            field=models.CharField(choices=[('인턴', '인턴'), ('정규', '정규'), ('IPP', 'IPP')], max_length=20),
        ),
    ]

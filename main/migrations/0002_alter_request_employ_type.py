# Generated by Django 3.2.5 on 2022-02-23 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='employ_type',
            field=models.CharField(choices=[('정규', '정규'), ('인턴', '인턴')], max_length=20),
        ),
    ]

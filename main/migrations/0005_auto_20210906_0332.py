# Generated by Django 3.2.5 on 2021-09-06 03:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0004_alter_request_employ_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='employ_type',
            field=models.CharField(choices=[('정규', '정규'), ('IPP', 'IPP'), ('인턴', '인턴')], max_length=20),
        ),
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.data')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'post')},
            },
        ),
        migrations.AddField(
            model_name='data',
            name='like_user_set',
            field=models.ManyToManyField(blank=True, related_name='likes_user_set', through='main.Like', to=settings.AUTH_USER_MODEL),
        ),
    ]

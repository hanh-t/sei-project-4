# Generated by Django 3.2 on 2021-04-15 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='points',
            field=models.PositiveIntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='profileImage',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]

# Generated by Django 4.0.4 on 2022-05-22 14:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vacation',
            name='Id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.employee'),
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-15 15:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AnalyzeTweet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('screen_name', models.CharField(max_length=40)),
                ('content', models.CharField(max_length=140)),
                ('sentiment', models.CharField(max_length=10)),
            ],
        ),
    ]

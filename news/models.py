from django.db import models
from django.contrib.auth.models import User
from django.db.models import Count

class Article(models.Model):
    article_title = models.CharField(max_length=200)
    user = models.ForeignKey(User)
    article_addeddate = models.DateTimeField(auto_now_add=True)
    article_url = models.URLField("URL", max_length=250, blank=True)
    def __unicode__(self):
        return self.article_title

class Vote(models.Model):
    voter = models.ForeignKey(User)
    article = models.ForeignKey(Article)

from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify


class Item(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    slug = models.SlugField(max_length=255)

    class Meta:
        ordering = ['-pub_date']

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

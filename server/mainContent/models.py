from django.db import models
from django.conf import settings


class Snippet(models.Model):
    # src = models.TextField()
    title = models.TextField()
    # head = models.TextField()
    # content = models.TextField()
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        pass
        # ordering = ['created_at']

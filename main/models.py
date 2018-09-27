from django.db import models
from django.utils import timezone


class Thought(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    content = models.TextField()
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.content
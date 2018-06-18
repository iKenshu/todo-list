from django.test import TestCase
from django.contrib.auth.models import User
from django.utils.text import slugify

from .models import Item


class ItemModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        user = User.objects.create(username='user', first_name='user', last_name='test')
        Item.objects.create(
            user=user,
            name='ToDo name',
            description='ToDo Test',
            slug=slugify('ToDo name')
        )

    def test_todo_label_name(self):
        item = Item.objects.get(id=1)
        name_label = item._meta.get_field('name').verbose_name
        self.assertEquals(name_label, 'name')

    def test_todo_name_max_length(self):
        item = Item.objects.get(id=1)
        max_length = item._meta.get_field('name').max_length
        self.assertEquals(max_length, 255)

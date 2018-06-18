from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseForbidden

from django.views.generic import (ListView,
                                  DetailView,
                                  CreateView,
                                  UpdateView,
                                  DeleteView,
                                  TemplateView,)

from django.views.generic.edit import FormMixin
from django.template.loader import render_to_string

from .forms import ItemForm
from .models import Item
from .mixins import AjaxableResponseMixin


class ItemListViewReact(TemplateView):
    template_name = 'items/reactjs.html'

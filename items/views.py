from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseForbidden
from django.views.generic import (ListView,
                                  DetailView,
                                  CreateView,
                                  UpdateView,
                                  DeleteView,)
from django.views.generic.edit import FormMixin
from django.template.loader import render_to_string

from .forms import ItemForm
from .models import Item
from .mixins import AjaxableResponseMixin


class ItemListView(AjaxableResponseMixin, FormMixin, ListView):
    """ A list of item with a form """

    model = Item
    form_class = ItemForm
    success_url = '/'
    context_object_name = 'items'

    def get_context_data(self, **kwargs):
        context = super(ItemListView, self).get_context_data(**kwargs)
        context['form'] = self.get_form()
        return context

    def form_valid(self, form):
        print(form.cleaned_data)
        form.save()
        return super(ItemListView, self).form_valid(form)

    def post(self, request, *args, **kwargs):
        form = self.get_form()
        if form.is_valid() and request.is_ajax():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)


class ItemDetailView(DetailView):
    model = Item
    slug_field = 'name'


class ItemCreateView(CreateView):
    model = Item
    success_url = '/'
    form_class = ItemForm


class ItemDeleteView(DeleteView):
    model = Item
    success_url = '/'

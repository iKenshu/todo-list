from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseForbidden
from django.views.generic import ListView, DetailView, CreateView
from django.views.generic.edit import FormMixin
from django.template.loader import render_to_string

from .forms import ItemForm
from .models import Item


class ItemListView(FormMixin, ListView):
    """ A list of item with a modal form """

    model = Item
    form_class = ItemForm
    context_object_name = 'items'

    def get_success_url(self):
        return reverse('items:list')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = self.get_form()
        return context

    def post(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return HttpResponseForbidden()
        form = self.get_form()
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)

    def form_valid(self, form):
        form.save()
        return super(ItemListView, self).form_valid(form)


class ItemDetailView(DetailView):
    model = Item
    slug_field = 'name'

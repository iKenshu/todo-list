from django.views.generic import TemplateView


class ItemListViewReact(TemplateView):
    template_name = 'items/reactjs.html'

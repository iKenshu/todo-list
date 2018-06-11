from django.http import JsonResponse


class AjaxableResponseMixin:
    """
    Mixin to add AJAX support to a form.
    """

    def form_invalid(self, form):
        response = super(AjaxableResponseMixin, self).form_invalid(form)
        if self.request.is_ajax():
            print(form.cleaned_data)
            return JsonResponse(form.errors, status=400)
        else:
            return response

    def form_valid(self, form):
        response = super(AjaxableResponseMixin, self).form_valid(form)
        if self.request.is_ajax():
            name = form.cleaned_data.get('name')
            description = form.cleaned_data.get('description')
            print('hola mixin')
            data = {
                'name': name,
                'description': description,
            }
            return JsonResponse(data)
        else:
            return response

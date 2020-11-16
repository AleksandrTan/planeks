from main.mainview import BaseAdminView
from django.views.generic import TemplateView


# Create your views here.


class MainView(BaseAdminView, TemplateView):
  """
  Class MainView - main page
  """
  template_name = 'index.html'

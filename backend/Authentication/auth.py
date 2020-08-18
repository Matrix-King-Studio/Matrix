from rest_framework.authentication import TokenAuthentication as _TokenAuthentication
from django.contrib.auth import login


class TokenAuthentication(_TokenAuthentication):
    def authenticate(self, request):
        auth = super().authenticate(request)
        session = getattr(request, 'session')
        if auth is not None and session.session_key is None:
            login(request, auth[0], 'django.contrib.auth.backends.ModelBackend')
        return auth

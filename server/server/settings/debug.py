from .base import *  
  
config_secret_debug = json.loads(open(CONFIG_SECRET_DEBUG_FILE).read())  
  
DEBUG = True  
ALLOWED_HOSTS = config_secret_debug['django']['allowed_hosts']  
  
WSGI_APPLICATION = 'server.wsgi.debug.application'
  
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'music',
        'USER': 'wooseok',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

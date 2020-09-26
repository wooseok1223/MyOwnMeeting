from .base import *

config_secret_deploy = json.loads(open(CONFIG_SECRET_DEPLOY_FILE).read())

DEBUG = False
ALLOWED_HOSTS = config_secret_deploy['django']['allowed_hosts']

WSGI_APPLICATION = '[PROJECT_NAME].wsgi.deploy.application'

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'postgres',
#         'USER': config_secret_deploy['django']['databases']['user'],
#         'PASSWORD': config_secret_deploy['django']['databases']['password'],
#         'HOST': config_secret_deploy['django']['databases']['host'],
#         'PORT': '5432',
#     }
# }

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
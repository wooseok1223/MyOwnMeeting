import os  
import json  
  
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  
ROOT_DIR = os.path.dirname(BASE_DIR)  
  
# 위에서 작성한 설정 파일들을 가져온다.  
CONFIG_SECRET_DIR = os.path.join(ROOT_DIR, 'server/config_secret')
CONFIG_SECRET_COMMON_FILE = os.path.join(CONFIG_SECRET_DIR, 'settings_common.json')  
CONFIG_SECRET_DEBUG_FILE = os.path.join(CONFIG_SECRET_DIR, 'settings_debug.json')  
CONFIG_SECRET_DEPLOY_FILE = os.path.join(CONFIG_SECRET_DIR, 'settings_deploy.json')  
  
config_secret_common = json.loads(open(CONFIG_SECRET_COMMON_FILE).read())  
  
# 위에서 설정한 파일에서 가져온다.  
SECRET_KEY = config_secret_common["django"]["secret_key"]  
  
INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'lib',
    'angel_instrument'
)
  
MIDDLEWARE_CLASSES = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
  
ROOT_URLCONF = 'server.urls'
  
TEMPLATES = [  
    {  
        'BACKEND': 'django.template.backends.django.DjangoTemplates',  
        'DIRS': [os.path.join(BASE_DIR, 'templates')]  
        ,  
        'APP_DIRS': True,  
        'OPTIONS': {  
            'context_processors': [  
                'django.template.context_processors.debug',  
                'django.template.context_processors.request',  
                'django.contrib.auth.context_processors.auth',  
                'django.contrib.messages.context_processors.messages',  
            ],  
        },  
    },  
]  
  
AUTH_PASSWORD_VALIDATORS = [  
    { 'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator', },  
    { 'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator', },  
    { 'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator', },  
    { 'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator', },  
]

SILENCED_SYSTEM_CHECKS = [
    'admin.E408',
    'admin.E409',
    'admin.E410'
]
  
LANGUAGE_CODE = 'en-us'  
  
TIME_ZONE = 'Asia/Seoul'  
USE_I18N = True  
USE_L10N = True  
USE_TZ = True  
  
# 나중에 서버에서 실행할 collectstatic을 위해 필요한 설정이다.  
STATIC_URL = '/static/'  
STATIC_DIR = os.path.join(BASE_DIR, 'static')  
STATICFILES_DIRS = [  
    STATIC_DIR,  
]  
STATIC_ROOT = os.path.join(ROOT_DIR, '.static_root')  
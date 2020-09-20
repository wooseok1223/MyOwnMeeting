from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from angel_instrument.models import Music
from angel_instrument.serializers import MusicSerializer
from lib.DataStruct import MelonData
import json
import time

@api_view(['GET','POST'])
def snippet_list(request):
    if request.method == 'GET':
        music = Music.objects.all()
        serializer = MusicSerializer(music, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        path = 'https://www.melon.com/search/song/index.htm?q=%ED%94%BC%EC%95%84%EB%85%B8%EA%B3%A1&section=song&searchGnbYn=Y&kkoSpl=Y&kkoDpType=&ipath=srch_form'
        music = MelonData()
        music.setUrl(path)
        music.musicSearch()
        MelonList = music.getData()

        serializer = {}

        cnt = 0

        post_instance = Music.objects.all()
        post_instance.delete()

        for data in MelonList:
            data['created'] = time.strftime('%Y-%m-%d %H:%M:%S')
            serializer = MusicSerializer(data = data)
            cnt += 1
            if serializer.is_valid():
                serializer.save()

        return Response(data=serializer.data)

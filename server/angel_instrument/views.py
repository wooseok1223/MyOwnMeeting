from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from angel_instrument.models import Music
from angel_instrument.serializers import MusicSerializer
from lib.DataStruct import MelonData

@api_view(['GET','POST'])
def snippet_list(request):
    if request.method == 'GET':
        music = Music.objects.all()
        print(music)
        serializer = MusicSerializer(music, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        path = 'https://www.melon.com/search/song/index.htm?q=%ED%94%BC%EC%95%84%EB%85%B8%EA%B3%A1&section=song&searchGnbYn=Y&kkoSpl=Y&kkoDpType=&ipath=srch_form'
        music = MelonData()
        music.setUrl(path)
        music.musicSearch()
        MelonList = music.getData()
        print(MelonList)
        serializer = MusicSerializer(data=MelonList)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

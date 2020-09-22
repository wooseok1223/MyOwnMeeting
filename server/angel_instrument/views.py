from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from angel_instrument.models import Music
from angel_instrument.serializers import MusicSerializer
from lib.DataStruct import MelonData
import pandas as pd
import matplotlib.pyplot as plt
import time
from pathlib import Path

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

        post_instance = Music.objects.all()
        post_instance.delete()

        for data in MelonList:
            data['created'] = time.strftime('%Y-%m-%d %H:%M:%S')
            serializer = MusicSerializer(data = data)
            if serializer.is_valid():
                serializer.save()

        return Response(data=serializer.data)

@api_view(['POST'])
def showGraph(request):
    if request.method == 'POST':
        df = pd.DataFrame(list(Music.objects.all().values()))
        plt.bar(df['rank'], df.like)
        plt.xlabel('like')
        plt.ylabel('rank')
        my_file = Path("/Users/wooseok/MyOwnMeeting/client/src/img/test.png")
        print(my_file.is_file())
        if my_file.is_file():
            pass
        else:
            plt.savefig('/Users/wooseok/MyOwnMeeting/client/src/img/test.png')

        return Response(data={})




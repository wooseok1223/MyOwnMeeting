from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from angel_instrument.models import Music, User
from lib.DataStruct import MelonData
import pandas as pd
import matplotlib.pyplot as plt
import time
from angel_instrument.serializers import (
    CreateUserSerializer,
    MusicSerializer
)

@api_view(['GET','POST'])
def music_list(request):
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


@api_view(['GET','POST'])
def login(request):
    if request.method == 'GET':
        param = {
            "user_id" : request.GET.get('name', None),
            "password": request.GET.get('name', None)
        }
        if User.objects.filter(user_id=param['user_id'], password=param['password']).exists() == True:
            return Response({ "message": "로그인에 성공하셨습니다."})
        else:
            return Response({"message": "아이디나 비밀번호가 일치하지 않습니다."})

    elif request.method == 'POST':
        data = request.data

        if User.objects.filter(user_id=data['user_id']).exists() == True:
            return Response({"message": "이미 존재하는 아이디입니다."})

        else:
            User.objects.create(user_id=data['user_id'], user_name=data['user_name'], email=data['email'], password=data['password'])
            return Response({"message": "회원으로 가입되셨습니다."})


@api_view(['POST'])
def showGraph(request):
    if request.method == 'POST':
        df = pd.DataFrame(list(Music.objects.all().values()))
        plt.bar(df['rank'], df.like)
        plt.xlabel('like')
        plt.ylabel('rank')
        plt.savefig('/Users/wooseok/MyOwnMeeting/client/src/img/' + 'Graph.png')

        return Response(data={})




from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from angel_instrument.models import post
from angel_instrument.serializers import MusicTable,Comment
from lib.DataStruct import MelonData
from rest_framework.parsers import JSONParser

@api_view(['GET'])
def snippet_list(request):
    """
    코드 조각을 모두 보여주거나 새 코드 조각을 만듭니다.
    """
    if request.method == 'GET':
        snippets = post.objects.all()
        print(snippets)
        comment = Comment(rank=snippets.get('rank'), title=snippets.get('title'), artist=snippets.get('artist'), like=snippets.get('like'))
        serializer = MusicTable(comment)
        return Response(serializer.data)

@api_view(['POST'])
def snippet_list_post(request):
    if request.method == 'POST':
        path = 'https://www.melon.com/search/song/index.htm?q=%ED%94%BC%EC%95%84%EB%85%B8%EA%B3%A1&section=song&searchGnbYn=Y&kkoSpl=Y&kkoDpType=&ipath=srch_form'
        music = MelonData()
        music.setUrl(path)
        music.musicSearch()
        MelonList = music.getData()
        # for data in MelonList:
        #     print(data)
        #     comment = Comment(rank=data.get('rank'), title=data.get('title'), artist=data.get('artist'), like=data.get('like'))
        #     serializer = MusicTable(comment)
        serializer = MusicTable(data=MelonList)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
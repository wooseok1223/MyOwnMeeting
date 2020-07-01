"""
    Test_Sample1
    people1 = FoodData()
    people1.setUrl('https://ko.wiktionary.org/wiki/분류:한국어_음식')
    people1.foodSearch()
    FoodList = people1.getData()
    print(FoodList)
"""
class FoodData:
    def setUrl(self, url):
        self.url = url

    def getData(self):
        return self.totalResult

    def foodSearch(self):
        chrome_path = "chromedriver" #자신의 크롬드라이브의 경로를 지정

        base_url = self.url #접속하고자하는 url'

        options = webdriver.ChromeOptions()

        options.add_argument('--headless')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        driver = webdriver.Chrome(chrome_path, options=options)
        driver.get(base_url)

        soup = BeautifulSoup(driver.page_source, 'html.parser')
        parsor_result = soup.find_all('a')
        result = []
        for data in parsor_result:
            title = data.get('title')
            if data.get('title'):
                result.append(title)

        self.totalResult = result[1 : 201]

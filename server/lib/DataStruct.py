from selenium import webdriver
from bs4 import BeautifulSoup

class MelonData:
    def setUrl(self, url):
        self.url = url

    def getData(self):
        return self.totalResult

    def musicSearch(self):
        base_url = self.url  # 접속하고자하는 url'

        # options = webdriver.ChromeOptions()
        #
        # options.add_argument('--headless')
        # options.add_argument('--no-sandbox')
        # options.add_argument('--disable-dev-shm-usage')
        # driver = webdriver.Chrome('chromedriver', options=options)
        driver = webdriver.Chrome('chromedriver')

        driver.get(base_url)

        result = []

        soup = BeautifulSoup(driver.page_source, 'html.parser')

        title_list = soup.find_all('a', class_="fc_gray")
        artist_list = soup.find_all('div', class_="wrap wrapArtistName")
        like_list = soup.find_all('button', class_="btn_icon like")

        cnt = 1
        for title_data, artist_data, like_data in zip(title_list, artist_list, like_list):
            data_set = {}
            data_set['rank'] = cnt
            data_set['title'] = title_data.string
            if artist_data.find('span', class_='checkEllipsisSongdefaultList').string:
                artist = artist_data.find('span', class_='checkEllipsisSongdefaultList').string
                data_set['artist'] = artist
            else:
                artist = artist_data.find('a', class_='fc_mgray').string
                data_set['artist'] = artist
            data_set['like'] = int(like_data.select_one('.cnt').get_text().replace("\n총건수\n", "").replace(',', ''))
            result.append(data_set)
            cnt += 1

        self.totalResult = result
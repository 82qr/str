# 405 Paths is will not allow GET methods so we need to use POST for it.

import requests

header = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
}

r = requests.post("https://api.nigger.boo/user/constant?o=1104785840426733689&s=781161985840381992",headers=header)


print(r.headers)


import os, sys
import base64
import urlparse

sys.path.append('proxy2')
from proxy2 import *

class DnMitmHandler(ProxyRequestHandler):
    def response_handler(self, req, req_body, res, res_body):
        url = urlparse.urlparse(req.path)
        url_domain = url.netloc
        url_path = url.path

        if url_domain and url_domain.endswith('dnvod.tv'):
            # ads
            one_px_gif_data = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
            if url_path and url_path.startswith('/upload/video'):
                if os.path.splitext(url_path)[-1] in ('.jpg', '.gif'):
                    res_body = base64.b64decode(one_px_gif_data)

            # count down
            if url_path and url_path.startswith('/js/2016/playerselection-'):
                with open('dn_replace.js', 'r') as f:
                    res_body = f.read()

            return res_body

    def print_info(self, req, req_body, res, res_body):
        return

if __name__ == '__main__':
    sys.argv[0] += ' 8899'
    sys.argv.append('8899')
    test(HandlerClass=DnMitmHandler)

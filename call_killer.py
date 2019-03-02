import os, sys
import base64
import re

import mitmproxy.http

re_inject_js_script = re.compile(r'8\..+\.js$', re.IGNORECASE)

class DNAdKiller:

    def response(self, flow: mitmproxy.http.HTTPFlow):
        """
            The full HTTP response has been read.
        """
        if flow.request.host.endswith('dnvod.tv'):
            one_px_gif_data = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
            if flow.request.path.startswith('/upload/video'):
                if os.path.splitext(flow.request.path)[-1] in ('.jpg', '.gif'):
                    flow.response.set_content(base64.b64decode(one_px_gif_data))
                    
            if re_inject_js_script.search(flow.request.path):
                with open('js/8.f56b7792ce563bfe9690.de.js', 'r') as f:
                    # print(flow.response.get_text())
                    flow.response.set_text(f.read())

addons = [
    DNAdKiller()
]
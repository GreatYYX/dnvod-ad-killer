import os, sys
import base64

import mitmproxy.http


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

            if flow.request.path.endswith('1.ed0cb8b173b9bfffa25f.chunk.js'):
                with open('js/1.ed0cb8b173b9bfffa25f.chunk.de.js', 'r') as f:
                    # print(flow.response.get_text())
                    flow.response.set_text(f.read())

addons = [
    DNAdKiller()
]
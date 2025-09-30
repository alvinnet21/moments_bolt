import http.server, socketserver, webbrowser

PORT = 5500
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    url = f"http://localhost:{PORT}"
    print(f"Serving at {url}")
    webbrowser.open(url)
    httpd.serve_forever()

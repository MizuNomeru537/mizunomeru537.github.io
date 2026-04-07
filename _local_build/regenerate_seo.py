import json
    from pathlib import Path
    ROOT = Path(__file__).resolve().parents[1]
    data = json.loads((ROOT / '_local_build' / 'seo-catalog.json').read_text(encoding='utf-8'))
    lastmod = data['lastmod']
    tools = data['tools']
    urls = [
        'https://mizunomeru537.github.io/',
        'https://mizunomeru537.github.io/tools/',
        'https://mizunomeru537.github.io/about.html',
        'https://mizunomeru537.github.io/contact.html',
        'https://mizunomeru537.github.io/privacy.html',
        'https://mizunomeru537.github.io/roadmap.html',
        'https://mizunomeru537.github.io/changelog.html',
        'https://mizunomeru537.github.io/site-map.html',
    ] + [f"https://mizunomeru537.github.io/tools/{t['slug']}/" for t in tools]
    xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        xml.append('  <url>')
        xml.append(f'    <loc>{u}</loc>')
        xml.append(f'    <lastmod>{lastmod}</lastmod>')
        xml.append('  </url>')
    xml.append('</urlset>')
    (ROOT / 'sitemap.xml').write_text('
'.join(xml), encoding='utf-8')
    print('Updated sitemap.xml')

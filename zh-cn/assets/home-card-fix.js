(function(){
  const OPEN = {
    en:'Open →', ja:'開く →', 'zh-TW':'開啟 →', 'zh-CN':'打开 →', fr:'Ouvrir →', de:'Öffnen →', ru:'Открыть →', 'es-419':'Abrir →', es:'Abrir →', id:'Buka →', ar:'فتح →', ko:'열기 →'
  };
  const LOCAL = {
    exchange_title:{en:'Exchange Calculator', ja:'為替計算ツール', 'zh-TW':'匯率計算器', 'zh-CN':'汇率计算器', fr:'Calculateur de change', de:'Wechselkursrechner', ru:'Калькулятор обмена валют', 'es-419':'Calculadora de cambio', es:'Calculadora de cambio', id:'Kalkulator kurs', ar:'حاسبة سعر الصرف', ko:'환율 계산기'},
    exchange_desc:{en:'Convert currencies, estimate fees, and check recent trends in one place.', ja:'通貨換算、手数料見積もり、最近の推移確認をまとめて行えます。', 'zh-TW':'可同時計算匯率、估算手續費並查看近期走勢。', 'zh-CN':'可同时计算汇率、估算手续费并查看近期走势。', fr:'Convertissez des devises, estimez les frais et consultez les tendances récentes.', de:'Währungen umrechnen, Gebühren schätzen und jüngste Trends prüfen.', ru:'Конвертируйте валюты, оценивайте комиссии и смотрите недавнюю динамику.', 'es-419':'Convierte monedas, estima comisiones y revisa tendencias recientes.', es:'Convierte monedas, estima comisiones y revisa tendencias recientes.', id:'Konversi mata uang, perkirakan biaya, dan lihat tren terbaru.', ar:'حوّل العملات وقدّر الرسوم واطّلع على الاتجاهات الحديثة.', ko:'주요 통화 변환, 수수료 추정, 최근 추이 확인까지 한 번에 처리합니다.'},
    date_title:{en:'Date Calculator', ja:'日付計算ツール', 'zh-TW':'日期計算器', 'zh-CN':'日期计算器', fr:'Calculateur de dates', de:'Datumsrechner', ru:'Калькулятор дат', 'es-419':'Calculadora de fechas', es:'Calculadora de fechas', id:'Kalkulator tanggal', ar:'حاسبة التواريخ', ko:'날짜 계산기'},
    date_desc:{en:'Count date differences, D-day, and add or subtract days in one place.', ja:'日付差・D-day・日数の加減算をまとめて確認できます。', 'zh-TW':'可計算日期差、D-day 與日期加減。', 'zh-CN':'可计算日期差、D-day 与日期加减。', fr:'Calculez les écarts de dates, le D-day et les ajouts ou retraits de jours.', de:'Datumsabstände, D-Day und Tage addieren oder subtrahieren – alles an einem Ort.', ru:'Считайте разницу дат, D-day и прибавляйте или вычитайте дни.', 'es-419':'Calcula diferencias entre fechas, D-day y suma o resta días.', es:'Calcula diferencias entre fechas, D-day y suma o resta días.', id:'Hitung selisih tanggal, D-day, serta tambah atau kurangi hari.', ar:'احسب الفرق بين التواريخ وD-day وأضف أو اطرح الأيام.', ko:'날짜 차이, 디데이, 날짜 더하기·빼기를 한 번에 처리합니다.'},
    percent_title:{en:'Percentage Calculator', ja:'割合計算ツール', 'zh-TW':'百分比計算器', 'zh-CN':'百分比计算器', fr:'Calculateur de pourcentage', de:'Prozentrechner', ru:'Калькулятор процентов', 'es-419':'Calculadora de porcentajes', es:'Calculadora de porcentajes', id:'Kalkulator persentase', ar:'حاسبة النسبة المئوية', ko:'퍼센트 계산기'},
    percent_desc:{en:'Find percent of a value, ratio between numbers, and increase or decrease amounts quickly.', ja:'ある値の何％か、割合、増減計算をすばやく行えます。', 'zh-TW':'快速計算百分比、比例與增減後的金額。', 'zh-CN':'快速计算百分比、比例与增减后的数值。', fr:'Calculez rapidement un pourcentage, un ratio ou une hausse/baisse.', de:'Berechne Prozentwerte, Verhältnisse sowie Zu- und Abnahmen schnell.', ru:'Быстро считайте процент от числа, соотношение и увеличение или уменьшение.', 'es-419':'Calcula rápido porcentajes, proporciones y aumentos o disminuciones.', es:'Calcula rápido porcentajes, proporciones y aumentos o disminuciones.', id:'Hitung persentase, rasio, serta kenaikan atau penurunan dengan cepat.', ar:'احسب النسبة المئوية والنسبة بين رقمين والزيادة أو النقصان بسرعة.', ko:'값의 몇 퍼센트인지, 비율, 증감 계산을 빠르게 처리합니다.'},
    jwt_title:{en:'JWT Decoder', ja:'JWT デコーダー', 'zh-TW':'JWT 解碼器', 'zh-CN':'JWT 解码器', fr:'Décodeur JWT', de:'JWT-Decoder', ru:'Декодер JWT', 'es-419':'Decodificador JWT', es:'Decodificador JWT', id:'Dekoder JWT', ar:'فك ترميز JWT', ko:'JWT 디코더'},
    jwt_desc:{en:'Decode JWT header and payload instantly in the browser without sending data away.', ja:'JWT のヘッダーとペイロードをブラウザですぐに確認できます。', 'zh-TW':'可直接在瀏覽器中立即解碼 JWT 的標頭與負載。', 'zh-CN':'可直接在浏览器中立即解码 JWT 的头部与载荷。', fr:'Décodez immédiatement l’en-tête et la charge utile JWT dans le navigateur.', de:'JWT-Header und Payload direkt im Browser dekodieren.', ru:'Мгновенно декодируйте заголовок и полезную нагрузку JWT в браузере.', 'es-419':'Decodifica al instante el encabezado y el payload de JWT en el navegador.', es:'Decodifica al instante el encabezado y el payload de JWT en el navegador.', id:'Decode header dan payload JWT langsung di browser.', ar:'افكك رأس وبيانات JWT مباشرة داخل المتصفح.', ko:'JWT 헤더와 페이로드를 브라우저에서 바로 해석합니다.'},
    markdown_title:{en:'Markdown Preview', ja:'Markdown プレビュー', 'zh-TW':'Markdown 預覽', 'zh-CN':'Markdown 预览', fr:'Aperçu Markdown', de:'Markdown-Vorschau', ru:'Предпросмотр Markdown', 'es-419':'Vista previa Markdown', es:'Vista previa Markdown', id:'Pratinjau Markdown', ar:'معاينة Markdown', ko:'마크다운 미리보기'},
    markdown_desc:{en:'Write Markdown and preview the rendered result side by side with quick sample text.', ja:'Markdown を入力してレンダリング結果をすぐ確認できます。', 'zh-TW':'輸入 Markdown 並立即預覽渲染結果。', 'zh-CN':'输入 Markdown 并立即预览渲染结果。', fr:'Rédigez en Markdown et prévisualisez le rendu instantanément.', de:'Markdown schreiben und das Ergebnis sofort anzeigen.', ru:'Пишите Markdown и сразу смотрите результат.', 'es-419':'Escribe Markdown y mira el resultado al instante.', es:'Escribe Markdown y mira el resultado al instante.', id:'Tulis Markdown dan lihat hasilnya langsung.', ar:'اكتب Markdown وشاهد النتيجة فورًا.', ko:'마크다운을 입력하고 렌더링 결과를 바로 확인합니다.'},
    sort_title:{en:'Text Sorter', ja:'テキスト並べ替え', 'zh-TW':'文字排序工具', 'zh-CN':'文本排序工具', fr:'Trieur de texte', de:'Textsortierer', ru:'Сортировка текста', 'es-419':'Ordenador de texto', es:'Ordenador de texto', id:'Pengurut teks', ar:'فرز النصوص', ko:'텍스트 정렬기'},
    sort_desc:{en:'Sort lines A–Z or Z–A, remove duplicates, and clean line lists in one place.', ja:'行を昇順・降順で並べ替え、重複も削除できます。', 'zh-TW':'可將行內容升降排序，並移除重複項目。', 'zh-CN':'可将行内容升降排序，并移除重复项目。', fr:'Triez les lignes, supprimez les doublons et nettoyez les listes rapidement.', de:'Zeilen sortieren, Duplikate entfernen und Listen bereinigen.', ru:'Сортируйте строки, удаляйте дубликаты и очищайте списки.', 'es-419':'Ordena líneas, elimina duplicados y limpia listas rápidamente.', es:'Ordena líneas, elimina duplicados y limpia listas rápidamente.', id:'Urutkan baris, hapus duplikat, dan rapikan daftar.', ar:'رتّب السطور واحذف التكرارات ونظّف القوائم بسرعة.', ko:'줄을 오름차순·내림차순으로 정렬하고 중복도 제거합니다.'},
    base_title:{en:'Number Base Converter', ja:'進数変換', 'zh-TW':'進位轉換器', 'zh-CN':'进制转换器', fr:'Convertisseur de bases', de:'Zahlensystem-Konverter', ru:'Конвертер систем счисления', 'es-419':'Convertidor de bases', es:'Convertidor de bases', id:'Konverter basis angka', ar:'محول الأنظمة العددية', ko:'진법 변환기'},
    base_desc:{en:'Convert numbers between binary, octal, decimal, and hexadecimal instantly.', ja:'2進数・8進数・10進数・16進数をすぐに変換できます。', 'zh-TW':'可立即在二進位、八進位、十進位與十六進位間轉換。', 'zh-CN':'可立即在二进制、八进制、十进制与十六进制间转换。', fr:'Convertissez instantanément entre binaire, octal, décimal et hexadécimal.', de:'Sofort zwischen Binär, Oktal, Dezimal und Hexadezimal umrechnen.', ru:'Мгновенно переводите числа между 2, 8, 10 и 16-ричной системами.', 'es-419':'Convierte al instante entre binario, octal, decimal y hexadecimal.', es:'Convierte al instante entre binario, octal, decimal y hexadecimal.', id:'Konversi angka biner, oktal, desimal, dan heksadesimal dengan cepat.', ar:'حوّل الأرقام فورًا بين الثنائي والثماني والعشري والسداسي عشر.', ko:'2진수, 8진수, 10진수, 16진수를 바로 변환합니다.'},
    slug_title:{en:'Slug Generator', ja:'スラッグ生成', 'zh-TW':'Slug 產生器', 'zh-CN':'Slug 生成器', fr:'Générateur de slug', de:'Slug-Generator', ru:'Генератор slug', 'es-419':'Generador de slug', es:'Generador de slug', id:'Generator slug', ar:'مولد الرابط المختصر', ko:'슬러그 생성기'},
    slug_desc:{en:'Turn titles into clean URL slugs for blogs, docs, and pages with one click.', ja:'タイトルをブログやページ向けの URL スラッグに変換します。', 'zh-TW':'一鍵把標題轉成適合部落格與頁面的網址 slug。', 'zh-CN':'一键把标题转换成适合博客和页面的 URL slug。', fr:'Transformez un titre en slug d’URL propre pour blogs et pages.', de:'Wandle Titel mit einem Klick in saubere URL-Slugs um.', ru:'Превращайте заголовки в аккуратные URL-slug для страниц и блогов.', 'es-419':'Convierte títulos en slugs limpios para URLs, blogs y páginas.', es:'Convierte títulos en slugs limpios para URLs, blogs y páginas.', id:'Ubah judul menjadi slug URL yang rapi untuk blog dan halaman.', ar:'حوّل العناوين إلى Slug نظيف للروابط والصفحات بنقرة واحدة.', ko:'제목을 블로그와 페이지용 깔끔한 URL 슬러그로 바꿉니다.'}
  };

  const CARDS = [
    {href:'./tools/beautifyCode/', titleKey:'tool_beautify_title', descKey:'tool_beautify_desc'},
    {href:'./tools/minifyCode/', titleKey:'tool_minify_title', descKey:'tool_minify_desc'},
    {href:'./tools/jsonFormatter/', titleKey:'tool_json_title', descKey:'side_json_desc'},
    {href:'./tools/sqlFormatter/', titleKey:'tool_sql_title', descKey:'tool_sql_desc'},
    {href:'./tools/uuidGenerator/', titleKey:'tool_uuid_title', descKey:'side_uuid_desc'},
    {href:'./tools/exchangeCalculator/', localTitle:'exchange_title', localDesc:'exchange_desc'},
    {href:'./tools/base64/', titleKey:'tool_base64_title', descKey:'tool_base64_desc'},
    {href:'./tools/specialChars/', titleKey:'tool_special_title', descKey:'tool_special_desc'},
    {href:'./tools/textCleaner/', titleKey:'tool_cleaner_title', descKey:'tool_cleaner_desc'},
    {href:'./tools/htmlEscape/', titleKey:'tool_escape_title', descKey:'tool_escape_desc'},
    {href:'./tools/diffCheck/', titleKey:'tool_diff_title', descKey:'tool_diff_desc'},
    {href:'./tools/qrMaker/', titleKey:'tool_qr_title', descKey:'tool_qr_desc'},
    {href:'./tools/caseConvert/', titleKey:'tool_case_title', descKey:'tool_case_desc'},
    {href:'./tools/wordCounter/', titleKey:'tool_word_title', descKey:'tool_word_desc'},
    {href:'./tools/passwordGenerator/', titleKey:'tool_password_title', descKey:'tool_password_desc'},
    {href:'./tools/urlEncoder/', titleKey:'tool_url_title', descKey:'tool_url_desc'},
    {href:'./tools/hashGenerator/', titleKey:'tool_hash_title', descKey:'tool_hash_desc'},
    {href:'./tools/regexTester/', titleKey:'tool_regex_title', descKey:'tool_regex_desc'},
    {href:'./tools/timestampConverter/', titleKey:'tool_timestamp_title', descKey:'tool_timestamp_desc'},
    {href:'./tools/colorConverter/', titleKey:'tool_color_title', descKey:'tool_color_desc'},
    {href:'./tools/loremIpsum/', titleKey:'tool_lorem_title', descKey:'tool_lorem_desc'},
    {href:'./tools/htmlPreview/', titleKey:'tool_htmlpreview_title', descKey:'tool_htmlpreview_desc'},
    {href:'./tools/csvToJson/', titleKey:'tool_csvjson_title', descKey:'tool_csvjson_desc'},
    {href:'./tools/dateCalculator/', localTitle:'date_title', localDesc:'date_desc'},
    {href:'./tools/percentageCalculator/', localTitle:'percent_title', localDesc:'percent_desc'},
    {href:'./tools/jwtDecoder/', localTitle:'jwt_title', localDesc:'jwt_desc'},
    {href:'./tools/markdownPreview/', localTitle:'markdown_title', localDesc:'markdown_desc'},
    {href:'./tools/textSorter/', localTitle:'sort_title', localDesc:'sort_desc'},
    {href:'./tools/numberBaseConverter/', localTitle:'base_title', localDesc:'base_desc'},
    {href:'./tools/slugGenerator/', localTitle:'slug_title', localDesc:'slug_desc'}
  ];

  function getLang(){
    return window.ToolI18n && typeof window.ToolI18n.getLang === 'function' ? window.ToolI18n.getLang() : 'en';
  }
  function pick(obj, lang){ return (obj && (obj[lang] || obj.en)) || ''; }
  function textFrom(config, kind, lang){
    if (kind === 'title') {
      if (config.localTitle) return pick(LOCAL[config.localTitle], lang);
      return window.ToolI18n && typeof window.ToolI18n.t === 'function' ? window.ToolI18n.t(config.titleKey) : '';
    }
    if (config.localDesc) return pick(LOCAL[config.localDesc], lang);
    return window.ToolI18n && typeof window.ToolI18n.t === 'function' ? window.ToolI18n.t(config.descKey) : '';
  }
  function apply(){
    const lang = getLang();
    CARDS.forEach(config => {
      const card = document.querySelector('#toolGrid .tool-card[href="' + config.href + '"]');
      if (!card) return;
      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      const go = card.querySelector('.go');
      const title = textFrom(config, 'title', lang);
      const desc = textFrom(config, 'desc', lang);
      if (h3 && title && !title.startsWith('tool_') && !title.startsWith('side_')) h3.textContent = title;
      if (p && desc && !desc.startsWith('tool_') && !desc.startsWith('side_')) p.textContent = desc;
      if (go) go.textContent = pick(OPEN, lang);
    });
  }
  document.addEventListener('DOMContentLoaded', apply);
  document.addEventListener('toollab:languagechange', apply);
  if (document.readyState !== 'loading') apply();
})();

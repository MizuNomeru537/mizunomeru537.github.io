(function(){
  const EXTRA = {
    exchange_title:{en:'Exchange Calculator', ja:'為替計算ツール', 'zh-TW':'匯率計算器', 'zh-CN':'汇率计算器', fr:'Calculateur de change', de:'Wechselkursrechner', ru:'Калькулятор обмена валют', 'es-419':'Calculadora de cambio', es:'Calculadora de cambio', id:'Kalkulator kurs', ar:'حاسبة سعر الصرف', ko:'환율 계산기'},
    exchange_desc:{en:'Convert currencies, estimate fees, and calculate the source amount needed for a target receive value.', ja:'通貨換算に加え、手数料見積もりと受取希望額から必要金額まで計算できます。', 'zh-TW':'除了換匯，也能估算手續費與反向計算需要的原始金額。', 'zh-CN':'除了换汇，也能估算手续费并反算需要的原始金额。', fr:'Convertissez des devises, estimez les frais et calculez le montant source nécessaire.', de:'Währungen umrechnen, Gebühren schätzen und den nötigen Ausgangsbetrag berechnen.', ru:'Конвертируйте валюты, оценивайте комиссии и считайте нужную исходную сумму.', 'es-419':'Convierte monedas, estima comisiones y calcula el monto de origen necesario.', es:'Convierte monedas, estima comisiones y calcula el monto de origen necesario.', id:'Konversi mata uang, perkirakan biaya, dan hitung dana asal yang dibutuhkan.', ar:'حوّل العملات وقدّر الرسوم واحسب المبلغ الأصلي المطلوب للوصول إلى صافي محدد.', ko:'환율 계산, 수수료 추정, 목표 수령액 기준 역산까지 지원합니다.'},
    date_title: {en:'Date Calculator', ja:'日付計算ツール', 'zh-TW':'日期計算器', 'zh-CN':'日期计算器', fr:'Calculateur de dates', de:'Datumsrechner', ru:'Калькулятор дат', 'es-419':'Calculadora de fechas', es:'Calculadora de fechas', id:'Kalkulator tanggal', ar:'حاسبة التواريخ', ko:'날짜 계산기'},
    date_desc: {en:'Count date differences, D-day, and add or subtract days in one place.', ja:'日付差・D-day・日数の加減算をまとめて確認できます。', 'zh-TW':'可計算日期差、D-day 與日期加減。', 'zh-CN':'可计算日期差、D-day 与日期加减。', fr:'Calculez les écarts de dates, le D-day et les ajouts ou retraits de jours.', de:'Datumsabstände, D-Day und Tage addieren oder subtrahieren – alles an einem Ort.', ru:'Считайте разницу дат, D-day и прибавляйте или вычитайте дни.', 'es-419':'Calcula diferencias entre fechas, D-day y suma o resta días.', es:'Calcula diferencias entre fechas, D-day y suma o resta días.', id:'Hitung selisih tanggal, D-day, serta tambah atau kurangi hari.', ar:'احسب الفرق بين التواريخ وD-day وأضف أو اطرح الأيام.', ko:'날짜 차이, 디데이, 날짜 더하기·빼기를 한 번에 처리합니다.'},
    percent_title: {en:'Percentage Calculator', ja:'割合計算ツール', 'zh-TW':'百分比計算器', 'zh-CN':'百分比计算器', fr:'Calculateur de pourcentage', de:'Prozentrechner', ru:'Калькулятор процентов', 'es-419':'Calculadora de porcentajes', es:'Calculadora de porcentajes', id:'Kalkulator persentase', ar:'حاسبة النسبة المئوية', ko:'퍼센트 계산기'},
    percent_desc: {en:'Find percent of a value, ratio between numbers, and increase or decrease amounts quickly.', ja:'ある値の何％か、割合、増減計算をすばやく行えます。', 'zh-TW':'快速計算百分比、比例與增減後的金額。', 'zh-CN':'快速计算百分比、比例与增减后的数值。', fr:'Calculez rapidement un pourcentage, un ratio ou une hausse/baisse.', de:'Berechne Prozentwerte, Verhältnisse sowie Zu- und Abnahmen schnell.', ru:'Быстро считайте процент от числа, соотношение и увеличение или уменьшение.', 'es-419':'Calcula rápido porcentajes, proporciones y aumentos o disminuciones.', es:'Calcula rápido porcentajes, proporciones y aumentos o disminuciones.', id:'Hitung persentase, rasio, serta kenaikan atau penurunan dengan cepat.', ar:'احسب النسبة المئوية والنسبة بين رقمين والزيادة أو النقصان بسرعة.', ko:'값의 몇 퍼센트인지, 비율, 증감 계산을 빠르게 처리합니다.'},
    jwt_title:{en:'JWT Decoder', ja:'JWT デコーダー', 'zh-TW':'JWT 解碼器', 'zh-CN':'JWT 解码器', fr:'Décodeur JWT', de:'JWT-Decoder', ru:'Декодер JWT', 'es-419':'Decodificador JWT', es:'Decodificador JWT', id:'Dekoder JWT', ar:'فك ترميز JWT', ko:'JWT 디코더'},
    jwt_desc:{en:'Decode JWT header and payload instantly in the browser without sending data away.', ja:'JWT のヘッダーとペイロードをブラウザですぐに確認できます。', 'zh-TW':'可直接在瀏覽器中立即解碼 JWT 的標頭與負載。', 'zh-CN':'可直接在浏览器中立即解码 JWT 的头部与载荷。', fr:'Décodez immédiatement l’en-tête et la charge utile JWT dans le navigateur.', de:'JWT-Header und Payload direkt im Browser dekodieren.', ru:'Мгновенно декодируйте заголовок и полезную нагрузку JWT в браузере.', 'es-419':'Decodifica al instante el encabezado y el payload de JWT en el navegador.', es:'Decodifica al instante el encabezado y el payload de JWT en el navegador.', id:'Decode header dan payload JWT langsung di browser.', ar:'افكك رأس وبيانات JWT مباشرة داخل المتصفح.', ko:'JWT 헤더와 페이로드를 브라우저에서 바로 해석합니다.'},
    markdown_title:{en:'Markdown Preview', ja:'Markdown プレビュー', 'zh-TW':'Markdown 預覽', 'zh-CN':'Markdown 预览', fr:'Aperçu Markdown', de:'Markdown-Vorschau', ru:'Предпросмотр Markdown', 'es-419':'Vista previa Markdown', es:'Vista previa Markdown', id:'Pratinjau Markdown', ar:'معاينة Markdown', ko:'마크다운 미리보기'},
    markdown_desc:{en:'Write Markdown and preview the rendered result side by side with quick sample text.', ja:'Markdown を入力してレンダリング結果をすぐ確認できます。', 'zh-TW':'輸入 Markdown 並立即預覽渲染結果。', 'zh-CN':'输入 Markdown 并立即预览渲染结果。', fr:'Rédigez en Markdown et prévisualisez le rendu instantanément.', de:'Markdown schreiben und das Ergebnis sofort anzeigen.', ru:'Пишите Markdown и сразу смотрите результат.', 'es-419':'Escribe Markdown y mira el resultado al instante.', es:'Escribe Markdown y mira el resultado al instante.', id:'Tulis Markdown dan lihat hasilnya langsung.', ar:'اكتب Markdown وشاهد النتيجة فورًا.', ko:'마크다운을 입력하고 렌더링 결과를 바로 확인합니다.'},
    sort_title:{en:'Text Sorter', ja:'テキスト並べ替え', 'zh-TW':'文字排序工具', 'zh-CN':'文本排序工具', fr:'Trieur de texte', de:'Textsortierer', ru:'Сортировка текста', 'es-419':'Ordenador de texto', es:'Ordenador de texto', id:'Pengurut teks', ar:'فرز النصوص', ko:'텍스트 정렬기'},
    sort_desc:{en:'Sort lines A–Z or Z–A, remove duplicates, and clean line lists in one place.', ja:'行を昇順・降順で並べ替え、重複も削除できます。', 'zh-TW':'可將行內容升降排序，並移除重複項目。', 'zh-CN':'可将行内容升降排序，并移除重复项目。', fr:'Triez les lignes, supprimez les doublons et nettoyez les listes rapidement.', de:'Zeilen sortieren, Duplikate entfernen und Listen bereinigen.', ru:'Сортируйте строки, удаляйте дубликаты и очищайте списки.', 'es-419':'Ordena líneas, elimina duplicados y limpia listas rápidamente.', es:'Ordena líneas, elimina duplicados y limpia listas rápidamente.', id:'Urutkan baris, hapus duplikat, dan rapikan daftar.', ar:'رتّب السطور واحذف التكرارات ونظّف القوائم بسرعة.', ko:'줄을 오름차순·내림차순으로 정렬하고 중복도 제거합니다.'},
    base_title:{en:'Number Base Converter', ja:'進数変換', 'zh-TW':'進位轉換器', 'zh-CN':'进制转换器', fr:'Convertisseur de bases', de:'Zahlensystem-Konverter', ru:'Конвертер систем счисления', 'es-419':'Convertidor de bases', es:'Convertidor de bases', id:'Konverter basis angka', ar:'محول الأنظمة العددية', ko:'진법 변환기'},
    base_desc:{en:'Convert numbers between binary, octal, decimal, and hexadecimal instantly.', ja:'2進数・8進数・10進数・16進数をすぐに変換できます。', 'zh-TW':'可立即在二進位、八進位、十進位與十六進位間轉換。', 'zh-CN':'可立即在二进制、八进制、十进制与十六进制间转换。', fr:'Convertissez instantanément entre binaire, octal, décimal et hexadécimal.', de:'Sofort zwischen Binär, Oktal, Dezimal und Hexadezimal umrechnen.', ru:'Мгновенно переводите числа между 2, 8, 10 и 16-ричной системами.', 'es-419':'Convierte al instante entre binario, octal, decimal y hexadecimal.', es:'Convierte al instante entre binario, octal, decimal y hexadecimal.', id:'Konversi angka biner, oktal, desimal, dan heksadesimal dengan cepat.', ar:'حوّل الأرقام فورًا بين الثنائي والثماني والعشري والسداسي عشر.', ko:'2진수, 8진수, 10진수, 16진수를 바로 변환합니다.'},
    slug_title:{en:'Slug Generator', ja:'スラッグ生成', 'zh-TW':'Slug 產生器', 'zh-CN':'Slug 生成器', fr:'Générateur de slug', de:'Slug-Generator', ru:'Генератор slug', 'es-419':'Generador de slug', es:'Generador de slug', id:'Generator slug', ar:'مولد الرابط المختصر', ko:'슬러그 생성기'},
    slug_desc:{en:'Turn titles into clean URL slugs for blogs, docs, and pages with one click.', ja:'タイトルをブログやページ向けの URL スラッグに変換します。', 'zh-TW':'一鍵把標題轉成適合部落格與頁面的網址 slug。', 'zh-CN':'一键把标题转换成适合博客和页面的 URL slug。', fr:'Transformez un titre en slug d’URL propre pour blogs et pages.', de:'Wandle Titel mit einem Klick in saubere URL-Slugs um.', ru:'Превращайте заголовки в аккуратные URL-slug для страниц и блогов.', 'es-419':'Convierte títulos en slugs limpios para URLs, blogs y páginas.', es:'Convierte títulos en slugs limpios para URLs, blogs y páginas.', id:'Ubah judul menjadi slug URL yang rapi untuk blog dan halaman.', ar:'حوّل العناوين إلى Slug نظيف للروابط والصفحات بنقرة واحدة.', ko:'제목을 블로그와 페이지용 깔끔한 URL 슬러그로 바꿉니다.'},
    open_tool: {en:'Open tool →', ja:'ツールを開く →', 'zh-TW':'開啟工具 →', 'zh-CN':'打开工具 →', fr:'Ouvrir l’outil →', de:'Tool öffnen →', ru:'Открыть инструмент →', 'es-419':'Abrir herramienta →', es:'Abrir herramienta →', id:'Buka alat →', ar:'فتح الأداة →', ko:'도구 열기 →'}
  };

  const MAP = {
    '/tools/beautifyCode/': {titleKey:'tool_beautify_title', descKey:'tool_beautify_desc'},
    '/tools/minifyCode/': {titleKey:'tool_minify_title', descKey:'tool_minify_desc'},
    '/tools/jsonFormatter/': {titleKey:'tool_json_title', descKey:'side_json_desc'},
    '/tools/sqlFormatter/': {titleKey:'tool_sql_title', descKey:'tool_sql_desc'},
    '/tools/uuidGenerator/': {titleKey:'tool_uuid_title', descKey:'side_uuid_desc'},
    '/tools/exchangeCalculator/': {localTitle:'exchange_title', localDesc:'exchange_desc'},
    '/tools/base64/': {titleKey:'tool_base64_title', descKey:'tool_base64_desc'},
    '/tools/specialChars/': {titleKey:'tool_special_title', descKey:'tool_special_desc'},
    '/tools/textCleaner/': {titleKey:'tool_cleaner_title', descKey:'tool_cleaner_desc'},
    '/tools/htmlEscape/': {titleKey:'tool_escape_title', descKey:'tool_escape_desc'},
    '/tools/diffCheck/': {titleKey:'tool_diff_title', descKey:'tool_diff_desc'},
    '/tools/qrMaker/': {titleKey:'tool_qr_title', descKey:'tool_qr_desc'},
    '/tools/caseConvert/': {titleKey:'tool_case_title', descKey:'tool_case_desc'},
    '/tools/wordCounter/': {titleKey:'tool_word_title', descKey:'tool_word_desc'},
    '/tools/passwordGenerator/': {titleKey:'tool_password_title', descKey:'tool_password_desc'},
    '/tools/urlEncoder/': {titleKey:'tool_url_title', descKey:'tool_url_desc'},
    '/tools/hashGenerator/': {titleKey:'tool_hash_title', descKey:'tool_hash_desc'},
    '/tools/regexTester/': {titleKey:'tool_regex_title', descKey:'tool_regex_desc'},
    '/tools/timestampConverter/': {titleKey:'tool_timestamp_title', descKey:'tool_timestamp_desc'},
    '/tools/colorConverter/': {titleKey:'tool_color_title', descKey:'tool_color_desc'},
    '/tools/loremIpsum/': {titleKey:'tool_lorem_title', descKey:'tool_lorem_desc'},
    '/tools/htmlPreview/': {titleKey:'tool_htmlpreview_title', descKey:'tool_htmlpreview_desc'},
    '/tools/csvToJson/': {titleKey:'tool_csvjson_title', descKey:'tool_csvjson_desc'},
    '/tools/dateCalculator/': {localTitle:'date_title', localDesc:'date_desc'},
    '/tools/percentageCalculator/': {localTitle:'percent_title', localDesc:'percent_desc'},
    '/tools/jwtDecoder/': {localTitle:'jwt_title', localDesc:'jwt_desc'},
    '/tools/markdownPreview/': {localTitle:'markdown_title', localDesc:'markdown_desc'},
    '/tools/textSorter/': {localTitle:'sort_title', localDesc:'sort_desc'},
    '/tools/numberBaseConverter/': {localTitle:'base_title', localDesc:'base_desc'},
    '/tools/slugGenerator/': {localTitle:'slug_title', localDesc:'slug_desc'}
  };

  function getLang(){
    return window.ToolI18n && typeof window.ToolI18n.getLang === 'function' ? window.ToolI18n.getLang() : 'en';
  }
  function pick(obj, lang){ return (obj && (obj[lang] || obj.en)) || ''; }
  function tt(key){
    if (window.ToolI18n && typeof window.ToolI18n.t === 'function') {
      const v = window.ToolI18n.t(key);
      if (v && v !== key) return v;
    }
    return '';
  }
  function getText(cfg, type, lang){
    const localKey = type === 'title' ? cfg.localTitle : cfg.localDesc;
    if (localKey) return pick(EXTRA[localKey], lang);
    const key = type === 'title' ? cfg.titleKey : cfg.descKey;
    return tt(key) || '';
  }
  function normalizeHref(href){
    try {
      const u = new URL(href, location.href);
      let p = u.pathname.replace(/index\.html$/i, '/');
      p = p.replace(/\/+/g, '/');
      if (!p.endsWith('/')) p += '/';
      return p;
    } catch(e){ return ''; }
  }
  function applyHome(){
    const lang = getLang();
    document.querySelectorAll('#toolGrid .tool-card').forEach(card => {
      const path = normalizeHref(card.getAttribute('href') || '');
      const cfg = MAP[path];
      if (!cfg) return;
      const title = getText(cfg, 'title', lang);
      const desc = getText(cfg, 'desc', lang);
      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      const go = card.querySelector('.go');
      if (h3 && title) h3.textContent = title;
      if (p && desc) p.textContent = desc;
      if (go) go.textContent = pick(EXTRA.open_tool, lang) || tt('open_link') || 'Open tool →';
      card.setAttribute('href', path);
    });
  }
  function applyHub(){
    const lang = getLang();
    document.querySelectorAll('.hub-grid .hub-card').forEach(card => {
      const link = card.querySelector('a[href]');
      if (!link) return;
      const path = normalizeHref(link.getAttribute('href') || '');
      const cfg = MAP[path];
      if (!cfg) return;
      const title = getText(cfg, 'title', lang);
      const desc = getText(cfg, 'desc', lang);
      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      if (h3 && title) h3.textContent = title;
      if (p && desc) p.textContent = desc;
      link.textContent = pick(EXTRA.open_tool, lang) || tt('open_link') || 'Open tool →';
      link.setAttribute('href', path);
    });
  }
  function apply(){ applyHome(); applyHub(); }
  function schedule(){ setTimeout(apply, 0); setTimeout(apply, 80); }
  document.addEventListener('DOMContentLoaded', schedule);
  document.addEventListener('toollab:languagechange', schedule);
  window.addEventListener('load', schedule);
  if (document.readyState !== 'loading') schedule();
})();

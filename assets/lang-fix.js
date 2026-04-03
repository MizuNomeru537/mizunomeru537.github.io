(function(){
  function getLang(){ return (window.ToolI18n && window.ToolI18n.getLang()) || document.documentElement.lang || 'en'; }
  function t(key){ return (window.ToolI18n && window.ToolI18n.t) ? window.ToolI18n.t(key) : key; }
  function pageId(){
    const p=(location.pathname||'').replace(/\\/g,'/').toLowerCase();
    if (p.includes('/tools/beautifycode/')) return 'beautify';
    if (p.includes('/tools/minifycode/')) return 'minify';
    if (p.includes('/tools/jsonformatter/')) return 'json';
    if (p.includes('/tools/sqlformatter/')) return 'sql';
    if (p.includes('/tools/uuidgenerator/')) return 'uuid';
    if (p.includes('/tools/base64/')) return 'base64';
    if (p.includes('/tools/specialchars/')) return 'special';
    if (p.includes('/tools/textcleaner/')) return 'cleaner';
    if (p.includes('/tools/htmlescape/')) return 'escape';
    if (p.includes('/tools/diffcheck/')) return 'diff';
    if (p.includes('/tools/caseconvert/')) return 'case';
    if (p.includes('/tools/qrmaker/')) return 'qr';
    if (p.includes('/tools/wordcounter/')) return 'word';
    if (p.includes('/tools/passwordgenerator/')) return 'password';
    if (p.includes('/tools/urlencoder/')) return 'url';
    if (p.includes('/tools/hashgenerator/')) return 'hash';
    if (p.includes('/tools/regextester/')) return 'regex';
    if (p.includes('/tools/timestampconverter/')) return 'timestamp';
    if (p.includes('/tools/colorconverter/')) return 'color';
    if (p.includes('/tools/loremipsum/')) return 'lorem';
    if (p.includes('/tools/htmlpreview/')) return 'htmlpreview';
    if (p.includes('/tools/csvtojson/')) return 'csv';
    if (p.endsWith('/index.html') || p.endsWith('/')) return 'index';
    return 'other';
  }
  function first(sel, root){ return (root||document).querySelector(sel); }
  function all(sel, root){ return Array.from((root||document).querySelectorAll(sel)); }
  function localize(map){
    const lang=getLang();
    if(!map) return '';
    return map[lang] || map.en || map.ko || Object.values(map)[0] || '';
  }
  function setText(sel, value, index){
    const nodes = all(sel);
    if (!nodes.length) return;
    const node = typeof index === 'number' ? nodes[index] : nodes[0];
    if (node) node.textContent = value;
  }
  function setHTML(sel, value, index){
    const nodes = all(sel);
    if (!nodes.length) return;
    const node = typeof index === 'number' ? nodes[index] : nodes[0];
    if (node) node.innerHTML = value;
  }
  function setAttr(sel, attr, value, index){
    const nodes = all(sel);
    if (!nodes.length) return;
    const node = typeof index === 'number' ? nodes[index] : nodes[0];
    if (node) node.setAttribute(attr, value);
  }
  function setLabelText(el, value){
    if (!el) return;
    const textNodes = Array.from(el.childNodes).filter(n => n.nodeType === 3);
    const target = textNodes.find(n => n.nodeValue && n.nodeValue.trim()) || textNodes[0];
    if (target) {
      const beforeControl = el.firstChild === target;
      target.nodeValue = beforeControl ? value + ' ' : ' ' + value;
    } else {
      el.appendChild(document.createTextNode(value));
    }
  }
  function sharedText(key){
    const alias = {
      btn_clear: () => t('btn_clear'),
      btn_convert: () => t('btn_convert'),
      btn_copy: () => t('btn_copy_result'),
      btn_decode: () => t('btn_decode'),
      btn_encode: () => t('btn_encode'),
      btn_generate: () => t('btn_generate'),
      btn_sample: () => t('btn_sample')
    };
    if (alias[key]) return alias[key]();
    const MAP = {
      btn_analyze: {en:'Analyze',ja:'分析',ko:'분석하기','zh-TW':'分析','zh-CN':'分析'},
      btn_generate_more: {en:'Generate 5',ja:'5個生成',ko:'5개 생성','zh-TW':'生成 5 個','zh-CN':'生成 5 个'},
      btn_preview: {en:'Preview',ja:'プレビュー',ko:'미리보기','zh-TW':'預覽','zh-CN':'预览'},
      btn_test: {en:'Test',ja:'테스트',ko:'테스트','zh-TW':'測試','zh-CN':'测试'},
      btn_now: {en:'Use Current Time',ja:'現在時刻 사용',ko:'현재 시간 넣기','zh-TW':'使用目前時間','zh-CN':'使用当前时间'},
      label_length: {en:'Length',ja:'長さ',ko:'길이','zh-TW':'長度','zh-CN':'长度'},
      label_passwords: {en:'Passwords',ja:'パスワード',ko:'비밀번호 목록','zh-TW':'密碼','zh-CN':'密码'},
      opt_upper: {en:'Uppercase',ja:'大文字',ko:'대문자','zh-TW':'大寫字母','zh-CN':'大写字母'},
      opt_lower: {en:'Lowercase',ja:'小文字',ko:'소문자','zh-TW':'小寫字母','zh-CN':'小写字母'},
      opt_numbers: {en:'Numbers',ja:'数字',ko:'숫자','zh-TW':'數字','zh-CN':'数字'},
      opt_symbols: {en:'Symbols',ja:'記号',ko:'기호','zh-TW':'符號','zh-CN':'符号'},
      ph_input: {en:'Paste or type your text here.',ja:'ここにテキストを貼り付けるか入力してください。',ko:'텍스트를 붙여 넣거나 입력하세요.','zh-TW':'請在此貼上或輸入文字。','zh-CN':'请在此粘贴或输入文本。'},
      stat_chars: {en:'Characters',ja:'文字数',ko:'글자 수','zh-TW':'字元數','zh-CN':'字符数'},
      stat_words: {en:'Words',ja:'単語数',ko:'단어 수','zh-TW':'單字數','zh-CN':'单词数'},
      stat_lines: {en:'Lines',ja:'行数',ko:'줄 수','zh-TW':'行數','zh-CN':'行数'},
      stat_bytes: {en:'UTF-8 Bytes',ja:'UTF-8 バイト',ko:'UTF-8 바이트','zh-TW':'UTF-8 位元組','zh-CN':'UTF-8 字节'},
      label_hash: {en:'Text to Hash',ja:'ハッシュする文字列',ko:'해시할 텍스트','zh-TW':'要雜湊的文字','zh-CN':'要哈希的文本'},
      label_detected: {en:'Detected Format',ja:'判定形式',ko:'감지 형식','zh-TW':'偵測格式','zh-CN':'检测格式'},
      label_flags: {en:'Flags',ja:'フラグ',ko:'플래그','zh-TW':'旗標','zh-CN':'标记'},
      label_pattern: {en:'Pattern',ja:'パターン',ko:'패턴','zh-TW':'模式','zh-CN':'模式'},
      ph_pattern: {en:'Example: ^[a-z]+$',ja:'例: ^[a-z]+$',ko:'예: ^[a-z]+$','zh-TW':'例如：^[a-z]+$','zh-CN':'例如：^[a-z]+$'},
      label_matches: {en:'Matches',ja:'一致結果',ko:'매칭 결과','zh-TW':'符合結果','zh-CN':'匹配结果'},
      label_result: {en:'Result',ja:'結果',ko:'결과','zh-TW':'結果','zh-CN':'结果'},
      label_local: {en:'Local Time',ja:'ローカル時刻',ko:'로컬 시간','zh-TW':'本地時間','zh-CN':'本地时间'},
      label_utc: {en:'UTC',ja:'UTC',ko:'UTC','zh-TW':'UTC','zh-CN':'UTC'},
      label_seconds: {en:'Unix Seconds',ja:'Unix 秒',ko:'Unix 초','zh-TW':'Unix 秒','zh-CN':'Unix 秒'},
      label_milliseconds: {en:'Unix Milliseconds',ja:'Unix ミリ秒',ko:'Unix 밀리초','zh-TW':'Unix 毫秒','zh-CN':'Unix 毫秒'},
      label_iso: {en:'ISO Date String',ja:'ISO 日時文字列',ko:'ISO 날짜 문자열','zh-TW':'ISO 日期字串','zh-CN':'ISO 日期字符串'},
      label_paragraphs: {en:'Paragraphs',ja:'段落数',ko:'문단 수','zh-TW':'段落數','zh-CN':'段落数'},
      label_sentences: {en:'Sentences per paragraph',ja:'段落ごとの文数',ko:'문단당 문장 수','zh-TW':'每段句數','zh-CN':'每段句数'},
      label_result: {en:'Result',ja:'結果',ko:'결과','zh-TW':'結果','zh-CN':'结果'},
      label_html: {en:'HTML Source',ja:'HTML ソース',ko:'HTML 소스','zh-TW':'HTML 原始碼','zh-CN':'HTML 源代码'},
      label_preview: {en:'Preview',ja:'プレビュー',ko:'미리보기','zh-TW':'預覽','zh-CN':'预览'},
      label_csv: {en:'CSV Input',ja:'CSV 入力',ko:'CSV 입력','zh-TW':'CSV 輸入','zh-CN':'CSV 输入'},
      label_json: {en:'JSON Output',ja:'JSON 出力',ko:'JSON 출력','zh-TW':'JSON 輸出','zh-CN':'JSON 输出'}
    };
    return localize(MAP[key]) || '';
  }
  function applySharedDataPageKeys(){
    const skip = new Set(['label_input','label_output','btn_copy','ph_input','label_result']);
    all('[data-page-key]').forEach(el => {
      const key = el.getAttribute('data-page-key');
      if (skip.has(key)) return;
      const attr = el.getAttribute('data-page-attr');
      const value = sharedText(key);
      if (!value) return;
      if (attr) el.setAttribute(attr, value);
      else el.textContent = value;
    });
  }
  function applyIndexExtras(){
    if(pageId() !== 'index') return;
    setText('#updates details:nth-of-type(3) summary', t('faq_q3'));
    setText('#updates details:nth-of-type(3) p', t('faq_a3'));
  }
  function applyBeautify(){
    if(pageId() !== 'beautify') return;
    setText('.hero .pill', 'HTML · CSS · JS · JSON');
    setText('.hero h1', t('tool_beautify_title'));
    setText('.hero p', t('tool_beautify_desc'));
    setLabelText(first('.control-row > label:nth-child(1)'), t('label_language'));
    setLabelText(first('.control-row > label:nth-child(2)'), t('label_indent'));
    const checks = all('.control-row label.checkbox');
    setLabelText(checks[0], t('opt_semicolon'));
    setLabelText(checks[1], t('opt_singlequote'));
    setText('#formatBtn', t('btn_format')); setText('#copyBtn', t('btn_copy_result')); setText('#sampleBtn', t('btn_sample')); setText('#clearBtn', t('btn_clear'));
    setText("label[for='inputCode']", t('label_original_code')); setText("label[for='outputCode']", t('label_formatted_result'));
    setText('.grid-3 .help-box:nth-child(1) h3', t('help_supported')); setText('.grid-3 .help-box:nth-child(1) p', t('help_supported_desc'));
    setText('.grid-3 .help-box:nth-child(2) h3', t('help_browser')); setText('.grid-3 .help-box:nth-child(2) p', t('help_browser_desc'));
    setText('.grid-3 .help-box:nth-child(3) h3', t('help_caution')); setText('.grid-3 .help-box:nth-child(3) p', t('help_caution_desc'));
    setText('#tabWidth option[value="2"]', localize({en:'2 spaces',ja:'2スペース',ko:'2칸','zh-TW':'2 個空格','zh-CN':'2 个空格'}));
    setText('#tabWidth option[value="4"]', localize({en:'4 spaces',ja:'4スペース',ko:'4칸','zh-TW':'4 個空格','zh-CN':'4 个空格'}));
  }
  function applyMinify(){
    if(pageId() !== 'minify') return;
    setText('.hero .pill', localize({en:'Code Minify · Real browser execution',ko:'코드 압축 · 실제 동작'}));
    setText('.hero h1', t('tool_minify_title')); setText('.hero p', t('tool_minify_desc'));
    setLabelText(first('.control-row > label:nth-child(1)'), t('label_language'));
    const checks = all('.control-row label.checkbox'); setLabelText(checks[0], t('opt_remove_comments')); setLabelText(checks[1], t('opt_mangle'));
    setText('#runBtn', t('btn_minify')); setText('#copyBtn', t('btn_copy_result')); setText('#sampleBtn', t('btn_sample')); setText('#clearBtn', t('btn_clear'));
    setText("label[for='inputCode']", t('label_original_code')); setText("label[for='outputCode']", localize({en:'Minified Result',ko:'압축 결과'}));
  }
  function applyJson(){
    if(pageId() !== 'json') return;
    setText('.hero .pill', localize({en:'JSON · Format / Minify / Validate',ko:'JSON · 정리 / 압축 / 검증'}));
    setText('.hero h1', t('tool_json_title')); setText('.hero p', t('tool_json_desc'));
    setLabelText(first('.control-row > label'), t('label_indent'));
    setText('#prettyBtn', t('btn_format')); setText('#minifyBtn', t('btn_minify')); setText('#validateBtn', t('btn_validate')); setText('#copyBtn', t('btn_copy_result')); setText('#sampleBtn', t('btn_sample'));
    const labels = all('.grid-2 .label'); setText('.grid-2 .label', t('label_source_json'), 0); setText('.grid-2 .label', t('label_output'), 1);
    setText('.help-box:nth-child(1) h3', t('btn_format')); setText('.help-box:nth-child(1) p', t('json_help_pretty_desc'));
    setText('.help-box:nth-child(2) h3', t('btn_minify')); setText('.help-box:nth-child(2) p', t('json_help_minify_desc'));
    setText('.help-box:nth-child(3) h3', t('btn_validate')); setText('.help-box:nth-child(3) p', t('json_help_validate_desc'));
    setText('#indent option[value="2"]', localize({en:'2 spaces',ja:'2スペース',ko:'2칸','zh-TW':'2 個空格','zh-CN':'2 个空格'}));
    setText('#indent option[value="4"]', localize({en:'4 spaces',ja:'4スペース',ko:'4칸','zh-TW':'4 個空格','zh-CN':'4 个空格'}));
  }
  function applySql(){
    if(pageId() !== 'sql') return;
    setText('.hero .pill', localize({en:'SQL · Basic formatter',ko:'SQL · 기본 포맷터'}));
    setText('.hero h1', t('tool_sql_title')); setText('.hero p', t('tool_sql_desc'));
    setLabelText(first('.control-row > label'), localize({en:'Keyword case',ja:'キーワードの大小文字',ko:'키워드 대소문자','zh-TW':'關鍵字大小寫','zh-CN':'关键字大小写'}));
    setText('#caseMode option[value="upper"]', t('opt_uppercase')); setText('#caseMode option[value="lower"]', t('opt_lowercase')); setText('#caseMode option[value="keep"]', t('opt_keep'));
    setText('#formatBtn', t('btn_format')); setText('#minifyBtn', localize({en:'Single Line',ja:'1行にする',ko:'한 줄로','zh-TW':'單行','zh-CN':'单行'})); setText('#copyBtn', t('btn_copy')); setText('#sampleBtn', t('btn_sample'));
    setText('.grid-2 .label', t('label_source_sql'), 0); setText('.grid-2 .label', t('label_formatted_result'), 1);
    setText('.help-box h3', t('sql_help_note')); setText('.help-box p', t('sql_help_desc'));
  }
  function applyUuid(){
    if(pageId() !== 'uuid') return;
    setText('.hero .pill', localize({en:'UUID · Real generation',ko:'UUID · 실제 생성'})); setText('.hero h1', t('tool_uuid_title')); setText('.hero p', t('tool_uuid_desc'));
    setLabelText(first('.control-row > label:nth-child(1)'), t('label_count')); setLabelText(first('.control-row label.checkbox'), t('opt_uppercase'));
    setText('#generateBtn', t('btn_generate')); setText('#copyBtn', localize({en:'Copy All',ja:'すべてコピー',ko:'전체 복사','zh-TW':'全部複製','zh-CN':'全部复制'}));
    setText('.help-box:nth-child(1) h3', t('uuid_help_1')); setText('.help-box:nth-child(1) p', t('uuid_help_1_desc')); setText('.help-box:nth-child(2) h3', t('uuid_help_2')); setText('.help-box:nth-child(2) p', t('uuid_help_2_desc')); setText('.help-box:nth-child(3) h3', t('uuid_help_3')); setText('.help-box:nth-child(3) p', t('uuid_help_3_desc'));
  }
  function applyBase64(){
    if(pageId() !== 'base64') return;
    setText('.hero .pill', localize({en:'Base64 · UTF-8 ready',ko:'Base64 · UTF-8 대응'})); setText('.hero h1', t('tool_base64_title')); setText('.hero p', t('tool_base64_desc'));
    setText('#encodeBtn', t('btn_encode')); setText('#decodeBtn', t('btn_decode')); setText('#swapBtn', t('btn_swap')); setText('#copyBtn', t('btn_copy_result')); setText('#sampleBtn', t('btn_sample')); setText('.grid-2 .label', t('label_input'), 0); setText('.grid-2 .label', t('label_output'), 1);
  }
  function applySpecial(){
    if(pageId() !== 'special') return;
    setText('.hero .pill', localize({en:'Special Characters · Instant copy',ko:'특수문자 · 즉시 복사'})); setText('.hero h1', t('tool_special_title')); setText('.hero p', t('tool_special_desc'));
    setLabelText(first('.control-row > label'), t('label_search'));
    setAttr('#search', 'placeholder', t('search_ph_symbols')); setText('#clearBtn', t('btn_reset_search'));
    const titleMap = {
      '별 / 장식': localize({en:'Stars / Decoration',ko:'별 / 장식'}),
      '화살표': localize({en:'Arrows',ko:'화살표'}),
      '괄호': localize({en:'Brackets',ko:'괄호'}),
      '통화': localize({en:'Currency',ko:'통화'}),
      '수학': localize({en:'Math',ko:'수학'}),
      '문장부호': localize({en:'Punctuation',ko:'문장부호'}),
      '체크 / 상태': localize({en:'Checks / Status',ko:'체크 / 상태'}),
      '감정 / 손': localize({en:'Emotion / Hands',ko:'감정 / 손'})
    };
    const patch = () => {
      all('#groups .section-head h2').forEach((el)=>{ const raw=(el.dataset.rawTitle || el.textContent || '').trim(); if(!el.dataset.rawTitle) el.dataset.rawTitle = raw; el.textContent = titleMap[raw] || titleMap[el.dataset.rawTitle] || raw; });
      all('#groups .section-head p').forEach(el=> el.textContent = localize({en:'Click any symbol to copy it instantly.',ko:'클릭하면 바로 복사됩니다.'}));
    };
    patch();
    first('#search')?.addEventListener('input', ()=>setTimeout(patch,0));
    first('#clearBtn')?.addEventListener('click', ()=>setTimeout(patch,0));
  }
  function applyCleaner(){
    if(pageId() !== 'cleaner') return;
    setText('.hero .pill', localize({en:'Text cleanup · Multiple options',ko:'텍스트 정리 · 여러 옵션'})); setText('.hero h1', t('tool_cleaner_title')); setText('.hero p', t('tool_cleaner_desc'));
    const checks = all('.control-row label.checkbox'); setLabelText(checks[0], t('opt_trim_lines')); setLabelText(checks[1], t('opt_remove_empty')); setLabelText(checks[2], t('opt_collapse_spaces')); setLabelText(checks[3], t('opt_dedupe'));
    setText('#runBtn', t('btn_format')); setText('#copyBtn', t('btn_copy')); setText('#sampleBtn', t('btn_sample')); setText('.grid-2 .label', t('label_source_text'), 0); setText('.grid-2 .label', t('label_formatted_result'), 1);
  }
  function applyEscape(){
    if(pageId() !== 'escape') return;
    setText('.hero h1', t('tool_escape_title')); setText('.hero p', t('tool_escape_desc')); setText('#escapeBtn', t('btn_escape')); setText('#unescapeBtn', t('btn_unescape')); setText('#copyBtn', t('btn_copy')); setText('#sampleBtn', t('btn_sample')); setText('.grid-2 .label', t('label_input'), 0); setText('.grid-2 .label', t('label_output'), 1);
  }
  function applyDiff(){
    if(pageId() !== 'diff') return;
    setText('.hero .pill', localize({en:'Document diff · Line by line',ko:'문서 비교 · 라인 단위'})); setText('.hero h1', t('tool_diff_title')); setText('.hero p', t('tool_diff_desc')); setText('#compareBtn', t('btn_compare')); setText('#sampleBtn', t('btn_sample')); setText('.diff-grid .label', t('label_left_doc'), 0); setText('.diff-grid .label', t('label_right_doc'), 1);
  }
  function applyCase(){
    if(pageId() !== 'case') return;
    setText('.hero .pill', localize({en:'Case conversion',ko:'문자 케이스 변환'})); setText('.hero h1', t('tool_case_title')); setText('.hero p', t('tool_case_desc')); setText('#convertBtn', t('btn_convert')); setText('#sampleBtn', t('btn_sample')); setText('.grid-2 .label', localize({en:'Input Text',ja:'入力テキスト',ko:'입력 텍스트','zh-TW':'輸入文字','zh-CN':'输入文本'}));
  }
  function applyQr(){
    if(pageId() !== 'qr') return;
    setText('.hero .pill', localize({en:'QR generation · Browser rendering',ko:'QR 생성 · 브라우저 렌더링'})); setText('.hero h1', t('tool_qr_title')); setText('.hero p', t('tool_qr_desc'));
    setLabelText(first('.control-row > label'), t('label_size')); setText('#generateBtn', localize({en:'Create QR',ja:'QR を作成',ko:'QR 생성','zh-TW':'建立 QR','zh-CN':'创建 QR'})); setText('#downloadBtn', t('btn_download_png')); setText('#sampleBtn', t('btn_sample')); setText('.grid-2 .label', t('label_text_url'), 0); setText('.grid-2 .label', t('label_qr_result'), 1);
  }
  function applyRootTitles(){
    // keep page titles/descriptions on added tools in English fallback, but ensure no Korean leaks in generic controls
    const pid = pageId();
    if(['word','password','url','hash','regex','timestamp','color','lorem','htmlpreview','csv'].includes(pid)){
      // Make footer/tagline consistent when non-Korean.
      setText('footer .footer-grid > div:nth-child(1) p', localize({en:'An online collection of tools you can use directly in your browser.',ko:'브라우저에서 바로 사용하는 온라인 도구 모음.'}));
    }
  }
  function applyAll(){
    applySharedDataPageKeys();
    applyIndexExtras();
    applyBeautify(); applyMinify(); applyJson(); applySql(); applyUuid(); applyBase64(); applySpecial(); applyCleaner(); applyEscape(); applyDiff(); applyCase(); applyQr();
    applyRootTitles();
  }
  document.addEventListener('DOMContentLoaded', applyAll);
  document.addEventListener('toollab:languagechange', function(){ setTimeout(applyAll,0); });
})();

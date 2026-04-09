(function(){
  const T = {
    card_date_title: {en:'Date Calculator', ja:'日付計算ツール', 'zh-TW':'日期計算器', 'zh-CN':'日期计算器', fr:'Calculateur de dates', de:'Datumsrechner', ru:'Калькулятор дат', 'es-419':'Calculadora de fechas', es:'Calculadora de fechas', id:'Kalkulator tanggal', ar:'حاسبة التواريخ', ko:'날짜 계산기'},
    card_date_desc: {en:'Count date differences, D-day, and add or subtract days in one place.', ja:'日付差・D-day・日数の加減算をまとめて確認できます。', 'zh-TW':'可計算日期差、D-day 與日期加減。', 'zh-CN':'可计算日期差、D-day 与日期加减。', fr:'Calculez les écarts de dates, le D-day et les ajouts ou retraits de jours.', de:'Datumsabstände, D-Day und Tage addieren oder subtrahieren – alles an einem Ort.', ru:'Считайте разницу дат, D-day и прибавляйте или вычитайте дни.', 'es-419':'Calcula diferencias entre fechas, D-day y suma o resta días.', es:'Calcula diferencias entre fechas, D-day y suma o resta días.', id:'Hitung selisih tanggal, D-day, serta tambah atau kurangi hari.', ar:'احسب الفرق بين التواريخ وD-day وأضف أو اطرح الأيام.', ko:'날짜 차이, 디데이, 날짜 더하기·빼기를 한 번에 처리합니다.'},
    card_percent_title: {en:'Percentage Calculator', ja:'割合計算ツール', 'zh-TW':'百分比計算器', 'zh-CN':'百分比计算器', fr:'Calculateur de pourcentage', de:'Prozentrechner', ru:'Калькулятор процентов', 'es-419':'Calculadora de porcentajes', es:'Calculadora de porcentajes', id:'Kalkulator persentase', ar:'حاسبة النسبة المئوية', ko:'퍼센트 계산기'},
    card_percent_desc: {en:'Find percent of a value, ratio between numbers, and increase or decrease amounts quickly.', ja:'ある値の何％か、割合、増減計算をすばやく行えます。', 'zh-TW':'快速計算百分比、比例與增減後的金額。', 'zh-CN':'快速计算百分比、比例与增减后的数值。', fr:'Calculez rapidement un pourcentage, un ratio ou une hausse/baisse.', de:'Berechne Prozentwerte, Verhältnisse sowie Zu- und Abnahmen schnell.', ru:'Быстро считайте процент от числа, соотношение и увеличение или уменьшение.', 'es-419':'Calcula rápido porcentajes, proporciones y aumentos o disminuciones.', es:'Calcula rápido porcentajes, proporciones y aumentos o disminuciones.', id:'Hitung persentase, rasio, serta kenaikan atau penurunan dengan cepat.', ar:'احسب النسبة المئوية والنسبة بين رقمين والزيادة أو النقصان بسرعة.', ko:'값의 몇 퍼센트인지, 비율, 증감 계산을 빠르게 처리합니다.'},
    card_exchange_desc2: {en:'Convert currencies, estimate fees, and calculate the source amount needed for a target receive value.', ja:'通貨換算に加え、手数料見積もりと受取希望額から必要金額を計算できます。', 'zh-TW':'除了換匯，也能估算手續費與反向計算需要的原始金額。', 'zh-CN':'除了换汇，也能估算手续费并反算需要的原始金额。', fr:'Convertissez des devises, estimez les frais et calculez le montant source nécessaire.', de:'Währungen umrechnen, Gebühren schätzen und den nötigen Ausgangsbetrag berechnen.', ru:'Конвертируйте валюты, оценивайте комиссии и считайте нужную исходную сумму.', 'es-419':'Convierte monedas, estima comisiones y calcula el monto de origen necesario.', es:'Convierte monedas, estima comisiones y calcula el monto de origen necesario.', id:'Konversi mata uang, perkirakan biaya, dan hitung dana asal yang dibutuhkan.', ar:'حوّل العملات وقدّر الرسوم واحسب المبلغ الأصلي المطلوب للوصول إلى صافي محدد.', ko:'환율 계산뿐 아니라 수수료 반영과 목표 수령액 기준 역산까지 지원합니다.'},
    card_open_tool: {en:'Open tool →', ja:'ツールを開く →', 'zh-TW':'開啟工具 →', 'zh-CN':'打开工具 →', fr:'Ouvrir l’outil →', de:'Tool öffnen →', ru:'Открыть инструмент →', 'es-419':'Abrir herramienta →', es:'Abrir herramienta →', id:'Buka alat →', ar:'فتح الأداة →', ko:'도구 열기 →'}
  };
  const t = (key, lang) => {
    const entry = T[key] || {};
    return entry[lang] || entry.en || key;
  };
  function apply(){
    const lang = window.ToolI18n && typeof window.ToolI18n.getLang === 'function' ? window.ToolI18n.getLang() : 'en';
    document.querySelectorAll('[data-ct-key]').forEach(el => {
      const key = el.getAttribute('data-ct-key');
      const attr = el.getAttribute('data-ct-attr');
      const value = t(key, lang);
      if (attr) el.setAttribute(attr, value); else el.textContent = value;
    });
  }
  document.addEventListener('DOMContentLoaded', apply);
  document.addEventListener('toollab:languagechange', apply);
})();

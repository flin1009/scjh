// 歷屆會考題庫與講義核心數據結構
const EXAM_DATA = window.EMBEDDED_EXAM_DATA = {
  "version": "2.0",
  "updatedAt": "2026-09-20",
  "officialSource": "https://cap.rcpet.edu.tw/examination.html",
  "years": [
    {
      "year": 115,
      "label": "115 年國中教育會考",
      "tag": "最新完整版",
      "featured": true,
      "description": "提供心測中心官方試卷直連、標準答案、試題分析，以及獅甲國中 5B衝A特訓講義與答對題數等級對照。",
      "subjects": [
        {
          "id": "chinese",
          "name": "國文科",
          "icon": "📖",
          "questions": "單選 42 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 36 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1FQtq4_a4GTsTKURdzPhDkKmONKRXtTJ9/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1fxfOLQPMdCEMSuziD1qsQZg3vVOGt8df/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1jGFuoXvMF7kiCdIO63SDayH2dC4C5WEO?usp=drive_link",
          "handout_html": "exams/115/handouts/chinese.html",
          "handout_title": "115 國文 5B衝A實戰講義",
          "cutoffs": {
            "A++": "40-42 題",
            "A+": "39 題",
            "A": "36-38 題",
            "B++": "32-35 題",
            "B+": "28-31 題",
            "B": "17-27 題",
            "C": "0-16 題"
          }
        },
        {
          "id": "english",
          "name": "英語科 (閱讀與聽力)",
          "icon": "🎧",
          "questions": "閱讀 43 題 / 聽力 21 題",
          "duration": "閱讀 60 分鐘 / 聽力 25 分鐘",
          "a_cutoff": "加權 90.70 分達 A",
          "exam_pdf": "https://drive.google.com/file/d/1pzRZpkZEBg4x7GNTAIrdfGJCxNSKgok-/view?usp=drive_link",
          "listening_pdf": "https://drive.google.com/file/d/1zRjsoyQhLRJfmmHtBJfi5qJa6ND1uVJ6/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1fxfOLQPMdCEMSuziD1qsQZg3vVOGt8df/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1jGFuoXvMF7kiCdIO63SDayH2dC4C5WEO?usp=drive_link",
          "handout_html": "exams/115/handouts/english.html",
          "handout_title": "115 英語 5B衝A實戰講義",
          "cutoffs": {
            "A++": "加權 98.14-100",
            "A+": "加權 96.28-98.13",
            "A": "加權 90.70-96.27",
            "B++": "加權 82.30-90.69",
            "B+": "加權 69.28-82.29",
            "B": "加權 38.43-69.27",
            "C": "加權 0-38.42"
          }
        },
        {
          "id": "math",
          "name": "數學科 (含非選擇題)",
          "icon": "📐",
          "questions": "選擇 25 題 / 非選 2 大題(6分)",
          "duration": "80 分鐘",
          "a_cutoff": "加權 77.10 分達 A",
          "exam_pdf": "https://drive.google.com/file/d/1G-grfVw1NldMD3TRG-7Lco-yOuaoTKoK/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1fxfOLQPMdCEMSuziD1qsQZg3vVOGt8df/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1jGFuoXvMF7kiCdIO63SDayH2dC4C5WEO?usp=drive_link",
          "handout_html": "exams/115/handouts/math.html",
          "handout_title": "115 數學 5B衝A實戰講義 (MathJax排版)",
          "cutoffs": {
            "A++": "加權 91.60-100",
            "A+": "加權 85.70-91.59",
            "A": "加權 77.10-85.69",
            "B++": "加權 68.70-77.09",
            "B+": "加權 59.40-68.69",
            "B": "加權 39.00-59.39",
            "C": "加權 0-38.99"
          }
        },
        {
          "id": "nature",
          "name": "自然科 (理化/地科/生物)",
          "icon": "🔬",
          "questions": "單選 50 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 43 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1ZJNPG9Wz3zuI8UkPGUY50URejxxZYmQ8/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1fxfOLQPMdCEMSuziD1qsQZg3vVOGt8df/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1jGFuoXvMF7kiCdIO63SDayH2dC4C5WEO?usp=drive_link",
          "handout_html": "exams/115/handouts/nature.html",
          "handout_title": "115 自然 5B衝A實戰講義",
          "cutoffs": {
            "A++": "47-50 題",
            "A+": "46 題",
            "A": "43-45 題",
            "B++": "36-42 題",
            "B+": "29-35 題",
            "B": "19-28 題",
            "C": "0-18 題"
          }
        },
        {
          "id": "society",
          "name": "社會科 (歷史/地理/公民)",
          "icon": "🌏",
          "questions": "單選 54 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 48 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1ITxBlFhNSIbg1u1C7FrU2ODk951wt-RT/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1fxfOLQPMdCEMSuziD1qsQZg3vVOGt8df/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1jGFuoXvMF7kiCdIO63SDayH2dC4C5WEO?usp=drive_link",
          "handout_html": "exams/115/handouts/society.html",
          "handout_title": "115 社會 5B衝A實戰講義",
          "cutoffs": {
            "A++": "52-54 題",
            "A+": "51 題",
            "A": "48-50 題",
            "B++": "41-47 題",
            "B+": "34-40 題",
            "B": "20-33 題",
            "C": "0-19 題"
          }
        },
        {
          "id": "writing",
          "name": "寫作測驗",
          "icon": "✍️",
          "questions": "引導寫作 1 題",
          "duration": "50 分鐘",
          "a_cutoff": "5-6 級分為精熟",
          "exam_pdf": "https://drive.google.com/file/d/1NceEHPUXT0fZo6UgdCuSdGApQ4embM0t/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1uCImBYbMxkme8DxV2Wj5RdxBnNgTeD5n/view?usp=drive_link",
          "sample1_pdf": "https://drive.google.com/file/d/1MSG0LyS7baOyiQljRUhAnav11YCl81AB/view?usp=drive_link",
          "sample2_pdf": "https://drive.google.com/file/d/1ouJumyoxquh1ATPkquwmK0xfeeJGyW28/view?usp=drive_link",
          "handout_html": "exams/115/handouts/writing.html",
          "handout_title": "115 寫作 5B衝5至6級分實戰講義",
          "cutoffs": {
            "A++": "6 級分",
            "A+": "5 級分",
            "B": "3-4 級分",
            "C": "1-2 級分"
          }
        }
      ],
      "stats_docs": [
        {
          "title": "115年各科等級加標示與答對題數對照表",
          "file": "https://drive.google.com/file/d/1PpG5c7rijz5guz6T1XwkeIRwtrV3f0uL/view?usp=drive_link",
          "tag": "核心標準",
          "desc": "各科 A++、A+、A、B++、B+、B、C 答對題數與加權級距切點"
        },
        {
          "title": "115年各科等級加標示人數百分比統計表",
          "file": "https://drive.google.com/file/d/1Cosscfa4fXDuPmmjW5jKawtPr0yhPFdL/view?usp=drive_link",
          "tag": "常態分佈",
          "desc": "全國考生在各科目精熟、基礎、待加強等級人數與累計百分比"
        },
        {
          "title": "115年各科各題通過率統計表",
          "file": "https://drive.google.com/file/d/18wrAaXAakCwra1WXdS1HPxLDvPBlyp_S/view?usp=drive_link",
          "tag": "難度指標",
          "desc": "國英數自社全卷每一道題目的全國平均答對率（通過率P值）"
        },
        {
          "title": "115年各科各題鑑別度統計表",
          "file": "https://drive.google.com/file/d/1460OoCkq7sKCUc1UqyQY01kJR3agO2eA/view?usp=drive_link",
          "tag": "鑑別指標",
          "desc": "高分組與低分組答對率差值（鑑別度D值），掌握衝A關鍵題"
        },
        {
          "title": "115年各科計分與閱卷結果說明",
          "file": "https://drive.google.com/file/d/1z8t9ynUqMNzlHBbdaYjnRakUMLK0LIiX/view?usp=drive_link",
          "tag": "官方發布",
          "desc": "心測中心官方計分原則、英語聽閱讀加權與數學非選計分辦法"
        },
        {
          "title": "115年各等級類別暨寫作測驗級分人數百分比",
          "file": "https://drive.google.com/file/d/19L4yeX62fwJEJSJXGnfNPSLmSa7VldNL/view?usp=drive_link",
          "tag": "交叉分析",
          "desc": "各能力等級考生在寫作測驗 1~6 級分的分佈交叉比對"
        },
        {
          "title": "115年寫作測驗各級分人數百分比統計表",
          "file": "https://drive.google.com/file/d/1YUzK5n4Dju_PMNumnuUtnIFNiWeWBiS7/view?usp=drive_link",
          "tag": "寫作大數據",
          "desc": "全國考生寫作測驗 6 級分、5 級分至 1 級分人數累計百分比"
        },
        {
          "title": "115年數學非選擇題各級分人數百分比統計表",
          "file": "https://drive.google.com/file/d/1i7RqcdQ5btxWk3RM7G-vsyvWdsGJmapF/view?usp=drive_link",
          "tag": "數學非選",
          "desc": "數學非選第一題與第二題 3分、2分、1分、0分的全國得分率分佈"
        },
        {
          "title": "115年試題疑義新聞稿暨釋復內容",
          "file": "https://cap.rcpet.edu.tw/115doubt.html",
          "tag": "試題爭點",
          "desc": "各界針對 115 試題疑義申訴之官方正式釋復報告與題意定案"
        },
        {
          "title": "115年國中教育會考各科試題分析（全套資料夾）",
          "file": "https://drive.google.com/drive/folders/1jGFuoXvMF7kiCdIO63SDayH2dC4C5WEO?usp=drive_link",
          "tag": "深度分析",
          "desc": "心測中心研究員針對各科命題思維、學生答題迷思概念之專題報告"
        },
        {
          "title": "115年國中教育會考試題說明與注意事項",
          "file": "https://drive.google.com/file/d/1uCImBYbMxkme8DxV2Wj5RdxBnNgTeD5n/view?usp=drive_link",
          "tag": "簡章規範",
          "desc": "會考各科題本說明、答題規範與非選擇題作答注意事項"
        }
      ],
      "has_handouts": true
    },
    {
      "year": 114,
      "label": "114 年國中教育會考",
      "tag": "歷屆試題",
      "featured": false,
      "description": "收錄 114 年心測中心官方試卷、答案與各題分析直連，以及等級對照標準。",
      "subjects": [
        {
          "id": "chinese",
          "name": "國文科",
          "icon": "📖",
          "questions": "單選 42 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 36 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/102j8F3hoCvGgMCVP6x6oHN9cCd0R6_Ii/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/175hz0lHG4GTDNxYet9lrRDu0lmC_G08o/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1diphWMmFmHVSsLzkX8hvMgTHfbtfvc5f?usp=drive_link",
          "cutoffs": {
            "A++": "40-42 題",
            "A+": "38-39 題",
            "A": "36-37 題",
            "B++": "32-35 題",
            "B+": "28-31 題",
            "B": "18-27 題",
            "C": "0-17 題"
          },
          "handout_html": "exams/114/handouts/chinese.html"
        },
        {
          "id": "english",
          "name": "英語科 (閱讀與聽力)",
          "icon": "🎧",
          "questions": "閱讀 43 題 / 聽力 21 題",
          "duration": "閱讀 60 分鐘 / 聽力 25 分鐘",
          "a_cutoff": "精熟等級",
          "exam_pdf": "https://drive.google.com/file/d/1Or0bC16Jn2hA0uAF2zrryHoY46ywIQjK/view?usp=drive_link",
          "listening_pdf": "https://drive.google.com/file/d/1NQNXowVBpE4N7i790_88YXZ03zt2ktFn/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/175hz0lHG4GTDNxYet9lrRDu0lmC_G08o/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1diphWMmFmHVSsLzkX8hvMgTHfbtfvc5f?usp=drive_link",
          "handout_html": "exams/114/handouts/english.html"
        },
        {
          "id": "math",
          "name": "數學科 (含非選擇題)",
          "icon": "📐",
          "questions": "選擇 25 題 / 非選 2 大題",
          "duration": "80 分鐘",
          "a_cutoff": "精熟等級",
          "exam_pdf": "https://drive.google.com/file/d/1c2AGC67Bq344EdGSZkO9SZhrY50hHTJx/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/175hz0lHG4GTDNxYet9lrRDu0lmC_G08o/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1diphWMmFmHVSsLzkX8hvMgTHfbtfvc5f?usp=drive_link",
          "handout_html": "exams/114/handouts/math.html"
        },
        {
          "id": "nature",
          "name": "自然科 (理化/地科/生物)",
          "icon": "🔬",
          "questions": "單選 50 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 43 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/18_lHom7zYhyOoMvxHt4hKJS_CynFOoZ1/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/175hz0lHG4GTDNxYet9lrRDu0lmC_G08o/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1diphWMmFmHVSsLzkX8hvMgTHfbtfvc5f?usp=drive_link",
          "cutoffs": {
            "A++": "48-50 題",
            "A+": "46-47 題",
            "A": "43-45 題",
            "B++": "36-42 題",
            "B+": "29-35 題",
            "B": "18-28 題",
            "C": "0-17 題"
          },
          "handout_html": "exams/114/handouts/nature.html"
        },
        {
          "id": "society",
          "name": "社會科 (歷史/地理/公民)",
          "icon": "🌏",
          "questions": "單選 54 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 48 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1vFl3qctoBXYcCtWbAqKUqhekIMgV6q-m/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/175hz0lHG4GTDNxYet9lrRDu0lmC_G08o/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1diphWMmFmHVSsLzkX8hvMgTHfbtfvc5f?usp=drive_link",
          "cutoffs": {
            "A++": "52-54 題",
            "A+": "51 題",
            "A": "48-50 題",
            "B++": "41-47 題",
            "B+": "35-40 題",
            "B": "21-34 題",
            "C": "0-20 題"
          },
          "handout_html": "exams/114/handouts/society.html"
        },
        {
          "id": "writing",
          "name": "寫作測驗",
          "icon": "✍️",
          "questions": "引導寫作 1 題",
          "duration": "50 分鐘",
          "a_cutoff": "5-6 級分",
          "exam_pdf": "https://drive.google.com/file/d/15yGt7NgV0OsYTP8LdYF7BCntfTjZwQ7q/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/11HW_piDqYm9Gq6qo-BSONsxZ-jgTri4h/view?usp=drive_link",
          "sample1_pdf": "https://drive.google.com/file/d/12qsAjT9hZmLlUVlyIVuWXBVh2EwN_dNn/view?usp=drive_link",
          "sample2_pdf": "https://drive.google.com/file/d/1-dF82RWJZmPur8ZS_H2FTZ94KEHFc5R5/view?usp=drive_link",
          "handout_html": "exams/114/handouts/writing.html"
        }
      ],
      "stats_docs": [
        {
          "title": "114年各科能力等級加標示與答對題數對照表",
          "file": "https://drive.google.com/file/d/1ath-dpjr8pS9qG9MBgkmCrhjcGN_SRqX/view?usp=drive_link",
          "tag": "核心標準",
          "desc": "各科 A++、A+、A、B++、B+、B、C 答對題數與加權級距切點"
        },
        {
          "title": "114年各科等級加標示人數百分比統計表",
          "file": "https://drive.google.com/file/d/1HRUm5-qi-DR6FO5ofUQsEgKvlBOtyW0w/view?usp=drive_link",
          "tag": "常態分佈",
          "desc": "全國考生在各科目精熟、基礎、待加強等級人數與累計百分比"
        },
        {
          "title": "114年各科各題通過率統計表",
          "file": "https://drive.google.com/file/d/1hwzaBmzmD0sYPw4q1KVCBW6Vq5OviriH/view?usp=drive_link",
          "tag": "難度指標",
          "desc": "國英數自社全卷每一道題目的全國平均答對率（通過率P值）"
        },
        {
          "title": "114年各科各題鑑別度統計表",
          "file": "https://drive.google.com/file/d/1deYp06C-xErJpmPGVHJ6T7hptfEkkJ70/view?usp=drive_link",
          "tag": "鑑別指標",
          "desc": "高分組與低分組答對率差值（鑑別度D值），掌握衝A關鍵題"
        },
        {
          "title": "114年各科計分與閱卷結果說明",
          "file": "https://drive.google.com/file/d/1YMlxyY9RhJj4GnqiKzigwRXBGf3kSV6F/view?usp=drive_link",
          "tag": "官方發布",
          "desc": "心測中心官方計分原則、英語聽閱讀加權與數學非選計分辦法"
        },
        {
          "title": "114年各等級類別暨寫作測驗級分人數百分比",
          "file": "https://drive.google.com/file/d/1rlvHxakydc-EqMAaUS4PY0LOa9UdkKPj/view?usp=drive_link",
          "tag": "交叉分析",
          "desc": "各能力等級考生在寫作測驗 1~6 級分的分佈交叉比對"
        },
        {
          "title": "114年寫作測驗各級分人數百分比統計表",
          "file": "https://drive.google.com/file/d/1h6Z-vm-3R3_oq7Lg3KNpqZjQyiDp7KPw/view?usp=drive_link",
          "tag": "寫作大數據",
          "desc": "全國考生寫作測驗 6 級分、5 級分至 1 級分人數累計百分比"
        },
        {
          "title": "114年數學非選擇題各級分人數百分比統計表",
          "file": "https://drive.google.com/file/d/1NMloL9VhJa-5VOuiEt7mHw9i4uBnJza8/view?usp=drive_link",
          "tag": "數學非選",
          "desc": "數學非選第一題與第二題 3分、2分、1分、0分的全國得分率分佈"
        },
        {
          "title": "114年試題疑義新聞稿暨釋覆內容",
          "file": "https://cap.rcpet.edu.tw/114doubt.html",
          "tag": "試題爭點",
          "desc": "各界針對 114 試題疑義申訴之官方正式釋復報告與題意定案"
        },
        {
          "title": "114年國中教育會考各科試題分析（全套資料夾）",
          "file": "https://drive.google.com/drive/folders/1diphWMmFmHVSsLzkX8hvMgTHfbtfvc5f?usp=drive_link",
          "tag": "深度分析",
          "desc": "心測中心研究員針對各科命題思維、學生答題迷思概念之專題報告"
        },
        {
          "title": "114年國中教育會考試題說明與注意事項",
          "file": "https://drive.google.com/file/d/11HW_piDqYm9Gq6qo-BSONsxZ-jgTri4h/view?usp=drive_link",
          "tag": "簡章規範",
          "desc": "會考各科題本說明、答題規範與非選擇題作答注意事項"
        }
      ],
      "has_handouts": true
    },
    {
      "year": 113,
      "label": "113 年國中教育會考",
      "tag": "歷屆試題",
      "featured": false,
      "description": "收錄 113 年心測中心官方試卷、答案與各題分析直連，以及等級對照標準。",
      "subjects": [
        {
          "id": "chinese",
          "name": "國文科",
          "icon": "📖",
          "questions": "單選 42 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 37 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1Xr5AwMNQipYZblCEbZadyBvLVcT_8XSv/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1cWlogP9FBRX1eD5kjgVDP2_6f8VCLSB4/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1f39LUoFXo4ygPCH3alu5j80K4TSpqsfl?usp=drive_link",
          "cutoffs": {
            "A++": "40-42 題",
            "A+": "39 題",
            "A": "37-38 題",
            "B++": "33-36 題",
            "B+": "30-32 題",
            "B": "18-29 題",
            "C": "0-17 題"
          },
          "handout_html": "exams/113/handouts/chinese.html"
        },
        {
          "id": "english",
          "name": "英語科 (閱讀與聽力)",
          "icon": "🎧",
          "questions": "閱讀 43 題 / 聽力 21 題",
          "duration": "閱讀 60 分鐘 / 聽力 25 分鐘",
          "a_cutoff": "精熟等級",
          "exam_pdf": "https://drive.google.com/file/d/1ZU8SG-4jdV1DGvPzpgzoi_hhRiD4NT3S/view?usp=drive_link",
          "listening_pdf": "https://drive.google.com/file/d/1iAZySLpGHqKdwyIlriM58ve8vW9aMV0Q/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1cWlogP9FBRX1eD5kjgVDP2_6f8VCLSB4/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1f39LUoFXo4ygPCH3alu5j80K4TSpqsfl?usp=drive_link",
          "handout_html": "exams/113/handouts/english.html"
        },
        {
          "id": "math",
          "name": "數學科 (含非選擇題)",
          "icon": "📐",
          "questions": "選擇 25 題 / 非選 2 大題",
          "duration": "80 分鐘",
          "a_cutoff": "精熟等級",
          "exam_pdf": "https://drive.google.com/file/d/1MXfrOI_4KyxF6A-2NNd_J_eIuo3Epa46/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1cWlogP9FBRX1eD5kjgVDP2_6f8VCLSB4/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1f39LUoFXo4ygPCH3alu5j80K4TSpqsfl?usp=drive_link",
          "handout_html": "exams/113/handouts/math.html"
        },
        {
          "id": "nature",
          "name": "自然科 (理化/地科/生物)",
          "icon": "🔬",
          "questions": "單選 50 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 44 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1lO1_3Iq62BmTHR8m29or7I8VtS8qZdDR/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1cWlogP9FBRX1eD5kjgVDP2_6f8VCLSB4/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1f39LUoFXo4ygPCH3alu5j80K4TSpqsfl?usp=drive_link",
          "cutoffs": {
            "A++": "48-50 題",
            "A+": "47 題",
            "A": "44-46 題",
            "B++": "37-43 題",
            "B+": "30-36 題",
            "B": "19-29 題",
            "C": "0-18 題"
          },
          "handout_html": "exams/113/handouts/nature.html"
        },
        {
          "id": "society",
          "name": "社會科 (歷史/地理/公民)",
          "icon": "🌏",
          "questions": "單選 54 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 48 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1NJYibw-N2mHZP5lL8-rOhirWv_ZFQNiz/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1cWlogP9FBRX1eD5kjgVDP2_6f8VCLSB4/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1f39LUoFXo4ygPCH3alu5j80K4TSpqsfl?usp=drive_link",
          "cutoffs": {
            "A++": "52-54 題",
            "A+": "50-51 題",
            "A": "48-49 題",
            "B++": "42-47 題",
            "B+": "36-41 題",
            "B": "21-35 題",
            "C": "0-20 題"
          },
          "handout_html": "exams/113/handouts/society.html"
        },
        {
          "id": "writing",
          "name": "寫作測驗",
          "icon": "✍️",
          "questions": "引導寫作 1 題",
          "duration": "50 分鐘",
          "a_cutoff": "5-6 級分",
          "exam_pdf": "https://drive.google.com/file/d/1fhW7ywN8LoIGGroAMQS5JzqCStKlY2Ux/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1YzrMP9JN6st0fcL5Vg_D0J75wUSBHOpW/view?usp=drive_link",
          "sample1_pdf": "https://drive.google.com/file/d/1K7Z2yQ9s-UpgoYSuOKhxnTvv9TlFwwFO/view?usp=drive_link",
          "sample2_pdf": "https://drive.google.com/file/d/1RX4DlMGGUTXRUBIwueC4LGo6p7Lox4iN/view?usp=drive_link",
          "handout_html": "exams/113/handouts/writing.html"
        }
      ],
      "stats_docs": [
        {
          "title": "113年各科能力等級加標示與答對題數對照表",
          "file": "https://drive.google.com/file/d/1t0f7uXr1iunZ7wPXCwhsiKhF9Rflr7tE/view?usp=drive_link",
          "tag": "核心標準",
          "desc": "各科 A++、A+、A、B++、B+、B、C 答對題數與加權級距切點"
        },
        {
          "title": "113年各科等級加標示人數百分比統計表",
          "file": "https://drive.google.com/file/d/1psTPcUQ_BpJbIFvPV7Hj4iaQYZJibrt7/view?usp=drive_link",
          "tag": "常態分佈",
          "desc": "全國考生在各科目精熟、基礎、待加強等級人數與累計百分比"
        },
        {
          "title": "113年各科各題通過率統計表",
          "file": "https://drive.google.com/file/d/1NpFiGL8A6KVR-Hyn_M7u1JhvXNOTqPOr/view?usp=drive_link",
          "tag": "難度指標",
          "desc": "國英數自社全卷每一道題目的全國平均答對率（通過率P值）"
        },
        {
          "title": "113年各科各題鑑別度統計表",
          "file": "https://drive.google.com/file/d/1YOdEP_E1_m2AdpsFk5RnPhDndDrGJ--r/view?usp=drive_link",
          "tag": "鑑別指標",
          "desc": "高分組與低分組答對率差值（鑑別度D值），掌握衝A關鍵題"
        },
        {
          "title": "113年各科計分與閱卷結果說明",
          "file": "https://drive.google.com/file/d/11D_cR5mCsiAgIvCXCN-k7N6pYhNrHi51/view?usp=drive_link",
          "tag": "官方發布",
          "desc": "心測中心官方計分原則、英語聽閱讀加權與數學非選計分辦法"
        },
        {
          "title": "113年各等級類別暨寫作測驗級分人數百分比",
          "file": "https://drive.google.com/file/d/1A_N0778O5ldSG6BztwvjgBFFg2i0RR0F/view?usp=drive_link",
          "tag": "交叉分析",
          "desc": "各能力等級考生在寫作測驗 1~6 級分的分佈交叉比對"
        },
        {
          "title": "113年寫作測驗各級分人數百分比統計表",
          "file": "https://drive.google.com/file/d/1Ot7Uvd1zNc7_WulyvarzGT9JOr9Apx8l/view?usp=drive_link",
          "tag": "寫作大數據",
          "desc": "全國考生寫作測驗 6 級分、5 級分至 1 級分人數累計百分比"
        },
        {
          "title": "113年數學非選擇題各級分人數百分比統計表",
          "file": "https://drive.google.com/file/d/1QG4efOK4_M7hhm_UDpjh1JU-6ZfT77D5/view?usp=drive_link",
          "tag": "數學非選",
          "desc": "數學非選第一題與第二題 3分、2分、1分、0分的全國得分率分佈"
        },
        {
          "title": "113年試題疑義新聞稿暨釋覆內容",
          "file": "https://cap.rcpet.edu.tw/113doubt.html",
          "tag": "試題爭點",
          "desc": "各界針對 113 試題疑義申訴之官方正式釋復報告與題意定案"
        },
        {
          "title": "113年國中教育會考各科試題分析（全套資料夾）",
          "file": "https://drive.google.com/drive/folders/1f39LUoFXo4ygPCH3alu5j80K4TSpqsfl?usp=drive_link",
          "tag": "深度分析",
          "desc": "心測中心研究員針對各科命題思維、學生答題迷思概念之專題報告"
        },
        {
          "title": "113年國中教育會考試題說明與注意事項",
          "file": "https://drive.google.com/file/d/1YzrMP9JN6st0fcL5Vg_D0J75wUSBHOpW/view?usp=drive_link",
          "tag": "簡章規範",
          "desc": "會考各科題本說明、答題規範與非選擇題作答注意事項"
        }
      ],
      "has_handouts": true
    },
    {
      "year": 112,
      "label": "112 年國中教育會考",
      "tag": "正式試卷・深度解析",
      "featured": false,
      "description": "完整收錄 112 年國中教育會考全科目試題、官方標準解答、深度試題分析、5B衝A特訓講義及答對題數等級對照表。",
      "subjects": [
        {
          "id": "chinese",
          "name": "國文科",
          "icon": "📖",
          "questions": "單選 42 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 36 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1dy9SuFFJro5R8SOIZRbA8ytq2Ol-UnZ9/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1OT5r0que_0bXSy0kwLEOEJMssce2OnL0/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1Uz1SmwJkkYPGypJGTp9zp7uMPskNdHAE?usp=drive_link",
          "handout_html": "exams/112/handouts/chinese.html",
          "handout_title": "112 國文 5B衝A實戰講義",
          "cutoffs": {
            "A++": "40-42 題",
            "A+": "38-39 題",
            "A": "36-37 題",
            "B++": "32-35 題",
            "B+": "28-31 題",
            "B": "18-27 題",
            "C": "0-17 題"
          }
        },
        {
          "id": "english",
          "name": "英語科 (閱讀與聽力)",
          "icon": "🎧",
          "questions": "閱讀 43 題 / 聽力 21 題",
          "duration": "閱讀 60 分鐘 / 聽力 25 分鐘",
          "a_cutoff": "加權 90.70 分達 A",
          "exam_pdf": "https://drive.google.com/file/d/1SXbjT6B_F8eQh2GZEvB6KmgR0k2lDK8A/view?usp=drive_link",
          "listening_pdf": "https://drive.google.com/file/d/119yW4wSJXxczoMJqGihwXOsu94p8cmXU/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1OT5r0que_0bXSy0kwLEOEJMssce2OnL0/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1Uz1SmwJkkYPGypJGTp9zp7uMPskNdHAE?usp=drive_link",
          "handout_html": "exams/112/handouts/english.html",
          "handout_title": "112 英語 5B衝A實戰講義",
          "cutoffs": {
            "A++": "加權 98.14-100",
            "A+": "加權 96.23-98.13",
            "A": "加權 90.70-96.22",
            "B++": "加權 82.26-90.69",
            "B+": "加權 69.01-82.25",
            "B": "加權 38.43-69.00",
            "C": "加權 0-38.42"
          }
        },
        {
          "id": "math",
          "name": "數學科 (含非選題)",
          "icon": "📐",
          "questions": "選擇 25 題 / 非選 2 題",
          "duration": "80 分鐘",
          "a_cutoff": "加權 76.20 分達 A",
          "exam_pdf": "https://drive.google.com/file/d/1im3JF0E8d8RC__Z8MW9MQXCuonjPN3f_/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1OT5r0que_0bXSy0kwLEOEJMssce2OnL0/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1Uz1SmwJkkYPGypJGTp9zp7uMPskNdHAE?usp=drive_link",
          "handout_html": "exams/112/handouts/math.html",
          "handout_title": "112 數學 5B衝A實戰講義",
          "cutoffs": {
            "A++": "加權 91.60-100",
            "A+": "加權 85.70-91.59",
            "A": "加權 76.20-85.69",
            "B++": "加權 66.20-76.19",
            "B+": "加權 56.90-66.19",
            "B": "加權 38.80-56.89",
            "C": "加權 0-38.79"
          }
        },
        {
          "id": "nature",
          "name": "自然科",
          "icon": "🔬",
          "questions": "單選 50 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 44 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1Bo87vJFakmGzyUqqjHzTCF-fv75DFgx_/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1OT5r0que_0bXSy0kwLEOEJMssce2OnL0/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1Uz1SmwJkkYPGypJGTp9zp7uMPskNdHAE?usp=drive_link",
          "handout_html": "exams/112/handouts/nature.html",
          "handout_title": "112 自然 5B衝A實戰講義",
          "cutoffs": {
            "A++": "48-50 題",
            "A+": "47 題",
            "A": "44-46 題",
            "B++": "37-43 題",
            "B+": "30-36 題",
            "B": "19-29 題",
            "C": "0-18 題"
          }
        },
        {
          "id": "society",
          "name": "社會科",
          "icon": "🌏",
          "questions": "單選 54 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 47 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1vIVX90btDzk3XnNVfSQv0wRTw2A6omjL/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1OT5r0que_0bXSy0kwLEOEJMssce2OnL0/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1Uz1SmwJkkYPGypJGTp9zp7uMPskNdHAE?usp=drive_link",
          "handout_html": "exams/112/handouts/society.html",
          "handout_title": "112 社會 5B衝A實戰講義",
          "cutoffs": {
            "A++": "51-54 題",
            "A+": "50 題",
            "A": "47-49 題",
            "B++": "41-46 題",
            "B+": "34-40 題",
            "B": "21-33 題",
            "C": "0-20 題"
          }
        },
        {
          "id": "writing",
          "name": "寫作測驗",
          "icon": "✍️",
          "questions": "引導寫作 1 題",
          "duration": "50 分鐘",
          "a_cutoff": "5～6 級分達精熟",
          "exam_pdf": "https://drive.google.com/file/d/1EUA2uOUApWOF-rrB91umx2Hi887KQ_3t/view?usp=drive_link",
          "sample_pdf": "https://drive.google.com/file/d/1x2RjSG5jR9ahz9GJgjX78oHaGdphhhmY/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1Uz1SmwJkkYPGypJGTp9zp7uMPskNdHAE?usp=drive_link",
          "handout_html": "exams/112/handouts/writing.html",
          "handout_title": "112 寫作 衝5-6級分實戰講義",
          "cutoffs": {
            "A++": "6 級分",
            "A+": "5 級分",
            "A": "5 級分",
            "B++": "4 級分",
            "B+": "4 級分",
            "B": "3 級分",
            "C": "0-2 級分"
          }
        }
      ],
      "stats_docs": [
        {
          "title": "112年各科能力等級加標示與答對題數對照表",
          "file": "https://drive.google.com/file/d/1Wbv2cPa-QvByEe99596jmxy6nGCwAYHu/view?usp=drive_link",
          "tag": "核心標準",
          "desc": "各科 A++、A+、A、B++、B+、B、C 答對題數與加權級距切點"
        },
        {
          "title": "112年各科等級加標示人數百分比統計表",
          "file": "https://drive.google.com/file/d/1s6EcMmbFWK37VdyUk3t-xwayVkStCrc0/view?usp=drive_link",
          "tag": "常態分佈",
          "desc": "全國考生在各科目精熟、基礎、待加強等級人數與累計百分比"
        },
        {
          "title": "112年各科各題通過率統計表",
          "file": "https://drive.google.com/file/d/16ysF1jgYwJ_1gmt0veV1Z8398BmIQbjJ/view?usp=drive_link",
          "tag": "難度指標",
          "desc": "國英數自社全卷每一道題目的全國平均答對率（通過率P值）"
        },
        {
          "title": "112年各科各題鑑別度統計表",
          "file": "https://drive.google.com/file/d/1ws0EYWDpWsWBAS5w1YB4wUZWwIsWEVJh/view?usp=drive_link",
          "tag": "鑑別指標",
          "desc": "高分組與低分組答對率差值（鑑別度D值），掌握衝A關鍵題"
        },
        {
          "title": "112年各科計分與閱卷結果說明",
          "file": "https://drive.google.com/file/d/1RPmTPEFncfOrbO_akYsqxQstg8Z3E6xr/view?usp=drive_link",
          "tag": "官方發布",
          "desc": "心測中心官方計分原則、英語聽閱讀加權與數學非選計分辦法"
        },
        {
          "title": "112年各等級類別暨寫作測驗級分人數百分比",
          "file": "https://drive.google.com/file/d/1oGoPEX1HtR0FBCT8q2OmYgnXM4myqlV2/view?usp=drive_link",
          "tag": "交叉分析",
          "desc": "各能力等級考生在寫作測驗 1~6 級分的分佈交叉比對"
        },
        {
          "title": "112年寫作測驗各級分人數百分比統計表",
          "file": "https://drive.google.com/file/d/1QXJdFkqx59CGKzfJ-uBzykkWOVTC3ubj/view?usp=drive_link",
          "tag": "寫作大數據",
          "desc": "全國考生寫作測驗 6 級分、5 級分至 1 級分人數累計百分比"
        },
        {
          "title": "112年數學非選擇題各級分人數百分比統計表",
          "file": "https://drive.google.com/file/d/1HnQFyHW_oCyDMENLmMFAsyQK5zIWWsSk/view?usp=drive_link",
          "tag": "數學非選",
          "desc": "數學非選第一題與第二題 3分、2分、1分、0分的全國得分率分佈"
        },
        {
          "title": "112年大陸考場各科等級加標示與答對題數對照表",
          "file": "https://drive.google.com/file/d/13IGS_C6G1BRZJUB07gU19bym9QJd9KJx/view?usp=drive_link",
          "tag": "對照標準",
          "desc": "112 年國中教育會考大陸考場各科答對題數與能力等級切點"
        },
        {
          "title": "112年國中教育會考各科試題分析（全套資料夾）",
          "file": "https://drive.google.com/drive/folders/1Uz1SmwJkkYPGypJGTp9zp7uMPskNdHAE?usp=drive_link",
          "tag": "深度分析",
          "desc": "心測中心研究員針對各科命題思維、學生答題迷思概念之專題報告"
        },
        {
          "title": "112年國中教育會考試題說明與注意事項",
          "file": "https://drive.google.com/file/d/1ryCrnCTkwWib6PTbw-PPHCcV7K3Tc2p4/view?usp=drive_link",
          "tag": "簡章規範",
          "desc": "會考各科題本說明、答題規範與非選擇題作答注意事項"
        }
      ]
    },
    {
      "year": 111,
      "label": "111 年國中教育會考",
      "tag": "108課綱首屆正式試卷",
      "featured": false,
      "description": "108 課綱首屆會考正式試卷！收錄國文、英語、數學、自然、社會與寫作測驗全套試卷、官方答案、試題分析與 5B 衝 A 實戰講義。",
      "subjects": [
        {
          "id": "chinese",
          "name": "國文科",
          "icon": "📖",
          "questions": "單選 42 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 36 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/174XqqVxF7_kIR7aqRaHpDe9m8-YJBFzY/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1IeMHI4BmTpC_2Oc1lQ1Qj6XWHDf9qwGd/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1QmkHPUZfsYAIYMJuyInVubvvZdi9r7XG?usp=drive_link",
          "handout_html": "exams/111/handouts/chinese.html",
          "handout_title": "111 國文 5B衝A實戰講義",
          "cutoffs": {
            "A++": "40-42 題",
            "A+": "38-39 題",
            "A": "36-37 題",
            "B++": "32-35 題",
            "B+": "28-31 題",
            "B": "18-27 題",
            "C": "0-17 題"
          }
        },
        {
          "id": "english",
          "name": "英語科 (閱讀與聽力)",
          "icon": "🎧",
          "questions": "閱讀 43 題 / 聽力 21 題",
          "duration": "閱讀 60 分鐘 / 聽力 25 分鐘",
          "a_cutoff": "加權 88.84 分達 A",
          "exam_pdf": "https://drive.google.com/file/d/1IyJBtIjySeyVAisE1YiCclYsSldQpHBf/view?usp=drive_link",
          "listening_pdf": "https://drive.google.com/file/d/1EVRfZmxfQQMTQ-2ksTmb1i5sozNM819a/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1IeMHI4BmTpC_2Oc1lQ1Qj6XWHDf9qwGd/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1QmkHPUZfsYAIYMJuyInVubvvZdi9r7XG?usp=drive_link",
          "handout_html": "exams/111/handouts/english.html",
          "handout_title": "111 英語 5B衝A實戰講義",
          "cutoffs": {
            "A++": "加權 96.28-100",
            "A+": "加權 93.47-96.27",
            "A": "加權 88.84-93.46",
            "B++": "加權 80.44-88.83",
            "B+": "加權 69.15-80.43",
            "B": "加權 38.43-69.14",
            "C": "加權 0-38.42"
          }
        },
        {
          "id": "math",
          "name": "數學科 (含非選題)",
          "icon": "📐",
          "questions": "選擇 25 題 / 非選 2 題",
          "duration": "80 分鐘",
          "a_cutoff": "加權 80.50 分達 A",
          "exam_pdf": "https://drive.google.com/file/d/15GDoX37pXdUsluIw79o2bkhgfiL1HxCG/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1IeMHI4BmTpC_2Oc1lQ1Qj6XWHDf9qwGd/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1QmkHPUZfsYAIYMJuyInVubvvZdi9r7XG?usp=drive_link",
          "handout_html": "exams/111/handouts/math.html",
          "handout_title": "111 數學 5B衝A實戰講義",
          "cutoffs": {
            "A++": "加權 96.60-100",
            "A+": "加權 89.80-96.59",
            "A": "加權 80.50-89.79",
            "B++": "加權 70.50-80.49",
            "B+": "加權 61.00-70.49",
            "B": "加權 39.70-60.99",
            "C": "加權 0-39.69"
          }
        },
        {
          "id": "nature",
          "name": "自然科",
          "icon": "🔬",
          "questions": "單選 50 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 43 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1OiQVdqtDQauNW_qwlCFTWLmcfBHuCjdm/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1IeMHI4BmTpC_2Oc1lQ1Qj6XWHDf9qwGd/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1QmkHPUZfsYAIYMJuyInVubvvZdi9r7XG?usp=drive_link",
          "handout_html": "exams/111/handouts/nature.html",
          "handout_title": "111 自然 5B衝A實戰講義",
          "cutoffs": {
            "A++": "47-50 題",
            "A+": "46 題",
            "A": "43-45 題",
            "B++": "36-42 題",
            "B+": "29-35 題",
            "B": "19-28 題",
            "C": "0-18 題"
          }
        },
        {
          "id": "society",
          "name": "社會科",
          "icon": "🌏",
          "questions": "單選 54 題",
          "duration": "70 分鐘",
          "a_cutoff": "答對 48 題達 A",
          "exam_pdf": "https://drive.google.com/file/d/1th-vb5HCBAhIv65OKXY646kHYbyggwQu/view?usp=drive_link",
          "answer_pdf": "https://drive.google.com/file/d/1IeMHI4BmTpC_2Oc1lQ1Qj6XWHDf9qwGd/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1QmkHPUZfsYAIYMJuyInVubvvZdi9r7XG?usp=drive_link",
          "handout_html": "exams/111/handouts/society.html",
          "handout_title": "111 社會 5B衝A實戰講義",
          "cutoffs": {
            "A++": "52-54 題",
            "A+": "50-51 題",
            "A": "48-49 題",
            "B++": "41-47 題",
            "B+": "35-40 題",
            "B": "22-34 題",
            "C": "0-21 題"
          }
        },
        {
          "id": "writing",
          "name": "寫作測驗",
          "icon": "✍️",
          "questions": "引導寫作 1 題",
          "duration": "50 分鐘",
          "a_cutoff": "5～6 級分達精熟",
          "exam_pdf": "https://drive.google.com/file/d/1AkgLsD9UNsfIhulaXSqMGLKdXoWWPT4P/view?usp=drive_link",
          "sample_pdf": "https://drive.google.com/file/d/1SXBUEWkZD4qAZpJaMtayd6oBkcx7Kl1L/view?usp=drive_link",
          "analysis_pdf": "https://drive.google.com/drive/folders/1QmkHPUZfsYAIYMJuyInVubvvZdi9r7XG?usp=drive_link",
          "handout_html": "exams/111/handouts/writing.html",
          "handout_title": "111 寫作 衝5-6級分實戰講義",
          "cutoffs": {
            "A++": "6 級分",
            "A+": "5 級分",
            "A": "5 級分",
            "B++": "4 級分",
            "B+": "4 級分",
            "B": "3 級分",
            "C": "0-2 級分"
          }
        }
      ],
      "stats_docs": [
        {
          "title": "111年各科能力等級加標示與答對題數對照表",
          "file": "https://drive.google.com/file/d/1JjoXzUIeHPDQt49WhtRNSK41fO2WyINs/view?usp=drive_link",
          "tag": "核心標準",
          "desc": "各科 A++、A+、A、B++、B+、B、C 答對題數與加權級距切點"
        },
        {
          "title": "111年各科等級加標示人數百分比統計表",
          "file": "https://drive.google.com/file/d/1fjJguHPKvqwZRQh4sA5j0JbYIR2kUxV4/view?usp=drive_link",
          "tag": "常態分佈",
          "desc": "全國考生在各科目精熟、基礎、待加強等級人數與累計百分比"
        },
        {
          "title": "111年各科各題通過率統計表",
          "file": "https://drive.google.com/file/d/1Pzu_Pw8vZGV074zemF0BQp59nJgQgEsO/view?usp=drive_link",
          "tag": "難度指標",
          "desc": "國英數自社全卷每一道題目的全國平均答對率（通過率P值）"
        },
        {
          "title": "111年各科各題鑑別度統計表",
          "file": "https://drive.google.com/file/d/1c6y7JJ4mpCDVF-h4e9yNneYCptrS59Zn/view?usp=drive_link",
          "tag": "鑑別指標",
          "desc": "高分組與低分組答對率差值（鑑別度D值），掌握衝A關鍵題"
        },
        {
          "title": "111年各科計分與閱卷結果說明",
          "file": "https://drive.google.com/file/d/1jUgFqlylHpq0IX2cf6JXl4TgEhJCgDfO/view?usp=drive_link",
          "tag": "官方發布",
          "desc": "心測中心官方計分原則、英語聽閱讀加權與數學非選計分辦法"
        },
        {
          "title": "111年各等級類別暨寫作測驗級分人數百分比",
          "file": "https://drive.google.com/file/d/1hTSjdXjUX3C9BaCbqACYMHYm5AxYXGrW/view?usp=drive_link",
          "tag": "交叉分析",
          "desc": "各能力等級考生在寫作測驗 1~6 級分的分佈交叉比對"
        },
        {
          "title": "111年寫作測驗各級分人數百分比統計表",
          "file": "https://drive.google.com/file/d/1D9Jh-ILVI_APi2vrpiKo7GPEWcbPYk-o/view?usp=drive_link",
          "tag": "寫作大數據",
          "desc": "全國考生寫作測驗 6 級分、5 級分至 1 級分人數累計百分比"
        },
        {
          "title": "111年數學非選擇題各級分人數百分比統計表",
          "file": "https://drive.google.com/file/d/1ZmeOx6OttYN832KUxbyKkhmlUz_i_1u2/view?usp=drive_link",
          "tag": "數學非選",
          "desc": "數學非選第一題與第二題 3分、2分、1分、0分的全國得分率分佈"
        },
        {
          "title": "111年補考各科等級加標示與答對題數對照表",
          "file": "https://drive.google.com/file/d/1GrZFOZqlCoQrwYx8Gemn_Jbs0lmL1fGD/view?usp=drive_link",
          "tag": "對照標準",
          "desc": "111 年國中教育會考補考各科答對題數與能力等級切點"
        },
        {
          "title": "111年國中教育會考各科試題分析（全套資料夾）",
          "file": "https://drive.google.com/drive/folders/1QmkHPUZfsYAIYMJuyInVubvvZdi9r7XG?usp=drive_link",
          "tag": "深度分析",
          "desc": "心測中心研究員針對各科命題思維、學生答題迷思概念之專題報告"
        },
        {
          "title": "111年國中教育會考試題說明與注意事項",
          "file": "https://drive.google.com/file/d/17TjMgVA4xXZYPlSPW9idgheMY9LR5agy/view?usp=drive_link",
          "tag": "簡章規範",
          "desc": "會考各科題本說明、答題規範與非選擇題作答注意事項"
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA;
}

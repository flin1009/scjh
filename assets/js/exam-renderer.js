// Exam Renderer: Data-driven generation of exam tabs, subject cards, and cutoff tables
(function () {
  let examData = null;
  let activeYear = window.DEFAULT_YEAR || 115;

  // Path prefix resolver (handles both root and subfolder calls)
  function getRelativePrefix() {
    const p = window.location.pathname;
    if (p.includes('/exams/') || p.includes('\\exams\\')) {
      return '../';
    }
    return './';
  }

  const prefix = getRelativePrefix();

  function resolveUrl(url) {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return prefix + url;
  }

  async function loadData() {
    try {
      const res = await fetch(`${prefix}data/exams.json`);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      examData = await res.json();
      initRenderer();
    } catch (err) {
      console.warn('Fetch failed (possibly local file:// protocol), using embedded fallback data.', err);
      if (window.EMBEDDED_EXAM_DATA) {
        examData = window.EMBEDDED_EXAM_DATA;
        initRenderer();
      }
    }
  }

  function initRenderer() {
    if (!examData || !examData.years) return;
    renderYearTabs();
    renderYearContent(activeYear);
  }

  // 1. Render Year Tabs
  function renderYearTabs() {
    const tabsContainer = document.getElementById('year-tabs-container');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';
    examData.years.forEach((item) => {
      const btn = document.createElement('button');
      btn.className = `year-tab ${item.year === activeYear ? 'active' : ''}`;
      btn.setAttribute('data-year', item.year);
      btn.innerHTML = `
        ${item.featured ? '⭐' : '📁'} ${item.year} 年
        ${item.tag ? `<span class="year-badge-pill">${item.tag}</span>` : ''}
      `;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.year-tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        activeYear = item.year;
        renderYearContent(activeYear);
      });
      tabsContainer.appendChild(btn);
    });
  }

  // 2. Render Content for Selected Year
  function renderYearContent(year) {
    const yearObj = examData.years.find(y => y.year === year);
    if (!yearObj) return;

    // Update Year Title & Desc
    const titleEl = document.getElementById('current-year-title');
    const descEl = document.getElementById('current-year-desc');
    if (titleEl) titleEl.textContent = yearObj.label;
    if (descEl) descEl.textContent = yearObj.description;

    // Render Subject Cards
    const gridEl = document.getElementById('exam-cards-grid');
    if (gridEl) {
      gridEl.innerHTML = '';
      yearObj.subjects.forEach(sub => {
        const card = document.createElement('div');
        card.className = 'exam-card';

        // Prepare Buttons HTML
        let buttonsHtml = `
          <div class="btn-group-row">
            ${sub.exam_pdf ? `<a href="${resolveUrl(sub.exam_pdf)}" target="_blank" rel="noopener" class="btn-resource btn-paper" title="開啓官方試題卷">📄 試題卷</a>` : ''}
            ${sub.listening_pdf ? `<a href="${resolveUrl(sub.listening_pdf)}" target="_blank" rel="noopener" class="btn-resource btn-paper" title="開啓聽力卷">🎧 聽力卷</a>` : ''}
            ${sub.answer_pdf ? `<a href="${resolveUrl(sub.answer_pdf)}" target="_blank" rel="noopener" class="btn-resource btn-ans" title="開啓官方參考答案">🔑 參考答案</a>` : ''}
          </div>
        `;

        if (sub.analysis_pdf || sub.handout_html) {
          buttonsHtml += `
            <div class="btn-group-row" style="margin-top: 6px;">
              ${sub.analysis_pdf ? `<a href="${resolveUrl(sub.analysis_pdf)}" target="_blank" rel="noopener" class="btn-resource btn-analysis" title="開啓試題分析報告">💡 試題分析</a>` : ''}
              ${sub.handout_html ? `<a href="${resolveUrl(sub.handout_html)}" target="_blank" class="btn-resource btn-handout" title="開啓線上 5B 衝 A 特訓講義">🌟 5B衝A講義</a>` : ''}
            </div>
          `;
        }

        // Writing Samples
        if (sub.sample1_pdf || sub.sample2_pdf) {
          buttonsHtml += `
            <div class="btn-group-row" style="margin-top: 6px;">
              ${sub.sample1_pdf ? `<a href="${resolveUrl(sub.sample1_pdf)}" target="_blank" rel="noopener" class="btn-resource btn-analysis">📝 六級分樣卷</a>` : ''}
              ${sub.sample2_pdf ? `<a href="${resolveUrl(sub.sample2_pdf)}" target="_blank" rel="noopener" class="btn-resource btn-analysis">📝 五級分樣卷</a>` : ''}
            </div>
          `;
        }

        card.innerHTML = `
          <div>
            <div class="exam-card-header">
              <div class="exam-subject-info">
                <div class="exam-icon">${sub.icon || '📝'}</div>
                <div>
                  <h3 class="exam-title">${sub.name}</h3>
                  <div class="exam-meta">${sub.questions}・${sub.duration}</div>
                </div>
              </div>
              ${sub.a_cutoff ? `<div class="exam-cutoff-badge">${sub.a_cutoff}</div>` : ''}
            </div>
          </div>
          <div class="exam-actions">
            ${buttonsHtml}
          </div>
        `;
        gridEl.appendChild(card);
      });
    }

    // Render Stats Docs
    const statsContainer = document.getElementById('year-stats-docs');
    if (statsContainer) {
      statsContainer.innerHTML = '';
      if (yearObj.stats_docs && yearObj.stats_docs.length > 0) {
        yearObj.stats_docs.forEach(doc => {
          const item = document.createElement('a');
          item.className = 'download-item';
          item.href = resolveUrl(doc.file);
          item.target = '_blank';
          item.rel = 'noopener';
          item.innerHTML = `
            <div class="download-info">
              <h5>📊 ${doc.title}</h5>
              <p>官方公布資料・點擊於新視窗開啟</p>
            </div>
            <div class="btn-icon-download">↗</div>
          `;
          statsContainer.appendChild(item);
        });
      }
    }

    // Render Cutoff Table if element exists
    renderCutoffTable(yearObj);
  }

  // 3. Render Cutoff Table for Selected Year
  function renderCutoffTable(yearObj) {
    const tableBody = document.getElementById('cutoff-table-tbody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    yearObj.subjects.forEach(sub => {
      if (!sub.cutoffs) return;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight: 700; text-align: left; padding-left: 18px;">
          ${sub.icon} ${sub.name}
        </td>
        <td><span class="grade-badge grade-app">${sub.cutoffs['A++'] || '-'}</span></td>
        <td><span class="grade-badge grade-ap">${sub.cutoffs['A+'] || '-'}</span></td>
        <td><span class="grade-badge grade-a">${sub.cutoffs['A'] || '-'}</span></td>
        <td><span class="grade-badge grade-bpp">${sub.cutoffs['B++'] || '-'}</span></td>
        <td><span class="grade-badge grade-bp">${sub.cutoffs['B+'] || '-'}</span></td>
        <td><span class="grade-badge grade-b">${sub.cutoffs['B'] || '-'}</span></td>
        <td><span class="grade-badge grade-c">${sub.cutoffs['C'] || '-'}</span></td>
      `;
      tableBody.appendChild(tr);
    });
  }

  // Auto initialize on DOM ready
  document.addEventListener('DOMContentLoaded', loadData);
})();

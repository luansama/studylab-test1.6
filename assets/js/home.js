(() => {
  const experiments = window.STUDY_LAB_EXPERIMENTS || [];
  const state = { subject: 'all', grade: 'all', query: '' };
  const list = document.getElementById('experiment-list-items');
  const empty = document.getElementById('empty-state');
  const search = document.getElementById('search-input');
  const count = document.getElementById('result-count');
  const caption = document.getElementById('list-caption');
  const subjectNames = {
    all: 'Tất cả thí nghiệm', physics: 'KHTN (Vật lí)', chemistry: 'KHTN (Hóa học)',
    biology: 'KHTN (Sinh học)', technology: 'Công nghệ'
  };

  function normalize(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
  }

  function filteredExperiments() {
    const q = normalize(state.query.trim());
    return experiments.filter(item => {
      const subjectMatch = state.subject === 'all' || item.subject === state.subject;
      const gradeMatch = state.grade === 'all' || String(item.grade) === state.grade;
      const searchable = normalize([item.title, item.subjectLabel, item.description, item.keywords, `lớp ${item.grade}`, `bài ${item.lesson}`].join(' '));
      return subjectMatch && gradeMatch && (!q || searchable.includes(q));
    });
  }

  function render() {
    const items = filteredExperiments();
    count.textContent = String(items.length);
    caption.textContent = state.subject === 'all' ? 'Danh sách thí nghiệm' : subjectNames[state.subject];
    if (state.grade !== 'all') caption.textContent += ` · Lớp ${state.grade}`;
    if (state.query.trim()) caption.textContent += ` · Từ khóa “${state.query.trim()}”`;

    list.innerHTML = items.map((item, index) => `
      <a class="experiment-item" href="${item.href}" style="--item-index:${index}" aria-label="Mở thí nghiệm ${item.title}, lớp ${item.grade}, bài ${item.lesson}">
        <span class="experiment-icon ${item.tone}" aria-hidden="true">${item.icon}</span>
        <span class="experiment-main">
          <span class="experiment-title">${escapeHtml(item.title)}</span>
          <span class="experiment-description">${escapeHtml(item.description)}</span>
          <span class="experiment-meta"><span class="subject-tag">${escapeHtml(item.subjectLabel)}</span><span class="grade-tag">Lớp ${item.grade}</span><span class="lesson-tag">Bài ${item.lesson}</span></span>
        </span>
        <span class="item-arrow" aria-hidden="true">↗</span>
      </a>`).join('');

    empty.hidden = items.length !== 0;
    list.hidden = items.length === 0;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
  }

  function setActive(group, attribute, value) {
    group.querySelectorAll('button').forEach(button => {
      const active = button.dataset[attribute] === value;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  const subjectFilters = document.getElementById('subject-filters');
  subjectFilters.addEventListener('click', event => {
    const button = event.target.closest('button[data-subject]');
    if (!button) return;
    state.subject = button.dataset.subject;
    setActive(subjectFilters, 'subject', state.subject);
    render();
  });

  const gradeFilters = document.getElementById('grade-filters');
  gradeFilters.addEventListener('click', event => {
    const button = event.target.closest('button[data-grade]');
    if (!button) return;
    state.grade = button.dataset.grade;
    setActive(gradeFilters, 'grade', state.grade);
    render();
  });


  search.addEventListener('input', () => { state.query = search.value; render(); });

  function resetFilters() {
    state.subject = 'all'; state.grade = 'all'; state.query = '';
    search.value = '';
    setActive(subjectFilters, 'subject', 'all');
    setActive(gradeFilters, 'grade', 'all');
    render();
  }
  document.getElementById('clear-filters').addEventListener('click', resetFilters);
  document.getElementById('empty-reset').addEventListener('click', resetFilters);
  document.getElementById('year').textContent = new Date().getFullYear();
  render();
})();

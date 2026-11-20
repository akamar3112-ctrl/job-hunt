/* Job Application Tracker — vanilla JS, localStorage, no dependencies. */

const STORAGE_KEY = 'jobTracker.applications.v1';
const STATUSES = ['Applied', 'Interview', 'Offer', 'Rejected'];

let apps = load();
let currentFilter = 'All';
let searchTerm = '';

const els = {
  form: document.getElementById('addForm'),
  company: document.getElementById('company'),
  role: document.getElementById('role'),
  url: document.getElementById('url'),
  status: document.getElementById('status'),
  notes: document.getElementById('notes'),
  list: document.getElementById('list'),
  empty: document.getElementById('empty'),
  stats: document.getElementById('stats'),
  filters: document.getElementById('filters'),
  search: document.getElementById('search'),
  exportBtn: document.getElementById('exportBtn'),
  toast: document.getElementById('toast'),
  submitBtn: document.querySelector('#addForm button[type="submit"]'),
};

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

function toast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => els.toast.classList.remove('show'), 2200);
}

function renderStats() {
  const counts = { All: apps.length, Applied: 0, Interview: 0, Offer: 0, Rejected: 0 };
  apps.forEach((a) => { if (counts[a.status] !== undefined) counts[a.status]++; });
  els.stats.innerHTML = `
    <div class="stat total"><b>${counts.All}</b><span>Total applications</span></div>
    <div class="stat"><b>${counts.Applied}</b><span>Applied</span></div>
    <div class="stat interview"><b>${counts.Interview}</b><span>In interview</span></div>
    <div class="stat offer"><b>${counts.Offer}</b><span>Offers 🎉</span></div>
    <div class="stat rejected"><b>${counts.Rejected}</b><span>Rejected</span></div>`;
}

function visibleApps() {
  return apps
    .filter((a) => currentFilter === 'All' || a.status === currentFilter)
    .filter((a) => {
      if (!searchTerm) return true;
      const hay = `${a.company} ${a.role} ${a.notes || ''}`.toLowerCase();
      return hay.includes(searchTerm);
    })
    .sort((a, b) => b.createdAt - a.createdAt);
}

function render() {
  renderStats();
  const items = visibleApps();
  els.empty.hidden = items.length > 0;

  els.list.innerHTML = items.map((a) => {
    const safeUrl = /^https?:\/\//i.test(a.url || '') ? a.url : '';
    const title = safeUrl
      ? `<a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener">${escapeHtml(a.role)} ↗</a>`
      : escapeHtml(a.role);
    return `
      <article class="item" data-status="${escapeHtml(a.status)}" data-id="${a.id}">
        <div class="item-main">
          <h3>${title}</h3>
          <div class="company">${escapeHtml(a.company)} · ${escapeHtml(new Date(a.createdAt).toLocaleDateString())}</div>
          ${a.notes ? `<div class="notes">${escapeHtml(a.notes)}</div>` : ''}
        </div>
        <div class="item-meta">
          <span class="badge">${escapeHtml(a.status)}</span>
          <button class="icon-btn edit" data-action="cycle" title="Advance status">🔄</button>
          <button class="icon-btn" data-action="delete" title="Delete" aria-label="Delete">🗑</button>
        </div>
      </article>`;
  }).join('');
}

// Add
els.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const company = els.company.value.trim();
  const role = els.role.value.trim();
  if (!company || !role) return;

  apps.push({
    id: uid(),
    company,
    role,
    url: els.url.value.trim(),
    status: els.status.value,
    notes: els.notes.value.trim(),
    createdAt: Date.now(),
  });
  save();
  render();
  els.form.reset();
  toast('Application added ✓');
  els.company.focus();
});

// Edit (cycle status) + delete via event delegation
els.list.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const id = btn.closest('.item').dataset.id;
  const app = apps.find((a) => a.id === id);
  if (!app) return;

  if (btn.dataset.action === 'delete') {
    if (confirm(`Delete "${app.role}" at ${app.company}?`)) {
      apps = apps.filter((a) => a.id !== id);
      save();
      render();
      toast('Deleted');
    }
  } else if (btn.dataset.action === 'cycle') {
    const next = (STATUSES.indexOf(app.status) + 1) % STATUSES.length;
    app.status = STATUSES[next];
    save();
    render();
    toast(`Status → ${app.status}`);
  }
});

// Filters
els.filters.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  currentFilter = chip.dataset.filter;
  els.filters.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c === chip));
  render();
});

// Search
els.search.addEventListener('input', (e) => {
  searchTerm = e.target.value.trim().toLowerCase();
  render();
});

// CSV export
els.exportBtn.addEventListener('click', () => {
  if (!apps.length) { toast('Nothing to export'); return; }
  const header = ['Company', 'Role', 'Status', 'URL', 'Notes', 'Date'];
  const quote = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = apps.map((a) => [
    quote(a.company), quote(a.role), quote(a.status), quote(a.url),
    quote(a.notes), quote(new Date(a.createdAt).toLocaleDateString()),
  ].join(','));
  const blob = new Blob(['\ufeff' + header.join(',') + '\n' + rows.join('\n')], { type: 'text/csv;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `job-applications-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
  toast('CSV downloaded');
});

render();

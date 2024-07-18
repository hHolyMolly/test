const body = window.document.body;

const langParent = body.querySelector('[data-lang="parent"]');
if (langParent) {
  const toggle = langParent.querySelector('[data-lang="toggle"]');
  const dropdown = langParent.querySelector('[data-lang="dropdown"]');

  if (toggle && dropdown) {
    toggle.addEventListener('click', () => {
      dropdown.classList.add('_active');
    });

    body.addEventListener('click', (e) => {
      const { target } = e;

      if (dropdown.classList.contains('_active') && !target.closest('[data-lang="dropdown"], [data-lang="toggle"]')) {
        body.querySelector('[data-lang="dropdown"]').classList.remove('_active');
      }
    });
  }
}

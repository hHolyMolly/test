const tabs = document.querySelectorAll('[data-tab-wrap]');

tabs.forEach((tab) => {
  const buttons = tab.querySelectorAll('[data-tab-button]');
  const contents = tab.querySelectorAll('[data-tab-content]');

  buttons.forEach((target) => {
    target.addEventListener('click', () => {
      const targetName = target.getAttribute('data-tab-button');

      contents.forEach((content) => {
        const contentName = content.getAttribute('data-tab-content');

        buttons.forEach((button) => {
          button.classList.remove('_active');
        });

        target.classList.add('_active');

        if (targetName === contentName) {
          content.classList.add('_active');
        } else {
          content.classList.remove('_active');
        }
      });
    });
  });
});

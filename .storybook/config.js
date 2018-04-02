import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  header: false,
  inline: true,
});

function loadStories() {
  require('../storybooks/index');
}

configure(loadStories, module);

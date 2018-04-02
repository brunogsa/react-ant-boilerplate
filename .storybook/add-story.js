import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { withInfo } from '@storybook/addon-info';

module.exports = function addStory({ section, name, reactFunctionComponent }) {
  storiesOf(section, module)
    .addDecorator(
      StoryRouter(),
    )

    .add(
      name,
      withInfo()(reactFunctionComponent),
    )
  ;
};

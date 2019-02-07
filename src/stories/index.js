import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { CssReset, GlobalCss, Themes } from '../style';
import { Button, Container, Header } from '../components';

addDecorator(withThemesProvider([Themes.default]))
addDecorator(storyFn => (
  <div>
    <CssReset />
    <GlobalCss />
    { storyFn() }
  </div>
));

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Container', module)
  .add('default', () => <Container>Hello I'm a Container</Container>)

storiesOf('Header', module)
  .add('default', () => <Header/>);

/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import PlayToggle from '../berea-innovative-staging/work-in-progresss/components/video/react-components/PlayToggle';
const PlayToggleSource = require('!!raw!../berea-innovative-staging/work-in-progresss/components/video/react-components/PlayToggle');

export default class PlayTogglePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="PlayToggle" />
        <h3>PlayToggle</h3>
        <p>
        A button component to toggle between play and pause.
        </p>
        <div className="docs-example">
          <PlayToggleExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlayToggleExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`PlayToggle.propTypes = {

// no customizable properties,

}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

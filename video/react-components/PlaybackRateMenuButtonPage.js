/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import PlaybackRateMenuButton from '../berea-innovative-staging/work-in-progresss/components/video/react-components/PlaybackRateMenuButton';
const PlaybackRateMenuButtonSource = require('!!raw!../berea-innovative-staging/work-in-progresss/components/video/react-components/PlaybackRateMenuButton');

export default class PlaybackRateMenuButtonPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="PlaybackRateMenuButton" />
        <h3>PlaybackRateMenuButton</h3>
        <p>
        The dropdown menu to control the playback rates.
        </p>
        <div className="docs-example">
          <PlaybackRateMenuButtonExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlaybackRateMenuButtonExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`PlaybackRateMenuButton.propTypes = {

  // The direction where Volume Bar popup
  // default: [2, 1.5, 1.25, 1, 0.5, 0.25]
  rates: PropTypes.array,

}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

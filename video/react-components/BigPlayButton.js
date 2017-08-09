import React from 'react';
import { Player, BigPlayButton } from 'video-react';

export default (props) => {
  return (
    <Player src="http://berea-innovative-staging.dev/wp-content/uploads/2017/08/BereaInnovative-placeholder.mp4" >
      <BigPlayButton position="center" />
    </Player>
  );
};

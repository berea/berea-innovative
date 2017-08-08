import React from 'react';
import {
  Player, ControlBar, PlaybackRateMenuButton
} from 'video-react';

export default (props) => {
  return (
    <Player
      autoPlay
      src="http://berea-innovative-staging.dev/wp-content/uploads/2017/08/BereaInnovative-placeholder.mp4"
    >
      <ControlBar autoHide={false}>
        <PlaybackRateMenuButton
          rates={[5, 3, 1.5, 1, 0.5, 0.1]}
          order={7.1}
        />
      </ControlBar>
    </Player>
  );
};

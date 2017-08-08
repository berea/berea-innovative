import React from 'react';
import { Player, ControlBar, PlayToggle} from 'video-react';

export default (props) => {
  return (
    <Player
      autoPlay
      src="http://berea-innovative-staging.dev/wp-content/uploads/2017/08/BereaInnovative-placeholder.mp4"
    >
      <ControlBar autoHide={false} disableDefaultControls={true}>
        <PlayToggle />
      </ControlBar>
    </Player>
  );
};

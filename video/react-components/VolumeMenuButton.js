import React from 'react';
import { Player, ControlBar, VolumeMenuButton } from 'video-react';

export default (props) => {
  return (
    <Player
      autoPlay
      src="http://berea-innovative-staging.dev/wp-content/uploads/2017/08/BereaInnovative-placeholder.mp4"
    >
      <ControlBar autoHide={false} disableDefaultControls={true}>
        <VolumeMenuButton />
        <VolumeMenuButton vertical={true} />
      </ControlBar>
    </Player>
  );
};

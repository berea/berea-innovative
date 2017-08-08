import React from 'react';
import { Player, ControlBar, ReplayControl} from 'video-react';

export default (props) => {
  return (
    <Player
      autoPlay
      startTime={300}
      src="http://berea-innovative-staging.dev/wp-content/uploads/2017/08/BereaInnovative-placeholder.mp4"
    >
      <ControlBar autoHide={false}>
        <ReplayControl seconds={5} order={2.1} />
        <ReplayControl seconds={10} order={2.2} />
        <ReplayControl seconds={30} order={2.3} />
      </ControlBar>
    </Player>
  );
};

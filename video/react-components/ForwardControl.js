import React from 'react';
import { Player, ControlBar, ForwardControl} from 'video-react';

export default (props) => {
  return (
    <Player
      autoPlay
      src="http://berea-innovative-staging.dev/wp-content/uploads/2017/08/BereaInnovative-placeholder.mp4"
    >
      <ControlBar autoHide={false}>
        <ForwardControl seconds={5} order={3.1} />
        <ForwardControl seconds={10} order={3.2} />
        <ForwardControl seconds={30} order={3.3} />
      </ControlBar>
    </Player>
  );
};

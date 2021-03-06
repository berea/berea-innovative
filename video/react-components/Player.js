import React, { Component } from 'react';
import { Player } from 'video-react';
import {
  Button, Form, FormGroup,
  Label, Input, Col
} from 'reactstrap';

export default class PlayerExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      playerSource: 'http://berea-innovative-staging.dev/wp-content/uploads/2017/08/BereaInnovative-placeholder.mp4',
      inputVideoUrl: 'http://berea-innovative-staging.dev/wp-content/uploads/2017/08/BereaInnovative-placeholder.mp4'
    }

    this.handleValueChange = this.handleValueChange.bind(this);
    this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playerSource != prevState.playerSource) {
      this.refs.player.load();
    }
  }

  handleValueChange(e) {
    var value = e.target.value;
    this.setState({
      [e.target.id]: value
    });
  }

  updatePlayerInfo() {
    this.setState({
      playerSource: this.state.inputVideoUrl
    });
  }

  render() {
    return (
      <div>
        <Player ref="player">
          <source src={this.state.playerSource} />
        </Player>
        <div className="docs-example">
          <Form>
            <FormGroup>
              <Label for="inputVideoUrl">Video Url</Label>
              <Input
                ref="inputVideoUrl"
                name="inputVideoUrl"
                id="inputVideoUrl"
                value={this.state.inputVideoUrl}
                onChange={this.handleValueChange}
              />
            </FormGroup>
            <FormGroup>
              <Button type="button" onClick={this.updatePlayerInfo}>Update</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}


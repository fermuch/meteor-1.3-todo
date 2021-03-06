import React, { PropTypes, Component } from 'react';
import IconButton from 'material-ui/lib/icon-button';
import TextField from 'material-ui/lib/text-field';
import Placeholder from '../placeholder';
import NoSSR from 'react-no-ssr';
import useSheet from 'react-jss';

import styles from './jss';

const propTypes = {
  onClickAddButton: PropTypes.func,
};

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.stat = {
      inputValue: '',
    };
  }

  handleClickAddButton = () => {
    const { onClickAddButton } = this.props;
    const todo = this.refs.todo.input.value;
    onClickAddButton(todo);
    this.refs.todo.input.value = '';
  }

  render() {
    const { classes } = this.props.sheet;

    return (
      <Placeholder
        height="5.5rem"
        backgroundColor="none"
      >
        <NoSSR>
          <div className={classes.input}>
            <TextField
              ref="todo"
              hintText="What are you supposed to do?"
            />
            <IconButton onClick={this.handleClickAddButton}>
              <i className="material-icons">playlist_add</i>
            </IconButton>
          </div>
        </NoSSR>
      </Placeholder>
    );
  }
}

TodoInput.propTypes = propTypes;

export default useSheet(TodoInput, styles);

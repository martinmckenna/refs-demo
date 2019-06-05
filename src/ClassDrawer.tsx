import React from 'react';
import {
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

import RootRef from '@material-ui/core/RootRef'

type ClassNames = 'paper';

const styles: StyleRulesCallback<ClassNames> = (theme) => ({
  paper: {
    width: '25%',
    padding: '50px',
    '& div': {
      marginTop: '20px',
      marginBottom: '20px',
    }
  }
});

interface Props {
  setOpen: (isOpen: boolean) => void;
}

type CombinedProps = DrawerProps & Props & WithStyles<ClassNames>

class ClassDrawer extends React.Component<CombinedProps, {}> {

  textRef: any = React.createRef();

  componentDidMount() {
    console.log(this.textRef)
  }

  componentDidUpdate(prevProps: CombinedProps) {
    if (this.textRef && this.textRef.current && !prevProps.open && this.props.open) {
      this.textRef.current.focus()
    }
  }

  render() {
    const { open, setOpen, classes } = this.props;
    return (
      <Drawer
        open={open}
        disableAutoFocus
        anchor="right"
        ModalProps={{
          keepMounted: true
        }}
        classes={{
          paper: classes.paper
        }}
      >
        <TextField placeholder="Type something in, dummy" />
        <RootRef rootRef={this.textRef}>
          <React.Fragment>
          <Button>Hello world</Button>
          <Button onClick={() => setOpen(false)}>Close Drawer</Button>
          </React.Fragment>
        </RootRef>
      </Drawer>
    );
  }
}

const styled = withStyles(styles);

export default styled(ClassDrawer);
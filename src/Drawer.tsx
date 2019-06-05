import React from 'react';

import Button from '@material-ui/core/Button'
import Drawer, { DrawerProps } from '@material-ui/core/Drawer'
import TextField from '@material-ui/core/TextField'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  paper: {
    width: '25%',
    padding: '50px',
    '& div': {
      marginTop: '20px',
      marginBottom: '20px',
    }
  }
})

interface Props {
  setOpen: (isOpen: boolean) => void;
}

const _Drawer: React.FC<DrawerProps & Props> = (props) => {
  const classes = useStyles();

  const myRef = React.useCallback(node => {
    if (node && props.open === true) {
      node.focus()
    }
  }, [props.open])

  return (
    <Drawer
      open={props.open}
      disableAutoFocus
      anchor="right"
      classes={{
        paper: classes.paper
      }}
    >
      <TextField inputRef={myRef} placeholder="Type something in, dummy" />
      <Button onClick={() => props.setOpen(false)}>Close Drawer</Button>
    </Drawer>
  );
}

export default _Drawer;

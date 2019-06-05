import React from 'react';
import Button from '@material-ui/core/Button'
import HooksDrawer from './Drawer'
import ClassDrawer from './ClassDrawer'
import { makeStyles } from '@material-ui/styles'

import { RouteComponentProps } from '@reach/router';

const useStyles = makeStyles({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '100px'
  }
})

const MainContent: React.FC<RouteComponentProps> = () => {
  const [hooksDrawerOpen, setHooksDrawerOpen] = React.useState<boolean>(false);
  const [classDrawerOpen, setClassDrawerOpen] = React.useState<boolean>(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.buttonWrapper}>
        <Button onClick={() => setHooksDrawerOpen(true)}>Open Hooks Drawer</Button>
        <Button onClick={() => setClassDrawerOpen(true)}>Open Class Drawer</Button>
      </div>
      <HooksDrawer
        setOpen={setHooksDrawerOpen}
        open={hooksDrawerOpen}
        anchor="right"
      />
      <ClassDrawer
        setOpen={setClassDrawerOpen}
        open={classDrawerOpen}
        anchor="right"
      />
    </React.Fragment>
  );
}

export default MainContent;

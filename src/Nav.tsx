import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import { navigate, RouteComponentProps } from '@reach/router';

const useStyles = makeStyles({
  buttonWrapper: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '100px'
  },
})

const Something: React.FC<RouteComponentProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonWrapper}>
      <Button onClick={() => navigate('/')}>Go To Main</Button>
      <Button onClick={() => navigate('/somepath')}>Go To Second Page</Button>
    </div>
  );
};

export default Something;

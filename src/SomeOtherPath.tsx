import React from 'react';
import { makeStyles } from '@material-ui/styles'
import { RouteComponentProps } from '@reach/router';

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
      wow this stuff is p cool imo
    </div>
  );
};

export default Something;

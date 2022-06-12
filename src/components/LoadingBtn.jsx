import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingBtn({ loading, loadingSize, children, ...rest }) {
  return (
    <Button
      {...rest}
      disabled={loading}
    >
      <span style={{ visibility: loading ? 'hidden' : 'visible' }}>{children}</span>
      {loading && (
        <CircularProgress
          color="secondary"
          size={loadingSize}
          sx={{ position: 'absolute' }}
        />
      )}
    </Button>
  );
}

LoadingBtn.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadingSize: PropTypes.number.isRequired,
};

LoadingBtn.defaultProps = {
  loading: false,
  loadingSize: 20,
};

export default LoadingBtn;

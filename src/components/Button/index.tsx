import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps, CircularProgress, Stack } from '@mui/material';

interface ButtonProps extends MUIButtonProps {
  loading?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const {children, loading, ...rest } = props;
  return (
    <MUIButton {...rest}>
      <Stack direction="row" alignItems="center" gap={1}>
        {children}
        {loading && <CircularProgress size={18} color='inherit' />}
      </Stack>
    </MUIButton>
  );
};

export default Button;
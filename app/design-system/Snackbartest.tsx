'use client';
import React from 'react';

import { Button } from '@/components/ui/Button';
import { UserErrorCodes, UserErrorType } from '@/graphql/generated';
import { displayErrors } from '@/utils/displayErrors';
import { showSnackbar } from '@/utils/toast/useToast';

const Snackbartest = () => {
  const errors: UserErrorType[] = [
    {
      message: 'Error message nested in object',
      code: UserErrorCodes.INVALID_EMAIL,
    },
  ];
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Button
          onClick={() => {
            showSnackbar(
              'Your message has been sent.',
              ['warning', 'default', 'success'][
                Math.floor(Math.random() * 3)
              ] as 'warning' | 'success' | 'default',
            );
          }}
        >
          new Snackbar
        </Button>
        <Button
          onClick={() => {
            displayErrors(['Error message STRING']);
          }}
          className="bg-error-red-700 hover:bg-error-red-900"
        >
          Display Error Message
        </Button>
        <Button
          className="bg-error-red-700 hover:bg-error-red-900"
          onClick={() => displayErrors(errors)}
        >
          Display Error Object
        </Button>
      </div>
    </div>
  );
};

export default Snackbartest;

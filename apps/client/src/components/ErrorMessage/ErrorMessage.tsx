import React from 'react';
import { isAxiosError } from 'axios';
import { isString } from '../../utils';
import { isRouteErrorResponse } from 'react-router-dom';

type ErrorMessageProps = {
  error: unknown;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  const errorMessage = extractErrorMessage(error);

  return (
    <p className="text-red-500 text-xs italic">
      <i>{errorMessage}</i>
    </p>
  );
};

function extractErrorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return error.data ?? error.statusText;
  }

  if (isAxiosError(error) || error instanceof Error) {
    return error.message;
  }

  if (isString(error)) {
    return error;
  }

  console.error(error);

  return 'Unknown error';
}

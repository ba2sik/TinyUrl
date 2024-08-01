import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInput } from './FormInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { ShortenUrlPayload, shortenUrlPayloadSchema } from './types/shorten-url-payload-schema';

type ShortenUrlFormProps = {
  onSubmit: SubmitHandler<ShortenUrlPayload>;
  buttonText: string;
};

export const ShortenUrlForm: React.FC<ShortenUrlFormProps> = ({
  onSubmit,
  buttonText = 'Submit',
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShortenUrlPayload>({ resolver: zodResolver(shortenUrlPayloadSchema) });

  return (
    <form
      className="bg-white shadow-md rounded p-8 w-[22rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        fieldName="url"
        errorMessage={errors.url?.message}
        placeholder="http://www.example.com"
        {...register('url')}
      />
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

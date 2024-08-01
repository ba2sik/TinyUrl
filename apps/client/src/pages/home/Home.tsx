import React from 'react';
import { ShortenUrlForm } from '../../components/ShortenUrlForm/ShortenUrlForm';
import { SubmitHandler } from 'react-hook-form';
import { ShortenUrlPayload } from '../../components/ShortenUrlForm/types/shorten-url-payload-schema';

const Home: React.FC = () => {
  const handleLogin: SubmitHandler<ShortenUrlPayload> = async ({ url }) => {
    alert(url);
  };

  return (
    <div className="max-w-xs flex flex-col justify-center items-center gap-12 w-full">
      <h1 className="text-5xl">Tiny URL</h1>
      <ShortenUrlForm
        onSubmit={handleLogin}
        buttonText="Shorten"
      />
    </div>
  );
};

export default Home;

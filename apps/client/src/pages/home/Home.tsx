import React from 'react';
import { ShortenUrlForm } from '../../components/ShortenUrlForm/ShortenUrlForm';
import { SubmitHandler } from 'react-hook-form';
import { ShortenUrlPayload } from '../../components/ShortenUrlForm/types/shorten-url-payload-schema';
import { useShortUrl } from '../../hooks/useShortUrl';
import { ErrorMessage, Loader } from '../../components';
import { isNotNullOrUndefined } from '../../utils';

const Home: React.FC = () => {
  const [shortUrl, setShortUrl] = React.useState<string | null>(null);
  const { mutateAsync: getShortUrl, error, isPending } = useShortUrl();

  const onShortenClick: SubmitHandler<ShortenUrlPayload> = async ({ url }) => {
    const shortUrl = await getShortUrl(url);

    setShortUrl(shortUrl);
  };

  return (
    <div className="max-w-xs flex flex-col justify-center items-center gap-12 w-full">
      <h1 className="text-5xl">Tiny URL</h1>
      <ShortenUrlForm
        onSubmit={onShortenClick}
        buttonText="Shorten"
      />
      {isPending && <Loader />}
      {shortUrl && (
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-2xl">Shortened URL:</h2>
          <a
            className="link link-primary"
            href={shortUrl}
          >
            {shortUrl}
          </a>
        </div>
      )}
      {isNotNullOrUndefined(error) && <ErrorMessage error={error} />}
    </div>
  );
};

export default Home;

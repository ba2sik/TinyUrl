import { twMerge } from 'tailwind-merge';
import PokeballIcon from '/pokeball.svg';
import React from 'react';

type LoaderProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>;

export const Loader: React.FC<LoaderProps> = ({ className, ...props }) => {
  return (
    <img
      src={PokeballIcon}
      className={twMerge('w-12 m-auto animate-bounce', className)}
      alt="Pokeball Loader"
      {...props}
    />
  );
};

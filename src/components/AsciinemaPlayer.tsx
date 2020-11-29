import React, { useEffect, useRef } from 'react';

const asciinemaOptions = {
  idleTimeLimit: 2,
  poster: 'npt:0:1',
};

type AsciinemaPlayerProps = {
  src: string;
};

const AsciinemaPlayer: React.FC<AsciinemaPlayerProps> = ({ src }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    window.asciinema.player.js.CreatePlayer(currentRef, src, asciinemaOptions);

    return () => {
      window.asciinema.player.js.UnmountPlayer(currentRef);
    };
  }, [src]);

  return <div ref={ref} />;
};

export default AsciinemaPlayer;

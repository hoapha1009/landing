import { createContext, useContext, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks/use-isomorphic-layout-effect';

export const ScreenContext = createContext<
  Partial<{
    [key in BreakPoint]?: boolean;
  }>
>({});

type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export function ScreenProvider({ ...props }) {
  function getBreakPoints() {
    const breakPoints: { [key in BreakPoint]?: boolean } = {};
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      breakPoints['xxl'] = width >= 1536;
      breakPoints['xl'] = width >= 1280;
      breakPoints['lg'] = width >= 1024;
      breakPoints['md'] = width >= 768;
      breakPoints['sm'] = width >= 640;
      breakPoints['xs'] = width >= 480;
    }
    return breakPoints;
  }

  const [breakPoints, setBreakPoints] = useState<{
    [key in BreakPoint]?: boolean;
  }>();

  useIsomorphicLayoutEffect(() => {
    setBreakPoints(getBreakPoints());
    function handleResize() {
      setBreakPoints(getBreakPoints());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!breakPoints) return <></>;
  return (
    <ScreenContext.Provider value={{ ...breakPoints }}>
      {props.children}
    </ScreenContext.Provider>
  );
}

export const useScreen = () => useContext(ScreenContext);

import { useWindowWidth } from './useWindowWidth';

export function useCardAddCount() {
  const [width] = useWindowWidth();

  if (width < 590) {
    return {
      countAdd: 2,
      countInit: 4
    };
  }

  if (width > 589 && width < 930) {
    return {
      countAdd: 2,
      countInit: 8,
    };
  }

  if (width > 929 && width < 1280) {
    return {
      countAdd: 3,
      countInit: 12,
    };
  }

  if (width > 1279) {
    return {
      countAdd: 4,
      countInit: 16,
    };
  }
}

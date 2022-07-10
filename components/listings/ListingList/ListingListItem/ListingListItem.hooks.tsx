import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const separator = (
  <Text fontSize="xs" mx={1}>
    •
  </Text>
);

export const useJSXForLocalizedCountable = (
  name: string,
  countable: number | null | undefined,
  namespace = 'listings'
): JSX.Element | null => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  if (!countable) return null;

  if (!locale) {
    throw new Error('locale is not defined');
  }

  let localizedCountable: string;
  switch (locale) {
    case 'pl': {
      if (countable === 1) {
        localizedCountable = t(`${namespace}:${name}.singular`);
        break;
      }

      if (
        ['2', '3', '4'].includes(String(countable).slice(-1)) ||
        !Number.isInteger(countable)
      ) {
        localizedCountable = t(`${namespace}:${name}.plural`);
        break;
      }

      localizedCountable = t(`${namespace}:${name}.plural`);
      break;
    }
    case 'en':
    default: {
      localizedCountable = t(
        `${namespace}:${name}.${countable > 1 ? 'plural' : 'singular'}`
      );
    }
  }

  return (
    <>
      {separator}
      <Text fontSize="xs">
        {countable} {localizedCountable}
      </Text>
    </>
  );
};

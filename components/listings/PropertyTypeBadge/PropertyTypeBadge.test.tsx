import { theme } from '@chakra-ui/react';

import { stringToColor } from './PropertyTypeBadge.helpers';

describe('stringToColor', () => {
  it('should return a gray color string if provided string is falsy', () => {
    // given
    const str = '';
    // when
    const result = stringToColor(str);
    // then
    expect(result).toBe(theme.colors.gray[200]);
  });

  it('should return a hex color string for a correct string', () => {
    // given
    const str = 'dummy string';
    // when
    const result = stringToColor(str);
    // then
    expect(result).toMatch(/^#[0-9A-F]{6}$/i);
  });
});

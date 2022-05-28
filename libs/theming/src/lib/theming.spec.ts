import { theming } from './theming';
import { THEME_NAME_ENUM } from './theme.type';

describe('theming', () => {
  it('should work', () => {
    expect(theming(THEME_NAME_ENUM.THEME_PINK)).toBe({});
  });
});

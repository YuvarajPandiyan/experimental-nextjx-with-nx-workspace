import { THEME_NAME_ENUM } from './theme.type';
import { THEME_BLUE } from './theme_blue';
import { THEME_PINK } from './theme_pink';
import { THEME_RED } from './theme_red';

export function theming(themeName: string) {
  if (themeName === THEME_NAME_ENUM.THEME_BLUE) {
    return THEME_BLUE;
  }
  if (themeName === THEME_NAME_ENUM.THEME_RED) {
    return THEME_RED;
  }
  if (themeName === THEME_NAME_ENUM.THEME_PINK) {
    return THEME_PINK;
  }
  return;
}

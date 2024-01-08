
import * as Colors from './Colors';
import normalize from '@/utils/normalize';
//Font Base
export const base = {
  textAlign: 'left',
  color: Colors.black,
};

//Type Scale
export const large = {
  fontSize: normalize(34, 'height'),
  lineHeight: normalize(41, 'height'),
};
export const h1 = {
  fontSize: normalize(28, 'height'),
  lineHeight: normalize(34, 'height'),
};
export const h2 = {
  fontSize: normalize(22, 'height'),
  lineHeight: normalize(28, 'height'),
};
export const h3 = {
  fontSize: normalize(20, 'height'),
  lineHeight: normalize(25, 'height'),
};
export const headline = {
  fontSize: normalize(17, 'height'),
  lineHeight: normalize(22, 'height'),
};
export const subheadline = {
  fontSize: normalize(15, 'height'),
  lineHeight: normalize(20, 'height'),
};
export const body = {
  fontSize: normalize(17, 'height'),
  lineHeight: normalize(22, 'height'),
};
export const callout = {
  fontSize: normalize(16, 'height'),
  lineHeight: normalize(21, 'height'),
};
export const footnote = {
  fontSize: normalize(13, 'height'),
  lineHeight: normalize(18, 'height'),
};
export const caption1 = {
  fontSize: normalize(12, 'height'),
  lineHeight: normalize(16, 'height'),
};
export const caption2 = {
  fontSize: normalize(11, 'height'),
  lineHeight: normalize(13, 'height'),
};
//Font Family

export const regular = {
  fontFamily: 'Roboto-Regular',
};

type StrapiImage = {
  name: string;
  alternativeText: string;
  caption: string;
  url: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  formats: {
    small: StrapiImageFormat;
    thumbnail: StrapiImageFormat;
  };
};

export type StrapiImageFormat = {
  name: string;
  url: string;
  ext: string;
  mime: string;
  size: number;
  width: number;
  height: number;
};

export default StrapiImage;

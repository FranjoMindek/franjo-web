import StrapiData from "./StrapiData";

type StrapiResponse<T> = 
  StrapiCollectionTypeResponse<T> | 
  StrapiSignleTypeResponse<T>;

export type StrapiCollectionTypeResponse<T> = {
  data: StrapiData<T>[],
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number,
    }
  }
};

export type StrapiSignleTypeResponse<T> = {
  data: StrapiData<T>,
  meta: {}
};

export default StrapiResponse;

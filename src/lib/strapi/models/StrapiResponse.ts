type StrapiResponse<T> = StrapiCollectionTypeResponse<T> /*| StrapiSingleTypeResponse*/;

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

export type StrapiData<T> = {
  id: number,
  attributes: T,
}

export type StrapiSingleTypeResponse = {


};

export default StrapiResponse;

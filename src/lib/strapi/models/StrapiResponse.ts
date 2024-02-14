type StrapiResponse<T> = {
  data: T & {id: number},
  meta: T extends any[] 
    ? {
        pagination: {
          page: number,
          pageSize: number,
          pageCount: number,
          total: number,
        } 
      } 
    : {}
};

export default StrapiResponse;

import StrapiImage from "./StrapiImage";
import StrapiSeo from "./StrapiSeo";

// These types as will be recursively expanded in StrapiData
type ComplexTypes = StrapiImage;

type StrapiData<T> = {
    id: number,
    attributes: StrapiAttributes<T>,
};

export type StrapiAttributes<T> = {
    [K in keyof T]: NonNullable<T[K]> extends ComplexTypes 
        ? { data: StrapiData<NonNullable<T[K]>> }
        : NonNullable<T[K]> extends object
        ? StrapiAttributes<T[K]>
        : T[K]
};

export default StrapiData;
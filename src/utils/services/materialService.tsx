import createApiServices from "../createApiService";
const api = createApiServices();
const getAllMaterial = (selectedPage: Number, searchValue: string) => {
    if (!searchValue) {
        searchValue = " ";
    }
    if (!selectedPage) {
        selectedPage = 1;
    }
    return api.makeAuthRequest({
        url: `/api/Material/getAllMaterial?page=${selectedPage}&name=${searchValue}`,
        method: "GET",
    });
};
const createManyUseMaterial = (data: any) => {
    return api.makeAuthRequest({
        url: "/api/UseMaterial/createManyUseMaterial",
        method: "POST",
        data,
    });
};
const deleteAllUseMaterialByIdProduct = (Id: string) => {
    return api.makeAuthRequest({
        url: `/api/UseMaterial/deleteManyUseMaterialByIdProduct/${Id}`,
        method: "DELETE",
    });
};

const createMaterial = (data: any) => {
    return api.makeAuthRequest({
        url: `/api/Material/createMaterial`,
        method: "POST",
        data,
    });
};
const deleteMaterial = (Id: string) => {
    return api.makeAuthRequest({
        url: `/api/Material/deleteMaterial/${Id}`,
        method: "DELETE",
    });
};
const updateMaterial = (Id: string, data: any) => {
    return api.makeAuthRequest({
        url: `/api/Material/updateMaterial/${Id}`,
        method: "PUT",
        data,
    });
};
const getHistoryWarehouse = (page: Number, timeStart: any, timeEnd: any) => {
    if (timeStart && timeEnd) {
        return api.makeAuthRequest({
            url: `/api/Material/getHistoryWarehouse?page=${page}&timeStart=${timeStart}&timeEnd=${timeEnd}`,
            method: "GET",
        });
    } else {
        return api.makeAuthRequest({
            url: `/api/Material/getHistoryWarehouse?page=${page}`,
            method: "GET",
        });
    }
};
export const materialService = {
    getAllMaterial,
    createManyUseMaterial,
    deleteAllUseMaterialByIdProduct,
    createMaterial,
    deleteMaterial,
    updateMaterial,
    getHistoryWarehouse,
};
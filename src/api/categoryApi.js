import axiosClient from "./axioisClients";

const categoriesApi = {

    getAll(params) {
        const url = '/categories';
        return axiosClient.get(url, {params: params});
    },
    getById(id){
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = '/categories';
        return axiosClient.post(url, data);
    },
    update(data){
        const url = `/categories/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id){
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    }
}

export default categoriesApi
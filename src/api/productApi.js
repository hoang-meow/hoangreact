import axiosClient from "./axioisClients";

const productsApi = {

    getAll() {
        const url = '/loainoibat';
        return axiosClient.get(url);
    },
    getById(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = '/products';
        return axiosClient.post(url, data);
    },
    update(data){
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    }
}

export default productsApi
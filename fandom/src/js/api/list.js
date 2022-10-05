import ajax from "./ajax";

export const getItems = () => {
    return ajax.get("list");
};

export const createItem = (item) => {
    return ajax.post("list", item);
};

export const updateItem = (item) => {
    return ajax.patch(`list/${item.id}`, item);
};
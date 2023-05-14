import instance from "./axios";
export const fetchStats = async () => {
    const { data } = await instance.get("vaccinationData");
    return data;
};


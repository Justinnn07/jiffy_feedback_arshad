import axios from "axios";
import config from "../config/config.json";

export const getParcelById = async (id, setData, Navigate, setLoading) => {
  axios.get(config.parcel_api + `?_id=${id}`).then((res) => {
    const mainData = res.data.parcel[0].userId;

    if (
      Object.keys(res.data.parcel[0]).includes(
        "user_rating" && "user_comment" && "user_concern"
      )
    ) {
      Navigate("/feedback-already-submitted");
      setLoading(false);
    }

    axios.get(config.userName_api + `?_id=${mainData}`).then((resp) => {
      const { name } = resp.data.vendors_collection[0];
      setData(name);
    });
  });
};

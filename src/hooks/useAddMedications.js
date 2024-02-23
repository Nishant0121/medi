import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/fire_config";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

export const useAddMedications = () => {
  const { userid } = useGetUserInfo();
  const { email } = useGetUserInfo();
  const mediref = collection(db, "medications", email, "medi");

  const addmedi = async ({ medi_name, discription, frequency, hr, min }) => {
    await addDoc(mediref, {
      userid,
      medi_name,
      discription,
      frequency,
      hr,
      min,
      createAt: serverTimestamp(),
    });
  };
  return { addmedi };
};

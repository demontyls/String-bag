import React from "react";

type setLoading = (value: boolean) => void;
type event = React.ChangeEvent<HTMLInputElement>;

/** @description Функция для возврата url загруженной картинки
 * @param e {event} Евент инпута
 * @param setLoading {setLoading} Функция, меняет стейт лоадера, для визуализации загрузки
 * @return Promise
 * */
export const getImgUrl = async (e: event, setLoading?: setLoading): Promise<any> => {
  setLoading && setLoading(true);
  const reader = new FileReader();
  const files = e.target.files;
  const load = new Promise((resolve) => {
      reader.onload = function(event) {
        const dataURL = event.target && event.target.result;
        setLoading && setLoading(false);
        resolve(dataURL as string);
      };
  });
  
  files && reader.readAsDataURL(files[0]);
  return load;
}
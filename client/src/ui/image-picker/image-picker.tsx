import React, {FC, useRef, useState} from 'react';
import {getImgUrl} from "@/functions/GetImgUrl";

interface IImagePicker {
  fieldName: string;
  data: any;
  setData: (value: any) => void;
}
const ImagePicker: FC<IImagePicker> = ({fieldName, setData, data}) => {
  const [loading, setLoading] = useState(false);
  
  const handlerSetData = (e: React.ChangeEvent<HTMLInputElement>) => {
    getImgUrl(e, setLoading).then(((resp) => {
      setData({...data, [fieldName]: resp});
    }))
  }
  
  const img = useRef<any>();
  
  return (
    <div className="d-flex ">
      <input ref={img} className="form-control" type="file" onChange={(e) => handlerSetData(e) }/>
      { loading && <div className="spinner-border"></div> }
      
      {/*TODO Добавить картинку*/}
      <button onClick={()=> {
        img.current.value = null
        setData({...data, [fieldName]: ''})
      }}></button>
    </div>
  );
};

export default ImagePicker;
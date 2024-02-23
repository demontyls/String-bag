'use client'
import React, {memo, useState} from 'react';
import ImagePicker from "@/ui/image-picker/image-picker";

const NewsTable = () => {
  /*TODO привести к нормальному виду*/
  const [tableData, setTableData] = useState<any>(localStorage.getItem('news') ? JSON.parse(localStorage.getItem('news') ?? '') : []);
  const [formValue, setFormValue] = useState<any>({
    name: '',
    authorName: '',
    content: '',
    date: '',
    img: ''
  });
  
  const setInLocal = () => {
    const data = [...tableData, formValue];
    setTableData(data);
    localStorage.setItem('news', JSON.stringify(data));
    let emptyForm: any = {};
    for(let key in formValue ) {
      emptyForm[key] = '';
    }
    setFormValue(emptyForm);
  }
  
  return (
    <div>
      <div className="form d-flex flex-column container" >
        <input className="form-control mb-2" value={formValue.name} onChange={(e) => setFormValue({...formValue, name: e.target.value}) } />
        <input className="form-control mb-2" value={formValue.authorName} onChange={(e) => setFormValue({...formValue, authorName: e.target.value}) } />
        
        <ImagePicker fieldName="img" data={formValue} setData={setFormValue}/>
        
        <textarea className="mb-2" value={formValue.content} onChange={(e) => setFormValue({...formValue, content: e.target.value})} />
        <button className="btn btn-primary" onClick={() => setInLocal()}>
          Добавить
        </button>
      </div>
      
      <table className="generaltable">
        <thead>
        <tr>
          <th>
            Название
          </th>
          <th>
            Автор
          </th>
          <th>
            Время создания
          </th>
          <th>
            Действия
          </th>
        </tr>
        </thead>
        <tbody>
        {tableData?.map((elem: any, i: number) => {
          return (
            <tr key={i}>
              <td>{elem.name}</td>
              <td>{elem.authorName}</td>
              <td>{elem.content}</td>
              <td>{elem.date}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    
    </div>
  );
};

export default memo(NewsTable);
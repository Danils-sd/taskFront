import React, { useState } from 'react';

interface Param {
  name: string;
  value: string;
}

interface Model {
  params: Param[];
}

interface ModelEditorProps {
  model: Model;
}

const ModelEditor: React.FC<ModelEditorProps> = ({ model }) => {
  const [params, setParams] = useState<Param[]>(model.params);

  const handleParamChange = (index: number, value: string) => {
    const newParams = [...params];
    newParams[index].value = value;
    setParams(newParams);
  };

  const getModel = () => {
    return { params };
  };

  return (
    <div>
      {
        params.map((param, index) => {
          return(
            <div>
              <span>{param.name}</span>
              <input
              key={index}
              value={param.value}
              onChange={(e) => handleParamChange(index, e.target.value)}
              />
            </div>
          )
          
        })
      }
    </div>
  );
};


const initialModel: Model = {
  params: [
    { name: 'назначение', value: 'повседневное' },
    { name: 'длина', value: 'маски' },
  ],
};

const App: React.FC = () => {
  return <ModelEditor model={initialModel} />;
};

export default App;

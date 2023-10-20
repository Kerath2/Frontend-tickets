import React, { useState } from 'react';
import { FileUploaderDropContainer } from 'carbon-components-react';

const MyDragAndDropFileUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);
  };

  return (
    <div>
      <FileUploaderDropContainer
        labelText="Arrastra y suelta un archivo aquí o haz clic para cargar"
        name=""
        multiple={false}
        accept={['.jpg', '.jpeg', '.png']}
        disabled={false}
        tabIndex={0}
        onChange={handleFileChange}
        filenameStatus="edit"
        onDelete={() => setFiles([])}
        files={files}
      />
    </div>
  );
};

export default MyDragAndDropFileUploader;

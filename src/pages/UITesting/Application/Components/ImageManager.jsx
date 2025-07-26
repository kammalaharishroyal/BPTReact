import React, { useState } from 'react';
import '../../../../css/UIDashboard/ImageManager.css';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const ImageManager = ({ objects }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleAddImage = (obj) => {
    if (!selectedImages.find((item) => item.objName === obj.objName)) {
      setSelectedImages([...selectedImages, obj]);
    }
  };

  const handleExport = () => {
    const names = selectedImages.map((item) => item.objName);
    console.log('Exported Names:', names);
    alert(`Exported Order: ${names.join(', ')}`);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(selectedImages);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setSelectedImages(reordered);
  };
const handleRemoveImage = (objName) => {
    setSelectedImages((prev) => prev.filter((item) => item.objName !== objName));
  };
  return (
    <div className="image-manager">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Objects</h3>
        {objects.map((obj, index) => (
          <div key={index} className="object-button">
            <button onClick={() => handleAddImage(obj)}>{obj.objName}</button>
          </div>
        ))}
      </div>

      {/* Main Panel */}
      <div className="image-panel">
        <h3>Selected Images</h3>
        <button className="export-button" onClick={handleExport}>
          Export Order
        </button>
        
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="imageList" direction="vertical">
            {(provided) => (
              <div
                className="image-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {selectedImages.map((item, index) => (
                  <Draggable key={item.objName} draggableId={item.objName} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={`image-item ${snapshot.isDragging ? 'dragging' : ''}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      ><button className="remove-btn" onClick={() => handleRemoveImage(item.objName)} ><i class="fa-solid fa-xmark"></i></button>
                        <p>{item.objName}</p>
                        <img src={item.imagePath} alt={item.objName} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        
      </div>
    </div>
  );
};

export default ImageManager;

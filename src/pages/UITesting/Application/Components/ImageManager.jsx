import React, { useState } from 'react';
import '../../../../css/UIDashboard/ImageManager.css';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const ImageManager = ({ objects }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleAddImage = (obj) => {
    if (!selectedImages.find((item) => item.component === obj.component)) {
      setSelectedImages([...selectedImages, obj]);
    }
  };

  const handleExport = () => {
    const names = selectedImages.map((item) => item.component);
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
    setSelectedImages((prev) => prev.filter((item) => item.component !== objName));
  };
  return (
    <div className="image-manager">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Cart</h3>
        {objects.map((obj, index) => (
          <div key={index} className="object-button">
            <button onClick={() => handleAddImage(obj)}>{obj.component}</button>
          </div>
        ))}
      </div>

      {/* Main Panel */}
      <div className="image-panel">
        <h3>Selected Images</h3>
        <button className="export-button" onClick={handleExport}>
          Export To Java
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
                  <Draggable key={item.component} draggableId={item.component} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={`image-item ${snapshot.isDragging ? 'dragging' : ''}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      ><button className="remove-btn" onClick={() => handleRemoveImage(item.component)} ><i class="fa-solid fa-xmark"></i></button>
                        <p>{item.component}</p>
                        <img src={item.image} alt={item.component} />
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

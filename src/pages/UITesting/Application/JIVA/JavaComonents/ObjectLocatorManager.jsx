import React, { useEffect, useState } from 'react';
import axios from '../../../../../services/api';

const ObjectLocatorManager = () => {
  const [pages, setPages] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedPage, setSelectedPage] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [newPage, setNewPage] = useState({ name: '', description: '' });
  const [newSection, setNewSection] = useState({ name: '', description: '', image: null });
  const [locators, setLocators] = useState([]);
  const [newLocator, setNewLocator] = useState({
    objName: '',
    eventType: '',
    locatorType: '',
    locatorValue: '',
  });

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    const res = await axios.get('/pages');
    setPages(res.data);
  };

  const fetchSections = async (pageId) => {
    const res = await axios.get(`/sections?pageId=${pageId}`);
    setSections(res.data);
  };

  const fetchLocators = async (pageId, sectionId) => {
    const res = await axios.get(`/locators?pageId=${pageId}&sectionId=${sectionId}`);
    setLocators(res.data);
  };

  const handlePageChange = (e) => {
    const pageId = e.target.value;
    setSelectedPage(pageId);
    fetchSections(pageId);
  };

  const handleSectionChange = (e) => {
    const sectionId = e.target.value;
    setSelectedSection(sectionId);
    fetchLocators(selectedPage, sectionId);
  };

  const handleLocatorSave = async () => {
    const data = {
      ...newLocator,
      pageId: selectedPage,
      sectionId: selectedSection,
    };
    await axios.post('/locators', data);
    fetchLocators(selectedPage, selectedSection);
    setNewLocator({ objName: '', eventType: '', locatorType: '', locatorValue: '' });
  };

  const handleNewPageSave = async () => {
    const res = await axios.post('/pages', {
      pageName: newPage.name,
      description: newPage.description,
    });
    fetchPages();
    setNewPage({ name: '', description: '' });
    setSelectedPage(res.data.id);
  };

  const handleNewSectionSave = async () => {
    if (!newSection.image) {
      alert("Image is required for a new section.");
      return;
    }

    const formData = new FormData();
    formData.append('sectionName', newSection.name);
    formData.append('description', newSection.description);
    formData.append('image', newSection.image);
    formData.append('pageId', selectedPage);

    const res = await axios.post('/sections', formData);
    fetchSections(selectedPage);
    setNewSection({ name: '', description: '', image: null });
    setSelectedSection(res.data.id);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-xl space-y-6">
      <h2 className="text-xl font-bold">Object Locator Manager</h2>

      {/* Select or Add Page */}
      <div className="space-y-2">
        <label>Page (Module):</label>
        <select value={selectedPage} onChange={handlePageChange} className="border p-2 w-full">
          <option value="">-- Select Page --</option>
          {pages.map(page => (
            <option key={page.id} value={page.id}>{page.pageName}</option>
          ))}
        </select>

        <input placeholder="New Page Name" value={newPage.name} onChange={(e) => setNewPage({ ...newPage, name: e.target.value })} className="border p-2 w-full" />
        <input placeholder="New Page Description" value={newPage.description} onChange={(e) => setNewPage({ ...newPage, description: e.target.value })} className="border p-2 w-full" />
        <button onClick={handleNewPageSave} className="bg-blue-500 text-white px-4 py-2 rounded">Add Page</button>
      </div>

      {/* Select or Add Section */}
      {selectedPage && (
        <div className="space-y-2">
          <label>Section:</label>
          <select value={selectedSection} onChange={handleSectionChange} className="border p-2 w-full">
            <option value="">-- Select Section --</option>
            {sections.map(section => (
              <option key={section.id} value={section.id}>{section.sectionName}</option>
            ))}
          </select>

          <input placeholder="New Section Name" value={newSection.name} onChange={(e) => setNewSection({ ...newSection, name: e.target.value })} className="border p-2 w-full" />
          <input placeholder="Section Description" value={newSection.description} onChange={(e) => setNewSection({ ...newSection, description: e.target.value })} className="border p-2 w-full" />
          <input type="file" onChange={(e) => setNewSection({ ...newSection, image: e.target.files[0] })} className="border p-2 w-full" />
          <button onClick={handleNewSectionSave} className="bg-green-500 text-white px-4 py-2 rounded">Add Section</button>
        </div>
      )}

      {/* Add Locator */}
      {selectedPage && selectedSection && (
        <div className="space-y-2">
          <h3 className="font-semibold">Add/Update Locator</h3>
          <input placeholder="Object Name" value={newLocator.objName} onChange={(e) => setNewLocator({ ...newLocator, objName: e.target.value })} className="border p-2 w-full" />
          <select value={newLocator.eventType} onChange={(e) => setNewLocator({ ...newLocator, eventType: e.target.value })} className="border p-2 w-full">
            <option value="">-- Event Type --</option>
            <option value="ButtonClick">ButtonClick</option>
            <option value="InputText">InputText</option>
            <option value="SelectDropdown">SelectDropdown</option>
          </select>
          <select value={newLocator.locatorType} onChange={(e) => setNewLocator({ ...newLocator, locatorType: e.target.value })} className="border p-2 w-full">
            <option value="">-- Locator Type --</option>
            <option value="xpath">Xpath</option>
            <option value="id">ID</option>
            <option value="css">CSS</option>
          </select>
          <input placeholder="Locator Value" value={newLocator.locatorValue} onChange={(e) => setNewLocator({ ...newLocator, locatorValue: e.target.value })} className="border p-2 w-full" />
          <button onClick={handleLocatorSave} className="bg-purple-600 text-white px-4 py-2 rounded">Save Locator</button>
        </div>
      )}

      {/* Existing Locators */}
      {locators.length > 0 && (
        <div>
          <h3 className="font-semibold mt-6">Existing Locators</h3>
          <table className="w-full table-auto border mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th>Object Name</th>
                <th>Event Type</th>
                <th>Locator Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {locators.map((loc, idx) => (
                <tr key={idx} className="text-center border-t">
                  <td>{loc.objName}</td>
                  <td>{loc.eventType}</td>
                  <td>{loc.locatorType}</td>
                  <td>{loc.locatorValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ObjectLocatorManager;

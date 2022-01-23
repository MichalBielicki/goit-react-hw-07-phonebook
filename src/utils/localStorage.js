const saveToLocalStore = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const loadLocalStore = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

if (loadLocalStore("CONTACTS") === undefined) {
  saveToLocalStore("CONTACTS", []);
}

const initialContacts = loadLocalStore("CONTACTS");
export { saveToLocalStore, loadLocalStore, initialContacts };

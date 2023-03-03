import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContact: (state, action) => {
      console.log(action);
      //   const { name, number } = newContact;
      //   const isExist = contacts.some(contact => {
      //     return contact.name === name;
      //   });

      //   if (isExist) {
      //     alert(`${name} is already in contacts.`);
      //     return;
      //   } else {
      //     return [...initialState, { id: nanoid(), name, number }];
      //   }
    },

    deleteContact: (state, action) => {},

    //     deleteContact: id => {
    //     setContacts(contacts.filter(contact => contact.id !== id));
    //   };
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

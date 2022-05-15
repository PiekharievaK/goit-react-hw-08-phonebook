export const findContacts = (contacts , filterValue) => {
  console.log('object',contacts);
  if(contacts === []){
    return
  }
  const lowerValue = filterValue.toLowerCase();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(lowerValue) ||
      contact.number.includes(lowerValue)
  );
  return filteredContacts;
};

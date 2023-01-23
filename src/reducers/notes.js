const notesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return action.notes;
    case "REMOVE_NOTE":
      return state.filter((note) => note !== action.noteTest);
    case "ADD_NOTE":
      return [
        ...state,
        {
          title: action.title,
          desc: action.desc,
        },
      ];
    default:
      return state;
  }
};

export default notesReducer;
const state = {
  notes: [
    {
      id: Math.random() * 1000,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum risus neque, vel dapibus libero scelerisque non. Nullam placerat pellentesque tellus a vehicula. Quisque",
      datestamp: new Date().toLocaleDateString(),
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ],
};

const getters = {
  myNotes: (state) => state.notes,
};

const actions = {
  addNotes: (context, newNotes) => {
    context.commit("addNotesMutation", newNotes);
  },
  deleteNote: (context, notesId) => {
    context.commit("deleteNotesMutation", notesId);
  },
};

const mutations = {
  addNotesMutation: (state, newNotes) => {
    state.notes.unshift(newNotes);
  },

  deleteNotesMutation: (state, notesId) => {
    state.notes = state.notes.filter((note) => note.id !== notesId);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

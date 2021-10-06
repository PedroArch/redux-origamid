// constants
const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";
const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";
const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";

// actions creators
export const incrementarTempo = () => ({type: INCREMENTAR_TEMPO})
export const reduzirTempo = () => ({type: REDUZIR_TEMPO})
export const modificarEmail = (email) => ({type: MODIFICAR_EMAIL, payload: email})

// initial states
const initialState = {
  nome: "André Rafael",
  email: "andre@origamid.com",
  diasRestantes: 120,
};

// reducers
const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes++;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes--;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
  }
}, initialState)


export default reducer;

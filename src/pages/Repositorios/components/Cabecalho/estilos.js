import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
  boxDefault: {
    marginLeft: 30,
    marginRight: 30,
  },

  boxVoltar: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  botaoVolta: {
    backgroundColor: '#3A3F47',
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
  iconVoltar: {
    color: '#EEEEEE',
  },
  textoVoltar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A3F47',
    marginLeft: 10,
  },

  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,

    alignItems: 'center',
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  cabecalhoTitulos: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cabecalhoCaixas: {
    alignItems: 'center',
  },
  cabecalhoTextos: {
    fontSize: 16,
  },
  boxBio: {
    marginTop: 30,
  },
  username: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 6,
    fontSize: 14,
  },
  bioRepositorios: {
    marginTop: 6,
    fontSize: 12,
  },
  listaRepositorios: {
    marginTop: 20,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#8B9A47',
    borderBottomWidth: 2,
    paddingBottom: 6,
    width: 160,
    borderColor: '#8B9A47',
  },
});
export default estilos;

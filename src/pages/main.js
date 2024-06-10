import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ContainerBooks,
  ContentContainer,
  TitlePage,
  InfoContainer,
  InfoText,
  List,
  BookItem,
  ButtonContainer,
  ProfileButtonText,
  ProfileButtonActions
} from '../styles/stylesBooksMain'

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      newBook: null
    };
  }

  // Async Storage
  async componentDidMount() {
    const booksInfo = await AsyncStorage.getItem('books');

    if (booksInfo) {
      this.setState({ books: JSON.parse(booksInfo) });
    }
  }

  // Async Storage
  async componentDidUpdate(_, prevState) {
    const { books } = this.state;

    if (prevState.books !== books) {
      await AsyncStorage.setItem('books', JSON.stringify(books));
    }
  }

  // Adicionar um novo livro à lista de livros
  handleAddBook = (book) => {
    this.setState((prevState) => ({
      books: [...prevState.books, book],
      newBook: book,
    }));
  };

  // Navegar para a tela de criar novo Livro
  navigateToCreateBook = () => {
    this.props.navigation.navigate('createBook', {
      handleAddBook: this.handleAddBook
    });
  };

  render() {
    const { books } = this.state;

    return (
      <ContainerBooks>
        <TitlePage>Livros</TitlePage>

        <TouchableOpacity style={styles.buttonNewBook} onPress={this.navigateToCreateBook}>
          <Text style={styles.buttonText}>Novo Livro    +</Text>
        </TouchableOpacity>

        <List
          data={books}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <BookItem>
              <ContentContainer>
                <InfoContainer>
                  <InfoText>Titulo:</InfoText>
                  <Text style={styles.textBook}>{item.title}</Text>
                  <InfoText>Autor:</InfoText>
                  <Text style={styles.textBook}>{item.autor}</Text>
                  <InfoText>Ano:</InfoText>
                  <Text style={styles.textBook}>{item.ano}</Text>
                  <InfoText>Genero:</InfoText>
                  <Text style={styles.textBook}>{item.genero}</Text>
                  <InfoText>Descrição:</InfoText>
                  <Text style={styles.textBook}>{item.description}</Text>
                </InfoContainer>
              </ContentContainer>

              <ButtonContainer>
                <ProfileButtonActions
                  onPress={() => {
                    this.setState({
                      books: this.state.books.filter(
                        newBook => newBook.title !== item.title,
                      ),
                    });
                  }}
                  style={{ backgroundColor: '#D52623' }}>
                  <ProfileButtonText>
                    <Icon name="delete" size={20} color="#fff" />
                  </ProfileButtonText>
                </ProfileButtonActions>
              </ButtonContainer>
            </BookItem>
          )}
        />
      </ContainerBooks>
    );
  }
}

const styles = StyleSheet.create({
  buttonNewBook: {
    backgroundColor: '#2A2F4F',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#E9DEEB',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBook: {
    fontSize: 16,
    color: '#D6D6D6'
  }
});
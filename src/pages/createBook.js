import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Container, ProfileButton, ProfileButtonText, TitlePage } from '../styles/stylesCreateBook';

export default class CreateBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            autor: '',
            ano: '',
            genero: '',
            description: '',
        };
    }

    // Criar um novo livro
    handleCreateBook = () => {
        const { title, autor, ano, genero, description } = this.state;
        if (title.trim() === '') {
            alert('Por favor, insira um título para o livro.');
            return;
        }
        const newBook = {
            id: new Date().getTime(), // ID único
            title: title,
            autor: autor,
            ano: ano,
            genero: genero,
            description: description,
        };
        // Chama a função handleAddBook passada via parâmetro de navegação, passando o novo livro como argumento
        this.props.route.params.handleAddBook(newBook);
        // Navega de volta para a tela de tarefas após criar o livro
        this.props.navigation.goBack();
    };

    render() {
        return (
            <Container>
                <TitlePage>Criar Novo Livro</TitlePage>
                <TextInput
                    style={[styles.input, styles.textArea1]}
                    placeholder="Título do Livro"
                    placeholderTextColor="#E9DEEB"
                    onChangeText={(text) => this.setState({ title: text })}
                    value={this.state.title}
                    color="#E9DEEB"
                />
                <TextInput
                    style={[styles.input, styles.textArea1]}
                    placeholder="Autor do Livro"
                    placeholderTextColor="#E9DEEB"
                    onChangeText={(text) => this.setState({ autor: text })}
                    value={this.state.autor}
                    color="#E9DEEB"
                />
                <TextInput
                    style={[styles.input, styles.textArea1]}
                    placeholder="Ano de Publicação"
                    placeholderTextColor="#E9DEEB"
                    onChangeText={(text) => this.setState({ ano: text })}
                    value={this.state.ano}
                    color="#E9DEEB"
                />
                <TextInput
                    style={[styles.input, styles.textArea1]}
                    placeholder="Genero"
                    placeholderTextColor="#E9DEEB"
                    onChangeText={(text) => this.setState({ genero: text })}
                    value={this.state.genero}
                    color="#E9DEEB"
                />
                <TextInput
                    style={[styles.input, styles.textArea2]}
                    placeholder="Descrição da Tarefa"
                    placeholderTextColor="#E9DEEB"
                    onChangeText={(text) => this.setState({ description: text })}
                    value={this.state.description}
                    color="#E9DEEB"
                    multiline={true}
                    numberOfLines={4}
                />
                <ProfileButton onPress={this.handleCreateBook}>
                    <ProfileButtonText>Adicionar Livro</ProfileButtonText>
                </ProfileButton>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#917FB3'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#E9DEEB'
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5
    },
    textArea1: {
        borderColor: '#E5BEEC'
    },
    textArea2: {
        height: 100,
        borderColor: '#E5BEEC'
    },
});
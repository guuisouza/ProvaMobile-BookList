import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background: #917FB3
`;

export const TitlePage = styled.Text`
    fontSize: 24px;
    fontWeight: bold;
    marginBottom: 20px;
    color: #E9DEEB
`;

export const ProfileButton = styled(RectButton)`
    backgroundColor: #2A2F4F;
    padding: 10px;
    borderRadius: 5px;
    marginBottom: 20px;
`;

export const ProfileButtonText = styled.Text`
    color: #E9DEEB;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;

import { View } from 'react-native';
import { ContainerStyle } from '../style/ContainerStyle';
interface ContainerProps {
    children: React.ReactNode,
}
function Container({ children }: ContainerProps) {
    return (
        <View style={ContainerStyle.container}>
            {children}
        </View>
    );
};

export default Container;
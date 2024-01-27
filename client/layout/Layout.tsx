import { View } from "react-native";
function Layout({ children }: any) {
    return (
        <View style={{ backgroundColor: 'rgb(248 250 252)', width: '100%', height: '100%' }}>
            {children}
        </View>
    )
}

export default Layout
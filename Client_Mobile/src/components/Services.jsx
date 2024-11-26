import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ServicesData = [
    {
        id: 1,
        title: "Web Development",
        link: "#",
        icon: "web",
        delay: 0.2
    },
    {
        id: 2,
        title: "Mobile Development",
        link: "#",
        icon: "cellphone",
        delay: 0.3
    },
    {
        id: 3,
        title: "Software Development",
        link: "#",
        icon: "laptop",
        delay: 0.4
    },
    {
        id: 4,
        title: "Satisfied Clients",
        link: "#",
        icon: "emoticon-happy",
        delay: 0.5
    },
    {
        id: 5,
        title: "SEO Optimization",
        link: "#",
        icon: "pulse",
        delay: 0.6
    },
    {
        id: 6,
        title: "24/7 Support",
        link: "#",
        icon: "headset",
        delay: 0.7
    }
];

const Services = () => {
    return (
        <View style={{ backgroundColor: 'white', padding: 16 }}>
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>Services we provide</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {ServicesData.map((service) => (
                        <View key={service.id} style={{ backgroundColor: '#f4f4f4', borderRadius: 16, padding: 16, marginBottom: 16, alignItems: 'center', justifyContent: 'center', width: '48%', }} >
                            <Icon name={service.icon} size={32} color="#000" style={{ marginBottom: 8 }} />
                            <Text style={{ fontSize: 16, fontWeight: '600', textAlign: 'center' }}>{service.title}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default Services;

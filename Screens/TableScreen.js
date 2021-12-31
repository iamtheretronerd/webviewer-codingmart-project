// import React from "react";
// import { View, StyleSheet } from 'react-native';
// import { Provider, Card, Avatar, DataTable } from 'react-native-paper';
// const TableScreen = () => {
//   // const itemsPerPage = 2;
//   // const [page, setPage] = React.useState(0);
//   // const from = page * itemsPerPage;
//   // const to = (page + 1) * itemsPerPage;
//   const [data, setData] = React.useState([]);
//   const [isLoading, setLoading] = React.useState(true);
//   React.useEffect(() => {
//     fetch('https://reqres.in/api/users?page=2')
//       .then((response) => response.json())
//       .then((json) => setData(json.data))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
    
//     <Provider>
//       {/* <Appbar.Header style={styles.header}> 
//       <Appbar.BackAction onPress={_goBack} /> 
//       <Appbar.Content title="User" subtitle="Subtitle" />
//       <Appbar.Action icon="magnify" onPress={_handleSearch} />
//       <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
//     </Appbar.Header> */}

//       <View style={styles.mainbox}>
//         {/* <ScrollView horizontal> */}
//         <Card >
//           <DataTable>
//             <DataTable.Header style={styles.databeHeader}>
//               <DataTable.Title >Photo</DataTable.Title>
//               <DataTable.Title>First Name</DataTable.Title>
//               <DataTable.Title >Last Name</DataTable.Title>
//               <DataTable.Title >Email</DataTable.Title>
//             </DataTable.Header>
//             {
//               data.map((l, i) => (
//                 <DataTable.Row style={styles.databeBox} key={i}>
//                   <DataTable.Cell><Avatar.Image size={45} source={{ uri: l.avatar }} /></DataTable.Cell>
//                   <DataTable.Cell>{l.first_name}</DataTable.Cell>
//                   <DataTable.Cell>{l.last_name}</DataTable.Cell>
//                   <DataTable.Cell>{l.email}</DataTable.Cell>
//                 </DataTable.Row>
//               ))
//             }
//           </DataTable>
//         </Card>
//         {/* </ScrollView> */}
//       </View>
//     </Provider>
//   );
// };
// const styles = StyleSheet.create({

//   mainbox: {
//     textAlign: 'center',
//     margin: 15,
//     flex: 1,
//     justifyContent: 'space-between',
//   },

//   databeBox: {
//     margin: 10,
//     textAlign: 'center',
//   },

//   databeHeader: {
//     margin: 10,
//     textAlign: 'left',
//   }
// });
// export default TableScreen;

//Fetching API using AXIOS

import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Provider, Card, Avatar, DataTable } from "react-native-paper";
import axios from "axios";
const TableScreen = () => {

  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/?page=2?_start=0&_limit=20')
      .then((response) => {
        console.log(response);
        setData(response.data.results)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Provider>
      <ScrollView>
        <View style={styles.mainbox}>
          {/* <ScrollView horizontal> */}
          <Card>
            <DataTable>
              <DataTable.Header style={styles.databeHeader}>

                <DataTable.Title>PHOTO</DataTable.Title>
                <DataTable.Title>SPECIES</DataTable.Title>
                <DataTable.Title >NAME</DataTable.Title>


              </DataTable.Header>
              {data.map((l, i) => (
                <ScrollView>
                  <DataTable.Row style={styles.databeBox} key={i}>


                    <DataTable.Cell><Avatar.Image size={45} source={{ uri: l.image }} /></DataTable.Cell>

                    <DataTable.Cell>{l.species}</DataTable.Cell>
                    <DataTable.Cell>{l.name}</DataTable.Cell>
                  </DataTable.Row>
                </ScrollView>
              ))}

            </DataTable>
          </Card>

        </View>
      </ScrollView>
    </Provider>
  );
};
const styles = StyleSheet.create({
  mainbox: {

    margin: 15,
    flex: 1,
    alignContent: 'center'


  },

  databeBox: {
    margin: 10,
    textAlign: "center",


  },

  databeHeader: {
    margin: 10,
    textAlign: "center",
    justifyContent: 'space-around',
    paddingLeft: 20
  },
});
export default TableScreen;
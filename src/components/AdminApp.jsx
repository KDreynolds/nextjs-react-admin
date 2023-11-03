import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServiceProvider from "ra-data-json-server";

const dataProvider = jsonServiceProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={ListGuesser}
        edit={EditGuesser}
        recordRepresentation="name"
      />
      <Resource
        name="posts"
        list={ListGuesser}
        edit={EditGuesser}
        recordRepresentation="title"
      />
      <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
    </Admin>
  );
  
  export default AdminApp;
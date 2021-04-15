import logo from './logo.svg';
import './App.css';
 
import GreetComponent from './Components/GreetComponent';
import DefaultPropsComponent from './Components/DefaultPropsComponent';
import DefaultPropsCustomer from './Components/DefaultPropsCustomer';
import ConstructorDemo from './Components/ConstructorDemo';
import getDerivedStateFromPropsMethod from './Components/getDerivedStateFromPropsMethod';
import ChildComponent from './Components/getDerivedStateFromPropsMethod';
import RenderDemo from './Components/RenderDemo';
import ComponentDidMountDemo from './Components/ComponentDidMountDemo';
import ComponentDidMountMethod from './Components/ComponentDidMountMethod';
import ComponentUpdateDemo from './Components/ComponentUpdateDemo';
import ComponentDidUpdateMethod from './Components/ComponentDidUpdateMethod';
import getSnapshotBeforeUpdate from './Components/getSnapshotBeforeUpdate';
import ComponentWillUnmount from './Components/ComponentWillUnmount';
import UserListComponent from './Components/UserListComponent';
import PostReqComponent from './Components/PostReqComponent';
import CustomerListComponent from './Components/CustomerListComponent';
import Routes from './Routes';
import GetReqComponent from './Components/GetReqComponent';
import GetReqByIdComponent from './Components/GetReqByIdComponent';
import LikesCount from './Components/hoc/LikesCount';
import CommentsCount from './Components/hoc/CommentCount';
import NameFromComponent from './Components/ref/NameFromComponent';







function App() {
  return (
    <div>
      
     {/*<GreetComponent/>
     <DefaultPropsComponent/>
     <DefaultPropsCustomer/>
     <ConstructorDemo />
     <getDerivedStateFromPropsMethod />
     <ChildComponent />
     <RenderDemo/>
     <ComponentDidMountDemo/>
     <ComponentDidMountMethod/>
     <ComponentUpdateDemo/>
     <ComponentDidUpdateMethod/>
     <getSnapshotBeforeUpdate/>
     <ComponentWillUnmount/>
     <UserListComponent/>
     <CustomerListComponent/>
     <PostReqComponent/>
     
     <Routes/>*/}
     <CommentsCount/>
     <LikesCount/>
     <NameFromComponent/>
     
     
     
     
     
    </div>
        
  );
}
 
export default App;
// import logo from './logo.svg';
import SideBar from '../Sidebar/SideBar'
// import estiloHome from './Home.css';
// import SideMenu, { menuItems } from  "../../Component/Menu/SideMenu/SideMenu";
// import { menuItems } from "./components/SideMenu";
// import { Fragment } from 'react/cjs/react.production.min';
function Home() {

    return (
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <SideBar/>
     
  </div>
    );
  }
  
  export default Home;


//   <main className="block min-h[68vh] py-[30px] px-[30px] w-full rounded-none m-0 bg-[#F9F9F9]">
//   <div className='w-full my-auto p-0'>
//     <div className='flex flex-row flex-wrap'>
//         <div className='max-w-full w-full py-4'>
//           <div className='bg-white rounded-none h-calc-100-30 mb-7'>
//             <div className="py-6 px-8">
//               <div className="flex justify-between items-center mb-0">
//                     <Title className='font-Merriweather-Sans font-semibold text-xl' text="Administrar Usuarios"/>
//                     <div className="border-box flex">
//                       <ButtonIcon type="button" className="btn btn-primar bg-grey-light hover:bg-grey text-grey-darkest font-normal inline-flex items-center bg-blue-600
//                                 border-blue-600
//                                 border-solid
//                                 border-4
//                                 rounded-l
//                                 border-box
//                                 text-white
//                                 cursor-pointer
//                                 text-sm
//                                 overflow-visible
//                                 py-[12px]
//                                 px-[16px]
//                                 text-center
//                                 normal-case
//                                 select-none
//                                 touch-manipulation
//                                 w-fit
//                                 font-Merriweather-Sans" text="Agregar Usuario"/>
//                                 <ComponetModal/>
//                   </div>
//               </div>
//             </div>
//             <div className='pt-5 px-8 pb-6'>
//               <div className='mb-8'>
//                   <DataTable/>
//               </div>
//             </div>
//         </div>
//       </div> 
//     </div>
//   </div>
// </main>
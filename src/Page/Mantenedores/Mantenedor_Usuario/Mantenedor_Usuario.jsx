// import logo from './logo.svg';
// import estiloHome from './Home.css';
import DataTable from '../../../Component/DataTable'
import Title from   '../../../Component/Title';
import { useState } from "react";
import Modal from '../../../Component/Modal';
import Input from '../../../Component/Input';
import Select from '../../../Component/Select';
function MantenedorUsuario() {
  const [inactive, setInactive] = useState(false);
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
    return (
        <main className="block min-h[68vh] py-[30px] px-[30px] w-full rounded-none m-0 bg-[#F9F9F9]">
          <div className='w-full my-auto p-0'>
            <div className='flex flex-row flex-wrap'>
                <div className='max-w-full w-full py-4'>
                  <div className='bg-white rounded-none h-calc-100-30 mb-7'>
                    <div className="py-6 px-8">
                      <div className="flex justify-between items-center mb-0">
                            <Title className='font-Merriweather-Sans font-semibold text-xl' text="Administrar Usuarios"/>
                            <div className="border-box flex">
                                        {/* <ComponetModal type="button" className="btn btn-primar bg-grey-light hover:bg-grey text-grey-darkest font-normal inline-flex items-center bg-blue-600
                                        border-blue-600
                                        border-solid
                                        border-4
                                        rounded-l
                                        border-box
                                        text-white
                                        cursor-pointer
                                        text-sm
                                        overflow-visible
                                        py-[12px]
                                        px-[16px]
                                        text-center
                                        normal-case
                                        select-none
                                        touch-manipulation
                                        w-fit
                                        font-Merriweather-Sans" text="Agregar Usuario"/> */}
                                        <button type="button" className="btn btn-primar bg-grey-light hover:bg-grey text-grey-darkest font-normal inline-flex items-center bg-blue-600
                                        border-blue-600
                                        border-solid
                                        border-4
                                        rounded-l
                                        border-box
                                        text-white
                                        cursor-pointer
                                        text-sm
                                        overflow-visible
                                        py-[12px]
                                        px-[16px]
                                        text-center
                                        normal-case
                                        select-none
                                        touch-manipulation
                                        w-fit
                                        font-Merriweather-Sans"   onClick={() => cambiarEstadoModal1(!estadoModal1)}>Agregar Usuario</button>
                                     <Modal
                                        estado={estadoModal1}
                                        cambiarEstado={cambiarEstadoModal1}
                                        titulo="Agregar Usuario"
                                        mostrarHeader={true}
                                        mostrarOverlay={true}
                                        posicionModal={'center'}
                                        padding={'20px'}
                                      >
                                        <div>
                                          <div className="modal-body">
                                              <div className="flex flex-row">
                                                  {/* <label className="lblAdd w-36 py-1.5 mb-0 text-base">RUN:</label> */}
                                                  <div className="col-sm-5">
                                                    {/* <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="run" name="run" placeholder="Ej. 20.667.876-2" autocomplete="off"/>  */}
                                                  </div>
                                              </div>
                                              <div className="flex flex-row">
                                                  <label className="lblAdd w-36 py-1.5 mb-0 text-base">Run:</label>
                                                  <div className="col-sm-3">
                                                  <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="run" name="run" placeholder="Ej. 20.667.876-2" autocomplete="off"/> 
                                                  </div>
                                              </div>
                                              <div className="flex flex-row">
                                                  <label className="lblAdd w-36 py-1.5 mb-0 text-base">Nombres:</label>
                                                  <div className="col-sm-3">
                                                  <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="nombre" name="nombre" placeholder="Nombre" autocomplete="off"/> 
                                                  </div>
                                              </div>
                                              <div className="flex flex-row">
                                                  <label className="lblAdd w-36 py-1.5 mb-0 text-base">Apellido 1:</label>
                                                  <div className="col-sm-3">
                                                  <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="apellido_1" name="apellido_1" placeholder="Apellido 1" autocomplete="off"/> 
                                                  </div>
                                              </div>
                                              <div className="flex flex-row">
                                                  <label className="lblAdd w-36 py-1.5 mb-0 text-base">Apellido 2:</label>
                                                  <div className="col-sm-3">
                                                  <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="apellido_2" name="apellido_2" placeholder="Apellido 2" autocomplete="off"/> 
                                                  </div>
                                              </div>
                                              <div className="flex flex-row">
                                                  <label className="lblAdd w-36 py-1.5 mb-0 text-base">Teléfono:</label>
                                                  <div className="col-sm-3">
                                                  <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="telefono" name="telefono" placeholder="Telefono" autocomplete="off"/> 
                                                  </div>
                                              </div>
                                              <div className="flex flex-row">
                                                  <label className="lblAdd w-36 py-1.5 mb-0 text-base">Mail:</label>
                                                  <div className="col-sm-3">
                                                    <Input type="input" className="mb-3 w-30 block p-x py-1.5 px-3 text-base font-normal text-slate-600 bg-white bg-clip-padding border border-solid border-gray-400 rounded-md" id="mail" name="mail" placeholder="xxx@xxx.com" autocomplete="off"/> 

                                                  </div>
                                              </div>
                                              <div className="flex flex-row">
                                                  <label className="lblAdd w-36 py-1.5 mb-0 text-base">Perfil:</label>
                                                  <div className="col-sm-3">
                                                    <Select/>
                                                  </div>
                                              </div>
                                              <div className="flex flex-row">
                                                  <label className="lblAdd w-36 py-1.5 mb-0 text-base">Vigente</label>
                                                  <div className="col-sm-5">
                                                       <Input type="checkbox"  name="isGoing" className=""/> 
                                                  </div>
                                              </div>
                                          </div>
                                          <div className='flex items-center justify-end p-4 '>
                                            <button type="button" className="py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none" id="botonGuardar">Guardar usuario</button>
                                          </div>
                                        </div>
                                      </Modal>
                          </div>
                      </div>
                    </div>
                    <div className='pt-5 px-8 pb-6'>
                      <div className='mb-8'>
                          <DataTable/>
                      </div>
                    </div>
                </div>
              </div> 
            </div>
          </div>
        </main>
    );
  }
  
  export default MantenedorUsuario;

import './styles.css';
import { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const datosList3 = [
    { id: Number(""), codigo: "", nombre: "", ubicacion: "", activo: ""},
];

const TablaConsultorio = () => {
    const [dataC, setDataC] = useState(datosList3);
    const [modalConsuktorio, setModalConsultorio] = useState(false);
    const [modalEditarConsultorio, setModalEditarConsultorio]= useState(false);
    const [agregarConsultorio, setAgregarConsultorio] = useState({
        codigo: "", 
        nombre: "", 
        ubicacion: "", 
        activo: ""
    });
    const handleChangeC = (a) => {
        const {name, value} = a.target;
        setAgregarConsultorio((preState)=> ({
            ...preState,
            [name]:value
        }))
    }; 
    
    const seleccionarConsultorio = (item, caso) => {
        setAgregarConsultorio(item);
        (caso==='Editar')&&setModalEditarConsultorio(true);
    }

    const editar=()=>{
        let dataNuevaEC = dataC;
        dataNuevaEC.map(consultorio=>{
            if(consultorio.id===agregarConsultorio.id){
                consultorio.codigo=agregarConsultorio.codigo;
                consultorio.nombre=agregarConsultorio.nombre;
                consultorio.ubicacion=agregarConsultorio.ubicacion;
                consultorio.activo=agregarConsultorio.activo;

            }
        })
        setDataC(dataNuevaEC);
        setModalEditarConsultorio(false);
    }

    const abrirModalConsultorio = () => {
        setAgregarConsultorio(null);
        setModalConsultorio(true);
    }

    const agregarElConsultorio = () => {
        let valorAgregarConsultorio = agregarConsultorio;
        valorAgregarConsultorio.id = dataC[dataC.length - 1].id + 1;
        let dataNuevaC = dataC;
        dataNuevaC.push(valorAgregarConsultorio);
        setDataC(dataNuevaC);
        setModalConsultorio(false);
    }

    return (
        <div className="ConsultorioPage">
        <h2>Tabla Consultorios</h2>
        <div>
            <button className='btn btn-primary' onClick={abrirModalConsultorio}>Agregar Consultorio</button>
        </div>
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Codigo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Ubicacion</th>
                        <th scope="col">Activo</th>
                        <th scope="col">Botones</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {dataC.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.codigo}</td>
                            <td>{item.nombre}</td>
                            <td>{item.ubicacion}</td>
                            <td>{item.activo}</td>
                            <td className="botones2">
                                <button onClick={()=>seleccionarConsultorio(item, 'Editar')} className='btn btn-primary'>Editar</button>
                                <button className='btn btn-success'>inactivar</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Modal isOpen={modalConsuktorio}>
                <ModalHeader>
                    <div>
                        <h3>Agregar Paciente</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            name="id"
                            value={dataC[dataC.length - 1].id + 1}
                            onChange={handleChangeC}
                        />
                        <br />
                        <label>Codigo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="codigo"
                            value={agregarConsultorio ? agregarConsultorio.codigo : ""}
                            onChange={handleChangeC}
                        />
                        <br />
                        <label>Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nombre"
                            value={agregarConsultorio ? agregarConsultorio.nombre : ""}
                            onChange={handleChangeC}
                        />
                        <br />
                        <label>Ubicacion</label>
                        <input
                            className="form-control"
                            type="text"
                            name="ubicacion"
                            value={agregarConsultorio ? agregarConsultorio.ubicacion : ""}
                            onChange={handleChangeC}
                        />
                        <br />
                        <label>Activo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="activo"
                            value={agregarConsultorio ? agregarConsultorio.activo : ""}
                            onChange={handleChangeC}
                        />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button  className='btn btn-success' onClick={agregarElConsultorio} >Agregar</button>
                    <button  className='btn btn-danger' onClick={() => setModalConsultorio(false)} >Cancelar</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalEditarConsultorio}>
                <ModalHeader>
                    <div>
                        <h3>Agregar Paciente</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            name="id"
                            value={agregarConsultorio && agregarConsultorio.id}
                            onChange={handleChangeC}
                        />
                        <br />
                        <label>Codigo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="codigo"
                            value={agregarConsultorio && agregarConsultorio.codigo}
                            onChange={handleChangeC}
                        />
                        <br />
                        <label>Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nombre"
                            value={agregarConsultorio && agregarConsultorio.nombre}
                            onChange={handleChangeC}
                        />
                        <br />
                        <label>Ubicacion</label>
                        <input
                            className="form-control"
                            type="text"
                            name="ubicacion"
                            value={agregarConsultorio && agregarConsultorio.ubicacion}
                            onChange={handleChangeC}
                        />
                        <br />
                        <label>Activo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="activo"
                            value={agregarConsultorio && agregarConsultorio.activo}
                            onChange={handleChangeC}
                        />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button  className='btn btn-success' onClick={editar} >Actualizar</button>
                    <button  className='btn btn-danger' onClick={() => setModalEditarConsultorio(false)} >Cancelar</button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default TablaConsultorio;
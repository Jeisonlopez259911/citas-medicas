import './styles.css';
import React, { useRef, useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { FaFileCsv, FaFileExcel } from "react-icons/fa";


const datosList = [
    {
        id: Number(""),
        cedula: "",
        nombre: "",
        apellido: "",
        ciudad: "", 
        estadoCivil:"",
        correo: "",
        fechaNacimiento: "" ,
        ingresos:"",
        genero:"",
        rh: "",
        cargo:"",
        eps:"", 
        fuma:"" 
    }
];
const datosList2 = [
    {
        id: Number(""),
        codigoCita: "",
        fechaCita: "",
        horaCita: "", 
        codigoConsultorio: "",
        cedula: ""
    }
];
const TablaPacientes = () => {
    const [data, setData] = useState(datosList);
    const [data2, setData2] = useState(datosList2);
    const [modalCita, setModalCita] = useState(false);
    const [modalTablaCita, setTablaModalCita] = useState(false);
    const [agregarPaciente, setAgregarPaciente] = useState(false);
    const [eliminarCita, setEliminarCita] = useState(false);
    const [cita, setCita] = useState({
        codigoCita: "",
        fechaCita: "",
        horaCita: "",
        codigoConsultorio: "",
        cedula: ""
    });
    const [pacienteSeleccionado, setPacienteSeleccionado] = useState({
        cedula: "",
        nombre: "",
        apellido: "",
        ciudad:"",
        estadoCivil:"",
        correo: "",
        fechaNacimiento: "",
        ingresos:"",
        genero:"",
        rh: "", 
        cargo:"", 
        eps:"", 
        fuma:""

    });
    const [search, setSearch] = useState('');
    const [search2, setSearch2] = useState('');

    const searcher = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
      };
    
      const searcher2 = (e) => {
        setSearch2(e.target.value);
        console.log(e.target.value);
      };
      
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPacienteSeleccionado((preState) => ({
            ...preState,
            [name]: value
        }))

    };
    const handleChange2 = (a) => {
        const {name, value} = a.target;
        setCita((preState2)=> ({
            ...preState2,
            [name]:value
        }))
    }; 

    const citaEliminada = (item, caso) =>{
        setCita(item);
        (caso==='Eliminar')&&setEliminarCita(true)
    };


    const abrirModalTablaCita = () => {
        setAgregarPaciente(null);
        setTablaModalCita(true);
    }
    const abrirModalAgregarCita = () => {
        setCita(null);
        setModalCita(true);
    }

    const agregarCita = () => {
        let valorAgregarCita = cita;
        valorAgregarCita.id = data2[data2.length - 1].id + 1;
        let dataNueva2 = data2;
        dataNueva2.push(valorAgregarCita);
        setData2(dataNueva2);
        setModalCita(false);
    }

    const abrirModalAgregarPaciente = () => {
        setPacienteSeleccionado(null);
        setAgregarPaciente(true);
    }

    const agregar = () => {
        let valorAgregar = pacienteSeleccionado;
        valorAgregar.id = data[data.length - 1].id + 1;
        let dataNueva = data;
        dataNueva.push(valorAgregar);
        setData(dataNueva);
        setAgregarPaciente(false);
    }

    const eliminarLaCita = () => {
        setData2(data2.filter(citae=> citae.id!==cita.id));
        setEliminarCita(false);
    };

    const tableRef = useRef(null);
    return (
        <div className="homePage">
            <h2>Tabla Pacientes</h2>
            <div className="search container">
                <div className='row'>
                    <form className='col formulario'>
                        <label >Cedula</label>
                        <input value={search} onChange={searcher} type="text" />
                        <label >Nombre</label>
                        <input value={search2} onChange={searcher2} type="text" />
                        <button type="button" className='btn btn-success'>Buscar</button>
                    </form>
                    <div className='col botones'>
                        <button className="btn btn-primary" onClick={abrirModalAgregarPaciente}>Añadir un paciente</button>

                        <button className="btn btn-dark"><FaFileCsv /></button>
                        
                        <DownloadTableExcel
                            filename="Archivo"
                            sheet="users"
                            currentTableRef={tableRef.current}
                        >

                            <button className="btn btn-success"><FaFileExcel /></button>

                        </DownloadTableExcel>
                    </div>

                </div>
            </div>
            <table class="table" ref={tableRef}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cedula</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Estado Civil</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Fecha de Nacimiento</th>
                        <th scope="col">Ingresos</th>
                        <th scope="col">Genero</th>
                        <th scope="col">RH</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">EPS</th>
                        <th scope="col">Fuma</th>
                        <th scope="col">Botones</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {data.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.cedula}</td>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>{item.ciudad}</td>
                            <td>{item.estadoCivil}</td>
                            <td>{item.correo}</td>
                            <td>{item.fechaNacimiento}</td>
                            <td>{item.ingresos}</td>
                            <td>{item.genero}</td>
                            <td>{item.rh}</td>
                            <td>{item.cargo}</td>
                            <td>{item.eps}</td>
                            <td>{item.fuma}</td>
                            <td className='botones'> <button className='btn btn-primary' onClick={abrirModalAgregarCita} >Agragar Cita </button>
                                <button className='btn btn-success' onClick={abrirModalTablaCita}>Listar Citas</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Modal isOpen={agregarPaciente}>
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
                            value={data[data.length - 1].id + 1}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Cedula</label>
                        <input
                            className="form-control"
                            type="text"
                            name="cedula"
                            value={pacienteSeleccionado ? pacienteSeleccionado.cedula : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nombre"
                            value={pacienteSeleccionado ? pacienteSeleccionado.nombre : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Apellido</label>
                        <input
                            className="form-control"
                            type="text"
                            name="apellido"
                            value={pacienteSeleccionado ? pacienteSeleccionado.apellido : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Ciudad</label>
                        <input
                            className="form-control"
                            type="text"
                            name="ciudad"
                            value={pacienteSeleccionado ? pacienteSeleccionado.ciudad : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Estado Civil</label>
                        <input
                            className="form-control"
                            type="text"
                            name="estadoCivil"
                            value={pacienteSeleccionado ? pacienteSeleccionado.estadoCivil : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Correo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="correo"
                            value={pacienteSeleccionado ? pacienteSeleccionado.correo : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Fecha de Nacimiento</label>
                        <input
                            className="form-control"
                            type="date"
                            name="fechaNacimiento"
                            value={pacienteSeleccionado ? pacienteSeleccionado.fechaNacimiento : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Ingresos</label>
                        <input
                            className="form-control"
                            type="text"
                            name="ingresos"
                            value={pacienteSeleccionado ? pacienteSeleccionado.ingresos : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Genero</label>
                        <input
                            className="form-control"
                            type="text"
                            name="genero"
                            value={pacienteSeleccionado ? pacienteSeleccionado.genero : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>RH</label>
                        <input
                            className="form-control"
                            type="text"
                            name="rh"
                            value={pacienteSeleccionado ? pacienteSeleccionado.rh : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Cargo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="cargo"
                            value={pacienteSeleccionado ? pacienteSeleccionado.cargo : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>EPS</label>
                        <input
                            className="form-control"
                            type="text"
                            name="eps"
                            value={pacienteSeleccionado ? pacienteSeleccionado.eps : ""}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Fuma</label>
                        <input
                            className="form-control"
                            type="text"
                            name="fuma"
                            value={pacienteSeleccionado ? pacienteSeleccionado.fuma : ""}
                            onChange={handleChange}
                        />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button  className='btn btn-success' onClick={agregar} >Agregar</button>
                    <button className='btn btn-danger' onClick={() => setAgregarPaciente(false)} >Cancelar</button>
                </ModalFooter>
            </Modal>

            <Modal className='modalTablaCita' isOpen={modalTablaCita}>
                <ModalHeader>
                    <div>
                        <h2>Tabla Citas</h2>
                    </div>
                </ModalHeader>

                <ModalBody>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Codigo de Cita</th>
                                <th scope="col">Fecha de cita</th>
                                <th scope="col">Hora de Cita</th>
                                <th scope="col">Codigo de Consultorio</th>
                                <th scope="col">Documento de Paciente</th>
                                <th scope="col">Boton</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {data2.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.codigoCita}</td>
                                    <td>{item.fechaCita}</td>
                                    <td>{item.horaCita}</td>
                                    <td>{item.codigoConsultorio}</td>
                                    <td>{item.cedula}</td>
                                    <td><button  className='btn btn-danger' onClick={()=>citaEliminada(item, 'Eliminar')}>Eliminar</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-danger' onClick={()=> setTablaModalCita(false)}>Cerrar</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={eliminarCita}>
                <ModalBody>
                    ¿Estas seguro que quieres eliminar esta cita?
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-success' onClick={eliminarLaCita}>Si</button>
                    <button className='btn btn-danger' onClick={()=>setEliminarCita(false)}>No</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalCita}>
                <ModalHeader>
                    <div>
                        <h3>Agregar Cita</h3>
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
                            value={data2[data2.length - 1].id + 1}
                            onChange={handleChange2}
                        />
                        <br />
                        <label>Codigo de Cita</label>
                        <input
                            className="form-control"
                            type="text"
                            name="codigoCita"
                            value={cita ? cita.codigoCita : ""}
                            onChange={handleChange2}
                        />
                        <br />
                        <label>Fecha de la Cita</label>
                        <input
                            className="form-control"
                            type="date"
                            name="fechaCita"
                            value={cita ? cita.fechaCita : ""}
                            onChange={handleChange2}
                        />
                        <br />
                        <label>Hora de la Cita</label>
                        <input
                            className="form-control"
                            type="time"
                            name="horaCita"
                            value={cita ? cita.horaCita : ""}
                            onChange={handleChange2}
                        />
                        <br />
                        <label>Codigo de Consultorio</label>
                        <input
                            className="form-control"
                            type="text"
                            name="codigoConsultorio"
                            value={cita ? cita.codigoConsultorio : ""}
                            onChange={handleChange2}
                        />
                        <br />
                        <label>Documento del Paciente</label>
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            name="cedula"
                            value={cita ? cita.cedula : ""}
                            onChange={handleChange2}
                        />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-success' onClick={agregarCita}>Agregar Cita</button>
                    <button className='btn btn-danger' onClick={() => setModalCita(false)}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default TablaPacientes;
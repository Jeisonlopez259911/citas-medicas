const datosList2 = [
    { id: Number(""), codigoCita: "", fechaCita: "", horaCita: "", codigoConsultorio: "", cedula: "" }
];

const TablaCitas = () => {

    return (
        <div className="citasPage">
            <h2>Tabla Citas</h2>
            <div className="search container">
                <div className='container'>
                    <form className='row formulario'>
                        <div className="col formulario">
                            <label >Entre Fechas</label>
                            <input type="text" />
                            <br />
                            <label >Consultorio</label>
                            <input type="text" />
                            <br />
                        </div>
                        <div className="col formulario">
                            <label >Cedula</label>
                            <input type="text" />
                            <br />
                            <label >Nombre</label>
                            <input type="text" />
                            <br />
                        </div>

                        <div className="col">
                            <button type="button" className='btn btn-success btn-sm'>Buscar</button>
                        </div>
                    </form>

                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Codigo de Cita</th>
                        <th scope="col">Fecha de cita</th>
                        <th scope="col">Hora de Cita</th>
                        <th scope="col">Codigo de Consultorio</th>
                        <th scope="col">Documento de Paciente</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {datosList2.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.codigoCita}</td>
                            <td>{item.fechaCita}</td>
                            <td>{item.horaCita}</td>
                            <td>{item.codigoConsultorio}</td>
                            <td>{item.cedula}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );
};

export default TablaCitas;
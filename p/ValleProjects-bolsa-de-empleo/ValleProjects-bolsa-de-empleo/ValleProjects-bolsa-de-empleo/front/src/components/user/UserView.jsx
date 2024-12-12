import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Importa Link para el enrutamiento

const UserView = () => {
    const [jobs, setJobs] = useState([]);
    const [jsonJobs, setJsonJobs] = useState([]);
    const [errorBackend, setErrorBackend] = useState(null);
    const [errorJson, setErrorJson] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Error al cargar los trabajos desde el backend:', error);
                setErrorBackend('No se pudieron cargar los trabajos desde el backend.');
            }
        };

        const fetchJsonJobs = async () => {
            try {
                const response = await fetch('/jobs/jobt.json');
                const data = await response.json();
                setJsonJobs(data);
            } catch (error) {
                console.error('Error al cargar los trabajos desde el JSON:', error);
                setErrorJson('No se pudieron cargar los trabajos desde el archivo JSON.');
            }
        };

        fetchJobs();
        fetchJsonJobs();
    }, []);

    const handleApply = async (jobId) => {
        const token = localStorage.getItem('token');

        if (!token) {
            alert('No estás autenticado. Por favor, inicia sesión.');
            return;
        }

        try {
            await axios.post(
                `http://localhost:5000/api/jobs/${jobId}/apply`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert('Aplicación enviada correctamente');
        } catch (error) {
            console.error('Error al aplicar:', error);
            alert('Error al aplicar al trabajo');
        }
    };

    const JobList = ({ jobs, onApply, isJson = false }) => (
        <div className="flex flex-wrap gap-8 justify-start">
            {jobs.map((job) => (
                <div key={job.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm w-[320px] h-[380px]">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#00102D]">{job.title}</h3>
                    <p className="mb-1 text-black-700"><strong>Empresa:</strong> {job.company}</p>
                    <p className="mb-1 text-black-700"><strong>Ubicación:</strong> {job.location}</p>

                    <p className="mb-3 text-black-700 max-h-24 overflow-hidden text-ellipsis whitespace-nowrap">
                        <strong>Descripción:</strong> {job.description}
                    </p>

                    <p className="mb-3 text-black-700"><strong>Fecha de Creación:</strong> {new Date(job.fechaCreacion).toLocaleDateString()}</p>
                    <div className="mt-auto">
                        {isJson ? (
                            <button
                                onClick={() => alert('Aplicar función no disponible para trabajos del JSON')}
                                className="mt-4 px-6 py-2 bg-[#00102D] text-white rounded-lg hover:bg-[#304976] transition-colors">
                                Aplicar
                            </button>
                        ) : (
                            <button
                                onClick={() => onApply(job.id)}
                                className="mt-4 px-6 py-2 bg-[#00102D] text-white rounded-lg hover:bg-[#304976] transition-colors">
                                Aplicar
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-[#00102D] mb-6">Trabajos Disponibles</h2>
            <div className="space-y-8">
                {/* Sección de trabajos de UDC TALENTO */}
                <div>
                    <h3 className="text-xl font-semibold text-[#00102D] mb-4">UDC TALENTO</h3>
                    {errorBackend ? (
                        <p className="text-red-500">{errorBackend}</p>
                    ) : (
                        <>
                            <JobList jobs={jobs} onApply={handleApply} />
                            <Link to="/empresa/udc-talento" className="mt-4 block text-blue-600 hover:underline">
                                Ver más trabajos de UDC TALENTO
                            </Link>
                        </>
                    )}
                </div>

                {/* Sección de trabajos de ELEMPLEO.COM */}
                <div>
                    <h3 className="text-xl font-semibold text-[#00102D] mb-4">ELEMPLEO.COM</h3>
                    {errorJson ? (
                        <p className="text-red-500">{errorJson}</p>
                    ) : (
                        <>
                            <JobList jobs={jsonJobs} isJson={true} />
                            <Link to="/empresa/elempelo-com" className="mt-4 block text-blue-600 hover:underline">
                                Ver más trabajos de ELEMPLEO.COM
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserView;

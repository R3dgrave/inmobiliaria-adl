import { propiedades_alquiler, propiedades_venta } from "./datos_propiedades.js"

const containerVenta = document.getElementById("container-cards-venta");
const containerAlquiler = document.getElementById("container-cards-alquiler");
const containerAlquileresPagina = document.getElementById("container-pagina-alquileres");
const containerVentaPagina = document.getElementById("container-pagina-ventas");

const crearSlug = (texto) => {
    return texto.toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
}

const renderizarPropiedades = (propiedades, containerElement, numeroPropiedades, tipo) => {
    if (!containerElement) return;

    const btnClass = tipo === 'venta' ? 'btn-outline-primary' : 'btn-outline-success';

    let html = "";
    const totalMostrados = Math.min(numeroPropiedades, propiedades.length);

    for (let i = 0; i < totalMostrados; i++) {
        const propiedad = propiedades[i];
        const slug = crearSlug(propiedad.nombre);

        html += `
            <div class="col">
                <div class="card h-100 shadow-sm border-0 propiedad-card">
                    <div class="position-relative">
                        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" style="height: 220px; object-fit: cover;">
                        <span class="position-absolute top-0 end-0 m-3 badge ${tipo === 'venta' ? 'bg-primary' : 'bg-success'}">
                            ${tipo === 'venta' ? 'Venta' : 'Alquiler'}
                        </span>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold text-dark">${propiedad.nombre}</h5>
                        <p class="card-text text-muted small flex-grow-1">${propiedad.descripcion}</p>
                        
                        <p class="mb-2 small"><i class="fas fa-map-marker-alt text-danger me-2"></i>${propiedad.ubicacion}</p>
                        
                        <div class="d-flex justify-content-between text-muted border-top border-bottom py-2 mb-3">
                            <span class="small"><i class="fas fa-bed me-1 text-primary"></i> ${propiedad.habitaciones} Hab.</span>
                            <span class="small"><i class="fas fa-bath me-1 text-primary"></i> ${propiedad.banos} Baños</span>
                        </div>

                        <p class="h4 fw-bold text-dark mb-3">$${propiedad.costo.toLocaleString('es-CL')}</p>
                        
                        <div class="mb-3">
                            ${propiedad.smoke ?
                '<span class="badge bg-success-subtle text-success border border-success-subtle"><i class="fas fa-smoking me-1"></i>Fumadores OK</span>' :
                '<span class="badge bg-danger-subtle text-danger border border-danger-subtle"><i class="fas fa-smoking-ban me-1"></i>Prohibido Fumar</span>'}
                            
                            ${propiedad.pets ?
                '<span class="badge bg-success-subtle text-success border border-success-subtle"><i class="fas fa-paw me-1"></i>Mascotas OK</span>' :
                '<span class="badge bg-danger-subtle text-danger border border-danger-subtle"><i class="fas fa-ban me-1"></i>No Mascotas</span>'}
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-0 pb-3">
                        <a href="detalle_propiedad.html?tipo=${tipo}&nombre=${slug}" 
                            class="btn ${btnClass} w-100 fw-bold shadow-sm"
                            aria-label="Ver detalles de ${propiedad.nombre}">
                            Ver Detalles
                        </a>
                    </div>
                </div>
            </div>`;
    }
    containerElement.innerHTML = html;
};

const filtrarYRenderizar = (tipo) => {
    const input = document.getElementById(`busqueda-${tipo}`);
    const select = document.getElementById(`filtro-mascotas-${tipo}`);
    const container = tipo === 'venta' ? containerVentaPagina : containerAlquileresPagina;

    if (!input || !select || !container) return;

    const ejecutarFiltro = () => {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"></div>
                <p class="mt-3 fw-bold text-muted">Buscando las mejores opciones...</p>
            </div>`;

        setTimeout(() => {
            const texto = input.value.toLowerCase();
            const opcionMascotas = select.value;
            const listaOriginal = tipo === 'venta' ? propiedades_venta : propiedades_alquiler;

            const resultado = listaOriginal.filter(p => {
                const coincideTexto = p.nombre.toLowerCase().includes(texto) || p.ubicacion.toLowerCase().includes(texto);
                const coincideMascotas = opcionMascotas === 'todos' ||
                    (opcionMascotas === 'si' && p.pets) ||
                    (opcionMascotas === 'no' && !p.pets);
                return coincideTexto && coincideMascotas;
            });

            renderizarPropiedades(resultado, container, resultado.length, tipo);

            if (resultado.length === 0) {
                container.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <i class="fas fa-search fa-4x text-light mb-3"></i>
                        <h3 class="text-muted">No encontramos resultados para tu búsqueda</h3>
                        <p class="text-secondary">Intenta con otros términos o filtros.</p>
                    </div>`;
            }
        }, 400);
    };

    input.addEventListener('input', ejecutarFiltro);
    select.addEventListener('change', ejecutarFiltro);
};

document.addEventListener('DOMContentLoaded', () => {
    filtrarYRenderizar('venta');
    filtrarYRenderizar('alquiler');

    renderizarPropiedades(propiedades_venta, containerVenta, 3, "venta");
    renderizarPropiedades(propiedades_alquiler, containerAlquiler, 3, "alquiler");
    renderizarPropiedades(propiedades_alquiler, containerAlquileresPagina, 6, "alquiler");
    renderizarPropiedades(propiedades_venta, containerVentaPagina, 6, "venta");
});
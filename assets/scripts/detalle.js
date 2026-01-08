import { propiedades_alquiler, propiedades_venta} from "./datos_propiedades.js"

const contenedor = document.getElementById('detalle-contenedor');

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const tipo = params.get('tipo');

const lista = (tipo === 'venta') ? propiedades_venta : propiedades_alquiler;
const propiedad = lista.find(p => p.id === id) || lista[0];

if (propiedad) {
  contenedor.innerHTML = `
        <div class="col-lg-8">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Inicio</a></li>
                    <li class="breadcrumb-item"><a href="propiedades_${tipo}.html">${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</a></li>
                    <li class="breadcrumb-item active">${propiedad.nombre}</li>
                </ol>
            </nav>
            
            <img src="${propiedad.src}" class="img-fluid rounded shadow-sm mb-4 w-100" style="max-height: 500px; object-fit: cover;" alt="${propiedad.nombre}">
            
            <h1 class="fw-bold">${propiedad.nombre}</h1>
            <p class="text-muted fs-5"><i class="fas fa-map-marker-alt me-2 text-primary"></i>${propiedad.ubicacion}</p>
            <hr>
            
            <h4 class="fw-bold mt-4">Descripción</h4>
            <p class="lead text-secondary">${propiedad.descripcion} Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            
            <div class="row mt-4 g-3">
                <div class="col-6 col-md-3 text-center border-end">
                    <i class="fas fa-bed fa-2x text-primary mb-2"></i>
                    <p class="mb-0 fw-bold">${propiedad.habitaciones} Habitaciones</p>
                </div>
                <div class="col-6 col-md-3 text-center border-end">
                    <i class="fas fa-bath fa-2x text-primary mb-2"></i>
                    <p class="mb-0 fw-bold">${propiedad.banos} Baños</p>
                </div>
                <div class="col-6 col-md-3 text-center border-end">
                    <i class="fas fa-smoking fa-2x ${propiedad.smoke ? 'text-success' : 'text-danger'} mb-2"></i>
                    <p class="mb-0 fw-bold">${propiedad.smoke ? 'Fumadores OK' : 'No Fumadores'}</p>
                </div>
                <div class="col-6 col-md-3 text-center">
                    <i class="fas fa-paw fa-2x ${propiedad.pets ? 'text-success' : 'text-danger'} mb-2"></i>
                    <p class="mb-0 fw-bold">${propiedad.pets ? 'Mascotas OK' : 'Sin Mascotas'}</p>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card shadow-sm border-0 sticky-top" style="top: 100px;">
                <div class="card-body p-4">
                    <h3 class="fw-bold text-primary mb-4">$${propiedad.costo.toLocaleString('es-CL')}</h3>
                    <form>
                        <h5 class="fw-bold mb-3">Contactar al Agente</h5>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Nombre completo">
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Correo electrónico">
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="4">Estoy interesado en la propiedad ${propiedad.nombre}...</textarea>
                        </div>
                        <button type="button" class="btn btn-primary w-100 fw-bold btn-lg">Enviar Mensaje</button>
                    </form>
                    <div class="mt-4 pt-3 border-top">
                        <p class="mb-1 fw-bold">Compartir:</p>
                        <div class="d-flex gap-3 fs-4 text-secondary">
                            <i class="fab fa-facebook cursor-pointer"></i>
                            <i class="fab fa-whatsapp cursor-pointer"></i>
                            <i class="fab fa-twitter cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
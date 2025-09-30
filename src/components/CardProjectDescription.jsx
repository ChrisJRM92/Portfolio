import './styles/CardProjectDescription.scss'

const CardProjectDescription = () => {
    return (
        <div className='card_project_description'>
            <h2>Descripción</h2>
            <p>Plataforma de gestión de pedidos de importacion de productos de clientes.</p>
            <br />
            <h3>Caracteristicas:</h3>
            <p>- Registro e inicio de sesión de usuarios.</p>
            <p>- Estados de pedidos.</p>
            <p>- Uso de Roles para clientes, colaboradores y administradores.</p>
            <p>- Uso de Mui Componets</p>
            <p>- JWT para autenticación, API REST para comunicación cliente-servidor.</p>
            <p>- AWS S3 para almacenamiento de comprobantes de compras.</p>
            <br />
            <p><b>Frontend:</b> React, HTML, SCSS</p>
            <p><b>Backend:</b> Node.js + Express.</p>
            <p><b>Base de datos:</b> PostgreSQL.</p>

            
        </div>
    )
}

export default CardProjectDescription
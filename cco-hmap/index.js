// Product Constructor
class Product {
    constructor(name, set, sol, ramal) {
        this.name = name;
        this.set = set;
        this.sol = sol;
        this.ramal = ramal;
    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-6">
                <div class="card-body">
                    <strong> SERVIÇO:</strong> ${product.name}
                    <strong>- SETOR:</strong> ${product.set} 
                    <strong>- SOLICITANTE:</strong> ${product.sol} 
                    <strong>- CONTATO:</strong> ${product.ramal}

                    <a href="#" class="btn btn-danger" name="delete">EXCLUIR</a>
        
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {

        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Requisição deletada com sucesso', 'success');
        }
    }



    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        // Show in The DOM

        const container = document.querySelector('.container');
        const app = document.querySelector('#App');

        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events

document.getElementById('product-form')
    .addEventListener('submit', function(e) {

        const name = document.getElementById('name').value,
            set = document.getElementById('set').value,
            sol = document.getElementById('sol').value;
        ramal = document.getElementById('ramal').value;





        // Create a new Oject Product
        const product = new Product(name, set, sol, ramal);

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (name === '' || set === '' || sol === '') {
            ui.showMessage('Por favor, adicione os dados que estão faltando!', 'danger');
        }

        // Save Product
        ui.addProduct(product);
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function(e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });
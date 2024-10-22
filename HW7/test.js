const person = [
    {
        'name': 'Bob',
        'address': '1234 Elm St.',
        'age': 25
    }, 
    {
        'name': 'Alice',
        'address': '5678 Oak St.',
        'age': 35
    },
    {
        'name': 'Charlie',
        'address': '91011 Pine St.',
        'age': 45
    }
];

function displayPersons() {
    var container = document.getElementById('card-container');
    container.innerHTML = '';

    person.forEach(function(data) {
        var card = `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">Address: ${data.address}</p>
                        <p class="card-text">Age: ${data.age}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

displayPersons();
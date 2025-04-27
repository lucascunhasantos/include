function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');

    modalContent.innerHTML = '<span class="close-button" onclick="closeModal()">&times;</span>';

    if (projectId === 'project1') {
        modalContent.className = 'modal-content single';
        const img = document.createElement('img');
        img.src = 'assets/aprova_analista_de_requisitos.png';
        modalContent.appendChild(img);

    } else if (projectId === 'project2') {
        modalContent.className = 'modal-content single';
        const img = document.createElement('img');
        img.src = 'assets/aprova_gerente_de_projetos.png';
        modalContent.appendChild(img);

    } else if (projectId === 'doc') {
        modalContent.className = 'modal-content double';
        const img1 = document.createElement('img');
        img1.src = 'assets/curriculo1.png';
        const img2 = document.createElement('img');
        img2.src = 'assets/curriculo2.png';
        modalContent.appendChild(img1);
        modalContent.appendChild(img2);
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

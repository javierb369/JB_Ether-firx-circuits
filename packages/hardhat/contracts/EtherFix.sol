// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract EtherFix {
    struct Repair {
        uint256 id;
        address client;
        string description;
        uint256 price;
        bool isCompleted;
        bool isPaid;
    }

    uint256 public nextRepairId;
    mapping(uint256 => Repair) public repairs;
    
    // Variable para el dueño (técnico) que recibirá los pagos
    address public immutable owner;

    event RepairCreated(uint256 id, address client, uint256 price);
    event RepairFinished(uint256 id);

    constructor() {
        owner = msg.sender; // El que despliega el contrato es el técnico
    }

    // El cliente crea una solicitud enviando el pago (msg.value)
    function createRepair(string memory _description) public payable {
        require(msg.value > 0, "El precio debe ser mayor a 0");

        repairs[nextRepairId] = Repair({
            id: nextRepairId,
            client: msg.sender,
            description: _description,
            price: msg.value,
            isCompleted: false,
            isPaid: false
        });

        emit RepairCreated(nextRepairId, msg.sender, msg.value);
        nextRepairId++;
    }

    // El técnico marca como finalizado y cobra
    function completeRepair(uint256 _id) public {
        Repair storage repair = repairs[_id];
        require(!repair.isCompleted, "Ya esta completada");
        require(msg.sender == owner, "Solo el tecnico puede marcar como completado");
        
        repair.isCompleted = true;
        repair.isPaid = true;

        // CORRECCIÓN LÍNEAS 41-44:
        // Usamos una dirección payable para transferir los fondos al dueño
        (bool success, ) = payable(owner).call{value: repair.price}("");
        require(success, "La transferencia fallo");

        emit RepairFinished(_id);
    }

    // Función para recibir fondos directamente (opcional)
    receive() external payable {}
    // Función para pagar una video-asesoría (por ejemplo, 0.05 ETH)
function payVideoConsultation() public payable {
    require(msg.value >= 0.05 ether, "Pago insuficiente para asesoria");
    // Aquí podrías emitir un evento si quieres registrarlo
}
}


import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployEtherFix: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("EtherFix", { // Este es el nombre con el que se registrará el despliegue
    from: deployer,
    contract: "contracts/EtherFix.sol:EtherFix", // <--- CAMBIO CLAVE: Ruta completa + Nombre
    args: [],
    log: true,
    autoMine: true,
  });

  // Versión mejorada de la línea 19:
  // Solo intentamos obtenerlo si realmente necesitamos hacer algo con él después
  const etherFix = await hre.deployments.get("EtherFix");
  
  console.log("🚀 Contrato EtherFix desplegado en la dirección:", etherFix.address);
};

export default deployEtherFix;
deployEtherFix.tags = ["EtherFix"];

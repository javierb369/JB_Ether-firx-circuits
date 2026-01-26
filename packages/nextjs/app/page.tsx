"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { useScaffoldReadContract, useScaffoldWriteContract, useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const [descripcion, setDescripcion] = useState("");

  const { data: totalReparaciones } = useScaffoldReadContract({
    contractName: "EtherFix",
    functionName: "nextRepairId",
  });

  const { writeContractAsync: crearReparacion } = useScaffoldWriteContract("EtherFix");

  // Lee el historial de eventos "RepairCreated" de la Blockchain
  const { data: historialEventos, isLoading: cargandoHistorial } = useScaffoldEventHistory({
    contractName: "EtherFix",
    eventName: "RepairCreated",
    fromBlock: 0n,
  });

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 text-center">
        <h1 className="mb-8">
          <span className="block text-5xl font-bold text-primary italic">EtherFix Circuits 🚀</span>
          <span className="text-sm opacity-70">Sistema de Gestión de Hardware en Blockchain</span>
        </h1>
        
        <div className="flex flex-col items-center gap-4 mb-10 bg-base-200 p-8 rounded-3xl shadow-xl border border-primary/20">
          <h3 className="text-xl font-bold">Nueva Orden de Servicio</h3>
          <input
            type="text"
            placeholder="Falla y posible solución (ej: Pantalla azul - Reinstalar SO)"
            className="input input-bordered input-primary w-full max-md text-center"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <button 
            className="btn btn-primary btn-wide"
            disabled={!descripcion}
            onClick={async () => {
              try {
                await crearReparacion({
                  functionName: "createRepair",
                  args: [descripcion],
                  value: BigInt(100000000000000000n),
                });
                setDescripcion("");
              } catch (e) { console.error(e); }
            }}
          >
            🔧 Registrar en Bitácora
          </button>
        </div>
      </div>

      {/* BITÁCORA DE REPARACIONES */}
      <div className="w-full max-w-5xl px-8 mb-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          📑 Historial de Servicios (On-Chain)
        </h2>
        <div className="overflow-x-auto bg-base-100 rounded-xl shadow-2xl border border-base-300">
          <table className="table table-zebra w-full">
            <thead className="bg-primary text-primary-content">
              <tr>
                <th>ID</th>
                <th>Fecha / Hora</th>
                <th>Técnico (Cliente)</th>
                <th>Descripción de Falla y Solución</th>
              </tr>
            </thead>
            <tbody>
              {cargandoHistorial ? (
                <tr><td colSpan={4} className="text-center">Cargando datos...</td></tr>
              ) : (
                historialEventos?.map((evento, index) => (
                  <tr key={index} className="hover">
                    <th className="text-primary">{evento.args.repairId?.toString()}</th>
                    <td className="text-xs">
                      {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}
                    </td>
                    <td className="text-xs font-mono">{evento.args.customer?.slice(0,6)}...{evento.args.customer?.slice(-4)}</td>
                    <td className="font-medium">{evento.args.description}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {!historialEventos?.length && !cargandoHistorial && (
            <p className="text-center py-10 opacity-50">No hay registros todavía.</p>
          )}
        </div>
      </div>

      {/* SECCIÓN MULTIMEDIA DOBLE (YouTube + Drive) */}
      <div className="w-full max-w-6xl px-8 mb-20">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          🎥 Centro de Asesoría Multimedia
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* VIDEO 1: YouTube */}
          <div className="card bg-base-200 shadow-xl border border-primary/20 overflow-hidden">
            <div className="h-[250px]">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/f7Q7L_9_9sY" 
                title="Tutorial General"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="card-body p-4">
              <h3 className="card-title text-sm italic">Guía de Electrónica General</h3>
              <p className="text-xs opacity-70">Conceptos base para el diagnóstico de circuitos.</p>
            </div>
          </div>

          {/* VIDEO 2: Acceso a Drive */}
          <div className="card bg-base-200 shadow-xl border border-secondary/20 overflow-hidden">
            <div className="h-[250px] bg-slate-800 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-5xl mb-4">📂</div>
              <h3 className="text-lg font-bold text-white mb-2">Videomanual Exclusivo</h3>
              <p className="text-xs text-slate-300 mb-4">Caso Real: Reparación de Circuitos EtherFix</p>
              <a 
                href="https://drive.google.com/file/d/1FYzSYwGgu5SkiBcRBy6XGZX53KH-VF6R/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-secondary btn-sm"
              >
                ▶️ Ver Video en Drive
              </a>
            </div>
            <div className="card-body p-4">
              <h3 className="card-title text-sm text-secondary italic">Anexo Técnico</h3>
              <p className="text-xs opacity-70 mb-2">Acceso directo a la nube para máxima compatibilidad.</p>
              <div className="card-actions justify-end">
                <button 
                  className="btn btn-primary btn-sm shadow-lg"
                  onClick={async () => {
                    try {
                      await crearReparacion({
                        functionName: "payVideoConsultation",
                        value: BigInt(50000000000000000n), // 0.05 ETH
                      });
                      window.alert("¡Pago exitoso! Acceso concedido.");
                    } catch (e) {
                      console.error("Error:", e);
                    }
                  }}
                >
                  💳 Pagar Asesoría (0.05 ETH)
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;

